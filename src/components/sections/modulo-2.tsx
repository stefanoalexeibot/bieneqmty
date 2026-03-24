"use client"
import { motion } from "framer-motion"
import { Leaf, Activity, Scissors } from "lucide-react"

export function Modulo2() {
  const pillars = [
    { icon: <Leaf className="w-20 h-20"/>, title: "DIETA", val: "FIBRA" },
    { icon: <Activity className="w-20 h-20"/>, title: "RITMO", val: "20KM" },
    { icon: <Scissors className="w-20 h-20"/>, title: "CORTE", val: "MUSTANG" }
  ]

  return (
    <section id="modulo-2" className="min-h-screen py-32 bg-black relative flex items-center overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-blue-600/10 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[18vw] leading-none font-black text-white/[0.03] tracking-tighter absolute -top-32 left-0 pointer-events-none"
        >
          PILARES
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-12 mt-20 relative z-20">
          {pillars.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group p-12 lg:p-16 rounded-[3rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-700 backdrop-blur-2xl flex flex-col items-center justify-center text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="text-white/20 group-hover:text-white transition-colors duration-700 mb-10 transform group-hover:scale-125">
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold tracking-[0.3em] text-white/50 mb-4 uppercase">{p.title}</h3>
              <p className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/30 tracking-tighter">{p.val}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
