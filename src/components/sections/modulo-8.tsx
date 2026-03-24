"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Wrench, Ruler, Brush } from "lucide-react"

const tools = [
  { name: "ESCOFINA", desc: "Nivelado y Mustang Roll", icon: <Brush />, detail: "Herramienta principal" },
  { name: "NIPPERS", desc: "Corte de pared excedente", icon: <Wrench />, detail: "Cortante" },
  { name: "CUCHILLA", desc: "Limpieza de ranilla y barras", icon: <Ruler />, detail: "Precisión" },
  { name: "SOPORTE", desc: "Hoof stand para descanso", icon: <Wrench />, detail: "Apoyo mecánico" }
]

function ToolOutlineSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 300" fill="none" className={className} aria-hidden>
      {/* Hoof rasp / file shape */}
      <rect x="60" y="5" width="40" height="200" rx="8"
        stroke="currentColor" strokeWidth="2" opacity="0.2"/>
      {/* Rasp teeth */}
      {Array.from({ length: 14 }).map((_, i) => (
        <line key={i}
          x1="65" y1={25 + i * 13} x2="95" y2={25 + i * 13}
          stroke="currentColor" strokeWidth="1" opacity="0.12" strokeDasharray="4 2"/>
      ))}
      {/* Handle */}
      <rect x="68" y="205" width="24" height="85" rx="6"
        stroke="currentColor" strokeWidth="2" opacity="0.15" fill="currentColor" fillOpacity="0.05"/>
      {/* Wrap lines */}
      {[220, 235, 250, 265, 280].map(y => (
        <line key={y} x1="68" y1={y} x2="92" y2={y}
          stroke="currentColor" strokeWidth="1.5" opacity="0.1"/>
      ))}
    </svg>
  )
}

export function Modulo8() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const toolY = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"])

  return (
    <section id="modulo-8" ref={ref} className="min-h-screen py-32 bg-background relative flex items-center overflow-hidden border-t border-white/5">
      <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-amber-600/7 blur-[180px] rounded-full pointer-events-none" />

      {/* Tool outline decoration */}
      <motion.div style={{ y: toolY }}
        className="absolute left-10 top-1/2 -translate-y-1/2 text-amber-400/[0.08] pointer-events-none hidden xl:block">
        <ToolOutlineSVG className="w-20 h-40" />
      </motion.div>
      <motion.div style={{ y }}
        className="absolute right-8 bottom-16 text-amber-400/[0.06] pointer-events-none rotate-[25deg] hidden lg:block">
        <ToolOutlineSVG className="w-14 h-28" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 text-center">
        {/* Header */}
        <motion.div style={{ y }} className="mb-20 relative">
          <p className="font-display text-[11vw] leading-none font-bold text-white/[0.025] tracking-tighter w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
            ARSENAL
          </p>
          <div className="relative z-10">
            <span className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold block mb-3">Módulo 08</span>
            <h3 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40 pb-3">
              Herramientas Clave
            </h3>
          </div>
        </motion.div>

        {/* Tool grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-20">
          {tools.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group aspect-square p-8 rounded-[2.5rem] bg-white/[0.025] border border-white/[0.06] hover:bg-amber-500/[0.06] hover:border-amber-500/20 transition-all duration-500 backdrop-blur-xl flex flex-col items-center justify-center relative overflow-hidden"
            >
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/0 group-hover:bg-amber-500/10 blur-2xl transition-all duration-500 rounded-full" />

              <div className="w-16 h-16 rounded-full bg-white/[0.04] border border-white/8 flex items-center justify-center text-white/25 group-hover:text-amber-400 group-hover:scale-110 group-hover:-translate-y-3 transition-all duration-500 mb-5 relative z-10 group-hover:border-amber-500/25 group-hover:shadow-[0_0_30px_rgba(196,144,58,0.2)]">
                <div className="w-7 h-7 *:w-full *:h-full">{t.icon}</div>
              </div>

              <span className="text-[9px] tracking-[0.3em] text-amber-500/30 uppercase font-semibold mb-2 relative z-10">{t.detail}</span>
              <h4 className="font-display text-xl md:text-2xl font-bold text-white tracking-widest mb-1.5 relative z-10 group-hover:-translate-y-1 transition-transform duration-500">{t.name}</h4>
              <p className="text-white/35 text-center text-xs uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0 relative z-10">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
