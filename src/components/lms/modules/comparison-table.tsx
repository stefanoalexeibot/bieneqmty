"use client"

import { motion } from "framer-motion"
import { CheckCircle2, XCircle, Info, Apple, Ban } from "lucide-react"
import { cn } from "@/lib/utils"

interface FoodItem {
  alimento: string
  desc: string
}

interface ComparisonTableProps {
  data: any
}

export function ComparisonTable({ data }: ComparisonTableProps) {
  const interaction = data.interacciones?.[0] || {}
  const itemsVerde = interaction.verde || []
  const itemsRojo = interaction.rojo || []

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center p-8 md:p-12 lg:p-24">
      
      {/* Dynamic Background Ambient */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_70%)]" 
        />
        {data.media?.imagen_fondo && (
          <img src={data.media.imagen_fondo} className="w-full h-full object-cover grayscale" alt="" />
        )}
      </div>

      <div className="relative z-10 w-full max-w-7xl space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-black mb-4 block leading-none">
               {data.parte || "Módulo de Nutrición"}
            </span>
            <h2 className="text-5xl md:text-[6rem] font-display font-bold text-white tracking-tighter leading-none mb-8">
               Semáforo <span className="text-amber-400 italic">Nutricional</span>
            </h2>
            <div className="h-px w-24 bg-amber-500/30 mx-auto mb-8" />
            <p className="text-2xl text-white/40 font-light leading-relaxed">
               {data.texto_introduccion}
            </p>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Green Column - Safe Foods */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="group relative h-full flex flex-col"
          >
             <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
             <div className="flex-1 bg-zinc-900/40 backdrop-blur-3xl border border-emerald-500/20 rounded-[3rem] p-12 flex flex-col shadow-2xl transition-all duration-700 hover:border-emerald-500/40">
                <div className="flex items-center gap-6 mb-12 pb-8 border-b border-white/5">
                   <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-500/60 font-black">Nivel Seguro</span>
                      <h3 className="text-3xl font-display font-bold text-white uppercase tracking-widest">PERMITIDOS</h3>
                   </div>
                </div>

                <div className="grid gap-6">
                   {itemsVerde.map((item: FoodItem, i: number) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all group/item"
                      >
                         <h4 className="text-xl font-display font-medium text-white mb-2 flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover/item:scale-150 transition-transform" />
                            {item.alimento}
                         </h4>
                         <p className="text-white/40 text-sm leading-relaxed font-light pl-4.5 border-l border-emerald-500/10 ml-0.5">
                            {item.desc}
                         </p>
                      </motion.div>
                   ))}
                </div>
             </div>
          </motion.div>

          {/* Red Column - Dangerous Foods */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="group relative h-full flex flex-col"
          >
             <div className="absolute inset-0 bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
             <div className="flex-1 bg-zinc-900/40 backdrop-blur-3xl border border-red-500/20 rounded-[3rem] p-12 flex flex-col shadow-2xl transition-all duration-700 hover:border-red-500/40">
                <div className="flex items-center gap-6 mb-12 pb-8 border-b border-white/5">
                   <div className="w-16 h-16 rounded-3xl bg-red-500/10 flex items-center justify-center border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.2)] group-hover:scale-110 transition-transform">
                      <XCircle className="w-8 h-8 text-red-400" />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-red-500/60 font-black">Nivel Alerta</span>
                      <h3 className="text-3xl font-display font-bold text-white uppercase tracking-widest">PELIGROSOS</h3>
                   </div>
                </div>

                <div className="grid gap-6">
                   {itemsRojo.map((item: FoodItem, i: number) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-red-500/5 hover:border-red-500/30 transition-all group/item"
                      >
                         <h4 className="text-xl font-display font-medium text-white mb-2 flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover/item:scale-150 transition-transform" />
                            {item.alimento}
                         </h4>
                         <p className="text-white/40 text-sm leading-relaxed font-light pl-4.5 border-l border-red-500/10 ml-0.5">
                            {item.desc}
                         </p>
                      </motion.div>
                   ))}
                </div>
             </div>
          </motion.div>
        </div>

        {/* Pro Tip Callout */}
        {data.cita_destacada && (
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1, duration: 0.8 }}
             className="max-w-4xl mx-auto p-10 rounded-[2.5rem] bg-amber-500/5 border border-amber-500/20 backdrop-blur-2xl flex items-center gap-8 relative overflow-hidden group"
           >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
              <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
                 <Info className="w-6 h-6 text-amber-500" />
              </div>
              <p className="text-xl md:text-2xl text-amber-200/50 font-display italic leading-relaxed relative z-10">
                 "{data.cita_destacada}"
              </p>
           </motion.div>
        )}
      </div>
    </div>
  )
}

