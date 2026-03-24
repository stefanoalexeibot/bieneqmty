"use client"

import { motion } from "framer-motion"
import { TiltCard } from "@/components/ui/tilt-card"

function FlightDistanceSVG() {
  return (
    <svg viewBox="0 0 200 80" fill="none" className="w-full h-auto" aria-hidden>
      {/* Terrain line */}
      <path d="M10 55 Q30 50 50 55 Q70 60 90 52 Q110 45 130 54 Q150 60 170 53 Q185 50 195 55"
        stroke="rgba(196,144,58,0.25)" strokeWidth="1.5" fill="none" />
      {/* Arrow showing distance */}
      <line x1="20" y1="35" x2="170" y2="35" stroke="rgba(196,144,58,0.4)" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="170,32 178,35 170,38" fill="rgba(196,144,58,0.5)" />
      <polygon points="20,32 12,35 20,38" fill="rgba(196,144,58,0.5)" />
      {/* Horse dot (threat side) */}
      <circle cx="20" cy="50" r="5" fill="rgba(239,68,68,0.4)" />
      <circle cx="20" cy="50" r="2" fill="rgba(239,68,68,0.7)" />
      {/* Horse dot (horse) */}
      <circle cx="170" cy="49" r="5" fill="rgba(196,144,58,0.4)" />
      <circle cx="170" cy="49" r="2" fill="rgba(196,144,58,0.7)" />
      {/* Label */}
      <text x="95" y="28" textAnchor="middle" fill="rgba(196,144,58,0.6)" fontSize="9" fontFamily="monospace">400–500 m</text>
    </svg>
  )
}

