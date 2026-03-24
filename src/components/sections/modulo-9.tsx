"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const steps = [
  { num: "01", title: "LIMPIEZA", desc: "Uso riguroso de la cuchilla para encontrar el tejido sano.", tag: "Inicio" },
  { num: "02", title: "RANILLA", desc: "Recortar solo el tejido muerto que interfiere con el rebote.", tag: "Frog" },
  { num: "03", title: "BARRAS", desc: "Rebajar para que no soporten peso directamente.", tag: "Barra" },
  { num: "04", title: "PARED", desc: "Nivelar desde el talón hasta las lumbres.", tag: "Wall" },
  { num: "05", title: "MUSTANG ROLL", desc: "El borde ovalado que previene grietas y fomenta crecimiento grueso.", tag: "Finish" }
]

function MustangRollSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" fill="none" className={className} aria-hidden>
      {/* Cross section of hoof wall showing mustang roll */}
      {/* Outer wall profile */}
      <path d="M 20 100 L 20 30 Q 20 10 50 10 L 150 10 Q 180 10 180 30 L 180 100"
        stroke="currentColor" strokeWidth="18" strokeLinecap="butt" fill="none" opacity="0.12"/>
      {/* Mustang roll curve at bottom */}
      <path d="M 20 100 Q 25 115 40 115 L 160 115 Q 175 115 180 100"
        stroke="currentColor" strokeWidth="4" fill="none" opacity="0.35"/>
      {/* Dotted straight (before mustang roll) */}
      <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.2"/>
      {/* Annotation arrows */}
      <path d="M 100 118 L 100 128" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      <text x="100" y="132" fill="currentColor" fontSize="9" textAnchor="middle" opacity="0.25" fontFamily="sans-serif">Mustang Roll</text>
    </svg>
  )
}

export function Modulo9() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const rollY = useTransform(scrollYProgress, [0, 1], ["-5%", "15%"])

  return (
    <section id="modulo-9" ref={ref} className="min-h-screen py-32 bg-background relative flex flex-col justify-center overflow-hidden border-t border-white/5">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-amber-500/4 blur-[250px] rounded-full pointer-events-none" />

      {/* Mustang roll diagram */}
      <motion.div style={{ y: rollY }}
        className="absolute right-8 top-24 text-amber-400/10 pointer-events-none hidden xl:block">
        <MustangRollSVG className="w-48 h-28" />
      </motion.div>

      {/* Marquee */}
      <div className="w-full overflow-hidden mb-20 relative z-10">
        <motion.div style={{ x }} className="whitespace-nowrap opacity-[0.025] select-none">
          <h2 className="font-display text-[12vw] leading-none font-bold text-foreground tracking-tighter">
            RECORTE · TÉCNICA · RECORTE · TÉCNICA ·
          </h2>
        </motion.div>
      </div>

      {/* Module header */}
      <div className="max-w-4xl mx-auto px-6 w-full mb-12 relative z-10">
        <span className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold">Módulo 09 · La Técnica Correcta</span>
      </div>

      <div className="max-w-4xl mx-auto px-6 w-full relative">
        {/* Vertical timeline line */}
        <div className="absolute left-6 md:left-24 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-500/50 via-amber-400/30 to-transparent" />

        <div className="flex flex-col gap-10 lg:gap-16 relative z-10">
          {steps.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative"
            >
              {/* Timeline node */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-background border-[3px] border-amber-500/60 shadow-[0_0_25px_rgba(196,144,58,0.4)] flex items-center justify-center shrink-0 z-10 group-hover:bg-amber-500 group-hover:border-amber-400 transition-all duration-400 group-hover:shadow-[0_0_40px_rgba(196,144,58,0.7)]"
              >
                <span className="text-amber-500 group-hover:text-primary-foreground transition-colors duration-400 text-xs md:text-sm font-bold font-mono">
                  {p.num}
                </span>
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ x: 6 }}
                className="bg-white/[0.025] border border-white/[0.06] rounded-[1.75rem] p-7 md:p-10 hover:bg-amber-500/[0.05] hover:border-amber-500/20 transition-all duration-500 backdrop-blur-xl w-full relative overflow-hidden"
              >
                {/* Hover sweep */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-[1.75rem]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "150%" }}
                  transition={{ duration: 0.6 }}
                  style={{ background: "linear-gradient(90deg, transparent 0%, oklch(0.72 0.14 68 / 6%) 50%, transparent 100%)" }}
                />
                <span className="absolute top-7 right-7 font-display text-3xl md:text-5xl font-bold text-white/[0.06] group-hover:text-amber-500/30 transition-colors duration-500 select-none">
                  {p.num}
                </span>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[9px] tracking-[0.3em] text-amber-500/40 uppercase font-semibold border border-amber-500/20 px-2.5 py-1 rounded-full">{p.tag}</span>
                </div>
                <h3 className="font-display text-2xl md:text-4xl font-bold text-white tracking-tighter mb-2 pr-16 relative z-10">{p.title}</h3>
                <p className="text-white/40 text-base md:text-lg font-light leading-relaxed relative z-10">{p.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
