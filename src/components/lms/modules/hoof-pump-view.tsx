"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { Activity, ArrowUp, Zap, Droplets, ChevronRight, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"

interface HoofPumpViewProps {
  data: any
}

// Anatomy icon per step — SVG paths for premium illustrations
const STEP_ICONS = [
  // Step 1: Impacto — downward force arrow
  ({ active }: { active: boolean }) => (
    <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
      <motion.circle
        cx="40" cy="40" r="36"
        stroke={active ? "#f59e0b" : "#ffffff22"}
        strokeWidth="1.5"
        initial={false}
        animate={{ opacity: active ? 1 : 0.3 }}
      />
      <motion.path
        d="M40 14 L40 50"
        stroke={active ? "#f59e0b" : "#ffffff40"}
        strokeWidth="3" strokeLinecap="round"
        animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
      />
      <motion.path
        d="M26 40 L40 56 L54 40"
        stroke={active ? "#f59e0b" : "#ffffff40"}
        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "circOut" }}
      />
      {/* Ground / hoof base */}
      <motion.path
        d="M24 62 Q40 68 56 62"
        stroke={active ? "#f59e0b80" : "#ffffff20"}
        strokeWidth="2" strokeLinecap="round"
        animate={{ opacity: active ? 1 : 0.3 }}
      />
      {/* Impact rings */}
      {active && [1, 2, 3].map(r => (
        <motion.circle
          key={r}
          cx="40" cy="62" r={r * 6}
          stroke="#f59e0b"
          strokeWidth="0.5"
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ delay: r * 0.15, duration: 0.8, repeat: Infinity, repeatDelay: 0.5 }}
        />
      ))}
    </svg>
  ),

  // Step 2: Expansión — lateral expansion arrows
  ({ active }: { active: boolean }) => (
    <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
      <motion.circle cx="40" cy="40" r="36" stroke={active ? "#f59e0b" : "#ffffff22"} strokeWidth="1.5" animate={{ opacity: active ? 1 : 0.3 }} />
      {/* Central hoof shape */}
      <motion.ellipse cx="40" cy="44" rx="10" ry="14" stroke={active ? "#f59e0b" : "#ffffff40"} strokeWidth="2"
        animate={active ? { rx: [10, 16, 10], ry: [14, 10, 14] } : {}}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Left arrow */}
      <motion.path d="M26 44 L14 44" stroke={active ? "#f59e0b" : "#ffffff30"} strokeWidth="2.5" strokeLinecap="round"
        animate={active ? { x: [0, -4, 0] } : {}}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path d="M18 38 L12 44 L18 50" stroke={active ? "#f59e0b" : "#ffffff30"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        animate={active ? { x: [0, -4, 0] } : {}}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Right arrow */}
      <motion.path d="M54 44 L66 44" stroke={active ? "#f59e0b" : "#ffffff30"} strokeWidth="2.5" strokeLinecap="round"
        animate={active ? { x: [0, 4, 0] } : {}}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path d="M62 38 L68 44 L62 50" stroke={active ? "#f59e0b" : "#ffffff30"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        animate={active ? { x: [0, 4, 0] } : {}}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Pressure dots */}
      {active && [0, 1, 2, 3, 4].map(i => (
        <motion.circle key={i} cx={24 + i * 8} cy={60} r="2" fill="#f59e0b"
          animate={{ opacity: [0, 1, 0], y: [0, -4, 0] }}
          transition={{ delay: i * 0.1, duration: 0.8, repeat: Infinity }}
        />
      ))}
    </svg>
  ),

  // Step 3: Bombeo — upward blood flow
  ({ active }: { active: boolean }) => (
    <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
      <motion.circle cx="40" cy="40" r="36" stroke={active ? "#f59e0b" : "#ffffff22"} strokeWidth="1.5" animate={{ opacity: active ? 1 : 0.3 }} />
      {/* Vein / artery path going up */}
      <motion.path d="M40 65 Q32 50 36 35 Q38 22 40 14" stroke={active ? "#f59e0b" : "#ffffff30"} strokeWidth="3" strokeLinecap="round"
        animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }}
        transition={{ duration: 1, ease: "circOut", repeat: active ? Infinity : 0, repeatDelay: 0.5 }}
      />
      {/* Blood droplets moving up */}
      {active && [0, 1, 2].map(i => (
        <motion.circle key={i} cx={38 + (i % 2) * 4} cy={60} r="3" fill="#f59e0b"
          animate={{ cy: [60, 14], opacity: [1, 0] }}
          transition={{ delay: i * 0.4, duration: 1.4, repeat: Infinity, ease: "easeIn" }}
        />
      ))}
      {/* Heart pulse at top */}
      <motion.path d="M32 18 Q32 14 36 14 Q40 14 40 18 Q40 14 44 14 Q48 14 48 18 Q48 24 40 30 Q32 24 32 18Z"
        fill={active ? "#f59e0b" : "none"}
        stroke={active ? "#f59e0b" : "#ffffff30"}
        strokeWidth="1.5"
        animate={active ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "40px 22px" }}
      />
      {/* EKG line */}
      {active && (
        <motion.path d="M10 50 L18 50 L22 42 L26 58 L30 50 L70 50"
          stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      )}
    </svg>
  ),
]

const STEP_COLORS = [
  { bg: "from-amber-500/20 to-transparent", border: "border-amber-500/30", glow: "shadow-[0_0_80px_rgba(245,158,11,0.15)]", text: "text-amber-400" },
  { bg: "from-orange-500/20 to-transparent", border: "border-orange-500/30", glow: "shadow-[0_0_80px_rgba(249,115,22,0.15)]", text: "text-orange-400" },
  { bg: "from-red-500/20 to-transparent", border: "border-red-500/30", glow: "shadow-[0_0_80px_rgba(239,68,68,0.15)]", text: "text-red-400" },
]

