"use client"

import { motion } from "framer-motion"

/* ── Vision Diagram SVG (top-down horse view) ── */
function VisionDiagram() {
  const cx = 200
  const cy = 220
  const r = 160

  // Angle to cartesian: 0° = straight ahead (up on screen)
  function toXY(angleDeg: number, radius = r) {
    const rad = angleDeg * Math.PI / 180
    return {
      x: cx + radius * Math.sin(rad),
      y: cy - radius * Math.cos(rad),
    }
  }

  // Precomputed points
  const p0   = toXY(0)    // (200, 60)
  const p5r  = toXY(5)    // +5°
  const p5l  = toXY(-5)   // -5°
  const p40r = toXY(40)   // +40°
  const p40l = toXY(-40)  // -40°
  const p170r = toXY(170) // +170°
  const p170l = toXY(-170)// -170°
  const p180 = toXY(180)  // 180°

  function sector(x1: number, y1: number, x2: number, y2: number, sweep: 0 | 1, large: 0 | 1 = 0) {
    return `M ${cx} ${cy} L ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 ${large} ${sweep} ${x2.toFixed(1)} ${y2.toFixed(1)} Z`
  }

  return (
    <svg viewBox="0 0 400 400" fill="none" className="w-full max-w-[380px] mx-auto" aria-label="Diagrama de visión del caballo">
      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={r} stroke="rgba(196,144,58,0.12)" strokeWidth="1" fill="none" />
      <circle cx={cx} cy={cy} r={r * 0.6} stroke="rgba(196,144,58,0.06)" strokeWidth="1" fill="none" strokeDasharray="4 6" />

      {/* 1. Front blind spot (between -5° and +5°) */}
      <path d={sector(p5l.x, p5l.y, p5r.x, p5r.y, 1, 0)} fill="rgba(239,68,68,0.20)" />

      {/* 2. Binocular right (+5° to +40°) */}
      <path d={sector(p5r.x, p5r.y, p40r.x, p40r.y, 1, 0)} fill="rgba(52,211,153,0.18)" />

      {/* 3. Binocular left (-40° to -5°) */}
      <path d={sector(p5l.x, p5l.y, p40l.x, p40l.y, 0, 0)} fill="rgba(52,211,153,0.18)" />

      {/* 4. Monocular right (+40° to +170°) */}
      <path d={sector(p40r.x, p40r.y, p170r.x, p170r.y, 1, 1)} fill="rgba(245,158,11,0.14)" />

      {/* 5. Monocular left (-170° to -40°) */}
      <path d={sector(p40l.x, p40l.y, p170l.x, p170l.y, 0, 1)} fill="rgba(245,158,11,0.14)" />

      {/* 6. Rear blind spot (170° to -170° = 180°) */}
      <path d={sector(p170r.x, p170r.y, p170l.x, p170l.y, 1, 0)} fill="rgba(239,68,68,0.15)" />

      {/* ── Horse body (top-down silhouette) ── */}
      {/* Body ellipse */}
      <ellipse cx={cx} cy={245} rx={20} ry={50} fill="rgba(196,144,58,0.45)" />
      {/* Neck */}
      <path d={`M ${cx - 10} 200 Q ${cx - 8} 185 ${cx - 6} 175 L ${cx + 6} 175 Q ${cx + 8} 185 ${cx + 10} 200 Z`}
        fill="rgba(196,144,58,0.50)" />
      {/* Head */}
      <ellipse cx={cx} cy={175} rx={12} ry={16} fill="rgba(196,144,58,0.55)" />
      {/* Ears */}
      <polygon points={`${cx - 8},162 ${cx - 12},150 ${cx - 4},158`} fill="rgba(196,144,58,0.55)" />
      <polygon points={`${cx + 8},162 ${cx + 12},150 ${cx + 4},158`} fill="rgba(196,144,58,0.55)" />
      {/* Nostrils */}
      <ellipse cx={cx - 4} cy={190} rx={2} ry={2.5} fill="rgba(0,0,0,0.3)" />
      <ellipse cx={cx + 4} cy={190} rx={2} ry={2.5} fill="rgba(0,0,0,0.3)" />
      {/* Legs (simplified) */}
      <rect x={cx - 18} y={286} width={5} height={18} rx={2.5} fill="rgba(196,144,58,0.30)" />
      <rect x={cx - 9}  y={290} width={5} height={18} rx={2.5} fill="rgba(196,144,58,0.30)" />
      <rect x={cx + 4}  y={290} width={5} height={18} rx={2.5} fill="rgba(196,144,58,0.30)" />
      <rect x={cx + 13} y={286} width={5} height={18} rx={2.5} fill="rgba(196,144,58,0.30)" />

      {/* ── Text labels ── */}
      <text x={cx} y={42} textAnchor="middle" fill="rgba(52,211,153,0.7)" fontSize="9" fontWeight="600" fontFamily="system-ui">BINOCULAR 75°</text>

      <text x={330} y={130} textAnchor="middle" fill="rgba(245,158,11,0.60)" fontSize="8" fontFamily="system-ui">MONOCULAR</text>
      <text x={330} y={141} textAnchor="middle" fill="rgba(245,158,11,0.60)" fontSize="8" fontFamily="system-ui">130° c/lado</text>

      <text x={70}  y={130} textAnchor="middle" fill="rgba(245,158,11,0.60)" fontSize="8" fontFamily="system-ui">MONOCULAR</text>
      <text x={70}  y={141} textAnchor="middle" fill="rgba(245,158,11,0.60)" fontSize="8" fontFamily="system-ui">130° c/lado</text>

      <text x={cx} y={56} textAnchor="middle" fill="rgba(239,68,68,0.65)" fontSize="8" fontFamily="system-ui">PUNTO CIEGO</text>
      <text x={cx} y={396} textAnchor="middle" fill="rgba(239,68,68,0.65)" fontSize="8" fontFamily="system-ui">PUNTO CIEGO TRASERO</text>

      {/* Legend */}
      <g transform="translate(8, 360)">
        <rect x={0}  y={0} width={8} height={8} fill="rgba(52,211,153,0.4)" rx={2} />
        <text x={11} y={8} fill="rgba(255,255,255,0.4)" fontSize="7.5" fontFamily="system-ui">Binocular</text>
        <rect x={60} y={0} width={8} height={8} fill="rgba(245,158,11,0.35)" rx={2} />
        <text x={71} y={8} fill="rgba(255,255,255,0.4)" fontSize="7.5" fontFamily="system-ui">Monocular</text>
        <rect x={124} y={0} width={8} height={8} fill="rgba(239,68,68,0.35)" rx={2} />
        <text x={135} y={8} fill="rgba(255,255,255,0.4)" fontSize="7.5" fontFamily="system-ui">Punto ciego</text>
      </g>
    </svg>
  )
}

