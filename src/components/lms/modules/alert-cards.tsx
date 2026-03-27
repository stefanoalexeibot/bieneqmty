"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertCircle, ShieldAlert, CheckSquare, TriangleAlert, Info, PhoneCall, HeartPulse, Ban } from "lucide-react"
import { cn } from "@/lib/utils"

interface AlertCardsProps {
  data: any
}

export function AlertCards({ data }: AlertCardsProps) {
  const [checkedItems, setCheckedItems] = useState<number[]>([])
  const checklist = data.checklist_emergencia || [
    "¿Se inclina hacia atrás?",
    "¿Siente calor excesivo en el casco?",
    "¿Pulso digital fuerte?",
    "¿Hemorragias en la línea blanca?"
  ]

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  const isCritical = checkedItems.length >= 2

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center p-8 md:p-12 lg:p-24">
      
      {/* Background Warning Animation */}
      <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              opacity: isCritical ? [0.1, 0.3, 0.1] : [0.05, 0.1, 0.05],
              scale: isCritical ? [1, 1.1, 1] : [1, 1.05, 1]
            }}
            transition={{ duration: isCritical ? 1 : 4, repeat: Infinity }}
            className={cn(
               "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] blur-[200px] rounded-full transition-colors duration-1000",
               isCritical ? "bg-red-600" : "bg-red-900/50"
            )}
          />
      </div>

      <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Diagnostic Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-black uppercase tracking-[0.4em] text-[10px]"
            >
              <HeartPulse className={cn("w-5 h-5", isCritical ? "animate-[ping_1s_infinite]" : "animate-pulse")} />
              <span className="text-sm">Diagnóstico de Emergencia</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-6xl md:text-8xl lg:text-[7rem] font-display font-black text-white leading-none tracking-tighter mb-4 text-balance"
            >
              {data.titulo_alerta ? (
                <span dangerouslySetInnerHTML={{ __html: data.titulo_alerta }} />
              ) : (
                <>Código <br /> <span className="text-red-600 italic">Rojo</span></>
              )}
            </motion.h2>

            <div className="h-px w-24 bg-red-600/30" />
            
            <p className="text-2xl text-white/70 font-light leading-relaxed max-w-xl">
               {data.texto_introduccion || "Protocolo de respuesta inmediata ante sospecha de laminitis o infosura."}
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] space-y-8 relative overflow-hidden backdrop-blur-3xl group"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
             <h3 className="text-2xl font-display font-bold text-red-500 uppercase tracking-widest">{data.titulo_procedimiento || "Procedimiento SOS"}</h3>
             <ul className="space-y-4">
                {(data.procedimiento_sos || [
                   "Retirar granos y melazas inmediatamente.",
                   "Llamar al veterinario / podólogo de urgencia.",
                   "Crioterapia (hielo en cascos) durante 15-20 min."
                ]).map((step: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-4 text-white/80 text-xl font-light italic leading-relaxed">
                     <span className="w-2 h-2 rounded-full bg-red-600" />
                     {step}
                  </li>
                ))}
             </ul>
          </motion.div>
        </div>

        {/* Right Side: Interactive Triage */}
        <div className="flex flex-col gap-8">
           <div className="flex justify-between items-end mb-4">
              <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 font-black">Checklist de Síntomas</span>
              <span className={cn(
                 "text-xs font-mono font-bold transition-colors",
                 isCritical ? "text-red-500" : "text-white/20"
              )}>
                 Detectados: {checkedItems.length}
              </span>
           </div>

           <div className="grid gap-4">
              {checklist.map((item: string, i: number) => (
                <motion.button
                  key={i}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  onClick={() => toggleCheck(i)}
                  className={cn(
                    "w-full p-8 rounded-[2.8rem] border transition-all duration-700 group flex items-center gap-8 text-left relative overflow-hidden",
                    checkedItems.includes(i)
                      ? "bg-red-600 border-red-500 text-black shadow-[0_0_50px_rgba(239,68,68,0.4)]"
                      : "bg-white/5 border-white/10 text-white/30 hover:bg-white/10 hover:border-white/20"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-3xl flex items-center justify-center transition-all duration-500",
                    checkedItems.includes(i) ? "bg-black/20 rotate-[360deg]" : "bg-white/10"
                  )}>
                    {checkedItems.includes(i) ? <CheckSquare className="w-6 h-6" /> : <ShieldAlert className="w-6 h-6" />}
                  </div>
                  <span className="text-2xl font-display font-bold leading-tight flex-1 tracking-tight">{item}</span>
                  
                  {/* Subtle sweep on hover */}
                  {!checkedItems.includes(i) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  )}
                </motion.button>
              ))}
           </div>

           <AnimatePresence>
              {isCritical && (
                <motion.div 
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 30, scale: 0.95 }}
                  className="mt-8 p-10 bg-red-600 rounded-[3rem] text-black shadow-[0_0_80px_rgba(239,68,68,0.5)] flex items-center justify-between border-4 border-black/10 group animate-pulse"
                >
                   <div className="flex flex-col gap-2">
                      <span className="text-[10px] uppercase tracking-[0.6em] font-black opacity-60">Acción Inmediata</span>
                      <span className="text-3xl font-display font-black uppercase tracking-tight leading-none italic">¡Solicitar Apoyo Profesional!</span>
                   </div>
                   <PhoneCall className="w-12 h-12 text-black/80 animate-bounce" />
                </motion.div>
              )}
           </AnimatePresence>
        </div>

      </div>
    </div>
  )
}

