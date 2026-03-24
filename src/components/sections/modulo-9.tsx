"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2 } from "lucide-react"

export function Modulo9() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  const steps = [
    { num: "01", title: "LIMPIEZA", desc: "Uso riguroso de la cuchilla para encontrar el tejido sano." },
    { num: "02", title: "RANILLA", desc: "Recortar solo el tejido muerto que interfiere con el rebote." },
    { num: "03", title: "BARRAS", desc: "Rebajar para que no soporten peso directamente." },
    { num: "04", title: "PARED", desc: "Nivelar desde el talón hasta las lumbres." },
    { num: "05", title: "MUSTANG ROLL", desc: "El borde ovalado mágico que previene grietas y fomenta crecimiento grueso." }
  ]

  return (
    <section id="modulo-9" ref={ref} className="min-h-screen py-32 bg-black relative flex flex-col justify-center overflow-hidden border-t border-white/5">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="w-full relative z-10">
        <motion.div style={{ x }} className="whitespace-nowrap mb-32 opacity-20">
          <h2 className="text-[12vw] leading-none font-black text-transparent bg-clip-text bg-gradient-to-r from-white/0 via-white to-white/0 tracking-tighter select-none">
            RECORTE TÉCNICA RECORTE TÉCNICA
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 w-full relative">
          <div className="absolute left-6 md:left-24 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

          <div className="flex flex-col gap-12 lg:gap-24 relative z-10">
            {steps.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 relative"
              >
                <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-black border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center shrink-0 z-10 group-hover:scale-125 group-hover:bg-blue-500 transition-all duration-500">
                  <CheckCircle2 className="w-6 h-6 md:w-10 md:h-10 text-blue-500 group-hover:text-white transition-colors duration-500" />
                </div>
                
                <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-12 hover:bg-white/[0.05] hover:border-white/30 transition-all duration-500 backdrop-blur-xl w-full">
                  <span className="text-3xl md:text-5xl font-black text-white/10 group-hover:text-blue-500/50 transition-colors duration-500 absolute top-8 right-8 select-none pointer-events-none">{p.num}</span>
                  <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4 pr-16">{p.title}</h3>
                  <p className="text-white/40 text-xl font-light leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
