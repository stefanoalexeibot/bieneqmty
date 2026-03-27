"use client"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Plus, X, Target } from "lucide-react"
import { cn } from "@/lib/utils"

const hotspots = [
  { 
    id: "autoregulacion", 
    coordenadas: { x: "20%", y: "30%" }, 
    titulo: "Autoregulación", 
    texto: "Casco salvaje desgastándose en terreno duro al ritmo de crecimiento.",
    imagen_dinamica: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "bomba-sangre", 
    coordenadas: { x: "50%", y: "40%" }, 
    titulo: "Bomba de Sangre", 
    texto: "Visualización del retorno venoso: la ranilla toca el suelo y bombea sangre.",
    imagen_dinamica: "https://images.unsplash.com/photo-1598974357851-98166a9f9b44?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "suela-concava", 
    coordenadas: { x: "80%", y: "30%" }, 
    titulo: "Suela Cóncava", 
    texto: "Vista desde abajo que muestra la protección natural para las estructuras internas.",
    imagen_dinamica: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "paredes-perpendiculares", 
    coordenadas: { x: "35%", y: "70%" }, 
    titulo: "Paredes Perpendiculares", 
    texto: "El ángulo de crecimiento sin distorsiones ni ensanchamientos laterales.",
    imagen_dinamica: "https://images.unsplash.com/photo-1590422750058-2fb0c058eb7b?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "angulo-perfecto", 
    coordenadas: { x: "65%", y: "70%" }, 
    titulo: "Ángulo Perfecto", 
    texto: "Corte transversal 3D de la alineación interna perfecta con el eje del dedo.",
    imagen_dinamica: "/assets/curso/hoof-anatomy-3d.png" // Since this one exists
  }
]

export function Modulo3() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  const [activeId, setActiveId] = useState<string | null>(null)
  const baseImage = "https://images.unsplash.com/photo-1620021625895-3047de71ee60?auto=format&fit=crop&q=80&w=1200"
  const [currentImage, setCurrentImage] = useState(baseImage)

  const handleSpotClick = (spot: any) => {
    if (activeId === spot.id) {
      setActiveId(null)
      setCurrentImage(baseImage)
    } else {
      setActiveId(spot.id)
      setCurrentImage(spot.imagen_dinamica || baseImage)
    }
  }

  return (
    <section id="modulo-3" ref={ref} className="min-h-screen py-32 bg-background relative flex items-center justify-center overflow-hidden border-t border-white/5">
      {/* Premium Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
         <img src="/assets/curso/backgrounds/hoof-texture.png" className="w-full h-full object-cover grayscale" alt="" />
      </div>

      {/* Background ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.15_0.02_240)_0%,_transparent_70%)] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.72_0.14_240_/_0.05)_0%,_transparent_60%)]" />

      {/* Large watermark */}
      <motion.h2
        style={{ y }}
        className="font-display text-[20vw] font-bold text-white/[0.02] tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap z-0"
      >
        MUSTANG MODEL
      </motion.h2>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1 text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-blue-500/40" />
              <span className="text-xs tracking-[0.45em] text-blue-400/70 uppercase font-semibold">Módulo 03</span>
            </div>
            <h3 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-none">
              El Modelo <br /> <span className="text-blue-400 italic">Salvaje</span>
            </h3>
            <p className="text-xl text-white/40 font-light leading-relaxed max-w-xl">
              El casco mustang es la referencia de salud. Su estructura se autoregula para soportar el movimiento extremo en terrenos áridos.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {activeId && (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8 bg-blue-500/5 border border-blue-500/20 rounded-[2rem] backdrop-blur-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2" />
                <h4 className="text-2xl font-display font-bold text-blue-400 mb-3">
                  {hotspots.find(s => s.id === activeId)?.titulo}
                </h4>
                <p className="text-white/60 leading-relaxed text-lg">
                  {hotspots.find(s => s.id === activeId)?.texto}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {!activeId && (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="flex items-center gap-4 text-blue-500/40"
             >
                <Target className="w-5 h-5 animate-pulse" />
                <span className="text-xs uppercase tracking-[0.3em] font-black">Haz clic en los puntos para explorar</span>
             </motion.div>
          )}
        </div>

        {/* Interactive Image Container */}
        <div className="flex-[1.5] w-full aspect-square md:aspect-video lg:aspect-square relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900/40 shadow-2xl group"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImage}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.6 }}
                src={currentImage} 
                alt="Modelo Mustang"
                className="w-full h-full object-contain"
              />
            </AnimatePresence>
            
            {/* Hotspots layer */}
            <div className="absolute inset-0">
              {hotspots.map((spot) => (
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
                        layoutId="hotspot-ring-landing"
                        className="absolute w-12 h-12 border-2 border-blue-500 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                      />
                    )}
                    
                    <motion.div 
                      animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="absolute w-8 h-8 bg-blue-400 rounded-full blur-sm"
                    />
                    
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500",
                      activeId === spot.id 
                        ? "bg-white text-black scale-125 rotate-45" 
                        : "bg-blue-500 text-white hover:scale-110"
                    )}>
                      {activeId === spot.id ? <X className="w-3" /> : <Plus className="w-3.5" />}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


