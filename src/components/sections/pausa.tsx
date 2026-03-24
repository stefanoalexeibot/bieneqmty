"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from "react"

type TipoPausa = "comida" | "descanso" | "cafe" | "general"

const TIPO_ICONS: Record<TipoPausa, string> = {
  comida:   "🍽️",
  cafe:     "☕",
  descanso: "😴",
  general:  "⏸️",
}

interface PausaSectionProps {
  id?: string
  duration?: number
  message?: string
  tipo?: TipoPausa
}

export function PausaSection({
  id = "pausa-1",
  duration = 15,
  message = "Tómate un descanso",
  tipo = "general",
}: PausaSectionProps) {
  const [started, setStarted] = useState(false)
  const [remaining, setRemaining] = useState(duration * 60)
  const [done, setDone] = useState(false)

  const total = duration * 60
  const progress = started ? 1 - remaining / total : 0
  const radius = 100
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference * (1 - progress)

  const mm = String(Math.floor(remaining / 60)).padStart(2, "0")
  const ss = String(remaining % 60).padStart(2, "0")

  const start = useCallback(() => {
    setRemaining(duration * 60)
    setDone(false)
    setStarted(true)
  }, [duration])

  const skip = useCallback(() => {
    setStarted(false)
    setDone(false)
    setRemaining(duration * 60)
  }, [duration])

  useEffect(() => {
    if (!started || done) return
    const id = setInterval(() => {
      setRemaining(prev => {
        if (prev <= 1) {
          clearInterval(id)
          setDone(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [started, done])

  const ringColor = done ? "rgb(52,211,153)" : "rgb(245,158,11)"

  return (
    <section
      id={id}
      className="min-h-screen py-24 md:py-32 bg-background relative overflow-hidden border-t border-white/5 flex flex-col items-center justify-center"
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={done ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/8 blur-[180px] rounded-full" />
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-amber-500/6 blur-[150px] rounded-full pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-15"
        style={{ backgroundImage: "radial-gradient(oklch(1 0 0 / 3%) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-md mx-auto px-6">
        {/* Type icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl"
        >
          {TIPO_ICONS[tipo]}
        </motion.div>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <div className="h-px w-8 bg-amber-500/40" />
          <span className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold">Pausa</span>
          <div className="h-px w-8 bg-amber-500/40" />
        </motion.div>

        {/* Circular timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <svg width="240" height="240" viewBox="0 0 240 240">
            {/* Background ring */}
            <circle cx="120" cy="120" r={radius} stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" />
            {/* Progress ring */}
            <circle
              cx="120" cy="120" r={radius}
              stroke={ringColor}
              strokeWidth="8" fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "120px 120px",
                transition: "stroke-dashoffset 0.9s linear, stroke 0.4s ease",
                filter: `drop-shadow(0 0 12px ${ringColor}50)`,
              }}
            />
            {/* Inner glow dot */}
            <circle cx="120" cy="120" r="70" fill="rgba(255,255,255,0.015)" />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-1"
                >
                  <span className="text-4xl">✅</span>
                  <span className="text-emerald-400 text-sm font-semibold">¡Listos!</span>
                </motion.div>
              ) : (
                <motion.div
                  key="timer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-1"
                >
                  <span className="font-display font-bold text-4xl text-foreground">{mm}:{ss}</span>
                  <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground/40">PAUSA</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <AnimatePresence mode="wait">
            {done ? (
              <motion.p
                key="done-msg"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl font-display font-semibold text-emerald-400"
              >
                ¡Listos para continuar!
              </motion.p>
            ) : (
              <motion.p
                key="msg"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg text-muted-foreground/70 font-light italic"
              >
                {message}
              </motion.p>
            )}
          </AnimatePresence>
          <p className="text-xs text-muted-foreground/35 mt-1">{duration} minutos</p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3 w-full max-w-xs"
        >
          {!started || done ? (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={start}
              className="flex-1 py-3 px-6 rounded-2xl bg-amber-500/20 text-amber-300 font-semibold text-sm border border-amber-500/30 hover:bg-amber-500/30 transition-all duration-200"
            >
              {done ? "Nueva pausa" : "Iniciar Pausa"}
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={skip}
              className="flex-1 py-3 px-6 rounded-2xl bg-white/[0.05] text-muted-foreground font-semibold text-sm border border-white/[0.08] hover:bg-white/[0.08] transition-all duration-200"
            >
              Cancelar
            </motion.button>
          )}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={skip}
            className="flex-1 py-3 px-6 rounded-2xl bg-white/[0.03] text-muted-foreground/60 font-medium text-sm border border-white/[0.06] hover:bg-white/[0.06] hover:text-foreground/70 transition-all duration-200"
          >
            Continuar Curso
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

/* Pre-configured variants */
export function PausaComida() {
  return (
    <PausaSection
      id="pausa-1"
      duration={20}
      message="Es momento de comer 🍽️"
      tipo="comida"
    />
  )
}
