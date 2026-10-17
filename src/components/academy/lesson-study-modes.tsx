"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, CirclePlay, FileText, LockKeyhole, PlayCircle } from "lucide-react";
import type { AcademyCourse, AcademyModule, AcademyLesson } from "@/lib/academy";
import type { AcademyPresentation } from "@/lib/academy-presentations";
import { PresentationPlayer } from "@/components/academy/presentation-player";

export function LessonStudyModes({ course, module, lesson, presentation }: { course: AcademyCourse; module: AcademyModule; lesson: AcademyLesson; presentation?: AcademyPresentation }) {
  const [mode, setMode] = useState<"video" | "presentation">("video");
  const projectorHref = `/academia/proyector/${course.slug}/${module.slug}`;
  return (
    <section>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3"><div><p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#718866]">Elige cómo estudiar</p><p className="mt-1 text-[10px] text-[#899185]">El video y las diapositivas pertenecen al mismo módulo.</p></div><div role="tablist" aria-label="Opciones de estudio" className="inline-flex rounded-full border border-[#dfe4da] bg-white/75 p-1"><button type="button" role="tab" aria-selected={mode === "video"} onClick={() => setMode("video")} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-semibold transition ${mode === "video" ? "bg-[#254534] text-white shadow-sm" : "text-[#738070] hover:text-[#254534]"}`}><CirclePlay className="h-3.5 w-3.5" />Video pregrabado</button><button type="button" role="tab" aria-selected={mode === "presentation"} onClick={() => setMode("presentation")} disabled={!presentation} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-semibold transition ${mode === "presentation" ? "bg-[#254534] text-white shadow-sm" : "text-[#738070] hover:text-[#254534] disabled:cursor-not-allowed disabled:opacity-45"}`}><FileText className="h-3.5 w-3.5" />Presentación</button></div></div>
      {mode === "presentation" && presentation ? <div role="tabpanel"><div className="mb-3 flex items-center justify-between gap-3"><p className="text-xs font-semibold text-[#465b49]">{presentation.title}</p><Link href={projectorHref} target="_blank" className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-[#718866] hover:text-[#254534]">Abrir modo proyector<ArrowUpRight className="h-3.5 w-3.5" /></Link></div><PresentationPlayer presentation={presentation} courseTitle={course.title} courseShortTitle={course.shortTitle} mode="embedded" /></div> : <div role="tabpanel" className="relative flex aspect-video min-h-[280px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-[#355143] bg-[#16271e] shadow-[0_22px_55px_rgba(22,39,30,0.16)]"><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(108,136,99,0.28),transparent_56%)]" /><div className="relative flex max-w-md flex-col items-center px-6 text-center text-white"><span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/85"><PlayCircle className="h-7 w-7" /></span><p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#c5d5bb]">Video de la lección</p><p className="mt-2 font-heading text-2xl">{lesson.title}</p><p className="mt-2 text-xs leading-5 text-white/60">El video pregrabado se añadirá aquí cuando terminemos la edición y la carga segura.</p><span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[9px] text-white/60"><LockKeyhole className="h-3 w-3" />Contenido del módulo: {module.title}</span></div></div>}
    </section>
  );
}