function HerdSVG() {
  return (
    <svg viewBox="0 0 200 80" fill="none" className="w-full h-auto" aria-hidden>
      {/* Group of horse dots representing herd */}
      {[
        { cx: 60, cy: 42 }, { cx: 80, cy: 35 }, { cx: 100, cy: 44 },
        { cx: 75, cy: 55 }, { cx: 115, cy: 38 }, { cx: 95, cy: 58 },
      ].map((pos, i) => (
        <motion.circle
          key={i}
          cx={pos.cx} cy={pos.cy} r={i === 0 ? 7 : 5}
          fill={`rgba(196,144,58,${i === 0 ? 0.6 : 0.3})`}
          animate={{ r: [i === 0 ? 7 : 5, (i === 0 ? 7 : 5) + 1, i === 0 ? 7 : 5] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
        />
      ))}
      {/* Connection lines */}
      <line x1="60" y1="42" x2="80" y2="35" stroke="rgba(196,144,58,0.1)" strokeWidth="1" />
      <line x1="80" y1="35" x2="100" y2="44" stroke="rgba(196,144,58,0.1)" strokeWidth="1" />
      <line x1="80" y1="35" x2="75" y2="55" stroke="rgba(196,144,58,0.1)" strokeWidth="1" />
      <line x1="100" y1="44" x2="115" y2="38" stroke="rgba(196,144,58,0.1)" strokeWidth="1" />
      <line x1="100" y1="44" x2="95" y2="58" stroke="rgba(196,144,58,0.1)" strokeWidth="1" />
    </svg>
  )
}

const MANADA_CARDS = [
  {
    icon: "⚡",
    title: "Ahorro de energía",
    desc: "Vigilancia rotativa: mientras unos comen, otros montan guardia. El grupo reduce el costo individual de supervivencia.",
    color: "amber"
  },
  {
    icon: "⚖️",
    title: "Normas sociales",
    desc: "Jerarquía clara y comunicación precisa. Las reglas del grupo minimizan conflictos y mantienen la cohesión.",
    color: "amber"
  },
  {
    icon: "🤸",
    title: "Juego y coordinación",
    desc: "El juego desarrolla habilidades motoras y sociales. Los potrillos aprenden las normas del grupo mediante el juego.",
    color: "amber"
  },
]

export function HabitatPresa() {
  return (
    <section
      id="habitat-presa"
      className="min-h-screen py-24 md:py-32 bg-background relative overflow-hidden border-t border-white/5"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-[-100px] w-[500px] h-[500px] bg-amber-500/6 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: "radial-gradient(oklch(1 0 0 / 3%) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-6xl mx-auto w-full px-6 relative z-10">
        {/* Module label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-10 bg-amber-500/40" />
          <span className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold">Módulo 02 · Hábitat & Comportamiento</span>
          <div className="h-px w-10 bg-amber-500/40" />
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-foreground leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            Hábitat & Animal de Presa
          </motion.h2>
        </div>

        {/* TOP: Two info cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Card 1: Animal de Presa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <TiltCard intensity={10} className="group h-full">
              <div className="p-8 rounded-[2rem] bg-white/[0.025] border border-white/[0.06] hover:bg-amber-500/[0.05] hover:border-amber-500/20 transition-all duration-500 h-full flex flex-col gap-4">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]" />
                <div className="absolute top-5 right-6 font-display text-6xl font-bold text-white/[0.03] select-none">01</div>

                <p className="text-[10px] tracking-[0.4em] uppercase text-amber-400/50 font-semibold">Animal de Presa</p>

                <div>
                  <span className="font-display font-bold text-amber-400 leading-none" style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}>400–500m</span>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/50 mt-1">Distancia de huida</p>
                </div>

                <p className="text-sm text-foreground/60 font-light leading-relaxed flex-1">
                  Primero huyo, después pienso. Instinto puro de supervivencia. El cerebro límbico domina ante cualquier amenaza percibida.
                </p>

                <div className="mt-2">
                  <FlightDistanceSVG />
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 2: Distancia de Huida */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <TiltCard intensity={10} className="group h-full">
              <div className="p-8 rounded-[2rem] bg-white/[0.025] border border-white/[0.06] hover:bg-amber-500/[0.05] hover:border-amber-500/20 transition-all duration-500 h-full flex flex-col gap-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]" />
                <div className="absolute top-5 right-6 font-display text-6xl font-bold text-white/[0.03] select-none">02</div>

                <p className="text-[10px] tracking-[0.4em] uppercase text-amber-400/50 font-semibold">Terreno & Velocidad</p>

                <p className="font-display text-2xl md:text-3xl font-bold text-foreground/90 leading-tight">
                  Diseñado para el <span className="text-amber-400">escape</span>
                </p>

                <p className="text-sm text-foreground/60 font-light leading-relaxed flex-1">
                  Se desarrolló en terrenos largos y llanos para maximizar la velocidad de escape. No pelea — huye. Esta diferencia lo cambia todo en el manejo.
                </p>

                <div className="mt-2 grid grid-cols-2 gap-3">
                  {[
                    { val: "60 km/h", label: "Velocidad máx." },
                    { val: "1-3 km", label: "Carrera sostenida" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                      <p className="font-display font-bold text-amber-400/80 text-lg">{stat.val}</p>
                      <p className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground/40 mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* BOTTOM: Vida en Manada */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-[10px] tracking-[0.45em] uppercase text-amber-400/50 font-semibold mb-3">Módulo 03</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Vida en Manada</h3>
            <p className="text-muted-foreground/60 font-light">La facilitation sociale: ventajas del grupo</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {MANADA_CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <TiltCard intensity={8} className="group h-full">
                  <div className="p-6 rounded-[1.5rem] bg-white/[0.025] border border-white/[0.06] hover:bg-amber-500/[0.05] hover:border-amber-500/20 transition-all duration-500 h-full">
                    <span className="text-2xl mb-3 block">{card.icon}</span>
                    <h4 className="font-display text-xl font-semibold text-foreground/90 mb-2">{card.title}</h4>
                    <p className="text-sm text-foreground/55 font-light leading-relaxed">{card.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Social signals note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xl mx-auto text-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04]"
          >
            <div className="mb-3">
              <HerdSVG />
            </div>
            <p className="text-sm text-muted-foreground/60 font-light italic">
              "Las señales sociales deben ser claras y concretas"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
