"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Leaf, Activity, Scissors } from "lucide-react"
import { useRef } from "react"

export function Modulo2() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  
  const pillars = [
    { icon: <Leaf className="w-16 h-16"/>, title: "DIETA", val: "FIBRA", desc: "Baja en azúcares" },
    { icon: <Activity className="w-16 h-16"/>, title: "RITMO", val: "20KM", desc: "Movimiento diario" },
    { icon: <Scissors className="w-16 h-16"/>, title: "CORTE", val: "MUSTANG", desc: "Desgaste natural" }
  ]

  return (
    <section id="modulo-2" ref={ref} className="min-h-screen py-32 bg-black relative flex items-center overflow-hidden border-t border-white/5">
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        <motion.h2 
          style={{ y }}
          className="text-[18vw] leading-none font-black text-white/[0.03] tracking-tighter absolute -top-10 left-0 pointer-events-none select-none"
        >
          PILARES
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-32 relative z-20">
          {pillars.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative group p-10 lg:p-14 rounded-[3rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-700 backdrop-blur-2xl flex flex-col items-center justify-center text-center overflow-hidden ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="text-white/10 group-hover:text-blue-500 transition-colors duration-700 mb-8 transform group-hover:scale-110 group-hover:-translate-y-2">
                {p.icon}
              </div>
              
              <p className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/30 tracking-tighter leading-none mb-4 group-hover:scale-105 transition-transform duration-700">{p.val}</p>
              
              <h3 className="text-xl font-bold tracking-[0.4em] text-white/40 mb-2 uppercase">{p.title}</h3>
              <p className="text-blue-400/80 font-medium tracking-wide uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-4 group-hover:translate-y-0">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
