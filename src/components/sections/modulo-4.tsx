"use client"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Plus, X, Target, Info } from "lucide-react"
import { cn } from "@/lib/utils"

const hotspots = [
  { id: "ranilla", coordenadas: { x: "50%", y: "60%" }, titulo: "Ranilla (Frog)", texto: "Corazón periférico del caballo. Bombea sangre en cada paso." },
  { id: "surco-central", coordenadas: { x: "50%", y: "75%" }, titulo: "Surco central", texto: "Hendidura de salud e higiene. Debe estar libre de infecciones." },
  { id: "angulo-muralla", coordenadas: { x: "25%", y: "85%" }, titulo: "Ángulo de la muralla", texto: "Punto de inflexión del talón hacia las barras." },
  { id: "barra", coordenadas: { x: "35%", y: "70%" }, titulo: "Barra", texto: "El refuerzo interno de la pared que ayuda al soporte." },
  { id: "muralla", coordenadas: { x: "85%", y: "50%" }, titulo: "Muralla", texto: "El escudo de queratina protector externo." },
  { id: "linea-blanca", coordenadas: { x: "75%", y: "30%" }, titulo: "Línea blanca", texto: "El pegamento elástico del casco (Lámina)." },
  { id: "suela", coordenadas: { x: "35%", y: "50%" }, titulo: "Suela", texto: "La base protectora cóncava que resguarda la P3. " },
  { id: "surco-colateral", coordenadas: { x: "63%", y: "70%" }, titulo: "Surco colateral", texto: "Canal de expansión para el movimiento y amortiguación." }
]

export function Modulo4() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const xTitle = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section id="modulo-4" ref={ref} className="min-h-screen py-32 bg-background relative flex items-center justify-center overflow-hidden border-t border-white/5">
      {/* Background ambient */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
         <img src="/assets/curso/backgrounds/hoof-texture.png" className="w-full h-full object-cover grayscale" alt="" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_oklch(0.7_0.15_240_/_0.03)_0%,_transparent_50%)]" />

      {/* Large watermark */}
      <motion.div style={{ x: xTitle }} className="absolute top-10 left-0 right-0 opacity-[0.015] pointer-events-none select-none overflow-hidden">
        <h2 className="font-display text-[15vw] font-bold text-white tracking-tighter whitespace-nowrap">
           PRECISIÓN CLÍNICA · ANATOMÍA ·
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col lg:flex-row-reverse items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1 text-right space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.45em] text-blue-400/70 uppercase font-semibold">Módulo 04</span>
              <div className="h-px w-10 bg-blue-500/40" />
            </div>
            <h3 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-none">
              Anatomía <br /> <span className="text-blue-400 italic">Interna</span>
            </h3>
            <p className="text-xl text-white/40 font-light leading-relaxed ml-auto max-w-xl">
              Dominar la anatomía del casco es fundamental para un recorte seguro. Cada estructura tiene una función biomecánica vital.
            </p>
          </motion.div>

          {/* Info Card */}
          <div className="min-h-[220px] flex items-end justify-end">
            <AnimatePresence mode="wait">
              {activeId ? (
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="p-10 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-[2.5rem] backdrop-blur-3xl text-right max-w-lg relative group"
                >
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500/10 blur-[30px] rounded-full" />
                  <Info className="w-8 h-8 text-blue-500/30 mb-6 ml-auto" />
                  <h4 className="text-3xl font-display font-medium text-white mb-4">
                    {hotspots.find(s => s.id === activeId)?.titulo}
                  </h4>
                  <p className="text-lg text-white/50 font-light leading-relaxed">
                    {hotspots.find(s => s.id === activeId)?.texto}
                  </p>
                </motion.div>
              ) : (
                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="flex items-center gap-4 text-blue-500/30"
                >
                   <span className="text-sm uppercase tracking-[0.3em] font-medium italic">Selecciona un punto anatómico</span>
                   <Target className="w-5 h-5 animate-pulse" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Interactive Image Container */}
        <div className="flex-[1.2] w-full relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-square md:aspect-[4/3] rounded-[3.5rem] overflow-hidden border border-white/5 shadow-3xl bg-black/20 group"
          >
            <img 
              src="/assets/curso/hoof-anatomy-3d.png" 
              alt="Anatomía del Casco"
              className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100"
            />
            
            {/* Hotspots layer */}
            <div className="absolute inset-0">
              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setActiveId(activeId === spot.id ? null : spot.id)}
                  style={{ left: spot.coordenadas.x, top: spot.coordenadas.y }}
                  className={cn(
                    "absolute -translate-x-1/2 -translate-y-1/2 z-20 outline-none",
                    activeId === spot.id ? "z-30" : "z-20"
                  )}
                >
                  <div className="relative flex items-center justify-center">
                    {activeId === spot.id && (
                      <motion.div 
                        layoutId="anatomy-ring"
                        className="absolute w-14 h-14 border border-blue-500/50 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                    
                    <div className={cn(
                      "w-4 h-4 rounded-full border-2 transition-all duration-500 shadow-xl",
                      activeId === spot.id 
                        ? "bg-white border-white scale-150 rotate-45 shadow-blue-500/50" 
                        : "bg-transparent border-white/40 hover:border-blue-500 hover:scale-125"
                    )}>
                      {activeId === spot.id && <X className="w-2 h-2 text-black" />}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}


