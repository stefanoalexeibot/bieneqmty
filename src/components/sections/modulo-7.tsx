"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Map, Footprints, Wind } from "lucide-react"

export function Modulo7() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  
  const tracks = [
    { icon: <Map className="w-12 h-12" />, title: "TRACKS", desc: "Senderos estrechos que obligan al caballo a moverse constantemente." },
    { icon: <Footprints className="w-12 h-12" />, title: "TERRENOS", desc: "Grava, arena y roca para estimular y endurecer el casco naturalmente." },
    { icon: <Wind className="w-12 h-12" />, title: "ESTÍMULOS", desc: "Agua, comida y sombra separados para imitar el nomadismo." }
  ]

  return (
    <section id="modulo-7" ref={ref} className="min-h-screen py-32 bg-black relative flex items-center overflow-hidden border-t border-white/5">
      <div className="absolute left-0 bottom-0 w-[800px] h-[800px] bg-green-900/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <motion.div style={{ y }} className="w-full lg:w-1/2">
            <h2 className="text-[12vw] lg:text-[10vw] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20 tracking-tighter mb-6">
              PADDOCK
            </h2>
            <p className="text-3xl lg:text-5xl font-light text-white/50 tracking-[0.2em] uppercase mb-12">
              El entorno cura
            </p>
            <p className="text-2xl text-white/40 font-light leading-relaxed max-w-xl">
              Un establo cuadrado de 4x4 enferma la mente y el cuerpo. El <strong className="text-white">Paddock Paradise</strong> cambia recintos estáticos por <strong className="text-blue-400">circuitos dinámicos</strong>.
            </p>
          </motion.div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {tracks.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-white/30 transition-all duration-500 flex gap-8 items-center backdrop-blur-xl"
              >
                <div className="text-white/20 group-hover:text-green-400 transition-colors duration-500">
                  {t.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white tracking-widest mb-2">{t.title}</h3>
                  <p className="text-white/50 font-light text-lg">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}
