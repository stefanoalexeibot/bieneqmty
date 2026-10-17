"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, Play, RotateCcw } from "lucide-react";
import type { AcademyPresentation } from "@/lib/academy-presentations";

type PresentationPlayerProps = {
  presentation: AcademyPresentation;
  courseTitle: string;
  courseShortTitle: string;
  mode?: "embedded" | "projector";
};

export function PresentationPlayer({ presentation, courseTitle, courseShortTitle, mode = "embedded" }: PresentationPlayerProps) {
  const stageRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const total = presentation.sections.length + 2;
  const isProjector = mode === "projector";
  const previous = () => setIndex((current) => Math.max(0, current - 1));
  const next = () => setIndex((current) => Math.min(total - 1, current + 1));
  const reset = () => setIndex(0);
  const toggleFullscreen = async () => {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await stageRef.current?.requestFullscreen();
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      next();
    }
    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      previous();
    }
    if (event.key === "Home") {
      event.preventDefault();
      reset();
    }
    if (event.key === "End") {
      event.preventDefault();
      setIndex(total - 1);
    }
  };
  const section = index > 0 && index < total - 1 ? presentation.sections[index - 1] : undefined;
  const coverImage = presentation.sections[0]?.image ?? "/images/PRACTICA/PRACTICA4.jpg";

  return (
    <div className={isProjector ? "mx-auto w-full max-w-[1520px]" : "w-full"}>
      <section ref={stageRef} tabIndex={0} onKeyDown={handleKeyDown} aria-label="Presentación de teoría" className={`group/presentation relative isolate flex aspect-video w-full flex-col overflow-hidden border outline-none focus-visible:ring-2 focus-visible:ring-[#b9c9ad] ${isProjector ? "max-h-[86vh] rounded-[1.5rem] border-white/10 bg-[#f5f4ed] shadow-[0_25px_90px_rgba(0,0,0,0.3)] fullscreen:!fixed fullscreen:!inset-0 fullscreen:!z-[200] fullscreen:!h-screen fullscreen:!max-h-none fullscreen:!max-w-none fullscreen:!rounded-none" : "min-h-[300px] rounded-[1.35rem] border-[#dfe4da] bg-[#f5f4ed] shadow-[0_18px_55px_rgba(36,57,42,0.12)]"}`}>
        {index === 0 ? <>
          <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url('${coverImage}')` }} />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#12251b]/90 via-[#12251b]/65 to-[#12251b]/15" />
          <div className="flex h-full flex-col justify-between p-6 text-white sm:p-10 md:p-14 xl:p-16"><div className="flex items-center justify-between gap-4"><span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur"><span className="h-1.5 w-1.5 rounded-full bg-[#c4d6b8]" />{courseShortTitle}</span><span className="text-[9px] uppercase tracking-[0.17em] text-white/65">Teoría · {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span></div><div className="max-w-4xl"><p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#c4d6b8]">Presentación de módulo</p><h2 className="font-heading text-3xl leading-[1.04] sm:text-5xl md:text-6xl xl:text-7xl">{presentation.title}</h2><p className="mt-4 max-w-2xl text-xs leading-6 text-white/80 sm:text-base sm:leading-7">{presentation.objective}</p><p className="mt-5 text-[9px] font-medium uppercase tracking-[0.18em] text-white/60">{courseTitle} · BieneqMty Academy</p></div></div>
        </> : index === total - 1 ? <div className="flex h-full flex-col justify-center bg-[#e9ece3] p-6 sm:p-10 md:p-14 xl:p-16"><span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#718866]">Cierre del módulo</span><h2 className="mt-3 max-w-3xl font-heading text-3xl leading-tight text-[#26382c] sm:text-5xl">Observar con más criterio empieza con buenas preguntas.</h2><p className="mt-4 max-w-2xl text-xs leading-6 text-[#687568] sm:text-base sm:leading-7">Recupera las ideas clave, registra el contexto y conversa con el equipo profesional del caballo.</p><div className="mt-6 grid gap-2 sm:mt-8 sm:grid-cols-3">{["Mirar con atención", "Describir con claridad", "Consultar a tiempo"].map((item, pointIndex) => <div key={item} className="rounded-xl border border-[#dce2d6] bg-white/75 px-3 py-3 sm:rounded-2xl sm:px-4 sm:py-4"><span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#84937d]">0{pointIndex + 1}</span><p className="mt-1 text-[10px] font-semibold text-[#425747] sm:mt-2 sm:text-sm">{item}</p></div>)}</div><p className="mt-5 text-[8px] leading-4 text-[#798477] sm:mt-8 sm:text-[10px]">Material educativo para revisión profesional. No sustituye la valoración individual de un veterinario u otro profesional competente.</p></div> : section ? <div className="grid h-full grid-cols-[1.2fr_0.8fr] bg-[#f5f4ed]"><div className="flex min-w-0 flex-col justify-center p-5 sm:p-8 md:p-10 xl:p-14"><div className="mb-3 flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#718866] sm:text-[9px]"><span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#e7ece1] text-[8px]">{String(index).padStart(2, "0")}</span>Módulo de teoría</div><h2 className="max-w-3xl font-heading text-xl leading-tight text-[#26382c] sm:text-3xl md:text-4xl xl:text-5xl">{section.title}</h2><p className="mt-2 max-w-2xl text-[9px] leading-4 text-[#667365] sm:mt-3 sm:text-sm sm:leading-6 md:text-base">{section.lead}</p><ul className="mt-3 space-y-2 sm:mt-5 sm:space-y-3 md:mt-7">{section.points.map((point) => <li key={point} className="flex gap-2 text-[8px] leading-4 text-[#506052] sm:gap-3 sm:text-xs sm:leading-5 md:text-sm"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#718866] sm:h-1.5 sm:w-1.5" />{point}</li>)}</ul></div><div className="relative m-3 overflow-hidden rounded-xl bg-[#dce3d7] sm:m-5 sm:rounded-2xl md:m-7"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${section.image}')` }} /><div className="absolute inset-0 bg-gradient-to-t from-[#1a3124]/45 via-transparent to-transparent" /><span className="absolute bottom-2 left-2 rounded-full border border-white/25 bg-[#20382a]/40 px-2 py-1 text-[7px] uppercase tracking-[0.14em] text-white/80 backdrop-blur sm:bottom-4 sm:left-4 sm:px-3 sm:text-[8px]">Academia BieneqMty</span></div></div> : null}

        <div className="absolute inset-x-0 bottom-0 z-10 px-3 pb-2 sm:px-5 sm:pb-3"><div className="flex items-center gap-2 sm:gap-3"><button type="button" onClick={previous} disabled={index === 0} aria-label="Diapositiva anterior" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/35 bg-[#20382a]/30 text-white backdrop-blur transition hover:bg-[#20382a]/70 disabled:opacity-40 sm:h-9 sm:w-9"><ArrowLeft className="h-3.5 w-3.5" /></button><div className="h-1 flex-1 overflow-hidden rounded-full bg-white/35"><div className="h-full rounded-full bg-[#b7c9aa] transition-all duration-300" style={{ width: `${((index + 1) / total) * 100}%` }} /></div><span aria-live="polite" className="min-w-[50px] text-center text-[8px] font-medium text-white drop-shadow sm:min-w-[62px] sm:text-[9px]">{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span><button type="button" onClick={next} disabled={index === total - 1} aria-label="Siguiente diapositiva" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/35 bg-[#20382a]/30 text-white backdrop-blur transition hover:bg-[#20382a]/70 disabled:opacity-40 sm:h-9 sm:w-9"><ArrowRight className="h-3.5 w-3.5" /></button><button type="button" onClick={toggleFullscreen} aria-label="Ver en pantalla completa" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/35 bg-[#20382a]/30 text-white backdrop-blur transition hover:bg-[#20382a]/70 sm:h-9 sm:w-9"><Expand className="h-3.5 w-3.5" /></button></div></div>
      </section>
      <div className={`mt-3 flex flex-wrap items-center justify-between gap-3 ${isProjector ? "text-white/60" : "text-[#849083]"}`}><p className="text-[9px]">Usa ← → o los controles para avanzar · {index + 1} de {total}</p><button type="button" onClick={reset} className={`inline-flex items-center gap-1.5 text-[9px] font-semibold ${isProjector ? "text-white/75 hover:text-white" : "text-[#718866] hover:text-[#254534]"}`}><RotateCcw className="h-3 w-3" />Reiniciar presentación</button></div>
      {section ? <details className={`mt-3 rounded-xl border p-3 sm:mt-4 sm:rounded-2xl sm:p-4 ${isProjector ? "border-white/10 bg-white/5 text-white/70" : "border-[#e1e5dc] bg-white/65 text-[#788276]"}`}><summary className="cursor-pointer list-none text-[9px] font-semibold uppercase tracking-[0.14em] text-[#819078]"><span className="inline-flex items-center gap-2"><Play className="h-3 w-3" />Guía para quien presenta</span></summary><p className="mt-2 text-[10px] leading-5">{section.presenterNotes}</p></details> : null}
      {index === total - 1 && presentation.sources.length ? <div className={`mt-3 border-t pt-3 ${isProjector ? "border-white/10" : "border-[#e2e5dc]"}`}><p className={`mb-2 text-[8px] font-semibold uppercase tracking-[0.16em] ${isProjector ? "text-white/50" : "text-[#8a9486]"}`}>Fuentes base para revisión</p><div className="flex flex-wrap gap-x-4 gap-y-2">{presentation.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className={`text-[9px] underline decoration-current/30 underline-offset-2 ${isProjector ? "text-white/65 hover:text-white" : "text-[#718866] hover:text-[#254534]"}`}>{source.label}</a>)}</div></div> : null}
    </div>
  );
}
