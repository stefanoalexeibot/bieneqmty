"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Info, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  { id: 1, tag: "Paso 01", title: "Limpieza Profunda", desc: "Uso riguroso de la cuchilla para encontrar el tejido sano y la suela funcional.", icon: "🧹" },
  { id: 2, tag: "Paso 02", title: "Tratamiento de Ranilla", desc: "Recortar solo el tejido muerto que interfiere con el mecanismo de bombeo.", icon: "🐸" },
  { id: 3, tag: "Paso 03", title: "Ajuste de Barras", desc: "Rebajar las barras para que no soporten peso directamente y evitar hematomas.", icon: "⚖️" },
  { id: 4, tag: "Paso 04", title: "Nivelado de Muralla", desc: "Nivelar desde el talón hasta las lumbres buscando el equilibrio látero-medial.", icon: "📏" },
  { id: 5, tag: "Paso 05", title: "Mustang Roll", desc: "El acabado final: un borde ovalado que previene grietas y fomenta el grosor.", icon: "🐴" }
]

export function Modulo9() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (newDirection: number) => {
    if (current + newDirection >= 0 && current + newDirection < steps.length) {
      setDirection(newDirection)
      setCurrent(current + newDirection)
    }
  }

  return (
    <section id="modulo-9" className="min-h-screen py-32 bg-background relative flex flex-col justify-center overflow-hidden border-t border-white/5">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_oklch(0.72_0.14_68_/_0.05)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col gap-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.6em] text-amber-500 font-black uppercase mb-4 block">Módulo 09 · El Arte del Recorte</span>
            <h2 className="font-display text-5xl md:text-[7rem] font-bold text-white tracking-tighter leading-none">
               Técnica <br /> <span className="text-amber-400 italic">Paso a Paso</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => paginate(-1)}
              disabled={current === 0}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 disabled:opacity-20 transition-all group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => paginate(1)}
              disabled={current === steps.length - 1}
              className="w-16 h-16 rounded-full border border-amber-500/50 bg-amber-500/10 flex items-center justify-center hover:bg-amber-500/20 disabled:opacity-20 transition-all group"
            >
              <ChevronRight className="w-6 h-6 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Slider Area */}
        <div className="relative min-h-[500px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="w-full grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Left: Content */}
              <div className="space-y-8">
                 <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/5">
                    <span className="text-amber-500 text-lg">{steps[current].icon}</span>
                    <span className="text-xs font-black text-amber-500 uppercase tracking-[0.3em]">{steps[current].tag}</span>
                 </div>
                 
                 <h3 className="font-display text-5xl md:text-[5rem] font-bold text-white tracking-tighter leading-tight">
                    {steps[current].title}
                 </h3>

                 <p className="text-2xl text-white/40 font-light leading-relaxed">
                    {steps[current].desc}
                 </p>

                 <div className="flex items-center gap-6 pt-8">
                    <div className="flex items-center gap-2">
                       <CheckCircle2 className="w-5 h-5 text-amber-500" />
                       <span className="text-xs uppercase tracking-widest text-white/60 font-medium">Técnica Aprobada</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <Info className="w-5 h-5 text-white/20" />
                       <span className="text-xs uppercase tracking-widest text-white/30 font-medium">Requiere práctica</span>
                    </div>
                 </div>
              </div>

              {/* Right: Visual Placeholder (Must be Premium) */}
              <div className="relative group aspect-square lg:aspect-video rounded-[3rem] overflow-hidden border border-white/5 bg-white/[0.02]">
                 <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-[15rem] font-black text-white/[0.03] select-none group-hover:scale-110 transition-transform duration-[2s]">
                       0{steps[current].id}
                    </span>
                 </div>
                 {/* This would be the actual video/image of the step */}
                 <div className="absolute bottom-12 left-12 right-12 p-8 rounded-[2rem] bg-black/40 backdrop-blur-md border border-white/10">
                    <p className="text-sm text-white/60 italic font-light">"El recorte debe ser conservador, escuchando siempre la sensibilidad del caballo."</p>
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-8">
           <motion.div 
             className="h-full bg-amber-500"
             initial={{ width: 0 }}
             animate={{ width: `${((current + 1) / steps.length) * 100}%` }}
             transition={{ duration: 0.5 }}
           />
        </div>

      </div>
    </section>
  )
}

