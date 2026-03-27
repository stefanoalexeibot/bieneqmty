"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { TiltCard } from "@/components/ui/tilt-card"

function HeartbeatSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" fill="none" className={className} aria-hidden>
      <motion.path
        d="M 0 30 L 28 30 L 38 6 L 50 54 L 60 30 L 78 30 L 88 20 L 100 40 L 110 30 L 200 30"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
      />
    </svg>
  )
}

function ExpansionSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 180" fill="none" className={className} aria-hidden>
      <motion.g
        animate={{ scaleX: [1, 1.14, 1], scaleY: [1, 0.93, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "80px 90px" }}
      >
        <path d="M 30 20 Q 30 0 80 0 Q 130 0 130 20 L 140 160 Q 140 175 120 175 L 40 175 Q 20 175 20 160 Z"
          stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.07"/>
        <ellipse cx="80" cy="158" rx="42" ry="12" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.12"/>
        <path d="M 60 148 Q 80 130 100 148 Q 90 165 80 168 Q 70 165 60 148 Z"
          stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.18"/>
        {/* Expansion arrows */}
        <line x1="5" y1="90" x2="-8" y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <line x1="155" y1="90" x2="168" y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <polyline points="-4,85 -8,90 -4,95" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <polyline points="164,85 168,90 164,95" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
      </motion.g>
    </svg>
  )
}

export function Modulo1() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])

  return (
    <section id="modulo-1" ref={ref}
      className="min-h-screen py-32 bg-background relative flex items-center justify-center overflow-hidden border-t border-white/5">
      {/* Premium Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
         <img src="/assets/curso/backgrounds/hoof-texture.png" className="w-full h-full object-cover grayscale" alt="" />
      </div>
      
      <div className="absolute left-0 top-0 w-[700px] h-[700px] bg-blue-600/8 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-25"
        style={{ backgroundImage: "radial-gradient(oklch(1 0 0 / 3%) 1px, transparent 1px)", backgroundSize: "40px 40px" }}/>

      {/* Heartbeat line */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center text-blue-500/18 pointer-events-none">
        <HeartbeatSVG className="w-[600px] h-14" />
      </div>

      {/* Expansion diagram */}
      <motion.div style={{ y }}
        className="absolute right-8 bottom-12 text-blue-400/[0.08] pointer-events-none w-44 h-56 hidden lg:block">
        <ExpansionSVG className="w-full h-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}
          className="flex items-center gap-4 mb-10">
          <div className="h-px w-12 bg-blue-500/40" />
          <span className="text-xs tracking-[0.45em] text-blue-400/70 uppercase font-semibold">Módulo 01 · Más que queratina</span>
          <div className="h-px w-12 bg-blue-500/40" />
        </motion.div>

        <motion.h2 style={{ y }}
          className="font-display font-bold text-[12vw] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground/90 to-foreground/20 leading-[1.05] mb-14 pointer-events-none select-none">
          ES UN CORAZÓN
        </motion.h2>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }} viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
          {[
            {
              title: "Amortiguador biomecánico",
              body: "Maneja fuerzas inmensas a cada paso, disipando la energía para proteger articulaciones y tendones.",
              icon: "◈", num: "01"
            },
            {
              title: "Bomba de sangre",
              body: "Con cada expansión y contracción, bombea sangre de regreso al cuerpo, aliviando el trabajo del corazón principal.",
              icon: "◉", num: "02"
            }
          ].map((card, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}>
              <TiltCard intensity={10}
                className="group p-8 md:p-10 rounded-[2rem] bg-white/[0.025] border border-white/[0.06] backdrop-blur-lg hover:bg-blue-500/[0.05] hover:border-blue-500/20 transition-all duration-500 text-left relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]" />
                <div className="absolute top-5 right-6 font-display text-5xl font-bold text-white/[0.04] select-none">{card.num}</div>
                <span className="text-blue-400/50 text-2xl mb-5 block">{card.icon}</span>
                <h4 className="font-display text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight relative z-10">{card.title}</h4>
                <p className="text-white/50 text-base md:text-lg font-light leading-relaxed relative z-10">{card.body}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

