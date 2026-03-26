"use client"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Wrench, Ruler, Brush, Info, X } from "lucide-react"
import { cn } from "@/lib/utils"

const tools = [
  { id: 1, name: "Escofina", desc: "Nivelado y Mustang Roll", icon: <Brush className="w-8 h-8" />, detail: "Herramienta principal para el acabado y balance. Permite crear el 'Mustang Roll' que evita astillamientos.", img: "/assets/curso/herramientas/escofina.png" },
  { id: 2, name: "Nippers", desc: "Corte de pared excedente", icon: <Wrench className="w-8 h-8" />, detail: "Tenazas de corte de alta precisión para retirar el exceso de muralla sin fracturar la queratina.", img: "/assets/curso/herramientas/nippers.png" },
  { id: 3, name: "Cuchilla", desc: "Limpieza de ranilla", icon: <Ruler className="w-8 h-8" />, detail: "Cuchilla curva o recta para la limpieza de surcos colaterales y remoción de suela desprendible.", img: "/assets/curso/herramientas/cuchilla.png" },
  { id: 4, name: "Hoof Stand", desc: "Soporte de descanso", icon: <Wrench className="w-8 h-8" />, detail: "Soporte ergonómico que garantiza la seguridad del recortador y el confort del caballo.", img: "/assets/curso/herramientas/stand.png" }
]

export function Modulo8() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="modulo-8" ref={ref} className="min-h-screen py-32 bg-background relative flex items-center justify-center overflow-hidden border-t border-white/5">
      <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-amber-600/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs tracking-[0.45em] text-amber-500 font-black uppercase mb-4 block">Módulo 08</span>
            <h2 className="font-display text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-6">
               El Arsenal <br /> <span className="text-amber-400 italic">Técnico</span>
            </h2>
            <p className="text-xl text-white/40 font-light leading-relaxed">
              La calidad del trabajo depende de tus herramientas. Conoce el equipo profesional para un recorte Barefoot.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((t) => (
            <motion.div
              key={t.id}
              onClick={() => setSelected(t.id)}
              layoutId={`tool-container-${t.id}`}
              className={cn(
                "group p-10 rounded-[2.5rem] border bg-white/[0.02] border-white/5 cursor-pointer transition-all duration-500 relative overflow-hidden",
                selected === t.id ? "bg-amber-500/10 border-amber-500/50" : "hover:border-amber-500/20"
              )}
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={cn(
                  "w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:scale-110",
                  selected === t.id ? "bg-amber-500/20 text-white" : "bg-white/5 text-white/30"
                )}>
                  {t.icon}
                </div>
                <h4 className="text-2xl font-display font-medium text-white mb-2">{t.name}</h4>
                <p className="text-white/40 text-sm italic">{t.desc}</p>
              </div>

              {/* Detail Reveal */}
              <AnimatePresence>
                {selected === t.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-8 pt-6 border-t border-amber-500/20"
                  >
                    <p className="text-sm text-white/60 leading-relaxed font-light">
                      {t.detail}
                    </p>
                    <button 
                       onClick={(e) => { e.stopPropagation(); setSelected(null); }}
                       className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-widest text-amber-500 font-black"
                    >
                       <X className="w-3 h-3" /> Cerrar
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {!selected && (
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Info className="w-4 h-4 text-amber-500/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Global info */}
        <div className="mt-20 flex justify-center">
           <div className="flex items-center gap-4 text-white/20">
              <div className="h-px w-12 bg-white/10" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-black">Haz clic para ver especificaciones</span>
              <div className="h-px w-12 bg-white/10" />
           </div>
        </div>

      </div>
    </section>
  )
}

