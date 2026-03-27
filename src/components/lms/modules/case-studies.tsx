"use client"

import { motion } from "framer-motion"
import { TiltCard } from "@/components/ui/tilt-card"
import { CheckCircle2, Star, ArrowRight, Quote } from "lucide-react"

export function CaseStudies({ data }: { data: any }) {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden p-12 lg:p-24">
      {/* Background Image with Cinematic Overlay */}
      {data.media?.imagen_fondo && (
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img src={data.media.imagen_fondo} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </motion.div>
      )}

      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-16">
        <div className="space-y-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4"
          >
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-[10px] uppercase tracking-[0.8em] text-amber-500 font-black">Historias de Impacto</span>
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="text-7xl md:text-9xl font-display font-black text-white tracking-tighter leading-none mb-4 text-balance px-4"
          >
            {data.titulo}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl text-white/40 font-light max-w-2xl mx-auto italic"
          >
            "{data.descripcion}"
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {data.items.map((item: any, i: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.2 }}
            >
              <TiltCard intensity={8}>
                <div className="p-12 rounded-[3rem] bg-white/5 backdrop-blur-3xl border border-white/10 hover:border-amber-500/30 transition-all group relative overflow-hidden">
                   <Quote className="absolute -top-4 -right-4 w-32 h-32 text-white/5 -rotate-12 transition-transform group-hover:scale-110" />
                   
                   <div className="space-y-6 relative z-10">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center text-black">
                            <CheckCircle2 className="w-6 h-6" />
                         </div>
                         <h3 className="text-3xl font-display font-bold text-white">{item.titulo}</h3>
                      </div>
                      
                      <p className="text-xl text-white/60 leading-relaxed font-light italic">
                        "{item.texto}"
                      </p>

                      <div className="pt-6">
                        <button className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-black text-amber-500 group-hover:gap-5 transition-all">
                          Ver Galería del Caso <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                   </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
