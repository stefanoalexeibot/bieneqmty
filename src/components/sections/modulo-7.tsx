"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Map, Footprints, Wind } from "lucide-react"

const tracks = [
  { icon: <Map className="w-10 h-10" />, title: "TRACKS", desc: "Senderos estrechos que obligan al caballo a moverse constantemente.", color: "group-hover:text-emerald-400" },
  { icon: <Footprints className="w-10 h-10" />, title: "TERRENOS", desc: "Grava, arena y roca para estimular y endurecer el casco naturalmente.", color: "group-hover:text-amber-400" },
  { icon: <Wind className="w-10 h-10" />, title: "ESTÍMULOS", desc: "Agua, comida y sombra separados para imitar el nomadismo.", color: "group-hover:text-emerald-300" }
]

function PaddockLayoutSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" fill="none" className={className} aria-hidden>
      {/* Outer fence */}
      <rect x="10" y="10" width="280" height="280" rx="8"
        stroke="currentColor" strokeWidth="1.5" opacity="0.15" strokeDasharray="6 4"/>
      {/* Inner path (track) */}
      <rect x="45" y="45" width="210" height="210" rx="6"
        stroke="currentColor" strokeWidth="8" opacity="0.12" fill="none"/>
      {/* Inner open area */}
      <rect x="80" y="80" width="140" height="140" rx="4"
        stroke="currentColor" strokeWidth="1" opacity="0.08" fill="none"/>
      {/* Stations (food, water, shade) */}
      <circle cx="150" cy="25"  r="7" fill="currentColor" opacity="0.3"/>
      <circle cx="275" cy="150" r="7" fill="currentColor" opacity="0.25"/>
      <circle cx="150" cy="275" r="7" fill="currentColor" opacity="0.3"/>
      <circle cx="25"  cy="150" r="7" fill="currentColor" opacity="0.25"/>
      {/* Station labels */}
      <line x1="150" y1="32" x2="150" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      <line x1="268" y1="150" x2="255" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      <line x1="150" y1="268" x2="150" y2="255" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      <line x1="32"  y1="150" x2="45"  y2="150" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      {/* Moving horse dot on track */}
      <motion.circle r="5" fill="currentColor" opacity="0.5"
        animate={{
          cx: [150, 255, 255, 150, 45, 45, 150],
          cy: [45,  45,  150, 255, 255, 150, 45],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  )
}

export function Modulo7() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const layoutScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

  return (
    <section id="modulo-7" ref={ref} className="min-h-screen py-32 bg-background relative flex items-center overflow-hidden border-t border-white/5">
      <div className="absolute left-0 bottom-0 w-[900px] h-[900px] bg-emerald-900/8 blur-[220px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

          {/* Left: text */}
          <div className="w-full lg:w-1/2">
            <motion.div style={{ y }}>
              <span className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold block mb-4">Módulo 07</span>
              <h2 className="font-display font-bold text-[13vw] lg:text-[9vw] leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/20 tracking-tighter mb-5">
                PADDOCK
              </h2>
              <p className="text-2xl lg:text-3xl font-light text-white/45 tracking-[0.15em] uppercase mb-8">
                El entorno cura
              </p>
              <p className="text-lg text-white/40 font-light leading-relaxed max-w-md">
                Un establo cuadrado de 4×4 enferma la mente y el cuerpo. El{" "}
                <strong className="text-foreground font-semibold">Paddock Paradise</strong> cambia recintos
                estáticos por <strong className="text-amber-400">circuitos dinámicos</strong>.
              </p>
            </motion.div>

            {/* Paddock SVG */}
            <motion.div style={{ scale: layoutScale }}
              className="mt-10 text-emerald-400/20 w-40 h-40 hidden lg:block">
              <PaddockLayoutSVG className="w-full h-full" />
            </motion.div>
          </div>

          {/* Right: feature cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {tracks.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ x: -4, scale: 1.01 }}
                className="group p-7 rounded-[1.75rem] bg-white/[0.025] border border-white/[0.06] hover:bg-emerald-500/[0.05] hover:border-emerald-500/20 transition-all duration-500 flex gap-6 items-center backdrop-blur-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className={`text-white/20 ${t.color} transition-colors duration-500 shrink-0 relative z-10`}>
                  {t.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white tracking-[0.2em] mb-1.5">{t.title}</h3>
                  <p className="text-white/45 font-light text-sm md:text-base leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
