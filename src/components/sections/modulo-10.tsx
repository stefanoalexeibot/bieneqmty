"use client"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { AlertTriangle, CheckCircle2, Phone, IceCream, Ban, Bed } from "lucide-react"
import { cn } from "@/lib/utils"

const alerts = [
  { id: 1, icon: <Ban className="w-6 h-6" />, title: "Retirar del Pasto", desc: "Inmediato. El azúcar del pasto es el combustible del incendio laminar.", color: "text-red-400" },
  { id: 2, icon: <IceCream className="w-6 h-6" />, title: "Crioterapia (Hielo)", desc: "20 min cada hora. Reduce la destrucción del tejido laminar.", color: "text-blue-400" },
  { id: 3, icon: <Phone className="w-6 h-6" />, title: "Urgencia Veterinaria", desc: "No esperes. La laminitis es una emergencia médica real.", color: "text-amber-400" },
  { id: 4, icon: <Bed className="w-6 h-6" />, title: "Confort Máximo", desc: "Cama profunda de aserrín o arena para estabilizar la P3.", color: "text-emerald-400" }
]

export function Modulo10() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const [checked, setChecked] = useState<number[]>([])

  const toggleCheck = (id: number) => {
    setChecked(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  return (
    <section id="modulo-10" ref={ref} className="min-h-screen py-32 bg-background relative flex items-center justify-center overflow-hidden border-t border-red-500/10">
      {/* Emergency Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_oklch(0.55_0.20_27_/_0.05)_0%,_transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col gap-16">
        
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
             <AlertTriangle className="w-20 h-20 text-red-500 mx-auto mb-8 animate-pulse drop-shadow-[0_0_30px_rgba(239,68,68,0.3)]" />
             <span className="text-xs tracking-[0.6em] text-red-500 font-black uppercase mb-4 block">Módulo 10 · Protocolo SOS</span>
             <h2 className="font-display text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-6">
                Laminitis: <br /> <span className="text-red-500 italic">No Hay Tiempo</span>
             </h2>
             <p className="text-xl text-white/40 font-light leading-relaxed">
                Identificar los signos a tiempo salva vidas. Sigue este protocolo de emergencia mientras llega el profesional.
             </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alerts.map((alert) => (
            <motion.div
              key={alert.id}
              onClick={() => toggleCheck(alert.id)}
              className={cn(
                "p-8 rounded-[2.5rem] border transition-all duration-500 cursor-pointer group relative overflow-hidden",
                checked.includes(alert.id) 
                  ? "bg-emerald-500/10 border-emerald-500/50" 
                  : "bg-white/[0.02] border-white/10 hover:border-red-500/30"
              )}
            >
              {/* Progress Glow */}
              <AnimatePresence>
                {checked.includes(alert.id) && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-emerald-500/5 blur-[40px] pointer-events-none" 
                  />
                )}
              </AnimatePresence>

              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors",
                checked.includes(alert.id) ? "bg-emerald-500/20" : "bg-white/5 group-hover:bg-red-500/10"
              )}>
                {checked.includes(alert.id) ? (
                  <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                ) : (
                  <div className={cn(alert.color, "opacity-60 group-hover:opacity-100")}>
                    {alert.icon}
                  </div>
                )}
              </div>

              <h4 className={cn(
                "text-2xl font-display font-bold mb-4 transition-colors",
                checked.includes(alert.id) ? "text-emerald-400" : "text-white"
              )}>
                {alert.title}
              </h4>
              
              <p className="text-white/40 text-sm leading-relaxed">
                {alert.desc}
              </p>

              <div className="mt-8 flex items-center gap-2">
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  checked.includes(alert.id) ? "bg-emerald-400" : "bg-white/20"
                )} />
                <span className="text-[10px] uppercase tracking-widest font-black opacity-30">
                  {checked.includes(alert.id) ? "Completado" : "Pendiente"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Counter UI */}
        <div className="flex justify-center flex-col items-center gap-4">
           <div className="h-px w-32 bg-white/10" />
           <p className="text-xs uppercase tracking-[0.4em] text-white/20 font-black">
              Seguridad del protocolo: <span className={cn(
                 "transition-colors",
                 checked.length === 4 ? "text-emerald-400" : "text-amber-500"
              )}>{(checked.length / 4) * 100}%</span>
           </p>
        </div>

      </div>
    </section>
  )
}

