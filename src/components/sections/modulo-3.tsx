"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

function HoofTrailSVG({ className }: { className?: string }) {
  // Alternating left/right hoof prints in a trail pattern
  const prints = [
    { x: 30,  y: 60,  rot: -5  },
    { x: 80,  y: 35,  rot: 8   },
    { x: 130, y: 55,  rot: -4  },
    { x: 180, y: 32,  rot: 10  },
    { x: 230, y: 52,  rot: -6  },
    { x: 280, y: 30,  rot: 7   },
    { x: 330, y: 50,  rot: -3  },
    { x: 380, y: 28,  rot: 9   },
  ]
  return (
    <svg viewBox="0 0 420 100" fill="currentColor" className={className} aria-hidden>
      {prints.map((p, i) => (
        <g key={i} transform={`translate(${p.x}, ${p.y}) rotate(${p.rot})`}>
          {/* Simple hoof print: two toe ovals + main pad */}
          <ellipse cx="-6" cy="-10" rx="5" ry="7" opacity={0.6 - i * 0.04}/>
          <ellipse cx="6"  cy="-10" rx="5" ry="7" opacity={0.6 - i * 0.04}/>
          <path d="M -12 0 Q -12 20 0 22 Q 12 20 12 0 Q 12 -5 0 -7 Q -12 -5 -12 0 Z"
            opacity={0.6 - i * 0.04}/>
        </g>
      ))}
    </svg>
  )
}

function TerrainLineSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 60" fill="none" className={className} aria-hidden preserveAspectRatio="none">
      <path d="M 0 40 Q 100 20 200 35 Q 300 50 400 25 Q 500 5 600 30 Q 700 55 800 35 L 800 60 L 0 60 Z"
        fill="currentColor" opacity="0.08"/>
      <path d="M 0 40 Q 100 20 200 35 Q 300 50 400 25 Q 500 5 600 30 Q 700 55 800 35"
        stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.25"/>
    </svg>
  )
}

export function Modulo3() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const trailX = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"])

  return (
    <section id="modulo-3" ref={ref} className="min-h-screen py-32 bg-background relative flex items-center justify-center overflow-hidden border-t border-white/5">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.15_0.02_62)_0%,_transparent_70%)]" />
      {/* Amber glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.72_0.14_68_/_0.05)_0%,_transparent_60%)]" />

      {/* Terrain line bottom */}
      <div className="absolute bottom-0 left-0 right-0 text-amber-500/30 pointer-events-none">
        <TerrainLineSVG className="w-full h-20" />
      </div>

      {/* Hoof trail - parallax */}
      <motion.div
        style={{ x: trailX }}
        className="absolute bottom-14 left-0 right-0 text-amber-500/[0.08] pointer-events-none select-none"
      >
        <HoofTrailSVG className="w-full max-w-3xl mx-auto" />
      </motion.div>

      {/* Large watermark */}
      <motion.h2
        style={{ y, opacity }}
        className="font-display text-[20vw] font-bold text-white/[0.025] tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap"
      >
        MUSTANG
      </motion.h2>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-4 mb-10">
            <div className="h-px w-10 bg-amber-500/40" />
            <span className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold">Módulo 03 · El Modelo de Referencia</span>
            <div className="h-px w-10 bg-amber-500/40" />
          </div>

          <h3 className="font-display text-5xl md:text-7xl lg:text-[7vw] font-bold text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40 tracking-tighter mb-8 leading-[1.05]">
            La Naturaleza<br />No Necesita Metal.
          </h3>

          <p className="text-xl md:text-3xl text-white/40 font-light tracking-wide max-w-4xl mx-auto leading-relaxed">
            El caballo salvaje recorre 30 km diarios sin herraduras. Nuestro objetivo no es volverlos salvajes,
            sino <strong className="text-amber-400 font-semibold">imitar su salud</strong> en cautiverio.
          </p>

          {/* Stat counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-14 inline-flex items-center gap-10"
          >
            {[
              { val: "30", unit: "km/día", label: "Distancia" },
              { val: "0", unit: "herraduras", label: "Equipo" },
              { val: "∞", unit: "generaciones", label: "Evolución" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-amber-400">{s.val}
                  <span className="text-base text-amber-400/60 ml-1 font-sans font-normal">{s.unit}</span>
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
