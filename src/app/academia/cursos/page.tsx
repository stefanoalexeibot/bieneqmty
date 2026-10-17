import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpenCheck } from "lucide-react";
import { CourseCard } from "@/components/academy/course-card";
import { academyCourses } from "@/lib/academy";

export const metadata: Metadata = { title: "Cursos de la Academia", description: "Explora los cursos de bienestar equino, anatomía del casco y barefoot de BieneqMty." };

export default function CourseCatalogPage() {
  return (
    <main className="min-h-screen bg-[#f5f4ed] px-5 pb-24 pt-32 text-[#26382c] sm:px-8 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <Link href="/academia" className="mb-9 inline-flex items-center gap-2 text-sm font-medium text-[#728070] transition hover:text-[#254534]"><ArrowLeft className="h-4 w-4" />Academia</Link>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#e8ece3] px-7 py-10 md:px-12 md:py-14">
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#d5ddcf]" /><div className="absolute -right-4 -top-12 h-52 w-52 rounded-full border border-[#d5ddcf]" />
          <div className="relative max-w-3xl"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 text-[#597453]"><BookOpenCheck className="h-5 w-5" /></div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#718866]">Catálogo de formación</p><h1 className="font-heading text-4xl leading-tight text-[#24392d] sm:text-5xl md:text-6xl">Aprende a tu ritmo.<br /><span className="italic text-[#718866]">Avanza con criterio.</span></h1><p className="mt-5 max-w-2xl text-base leading-7 text-[#647164]">Elige una ruta según tu experiencia e interés. Revisa los objetivos, duración y temario de cada programa.</p></div>
        </div>
        <div className="mb-6 mt-12 flex items-end justify-between gap-4"><div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#718866]">Programas</p><h2 className="mt-2 font-heading text-3xl text-[#26382c]">Elige tu punto de partida</h2></div><p className="hidden text-sm text-[#758174] sm:block">{academyCourses.length} rutas de aprendizaje</p></div>
        <div className="grid gap-5 lg:grid-cols-3">{academyCourses.map((course, index) => <CourseCard key={course.slug} course={course} featured={index === 1} />)}</div>
        <div className="mt-8 rounded-2xl border border-[#e3e5dc] bg-white/65 px-5 py-4 text-sm leading-6 text-[#707a6f]">El acceso de alumnos, el progreso guardado y los pagos se incorporarán en una etapa posterior. Por ahora, esta sección presenta la estructura académica pública.</div>
      </div>
    </main>
  );
}
