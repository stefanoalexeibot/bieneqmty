"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { AlertTriangle } from "lucide-react"

function WarningRingSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" fill="none" className={className} aria-hidden>
      <motion.circle cx="150" cy="150" r="120"
        stroke="currentColor" strokeWidth="1.5"
        animate={{ r: [120, 135, 120], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle cx="150" cy="150" r="100"
        stroke="currentColor" strokeWidth="1"
        animate={{ r: [100, 120, 100], opacity: [0.2, 0.05, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.circle cx="150" cy="150" r="80"
        stroke="currentColor" strokeWidth="0.5"
        animate={{ r: [80, 105, 80], opacity: [0.15, 0.03, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </svg>
  )
}

const urgentActions = [
  { emoji: "🚫", text: "Sin pasto. Inmediato." },
  { emoji: "🧊", text: "Hielo constante en las patas." },
  { emoji: "📞", text: "Llama al veterinario YA." },
  { emoji: "🛏️", text: "Cama profunda de aserrín." },
]

export function Modulo10() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])

  return (
    <section id="modulo-10" ref={ref} className="min-h-screen py-32 bg-background relative flex items-center justify-center overflow-hidden">
      {/* Red radial bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.25_0.08_27_/_0.25)_0%,_transparent_65%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-red-600/8 blur-[220px] rounded-full pointer-events-none" />

      {/* Warning rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500/20 pointer-events-none w-[600px] h-[600px]">
        <WarningRingSVG className="w-full h-full" />
      </div>

      {/* Watermark */}
      <motion.h2
        style={{ y }}
        className="font-display text-[18vw] font-bold text-red-500/[0.04] tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap"
      >
        LAMINITIS
      </motion.h2>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 text-center flex flex-col items-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 120 }}
          viewport={{ once: true }}
        >
          <AlertTriangle className="w-24 h-24 md:w-36 md:h-36 text-red-500 mb-10 drop-shadow-[0_0_60px_rgba(239,68,68,0.7)]" />
        </motion.div>

        {/* Module label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-10 bg-red-500/40" />
          <span className="text-xs tracking-[0.45em] text-red-400/70 uppercase font-semibold">Módulo 10 · Emergencia</span>
          <div className="h-px w-10 bg-red-500/40" />
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-display font-bold text-white tracking-tighter mb-8 leading-[1.05]"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          La Hora<br />Más Oscura.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-xl md:text-3xl text-red-200/40 font-light tracking-[0.15em] max-w-4xl mx-auto leading-relaxed uppercase mb-14"
        >
          Actúa rápido. Sin pasto. Hielo constante. Llama al veterinario.
        </motion.p>

        {/* Urgent action cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl"
        >
          {urgentActions.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="p-4 rounded-[1.5rem] bg-red-950/30 border border-red-500/20 flex flex-col items-center gap-2 text-center"
            >
              <span className="text-2xl">{a.emoji}</span>
              <p className="text-red-300/70 text-xs font-semibold tracking-wide leading-tight">{a.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
