"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

interface HeroSplitProps {
  data: any
}

export function HeroSplit({ data }: HeroSplitProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center min-h-screen p-12 lg:p-24 relative overflow-hidden bg-black">
      {/* Background glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.04)_0%,transparent_70%)]" />
      
      <div className="flex-1 space-y-8 relative z-10">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-amber-500 font-mono text-xs font-bold tracking-[0.4em] uppercase"
        >
          {data.parte}
        </motion.span>
        <h1 className="text-6xl md:text-9xl font-display font-bold text-white leading-[0.85] tracking-tighter">
          {data.titulo}
        </h1>
        <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-xl">
          {data.texto_instructor || data.descripcion}
        </p>
        
        {data.cita_destacada && (
          <blockquote className="border-l-2 border-amber-500/50 pl-8 py-4 italic text-xl text-amber-400 font-display">
            "{data.cita_destacada}"
          </blockquote>
        )}
      </div>

      <div className="flex-1 w-full aspect-square md:aspect-video rounded-[40px] overflow-hidden bg-white/5 border border-white/10 shadow-3xl group relative">
        {/* Dynamic Image or Video Preview */}
        {data.media?.imagen_principal || data.media?.imagen_fondo ? (
          <img 
            src={data.media.imagen_principal || data.media.imagen_fondo} 
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
            alt={data.titulo}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent mix-blend-overlay" />
        )}
        
        <div className="w-full h-full flex items-center justify-center relative z-10">
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 cursor-pointer">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>
      </div>
    </div>
  )
}
