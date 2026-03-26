"use client"

import { useState } from "react"
import { motion } from "framer-motion"
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
      className="group perspective-1000 w-full h-[450px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full h-full duration-500 preserve-3d"
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-[2.5rem] overflow-hidden border border-white/10 shadow-xl bg-white/5">
           {item.imagen_fondo && (
             <img src={item.imagen_fondo} alt={item.frente_titulo} className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
           )}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
              <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-bold mb-2">Pilar Clave</span>
              <h3 className="text-4xl font-display font-bold text-white tracking-tighter leading-none">
                {item.frente_titulo}
              </h3>
              <div className="mt-6 flex items-center gap-3">
                <span className="w-8 h-px bg-amber-500/30" />
                <span className="text-[10px] uppercase tracking-widest text-white/40">Toca para descubrir</span>
              </div>
           </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center bg-amber-500 border border-amber-400/50 shadow-2xl"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="absolute top-10 w-12 h-px bg-black/10" />
          <h4 className="text-black/40 text-[10px] uppercase tracking-[0.5em] font-black mb-8">Información</h4>
          <p className="text-black text-2xl md:text-3xl font-display font-bold leading-tight tracking-tight">
            {item.dorso_texto}
          </p>
          <div className="absolute bottom-12 flex items-center gap-2 text-black/40 text-[9px] uppercase tracking-widest font-bold">
            <span>Volver</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function FlipCardGallery({ data }: { data: any }) {
  const interactions = data.interactions || data.interacciones || []
  const flipCards = interactions.find((i: any) => i.tipo === "flip-cards")?.items || []

  return (
    <div className="space-y-12">
      {data.bloques_lectura?.map((b: any, i: number) => (
        <div key={i} className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="flex-1">
             <h2 className="text-3xl font-display font-bold text-white mb-6 tracking-tight">{b.titulo}</h2>
             <p className="text-xl text-white/50 font-light leading-relaxed">{b.texto}</p>
          </div>
          {b.imagen_lateral && (
             <div className="w-full lg:w-1/3 rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                <img src={b.imagen_lateral} alt={b.titulo} className="w-full h-full object-cover" />
             </div>
          )}
        </div>
      ))}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flipCards.map((item: any, i: number) => (
          <FlipCard key={i} item={item} />
        ))}
      </div>
    </div>
  )
}
