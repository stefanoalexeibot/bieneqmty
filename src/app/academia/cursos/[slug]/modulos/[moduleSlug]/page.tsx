import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, BookOpen, Clock3, FileText, PlayCircle, Sparkles } from "lucide-react";
import { getAcademyCourse } from "@/lib/academy";
import { getAcademyPresentation } from "@/lib/academy-presentations";

export async function generateMetadata({ params }: { params: Promise<{ slug: string; moduleSlug: string }> }): Promise<Metadata> {
  const { slug, moduleSlug } = await params;
  const course = getAcademyCourse(slug);
  const module = course?.modules.find((item) => item.slug === moduleSlug);
  return { title: module ? module.title : "Módulo no encontrado", description: module?.summary };
}

export default async function AcademyModulePage({ params }: { params: Promise<{ slug: string; moduleSlug: string }> }) {
  const { slug, moduleSlug } = await params;
  const course = getAcademyCourse(slug);
  const module = course?.modules.find((item) => item.slug === moduleSlug);
  if (!course || !module) notFound();
  const moduleIndex = course.modules.findIndex((item) => item.slug === moduleSlug) + 1;
  const presentation = getAcademyPresentation(course.slug, module.slug);
  return (
    <main className="min-h-screen bg-[#f5f4ed] px-5 pb-24 pt-32 text-[#26382c] sm:px-8 md:pt-40">
      <div className="mx-auto max-w-5xl">
        <Link href={`/academia/cursos/${course.slug}#temario`} className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#728070] transition hover:text-[#254534]"><ArrowLeft className="h-4 w-4" />{course.shortTitle}</Link>
        <header className="overflow-hidden rounded-[2rem] bg-[#e8ece3] px-7 py-9 md:px-12 md:py-12"><div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#718866]"><span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/75 text-[#526c4c]"><BookOpen className="h-4 w-4" /></span>{course.shortTitle} · Módulo {String(moduleIndex).padStart(2, "0")}</div><h1 className="mt-6 max-w-4xl font-heading text-4xl leading-tight text-[#24392d] md:text-6xl">{module.title}</h1><p className="mt-4 max-w-3xl text-sm leading-7 text-[#647164] md:text-base">{module.summary}</p><div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#728070]"><span className="inline-flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#718866]" />{module.lessons.length} lecciones</span><span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#718866]" />Lecciones breves y demostraciones</span></div></header>
        {presentation ? <section className="mt-8 flex flex-wrap items-center justify-between gap-5 rounded-[1.5rem] border border-[#dfe4da] bg-white/75 p-6 md:p-8"><div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8ece3] text-[#526c4c]"><FileText className="h-5 w-5" /></span><div><p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#718866]">Teoría del módulo</p><h2 className="mt-1 font-heading text-xl text-[#2a3e30]">{presentation.title}</h2><p className="mt-1.5 max-w-xl text-xs leading-5 text-[#798378]">Una presentación para proyectar durante la grabación y consultar junto al video dentro del aula.</p></div></div><Link href={`/academia/proyector/${course.slug}/${module.slug}`} className="inline-flex items-center gap-2 rounded-full bg-[#254534] px-5 py-3 text-[10px] font-semibold text-white transition hover:bg-[#183324]">Abrir presentación<ArrowUpRight className="h-3.5 w-3.5" /></Link></section> : null}
        <section className="mt-10"><div className="mb-5"><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#718866]">Dentro del módulo</p><h2 className="mt-2 font-heading text-3xl text-[#26382c]">Lecciones</h2></div><div className="space-y-3">{module.lessons.map((lesson, index) => <Link key={lesson.id} href={`/academia/aula/${course.slug}/${module.slug}/${lesson.id}`} className="group grid gap-4 rounded-2xl border border-[#e3e5dc] bg-white/80 p-5 transition hover:-translate-y-0.5 hover:border-[#c5d2bd] hover:bg-white hover:shadow-[0_14px_35px_rgba(36,57,42,0.08)] sm:grid-cols-[52px_1fr_auto] sm:items-center md:p-6"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf0e9] font-semibold text-xs tracking-[0.08em] text-[#526c4c]">{String(index + 1).padStart(2, "0")}</span><div><div className="flex flex-wrap items-center gap-2"><h3 className="font-heading text-lg text-[#2a3e30] md:text-xl">{lesson.title}</h3>{lesson.bonus ? <span className="inline-flex items-center gap-1 rounded-full bg-[#f4eee0] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#9a7131]"><Sparkles className="h-3 w-3" />Bonus</span> : null}</div><p className="mt-1.5 text-xs leading-5 text-[#798378]">{lesson.format}</p><span className="mt-2 inline-flex items-center gap-1.5 text-[9px] font-semibold text-[#718866]">Video y presentación de teoría<ArrowUpRight className="h-3 w-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span></div><div className="flex items-center gap-2 text-xs text-[#758174]"><Clock3 className="h-3.5 w-3.5" />{lesson.duration}</div></Link>)}</div></section>
        <div className="mt-8 flex gap-4 rounded-2xl border border-[#dfe3da] bg-white/60 p-5 text-sm leading-6 text-[#69756a]"><PlayCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#718866]" /><p>El reproductor, el acceso de alumnos y el avance guardado se incorporarán en una siguiente etapa. Esta vista presenta la estructura académica del módulo.</p></div>
        <p className="mt-4 text-xs leading-5 text-[#80887d]">Los contenidos sobre salud, nutrición y procedimientos requieren revisión profesional antes de su publicación.</p>
      </div>
    </main>
  );
}
