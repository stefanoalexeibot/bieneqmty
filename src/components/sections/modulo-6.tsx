"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Check, X } from "lucide-react"
import { useRef } from "react"

export function Modulo6() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <section id="modulo-6" ref={ref} className="min-h-screen py-32 bg-black relative flex items-center overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[500px] bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        <motion.div style={{ scale, opacity }} className="text-center mb-24 uppercase select-none pointer-events-none">
          <h2 className="text-[14vw] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 tracking-tighter">
            COMBUSTIBLE
          </h2>
          <p className="text-2xl tracking-[0.4em] font-light text-white/30 -mt-4">Nutrición de alto flujo</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">
          {/* YES */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-6 border-b border-white/10 pb-8">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/30">
                <Check className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter">BASE<br/><span className="text-white/40text-3xl">VITAL</span></h3>
            </div>
            <div className="space-y-6">
              {[
                { title: "FORRAJE 24/7", desc: "Heno de pasto de baja energía" },
                { title: "MINERALES", desc: "Balanceadores sin melaza" },
                { title: "PADDOCK", desc: "Movimiento continuo para forrajear" }
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-blue-500/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-center min-h-[160px]">
                  <h4 className="text-3xl font-bold text-white mb-2 tracking-widest">{item.title}</h4>
                  <p className="text-blue-200/50 font-light text-xl">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* NO */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-6 border-b border-white/10 pb-8">
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/30">
                <X className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-5xl md:text-6xl font-black text-white/50 tracking-tighter">PELIGRO<br/><span className="text-white/20 text-3xl">FATAL</span></h3>
            </div>
            <div className="space-y-6">
              {[
                { title: "GRANOS DULCES", desc: "Avena y melazas inflamatorias" },
                { title: "PASTO RICO", desc: "Fructanos de primavera = ácidos" },
                { title: "DOS COMIDAS", desc: "Ayunar causa úlceras severas" }
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:bg-red-500/5 hover:border-red-500/30 transition-all duration-500 flex flex-col justify-center min-h-[160px]">
                  <h4 className="text-3xl font-bold text-white/50 mb-2 tracking-widest group-hover:text-red-400/80 transition-colors">{item.title}</h4>
                  <p className="text-white/30 font-light text-xl">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
