"use client"
import { motion } from "framer-motion"

export function Modulo1() {
  return (
    <section id="modulo-1" className="min-h-screen py-32 bg-black relative flex items-center overflow-hidden">
      <div className="absolute left-0 top-0 w-[800px] h-[800px] bg-purple-600/10 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col justify-center items-center text-center">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl text-white/50 font-light tracking-[0.3em] uppercase mb-10"
        >
          El casco no es solo queratina
        </motion.p>
        <motion.h3 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[12vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/10 leading-none mb-16"
        >
          ES UN CORAZÓN
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-white/40 max-w-5xl font-light tracking-wide leading-relaxed"
        >
          Un amortiguador biomecánico. El reflejo más fiel de la salud de tu caballo.
        </motion.p>
      </div>
    </section>
  )
}
