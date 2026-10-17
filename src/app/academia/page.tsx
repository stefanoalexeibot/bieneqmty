import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, Check, Leaf, MoveUpRight } from "lucide-react";
import { CourseCard } from "@/components/academy/course-card";
import { academyCourses } from "@/lib/academy";

export default function AcademiaPage() {
  return (
    <main className="overflow-hidden bg-[#f5f4ed] text-[#26382c]">
      <section className="relative px-5 pb-16 pt-32 sm:px-8 md:pb-24 md:pt-40">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <div className="relative z-10 py-5 md:py-12">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d5decf] bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#536b4f]"><span className="h-2 w-2 rounded-full bg-[#78956d]" />Academia BieneqMty</div>
            <h1 className="max-w-2xl font-heading text-5xl font-medium leading-[1.03] tracking-tight text-[#24392d] sm:text-6xl md:text-7xl">Aprender a mirar <span className="italic text-[#718866]">cambia todo.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#637064] md:text-lg">Formación en español para comprender el casco y el bienestar del caballo, observar con más criterio y trabajar mejor junto a profesionales.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3"><Link href="/academia/cursos" className="inline-flex items-center gap-3 rounded-full bg-[#254534] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#254534]/10 transition hover:bg-[#183324]">Explorar programas<ArrowRight className="h-4 w-4" /></Link><a href="#enfoque" className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-[#50634f] transition hover:bg-white">Conoce el enfoque<ArrowDown className="h-4 w-4" /></a></div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#dfe2d8] pt-5 text-xs text-[#718071]"><span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#718866]" />A tu ritmo</span><span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#718866]" />Teoría y observación práctica</span><span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#718866]" />Enfoque educativo</span></div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#c8d1c2] shadow-[0_25px_70px_rgba(37,57,44,0.16)] sm:min-h-[540px]">
            <div className="absolute inset-0 bg-cover bg-[center_42%]" style={{ backgroundImage: "url('/images/PRACTICA/PRACTICA4.jpg')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12261d]/75 via-[#12261d]/5 to-[#12261d]/5" />
            <div className="absolute left-5 top-5 rounded-2xl border border-white/25 bg-[#20382a]/35 px-4 py-3 text-white backdrop-blur-md sm:left-7 sm:top-7"><p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70">Formación con propósito</p><p className="mt-1 font-heading text-lg">Bienestar, conocimiento y práctica</p></div>
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5 text-white sm:inset-x-7 sm:bottom-7"><div><p className="text-[10px] font-semibold uppercase tracking-[0.19em] text-white/70">Una mirada integral</p><p className="mt-2 max-w-md font-heading text-2xl leading-tight sm:text-3xl">El casco forma parte de un caballo, no existe por separado.</p></div><div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/45 sm:flex"><MoveUpRight className="h-5 w-5" /></div></div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between"><div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#718866]">Rutas de aprendizaje</p><h2 className="font-heading text-4xl leading-tight text-[#24392d] md:text-5xl">Una base sólida, paso a paso.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-[#69756a]">Empieza por comprender las estructuras y avanza hacia una observación más completa del caballo.</p></div><Link href="/academia/cursos" className="inline-flex items-center gap-2 text-sm font-semibold text-[#435b43] hover:text-[#213b2b]">Ver todos los programas<ArrowRight className="h-4 w-4" /></Link></div>
          <div className="grid gap-5 lg:grid-cols-3">{academyCourses.map((course, index) => <CourseCard key={course.slug} course={course} featured={index === 1} />)}</div>
        </div>
      </section>

      <section id="enfoque" className="bg-[#e9ece3] px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-16">
          <div><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d7e0d1] text-[#526c4c]"><Leaf className="h-5 w-5" /></div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#718866]">Nuestro enfoque</p><h2 className="font-heading text-4xl leading-tight text-[#24392d] md:text-5xl">Entender al caballo en su contexto.</h2></div>
          <div className="space-y-5 text-sm leading-7 text-[#5f6e61] md:text-base"><p>La formación reúne anatomía, observación, movimiento, entorno y manejo. El propósito es que cada alumno pueda describir con claridad lo que observa y conversar mejor con su equipo profesional.</p><p>Los temas de salud, alimentación y procedimientos se presentan con alcance educativo y se preparan para revisión profesional antes de publicar las lecciones.</p><div className="flex items-center gap-4 border-t border-[#d4dbd0] pt-5"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d7e0d1] font-heading text-lg text-[#526c4c]">JM</div><div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#718866]">Instructor</p><p className="mt-1 font-medium text-[#34493a]">José Manuel Luna</p></div></div></div>
        </div>
      </section>
      <section className="px-5 py-16 sm:px-8 md:py-20"><div className="mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden rounded-[1.75rem] bg-[#254534] px-7 py-9 text-white md:flex-row md:items-center md:justify-between md:px-12 md:py-11"><div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c0d3b7]">Empieza por lo esencial</p><h2 className="font-heading text-3xl md:text-4xl">Conoce primero la anatomía del casco.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">Un curso introductorio para familiarizarte con las estructuras y aprender a observarlas.</p></div><Link href="/academia/cursos/anatomia-del-casco" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#e7ebdf] px-5 py-3 text-sm font-semibold text-[#254534] transition hover:bg-white">Ver programa<ArrowRight className="h-4 w-4" /></Link></div></section>
    </main>
  );
}
