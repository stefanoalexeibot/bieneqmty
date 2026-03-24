"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

function HeartbeatSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" fill="none" className={className} aria-hidden>
      <motion.polyline
        points="0,30 30,30 40,5 50,55 60,30 80,30 90,20 100,40 110,30 200,30"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
      />
    </svg>
  )
}

function HoofDiagramSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 180" fill="none" className={className} aria-hidden>
      {/* Hoof wall */}
      <path d="M 30 20 Q 30 0 80 0 Q 130 0 130 20 L 140 160 Q 140 175 120 175 L 40 175 Q 20 175 20 160 Z"
        stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.06" />
      {/* Sole */}
      <ellipse cx="80" cy="158" rx="42" ry="12" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.1"/>
      {/* Frog (ranilla) */}
      <path d="M 60 148 Q 80 130 100 148 Q 90 165 80 168 Q 70 165 60 148 Z"
        stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.15"/>
      {/* Arrows showing expansion */}
      <motion.g
        animate={{ scaleX: [1, 1.12, 1], scaleY: [1, 0.95, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "80px 90px" }}
      >
        <line x1="10" y1="90" x2="0"   y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <line x1="150" y1="90" x2="160" y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <polyline points="4,85 0,90 4,95" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <polyline points="156,85 160,90 156,95" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
      </motion.g>
    </svg>
  )
}

export function Modulo1() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])

  return (
    <section id="modulo-1" ref={ref} className="min-h-screen py-32 bg-background relative flex items-center justify-center overflow-hidden border-t border-white/5">
      {/* Ambient glow */}
      <div className="absolute left-0 top-0 w-[700px] h-[700px] bg-amber-600/8 blur-[180px] rounded-full pointer-events-none" />
      {/* Dot grid accent */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: "radial-gradient(oklch(1 0 0 / 3%) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      {/* Decorative heartbeat line */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center text-amber-500/20 pointer-events-none">
        <HeartbeatSVG className="w-[600px] h-14" />
      </div>

      {/* Hoof diagram — background decoration */}
      <motion.div style={{ y }}
        className="absolute right-8 bottom-8 text-amber-400/[0.07] pointer-events-none w-48 h-60 hidden lg:block">
        <HoofDiagramSVG className="w-full h-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col justify-center items-center text-center">
        {/* Module label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="h-px w-12 bg-amber-500/40" />
          <span className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold">Módulo 01 · Más que queratina</span>
          <div className="h-px w-12 bg-amber-500/40" />
        </motion.div>

        <motion.h2
          style={{ y }}
          className="font-display font-bold text-[12vw] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground/90 to-foreground/20 leading-[1.05] mb-14 pointer-events-none select-none"
        >
          ES UN CORAZÓN
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl w-full"
        >
          {[
            {
              title: "Amortiguador biomecánico",
              body: "Maneja fuerzas inmensas a cada paso, disipando la energía para proteger articulaciones y tendones.",
              icon: "◈"
            },
            {
              title: "Bomba de sangre",
              body: "Con cada expansión y contracción, bombea sangre de regreso al cuerpo, aliviando el trabajo del corazón principal.",
              icon: "◉"
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group p-8 md:p-10 rounded-[2rem] bg-white/[0.025] border border-white/[0.06] backdrop-blur-lg hover:bg-amber-500/[0.05] hover:border-amber-500/20 transition-all duration-500 text-left relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]" />
              <span className="text-amber-400/50 text-2xl mb-5 block">{card.icon}</span>
              <h4 className="font-display text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight">{card.title}</h4>
              <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
