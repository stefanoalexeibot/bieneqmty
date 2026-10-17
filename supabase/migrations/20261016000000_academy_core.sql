-- Core Academy records. Curriculum remains versioned in src/lib/academy.ts for now.
create type public.academy_enrollment_status as enum (
  'pending_payment',
  'active',
  'refunded',
  'revoked'
);

create table public.academy_profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text not null default '',
  email text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.academy_enrollments (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.academy_profiles (id) on delete cascade,
  course_slug text not null,
  status public.academy_enrollment_status not null default 'pending_payment',
  stripe_checkout_session_id text unique,
  enrolled_at timestamptz,
  access_ends_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (student_id, course_slug)
);

create index academy_enrollments_student_status_idx
  on public.academy_enrollments (student_id, status);

create table public.academy_lesson_progress (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.academy_profiles (id) on delete cascade,
  course_slug text not null,
  module_slug text not null,
  lesson_id text not null,
  status text not null default 'not_started'
    check (status in ('not_started', 'in_progress', 'completed')),
  watched_seconds integer not null default 0 check (watched_seconds >= 0),
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  unique (student_id, course_slug, module_slug, lesson_id)
);

create index academy_lesson_progress_student_course_idx
  on public.academy_lesson_progress (student_id, course_slug);

-- Playback IDs are private metadata. The browser receives a short-lived signed token
-- from a server endpoint only after the server confirms an active enrollment.
create table public.academy_video_assets (
  id uuid primary key default gen_random_uuid(),
  course_slug text not null,
  module_slug text not null,
  lesson_id text not null,
  provider text not null default 'mux' check (provider = 'mux'),
  playback_id text not null unique,
  state text not null default 'draft' check (state in ('draft', 'ready', 'archived')),
  created_at timestamptz not null default now(),
  unique (course_slug, module_slug, lesson_id)
);

-- Stripe event IDs make webhook fulfillment idempotent.
create table public.academy_stripe_events (
  stripe_event_id text primary key,
  event_type text not null,
  processed_at timestamptz not null default now()
);

alter table public.academy_profiles enable row level security;
alter table public.academy_enrollments enable row level security;
alter table public.academy_lesson_progress enable row level security;
alter table public.academy_video_assets enable row level security;
alter table public.academy_stripe_events enable row level security;

revoke all on public.academy_profiles,
  public.academy_enrollments,
  public.academy_lesson_progress,
  public.academy_video_assets,
  public.academy_stripe_events from anon, authenticated;

grant select on public.academy_profiles to authenticated;
grant update (full_name) on public.academy_profiles to authenticated;
grant select on public.academy_enrollments to authenticated;
grant select, insert, update on public.academy_lesson_progress to authenticated;
grant all on public.academy_profiles,
  public.academy_enrollments,
  public.academy_lesson_progress,
  public.academy_video_assets,
  public.academy_stripe_events to service_role;

create policy "Students can read their own profile"
  on public.academy_profiles for select to authenticated
  using ((select auth.uid()) = id);

create policy "Students can update their own profile"
  on public.academy_profiles for update to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

create policy "Students can read their own enrollments"
  on public.academy_enrollments for select to authenticated
  using ((select auth.uid()) = student_id);

create policy "Students can read progress for active enrollments"
  on public.academy_lesson_progress for select to authenticated
  using (
    (select auth.uid()) = student_id
    and exists (
      select 1 from public.academy_enrollments enrollment
      where enrollment.student_id = (select auth.uid())
        and enrollment.course_slug = academy_lesson_progress.course_slug
        and enrollment.status = 'active'
    )
  );

create policy "Students can create progress for active enrollments"
  on public.academy_lesson_progress for insert to authenticated
  with check (
    (select auth.uid()) = student_id
    and exists (
      select 1 from public.academy_enrollments enrollment
      where enrollment.student_id = (select auth.uid())
        and enrollment.course_slug = academy_lesson_progress.course_slug
        and enrollment.status = 'active'
    )
  );

create policy "Students can update progress for active enrollments"
  on public.academy_lesson_progress for update to authenticated
  using (
    (select auth.uid()) = student_id
    and exists (
      select 1 from public.academy_enrollments enrollment
      where enrollment.student_id = (select auth.uid())
        and enrollment.course_slug = academy_lesson_progress.course_slug
        and enrollment.status = 'active'
    )
  )
  with check (
    (select auth.uid()) = student_id
    and exists (
      select 1 from public.academy_enrollments enrollment
      where enrollment.student_id = (select auth.uid())
        and enrollment.course_slug = academy_lesson_progress.course_slug
        and enrollment.status = 'active'
    )
  );

create function public.create_academy_profile_for_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.academy_profiles (id, full_name, email)
  values (
    new.id,
    coalesce(nullif(new.raw_user_meta_data ->> 'full_name', ''), ''),
    new.email
  )
  on conflict (id) do update
    set email = excluded.email;
  return new;
end;
$$;

create trigger on_auth_user_created_academy_profile
  after insert on auth.users
  for each row execute procedure public.create_academy_profile_for_new_user();
