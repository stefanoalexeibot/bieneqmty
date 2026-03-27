"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Map, Wind, Droplets } from "lucide-react"

const tracks = [
  { id: 1, title: "El Track", desc: "Movimiento constante.", image: "https://images.unsplash.com/photo-1598974357851-98166a9f9b44?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Suelo Variado", desc: "Grava para estimular.", image: "/assets/curso/terrenos duros y arena.png" },
  { id: 3, title: "Puntos de Heno", desc: "Alimentación lenta.", image: "/assets/curso/pasto en slowfeeder para padock paradise.png" }
]

export function Modulo7() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])

  return (
    <section id="modulo-7" ref={ref} className="min-h-screen py-32 bg-background relative flex items-center overflow-hidden border-t border-white/5">
      {/* Premium Background */}
      <div className="absolute inset-0 opacity-40">
         <img src="/assets/curso/backgrounds/paddock.png" className="w-full h-full object-cover mix-blend-soft-light" alt="" />
         <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="absolute left-0 bottom-0 w-[900px] h-[900px] bg-blue-900/10 blur-[220px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto w-full px-6 relative z-10 flex flex-col gap-16">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
           <span className="text-blue-500 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Módulo 07</span>
           <motion.h2 style={{ y }} className="font-display font-black text-6xl md:text-8xl text-white uppercase tracking-tighter mb-4">
              Paddock Paradise
           </motion.h2>
           <p className="text-2xl text-white/40 font-light max-w-2xl mx-auto">El entorno cura. Menos boxes, más movimiento constante y natural.</p>
        </div>

        {/* Visual Main Diagram */}
        <div className="w-full relative aspect-video md:aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl">
           <img 
             src="/assets/curso/paddockparadise.png" 
             onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1620021625895-3047de71ee60?auto=format&fit=crop&q=80&w=2000" }}
             alt="Paddock Reference" 
             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s] saturate-[0.8]"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
           <div className="absolute bottom-10 left-10">
              <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full font-bold uppercase tracking-widest text-xs border border-blue-500/30 backdrop-blur-md">Concepto Visual</span>
           </div>
        </div>

        {/* Visual Track Cards */}
        <div className="grid md:grid-cols-3 gap-6">
           {tracks.map((t, i) => (
             <div key={i} className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all shadow-xl">
                <img src={t.image} alt={t.title} className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                   <h3 className="text-3xl font-display font-bold text-white mb-2 uppercase tracking-tighter">{t.title}</h3>
                   <p className="text-blue-400 font-medium uppercase tracking-widest text-sm">{t.desc}</p>
                </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  )
}


