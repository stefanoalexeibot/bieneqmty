"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

/* ── SVG Components ── */
function HorseshoeSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 310" fill="none" className={className} aria-hidden>
      <path d="M 45 20 L 45 165 A 105 105 0 0 1 255 165 L 255 20"
        stroke="currentColor" strokeWidth="44" strokeLinecap="butt" fill="none" />
      <circle cx="45"  cy="65"  r="5.5" fill="currentColor" opacity="0.3"/>
      <circle cx="45"  cy="125" r="5.5" fill="currentColor" opacity="0.3"/>
      <circle cx="62"  cy="218" r="5.5" fill="currentColor" opacity="0.3"/>
      <circle cx="100" cy="258" r="5.5" fill="currentColor" opacity="0.3"/>
      <circle cx="200" cy="258" r="5.5" fill="currentColor" opacity="0.3"/>
      <circle cx="238" cy="218" r="5.5" fill="currentColor" opacity="0.3"/>
      <circle cx="255" cy="125" r="5.5" fill="currentColor" opacity="0.3"/>
      <circle cx="255" cy="65"  r="5.5" fill="currentColor" opacity="0.3"/>
    </svg>
  )
}

function HoofprintSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" fill="currentColor" className={className} aria-hidden>
      <ellipse cx="22" cy="22" rx="13" ry="17" />
      <ellipse cx="58" cy="22" rx="13" ry="17" />
      <path d="M 10 48 Q 10 88 40 92 Q 70 88 70 48 Q 70 38 40 36 Q 10 38 10 48 Z" />
    </svg>
  )
}

function OrbitRingSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden>
      <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="8 16" />
      <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 20" />
      <circle cx="200" cy="200" r="80"  stroke="currentColor" strokeWidth="0.5" />
      {/* Small orbit nodes */}
      <circle cx="20"  cy="200" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="380" cy="200" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="200" cy="20"  r="4" fill="currentColor" opacity="0.6" />
      <circle cx="200" cy="380" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="327" cy="73"  r="3" fill="currentColor" opacity="0.4" />
      <circle cx="73"  cy="327" r="3" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

/* ── Floating Particle ── */
function Particle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-amber-400/30 pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.4, 1] }}
      transition={{ duration: 4 + delay * 0.7, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  )
}

const PARTICLES = [
  { delay: 0,   x: "12%",  y: "30%", size: 4 },
  { delay: 0.8, x: "85%",  y: "22%", size: 3 },
  { delay: 1.5, x: "70%",  y: "75%", size: 5 },
  { delay: 0.4, x: "25%",  y: "70%", size: 3 },
  { delay: 2.1, x: "55%",  y: "88%", size: 4 },
  { delay: 1.1, x: "92%",  y: "60%", size: 3 },
  { delay: 0.6, x: "38%",  y: "15%", size: 2 },
  { delay: 1.8, x: "8%",   y: "55%", size: 3 },
]

/* ── Main Component ── */
export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 })

  const hsRotateY = useTransform(springX, [-400, 400], [-18, 18])
  const hsRotateX = useTransform(springY, [-400, 400], [12, -12])

  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="min-h-screen flex flex-col justify-center px-6 lg:px-16 py-20 relative overflow-hidden bg-background"
    >
      {/* ── BACKGROUNDS ── */}
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(oklch(1 0 0 / 4%) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* Primary amber glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none"
      />
      {/* Bottom-right glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-amber-900/8 blur-[110px] rounded-full pointer-events-none" />

      {/* ── PARTICLES ── */}
      {mounted && PARTICLES.map((p, i) => <Particle key={i} {...p} />)}

      {/* ── ORBIT RINGS (large bg element) ── */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 text-amber-500/[0.06] pointer-events-none w-[600px] h-[600px] hidden lg:block"
      >
        <OrbitRingSVG className="w-full h-full" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 text-amber-400/[0.04] pointer-events-none w-[360px] h-[360px] hidden lg:block"
      >
        <OrbitRingSVG className="w-full h-full" />
      </motion.div>

      {/* ── 3D HORSESHOE (mouse-reactive) ── */}
      <motion.div
        style={{
          rotateY: hsRotateY,
          rotateX: hsRotateX,
          perspective: 1200,
          transformStyle: "preserve-3d",
        }}
        animate={{ y: [0, -18, -6, -22, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[3%] md:right-[5%] top-1/2 -translate-y-1/2 text-amber-400/[0.18] pointer-events-none w-[260px] h-[260px] md:w-[420px] md:h-[420px] lg:w-[540px] lg:h-[540px]"
      >
        <HorseshoeSVG className="w-full h-full drop-shadow-[0_0_60px_rgba(196,144,58,0.4)]" />
      </motion.div>

      {/* Small secondary horseshoe */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, -4, 2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute left-[3%] top-[10%] text-amber-500/[0.08] pointer-events-none w-[90px] h-[90px] hidden xl:block"
      >
        <HorseshoeSVG className="w-full h-full" />
      </motion.div>

      {/* Hoof prints trail */}
      <div className="absolute bottom-[16%] left-[4%] text-amber-400/[0.06] pointer-events-none hidden lg:flex gap-5 items-end"
        style={{ transform: "rotate(-6deg)" }}>
        {[0, 3, 6, 9].map((delay, i) => (
          <motion.div key={i}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
            style={{ transform: i % 2 === 1 ? "translateY(8px)" : undefined }}
          >
            <HoofprintSVG className="w-7 h-9" />
          </motion.div>
        ))}
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-5xl relative z-10 mx-auto text-center">

        {/* Animated label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 rounded-full border border-amber-500/25 bg-amber-500/6 px-5 py-2 mb-10 backdrop-blur-md"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[11px] tracking-[0.4em] uppercase font-semibold text-amber-400/80">
            Curso Completo · 11 Módulos
          </span>
        </motion.div>

        {/* Main title with stagger */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold tracking-tight leading-[0.92] text-foreground"
            style={{ fontSize: "clamp(4rem, 13vw, 9.5rem)" }}
          >
            Pie
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold tracking-tight leading-[0.92] italic text-amber-400"
            style={{ fontSize: "clamp(4rem, 13vw, 9.5rem)" }}
          >
            Descalzo.
          </motion.h1>
        </div>

        {/* Animated accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative w-28 h-px mx-auto mb-8 origin-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-amber-500/40" />
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-amber-300 to-transparent"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="text-lg md:text-xl text-muted-foreground font-light mb-12 max-w-xl mx-auto leading-relaxed"
        >
          El Arte del Casco Natural — La infraestructura completa de conocimiento
          para la salud integral de tu caballo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#modulo-1"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group rounded-full px-10 py-6 text-base font-semibold tracking-wide bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(196,144,58,0.4)] hover:shadow-[0_0_70px_rgba(196,144,58,0.6)]"
            )}
          >
            <span>Comenzar recorrido</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="ml-2 inline-block"
            >→</motion.span>
          </Link>
          <span className="text-muted-foreground/40 text-xs tracking-[0.3em] uppercase hidden sm:block">
            · De la Teoría a la Práctica ·
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/40 pointer-events-none"
      >
        <span className="text-[9px] tracking-[0.5em] uppercase">Scroll</span>
        <div className="relative w-px h-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/30 to-transparent" />
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeIn" }}
            className="absolute top-0 left-0 w-full h-[40%] bg-amber-400/80"
          />
        </div>
      </motion.div>
    </section>
  )
}
