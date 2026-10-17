import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Clock3 } from "lucide-react";
import { getAcademyCourse } from "@/lib/academy";
import { getAcademyPresentation } from "@/lib/academy-presentations";
import { LessonStudyModes } from "@/components/academy/lesson-study-modes";

export async function generateMetadata({ params }: { params: Promise<{ slug: string; moduleSlug: string; lessonId: string }> }) {
  const { slug, moduleSlug, lessonId } = await params;
  const course = getAcademyCourse(slug);
  const module = course?.modules.find((item) => item.slug === moduleSlug);
  const lesson = module?.lessons.find((item) => item.id === lessonId);
  return { title: lesson?.title ?? "Lección" };
}

export default async function AcademyLessonPage({ params }: { params: Promise<{ slug: string; moduleSlug: string; lessonId: string }> }) {
  const { slug, moduleSlug, lessonId } = await params;
  const course = getAcademyCourse(slug);
  if (!course) notFound();
  const module = course.modules.find((item) => item.slug === moduleSlug);
  if (!module) notFound();
  const lesson = module.lessons.find((item) => item.id === lessonId);
  if (!lesson) notFound();
  const lessons = course.modules.flatMap((item) => item.lessons.map((entry) => ({ ...entry, moduleSlug: item.slug, moduleTitle: item.title })));
  const lessonIndex = lessons.findIndex((entry) => entry.id === lesson.id && entry.moduleSlug === module.slug);
  const previous = lessons[lessonIndex - 1];
  const next = lessons[lessonIndex + 1];
  const lessonHref = (item: (typeof lessons)[number]) => `/academia/aula/${course.slug}/${item.moduleSlug}/${item.id}`;

  return (
    <main>
      <Link href="/academia/mi-aprendizaje" className="mb-5 inline-flex items-center gap-2 text-xs font-medium text-[#728070] transition hover:text-[#254534]"><ArrowLeft className="h-4 w-4" />Mi aprendizaje</Link>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3"><div><p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#718866]">{course.shortTitle} <span className="px-1 text-[#b5bcb0]">/</span> {module.title}</p><h1 className="mt-2 font-heading text-3xl leading-tight text-[#26382c] md:text-4xl">{lesson.title}</h1></div><span className="inline-flex items-center gap-2 rounded-full border border-[#e1e5dc] bg-white/70 px-3 py-2 text-[10px] text-[#7b857a]"><Clock3 className="h-3.5 w-3.5 text-[#718866]" />{lesson.duration}</span></div>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_330px]">
        <section>
          <LessonStudyModes course={course} module={module} lesson={lesson} presentation={getAcademyPresentation(course.slug, module.slug)} />
          <div className="mt-5 rounded-2xl border border-[#e1e5dc] bg-white/75 p-5 md:p-6"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#718866]">Lección {lesson.id}</p><h2 className="mt-2 font-heading text-xl text-[#34493a]">{lesson.title}</h2><p className="mt-2 text-xs leading-5 text-[#758174]">{lesson.format}</p></div><button disabled className="inline-flex items-center gap-2 rounded-full border border-[#e0e4db] bg-[#f4f5f0] px-4 py-2.5 text-[10px] font-semibold text-[#969d92]" title="El avance se guardará al activar cuentas de alumnos"><Check className="h-3.5 w-3.5" />Marcar como completada</button></div><p className="mt-5 border-t border-[#eceee8] pt-4 text-xs leading-5 text-[#7b857a]">El avance de lecciones se guardará en tu cuenta cuando esté activa la plataforma para alumnos.</p></div>
          <div className="mt-5 flex items-center justify-between gap-3">{previous ? <Link href={lessonHref(previous)} className="inline-flex items-center gap-2 rounded-full border border-[#dfe4da] bg-white/70 px-4 py-2.5 text-[10px] font-semibold text-[#60715d] hover:bg-white"><ArrowLeft className="h-3.5 w-3.5" />Lección anterior</Link> : <span />}{next ? <Link href={lessonHref(next)} className="inline-flex items-center gap-2 rounded-full bg-[#254534] px-4 py-2.5 text-[10px] font-semibold text-white hover:bg-[#183324]">Siguiente lección<ArrowRight className="h-3.5 w-3.5" /></Link> : <Link href={`/academia/cursos/${course.slug}`} className="inline-flex items-center gap-2 rounded-full bg-[#254534] px-4 py-2.5 text-[10px] font-semibold text-white hover:bg-[#183324]">Volver al programa<ArrowRight className="h-3.5 w-3.5" /></Link>}</div>
        </section>
        <aside className="overflow-hidden rounded-2xl border border-[#e1e5dc] bg-white/75"><div className="border-b border-[#e9ece5] px-5 py-4"><p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#718866]">Contenido del programa</p><h2 className="mt-1 font-heading text-lg text-[#34493a]">{course.shortTitle}</h2></div><div className="max-h-[680px] overflow-y-auto">{course.modules.map((item, moduleIndex) => <div key={item.slug} className="border-b border-[#edf0ea] last:border-b-0"><div className="bg-[#f6f7f2] px-5 py-3"><p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#74836f]">Módulo {String(moduleIndex + 1).padStart(2, "0")}</p><p className="mt-1 text-xs font-semibold text-[#485e4b]">{item.title}</p></div><div className="p-2">{item.lessons.map((itemLesson) => { const active = itemLesson.id === lesson.id && item.slug === module.slug; return <Link key={itemLesson.id} href={`/academia/aula/${course.slug}/${item.slug}/${itemLesson.id}`} className={`flex items-start gap-3 rounded-xl px-3 py-3 transition ${active ? "bg-[#e8ece3]" : "hover:bg-[#f5f6f1]"}`}><span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[8px] font-semibold ${active ? "bg-[#254534] text-white" : "bg-[#eef1eb] text-[#82907c]"}`}>{itemLesson.id.slice(-2)}</span><span className={`text-[10px] leading-4 ${active ? "font-semibold text-[#34493a]" : "text-[#707b70]"}`}>{itemLesson.title}</span></Link>; })}</div></div>)}</div></aside>
      </div>
    </main>
  );
}
