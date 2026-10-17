import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Clock3, GraduationCap, Layers3 } from "lucide-react";
import { getAcademyCourse } from "@/lib/academy";

const courseArt: Record<string, string> = { "anatomia-del-casco": "/images/TEORICO/DSC04906.JPG", "barefoot-integral": "/images/PRACTICA/PRACTICA4.jpg", "barefoot-integral-pro": "/images/INSTALACIONES/ESTUDIOTEORIA1.jpeg" };

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getAcademyCourse(slug);
  return { title: course ? course.title : "Curso no encontrado", description: course?.description };
}

export default async function AcademyCoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getAcademyCourse(slug);
  if (!course) notFound();
  const lessonCount = course.modules.reduce((sum, module) => sum + module.lessons.length, 0);
  return (
    <main className="min-h-screen bg-[#f5f4ed] px-5 pb-24 pt-32 text-[#26382c] sm:px-8 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <Link href="/academia/cursos" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#728070] transition hover:text-[#254534]"><ArrowLeft className="h-4 w-4" />Todos los programas</Link>
        <section className="grid overflow-hidden rounded-[2rem] bg-[#254534] text-white lg:grid-cols-[1.15fr_0.85fr]">
          <div className="px-7 py-9 md:px-12 md:py-12"><p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c6d7bd]">{course.level}{course.status === "upcoming" ? " · Próximamente" : " · Academia BieneqMty"}</p><h1 className="max-w-3xl font-heading text-4xl leading-[1.08] md:text-6xl">{course.title}</h1><p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">{course.description}</p><div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-xs text-white/75"><span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#c6d7bd]" />{course.duration}</span><span className="inline-flex items-center gap-2"><GraduationCap className="h-4 w-4 text-[#c6d7bd]" />José Manuel Luna</span></div>{course.status === "available" ? <div className="mt-6 flex flex-wrap gap-3"><Link href={`/academia/checkout/${course.slug}`} className="inline-flex items-center gap-2 rounded-full bg-[#e7ebdf] px-5 py-3 text-xs font-semibold text-[#254534] transition hover:bg-white">Inscribirme<ArrowRight className="h-4 w-4" /></Link><Link href={`/academia/ingresar?curso=${course.slug}`} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-xs font-semibold text-white transition hover:bg-white/10">Ya tengo cuenta</Link></div> : null}</div>
          <div className="relative min-h-[260px] bg-[#d5ddcf] lg:min-h-[430px]"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${courseArt[course.slug] ?? courseArt["anatomia-del-casco"]}')` }} /><div className="absolute inset-0 bg-gradient-to-t from-[#10271c]/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#254534]/25 lg:to-transparent" /><div className="absolute bottom-6 left-6 flex gap-3"><div className="rounded-2xl border border-white/30 bg-[#183324]/55 px-4 py-3 backdrop-blur"><p className="font-heading text-2xl">{course.modules.length}</p><p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/75">Módulos</p></div><div className="rounded-2xl border border-white/30 bg-[#183324]/55 px-4 py-3 backdrop-blur"><p className="font-heading text-2xl">{lessonCount}</p><p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/75">Lecciones</p></div></div></div>
        </section>
        <section className="grid gap-10 py-12 lg:grid-cols-[1fr_330px] lg:gap-16 lg:py-16">
          <div><div className="mb-12"><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#718866]">Al terminar podrás</p><h2 className="mt-2 font-heading text-3xl text-[#26382c] md:text-4xl">Qué aprenderás</h2><ul className="mt-6 grid gap-4 sm:grid-cols-2">{course.outcomes.map((outcome) => <li key={outcome} className="flex gap-3 rounded-2xl border border-[#e3e5dc] bg-white/75 p-4 text-sm leading-6 text-[#5f6e61]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#718866]" />{outcome}</li>)}</ul></div>
            <div id="temario" className="scroll-mt-28"><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#718866]">Contenido del curso</p><h2 className="mt-2 font-heading text-3xl text-[#26382c] md:text-4xl">Temario</h2><p className="mt-3 text-sm leading-6 text-[#69756a]">Explora los módulos para conocer las lecciones y su formato.</p><div className="mt-6 space-y-3">{course.modules.map((module, index) => <Link key={module.slug} href={`/academia/cursos/${course.slug}/modulos/${module.slug}`} className="group flex items-center justify-between gap-5 rounded-2xl border border-[#e3e5dc] bg-white/80 p-5 transition hover:border-[#b7c8ae] hover:shadow-[0_12px_30px_rgba(36,57,42,0.07)] md:p-6"><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#718866]">Módulo {String(index + 1).padStart(2, "0")}{module.lessons.some((lesson) => lesson.bonus) ? " · Bonus" : ""}</p><h3 className="mt-2 font-heading text-xl text-[#2a3e30] md:text-2xl">{module.title}</h3><p className="mt-2 text-sm leading-6 text-[#69756a]">{module.summary}</p><p className="mt-3 inline-flex items-center gap-2 text-xs text-[#7b857a]"><Layers3 className="h-3.5 w-3.5" />{module.lessons.length} lecciones</p></div><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edf0e9] text-[#526c4c] transition group-hover:bg-[#254534] group-hover:text-white"><ArrowRight className="h-4 w-4" /></span></Link>)}</div></div>
          </div>
          <aside className="space-y-4"><div className="rounded-2xl border border-[#e3e5dc] bg-white/80 p-6"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#718866]">Ideal para</p><h2 className="mt-2 font-heading text-xl text-[#26382c]">A quién está dirigido</h2><p className="mt-3 text-sm leading-6 text-[#69756a]">{course.audience}</p></div><div className="rounded-2xl border border-[#e3e5dc] bg-white/80 p-6"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#718866]">Antes de empezar</p><h2 className="mt-2 font-heading text-xl text-[#26382c]">Requisitos previos</h2><p className="mt-3 text-sm leading-6 text-[#69756a]">{course.prerequisites}</p></div>{course.status === "upcoming" ? <div className="rounded-2xl border border-[#d8e0d2] bg-[#e8ece3] p-6"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#597453]">Programa en preparación</p><p className="mt-3 text-sm leading-6 text-[#647164]">El calendario, la mentoría y los requisitos se publicarán cuando queden definidos.</p></div> : null}</aside>
        </section>
        <p className="max-w-4xl border-t border-[#dfe2d8] pt-6 text-xs leading-6 text-[#7a8378]">Contenido educativo. Los temas de salud, alimentación y procedimientos requieren revisión profesional y no sustituyen la valoración individual de un veterinario u otro profesional competente.</p>
      </div>
    </main>
  );
}
