"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Modulo4() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  const parts = [
    { title: "PARED EXTERNA", active: "Soporte de peso primario", num: "01" },
    { title: "SUELA CÓNCAVA", active: "Protección interna del hueso", num: "02" },
    { title: "RANILLA ACTIVA", active: "Bomba de sangre y tracción", num: "03" },
    { title: "BARRAS INTEGRADAS", active: "Soporte lateral y expansión", num: "04" }
  ]

  return (
    <section id="modulo-4" ref={ref} className="min-h-screen py-32 bg-black relative flex flex-col justify-center overflow-hidden border-t border-white/5">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="w-full relative z-10">
        <motion.div style={{ x }} className="whitespace-nowrap mb-24 opacity-20">
          <h2 className="text-[12vw] leading-none font-black text-transparent bg-clip-text bg-gradient-to-r from-white/0 via-white to-white/0 tracking-tighter select-none">
            ANATOMÍA ESTRUCTURAS ANATOMÍA ESTRUCTURAS
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-8">
          {parts.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center p-8 md:p-12 lg:p-14 bg-white/[0.02] border border-white/10 rounded-[2rem] hover:bg-white/[0.08] hover:border-white/30 transition-all duration-500 backdrop-blur-2xl cursor-pointer overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
              
              <div className="flex items-center gap-8 md:gap-16 relative z-10 w-full md:w-auto">
                <span className="text-4xl md:text-6xl font-black text-white/10 group-hover:text-blue-500/50 transition-colors duration-500">{p.num}</span>
                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">{p.title}</h3>
              </div>
              <div className="mt-6 md:mt-0 relative z-10 flex w-full md:w-auto justify-end">
                <span className="text-blue-400 font-bold uppercase tracking-[0.3em] opacity-50 group-hover:opacity-100 transition-opacity duration-300 text-sm md:text-lg border border-blue-500/30 px-6 py-3 rounded-full group-hover:bg-blue-500/10">{p.active}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
