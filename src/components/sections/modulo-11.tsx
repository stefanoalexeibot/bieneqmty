"use client"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, ChevronRight, CheckCircle2, Zap, Target } from "lucide-react"
import { cn } from "@/lib/utils"

const milestones = [
  { mes: "0m", titulo: "Día Cero", desc: "Retirada de herraduras. Inicio de la inflamación reparadora y desintoxicación.", color: "text-amber-500" },
  { mes: "1-3m", titulo: "Sensibilidad", desc: "El casco se adapta al suelo. Uso de botas necesario. El pie comienza a expandirse.", color: "text-amber-400" },
  { mes: "4-8m", titulo: "Reconstrucción", desc: "Crecimiento de una nueva muralla más densa y conexión laminar fuerte.", color: "text-amber-300" },
  { mes: "12m", titulo: "Consolidación", desc: "Casco 100% renovado. Callosidad en la suela y total funcionalidad.", color: "text-amber-200" }
]

export function Modulo11() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="modulo-11" ref={ref} className="min-h-screen py-32 bg-background relative flex flex-col justify-center overflow-hidden border-t border-white/5">
      {/* Background ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_oklch(0.72_0.14_68_/_0.03)_0%,_transparent_50%)]" />

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-amber-500/40" />
              <span className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold">Módulo 11 · Meta</span>
              <div className="h-px w-10 bg-amber-500/40" />
            </div>
            <h2 className="font-display text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-6">
               Calendario de <br /> <span className="text-amber-400 italic">Transición</span>
            </h2>
            <p className="text-xl text-white/40 font-light leading-relaxed">
              La transición es una maratón, no un sprint. Entender los tiempos biológicos es clave para el éxito.
            </p>
          </motion.div>
        </div>

        {/* Timeline Interaction */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          
          {/* Steps list */}
          <div className="space-y-4">
            {milestones.map((step, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveStep(i)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "w-full p-6 rounded-2xl border flex items-center justify-between transition-all duration-500 group",
                  activeStep === i 
                    ? "bg-amber-500/10 border-amber-500/50" 
                    : "bg-white/[0.02] border-white/5 hover:border-white/20"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "text-xs font-black tracking-widest uppercase transition-colors",
                    activeStep === i ? "text-amber-400" : "text-white/20"
                  )}>
                    {step.mes}
                  </div>
                  <div className={cn(
                    "font-display text-xl font-medium transition-colors",
                    activeStep === i ? "text-white" : "text-white/40 group-hover:text-white/60"
                  )}>
                    {step.titulo}
                  </div>
                </div>
                <ChevronRight className={cn(
                  "w-4 h-4 transition-transform duration-500",
                  activeStep === i ? "rotate-90 text-amber-500" : "text-white/10"
                )} />
              </motion.button>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-12 md:p-16 rounded-[3rem] bg-amber-500/5 border border-amber-500/20 backdrop-blur-3xl relative overflow-hidden h-full flex flex-col justify-center"
              >
                <Calendar className="w-16 h-16 text-amber-500/20 absolute top-12 right-12" />
                
                <div className="space-y-8 relative z-10">
                   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      <span className="text-xs font-black text-amber-400 uppercase tracking-widest">Hito de {milestones[activeStep].mes}</span>
                   </div>

                   <h3 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
                      {milestones[activeStep].titulo}
                   </h3>

                   <p className="text-2xl text-white/50 font-light leading-relaxed max-w-2xl">
                      {milestones[activeStep].desc}
                   </p>

                   <div className="flex items-center gap-4 pt-6">
                      <div className="flex -space-x-3">
                         {[1,2,3].map(i => (
                           <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-amber-500/20 flex items-center justify-center">
                              <CheckCircle2 className="w-4 h-4 text-amber-500" />
                           </div>
                         ))}
                      </div>
                      <span className="text-sm text-amber-500/40 uppercase tracking-widest font-bold">Progreso biológico verificado</span>
                   </div>
                </div>

                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center space-y-4"
        >
           <div className="inline-flex items-center gap-4 rounded-full border border-white/5 bg-white/[0.02] px-8 py-4 px-10">
              <span className="text-[10px] tracking-[0.5em] text-white/20 uppercase font-black uppercase font-black">Bieneq Mty · Metodología Barefoot</span>
           </div>
        </motion.div>

      </div>
    </section>
  )
}

