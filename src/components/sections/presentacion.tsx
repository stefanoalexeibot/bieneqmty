"use client"

import { motion } from "framer-motion"
import { TiltCard } from "@/components/ui/tilt-card"

const GUIDING_QUESTIONS = [
  "¿Cómo viviría mi caballo en su hábitat natural?",
  "¿De qué lo estamos privando al domesticarlo?",
  "¿Cómo me puedo relacionar mejor con él?",
]

function HoofIcon() {
  return (
    <svg viewBox="0 0 40 44" fill="none" className="w-8 h-8 opacity-30" aria-hidden>
      <path d="M8 4 L8 26 A12 12 0 0 0 32 26 L32 4" stroke="currentColor" strokeWidth="5" strokeLinecap="butt" fill="none"/>
      <circle cx="8"  cy="12" r="2" fill="currentColor" opacity="0.5"/>
      <circle cx="8"  cy="22" r="2" fill="currentColor" opacity="0.5"/>
      <circle cx="32" cy="22" r="2" fill="currentColor" opacity="0.5"/>
      <circle cx="32" cy="12" r="2" fill="currentColor" opacity="0.5"/>
    </svg>
  )
}

function ParticipantCard({ num }: { num: number }) {
  const label = String(num).padStart(2, "0")
  return (
    <TiltCard intensity={8} className="group">
      <div className="p-5 rounded-[1.5rem] bg-white/[0.025] border border-white/[0.06] hover:bg-amber-500/[0.05] hover:border-amber-500/20 transition-all duration-500 flex flex-col gap-3 min-h-[140px]">
        <div className="flex items-start justify-between">
          <span className="font-display text-3xl font-bold text-amber-400/20 leading-none">{label}</span>
          <span className="text-amber-400/20"><HoofIcon /></span>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-px w-full bg-white/[0.05] rounded-full" />
          <p className="text-[10px] text-muted-foreground/25 tracking-wide italic">¿Cuál es tu pregunta principal?</p>
        </div>
      </div>
    </TiltCard>
  )
}

export function Presentacion() {
  return (
    <section
      id="presentacion"
      className="min-h-screen py-24 md:py-32 bg-background relative overflow-hidden border-t border-white/5 flex flex-col justify-center"
    >
      {/* Amber glow orb top-center */}
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/8 blur-[140px] rounded-full pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: "radial-gradient(oklch(1 0 0 / 3%) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

      <div className="max-w-5xl mx-auto w-full px-6 relative z-10">
        {/* Module label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-px w-10 bg-amber-500/40" />
          <span className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold">Módulo 00 · Apertura</span>
          <div className="h-px w-10 bg-amber-500/40" />
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-3">
          <motion.h2
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-foreground leading-[0.95]"
            style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}
          >
            Presentación
          </motion.h2>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground/70 font-light mb-14 italic"
        >
          Cuéntanos, ¿por qué estás aquí hoy?
        </motion.p>

        {/* Participant grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
            >
              <ParticipantCard num={i + 1} />
            </motion.div>
          ))}
        </div>

        {/* Guiding questions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col gap-4"
        >
          <p className="text-[10px] tracking-[0.45em] uppercase text-amber-400/50 font-semibold mb-2">Preguntas Guía</p>
          {GUIDING_QUESTIONS.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
              className="flex items-start gap-4 pl-5 border-l-2 border-amber-500/30 py-2"
            >
              <span className="font-mono text-[10px] text-amber-500/50 font-bold shrink-0 mt-0.5">0{i + 1}</span>
              <p className="text-base md:text-lg text-foreground/80 font-light italic leading-snug">{q}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
