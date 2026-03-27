"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, ArrowDown } from "lucide-react"

export function SplitComparison({ data }: any) {
  const [hoverSide, setHoverSide] = useState<"left" | "right" | "none">("none")

  // Extract data with fallbacks to the original "Aterrizaje" content
  const comparison = data.interacciones?.find((i: any) => i.tipo === "comparison") || {}
  
  const left = {
    label: comparison.left?.label || "Patológico",
    title: comparison.left?.title || "Mecánica Tradicional",
    items: comparison.left?.items || [
      "Fuerza el impacto directamente contra el hueso y articulaciones.",
      "Común en caballos con herraduras o dolor en talones."
    ],
    highlight: comparison.left?.highlight || "Mecánica Bloqueada",
    quote: comparison.left?.quote || "No hay expansión lateral. La estructura se atrofia día tras día.",
    image: data.media?.imagen_mala || "/assets/curso/nuevos/horseshoe_damage.png"
  }

  const right = {
    label: comparison.right?.label || "Sano / BieneQ",
    title: comparison.right?.title || "Mecánica Natural",
    items: comparison.right?.items || [
      "La almohadilla digital y la ranilla absorben todo el impacto.",
      "Obliga a la expansión lateral activando la bomba de sangre."
    ],
    highlight: comparison.right?.highlight || "Libertad Total",
    quote: comparison.right?.quote || "El caballo distribuye su peso hacia atrás, protegiendo suspensiones y tendones.",
    image: data.media?.imagen_buena || "/assets/curso/nuevos/landing_healthy.png"
  }

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex font-sans">
      
      {/* LEFT SIDE - BAD/TRADITIONAL */}
      <motion.div
        className="relative flex-1 h-full overflow-hidden flex items-center justify-center group"
        onHoverStart={() => setHoverSide("left")}
        onHoverEnd={() => setHoverSide("none")}
        animate={{ 
          filter: hoverSide === "right" ? "brightness(0.2) grayscale(1)" : "brightness(1) grayscale(0)",
          scale: hoverSide === "left" ? 1.02 : 1
        }}
        transition={{ duration: 0.6, ease: "circOut" }}
      >
        <div className="absolute inset-0 z-0">
          <img src={left.image} className="w-full h-full object-cover scale-110 opacity-40 mix-blend-overlay grayscale" alt="Pathological side" style={{ objectPosition: "center 40%"}} />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-red-950/20 to-black/80" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-lg mx-auto text-left space-y-6 px-12 md:pl-24">
           <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center backdrop-blur-lg mb-8">
             <X className="w-8 h-8 text-red-500" />
           </div>
           
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-500 block">{left.label}</span>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white tracking-tighter leading-[0.85] text-balance">
              {left.title}
            </h3>
           
           <div className="space-y-4 pt-4">
             {left.items.map((item: string, idx: number) => (
               <div key={idx} className="flex items-start gap-4">
                 <ArrowDown className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                 <p className="text-white/60 font-light text-lg">
                   {item}
                 </p>
               </div>
             ))}
           </div>

           <div className="mt-8 pt-8 border-t border-red-500/20">
             <span className="text-red-500/50 font-mono text-sm uppercase tracking-widest font-black">{left.highlight}</span>
             <p className="text-white/40 italic font-display mt-2">{left.quote}</p>
           </div>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div 
        className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 z-50 origin-top"
        animate={{
          x: hoverSide === "left" ? "2vw" : hoverSide === "right" ? "-2vw" : 0,
          backgroundColor: hoverSide === "left" ? "rgba(239,68,68,0.5)" : hoverSide === "right" ? "rgba(245,158,11,0.5)" : "rgba(255,255,255,0.2)"
        }}
        transition={{ duration: 0.6, ease: "circOut" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[120px] rounded-full backdrop-blur-md border border-white/20 bg-black/50 flex flex-col items-center justify-center gap-2">
           <div className="w-1 h-1 rounded-full bg-white/50" />
           <div className="w-1 h-1 rounded-full bg-white/50" />
           <div className="w-1 h-1 rounded-full bg-white/50" />
        </div>
      </motion.div>

      {/* RIGHT SIDE - HEALTHY/GOOD */}
      <motion.div
        className="relative flex-1 h-full overflow-hidden flex items-center justify-center group"
        onHoverStart={() => setHoverSide("right")}
        onHoverEnd={() => setHoverSide("none")}
        animate={{ 
          filter: hoverSide === "left" ? "brightness(0.2) grayscale(1)" : "brightness(1) grayscale(0)",
          scale: hoverSide === "right" ? 1.02 : 1
        }}
        transition={{ duration: 0.6, ease: "circOut" }}
      >
        <div className="absolute inset-0 z-0">
          <img src={right.image} className="w-full h-full object-cover scale-110 opacity-70 mix-blend-overlay grayscale-[0.5]" alt="Healthy side" />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-amber-950/20 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_60%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-lg mx-auto text-left space-y-6 px-12 md:pr-24 lg:pl-24">
           <div className="w-16 h-16 rounded-2xl bg-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.6)] flex items-center justify-center mb-8">
             <Check className="w-8 h-8 text-black" strokeWidth={3} />
           </div>
           
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500 block">{right.label}</span>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white tracking-tighter leading-[0.85] text-balance">
              {right.title}
            </h3>
           
           <div className="space-y-4 pt-4">
             {right.items.map((item: string, idx: number) => (
               <div key={idx} className="flex items-start gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-3" />
                 <p className="text-white/80 font-light text-lg">
                   {item}
                 </p>
               </div>
             ))}
           </div>

           <div className="mt-8 pt-8 border-t border-amber-500/30">
             <span className="text-amber-500 font-mono text-sm uppercase tracking-widest font-black">{right.highlight}</span>
             <p className="text-white/60 italic font-display mt-2">{right.quote}</p>
           </div>
        </div>
      </motion.div>

      {/* Floating Header */}
      <div className="absolute top-12 left-0 right-0 z-50 text-center pointer-events-none">
        <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.8em]">{data.titulo}</span>
      </div>

    </div>
  )
}
