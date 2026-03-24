"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Modulo1() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  
  return (
    <section id="modulo-1" ref={ref} className="min-h-screen py-32 bg-black relative flex items-center justify-center overflow-hidden border-t border-white/5">
      <div className="absolute left-0 top-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col justify-center items-center text-center">
        <motion.p 
          style={{ y }}
          className="text-lg md:text-2xl text-white/40 font-light tracking-[0.4em] uppercase mb-8"
        >
          MÁS QUE QUERATINA
        </motion.p>
        
        <motion.h3 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[12vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/20 leading-[1.1] mb-12"
        >
          ES UN CORAZÓN
        </motion.h3>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl w-full"
        >
          <div className="p-8 md:p-12 rounded-[2rem] bg-white/[0.02] border border-white-5 backdrop-blur-lg hover:bg-white/[0.05] transition-all duration-500">
            <h4 className="text-3xl font-bold text-white mb-4 tracking-tight">Amortiguador biomecánico</h4>
            <p className="text-white/50 text-lg font-light leading-relaxed">Maneja fuerzas inmensas a cada paso, disipando la energía para proteger articulaciones y tendones.</p>
          </div>
          <div className="p-8 md:p-12 rounded-[2rem] bg-white/[0.02] border border-white-5 backdrop-blur-lg hover:bg-white/[0.05] transition-all duration-500">
            <h4 className="text-3xl font-bold text-white mb-4 tracking-tight">Bomba de sangre</h4>
            <p className="text-white/50 text-lg font-light leading-relaxed">Con cada expansión y contracción, bombea sangre de regreso al cuerpo, aliviando el trabajo del corazón principal.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
