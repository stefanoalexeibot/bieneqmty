"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Zap, Target } from "lucide-react"

export function Modulo11() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <section id="modulo-11" ref={ref} className="min-h-screen py-32 bg-black relative flex flex-col justify-center overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col items-center">
        
        <motion.div style={{ y, opacity }} className="text-center mb-32 w-full">
          <p className="text-2xl lg:text-3xl tracking-[0.4em] font-light text-white/30 mb-8 uppercase">El punto de inflexión</p>
          <h2 className="text-[15vw] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 tracking-tighter text-center">
            TRANSICIÓN
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 w-full max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 flex flex-col justify-center backdrop-blur-3xl group hover:border-white/30 transition-all duration-500"
          >
            <Zap className="w-16 h-16 text-yellow-500 mb-8 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
            <h3 className="text-4xl font-black text-white tracking-widest mb-6">LO DIFÍCIL</h3>
            <p className="text-white/50 text-xl font-light leading-relaxed">
              Quitar las herraduras destapa daños ocultos por años. El dolor inicial no es del "pie descalzo", sino de la <strong className="text-white">rehabilitación</strong> anatómica forzada. Requiere botas, paciencia y fe.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-gradient-to-bl from-blue-500/10 to-transparent border border-blue-500/30 flex flex-col justify-center backdrop-blur-3xl group hover:border-blue-500/60 transition-all duration-500"
          >
            <Target className="w-16 h-16 text-blue-400 mb-8 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
            <h3 className="text-4xl font-black text-white tracking-widest mb-6">LA VICTORIA</h3>
            <p className="text-white/50 text-xl font-light leading-relaxed">
              En 6-12 meses, verás nacer un casco denso, ancho y con una concavidad perfecta. Un caballo revitalizado, <strong className="text-blue-400">seguro de cada paso</strong> sobre cualquier terreno.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
