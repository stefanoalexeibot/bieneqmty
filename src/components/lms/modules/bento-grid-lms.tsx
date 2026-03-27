"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Magnetic } from "@/components/ui/magnetic"

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
  const imageBg = data.media?.imagen_fondo || data.media?.imagen_principal

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
        ) : imageBg ? (
          <img src={imageBg} className="w-full h-full object-cover opacity-20 grayscale" alt="" />
        ) : (
          <div className="w-full h-full bg-zinc-950" />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-12">
        {/* Cinematic Header */}
        <div className="max-w-3xl space-y-4">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex items-center gap-4"
           >
             <div className="h-px w-12 bg-amber-500/50" />
             <span className="text-amber-500 font-mono text-xs md:text-sm font-black tracking-[0.5em] uppercase">
               {data.parte} · {data.titulo}
             </span>
           </motion.div>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-[0.85] text-balance"
           >
             {data.titulo_intro || data.titulo}
           </motion.h2>
        </div>

        {/* Premium Bento Grid with Magnetic Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map((item: BentoItem, i: number) => {
            // Dynamic Spanning Logic
            const isFirst = i === 0;
            const isLast = i === items.length - 1 && items.length >= 6;
            
            return (
              <Magnetic key={i} strength={0.1} className={cn(
                isFirst ? "md:col-span-2 md:row-span-2 h-[500px]" : "h-[240px]",
                isLast ? "md:col-span-2" : ""
              )}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "relative h-full w-full rounded-[2.5rem] p-8 overflow-hidden group border border-white/5 flex flex-col justify-between transition-all duration-500 shadow-2xl",
                    isFirst 
                      ? "bg-zinc-900/50" 
                      : "bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-amber-500/30"
                  )}
                >
                  {/* Background Content Image */}
                  {item.imagen && (
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={item.imagen} 
                        className={cn(
                          "w-full h-full object-cover transition-all duration-700 opacity-20 group-hover:scale-110 group-hover:opacity-40",
                          isFirst ? "opacity-40 grayscale-[0.5] group-hover:grayscale-0" : "grayscale group-hover:grayscale-0"
                        )} 
                        alt={item.titulo} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col justify-end h-full">
                     <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/20 shadow-inner">
                        <span className="font-mono text-base font-black text-amber-500">
                          0{i + 1}
                        </span>
                     </div>

                     <h3 className={cn(
                       "font-display font-bold tracking-tight mb-2",
                       isFirst ? "text-3xl md:text-5xl leading-[1.1] text-white" : "text-xl text-white/95"
                     )}>
                       {item.titulo}
                     </h3>
                     <p className={cn(
                       "text-base leading-relaxed font-light",
                       isFirst ? "text-white/70 max-w-md" : "text-zinc-400 group-hover:text-zinc-200 transition-colors"
                     )}>
                       {item.descripcion}
                     </p>
                  </div>

                  {/* Tracking Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </motion.div>
              </Magnetic>
            )
          })}
        </div>
      </div>
    </div>
  )
}
