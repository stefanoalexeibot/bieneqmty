"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Zap, Target } from "lucide-react"

function HorseshoeSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 310" fill="none" className={className} aria-hidden>
      <path d="M 45 20 L 45 165 A 105 105 0 0 1 255 165 L 255 20"
        stroke="currentColor" strokeWidth="44" strokeLinecap="butt" fill="none"/>
      <circle cx="45"  cy="65"  r="5.5" fill="currentColor" opacity="0.3"/>
      <circle cx="45"  cy="125" r="5.5" fill="currentColor" opacity="0.3"/>
      <circle cx="62"  cy="218" r="5.5" fill="currentColor" opacity="0.3"/>
      <circle cx="100" cy="258" r="5.5" fill="currentColor" opacity="0.3"/>
      <circle cx="200" cy="258" r="5.5" fill="currentColor" opacity="0.3"/>
      <circle cx="238" cy="218" r="5.5" fill="currentColor" opacity="0.3"/>
      <circle cx="255" cy="125" r="5.5" fill="currentColor" opacity="0.3"/>
      <circle cx="255" cy="65"  r="5.5" fill="currentColor" opacity="0.3"/>
    </svg>
  )
}

function TimelineBarSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 60" fill="none" className={className} aria-hidden>
      {/* Timeline */}
      <line x1="0" y1="30" x2="400" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.15"/>
      {/* Month markers */}
      {[0, 1, 2, 3, 4, 5, 6, 9, 12].map((m, i, arr) => {
        const x = (i / (arr.length - 1)) * 400
        return (
          <g key={m}>
            <motion.circle cx={x} cy={30} r={m === 0 ? 4 : m === 12 ? 7 : 3}
              fill="currentColor"
              opacity={m === 0 ? 0.4 : m === 12 ? 0.8 : 0.2}
              animate={m === 12 ? { r: [7, 10, 7], opacity: [0.8, 0.4, 0.8] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <text x={x} y={50} fill="currentColor" fontSize="7" textAnchor="middle" opacity="0.25" fontFamily="sans-serif">
              {m}m
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export function Modulo11() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <section id="modulo-11" ref={ref} className="min-h-screen py-32 bg-background relative flex flex-col justify-center overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-amber-700/6 blur-[220px] rounded-full pointer-events-none" />

      {/* Background horseshoe */}
      <motion.div style={{ y }}
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 text-amber-400/[0.05] pointer-events-none w-[500px] h-[500px] hidden xl:block">
        <HorseshoeSVG className="w-full h-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col items-center">

        {/* Heading */}
        <motion.div style={{ y, opacity }} className="text-center mb-20 w-full">
          <div className="flex items-center gap-4 justify-center mb-6">
            <div className="h-px w-10 bg-amber-500/40" />
            <span className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold">Módulo 11 · El Punto de Inflexión</span>
            <div className="h-px w-10 bg-amber-500/40" />
          </div>
          <h2 className="font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/10 tracking-tighter leading-none"
            style={{ fontSize: "clamp(4rem, 14vw, 12rem)" }}>
            TRANSICIÓN
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 w-full max-w-5xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="p-10 lg:p-12 rounded-[2.5rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.06] flex flex-col justify-center backdrop-blur-3xl group hover:border-amber-500/20 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-700/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2.5rem]" />
            <Zap className="w-14 h-14 text-yellow-400 mb-7 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.6)] relative z-10" />
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-white tracking-widest mb-5 relative z-10">LO DIFÍCIL</h3>
            <p className="text-white/45 text-base lg:text-lg font-light leading-relaxed relative z-10">
              Quitar las herraduras destapa daños ocultos por años. El dolor inicial no es del "pie descalzo",
              sino de la <strong className="text-foreground font-semibold">rehabilitación</strong> anatómica forzada.
              Requiere botas, paciencia y fe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="p-10 lg:p-12 rounded-[2.5rem] bg-gradient-to-bl from-amber-500/10 to-transparent border border-amber-500/25 flex flex-col justify-center backdrop-blur-3xl group hover:border-amber-500/50 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem]" />
            <Target className="w-14 h-14 text-amber-400 mb-7 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(196,144,58,0.6)] relative z-10" />
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-white tracking-widest mb-5 relative z-10">LA VICTORIA</h3>
            <p className="text-white/45 text-base lg:text-lg font-light leading-relaxed relative z-10">
              En 6–12 meses, verás nacer un casco denso, ancho y con una concavidad perfecta.
              Un caballo revitalizado, <strong className="text-amber-400 font-semibold">seguro de cada paso</strong> sobre cualquier terreno.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl text-amber-400/40 px-6"
        >
          <p className="text-[9px] tracking-[0.4em] uppercase text-center text-muted-foreground/30 mb-3">Línea de tiempo de rehabilitación</p>
          <TimelineBarSVG className="w-full h-14" />
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 rounded-full border border-amber-500/25 bg-amber-500/6 px-8 py-4 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs tracking-[0.35em] uppercase font-semibold text-amber-400/80">
              Fin del Curso · Pie Descalzo
            </span>
          </div>
          <p className="mt-4 text-muted-foreground/40 text-sm tracking-widest">
            Bieneq Mty · El Arte del Casco Natural
          </p>
        </motion.div>
      </div>
    </section>
  )
}
