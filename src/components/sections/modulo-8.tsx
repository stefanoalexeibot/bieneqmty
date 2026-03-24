"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Wrench, Ruler, Brush } from "lucide-react"

export function Modulo8() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  const tools = [
    { name: "ESCOFINA", desc: "Nivelado y redondeo (Mustang Roll)", icon: <Brush /> },
    { name: "NIPPERS", desc: "Corte de pared excedente", icon: <Wrench /> },
    { name: "CUCHILLA", desc: "Limpieza de ranilla y barras", icon: <Ruler /> },
    { name: "SOPORTE", desc: "Hoof stand para descanso", icon: <Wrench /> }
  ]

  return (
    <section id="modulo-8" ref={ref} className="min-h-screen py-32 bg-black relative flex items-center overflow-hidden border-t border-white/5">
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-zinc-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 text-center">
        <motion.div style={{ y }} className="mb-24">
          <h2 className="text-[12vw] leading-none font-black text-white/[0.03] tracking-tighter w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
            ARSENAL
          </h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 pb-4 relative z-10">
            HERRAMIENTAS CLAVE
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20 mt-32">
          {tools.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group aspect-square p-8 rounded-[3rem] bg-white/[0.02] border border-white/10 hover:bg-white/[0.08] hover:border-white/30 transition-all duration-500 backdrop-blur-xl flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30 group-hover:text-white group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-500 mb-6 relative z-10">
                <div className="w-8 h-8 *:w-full *:h-full">{t.icon}</div>
              </div>
              
              <h4 className="text-2xl font-bold text-white tracking-widest mb-2 relative z-10 group-hover:-translate-y-2 transition-transform duration-500">{t.name}</h4>
              <p className="text-white/40 font-light text-center text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 relative z-10">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
