"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, X, Info } from "lucide-react"
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

  // Default image if data.media.imagen_principal is missing (should be generated)
  const imageSrc = data.media?.imagen_principal || "/assets/placeholder-hoof.webp"

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-start py-8">
      {/* Interactive Image Container */}
      <div className="relative flex-1 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 group">
        <img 
          src={imageSrc} 
          alt={data.titulo}
          className="w-full aspect-square object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
        />
        
        {/* Hotspots layer */}
        <div className="absolute inset-0">
          {hotspots.map((spot: Hotspot) => (
            <button
              key={spot.id}
              onClick={() => setActiveId(activeId === spot.id ? null : spot.id)}
              style={{ left: spot.coordenadas.x, top: spot.coordenadas.y }}
              className={cn(
                "absolute -translate-x-1/2 -translate-y-1/2 group z-20",
                activeId === spot.id ? "z-30" : "z-20"
              )}
            >
              <div className="relative flex items-center justify-center">
                {/* Pulse animation */}
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute w-10 h-10 bg-amber-500 rounded-full"
                />
                <div className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300",
                  activeId === spot.id 
                    ? "bg-white text-black scale-125 rotate-45" 
                    : "bg-amber-500 text-black hover:scale-110"
                )}>
                  <Plus className="w-4 h-4" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Legend / Tip */}
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center pointer-events-none">
          <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-3">
             <Info className="w-3.5 h-3.5 text-amber-500" />
             <span className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Pulsa los puntos para explorar</span>
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <div className="w-full lg:w-[400px] shrink-0">
        <AnimatePresence mode="wait">
          {activeId ? (
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl relative overflow-hidden"
            >
              {/* Background gradient for active spot */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[60px] rounded-full" />
              
              <button 
                onClick={() => setActiveId(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 text-white/30 hover:text-white transition-colors"
                title="Cerrar detalle"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold mb-4">
                Punto de Interés
              </span>
              <h3 className="text-3xl font-display font-bold text-white mb-6 tracking-tight">
                {hotspots.find((s: Hotspot) => s.id === activeId)?.titulo}
              </h3>
              <p className="text-lg text-white/60 font-light leading-relaxed mb-8">
                {hotspots.find((s: Hotspot) => s.id === activeId)?.texto}
              </p>

              {hotspots.find((s: Hotspot) => s.id === activeId)?.estado_peligro && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-xs text-red-400/90 font-medium">
                    <span className="font-bold uppercase tracking-wider mr-2 text-red-400">Peligro:</span>
                    {hotspots.find((s: Hotspot) => s.id === activeId)?.estado_peligro}
                  </p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex flex-col justify-center items-center text-center p-12 border-2 border-dashed border-white/5 rounded-[2rem]"
            >
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
                 <Info className="w-8 h-8 text-white/20" />
              </div>
              <h4 className="text-lg font-medium text-white/40 mb-2">Selecciona un punto</h4>
              <p className="text-sm text-white/20">Haz clic en los puntos del casco para ver la anatomía detallada.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