/* ── Sensitive Zones SVG (side view) ── */
function SensitiveZonesSVG() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="w-full max-w-[320px] mx-auto" aria-label="Zonas sensitivas del caballo">
      {/* Body */}
      <ellipse cx={160} cy={105} rx={80} ry={40} fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.3)" strokeWidth="1" />
      {/* Neck */}
      <path d="M 95 80 Q 90 55 100 38 Q 110 25 120 35 Q 118 55 112 78 Z"
        fill="rgba(52,211,153,0.12)" stroke="rgba(52,211,153,0.25)" strokeWidth="1" />
      {/* Head */}
      <ellipse cx={105} cy={28} rx={18} ry={22} fill="rgba(245,158,11,0.20)" stroke="rgba(245,158,11,0.4)" strokeWidth="1" />
      {/* Muzzle (very sensitive) */}
      <ellipse cx={100} cy={42} rx={10} ry={7} fill="rgba(245,158,11,0.45)" stroke="rgba(245,158,11,0.6)" strokeWidth="1" />
      {/* Ear */}
      <polygon points="110,10 116,2 120,12" fill="rgba(52,211,153,0.3)" stroke="rgba(52,211,153,0.4)" strokeWidth="0.8" />
      {/* Hindquarters */}
      <ellipse cx={225} cy={108} rx={35} ry={36} fill="rgba(99,102,241,0.12)" stroke="rgba(99,102,241,0.25)" strokeWidth="1" />
      {/* Flank (sensitive) */}
      <ellipse cx={190} cy={120} rx={20} ry={14} fill="rgba(245,158,11,0.25)" stroke="rgba(245,158,11,0.4)" strokeWidth="1" />
      {/* Legs */}
      <rect x={125} y={140} width={10} height={32} rx={5} fill="rgba(100,100,100,0.2)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      <rect x={145} y={143} width={10} height={29} rx={5} fill="rgba(100,100,100,0.2)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      <rect x={185} y={140} width={10} height={32} rx={5} fill="rgba(100,100,100,0.2)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      <rect x={205} y={143} width={10} height={29} rx={5} fill="rgba(100,100,100,0.2)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      {/* Inner leg sensitive zone */}
      <ellipse cx={145} cy={128} rx={7} ry={9} fill="rgba(245,158,11,0.30)" stroke="rgba(245,158,11,0.5)" strokeWidth="0.8" />
      {/* Tail */}
      <path d="M 255 110 Q 275 108 280 120 Q 278 140 265 145" stroke="rgba(100,100,100,0.4)" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Legend */}
      <g transform="translate(0, 162)">
        <rect x={0}  y={0} width={7} height={7} fill="rgba(245,158,11,0.5)" rx={1.5} />
        <text x={10} y={7} fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="system-ui">Muy sensible</text>
        <rect x={80} y={0} width={7} height={7} fill="rgba(52,211,153,0.4)" rx={1.5} />
        <text x={90} y={7} fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="system-ui">Medio</text>
        <rect x={125} y={0} width={7} height={7} fill="rgba(99,102,241,0.4)" rx={1.5} />
        <text x={135} y={7} fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="system-ui">Tolera bien</text>
      </g>
    </svg>
  )
}

