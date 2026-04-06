"use client";

import { motion } from "framer-motion";
import { ComparisonSlider } from "@/components/ui/comparison-slider";
import { PlayCircle, Star } from "lucide-react";

export default function CasosPage() {
  const casos = [
    {
      id: 1,
      caballo: "Spirit",
      problema: "Laminitis Crónica y Casco Contraído",
      tiempo: "6 Meses de Transición",
      before: "https://images.unsplash.com/photo-1598974357851-98166a9f9b44?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&q=80&w=800",
      review: "El cambio en su forma de caminar fue inmediato. De estar postrado a volver a trotar libremente."
    },
    {
      id: 2,
      caballo: "Relámpago",
      problema: "Síndrome Navicular (Herraduras Ortopédicas)",
      tiempo: "1 Año de Transición",
      before: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1590422750058-2fb0c058eb7b?auto=format&fit=crop&q=80&w=800",
      review: "Los veterinarios dijeron que nunca volvería a competir. Hoy salta sin dolor ni hierros."
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center bg-transparent text-white">
      <div className="text-center mb-16 relative z-10 w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white/40 font-semibold tracking-wider uppercase text-sm mb-4 block">Portafolio Clínico</span>
          <h1 className="text-4xl md:text-6xl font-heading font-semibold text-white mb-6 tracking-tight">
            Casos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-bieneq-green to-bieneq-yellow">Éxito.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light">
            La biomecánica equina en acción. Analiza el antes y después de rehabilitaciones extremas reales.
          </p>
        </motion.div>
      </div>
      
      <div className="w-full max-w-5xl flex flex-col gap-20">
        {casos.map((caso, index) => (
          <motion.div 
            key={caso.id} 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            {/* Slider Column */}
            <div className={`w-full lg:w-3/5 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative group">
                 <ComparisonSlider 
                   beforeImage={caso.before} 
                   afterImage={caso.after} 
                 />
                 <div className="absolute top-4 left-4 right-4 flex justify-between z-20 pointer-events-none">
                    <span className="px-3 py-1 bg-red-500/80 backdrop-blur-md text-white text-xs font-bold rounded-lg uppercase tracking-wider">Antes</span>
                    <span className="px-3 py-1 bg-bieneq-green/80 backdrop-blur-md text-white text-xs font-bold rounded-lg uppercase tracking-wider">Después</span>
                 </div>
              </div>
            </div>

            {/* Info Column */}
            <div className={`w-full lg:w-2/5 space-y-6 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{caso.caballo}</h3>
                <p className="text-bieneq-yellow font-medium text-sm uppercase tracking-widest">{caso.tiempo}</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Diagnóstico Inicial</p>
                <p className="text-white/80 text-lg border-l-2 border-white/20 pl-4">{caso.problema}</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative mt-8">
                <div className="flex text-amber-500 mb-3">
                  <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-white/70 italic font-light">"{caso.review}"</p>
              </div>

              <button className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group pt-4">
                <PlayCircle className="w-8 h-8 group-hover:text-bieneq-green transition-colors" />
                <span className="font-semibold tracking-wide">Ver Video del Proceso</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
