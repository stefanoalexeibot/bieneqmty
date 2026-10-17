import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, Play, Sparkles } from "lucide-react";
import { academyCourses } from "@/lib/academy";

export const metadata = { title: "Mi aprendizaje" };

export default function LearningDashboardPage() {
  const featured = academyCourses[0];
  const firstModule = featured.modules[0];
  const firstLesson = firstModule.lessons[0];

  return (
    <main>
      <div className="mb-7 flex flex-wrap items-start justify-between gap-4"><div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#718866]">Tu espacio de aprendizaje</p><h1 className="mt-2 font-heading text-4xl leading-tight text-[#26382c] sm:text-5xl">Hola, <span className="italic text-[#718866]">bienvenido.</span></h1><p className="mt-3 max-w-2xl text-sm leading-6 text-[#69756a]">Aquí encontrarás tus cursos, el avance de cada lección y los recursos que acompañan tu formación.</p></div><Link href="/academia/cursos" className="inline-flex items-center gap-2 rounded-full border border-[#dce2d6] bg-white/75 px-4 py-2.5 text-xs font-semibold text-[#50634f] transition hover:bg-white">Explorar cursos<ArrowRight className="h-4 w-4" /></Link></div>

      <div className="mb-8 flex gap-3 rounded-2xl border border-[#e5d9bb] bg-[#f5efdf] p-4 text-xs leading-5 text-[#796d50]"><Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#a78541]" /><p><span className="font-semibold">Vista de demostración.</span> El registro, el avance personal y los cursos comprados se conectarán al activar las cuentas de alumnos. Los datos que ves aquí son solo de ejemplo.</p></div>

      <section className="overflow-hidden rounded-[1.75rem] border border-[#e1e4db] bg-white shadow-[0_12px_35px_rgba(36,57,42,0.055)]">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-[240px] bg-[#dfe5d9] lg:min-h-[365px]"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/TEORICO/DSC04906.JPG')" }} /><div className="absolute inset-0 bg-gradient-to-t from-[#15291e]/65 to-transparent" /><span className="absolute left-5 top-5 rounded-full border border-white/35 bg-[#20382a]/50 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.17em] text-white backdrop-blur">Continuar aprendiendo</span><span className="absolute bottom-5 left-5 font-heading text-5xl text-white">01</span></div>
          <div className="p-6 md:p-9"><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-[#edf0e9] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#607757]">{featured.level}</span><span className="text-xs text-[#8a9286]">· {featured.duration}</span></div><h2 className="mt-4 font-heading text-3xl leading-tight text-[#26382c] md:text-4xl">{featured.title}</h2><p className="mt-3 max-w-xl text-sm leading-6 text-[#69756a]">{featured.description}</p><div className="mt-7"><div className="mb-2 flex justify-between text-[10px] text-[#7a8579]"><span>Avance de ejemplo</span><span>38%</span></div><div className="h-2 overflow-hidden rounded-full bg-[#e9ece5]"><div className="h-full w-[38%] rounded-full bg-[#718866]" /></div></div><div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#eceee8] pt-5"><div><p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#718866]">Siguiente lección</p><p className="mt-1 text-sm font-medium text-[#425747]">{firstLesson.title}</p><p className="mt-1 text-[10px] text-[#848d82]">{firstModule.title}</p></div><Link href={`/academia/aula/${featured.slug}/${firstModule.slug}/${firstLesson.id}`} className="inline-flex items-center gap-2 rounded-full bg-[#254534] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#183324]"><Play className="h-3.5 w-3.5 fill-current" />Abrir el aula</Link></div></div>
        </div>
      </section>

      <section className="mt-10"><div className="mb-5 flex items-end justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#718866]">Biblioteca</p><h2 className="mt-2 font-heading text-3xl text-[#26382c]">Tus cursos</h2></div><span className="text-xs text-[#8a9286]">Vista de ejemplo</span></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{academyCourses.filter((course) => course.status === "available").map((course, index) => <article key={course.slug} className="rounded-2xl border border-[#e1e4db] bg-white/80 p-5"><div className="flex items-start justify-between gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf0e9] text-[#607757]"><BookOpen className="h-4 w-4" /></div><span className="inline-flex items-center gap-1.5 text-[10px] text-[#8a9286]"><Clock3 className="h-3.5 w-3.5" />{course.duration}</span></div><h3 className="mt-4 font-heading text-xl text-[#34493a]">{course.shortTitle}</h3><p className="mt-2 text-xs leading-5 text-[#758174]">{course.modules.length} módulos · {course.modules.reduce((sum, module) => sum + module.lessons.length, 0)} lecciones</p><Link href={`/academia/cursos/${course.slug}`} className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#5b7054] hover:text-[#254534]">Ver estructura<ArrowRight className="h-3.5 w-3.5" /></Link></article>)}</div></section>
    </main>
  );
}
