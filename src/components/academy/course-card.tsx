import Link from "next/link";
import { ArrowUpRight, Clock3, Layers3 } from "lucide-react";
import type { AcademyCourse } from "@/lib/academy";

const courseArt: Record<string, string> = {
  "anatomia-del-casco": "/images/TEORICO/DSC04906.JPG",
  "barefoot-integral": "/images/PRACTICA/PRACTICA4.jpg",
  "barefoot-integral-pro": "/images/INSTALACIONES/ESTUDIOTEORIA1.jpeg",
};

export function CourseCard({ course, featured = false }: { course: AcademyCourse; featured?: boolean }) {
  const lessonCount = course.modules.reduce((count, module) => count + module.lessons.length, 0);
  return (
    <article className={`group flex h-full flex-col overflow-hidden rounded-[1.65rem] border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(36,57,42,0.12)] ${featured ? "border-[#b7c8ae] shadow-[0_12px_35px_rgba(36,57,42,0.08)]" : "border-[#e5e4d9] shadow-[0_8px_24px_rgba(36,57,42,0.045)]"}`}>
      <div className="relative h-52 overflow-hidden bg-[#dfe5d9]">
        <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.04]" style={{ backgroundImage: `url('${courseArt[course.slug] ?? courseArt["anatomia-del-casco"]}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14291f]/75 via-[#14291f]/5 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/35 bg-[#152b21]/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur">{course.status === "upcoming" ? "Próximamente" : course.level}</span>
        <span className="absolute bottom-5 left-5 font-heading text-5xl text-white/90">{course.slug === "anatomia-del-casco" ? "01" : course.slug === "barefoot-integral" ? "02" : "03"}</span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#71826c]">{course.shortTitle}</p>
        <h3 className="mt-3 font-heading text-2xl leading-tight text-[#26382c] md:text-[1.7rem]">{course.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[#69756a]">{course.description}</p>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#ecece4] pt-4 text-xs text-[#778176]"><span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#65805d]" />{course.duration}</span><span className="inline-flex items-center gap-2"><Layers3 className="h-4 w-4 text-[#65805d]" />{course.modules.length} módulos · {lessonCount} lecciones</span></div>
        <Link href={`/academia/cursos/${course.slug}`} className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#254534] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#183324]">{course.status === "upcoming" ? "Conocer el programa" : "Explorar el temario"}<ArrowUpRight className="h-4 w-4" /></Link>
      </div>
    </article>
  );
}
