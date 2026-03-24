"use client"
import { motion } from "framer-motion"

export function Modulo4() {
  const parts = [
    { title: "PARED", active: "Soporte primario" },
    { title: "SUELA", active: "Protección interna" },
    { title: "RANILLA", active: "Bomba de sangre" },
    { title: "BARRAS", active: "Soporte lateral" }
  ]

  return (
    <section id="modulo-4" className="min-h-screen py-32 bg-black relative flex items-center overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-[12vw] lg:text-[8vw] leading-none font-black text-white tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-white/20 mb-6">
            ANATOMÍA
          </h2>
          <p className="text-3xl text-white/50 font-light tracking-[0.3em] uppercase mb-12">
            Estructuras vitales
          </p>
        </motion.div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {parts.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex justify-between items-center p-8 lg:p-12 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              <h3 className="text-4xl font-black text-white tracking-widest">{p.title}</h3>
              <span className="text-blue-400 font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl">{p.active}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
