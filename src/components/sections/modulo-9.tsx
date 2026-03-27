"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const steps = [
  { num: "01", title: "LIMPIEZA", desc: "Uso riguroso de la cuchilla para encontrar el tejido sano y funcional.", tag: "Inicio", image: "/assets/curso/pasos/step1.png" },
  { num: "02", title: "RANILLA", desc: "Recortar solo el tejido muerto que interfiere con el rebote y la salud.", tag: "Frog", image: "/assets/curso/pasos/step2.png" },
  { num: "03", title: "BARRAS", desc: "Rebajar para que no soporten peso directamente y permitan la expansión.", tag: "Barra", image: "/assets/curso/pasos/step3.png" },
  { num: "04", title: "PARED", desc: "Nivelar desde el talón hasta las lumbres para un balance perfecto.", tag: "Wall", image: "/assets/curso/pasos/step4.png" },
  { num: "05", title: "MUSTANG ROLL", desc: "El borde ovalado que previene grietas y fomenta un crecimiento grueso.", tag: "Finish", image: "/assets/curso/pasos/step5.png" }
]

export function Modulo9() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section id="modulo-9" ref={ref} className="min-h-screen py-32 bg-background relative flex flex-col justify-center overflow-hidden border-t border-white/5">
      {/* Premium Background Texture */}
      <div className="absolute inset-0 opacity-10">
         <img src="/assets/curso/backgrounds/hoof-texture.png" className="w-full h-full object-cover grayscale" alt="" />
         <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-500/5 blur-[250px] rounded-full pointer-events-none" />

      {/* Marquee */}
      <div className="w-full overflow-hidden mb-20 relative z-10">
        <motion.div style={{ x }} className="whitespace-nowrap opacity-[0.05] select-none">
          <h2 className="font-display text-[12vw] leading-none font-bold text-foreground tracking-tighter">
            RECORTE · TÉCNICA · RECORTE · TÉCNICA · 
          </h2>
        </motion.div>
      </div>

      {/* Module header */}
      <div className="max-w-6xl mx-auto px-6 w-full mb-16 relative z-10 text-center">
        <span className="text-xs tracking-[0.45em] text-blue-500 font-black uppercase block mb-4">Módulo 09 · El Arte del Recorte</span>
        <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
           Técnica <br /> <span className="text-blue-400 italic">Paso a Paso</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative">
        <div className="flex flex-col gap-12 lg:gap-24 relative z-10">
          {steps.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative"
            >
              
              {/* Text Card Left Side */}
              <div className="flex-1 flex items-start gap-6 md:gap-10 w-full relative">
                {/* Timeline connection line (hidden on mobile) */}
                {i !== steps.length - 1 && (
                  <div className="absolute left-6 md:left-8 top-16 bottom-[-6rem] w-px bg-gradient-to-b from-blue-500/50 to-transparent hidden lg:block" />
                )}

                {/* Timeline node */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-background border-[3px] border-blue-500/60 shadow-[0_0_25px_rgba(59,130,246,0.3)] flex items-center justify-center shrink-0 z-10 group-hover:bg-blue-500 group-hover:border-blue-400 transition-all duration-500">
                  <span className="text-blue-500 group-hover:text-black transition-colors duration-500 text-sm md:text-lg font-bold font-mono">
                    {p.num}
                  </span>
                </div>

                <div className="bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-8 md:p-10 hover:bg-blue-500/[0.05] hover:border-blue-500/20 transition-all duration-500 backdrop-blur-xl w-full relative overflow-hidden">
                  <span className="absolute top-8 right-8 font-display text-4xl md:text-6xl font-bold text-white/[0.03] group-hover:text-blue-500/20 transition-colors duration-500 select-none">
                    {p.num}
                  </span>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] tracking-[0.3em] text-blue-500/60 uppercase font-black border border-blue-500/20 px-3 py-1.5 rounded-full bg-blue-500/5">{p.tag}</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tighter mb-4 relative z-10">{p.title}</h3>
                  <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed relative z-10">{p.desc}</p>
                </div>
              </div>

              {/* Visual Right Side */}
              <div className="flex-1 w-full aspect-video md:aspect-[4/3] lg:aspect-square relative rounded-[3rem] overflow-hidden border border-white/10 group-hover:border-blue-500/30 transition-colors duration-500">
                 <img 
                    src={p.image} 
                    alt={`Paso ${p.num} - ${p.title}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                 <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8">
                    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6">
                       <p className="text-white/80 font-medium text-sm md:text-base border-l-2 border-blue-500 pl-4">Registro visual del proceso Barefoot.</p>
                       <p className="text-white/40 text-xs mt-2 pl-4">Técnica avanzada sin instrumentos invasivos.</p>
                    </div>
                 </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
