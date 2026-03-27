"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, AlertTriangle, ShieldCheck, Zap } from "lucide-react"

export function Modulo6() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])

  return (
    <section id="modulo-6" ref={ref} className="min-h-screen py-32 bg-black relative flex items-center justify-center overflow-hidden border-t border-white/5">
      {/* Dynamic Background Overlay */}
      <div className="absolute inset-0 opacity-20">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,_oklch(0.7_0.15_240_/_0.1)_0%,_transparent_50%)]" />
         <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,_oklch(0.5_0.15_280_/_0.1)_0%,_transparent_50%)]" />
      </div>

      <div className="max-w-[1600px] mx-auto w-full px-6 relative z-10">
        
        {/* Analytical Header */}
        <div className="text-center mb-24 relative">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-block"
           >
              <span className="text-blue-500 font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block border border-blue-500/30 px-4 py-1.5 rounded-full bg-blue-500/5 backdrop-blur-sm">
                Configuración Biológica
              </span>
           </motion.div>
           <motion.h2 style={{ y }} className="font-display font-black text-6xl md:text-9xl text-white uppercase tracking-tighter mb-6 leading-none">
              Ecosistema <br /> <span className="text-blue-400 italic">Metabólico</span>
           </motion.h2>
           <p className="text-xl text-white/40 font-light max-w-2xl mx-auto leading-relaxed">
             El casco no es solo tejido, es el resultado final de una cascada biológica compleja. La nutrición es el arquitecto silencioso.
           </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Pillar: The Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 group relative rounded-[3.5rem] overflow-hidden border border-white/10 bg-white/[0.02] p-12 flex flex-col justify-between min-h-[500px] hover:border-blue-500/30 transition-all duration-700"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             
             <div className="relative z-10">
                <div className="flex items-center justify-between mb-12">
                   <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <ShieldCheck className="w-7 h-7" />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-blue-500/60">Balance Primario</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tighter">
                   La Base Estructural: <br /> Fibra Larga
                </h3>
                <p className="text-lg text-white/50 leading-relaxed max-w-xl mb-8">
                   Fundamental para la motilidad intestinal y la absorción de nutrientes críticos. Sin fibra de calidad, la síntesis de queratina se detiene.
                </p>

                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <span className="text-[10px] text-blue-400 font-bold uppercase block mb-1">Zinc & Cobre</span>
                      <p className="text-xs text-white/30 italic">Refuerzo de la queratina</p>
                   </div>
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <span className="text-[10px] text-blue-400 font-bold uppercase block mb-1">Baja Melaza</span>
                      <p className="text-xs text-white/30 italic">Índice glucémico bajo</p>
                   </div>
                </div>
             </div>

             <div className="relative mt-12 overflow-hidden rounded-2xl aspect-video border border-white/5">
                <img 
                   src="/assets/curso/pasto en slowfeeder para padock paradise.png" 
                   alt="Nutrición Óptima" 
                   className="w-full h-full object-cover saturate-0 group-hover:saturate-100 transition-all duration-1000 group-hover:scale-105"
                />
             </div>
          </motion.div>

          {/* Side Module: The Disruptor */}
          <div className="lg:col-span-5 flex flex-col gap-6">
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="group relative flex-1 rounded-[3rem] overflow-hidden border border-red-500/10 bg-red-500/5 p-10 hover:bg-red-500/10 transition-colors duration-500"
             >
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500">
                      <AlertTriangle className="w-6 h-6" />
                   </div>
                   <h4 className="text-2xl font-display font-bold text-white uppercase">Disruptores</h4>
                </div>
                <h5 className="text-lg font-bold text-red-400 mb-2 uppercase tracking-wide">Azúcares & Alfalfa</h5>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                   Su alto contenido en azúcares no estructurales (WSC) provoca picos de insulina que dañan la conexión lámina-pared.
                </p>
                <div className="flex flex-wrap gap-2">
                   {["Laminitis", "Inflamación", "Debilidad"].map(tag => (
                      <span key={tag} className="text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-red-500/20 text-red-400/60">{tag}</span>
                   ))}
                </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="group relative flex-1 rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.02] p-10"
             >
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <Zap className="w-6 h-6" />
                   </div>
                   <h4 className="text-2xl font-display font-bold text-white uppercase">El Resultado</h4>
                </div>
                <h5 className="text-lg font-bold text-white/80 mb-2 uppercase tracking-wide">Cascada de Queratina</h5>
                <p className="text-white/40 text-sm leading-relaxed">
                   Un metabolismo equilibrado produce una muralla densa, una suela gruesa y una ranilla funcional.
                </p>
                <div className="mt-8 flex items-center gap-2">
                   <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="h-full bg-blue-500" 
                      />
                   </div>
                   <span className="text-[10px] font-mono text-blue-400 font-bold">85% OPTIMIZADO</span>
                </div>
             </motion.div>
          </div>

        </div>

        {/* Global Warning Footer */}
        <div className="mt-16 text-center">
           <p className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20">
             Consulte siempre con un experto en nutrición equina integrada.
           </p>
        </div>
      </div>
    </section>
  )
}



