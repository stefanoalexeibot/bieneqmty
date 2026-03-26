"use client"

import { motion } from "framer-motion"
import { TiltCard } from "@/components/ui/tilt-card"
import { Target, MessageSquare, Compass, Sparkles } from "lucide-react"

const GUIDING_QUESTIONS = [
  "¿Cómo viviría mi caballo en su hábitat natural?",
  "¿De qué lo estamos privando al domesticarlo?",
  "¿Cómo me puedo relacionar mejor con él?",
]

function ParticipantCard({ num }: { num: number }) {
  const label = String(num).padStart(2, "0")
  return (
    <TiltCard intensity={12} className="group">
      <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 backdrop-blur-xl border border-white/10 hover:bg-amber-500/[0.08] hover:border-amber-500/30 transition-all duration-700 flex flex-col gap-6 min-h-[180px] relative overflow-hidden">
        {/* Subtle internal glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/5 blur-[40px] rounded-full group-hover:bg-amber-500/10 transition-colors" />
        
        <div className="flex items-start justify-between">
          <span className="font-mono text-4xl font-black text-amber-500/20 group-hover:text-amber-500/40 transition-colors leading-none tracking-tighter">{label}</span>
          <MessageSquare className="w-6 h-6 text-amber-500/10 group-hover:text-amber-500/30 transition-colors" />
        </div>
        
        <div className="flex-1 flex flex-col gap-4">
          <div className="h-px w-full bg-white/5 group-hover:bg-amber-500/20 transition-colors" />
          <p className="text-[10px] text-white/20 tracking-[0.2em] uppercase font-bold group-hover:text-white/40 transition-colors">Interrogante Principal</p>
        </div>
      </div>
    </TiltCard>
  )
}

export function Presentacion() {
  return (
    <section
      id="presentacion"
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center p-12 lg:p-24"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        
        {/* Left: Narrative Context */}
        <div className="space-y-16">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-10 bg-amber-500" />
              <span className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-black">Apertura del Proceso</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-medium text-white tracking-tighter leading-[0.9]"
              style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}
            >
              Módulo <span className="text-amber-500">00</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-white/40 font-light leading-relaxed font-display italic max-w-xl"
            >
              "El conocimiento comienza con la pregunta correcta. Cuéntanos, ¿por qué estás aquí hoy?"
            </motion.p>
          </div>

          {/* Guiding questions with cinematic cards */}
          <div className="space-y-8 pl-4 border-l-2 border-amber-500/10">
            {GUIDING_QUESTIONS.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.15 }}
                className="flex items-start gap-8 group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-black transition-all">
                   <Compass className="w-4 h-4" />
                </div>
                <p className="text-xl text-white/60 font-medium font-display leading-tight group-hover:text-white transition-colors">
                  {q}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Participant Interactive Grid */}
        <div className="relative">
          <div className="absolute -inset-10 bg-amber-500/5 blur-[80px] rounded-full animate-pulse" />
          
          <div className="grid grid-cols-2 gap-6 relative z-10">
            {Array.from({ length: 6 }, (_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
              >
                <ParticipantCard num={i + 1} />
              </motion.div>
            ))}
          </div>

          {/* Floating Action Tip */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-3xl px-8 py-4 rounded-full border border-white/10 flex items-center gap-4 shadow-2xl"
          >
             <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
             <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-black whitespace-nowrap">Completa tu perfil de alumno</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
