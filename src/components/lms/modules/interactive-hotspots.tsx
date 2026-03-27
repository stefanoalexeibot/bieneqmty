"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, X, Target, ShieldCheck, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Magnetic } from "@/components/ui/magnetic"

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

// Module-level fallback images
function getModuleFallback(data: any): string {
  const title = (data.titulo || "").toLowerCase()
  if (title.includes("paddock")) return "/assets/curso/paddockparadise.png"
  if (title.includes("mustang")) return "https://images.unsplash.com/photo-1598974357851-98166a9f9b44?auto=format&fit=crop&q=80&w=1400"
  return "https://images.unsplash.com/photo-1590422750058-2fb0c058eb7b?auto=format&fit=crop&q=80&w=1400"
}

// Per-hotspot fallbacks
function getHotspotFallback(titulo: string, data: any): string {
  const t = titulo.toLowerCase()
  if (t.includes("track") || t.includes("pista")) return "/assets/curso/paddockparadise.png"
  if (t.includes("heno") || t.includes("slowfeeder")) return "/assets/curso/pasto en slowfeeder para padock paradise.png"
  if (t.includes("suelo") || t.includes("grava") || t.includes("tierra")) return "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&q=80&w=1400"
  if (t.includes("agua") || t.includes("bebedero")) return "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1400"
  if (t.includes("autoregul")) return "https://images.unsplash.com/photo-1598974357851-98166a9f9b44?auto=format&fit=crop&q=80&w=1400"
  if (t.includes("bomba") || t.includes("sangre")) return "https://images.unsplash.com/photo-1590422750058-2fb0c058eb7b?auto=format&fit=crop&q=80&w=1400"
  if (t.includes("suela") || t.includes("cóncava") || t.includes("concava")) return "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&q=80&w=1400"
  if (t.includes("pared") || t.includes("perpendicular")) return "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=1400"
  if (t.includes("ángulo") || t.includes("angulo") || t.includes("perfecto")) return "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&q=80&w=1400"
  return getModuleFallback(data)
}

export function InteractiveHotspots({ data }: InteractiveHotspotsProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const hotspots = data.hotspots_externos || []

  const moduleFallback = getModuleFallback(data)
  const [currentImage, setCurrentImage] = useState(moduleFallback)

  useEffect(() => {
    const localPath = data.media?.imagen_principal
    if (localPath) {
      const img = new Image()
      img.onload = () => setCurrentImage(localPath)
      img.src = localPath
    }
  }, [data])

  const handleSpotClick = (spot: Hotspot) => {
    if (activeId === spot.id) {
      setActiveId(null)
      setCurrentImage(moduleFallback)
    } else {
      setActiveId(spot.id)
      if (spot.imagen_dinamica) {
        const img = new Image()
        img.onload = () => setCurrentImage(spot.imagen_dinamica!)
        img.onerror = () => setCurrentImage(getHotspotFallback(spot.titulo, data))
        img.src = spot.imagen_dinamica
        setCurrentImage(getHotspotFallback(spot.titulo, data))
      }
    }
  }

  const activeSpot = hotspots.find((s: Hotspot) => s.id === activeId)

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center p-8 md:p-12 lg:p-24">

      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.09, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-amber-500 blur-[200px] rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 3 }}
          className="absolute inset-0"
        >
          <img src={moduleFallback} className="w-full h-full object-cover grayscale" alt="" />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
      </div>

      <div className="w-full h-full max-w-[1920px] mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 relative z-10 items-center">

        <div className="relative w-full h-full flex items-center justify-center min-h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: activeId ? 1.05 : 1 }}
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
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[6s]"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = moduleFallback
                }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />
            
            <div className={cn("absolute inset-0 transition-opacity duration-700", activeId ? "opacity-0 pointer-events-none delay-500" : "opacity-100 delay-100")}>
              {hotspots.map((spot: Hotspot) => (
                <div
                  key={spot.id}
                  style={{ left: spot.coordenadas.x, top: spot.coordenadas.y }}
                  className={cn(
                    "absolute -translate-x-1/2 -translate-y-1/2 z-20",
                    activeId === spot.id ? "z-30" : "z-20"
                  )}
                >
                  <Magnetic strength={0.2}>
                    <button
                      onClick={() => handleSpotClick(spot)}
                      className="group outline-none p-4"
                    >
                      <div className="relative flex items-center justify-center">
                        {activeId === spot.id && (
                          <motion.div
                            layoutId="hotspot-ring-lms"
                            className="absolute w-20 h-20 border-2 border-amber-500 rounded-full"
                          />
                        )}
                        <motion.div
                          animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                          className="absolute w-12 h-12 bg-amber-400 rounded-full blur-md"
                        />
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl",
                          activeId === spot.id ? "bg-white text-black scale-125" : "bg-amber-500 text-white"
                        )}>
                          {activeId === spot.id ? <X className="w-4 h-4" /> : <Plus className="w-5 h-5" />}
                        </div>
                      </div>
                    </button>
                  </Magnetic>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-12 left-12 bg-black/40 backdrop-blur-2xl px-8 py-4 rounded-3xl border border-white/10 flex items-center gap-4"
            >
              <Target className="w-5 h-5 text-amber-500 animate-pulse" />
              <span className="text-sm uppercase tracking-[0.4em] text-white font-black">
                Exploración Anatómica
              </span>
            </motion.div>
          </motion.div>
        </div>

        <div className="flex flex-col justify-center gap-12 h-full">
          <AnimatePresence mode="wait">
            {activeSpot ? (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                className="space-y-12"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/5">
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-black text-amber-500 uppercase tracking-[0.3em]">Hito Clínico</span>
                  </div>
                  <h3 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-6">
                    {activeSpot.titulo}
                  </h3>
                  <p className="text-2xl md:text-3xl text-white/40 font-light leading-relaxed max-w-xl">
                    {activeSpot.texto}
                  </p>
                </div>

                {activeSpot.estado_peligro && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 bg-red-500/5 border border-red-500/20 rounded-[2.5rem] flex items-start gap-6 backdrop-blur-xl"
                  >
                    <AlertCircle className="w-8 h-8 text-red-500 mt-1" />
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-black mb-2 block">Alerta de Riesgo</span>
                      <p className="text-lg text-red-400/80 font-medium leading-relaxed">
                        {activeSpot.estado_peligro}
                      </p>
                    </div>
                  </motion.div>
                )}

                <button
                  onClick={() => { setActiveId(null); setCurrentImage(moduleFallback) }}
                  className="group flex items-center gap-6 text-sm font-black text-white/60 hover:text-white uppercase tracking-[0.3em]"
                >
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500/20 transition-all">
                    <X className="w-6 h-6" />
                  </div>
                  Regresar
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                <span className="text-xs tracking-[0.6em] text-amber-500/60 font-black uppercase mb-4 block">
                  {data.parte || "Módulo Interactivo"}
                </span>
                <h2 className="text-6xl md:text-[7rem] font-display font-bold text-white tracking-tighter leading-none">
                   {data.titulo}
                </h2>
                <p className="text-2xl md:text-3xl text-zinc-400 font-light leading-relaxed max-w-xl">
                  {data.texto_principal || "Selecciona un marcador para explorar."}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  )
}
