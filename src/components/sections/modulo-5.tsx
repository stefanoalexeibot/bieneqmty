"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowDownToLine, ArrowUpFromLine, Activity } from "lucide-react"

const steps = [
  { icon: <ArrowDownToLine className="w-12 h-12" />, title: "IMPACTO", desc: "El casco se expande hacia afuera.", accent: "from-amber-500/20", delay: 0 },
  { icon: <Activity className="w-12 h-12" />, title: "ABSORCIÓN", desc: "La almohadilla plantar absorbe y bombea sangre.", accent: "from-amber-600/20", delay: 0.2 },
  { icon: <ArrowUpFromLine className="w-12 h-12" />, title: "REBOTE", desc: "El pie se levanta, formando un vacío.", accent: "from-amber-400/20", delay: 0.4 }
]

function BloodFlowSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 80" fill="none" className={className} aria-hidden>
      {/* Flow path */}
      <path d="M 0 40 Q 75 20 150 40 Q 225 60 300 40 Q 375 20 450 40 Q 525 60 600 40"
        stroke="currentColor" strokeWidth="1.5" opacity="0.25" fill="none"/>
      {/* Animated flow dots */}
      {[0, 120, 240, 360, 480].map((offset, i) => (
        <motion.circle key={i} cx={offset} cy={40} r="4" fill="currentColor" opacity="0.5"
          animate={{ cx: [offset, offset + 600] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.7, ease: "linear" }}
        />
      ))}
    </svg>
  )
}

function PulseSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 100" fill="none" className={className} aria-hidden>
      <motion.circle
        cx="150" cy="50" r="30"
        stroke="currentColor" strokeWidth="1.5" fill="none"
        animate={{ r: [30, 55, 30], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.circle
        cx="150" cy="50" r="30"
        stroke="currentColor" strokeWidth="1" fill="none"
        animate={{ r: [30, 75, 30], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
      />
      <circle cx="150" cy="50" r="10" fill="currentColor" opacity="0.4"/>
    </svg>
  )
}

export function Modulo5() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])

  return (
    <section id="modulo-5" ref={ref} className="min-h-screen py-32 bg-background relative flex items-center overflow-hidden border-t border-white/5">
      {/* Premium Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
         <img src="/assets/curso/backgrounds/hoof-texture.png" className="w-full h-full object-cover grayscale" alt="" />
      </div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-700/8 blur-[180px] rounded-full pointer-events-none" />

      {/* Blood flow SVG */}
      <div className="absolute bottom-10 left-0 right-0 text-blue-500/20 pointer-events-none">
        <BloodFlowSVG className="w-full h-14" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col justify-center">

        {/* Headline section */}
        <div className="mb-20 text-center relative">
          <motion.div style={{ y }} className="pointer-events-none select-none">
            <p className="font-display text-[12vw] font-bold text-white/[0.025] tracking-tighter leading-none">
              FISIOLOGÍA
            </p>
          </motion.div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
            <span className="text-xs tracking-[0.45em] text-blue-400/70 uppercase font-semibold">Módulo 05</span>
            <h3 className="font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40 pb-2"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              La Bomba de Sangre
            </h3>
          </div>

          {/* Pulse animation center */}
          <div className="absolute right-[12%] top-1/2 -translate-y-1/2 text-blue-500/15 pointer-events-none hidden lg:block">
            <PulseSVG className="w-40 h-20" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 relative mt-6">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[10%] left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: s.delay }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6 }}
              className="relative bg-white/[0.025] border border-white/[0.06] rounded-[2rem] p-10 hover:bg-blue-500/[0.05] hover:border-blue-500/20 transition-all duration-500 backdrop-blur-xl group flex flex-col items-center mt-12 lg:mt-0"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${s.accent.replace("amber", "blue")} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem] pointer-events-none`} />

              {/* Icon circle */}
              <div className="bg-background border border-white/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto -mt-[5rem] mb-8 text-white/25 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10 relative group-hover:border-blue-500/30 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                {s.icon}
              </div>

              {/* Step number */}
              <span className="text-[10px] tracking-[0.4em] text-blue-500/40 uppercase font-semibold mb-3 relative z-10">
                0{i + 1}
              </span>

              <h4 className="font-display text-3xl md:text-4xl font-bold text-white text-center tracking-widest mb-4 relative z-10">
                {s.title}
              </h4>
              <p className="text-white/40 text-center font-light leading-relaxed text-lg relative z-10">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
