"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { TiltCard } from "@/components/ui/tilt-card"

const NEEDS_CARDS = [
  {
    icon: "🌾",
    title: "Forraje a libre acceso",
    desc: "2–3% del peso corporal por día. 10–15 kg para un caballo de 500 kg.",
    num: "01",
  },
  {
    icon: "💧",
    title: "Agua abundante",
    desc: "38 a 45 litros diarios. Más en verano o con mayor actividad.",
    num: "02",
  },
  {
    icon: "🐴",
    title: "Compañía constante",
    desc: "Un animal aislado es el más vulnerable. La manada es seguridad.",
    num: "03",
  },
]

/* ── 24-hour SVG donut chart ── */
function TimelineDonut({ animate }: { animate: boolean }) {
  const size = 240
  const cx = size / 2
  const cy = size / 2
  const r = 88
  const innerR = 56
  const circumference = 2 * Math.PI * r

  // Segments: eating 18h, resting 5h, drinking 1h
  const total = 24
  const eating   = 18 / total
  const resting  = 5.5 / total
  const drinking = 0.5 / total

  function arcPath(startFrac: number, endFrac: number, color: string, opacity: number, label: string, labelFrac: number, idx: number) {
    const start = startFrac * 2 * Math.PI - Math.PI / 2
    const end   = endFrac   * 2 * Math.PI - Math.PI / 2

    const x1 = cx + r * Math.cos(start)
    const y1 = cy + r * Math.sin(start)
    const x2 = cx + r * Math.cos(end)
    const y2 = cy + r * Math.sin(end)

    const ix1 = cx + innerR * Math.cos(start)
    const iy1 = cy + innerR * Math.sin(start)
    const ix2 = cx + innerR * Math.cos(end)
    const iy2 = cy + innerR * Math.sin(end)

    const large = (endFrac - startFrac) > 0.5 ? 1 : 0

    const path = `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} L ${ix2.toFixed(2)} ${iy2.toFixed(2)} A ${innerR} ${innerR} 0 ${large} 0 ${ix1.toFixed(2)} ${iy1.toFixed(2)} Z`

    const midAngle = labelFrac * 2 * Math.PI - Math.PI / 2
    const labelR = r + 18
    const lx = cx + labelR * Math.cos(midAngle)
    const ly = cy + labelR * Math.sin(midAngle)

    return { path, color, opacity, label, lx, ly, idx }
  }

  const segments = [
    arcPath(0,           eating,           "#f59e0b", 0.75, `18h comer`, eating / 2, 0),
    arcPath(eating,      eating + resting, "#e2e8f0", 0.25, `5–6h descanso`, eating + resting / 2, 1),
    arcPath(eating + resting, 1,           "#60a5fa", 0.50, `~30min agua`, eating + resting + drinking / 2, 2),
  ]

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[240px] mx-auto" aria-label="Ciclo de 24 horas del caballo">
      {/* Background ring */}
      <circle cx={cx} cy={cy} r={r} stroke="rgba(255,255,255,0.04)" strokeWidth={r - innerR} fill="none" />

      {segments.map((seg, i) => (
        <motion.path
          key={i}
          d={seg.path}
          fill={seg.color}
          fillOpacity={animate ? seg.opacity : 0}
          animate={animate ? { fillOpacity: seg.opacity } : {}}
          transition={{ duration: 1.2, delay: i * 0.3, ease: "easeOut" }}
        />
      ))}

      {/* Center text */}
      <text x={cx} y={cy - 6} textAnchor="middle" fill="rgba(245,158,11,0.9)" fontSize="22" fontWeight="bold" fontFamily="system-ui">18h</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="system-ui">comiendo</text>

      {/* Labels */}
      {segments.map((seg, i) => (
        <text key={i} x={seg.lx} y={seg.ly} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="system-ui">
          {seg.label}
        </text>
      ))}
    </svg>
  )
}

export function Necesidades() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !animated) setAnimated(true)
  }, [isInView, animated])

  return (
    <section
      id="necesidades"
      ref={ref}
      className="min-h-screen py-24 md:py-32 bg-background relative overflow-hidden border-t border-white/5"
    >
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-amber-500/6 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: "radial-gradient(oklch(1 0 0 / 3%) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-5xl mx-auto w-full px-6 relative z-10">
        {/* Module label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-px w-10 bg-amber-500/40" />
          <span className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold">Módulo 05 · Necesidades Básicas</span>
          <div className="h-px w-10 bg-amber-500/40" />
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-foreground leading-[0.95]"
            style={{ fontSize: "clamp(3rem, 9vw, 6rem)" }}
          >
            Necesidades
          </motion.h2>
        </div>

        {/* Big stat */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-14"
        >
          <div className="flex items-end gap-4 mb-1">
            <span className="font-display font-bold text-amber-400 leading-none" style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}>18 HORAS</span>
            <span className="text-muted-foreground/60 font-light text-lg mb-2">comiendo por día</span>
          </div>
          <p className="text-sm text-muted-foreground/50 font-light">
            55,000 masticaciones diarias · Saliva buffer para el estómago · Movimiento constante
          </p>
        </motion.div>

        {/* Timeline donut + facts */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] bg-white/[0.02] border border-white/[0.05] p-8"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-amber-400/50 font-semibold mb-6 text-center">Ciclo de 24 Horas</p>
            <TimelineDonut animate={animated} />
          </motion.div>

          <div className="flex flex-col gap-5">
            {[
              { label: "Masticaciones / día", val: "55,000", color: "text-amber-400" },
              { label: "Litros de agua / día", val: "38–45 L", color: "text-blue-400" },
              { label: "Km recorridos / día", val: "16–30 km", color: "text-emerald-400" },
              { label: "Horas de sueño profundo", val: "5–7 h", color: "text-purple-400" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
              >
                <span className="text-sm text-muted-foreground/70 font-light">{stat.label}</span>
                <span className={`font-display text-xl font-bold ${stat.color}`}>{stat.val}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Need cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {NEEDS_CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <TiltCard intensity={8} className="group h-full">
                <div className="relative overflow-hidden p-7 rounded-[2rem] bg-white/[0.025] border border-white/[0.06] hover:bg-amber-500/[0.05] hover:border-amber-500/20 transition-all duration-500 h-full">
                  <div className="absolute top-5 right-5 font-display text-5xl font-bold text-white/[0.04] select-none">{card.num}</div>
                  <span className="text-2xl mb-3 block">{card.icon}</span>
                  <h4 className="font-display text-xl font-semibold text-foreground/90 mb-2">{card.title}</h4>
                  <p className="text-sm text-foreground/55 font-light leading-relaxed">{card.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Lucy Rees quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-2xl mx-auto text-center p-8 rounded-[2rem] bg-amber-500/[0.04] border border-amber-500/15"
        >
          <div className="absolute -top-5 left-8 font-display text-7xl text-amber-400/15 leading-none select-none">&ldquo;</div>
          <p className="text-lg md:text-xl font-display italic text-foreground/75 leading-relaxed mb-4 relative z-10">
            Las cosas que más importan para el caballo son: la compañía, la libertad y bastantes horas masticando.
          </p>
          <p className="text-[10px] tracking-[0.4em] uppercase text-amber-400/50 font-semibold">— Lucy Rees</p>
        </motion.div>
      </div>
    </section>
  )
}
