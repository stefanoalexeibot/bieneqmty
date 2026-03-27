"use client"

import { motion } from "framer-motion"

interface FullScreenViewProps {
  data: any
}

export function FullScreenView({ data }: FullScreenViewProps) {
  const imageUrl = data.media?.imagen_principal || data.media?.imagen_fondo || "/assets/curso/backgrounds/nature-paddock.png"
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={imageUrl} 
          className="w-full h-full object-cover" 
          alt={data.titulo || "Inmersión Visual"} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </motion.div>
      
      {/* Subtle indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-3"
      >
        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-black">Vista de Inmersión Visual</span>
      </motion.div>
    </div>
  )
}