const SENSES = [
  { icon: "👁️", title: "Visión", desc: "Dicromática · Azul y verde mejor que rojo. Campo visual de casi 350°." },
  { icon: "👂", title: "Oído", desc: "4 Hz a 25 kHz · Más agudo que el humano. Orejas rotatorias de 180°." },
  { icon: "👃", title: "Olfato", desc: "Área inmensa de receptores · Reconoce personas, caballos y peligros." },
  { icon: "😤", title: "Flehmen", desc: "Órgano vomeronasal · Detección de feromonas e información química." },
  { icon: "🖐️", title: "Tacto", desc: "Sensibilidad varía por zona del cuerpo. El hocico: extremadamente fino." },
]

export function Sentidos() {
  return (
    <section
      id="sentidos"
      className="min-h-screen py-24 md:py-32 bg-background relative overflow-hidden border-t border-white/5"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: "radial-gradient(oklch(1 0 0 / 3%) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-6xl mx-auto w-full px-6 relative z-10">
        {/* Module label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-px w-10 bg-amber-500/40" />
          <span className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold">Módulo 04 · Percepción</span>
          <div className="h-px w-10 bg-amber-500/40" />
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-foreground leading-[0.95]"
            style={{ fontSize: "clamp(3rem, 9vw, 6rem)" }}
          >
            Los Sentidos
          </motion.h2>
        </div>

        {/* Vision diagram + zones */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] bg-white/[0.02] border border-white/[0.05] p-6"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-amber-400/50 font-semibold mb-4 text-center">Campo Visual (vista superior)</p>
            <VisionDiagram />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="rounded-[2rem] bg-white/[0.02] border border-white/[0.05] p-6"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-amber-400/50 font-semibold mb-4 text-center">Zonas de Sensibilidad</p>
            <SensitiveZonesSVG />
            <p className="text-xs text-muted-foreground/40 text-center mt-4 font-light italic">
              La sensibilidad varía mucho por zona del cuerpo. El hocico y los flancos son especialmente finos.
            </p>
          </motion.div>
        </div>

        {/* Senses grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SENSES.map((sense, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-5 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:bg-amber-500/[0.05] hover:border-amber-500/20 transition-all duration-500"
            >
              <span className="text-2xl mb-3 block">{sense.icon}</span>
              <h4 className="font-display text-lg font-semibold text-foreground/90 mb-2">{sense.title}</h4>
              <p className="text-xs text-foreground/50 font-light leading-relaxed">{sense.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
