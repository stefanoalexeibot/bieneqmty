"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowDownToLine, ArrowUpFromLine, Activity } from "lucide-react"

export function Modulo5() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  
  const steps = [
    { icon: <ArrowDownToLine className="w-16 h-16" />, title: "IMPACTO", desc: "El casco se expande hacia afuera.", color: "from-blue-500/20", delay: 0 },
    { icon: <Activity className="w-16 h-16" />, title: "ABSORCIÓN", desc: "La almohadilla plantar absorbe y bombea sangre.", color: "from-purple-500/20", delay: 0.2 },
    { icon: <ArrowUpFromLine className="w-16 h-16" />, title: "REBOTE", desc: "El pie se levanta, formando un vacío.", color: "from-blue-400/20", delay: 0.4 }
  ]

  return (
    <section id="modulo-5" ref={ref} className="min-h-screen py-32 bg-black relative flex items-center overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col justify-center">
        <motion.div style={{ y }} className="mb-32 text-center pointer-events-none select-none relative h-[20vh]">
          <h2 className="text-[12vw] leading-none font-black text-white/[0.03] tracking-tighter w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            FISIOLOGÍA
          </h2>
          <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-4">
            LA BOMBA <br/>DE SANGRE
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 relative mt-10">
          <div className="hidden lg:block absolute top-[10%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: s.delay }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative bg-white/[0.02] border border-white/10 rounded-[2rem] p-10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 backdrop-blur-xl group flex flex-col items-center mt-12 lg:mt-0`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${s.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem] pointer-events-none`} />
              
              <div className="bg-black border border-white/10 w-28 h-28 rounded-full flex items-center justify-center mx-auto -mt-[5.5rem] mb-10 text-white/30 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10 relative">
                {s.icon}
              </div>
              
              <h4 className="text-4xl font-black text-white text-center tracking-widest mb-6">{s.title}</h4>
              <p className="text-white/40 text-center font-light leading-relaxed text-xl">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
