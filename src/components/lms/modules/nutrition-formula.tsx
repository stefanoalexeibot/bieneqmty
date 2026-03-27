"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Ban, Wheat, Droplets, CheckCircle2, ShieldAlert, Sparkles, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

export function NutritionFormula({ data }: any) {
  const [activeTab, setActiveTab] = useState<"enemigo" | "formula">("enemigo")

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col justify-center font-sans p-6 md:p-12 lg:p-24">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 transition-colors duration-1000">
        <motion.div 
          animate={{ backgroundColor: activeTab === "enemigo" ? "rgba(100,0,0,0.1)" : "rgba(245,158,11,0.05)" }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-[100px]" />
        
        {/* Abstract Glows */}
        <motion.div 
          animate={{ 
            opacity: activeTab === "enemigo" ? 0.4 : 0,
            scale: activeTab === "enemigo" ? 1 : 0.8 
          }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-red-600/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ 
            opacity: activeTab === "formula" ? 0.3 : 0,
            scale: activeTab === "formula" ? 1 : 0.8 
          }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-amber-500/10 blur-[150px] rounded-full"
        />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_80%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
           <span className="text-amber-500 font-mono text-sm md:text-base font-black tracking-[0.5em] uppercase">
             {data.parte || "Módulo 6 · Nutrición Dogmática"}
           </span>
           <h2 className="text-5xl md:text-8xl font-display font-medium text-white tracking-tighter leading-none">
             {data.titulo || "La Regla de Oro"}
           </h2>
           <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed font-display italic">
             "No hay recorte perfecto que salve a un caballo envenenado por dentro."
           </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center">
           <div className="bg-white/5 p-2 rounded-full border border-white/10 flex items-center backdrop-blur-xl">
             <button
               onClick={() => setActiveTab("enemigo")}
               className={cn(
                 "px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all flex items-center gap-2",
                 activeTab === "enemigo" ? "bg-red-500/20 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]" : "text-white/40 hover:text-white"
               )}
             >
               <Ban className="w-4 h-4" />
               El Enemigo (Grano)
             </button>
             <button
               onClick={() => setActiveTab("formula")}
               className={cn(
                 "px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all flex items-center gap-2",
                 activeTab === "formula" ? "bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]" : "text-white/40 hover:text-white"
               )}
             >
               <Sparkles className="w-4 h-4" />
               La Fórmula Exacta
             </button>
           </div>
        </div>

        {/* Content Area */}
        <div className="relative w-full">
           <AnimatePresence mode="wait">
             
             {/* THE ENEMY TAB */}
             {activeTab === "enemigo" && (
                <motion.div
                  key="enemigo"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full grid md:grid-cols-2 gap-8"
                >
                   {/* Massive Alert Card */}
                   <div className="p-10 md:p-14 rounded-[3rem] border border-red-500/20 bg-red-500/5 backdrop-blur-xl relative overflow-hidden flex flex-col justify-center">
                      <div className="absolute top-0 right-0 p-8 text-red-500/10">
                        <Ban className="w-64 h-64 -translate-y-12 translate-x-12" strokeWidth={1} />
                      </div>
                      <div className="relative z-10 space-y-6">
                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 font-black text-[10px] uppercase tracking-widest">
                            <ShieldAlert className="w-4 h-4" />
                            Prohibidísimo
                         </div>
                         <h3 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter leading-none">
                           0% GRANO
                         </h3>
                         <p className="text-xl md:text-2xl text-red-100/70 font-light leading-relaxed max-w-md">
                           Avena, maíz, cebada o melazas son equivalentes a <span className="text-red-400 font-bold">inyecciones de azúcar concentrado</span> para tu caballo.
                         </p>
                      </div>
                   </div>

                   {/* Consequences Cards */}
                   <div className="grid grid-rows-2 gap-8">
                      <div className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] flex items-start gap-6 hover:bg-white/[0.04] transition-colors">
                         <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                           <Activity className="w-6 h-6 text-red-500" />
                         </div>
                         <div>
                           <h4 className="text-2xl font-display font-bold text-white mb-2">Picos de Insulina</h4>
                           <p className="text-white/40 font-light leading-relaxed">
                             Los carbohidratos no estructurales (NSC) alteran el metabolismo hormonal, debilitando instantáneamente la unión de las láminas en el casco.
                           </p>
                         </div>
                      </div>
                      <div className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] flex items-start gap-6 hover:bg-white/[0.04] transition-colors">
                         <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                           <Wheat className="w-6 h-6 text-red-500" />
                         </div>
                         <div>
                           <h4 className="text-2xl font-display font-bold text-white mb-2">Acidosis Cecal</h4>
                           <p className="text-white/40 font-light leading-relaxed">
                             Falta de enzimas pancreáticas hace que el grano fermente en el intestino grueso, liberando endotoxinas que viajan directo al casco y devienen en laminitis química.
                           </p>
                         </div>
                      </div>
                   </div>
                </motion.div>
             )}

             {/* THE FORMULA TAB */}
             {activeTab === "formula" && (
                <motion.div
                  key="formula"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                   {/* Central Formula Display */}
                   <div className="flex flex-col items-center">
                     <div className="w-full flex flex-col md:flex-row gap-6 justify-center">
                        
                        {/* PASTURE */}
                        <div className="flex-1 p-10 rounded-[3rem] bg-gradient-to-br from-amber-500/20 to-transparent border border-amber-500/30 backdrop-blur-3xl relative overflow-hidden group">
                           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500595046743-cec271a393dc?auto=format&fit=crop&q=80&w=800')] opacity-5 mix-blend-overlay group-hover:opacity-20 transition-opacity duration-1000" />
                           <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                             <div className="text-8xl font-display font-bold text-amber-500/20 absolute top-4">1</div>
                             <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.5)] mt-4">
                               <CheckCircle2 className="w-8 h-8 text-black" />
                             </div>
                             <h4 className="text-3xl font-display font-bold text-white mt-4">Pasto Base</h4>
                             <p className="text-white/50 font-light">
                               Heno de gramíneas (Timothy, Bermuda). Forraje maduro 24/7 para imitar a la naturaleza.
                             </p>
                           </div>
                        </div>

                        {/* ALFALFA (LIMITED) */}
                        <div className="flex-1 p-10 rounded-[3rem] bg-zinc-900/50 border border-white/10 backdrop-blur-3xl relative flex flex-col justify-center items-center text-center">
                           <div className="relative z-10 flex flex-col items-center space-y-4">
                             <div className="text-8xl font-display font-bold text-white/[0.02] absolute top-4">2</div>
                             <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center mt-4">
                               <Droplets className="w-8 h-8 text-white/50" />
                             </div>
                             <h4 className="text-3xl font-display font-bold text-white mt-4">Poca Alfalfa</h4>
                             <p className="text-white/40 font-light">
                               Estrictamente como premio o complemento menor. Exceso hiper-proteico daña el casco.
                             </p>
                           </div>
                        </div>

                        {/* MINERALS */}
                        <div className="flex-1 p-10 rounded-[3rem] bg-zinc-900/50 border border-white/10 backdrop-blur-3xl relative flex flex-col justify-center items-center text-center group">
                           <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                           <div className="relative z-10 flex flex-col items-center space-y-4">
                             <div className="text-8xl font-display font-bold text-white/[0.02] absolute top-4">3</div>
                             <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center mt-4">
                               <Sparkles className="w-8 h-8 text-cyan-400" />
                             </div>
                             <h4 className="text-3xl font-display font-bold text-white mt-4">Minerales</h4>
                             <p className="text-white/40 font-light">
                               Específicamente <b className="text-amber-400 font-mono">Zinc y Cobre</b> quelatados. Literalmente la "queratina embotellada".
                             </p>
                           </div>
                        </div>

                     </div>

                     <div className="mt-12 p-8 rounded-3xl border border-amber-500/20 bg-amber-500/[0.02] text-center max-w-2xl">
                       <p className="text-amber-500/60 font-mono text-sm uppercase tracking-widest mb-2 font-black">Recordatorio BieneQ</p>
                       <p className="text-white/70 font-display italic text-lg lg:text-xl">
                         "Si tu caballo está obeso o tiene depósitos de grasa (cuello de cresta), tratarás las láminas inflamadas por el resto de su vida. La salud empieza por la boca."
                       </p>
                     </div>
                   </div>
                </motion.div>
             )}

           </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
