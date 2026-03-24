"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Modulo3() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])

  return (
    <section id="modulo-3" ref={ref} className="min-h-screen py-32 bg-black relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black" />
      
      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 text-center">
        <motion.h2 
          style={{ y }}
          className="text-[20vw] font-black text-white/[0.03] tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          MUSTANG
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           viewport={{ once: true }}
           className="relative z-10"
        >
          <div className="inline-block border border-white/20 bg-white/5 backdrop-blur-md px-10 py-4 rounded-full mb-12 text-white/50 tracking-[0.3em] font-bold uppercase text-xl">
            EL MODELO DE REFERENCIA
          </div>
          <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-[1.1]">
            LA NATURALEZA<br/> NO NECESITA METAL.
          </h3>
          <p className="text-3xl text-white/40 font-light tracking-wide max-w-4xl mx-auto leading-relaxed">
            El caballo salvaje vive unos 30 años sin desgaste anormal. Nuestro objetivo no es volverlos salvajes, sino <strong className="text-white">imitar su salud</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
