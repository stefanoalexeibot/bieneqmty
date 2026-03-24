"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const parts = [
  { title: "PARED EXTERNA", active: "Soporte de peso primario", num: "01", detail: "Queratina tubular" },
  { title: "SUELA CÓNCAVA", active: "Protección interna del hueso", num: "02", detail: "Forma convexa natural" },
  { title: "RANILLA ACTIVA", active: "Bomba de sangre y tracción", num: "03", detail: "Tejido vascular" },
  { title: "BARRAS INTEGRADAS", active: "Soporte lateral y expansión", num: "04", detail: "Extensión de la pared" }
]

function AnatomyDiagramSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" fill="none" className={className} aria-hidden>
      {/* Outer hoof outline */}
      <ellipse cx="150" cy="150" rx="120" ry="110"
        stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
      {/* Wall */}
      <ellipse cx="150" cy="150" rx="105" ry="95"
        stroke="currentColor" strokeWidth="8" opacity="0.12" fill="none"/>
      {/* Sole */}
      <ellipse cx="150" cy="160" rx="75" ry="65"
        stroke="currentColor" strokeWidth="1.5" opacity="0.18" fill="currentColor" fillOpacity="0.04"/>
      {/* Frog */}
      <path d="M 115 155 Q 150 130 185 155 Q 170 185 150 192 Q 130 185 115 155 Z"
        stroke="currentColor" strokeWidth="1.5" opacity="0.25" fill="currentColor" fillOpacity="0.08"/>
      {/* Central sulcus */}
      <line x1="150" y1="148" x2="150" y2="195" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      {/* Bars */}
      <path d="M 120 170 L 110 185" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
      <path d="M 180 170 L 190 185" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
      {/* Annotation lines */}
      <line x1="258" y1="150" x2="220" y2="150" stroke="currentColor" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 4"/>
      <line x1="258" y1="195" x2="195" y2="170" stroke="currentColor" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 4"/>
      <line x1="258" y1="240" x2="200" y2="190" stroke="currentColor" strokeWidth="0.8" opacity="0.2" strokeDasharray="3 4"/>
      <circle cx="258" cy="150" r="2.5" fill="currentColor" opacity="0.3"/>
      <circle cx="258" cy="195" r="2.5" fill="currentColor" opacity="0.3"/>
      <circle cx="258" cy="240" r="2.5" fill="currentColor" opacity="0.3"/>
    </svg>
  )
}

export function Modulo4() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const diagramY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])

  return (
    <section id="modulo-4" ref={ref} className="min-h-screen py-32 bg-background relative flex flex-col justify-center overflow-hidden border-t border-white/5">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-amber-500/4 blur-[200px] rounded-full pointer-events-none" />

      {/* Anatomy diagram – floating bg */}
      <motion.div style={{ y: diagramY }}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-400/[0.12] pointer-events-none w-64 h-64 hidden xl:block">
        <AnatomyDiagramSVG className="w-full h-full" />
      </motion.div>

      {/* Scrolling marquee */}
      <div className="w-full overflow-hidden mb-20 relative z-10">
        <motion.div style={{ x }} className="whitespace-nowrap opacity-[0.025] select-none">
          <h2 className="font-display text-[12vw] leading-none font-bold text-foreground tracking-tighter">
            ANATOMÍA · ESTRUCTURAS · ANATOMÍA · ESTRUCTURAS ·
          </h2>
        </motion.div>
      </div>

      {/* Module header */}
      <div className="max-w-7xl mx-auto px-6 w-full mb-10 relative z-10">
        <div className="flex items-center gap-4">
          <span className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold">Módulo 04</span>
          <div className="h-px flex-1 bg-gradient-to-r from-amber-500/30 to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-4 relative z-10">
        {parts.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ x: 6 }}
            className="group flex flex-col md:flex-row justify-between items-start md:items-center p-7 md:p-10 bg-white/[0.025] border border-white/[0.06] rounded-[1.5rem] hover:bg-amber-500/[0.05] hover:border-amber-500/20 transition-all duration-500 backdrop-blur-2xl cursor-pointer overflow-hidden relative"
          >
            {/* Sweep shimmer on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ x: "-100%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{ background: "linear-gradient(90deg, transparent 0%, oklch(0.72 0.14 68 / 8%) 50%, transparent 100%)" }}
            />

            <div className="flex items-center gap-6 md:gap-12 relative z-10 w-full md:w-auto">
              <span className="font-display text-3xl md:text-5xl font-bold text-white/[0.08] group-hover:text-amber-500/40 transition-colors duration-500">
                {p.num}
              </span>
              <div>
                <h3 className="font-display text-2xl md:text-4xl font-bold text-white tracking-tight">{p.title}</h3>
                <p className="text-muted-foreground/40 text-xs tracking-[0.3em] uppercase mt-1 hidden md:block">{p.detail}</p>
              </div>
            </div>

            <div className="mt-4 md:mt-0 relative z-10 flex w-full md:w-auto justify-end">
              <span className="text-amber-400 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] opacity-40 group-hover:opacity-100 transition-opacity duration-300 border border-amber-500/20 px-5 py-2.5 rounded-full group-hover:bg-amber-500/8">
                {p.active}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
