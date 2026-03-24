"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { AlertTriangle } from "lucide-react"

export function Modulo10() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])

  return (
    <section id="modulo-10" ref={ref} className="min-h-screen py-32 bg-black relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.5 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, type: "spring" }}
           viewport={{ once: true }}
        >
          <AlertTriangle className="w-32 h-32 md:w-48 md:h-48 text-red-500 mb-12 drop-shadow-[0_0_50px_rgba(239,68,68,0.6)]" />
        </motion.div>
        
        <motion.h2 
          style={{ y }}
          className="text-[18vw] font-black text-red-500/[0.05] tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          LAMINITIS
        </motion.h2>

        <motion.h3 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-6xl md:text-[8vw] font-black text-white tracking-tighter mb-10 leading-[1.1]"
        >
          LA HORA<br/> MÁS OSCURA.
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-5xl text-red-200/50 font-light tracking-[0.2em] max-w-5xl mx-auto leading-relaxed uppercase"
        >
          Actúa rápido. Sin pasto. Hielo constante. Llama al veterinario.
        </motion.p>
      </div>
    </section>
  )
}