const STEP_FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1598974357851-98166a9f9b44?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1590422750058-2fb0c058eb7b?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&q=80&w=1200",
]

export function HoofPumpView({ data }: HoofPumpViewProps) {
  const [activeStep, setActiveStep] = useState(0)
  const steps = data.pasos || []
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ scale: [1, 1.04, 1], transition: { duration: 0.6 } })
  }, [activeStep])

  const step = steps[activeStep]
  const color = STEP_COLORS[activeStep % STEP_COLORS.length]
  const IconComponent = STEP_ICONS[activeStep % STEP_ICONS.length]

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 py-12">

      {/* Dynamic ambient glow — changes color per step */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.12, 0.06] }}
            transition={{ duration: 4, repeat: Infinity }}
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] blur-[220px] rounded-full",
              activeStep === 0 ? "bg-amber-500" : activeStep === 1 ? "bg-orange-500" : "bg-red-500"
            )}
          />
          {/* Subtle BG image */}
          <div className="absolute inset-0 opacity-[0.04]">
            <img src={step?.imagen || STEP_FALLBACK_IMAGES[activeStep]} className="w-full h-full object-cover grayscale" alt=""
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = STEP_FALLBACK_IMAGES[activeStep % STEP_FALLBACK_IMAGES.length] }}
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-10">

        {/* Module header */}
        <div className="space-y-4">
          <span className="text-sm uppercase tracking-[0.6em] text-amber-500 font-black">{data.parte}</span>
          <h2 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter leading-none">
            {data.titulo}
          </h2>
          <p className="text-white/60 text-xl font-light max-w-2xl leading-relaxed">{data.texto || "Descubre cómo el movimiento del casco impulsa el sistema circulatorio del caballo."}</p>
        </div>

        {/* Step cards row */}
        <div className="grid grid-cols-3 gap-4">
          {steps.map((s: any, i: number) => {
            const c = STEP_COLORS[i % STEP_COLORS.length]
            const StepIcon = STEP_ICONS[i % STEP_ICONS.length]
            const isActive = i === activeStep
            return (
              <motion.button
                key={i}
                onClick={() => setActiveStep(i)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "relative p-8 rounded-[2.5rem] border text-left overflow-hidden transition-all duration-700 group",
                  isActive
                    ? `bg-white/[0.05] ${c.border} ${c.glow}`
                    : "bg-white/[0.02] border-white/5 hover:border-white/15"
                )}
              >
                {/* Step number */}
                <span className={cn(
                  "text-xs uppercase tracking-[0.6em] font-black mb-6 block transition-all",
                  isActive ? c.text : "text-white/40"
                )}>
                  Fase {String(i + 1).padStart(2, "0")}
                </span>

                {/* Animated SVG illustration */}
                <div className="w-24 h-24 mx-auto mb-6">
                  <StepIcon active={isActive} />
                </div>

                {/* Step name */}
                <h3 className={cn(
                  "text-3xl font-display font-bold tracking-tighter transition-all",
                  isActive ? "text-white" : "text-white/30"
                )}>
                  {s.nombre}
                </h3>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="pump-active"
                    className={cn("absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r", c.bg.replace("from-", "from-amber-500 to-"))}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative p-10 md:p-14 rounded-[3rem] border overflow-hidden flex flex-col md:flex-row items-center gap-10 backdrop-blur-2xl",
              `bg-white/[0.02] ${color.border}`
            )}
          >
            {/* Large animated illustration */}
            <motion.div animate={controls} className="w-40 h-40 shrink-0">
              <IconComponent active={true} />
            </motion.div>

            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className={cn("w-3.5 h-3.5 rounded-full", activeStep === 2 ? "bg-red-500" : "bg-amber-500")}
                />
                <span className={cn("text-xs uppercase tracking-[0.5em] font-black", color.text)}>
                  Fase {activeStep + 1} de {steps.length} · Mecánica Vascular
                </span>
              </div>

              <h3 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter leading-none">
                {step?.nombre}
              </h3>

              <p className="text-2xl md:text-4xl text-zinc-300 font-light leading-relaxed italic pr-12">
                &ldquo;{step?.texto}&rdquo;
              </p>

              {/* Data callout */}
              {activeStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-red-500/10 border border-red-500/20"
                >
                  <Droplets className="w-5 h-5 text-red-400" />
                  <span className="text-red-300 font-display font-bold text-lg">
                    Hasta <span className="text-red-400 text-2xl">1 litro</span> de sangre bombeado por minuto
                  </span>
                </motion.div>
              )}
              {activeStep === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/20"
                >
                  <Zap className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-300 font-display font-bold text-lg">
                    Sensores de presión <span className="text-amber-400">activados en milisegundos</span>
                  </span>
                </motion.div>
              )}
              {activeStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-orange-500/10 border border-orange-500/20"
                >
                  <Activity className="w-5 h-5 text-orange-400" />
                  <span className="text-orange-300 font-display font-bold text-lg">
                    Expansión lateral de <span className="text-orange-400">hasta 8mm</span> por impacto
                  </span>
                </motion.div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-4 shrink-0">
              <button
                onClick={() => setActiveStep(p => Math.max(0, p - 1))}
                disabled={activeStep === 0}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-20 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveStep(p => Math.min(steps.length - 1, p + 1))}
                disabled={activeStep === steps.length - 1}
                className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center text-black hover:bg-amber-500 transition-all hover:scale-110 disabled:opacity-20 shadow-xl"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  )
}
