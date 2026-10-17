import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PresentationPlayer } from "@/components/academy/presentation-player";
import { getAcademyCourse } from "@/lib/academy";
import { getAcademyPresentation } from "@/lib/academy-presentations";

export async function generateMetadata({ params }: { params: Promise<{ courseSlug: string; moduleSlug: string }> }): Promise<Metadata> {
  const { courseSlug, moduleSlug } = await params;
  const course = getAcademyCourse(courseSlug);
  const module = course?.modules.find((item) => item.slug === moduleSlug);
  const presentation = course && module ? getAcademyPresentation(course.slug, module.slug) : undefined;
  return { title: presentation?.title ?? "Presentación de teoría" };
}

export default async function AcademyProjectorPage({ params }: { params: Promise<{ courseSlug: string; moduleSlug: string }> }) {
  const { courseSlug, moduleSlug } = await params;
  const course = getAcademyCourse(courseSlug);
  const module = course?.modules.find((item) => item.slug === moduleSlug);
  if (!course || !module) notFound();
  const presentation = getAcademyPresentation(course.slug, module.slug);
  if (!presentation) notFound();

  return (
    <main className="min-h-screen bg-[#14241b] px-4 py-5 text-white sm:px-8 sm:py-7">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <Link href={`/academia/cursos/${course.slug}/modulos/${module.slug}`} className="inline-flex items-center gap-2 text-xs font-medium text-white/65 transition hover:text-white"><ArrowLeft className="h-4 w-4" />{course.shortTitle} · {module.title}</Link>
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#b7c9aa]">Modo proyector · Academia BieneqMty</p>
        </div>
        <h1 className="sr-only">{presentation.title}</h1>
        <PresentationPlayer presentation={presentation} courseTitle={course.title} courseShortTitle={course.shortTitle} mode="projector" />
      </div>
    </main>
  );
}
