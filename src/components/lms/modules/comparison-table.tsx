"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShieldAlert, Leaf, Wind, Activity, Zap, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface ComparisonTableProps {
  data: any
}

const DASHBOARD_ITEMS = [
  { id: 1, label: "Salud Laminar", value: "Óptimo", impact: 95, icon: <Activity className="w-5 h-5" />, desc: "Inflamación controlada mediante dieta baja en azúcares." },
  { id: 2, label: "Respuesta Insulínica", value: "Estable", impact: 88, icon: <Zap className="w-5 h-5" />, desc: "Evita picos glucémicos que comprometen la unión laminar." },
  { id: 3, label: "Biodisponibilidad", value: "Alta", impact: 92, icon: <Wind className="w-5 h-5" />, desc: "Absorción eficiente de minerales quelatados (Zn/Cu)." },
  { id: 4, label: "Calidad de Queratina", value: "Premium", impact: 94, icon: <ShieldAlert className="w-5 h-5" />, desc: "Crecimiento de muralla densa y sin anillos de estrés." },
]

export function ComparisonTable({ data }: ComparisonTableProps) {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-8 lg:p-24 overflow-hidden bg-black font-sans">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-zinc-950" />
        
        {/* Metabolic Background Texture */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-screen saturate-0">
           <img src="/assets/curso/backgrounds/metabolic.png" className="w-full h-full object-cover" alt="" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.2_0.1_62)_0%,_transparent_60%)] opacity-30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: Info Section */}
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-amber-500/50" />
              <span className="text-amber-500 font-mono text-[10px] font-black tracking-[0.5em] uppercase">
                Módulo {data.numero} · Ecosistema Vital
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter leading-[0.85]">
              Ecosistema <br /> <span className="text-amber-400 italic">Metabólico</span>
            </h2>
            <p className="text-xl text-white/40 font-light leading-relaxed max-w-xl font-display">
              {data.texto_introduccion || "El equilibrio interno se refleja en la salud externa del casco. Entender los indicadores es clave para el éxito del Barefoot."}
            </p>
          </motion.div>

          {/* Indicators List */}
          <div className="grid gap-3">
             {DASHBOARD_ITEMS.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(i)}
                  className={cn(
                    "flex items-center justify-between p-6 rounded-2xl border transition-all duration-500 group relative overflow-hidden",
                    activeItem === i 
                      ? "bg-amber-500 border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.2)]" 
                      : "bg-zinc-900/40 border-white/5 hover:border-amber-500/30"
                  )}
                >
                  <div className="flex items-center gap-5 relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-lg",
                      activeItem === i ? "bg-black text-amber-500" : "bg-amber-500/10 text-amber-500"
                    )}>
                       {item.icon}
                    </div>
                    <div className="text-left">
                       <h4 className={cn(
                         "text-sm font-black uppercase tracking-widest leading-none mb-1",
                         activeItem === i ? "text-black" : "text-white/80"
                       )}>
                         {item.label}
                       </h4>
                       <span className={cn(
                         "text-xs font-mono font-bold",
                         activeItem === i ? "text-black/60" : "text-amber-500/60"
                       )}>
                         Indicador: {item.value}
                       </span>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center gap-3">
                     <div className={cn("w-1.5 h-1.5 rounded-full", activeItem === i ? "bg-black" : "bg-amber-500/40")} />
                     {activeItem === i && <CheckCircle2 className="w-5 h-5 text-black" />}
                  </div>
                </button>
             ))}
          </div>
        </div>

        {/* Right: Data Visualization */}
        <div className="relative space-y-8 h-full flex flex-col pt-12">
           <AnimatePresence mode="wait">
              <motion.div
                key={activeItem}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 p-12 rounded-[4rem] bg-zinc-900/50 border border-white/5 backdrop-blur-3xl shadow-3xl flex flex-col justify-between relative overflow-hidden"
              >
                 {/* Internal Glow */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full" />
                 
                 <div className="space-y-8 relative z-10">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                       <span className="text-[10px] font-black text-black uppercase tracking-widest">Análisis Profundo</span>
                    </div>
                    
                    <h3 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tighter leading-none">
                       {DASHBOARD_ITEMS[activeItem].label}
                    </h3>

                    <p className="text-2xl text-white/50 font-light leading-relaxed italic font-display">
                       &ldquo;{DASHBOARD_ITEMS[activeItem].desc}&rdquo;
                    </p>
                 </div>

                 {/* Impact Meter */}
                 <div className="space-y-6 pt-12 relative z-10">
                    <div className="flex justify-between items-end">
                       <span className="text-xs font-black text-amber-500/60 uppercase tracking-widest font-mono">Índice Biológico</span>
                       <span className="text-6xl font-display font-black text-white">{DASHBOARD_ITEMS[activeItem].impact}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                       <motion.div
                         initial={{ width: 0 }}
                         animate={{ width: `${DASHBOARD_ITEMS[activeItem].impact}%` }}
                         transition={{ duration: 1.5, ease: "circOut", delay: 0.3 }}
                         className="h-full bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.5)] rounded-full"
                       />
                    </div>
                 </div>
              </motion.div>
           </AnimatePresence>

           {/* Call to action footer */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="flex items-center gap-4 px-8"
           >
              <div className="w-1 h-1 rounded-full bg-amber-500/40" />
              <p className="text-xs uppercase tracking-[0.3em] font-black text-white/20">Desplázate para ver más indicadores</p>
           </motion.div>
        </div>
      </div>
    </div>
  )
}
