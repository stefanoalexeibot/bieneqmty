"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { List, Timer, Eye, Maximize2, X, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const PART1_SECTIONS = [
  { id: "presentacion", num: "00", label: "Presentación del Grupo", desc: "Conocemos a todos los participantes" },
  { id: "etologia",     num: "01", label: "¿Qué es la Etología?",    desc: "El estudio del comportamiento en hábitat natural" },
  { id: "habitat-presa", num: "02", label: "Hábitat y Animal de Presa", desc: "El entorno semiárido y la huida como defensa" },
  { id: "vida-manada",  num: "03", label: "Vida en Manada",           desc: "Socialización, facilitación y normas del grupo" },
  { id: "sentidos",     num: "04", label: "Los Sentidos del Caballo", desc: "Visión, oído, olfato, tacto y órgano vomeronasal" },
  { id: "necesidades",  num: "05", label: "Necesidades Básicas",      desc: "Alimentación, movimiento, 18 horas comiendo" },
  { id: "bienestar",    num: "06", label: "Feral vs Doméstico",       desc: "Comparativa de vida natural vs cautiverio" },
  { id: "comportamientos", num: "07", label: "Comportamientos & Soluciones", desc: "Causas de problemas y cómo resolverlos" },
]

const PART2_SECTIONS = [
  { id: "modulo-1",  num: "01", label: "Introducción al Casco", desc: "Más que queratina: es un corazón" },
  { id: "modulo-2",  num: "02", label: "Los Tres Pilares",       desc: "Dieta, ritmo y corte natural" },
  { id: "modulo-3",  num: "03", label: "El Caballo Salvaje",     desc: "El mustang como referencia de salud" },
  { id: "modulo-4",  num: "04", label: "Anatomía del Casco",     desc: "Pared, suela, ranilla y barras" },
  { id: "modulo-5",  num: "05", label: "Fisiología: La Bomba",   desc: "Impacto, absorción y rebote" },
  { id: "modulo-6",  num: "06", label: "Nutrición",              desc: "Combustible correcto e incorrecto" },
  { id: "modulo-7",  num: "07", label: "Paddock Paradise",       desc: "El entorno que cura" },
  { id: "modulo-8",  num: "08", label: "Herramientas",           desc: "Escofina, nippers y cuchilla" },
  { id: "modulo-9",  num: "09", label: "Técnica de Recorte",     desc: "Los 5 pasos del recorte correcto" },
  { id: "modulo-10", num: "10", label: "Laminitis",              desc: "Reconocer y actuar ante la emergencia" },
  { id: "modulo-11", num: "11", label: "Transición",             desc: "Lo difícil y la victoria" },
]

const TIMER_OPTIONS = [5, 10, 15, 20]

function SectionCard({ section, onNavigate }: { section: typeof PART1_SECTIONS[0]; onNavigate: (id: string) => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onNavigate(section.id)}
      className="group text-left p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-amber-500/[0.08] hover:border-amber-500/25 transition-all duration-300"
    >
      <div className="flex items-start gap-3">
        <span className="font-mono text-[10px] text-amber-500/50 font-bold mt-0.5 shrink-0">{section.num}</span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground/90 leading-snug mb-1 group-hover:text-amber-300/90 transition-colors duration-200">{section.label}</p>
          <p className="text-[11px] text-muted-foreground/50 leading-relaxed">{section.desc}</p>
        </div>
        <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/20 group-hover:text-amber-400/50 shrink-0 mt-0.5 transition-colors duration-200" />
      </div>
    </motion.button>
  )
}

