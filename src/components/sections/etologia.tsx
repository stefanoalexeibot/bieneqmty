"use client"

import { motion } from "framer-motion"

const HABITAT_TRAITS = [
  "Pocas lluvias · Clima semiárido",
  "Alta variación de temperatura",
  "Suelo abrasivo y duro",
  "Vegetación escasa y dispersa",
  "Espacios abiertos sin refugio",
]

function HabitatSVG() {
  return (
    <svg viewBox="0 0 420 300" fill="none" className="w-full h-auto" aria-hidden>
      {/* Sky */}
      <rect width="420" height="180" fill="rgba(196,120,40,0.04)" />
      {/* Ground */}
      <rect y="180" width="420" height="120" fill="rgba(120,80,30,0.08)" />

      {/* Far mountains */}
      <path d="M0 180 L60 110 L120 145 L180 95 L240 130 L300 105 L360 135 L420 115 L420 180 Z"
        fill="rgba(120,80,40,0.12)" />
      <path d="M0 180 L80 130 L140 155 L210 118 L270 148 L330 122 L380 145 L420 130 L420 180 Z"
        fill="rgba(150,100,50,0.1)" />

      {/* Horizon line */}
      <line x1="0" y1="180" x2="420" y2="180" stroke="rgba(196,144,58,0.18)" strokeWidth="1" />

      {/* Ground terrain */}
      <path d="M0 220 Q50 210 100 225 Q150 235 200 218 Q250 205 300 222 Q350 235 420 215 L420 300 L0 300 Z"
        fill="rgba(100,70,30,0.06)" />

      {/* Rocky shapes on ground */}
      <polygon points="60,222 75,205 90,222" fill="rgba(180,130,60,0.12)" />
      <polygon points="58,222 78,222 68,208" fill="rgba(150,100,40,0.1)" />
      <polygon points="310,218 330,200 350,218" fill="rgba(180,130,60,0.12)" />
      <polygon points="305,218 348,218 327,203" fill="rgba(150,100,40,0.09)" />
      <polygon points="180,225 196,212 212,225" fill="rgba(160,110,45,0.1)" />

      {/* Cactus/shrub 1 */}
      <rect x="138" y="195" width="3" height="28" fill="rgba(100,140,80,0.25)" rx="1.5" />
      <rect x="131" y="202" width="10" height="2.5" fill="rgba(100,140,80,0.25)" rx="1.25" />
      <rect x="141" y="207" width="8" height="2.5" fill="rgba(100,140,80,0.25)" rx="1.25" />

      {/* Cactus/shrub 2 */}
      <rect x="258" y="200" width="3" height="22" fill="rgba(100,140,80,0.22)" rx="1.5" />
      <rect x="252" y="206" width="9" height="2.5" fill="rgba(100,140,80,0.22)" rx="1.25" />
      <rect x="262" y="211" width="7" height="2.5" fill="rgba(100,140,80,0.22)" rx="1.25" />

      {/* Sparse shrub 3 */}
      <ellipse cx="370" cy="228" rx="16" ry="8" fill="rgba(90,120,60,0.15)" />
      <ellipse cx="375" cy="222" rx="10" ry="6" fill="rgba(90,120,60,0.12)" />

      {/* Sparse shrub 4 */}
      <ellipse cx="40" cy="232" rx="12" ry="6" fill="rgba(90,120,60,0.13)" />

      {/* Animated sun */}
      <motion.g
        animate={{ y: [4, 0, 4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="340" cy="55" r="22" fill="rgba(255,180,50,0.18)" />
        <circle cx="340" cy="55" r="15" fill="rgba(255,180,50,0.22)" />
        {/* Sun rays */}
        {[0,45,90,135,180,225,270,315].map((angle, i) => {
          const rad = angle * Math.PI / 180
          const x1 = 340 + 18 * Math.cos(rad)
          const y1 = 55 + 18 * Math.sin(rad)
          const x2 = 340 + 28 * Math.cos(rad)
          const y2 = 55 + 28 * Math.sin(rad)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,180,50,0.25)" strokeWidth="2" strokeLinecap="round" />
        })}
      </motion.g>

      {/* Heat shimmer lines */}
      <motion.g
        animate={{ opacity: [0.3, 0.7, 0.3], scaleY: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "210px 200px" }}
      >
        <line x1="100" y1="200" x2="320" y2="200" stroke="rgba(255,180,50,0.05)" strokeWidth="1" />
        <line x1="80" y1="208" x2="340" y2="208" stroke="rgba(255,180,50,0.04)" strokeWidth="1" />
        <line x1="120" y1="215" x2="300" y2="215" stroke="rgba(255,180,50,0.03)" strokeWidth="1" />
      </motion.g>
    </svg>
  )
}

export function Etologia() {
  return (
    <section
      id="etologia"
      className="min-h-screen py-24 md:py-32 bg-background relative overflow-hidden border-t border-white/5"
    >
      {/* Ambient glow */}
      <div className="absolute top-[-60px] left-[10%] w-[500px] h-[350px] bg-amber-500/7 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: "radial-gradient(oklch(1 0 0 / 3%) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-6xl mx-auto w-full px-6 relative z-10">
        {/* Module label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-px w-10 bg-amber-500/40" />
          <span className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold">Módulo 01 · Parte 1</span>
          <div className="h-px w-10 bg-amber-500/40" />
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-foreground leading-[0.95]"
            style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}
          >
            Etología
          </motion.h2>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-base text-muted-foreground/60 italic mb-5"
        >
          Del griego <em>ethos</em> (costumbre) + <em>logos</em> (estudio)
        </motion.p>

        {/* Definition box */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="border-l-2 border-amber-500/50 pl-5 py-3 mb-14 bg-amber-500/[0.04] rounded-r-xl pr-5"
        >
          <p className="text-base md:text-lg text-foreground/80 font-light leading-relaxed">
            Estudia el comportamiento de los seres vivos en su entorno natural —{" "}
            <span className="text-amber-400 font-medium">NO el de animales domesticados.</span>
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10 mb-14 items-start">
          {/* Left: Habitat SVG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-[2rem] bg-white/[0.02] border border-white/[0.05] p-6 overflow-hidden"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-amber-400/50 font-semibold mb-4">Hábitat Natural</p>
            <HabitatSVG />
          </motion.div>

          {/* Right: Habitat traits list */}
          <div className="flex flex-col gap-4 pt-4">
            <p className="text-[10px] tracking-[0.4em] uppercase text-amber-400/50 font-semibold mb-2">Características del Entorno</p>
            {HABITAT_TRAITS.map((trait, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60 shrink-0" />
                <p className="text-base text-foreground/75 font-light">{trait}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lucy Rees quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-2xl mx-auto text-center"
        >
          <div className="absolute -top-6 left-0 font-display text-8xl text-amber-400/10 leading-none select-none pointer-events-none">&ldquo;</div>
          <p className="text-xl md:text-2xl font-display italic text-foreground/70 leading-relaxed mb-4 relative z-10 px-8">
            Para entender al caballo doméstico, primero debemos entender al caballo salvaje.
          </p>
          <p className="text-[10px] tracking-[0.4em] uppercase text-amber-400/50 font-semibold">— Lucy Rees</p>
        </motion.div>
      </div>
    </section>
  )
}
