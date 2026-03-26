"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, X, Info, Target } from "lucide-react"
import { cn } from "@/lib/utils"

interface Hotspot {
  id: string
  coordenadas: { x: string; y: string }
  titulo: string
  texto: string
  estado_peligro?: string
}

interface InteractiveHotspotsProps {
  data: any
}

export function InteractiveHotspots({ data }: InteractiveHotspotsProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const hotspots = data.hotspots_externos || []

  const imageSrc = data.media?.imagen_principal || "/assets/placeholder-hoof.webp"

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-amber-500/10 blur-[150px] rounded-full"
          />
      </div>

      {/* Main Interactive Image Container */}
      <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-auto z-10 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] group"
        >
          <img 
            src={imageSrc} 
            alt={data.titulo}
            className="w-full h-full object-contain bg-black/40"
          />
          
          {/* Subtle noise overlay on image */}
          <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

          {/* Hotspots layer */}
          <div className="absolute inset-0">
            {hotspots.map((spot: Hotspot) => (
              <button
                key={spot.id}
                onClick={() => setActiveId(activeId === spot.id ? null : spot.id)}
                style={{ left: spot.coordenadas.x, top: spot.coordenadas.y }}
                className={cn(
                  "absolute -translate-x-1/2 -translate-y-1/2 z-20 group outline-none",
                  activeId === spot.id ? "z-30" : "z-20"
                )}
              >
                <div className="relative flex items-center justify-center">
                  {/* Dynamic Ring */}
                  {activeId === spot.id && (
                    <motion.div 
                      layoutId="hotspot-ring"
                      className="absolute w-16 h-16 border-2 border-amber-500 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                  
                  {/* Pulse effect */}
                  <motion.div 
                    animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute w-10 h-10 bg-amber-400 rounded-full blur-sm"
                  />
                  
                  {/* The dot */}
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl",
                    activeId === spot.id 
                      ? "bg-white text-black scale-125 rotate-45 shadow-amber-500/40" 
                      : "bg-amber-500 text-black hover:scale-110 hover:bg-amber-400 shadow-black/40"
                  )}>
                    {activeId === spot.id ? <X className="w-3.5 h-3.5" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Floating Instructions */}
          {!activeId && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 flex items-center gap-4 shadow-2xl"
            >
               <Target className="w-4 h-4 text-amber-500 animate-pulse" />
               <span className="text-[11px] uppercase tracking-[0.3em] text-white/80 font-bold whitespace-nowrap">Explora la estructura interna</span>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Cinematic Info Overlay */}
      <AnimatePresence>
        {activeId && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: 100 }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed right-10 top-1/2 -translate-y-1/2 w-[400px] z-[40]"
          >
             <div className="bg-black/40 backdrop-blur-[40px] border border-white/15 rounded-[3rem] p-10 shadow-3xl overflow-hidden relative group">
                {/* Internal accent flare */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <span className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-black mb-6 block leading-none">
                  Estructura Detallada
                </span>
                
                <h3 className="text-4xl font-display font-medium text-white mb-6 tracking-tight leading-none">
                  {hotspots.find((s: Hotspot) => s.id === activeId)?.titulo}
                </h3>
                
                <div className="h-px w-10 bg-amber-500/40 mb-8" />
                
                <p className="text-xl text-white/50 font-light leading-relaxed mb-10">
                  {hotspots.find((s: Hotspot) => s.id === activeId)?.texto}
                </p>

                {hotspots.find((s: Hotspot) => s.id === activeId)?.estado_peligro && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="p-5 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-start gap-4"
                  >
                     <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 animate-pulse" />
                     <p className="text-sm text-red-400 font-medium leading-relaxed">
                       {hotspots.find((s: Hotspot) => s.id === activeId)?.estado_peligro}
                     </p>
                  </motion.div>
                )}

                <button 
                  onClick={() => setActiveId(null)}
                  className="mt-10 w-full py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/40 hover:text-white text-xs uppercase tracking-[0.3em] font-bold transition-all"
                >
                  Continuar explorando
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
