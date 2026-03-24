"use client"

import { motion } from "framer-motion"
import { TiltCard } from "@/components/ui/tilt-card"

const BEHAVIORS = [
  { sintoma: "Estereotipias",              causa: "Estrés crónico, libera endorfinas" },
  { sintoma: "Comportamiento exagerado",   causa: "Aburrimiento y energía no liberada" },
  { sintoma: "Cólicos recurrentes",        causa: "Mal manejo de alimentación" },
  { sintoma: "Úlceras estomacales",        causa: "Sin masticar, sin suficiente saliva" },
  { sintoma: "Come tierra",               causa: "Falta de sales y minerales" },
  { sintoma: "Espantadizo",               causa: "Exceso de energía sin liberar" },
]

const SOLUTIONS = [
  {
    icon: "🌾",
    title: "Forraje a libre acceso",
    desc: "Slow feeders 24/7. Imita el pastoreo natural y reduce el estrés gastrointestinal.",
    color: "emerald",
  },
  {
    icon: "🌿",
    title: "Vivir afuera en manada",
    desc: "24/7 en exterior con compañeros. La necesidad social es tan básica como el alimento.",
    color: "emerald",
  },
  {
    icon: "💧",
    title: "Agua en cantidad y calidad",
    desc: "Siempre limpia y fresca. Un caballo deshidratado no come bien y aumenta el riesgo de cólico.",
    color: "emerald",
  },
  {
    icon: "💡",
    title: "Gradualidad y creatividad",
    desc: "Cambios graduales en dieta, manejo y entorno. No dinero — creatividad.",
    color: "emerald",
  },
]

function ArrowSVG() {
  return (
    <svg viewBox="0 0 40 24" fill="none" className="w-8 h-6 shrink-0" aria-hidden>
      <line x1="0" y1="12" x2="32" y2="12" stroke="rgba(239,68,68,0.35)" strokeWidth="1.5" />
      <polygon points="32,8 40,12 32,16" fill="rgba(239,68,68,0.45)" />
    </svg>
  )
}

export function Comportamientos() {
  return (
    <section
      id="comportamientos"
      className="min-h-screen py-24 md:py-32 bg-background relative overflow-hidden border-t border-white/5"
    >
      <div className="absolute top-1/4 right-[-80px] w-[500px] h-[500px] bg-red-900/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: "radial-gradient(oklch(1 0 0 / 3%) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

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
          <span className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold">Módulo 07 · Comportamientos</span>
          <div className="h-px w-10 bg-amber-500/40" />
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-foreground leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            ¿Por qué mi caballo se comporta así?
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-base text-muted-foreground/60 font-light mb-12"
        >
          Cada síntoma tiene una causa. Entender el porqué transforma el manejo.
        </motion.p>

        {/* Column headers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-[1fr_40px_1fr] gap-3 mb-3 px-1"
        >
          <span className="text-[9px] tracking-[0.4em] uppercase text-red-400/50 font-semibold">Síntoma</span>
          <span />
          <span className="text-[9px] tracking-[0.4em] uppercase text-amber-400/50 font-semibold">Causa raíz</span>
        </motion.div>

        {/* Behavior flows */}
        <div className="flex flex-col gap-3 mb-16">
          {BEHAVIORS.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.09 }}
              className="grid grid-cols-[1fr_40px_1fr] gap-3 items-center"
            >
              {/* Symptom */}
              <div className="p-4 rounded-xl bg-red-500/[0.05] border border-red-500/[0.15] hover:border-red-500/25 transition-all duration-300">
                <p className="text-sm font-semibold text-red-300/80 leading-snug">{b.sintoma}</p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowSVG />
              </div>

              {/* Cause */}
              <div className="p-4 rounded-xl bg-amber-500/[0.04] border border-amber-500/[0.12] hover:border-amber-500/22 transition-all duration-300">
                <p className="text-sm text-amber-300/75 font-light leading-snug">{b.causa}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-emerald-500/20" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-emerald-400/60 font-semibold shrink-0">Propuestas de Solución</span>
            <div className="h-px flex-1 bg-emerald-500/20" />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {SOLUTIONS.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <TiltCard intensity={7} className="group h-full">
                  <div className="p-6 rounded-[1.5rem] bg-emerald-500/[0.04] border border-emerald-500/[0.14] hover:bg-emerald-500/[0.08] hover:border-emerald-500/25 transition-all duration-500 h-full">
                    <span className="text-2xl mb-3 block">{sol.icon}</span>
                    <h4 className="font-display text-base font-semibold text-emerald-300/85 mb-2 leading-snug">{sol.title}</h4>
                    <p className="text-xs text-emerald-400/50 font-light leading-relaxed">{sol.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Carlos Mancera quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-2xl mx-auto text-center p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05]"
        >
          <div className="absolute -top-5 left-8 font-display text-7xl text-amber-400/10 leading-none select-none">&ldquo;</div>
          <p className="text-base md:text-lg font-display italic text-foreground/70 leading-relaxed mb-4 relative z-10">
            Hagan lo mejor que puedan, con lo que tengan. La mayor limitante no es el dinero o el espacio, sino la creatividad.
          </p>
          <p className="text-[10px] tracking-[0.4em] uppercase text-amber-400/50 font-semibold">— Carlos Mancera</p>
        </motion.div>
      </div>
    </section>
  )
}
