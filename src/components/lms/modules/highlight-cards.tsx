"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { LucideIcon, Zap, Shield, Heart, Info, Star } from "lucide-react"
import { Magnetic } from "@/components/ui/magnetic"

interface HighlightItem {
  titulo: string
  descripcion: string
  iconText?: string
  color?: string
  imagen?: string
}

const ICON_MAP: Record<string, any> = {
  "zap": Zap,
  "shield": Shield,
  "heart": Heart,
  "info": Info,
  "star": Star
}

export function HighlightCards({ data }: any) {
  const interactions = data.interactions || data.interacciones || []
  const items = interactions.find((i: any) => i.tipo === "highlights")?.items || []
  const bgImage = data.media?.imagen_fondo || data.media?.imagen_principal

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center p-8 md:p-16 lg:p-24 overflow-hidden bg-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 scale-105">
        {bgImage && (
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2 }}
            src={bgImage} 
            className="w-full h-full object-cover grayscale" 
            alt="Background" 
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.4em] font-black">
              {data.parte || "Profundización"}
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white tracking-tighter leading-[0.9] text-balance"
          >
            {data.titulo}
          </motion.h2>
        </div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item: HighlightItem, idx: number) => {
            const IconComp = ICON_MAP[item.iconText?.toLowerCase() || ""] || Zap
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full min-h-[380px] rounded-[3rem] bg-white/[0.03] border border-white/10 p-12 lg:p-14 flex flex-col justify-between hover:bg-white/[0.06] hover:border-amber-500/30 transition-all duration-700 overflow-hidden"
              >
                {/* Background Number Decal */}
                <div className="absolute -bottom-10 -right-10 text-[18rem] font-display font-black text-white/[0.02] select-none pointer-events-none group-hover:text-amber-500/[0.03] transition-colors duration-1000">
                  {idx + 1}
                </div>
                
                {/* Background Glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/[0.03] blur-[100px] rounded-full group-hover:bg-amber-500/10 transition-colors duration-1000" />
                
                <div className="relative z-10 space-y-8">
                  <Magnetic strength={0.2}>
                    <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-amber-500/30 group-hover:bg-amber-500/10 transition-all duration-500 cursor-pointer shadow-2xl">
                      <IconComp className="w-8 h-8 text-amber-500/80 group-hover:text-amber-500" />
                    </div>
                  </Magnetic>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl lg:text-4xl font-display font-black text-white tracking-tighter leading-none text-balance">
                      {item.titulo}
                    </h3>
                    <p className="text-xl lg:text-2xl text-white/40 font-light leading-snug group-hover:text-white/60 transition-all duration-500 max-w-[90%]">
                      {item.descripcion}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex items-center gap-6 pt-10">
                  <div className="h-px w-12 bg-amber-500/30 group-hover:w-full transition-all duration-700" />
                  <span className="font-mono text-xs font-black text-white/20 uppercase tracking-[0.4em] mb-1">{String(idx + 1).padStart(2, '0')}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
