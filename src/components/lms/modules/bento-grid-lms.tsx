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
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-8 lg:p-24 overflow-hidden">
      
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
          <div className="w-full h-full bg-gradient-to-b from-black via-zinc-900 to-black" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-16">
        {/* Cinematic Header */}
        <div className="max-w-3xl space-y-6">
           <motion.span 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="text-amber-500 font-mono text-sm font-bold tracking-[0.5em] uppercase"
           >
             Módulo {data.numero} · Conceptos Clave
           </motion.span>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight leading-none"
           >
             {data.titulo}
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="text-xl md:text-2xl text-white/50 font-light leading-relaxed font-display italic"
           >
             {data.texto_principal}
           </motion.p>
        </div>

        {/* Premium Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 auto-rows-[280px]">
          {items.map((item: BentoItem, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={cn(
                "relative rounded-[2.5rem] p-10 overflow-hidden group border border-white/10 backdrop-blur-xl transition-all duration-500",
                i === 0 
                  ? "md:col-span-2 md:row-span-2 bg-amber-500 shadow-[0_0_50px_rgba(245,158,11,0.2)]" 
                  : "bg-white/5 hover:bg-white/10 hover:border-white/20"
              )}
            >
              {/* Decorative lens flare for primary item */}
              {i === 0 && (
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 blur-[100px] rounded-full -translate-y-1/3 translate-x-1/3" />
              )}

              <div className="relative z-10 h-full flex flex-col justify-end">
                 <div className={cn(
                   "w-12 h-12 rounded-2xl flex items-center justify-center mb-8",
                   i === 0 ? "bg-black/10" : "bg-amber-500/10"
                 )}>
                    <span className={cn(
                      "font-mono text-sm font-black",
                      i === 0 ? "text-black" : "text-amber-500"
                    )}>
                      0{i + 1}
                    </span>
                 </div>

                 <h3 className={cn(
                   "text-3xl font-display font-bold tracking-tight mb-4",
                   i === 0 ? "text-black leading-none" : "text-white leading-tight"
                 )}>
                   {item.titulo}
                 </h3>
                 <p className={cn(
                   "text-base leading-relaxed font-light",
                   i === 0 ? "text-black/60" : "text-white/40"
                 )}>
                   {item.descripcion}
                 </p>
              </div>

              {/* Sophisticated hover effect */}
              {i !== 0 && (
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
