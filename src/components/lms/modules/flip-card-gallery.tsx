"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface FlipCardProps {
  item: {
    frente_titulo: string
    dorso_texto: string
    imagen_fondo?: string
  }
}

function FlipCard({ item }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="group perspective-2000 w-full h-[550px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="relative w-full h-full duration-700 preserve-3d"
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl bg-zinc-900/40 backdrop-blur-md">
           {item.imagen_fondo && (
             <img 
              src={item.imagen_fondo} 
              alt={item.frente_titulo} 
              className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 saturate-[0.8]" 
             />
           )}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-black mb-4"
              >
                Pilar Fundamental
              </motion.span>
              <h3 className="text-5xl font-display font-medium text-white tracking-tighter leading-none mb-8">
                {item.frente_titulo}
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-amber-500/50" />
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Explorar concepto</span>
              </div>
           </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-[3rem] p-16 flex flex-col items-center justify-center text-center bg-amber-500 shadow-[0_0_80px_rgba(245,158,11,0.3)] border border-amber-400"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="absolute top-16 w-16 h-px bg-black/20" />
          <h4 className="text-black/30 text-[10px] uppercase tracking-[0.6em] font-black mb-10">Conocimiento Aplicado</h4>
          <p className="text-black text-3xl md:text-4xl font-display font-medium leading-[1.1] tracking-tight">
            {item.dorso_texto}
          </p>
          <div className="absolute bottom-16 flex flex-col items-center gap-2">
            <span className="text-[9px] uppercase tracking-[0.4em] font-black text-black/40">Barefoot Professional</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function FlipCardGallery({ data }: { data: any }) {
  const interactions = data.interactions || data.interacciones || []
  const flipCards = interactions.find((i: any) => i.tipo === "flip-cards")?.items || []
  
  const bgImage = data.media?.imagen_fondo

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-12 lg:p-24 overflow-hidden">
      
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        {bgImage && (
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src={bgImage} 
            className="w-full h-full object-cover opacity-20 grayscale" 
            alt="" 
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-24">
        {/* Intro Section */}
        {data.bloques_lectura?.map((b: any, i: number) => (
          <div key={i} className="max-w-4xl space-y-10">
             <div className="space-y-4">
                <span className="text-amber-500 font-mono text-sm font-bold tracking-[0.5em] uppercase">Módulo {data.numero}</span>
                <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-display font-black text-white leading-none tracking-tighter mb-4 text-balance">
                  {b.titulo}
                </h2>
             </div>
             <p className="text-2xl md:text-3xl text-white/50 font-light leading-relaxed font-display italic max-w-2xl">
                {b.texto}
             </p>
          </div>
        ))}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {flipCards.map((item: any, i: number) => (
            <FlipCard key={item.frente_titulo} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
