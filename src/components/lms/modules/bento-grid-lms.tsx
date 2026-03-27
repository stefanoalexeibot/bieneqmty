"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BentoItem {
  titulo: string
  descripcion: string
  imagen?: string
  color?: string
}

interface BentoGridLMSProps {
  data: any
}

export function BentoGridLMS({ data }: BentoGridLMSProps) {
  const interactions = data.interactions || data.interacciones || []
  const items = interactions.find((i: any) => i.tipo === "bento-items")?.items || []
  
  const videoBg = data.media?.video_fondo
  const imageBg = data.media?.imagen_fondo

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-8 lg:p-24 overflow-hidden bg-black">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {videoBg ? (
          <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover opacity-30 grayscale"
          >
            <source src={videoBg} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-zinc-950" />
        )}
        
        {/* Premium Background Texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay">
           <img src="/assets/curso/backgrounds/technical-grid.png" className="w-full h-full object-cover grayscale" alt="" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.2_0.05_62)_0%,_transparent_70%)] opacity-40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-12">
        {/* Cinematic Header */}
        <div className="max-w-2xl space-y-4">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex items-center gap-4"
           >
             <div className="h-px w-12 bg-amber-500/50" />
             <span className="text-amber-500 font-mono text-base font-black tracking-[0.5em] uppercase">
               Módulo {data.numero} · Herramientas
             </span>
           </motion.div>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter leading-[0.9]"
           >
             {data.titulo}
           </motion.h2>
        </div>

        {/* Premium Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 auto-rows-[240px]">
          {items.map((item: BentoItem, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "relative rounded-[2rem] p-8 overflow-hidden group border border-white/10 flex flex-col justify-between transition-all duration-500 shadow-2xl",
                i === 0 
                  ? "md:col-span-2 md:row-span-2 bg-zinc-900/50" 
                  : "bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-amber-500/30"
              )}
            >
              {/* Background Product Image */}
              {item.imagen && (
                <div className="absolute inset-0 z-0">
                  <img 
                    src={item.imagen} 
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700 opacity-40 group-hover:scale-110 group-hover:opacity-60",
                      i === 0 ? "opacity-60 grayscale-[0.5] group-hover:grayscale-0" : "grayscale group-hover:grayscale-0"
                    )} 
                    alt={item.titulo} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
              )}

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
              </div>

              <div className="relative z-10 flex flex-col justify-end h-full">
                 <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/20">
                    <span className="font-mono text-base font-black text-amber-500">
                      0{i + 1}
                    </span>
                 </div>

                 <h3 className={cn(
                   "font-display font-bold tracking-tight mb-2",
                   i === 0 ? "text-4xl leading-none text-white" : "text-xl text-white/90"
                 )}>
                   {item.titulo}
                 </h3>
                 <p className={cn(
                   "text-base md:text-lg leading-relaxed font-light",
                   i === 0 ? "text-white/80 max-w-sm" : "text-zinc-300"
                 )}>
                   {item.descripcion}
                 </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

