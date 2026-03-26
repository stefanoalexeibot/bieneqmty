"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, ArrowRight, History, CheckCircle2, Milestone } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimelineItem {
  periodo: string
  evento: string
  texto: string
}

interface TimelineViewProps {
  data: any
}

export function TimelineView({ data }: TimelineViewProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const timeline = data.timeline || []

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center p-8 md:p-12 lg:p-24">
      
      {/* Background Cinematic Ambience */}
      <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 3, ease: "circOut" }}
            className="absolute inset-0"
          >
             {data.media?.imagen_fondo && (
               <img src={data.media.imagen_fondo} className="w-full h-full object-cover grayscale" alt="" />
             )}
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" />
          </motion.div>
          {/* Subtle light leak */}
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-amber-500/5 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col gap-16 lg:gap-24">
        
        {/* Header Section */}
        <div className="max-w-4xl space-y-6">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-black uppercase tracking-[0.6em] text-[10px]"
           >
              <Milestone className="w-4 h-4" />
              <span>Calendario de Evolución</span>
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="text-6xl md:text-[8.5rem] font-display font-bold text-white tracking-tighter leading-none"
           >
              {data.titulo}
           </motion.h2>

           <p className="text-2xl text-white/40 font-light leading-relaxed max-w-2xl">
              {data.texto_introduccion || "Sigue la cronología biológica del proceso de transición al barefoot."}
           </p>
        </div>

        {/* Cinematic Navigation Rail */}
        <div className="relative flex items-center justify-between gap-4 px-8 md:px-16">
           {/* Connecting Line Backdrop */}
           <div className="absolute left-16 right-16 h-[2px] bg-white/5 rounded-full -z-10" />
           
           {/* Connecting Line Progress */}
           <div className="absolute left-16 right-16 h-[2px] -z-10 pointer-events-none">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(activeIndex / (timeline.length - 1)) * 100}%` }}
                className="h-full bg-amber-500 transition-all duration-1000 shadow-[0_0_20px_rgba(245,158,11,0.6)]" 
              />
           </div>

           {timeline.map((item: TimelineItem, i: number) => (
             <motion.button
               key={i}
               onClick={() => setActiveIndex(i)}
               className="relative flex flex-col items-center gap-8 group"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 + (i * 0.1) }}
             >
                <div className={cn(
                  "w-20 h-20 rounded-[2rem] border-2 flex items-center justify-center transition-all duration-700 group-hover:scale-110",
                  i === activeIndex 
                    ? "bg-white border-amber-500 text-black shadow-[0_0_50px_rgba(245,158,11,0.4)]" 
                    : i < activeIndex 
                      ? "bg-amber-500/20 border-amber-500/40 text-amber-500" 
                      : "bg-zinc-950 border-white/5 text-white/10"
                )}>
                   {i < activeIndex ? <CheckCircle2 className="w-8 h-8" /> : (
                     <span className="text-xl font-display font-bold">{i + 1}</span>
                   )}
                </div>
                
                <div className="flex flex-col items-center absolute top-full mt-6">
                   <span className={cn(
                     "text-[10px] uppercase font-black tracking-[0.4em] transition-all duration-500 whitespace-nowrap",
                     i === activeIndex ? "text-amber-500 opacity-100" : "text-white/20 opacity-0 group-hover:opacity-40"
                   )}>
                     {item.periodo}
                   </span>
                </div>
             </motion.button>
           ))}
        </div>

        {/* Detailed Milestone Container */}
        <div className="w-full relative min-h-[500px] mt-12">
           <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50, filter: "blur(30px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -50, filter: "blur(30px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/[0.02] border border-white/5 rounded-[4rem] p-16 md:p-24 shadow-3xl relative overflow-hidden flex flex-col md:flex-row items-center gap-20 backdrop-blur-3xl group"
              >
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/[0.03] blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-1000" />
                 
                 <div className="flex-1 space-y-10 relative z-10">
                    <div className="space-y-4">
                       <span className="text-[10px] uppercase tracking-[0.6em] text-amber-500/60 font-black">{timeline[activeIndex].periodo}</span>
                       <h3 className="text-5xl md:text-[6.5rem] font-display font-bold text-white tracking-tighter leading-none">
                          {timeline[activeIndex].evento}
                       </h3>
                    </div>

                    <div className="h-px w-24 bg-amber-500/30" />
                    
                    <p className="text-3xl md:text-4xl text-white/50 font-light leading-snug font-display italic max-w-3xl">
                       "{timeline[activeIndex].texto}"
                    </p>

                    <div className="flex items-center gap-6 pt-8">
                       <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-amber-500" />
                          <span className="text-[10px] uppercase tracking-widest text-white/40 font-black">Hito Biológico</span>
                       </div>
                    </div>
                 </div>

                 {/* Milestone Visual */}
                 <div className="w-full md:w-[450px] aspect-square rounded-[3.5rem] bg-zinc-900 border border-white/5 overflow-hidden relative shadow-2xl shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent mix-blend-overlay z-10" />
                    <img 
                      src={`/assets/curso/transition/step-${activeIndex + 1}.png`} 
                      className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-[4s]" 
                      alt={timeline[activeIndex].evento} 
                      onError={(e) => {
                         (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=1000";
                         (e.target as HTMLImageElement).classList.add("grayscale");
                      }}
                    />
                    <div className="absolute bottom-10 left-10 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl">
                       <span className="text-[10px] uppercase tracking-widest text-white font-black">Escena 0{activeIndex + 1}</span>
                    </div>
                 </div>
              </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </div>
  )
}

