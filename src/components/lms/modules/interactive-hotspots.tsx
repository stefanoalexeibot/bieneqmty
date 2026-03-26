"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, X, Info, Target, ShieldCheck, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface Hotspot {
  id: string
  coordenadas: { x: string; y: string }
  titulo: string
  texto: string
  estado_peligro?: string
  imagen_dinamica?: string
}

interface InteractiveHotspotsProps {
  data: any
}

export function InteractiveHotspots({ data }: InteractiveHotspotsProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const hotspots = data.hotspots_externos || []

  const baseImage = data.media?.imagen_principal || "/assets/placeholder-hoof.webp"
  const [currentImage, setCurrentImage] = useState(baseImage)

  const handleSpotClick = (spot: Hotspot) => {
    if (activeId === spot.id) {
      setActiveId(null)
      setCurrentImage(baseImage)
    } else {
      setActiveId(spot.id)
      if (spot.imagen_dinamica) {
        setCurrentImage(spot.imagen_dinamica)
      } else {
        setCurrentImage(baseImage)
      }
    }
  }

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center p-8 md:p-12 lg:p-24">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-amber-500 blur-[200px] rounded-full"
          />
      </div>

      <div className="w-full h-full max-w-[1920px] mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 relative z-10 items-center">
        
        {/* Left: Main Interactive Image Container */}
        <div className="relative w-full h-full flex items-center justify-center min-h-[500px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-square md:aspect-[4/3] rounded-[4rem] overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.8)] group bg-zinc-900/40"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImage}
                initial={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                src={currentImage} 
                alt={data.titulo}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Hotspots layer */}
            <div className="absolute inset-0">
              {hotspots.map((spot: Hotspot) => (
                <button
                  key={spot.id}
                  onClick={() => handleSpotClick(spot)}
                  style={{ left: spot.coordenadas.x, top: spot.coordenadas.y }}
                  className={cn(
                    "absolute -translate-x-1/2 -translate-y-1/2 z-20 group outline-none",
                    activeId === spot.id ? "z-30" : "z-20"
                  )}
                >
                  <div className="relative flex items-center justify-center">
                    {activeId === spot.id && (
                      <motion.div 
                        layoutId="hotspot-ring-lms"
                        className="absolute w-20 h-20 border-2 border-amber-500 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    )}
                    
                    <motion.div 
                      animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="absolute w-12 h-12 bg-amber-400 rounded-full blur-md"
                    />
                    
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl",
                      activeId === spot.id 
                        ? "bg-white text-black scale-125 rotate-45 shadow-amber-500" 
                        : "bg-amber-500 text-white hover:scale-110 hover:bg-amber-400"
                    )}>
                      {activeId === spot.id ? <X className="w-4 h-4" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Floating Label */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-12 left-12 bg-black/40 backdrop-blur-2xl px-8 py-4 rounded-3xl border border-white/10 flex items-center gap-4 shadow-2xl overflow-hidden group"
            >
               <div className="absolute inset-0 bg-amber-500/5 transition-opacity opacity-0 group-hover:opacity-100" />
               <Target className="w-4 h-4 text-amber-500 animate-pulse relative z-10" />
               <span className="text-[11px] uppercase tracking-[0.4em] text-white/80 font-black relative z-10">Exploración Anatómica</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right: Info Area */}
        <div className="flex flex-col justify-center gap-12 h-full">
          <AnimatePresence mode="wait">
            {activeId ? (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="space-y-12"
              >
                 <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/5">
                       <ShieldCheck className="w-4 h-4 text-amber-500" />
                       <span className="text-xs font-black text-amber-500 uppercase tracking-[0.3em]">Hito Clínico</span>
                    </div>
                    
                    <h3 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-6">
                      {hotspots.find((s: Hotspot) => s.id === activeId)?.titulo}
                    </h3>

                    <div className="h-px w-20 bg-amber-500/40" />
                    
                    <p className="text-2xl md:text-3xl text-white/40 font-light leading-relaxed max-w-xl">
                      {hotspots.find((s: Hotspot) => s.id === activeId)?.texto}
                    </p>
                 </div>

                 {hotspots.find((s: Hotspot) => s.id === activeId)?.estado_peligro && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 bg-red-500/5 border border-red-500/20 rounded-[2.5rem] flex items-start gap-6 backdrop-blur-xl relative overflow-hidden group"
                  >
                     <div className="absolute inset-0 bg-red-500/[0.02] animate-pulse" />
                     <AlertCircle className="w-8 h-8 text-red-500 mt-1 relative z-10" />
                     <div className="relative z-10">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-black mb-2 block leading-none">Alerta de Riesgo</span>
                        <p className="text-lg text-red-400/80 font-medium leading-relaxed">
                          {hotspots.find((s: Hotspot) => s.id === activeId)?.estado_peligro}
                        </p>
                     </div>
                  </motion.div>
                 )}

                 <button 
                   onClick={() => {
                     setActiveId(null)
                     setCurrentImage(baseImage)
                   }}
                   className="group flex items-center gap-4 text-xs font-black text-white/40 hover:text-white uppercase tracking-[0.3em] transition-all"
                 >
                   <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all">
                      <X className="w-4 h-4" />
                   </div>
                   Regresar a la visualización general
                 </button>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                 <span className="text-xs tracking-[0.6em] text-amber-500/60 font-black uppercase mb-4 block">Módulo {data.parte || "Interactiva"}</span>
                 <h2 className="text-6xl md:text-[7rem] font-display font-bold text-white tracking-tighter leading-none mb-6">
                    Mecánica <br /> <span className="text-amber-400 italic">del Movimiento</span>
                 </h2>
                 <p className="text-2xl text-white/30 font-light leading-relaxed max-w-lg">
                    Interactúa con los puntos clave para profundizar en la fisiología del casco descalzo.
                 </p>
                 <div className="flex items-center gap-4 pt-8">
                    <div className="w-12 h-px bg-white/10" />
                    <span className="text-[10px] uppercase font-black tracking-[0.5em] text-white/20 italic">Selecciona un marcador para comenzar</span>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  )
}

