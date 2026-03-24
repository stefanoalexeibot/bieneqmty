"use client"

import { motion } from "framer-motion"
import { TiltCard } from "@/components/ui/tilt-card"

const BENEFITS = [
  {
    icon: "⚡",
    num: "01",
    title: "Ahorro de energía",
    desc: "Vigilancia compartida: la carga individual se distribuye. Mientras unos comen, otros montan guardia.",
  },
  {
    icon: "⚖️",
    num: "02",
    title: "Normas sociales",
    desc: "Jerarquía clara y señales precisas. Las normas del grupo reducen conflictos y mantienen cohesión.",
  },
  {
    icon: "🤸",
    num: "03",
    title: "Juego y coordinación",
    desc: "El juego desarrolla habilidades motoras y enseña las reglas sociales. Fundamental en potrillos.",
  },
]

/* ── Animated herd diagram ── */
function HerdDiagram() {
  const horses = [
    { cx: 120, cy: 85, delay: 0,    size: 10 },
    { cx: 160, cy: 70, delay: 0.4,  size: 8  },
    { cx: 195, cy: 95, delay: 0.8,  size: 9  },
    { cx: 145, cy: 115, delay: 1.2, size: 8  },
    { cx: 100, cy: 110, delay: 0.6, size: 7  },
    { cx: 175, cy: 55,  delay: 1.0, size: 6  },
  ]

  const connections = [
    [0, 1], [0, 4], [1, 2], [1, 3], [2, 3], [1, 5],
  ]

  return (
    <svg viewBox="0 0 300 180" fill="none" className="w-full max-w-[300px] mx-auto" aria-hidden>
      {/* Connection lines */}
      {connections.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={horses[a].cx} y1={horses[a].cy}
          x2={horses[b].cx} y2={horses[b].cy}
          stroke="rgba(196,144,58,0.10)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.05, 0.18, 0.05] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        />
      ))}

      {/* Horse dots */}
      {horses.map((h, i) => (
        <motion.g key={i}>
          {/* Glow ring */}
          <motion.circle
            cx={h.cx} cy={h.cy} r={h.size + 4}
            fill="rgba(196,144,58,0.06)"
            animate={{ r: [h.size + 4, h.size + 8, h.size + 4], opacity: [0.06, 0.14, 0.06] }}
            transition={{ duration: 2.5 + h.delay * 0.4, repeat: Infinity, ease: "easeInOut", delay: h.delay }}
          />
          {/* Main dot */}
          <motion.circle
            cx={h.cx} cy={h.cy} r={h.size}
            fill={i === 0 ? "rgba(196,144,58,0.55)" : "rgba(196,144,58,0.30)"}
            animate={{
              x: [0, (Math.random() - 0.5) * 4, 0],
              y: [0, (Math.random() - 0.5) * 4, 0],
            }}
            transition={{ duration: 3 + h.delay * 0.6, repeat: Infinity, ease: "easeInOut", delay: h.delay }}
          />
          {/* Inner dot */}
          <circle cx={h.cx} cy={h.cy} r={h.size * 0.4} fill="rgba(245,158,11,0.6)" />
        </motion.g>
      ))}

      {/* Direction arrows (group moving) */}
      <motion.g
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <line x1="215" y1="90" x2="240" y2="85" stroke="rgba(196,144,58,0.20)" strokeWidth="1.5" />
        <polygon points="240,82 248,85 240,88" fill="rgba(196,144,58,0.25)" />
      </motion.g>

      {/* Label */}
      <text x="150" y="155" textAnchor="middle" fill="rgba(255,255,255,0.18)" fontSize="9" fontFamily="system-ui">Facilitation sociale</text>
    </svg>
  )
}

export function VidaManada() {
  return (
    <section
      id="vida-manada"
      className="min-h-screen py-24 md:py-32 bg-background relative overflow-hidden border-t border-white/5"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" />
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
          <span className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold">Módulo 03 · Comportamiento Social</span>
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
            style={{ fontSize: "clamp(3rem, 9vw, 6rem)" }}
          >
            Vida en Manada
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-lg md:text-xl text-muted-foreground/60 font-light italic mb-14"
        >
          La manada es seguridad
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-14">
          {/* Herd diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] bg-white/[0.02] border border-white/[0.05] p-8 flex flex-col items-center gap-4"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-amber-400/45 font-semibold">Estructura Social</p>
            <HerdDiagram />
            <p className="text-xs text-muted-foreground/40 text-center font-light italic">
              Las señales sociales deben ser claras y concretas
            </p>
          </motion.div>

          {/* Benefit cards */}
          <div className="flex flex-col gap-4">
            {BENEFITS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <TiltCard intensity={7} className="group">
                  <div className="p-5 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:bg-amber-500/[0.05] hover:border-amber-500/20 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <span className="text-xl mt-0.5">{card.icon}</span>
                      <div>
                        <p className="font-display text-lg font-semibold text-foreground/90 mb-1">{card.title}</p>
                        <p className="text-sm text-foreground/55 font-light leading-relaxed">{card.desc}</p>
                      </div>
                      <span className="font-mono text-[10px] text-amber-500/25 font-bold ml-auto shrink-0">{card.num}</span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lucy Rees quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-xl mx-auto text-center p-8 rounded-[2rem] bg-amber-500/[0.03] border border-amber-500/12"
        >
          <div className="absolute -top-5 left-8 font-display text-7xl text-amber-400/10 leading-none select-none">&ldquo;</div>
          <p className="text-lg font-display italic text-foreground/70 leading-relaxed mb-4 relative z-10">
            Los caballos son animales sociales que necesitan la compañía de sus congéneres para su bienestar mental y físico.
          </p>
          <p className="text-[10px] tracking-[0.4em] uppercase text-amber-400/45 font-semibold">— Lucy Rees</p>
        </motion.div>
      </div>
    </section>
  )
}