function IndexOverlay({ onClose }: { onClose: () => void }) {
  const navigate = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    onClose()
  }, [onClose])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[9999] bg-background/95 backdrop-blur-xl overflow-y-auto"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[10px] tracking-[0.45em] text-amber-400/60 uppercase font-semibold mb-2">Índice del Curso</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Contenidos</h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:bg-amber-500/10 hover:border-amber-500/20 text-muted-foreground hover:text-foreground transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Part 1 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-amber-500/20" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-amber-400/60 font-semibold">Parte 1 · Etología & Comportamiento</span>
            <div className="h-px flex-1 bg-amber-500/20" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {PART1_SECTIONS.map((s, i) => (
              <motion.div key={s.id} transition={{ delay: i * 0.04 }}>
                <SectionCard section={s} onNavigate={navigate} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 2 */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground/50 font-semibold">Parte 2 · Pie Descalzo — Casco Natural</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {PART2_SECTIONS.map((s, i) => (
              <motion.div key={s.id} transition={{ delay: 0.32 + i * 0.04 }}>
                <SectionCard section={s} onNavigate={navigate} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function TimerPanel({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState(15)
  const [running, setRunning] = useState(false)
  const [remaining, setRemaining] = useState(15 * 60)
  const [done, setDone] = useState(false)

  const total = selected * 60
  const progress = running || done ? 1 - remaining / total : 0
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference * (1 - progress)

  const mm = String(Math.floor(remaining / 60)).padStart(2, "0")
  const ss = String(remaining % 60).padStart(2, "0")

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      setRemaining(prev => {
        if (prev <= 1) {
          clearInterval(id)
          setRunning(false)
          setDone(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [running])

  function start() {
    setRemaining(selected * 60)
    setDone(false)
    setRunning(true)
  }

  function reset() {
    setRunning(false)
    setDone(false)
    setRemaining(selected * 60)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 12 }}
      transition={{ duration: 0.2 }}
      className="absolute bottom-14 right-0 w-72 bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-5 shadow-2xl shadow-black/40"
    >
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-semibold tracking-widest uppercase text-amber-400/70">Pausa</p>
        <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/5 text-muted-foreground/50 hover:text-foreground transition-colors">
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Duration picker */}
      {!running && !done && (
        <div className="flex gap-2 mb-5">
          {TIMER_OPTIONS.map(opt => (
            <button
              key={opt}
              onClick={() => { setSelected(opt); setRemaining(opt * 60) }}
              className={cn(
                "flex-1 text-xs py-1.5 rounded-lg font-semibold transition-all duration-200",
                selected === opt
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  : "bg-white/[0.03] text-muted-foreground/50 border border-white/[0.04] hover:bg-white/[0.06]"
              )}
            >
              {opt}m
            </button>
          ))}
        </div>
      )}

      {/* Circular timer */}
      <div className="flex justify-center mb-5">
        <div className="relative">
          <svg width="128" height="128" viewBox="0 0 128 128">
            <circle cx="64" cy="64" r={radius} stroke="rgba(255,255,255,0.06)" strokeWidth="6" fill="none" />
            <circle
              cx="64" cy="64" r={radius}
              stroke={done ? "rgb(52,211,153)" : "rgb(245,158,11)"}
              strokeWidth="6" fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{ transform: "rotate(-90deg)", transformOrigin: "64px 64px", transition: "stroke-dashoffset 0.9s linear, stroke 0.4s" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {done ? (
              <span className="text-emerald-400 text-lg font-bold">✓</span>
            ) : (
              <span className="font-display text-2xl font-bold text-foreground">{mm}:{ss}</span>
            )}
          </div>
        </div>
      </div>

      {done ? (
        <div className="text-center">
          <p className="text-emerald-400 text-sm font-semibold mb-3">¡Listos para continuar!</p>
          <button onClick={reset} className="w-full py-2 rounded-xl bg-emerald-500/20 text-emerald-300 text-sm font-semibold border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors">
            Nueva pausa
          </button>
        </div>
      ) : running ? (
        <button onClick={reset} className="w-full py-2 rounded-xl bg-white/[0.05] text-muted-foreground text-sm font-semibold border border-white/[0.08] hover:bg-white/[0.08] transition-colors">
          Cancelar
        </button>
      ) : (
        <button onClick={start} className="w-full py-2 rounded-xl bg-amber-500/20 text-amber-300 text-sm font-semibold border border-amber-500/30 hover:bg-amber-500/30 transition-colors">
          Iniciar pausa
        </button>
      )}
    </motion.div>
  )
}

export function CourseControls() {
  const [showIndex, setShowIndex] = useState(false)
  const [showTimer, setShowTimer] = useState(false)
  const [focusMode, setFocusMode] = useState(false)

  const toggleFocus = useCallback(() => {
    setFocusMode(prev => {
      const next = !prev
      if (next) {
        document.documentElement.classList.add("focus-mode")
      } else {
        document.documentElement.classList.remove("focus-mode")
      }
      return next
    })
  }, [])

  const enterFullscreen = useCallback(() => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {})
    }
  }, [])

  return (
    <>
      {/* Focus vignette overlay */}
      <div className="focus-vignette fixed inset-0 pointer-events-none z-[9970] opacity-0 transition-opacity duration-400"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)" }} />

      {/* Focus mode exit bar */}
      <AnimatePresence>
        {focusMode && (
          <motion.div
            initial={{ y: -48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -48, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-[9975] flex items-center justify-center h-10 bg-amber-500/10 border-b border-amber-500/20 backdrop-blur-md"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-amber-400/70 mr-4">Modo Enfoque Activo</span>
            <button onClick={toggleFocus} className="text-[10px] tracking-widest uppercase text-amber-400 hover:text-amber-300 font-semibold transition-colors">
              Salir ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toolbar */}
      <div className="fixed bottom-6 right-6 z-[9980]">
        <div className="relative">
          <div className="bg-card/90 backdrop-blur border border-border rounded-2xl p-2 flex gap-1 shadow-2xl shadow-black/40">
            {/* Index */}
            <motion.button
              whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }}
              onClick={() => { setShowIndex(v => !v); setShowTimer(false) }}
              className={cn(
                "rounded-lg p-2 transition-all duration-200",
                showIndex ? "bg-amber-500/20 text-amber-300 shadow-[0_0_14px_rgba(245,158,11,0.35)]" : "text-muted-foreground/60 hover:bg-amber-500/10 hover:text-amber-400"
              )}
              title="Índice del curso"
            >
              <List className="w-4 h-4" />
            </motion.button>

            {/* Timer */}
            <motion.button
              whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }}
              onClick={() => { setShowTimer(v => !v); setShowIndex(false) }}
              className={cn(
                "rounded-lg p-2 transition-all duration-200",
                showTimer ? "bg-amber-500/20 text-amber-300 shadow-[0_0_14px_rgba(245,158,11,0.35)]" : "text-muted-foreground/60 hover:bg-amber-500/10 hover:text-amber-400"
              )}
              title="Temporizador de pausa"
            >
              <Timer className="w-4 h-4" />
            </motion.button>

            {/* Focus mode */}
            <motion.button
              whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }}
              onClick={toggleFocus}
              className={cn(
                "rounded-lg p-2 transition-all duration-200",
                focusMode ? "bg-amber-500/20 text-amber-300 shadow-[0_0_14px_rgba(245,158,11,0.35)]" : "text-muted-foreground/60 hover:bg-amber-500/10 hover:text-amber-400"
              )}
              title="Modo enfoque"
            >
              <Eye className="w-4 h-4" />
            </motion.button>

            {/* Fullscreen */}
            <motion.button
              whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }}
              onClick={enterFullscreen}
              className="rounded-lg p-2 text-muted-foreground/60 hover:bg-amber-500/10 hover:text-amber-400 transition-all duration-200"
              title="Pantalla completa"
            >
              <Maximize2 className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Timer panel */}
          <AnimatePresence>
            {showTimer && <TimerPanel onClose={() => setShowTimer(false)} />}
          </AnimatePresence>
        </div>
      </div>

      {/* Index overlay */}
      <AnimatePresence>
        {showIndex && <IndexOverlay onClose={() => setShowIndex(false)} />}
      </AnimatePresence>
    </>
  )
}
