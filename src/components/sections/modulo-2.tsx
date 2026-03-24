"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Leaf, Activity, Scissors } from "lucide-react"
import { useRef } from "react"

const pillars = [
  { icon: <Leaf className="w-14 h-14"/>, title: "DIETA", val: "FIBRA", desc: "Baja en azúcares y melazas", accent: "from-emerald-500/15" },
  { icon: <Activity className="w-14 h-14"/>, title: "RITMO", val: "20KM", desc: "Movimiento diario constante", accent: "from-amber-500/15" },
  { icon: <Scissors className="w-14 h-14"/>, title: "CORTE", val: "MUSTANG", desc: "Desgaste natural imitado", accent: "from-amber-600/15" }
]

function PillarDecorSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" fill="none" className={className} aria-hidden>
      {/* Abstract pillar / column */}
      <rect x="45" y="0" width="30" height="8" rx="2" fill="currentColor" opacity="0.4"/>
      <rect x="50" y="8" width="20" height="180" rx="4" fill="currentColor" opacity="0.08"/>
      <rect x="45" y="188" width="30" height="8" rx="2" fill="currentColor" opacity="0.3"/>
      {/* Decorative rings around pillar */}
      <ellipse cx="60" cy="60" rx="35" ry="8" stroke="currentColor" strokeWidth="1" opacity="0.15" fill="none"/>
      <ellipse cx="60" cy="100" rx="35" ry="8" stroke="currentColor" strokeWidth="1" opacity="0.1" fill="none"/>
      <ellipse cx="60" cy="140" rx="35" ry="8" stroke="currentColor" strokeWidth="1" opacity="0.08" fill="none"/>
    </svg>
  )
}

export function Modulo2() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const xDecor = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])

  return (
    <section id="modulo-2" ref={ref} className="min-h-screen py-32 bg-background relative flex items-center overflow-hidden border-t border-white/5">
      <div className="absolute right-0 bottom-0 w-[700px] h-[700px] bg-amber-600/7 blur-[180px] rounded-full pointer-events-none" />

      {/* Scrolling watermark */}
      <motion.div style={{ x: xDecor }}
        className="whitespace-nowrap opacity-[0.025] absolute top-8 left-0 pointer-events-none select-none">
        <h2 className="text-[18vw] leading-none font-display font-bold text-foreground tracking-tighter">
          PILARES PILARES
        </h2>
      </motion.div>

      {/* Decorative pillars */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400/20 pointer-events-none hidden xl:block">
        <PillarDecorSVG className="w-20 h-36" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        {/* Module header */}
        <motion.div style={{ y }}
          className="mb-20 flex items-end gap-6">
          <div>
            <p className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold mb-2">Módulo 02</p>
            <h3 className="font-display font-bold text-5xl md:text-7xl text-foreground tracking-tight leading-none">
              Los Tres<br /><span className="text-amber-400 italic">Pilares</span>
            </h3>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-amber-500/30 to-transparent mb-3 hidden md:block" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 relative z-20">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative p-10 lg:p-12 rounded-[2.5rem] bg-white/[0.025] border border-white/[0.06] hover:bg-white/[0.05] hover:border-amber-500/20 transition-all duration-700 backdrop-blur-2xl flex flex-col items-center justify-center text-center overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${p.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              {/* Rotating ring on hover */}
              <motion.div
                className="absolute inset-0 rounded-[2.5rem] border border-amber-500/0 group-hover:border-amber-500/15 transition-all duration-700"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <div className="text-white/15 group-hover:text-amber-400 transition-colors duration-700 mb-8 transform group-hover:scale-110 group-hover:-translate-y-1 relative z-10">
                {p.icon}
              </div>

              <p className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/30 tracking-tighter leading-none mb-4 relative z-10 group-hover:scale-105 transition-transform duration-700">
                {p.val}
              </p>

              <h3 className="text-sm font-bold tracking-[0.5em] text-white/40 mb-3 uppercase relative z-10">{p.title}</h3>
              <p className="text-amber-400/80 font-medium tracking-wide text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700 relative z-10">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
