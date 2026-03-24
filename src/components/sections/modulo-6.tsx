"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Check, X } from "lucide-react"
import { useRef } from "react"

const yesItems = [
  { title: "FORRAJE 24/7", desc: "Heno de pasto de baja energía" },
  { title: "MINERALES", desc: "Balanceadores sin melaza" },
  { title: "PADDOCK", desc: "Movimiento continuo para forrajear" }
]
const noItems = [
  { title: "GRANOS DULCES", desc: "Avena y melazas inflamatorias" },
  { title: "PASTO RICO", desc: "Fructanos de primavera = ácidos" },
  { title: "DOS COMIDAS", desc: "Ayunar causa úlceras severas" }
]

function LeafSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 160" fill="currentColor" className={className} aria-hidden>
      <path d="M 60 155 Q 20 120 15 75 Q 12 40 60 8 Q 108 40 105 75 Q 100 120 60 155 Z" opacity="0.12"/>
      <path d="M 60 155 L 60 30" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.2"/>
      <path d="M 60 80 Q 30 60 20 40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.15"/>
      <path d="M 60 100 Q 90 80 100 60" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.15"/>
      <path d="M 60 120 Q 35 105 25 85" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.12"/>
    </svg>
  )
}

export function Modulo6() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const leafY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section id="modulo-6" ref={ref} className="min-h-screen py-32 bg-background relative flex items-center overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[500px] bg-gradient-to-b from-amber-900/5 to-transparent pointer-events-none" />

      {/* Decorative leaves */}
      <motion.div style={{ y: leafY }}
        className="absolute left-4 bottom-0 text-emerald-400/[0.08] pointer-events-none hidden lg:block">
        <LeafSVG className="w-24 h-32" />
      </motion.div>
      <motion.div style={{ y: leafY }}
        className="absolute right-6 top-12 text-emerald-400/[0.06] pointer-events-none rotate-[140deg] hidden xl:block">
        <LeafSVG className="w-16 h-24" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        {/* Heading */}
        <motion.div style={{ scale, opacity }} className="text-center mb-16 select-none pointer-events-none">
          <h2 className="font-display text-[13vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/15 tracking-tighter">
            COMBUSTIBLE
          </h2>
          <p className="text-xl tracking-[0.4em] font-light text-white/30 -mt-3">Nutrición de alto flujo</p>
        </motion.div>

        {/* Module label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-500/25" />
          <span className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold">Módulo 06</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-500/25" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
          {/* YES column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-5 border-b border-white/8 pb-6">
              <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/25 shrink-0">
                <Check className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <h3 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight leading-none">Base</h3>
                <span className="text-amber-400/60 text-sm tracking-[0.3em] uppercase font-semibold">Vital</span>
              </div>
            </div>
            <div className="space-y-4">
              {yesItems.map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  className="group p-6 rounded-[1.5rem] bg-white/[0.025] border border-white/[0.05] hover:bg-amber-500/[0.05] hover:border-amber-500/20 transition-all duration-500 flex flex-col justify-center min-h-[120px]">
                  <h4 className="font-display text-2xl font-bold text-white mb-1 tracking-widest">{item.title}</h4>
                  <p className="text-amber-200/40 font-light text-base">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* NO column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-5 border-b border-white/8 pb-6">
              <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/25 shrink-0">
                <X className="w-7 h-7 text-red-400" />
              </div>
              <div>
                <h3 className="font-display text-4xl md:text-5xl font-bold text-white/50 tracking-tight leading-none">Peligro</h3>
                <span className="text-red-400/60 text-sm tracking-[0.3em] uppercase font-semibold">Fatal</span>
              </div>
            </div>
            <div className="space-y-4">
              {noItems.map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: -4 }}
                  className="group p-6 rounded-[1.5rem] bg-white/[0.01] border border-white/[0.04] hover:bg-red-500/[0.05] hover:border-red-500/20 transition-all duration-500 flex flex-col justify-center min-h-[120px]">
                  <h4 className="font-display text-2xl font-bold text-white/45 mb-1 tracking-widest group-hover:text-red-400/70 transition-colors">{item.title}</h4>
                  <p className="text-white/25 font-light text-base">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
