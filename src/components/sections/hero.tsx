"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

/* ── SVG Decorations ── */
function HorseshoeSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 310" fill="none" className={className} aria-hidden>
      <path d="M 45 20 L 45 165 A 105 105 0 0 1 255 165 L 255 20"
        stroke="currentColor" strokeWidth="44" strokeLinecap="butt" fill="none" />
      <circle cx="45"  cy="65"  r="5.5" fill="currentColor" opacity="0.35"/>
      <circle cx="45"  cy="125" r="5.5" fill="currentColor" opacity="0.35"/>
      <circle cx="62"  cy="218" r="5.5" fill="currentColor" opacity="0.35"/>
      <circle cx="100" cy="258" r="5.5" fill="currentColor" opacity="0.35"/>
      <circle cx="200" cy="258" r="5.5" fill="currentColor" opacity="0.35"/>
      <circle cx="238" cy="218" r="5.5" fill="currentColor" opacity="0.35"/>
      <circle cx="255" cy="125" r="5.5" fill="currentColor" opacity="0.35"/>
      <circle cx="255" cy="65"  r="5.5" fill="currentColor" opacity="0.35"/>
    </svg>
  )
}

/* ── Canvas Particle Network ── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const NUM = 55
    type P = { x: number; y: number; vx: number; vy: number; r: number }
    let W = canvas.width, H = canvas.height
    const pts: P[] = Array.from({ length: NUM }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r:  Math.random() * 1.5 + 0.8,
    }))

    let raf: number
    function frame() {
      W = canvas!.width; H = canvas!.height
      ctx!.clearRect(0, 0, W, H)

      for (const p of pts) {
        p.x = (p.x + p.vx + W) % W
        p.y = (p.y + p.vy + H) % H
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fillStyle = "rgba(196,144,58,0.45)"
        ctx!.fill()
      }

      for (let i = 0; i < NUM; i++) {
        for (let j = i + 1; j < NUM; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            ctx!.beginPath()
            ctx!.moveTo(pts[i].x, pts[i].y)
            ctx!.lineTo(pts[j].x, pts[j].y)
            ctx!.strokeStyle = `rgba(196,144,58,${0.12 * (1 - d / 130)})`
            ctx!.lineWidth = 0.6
            ctx!.stroke()
          }
        }
      }
      raf = requestAnimationFrame(frame)
    }
    frame()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}

/* ── Aurora Background ── */
function AuroraBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ x: [0, 120, -60, 0], y: [0, -90, 60, 0], scale: [1, 1.25, 0.88, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-5%] left-[10%] w-[700px] h-[450px] bg-amber-500/12 blur-[130px] rounded-full"
      />
      <motion.div
        animate={{ x: [0, -90, 70, 0], y: [0, 70, -50, 0], scale: [1, 0.8, 1.3, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-[10%] right-[5%] w-[550px] h-[450px] bg-orange-700/9 blur-[110px] rounded-full"
      />
      <motion.div
        animate={{ x: [0, 70, -100, 0], y: [0, -60, 90, 0], scale: [1, 1.3, 0.9, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 9 }}
        className="absolute top-[40%] left-[55%] w-[450px] h-[400px] bg-emerald-900/7 blur-[120px] rounded-full"
      />
    </div>
  )
}

/* ── 3D Horseshoe (mouse-reactive + auto-rock) ── */
function Horseshoe3D() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 25, damping: 18 })
  const springY = useSpring(mouseY, { stiffness: 25, damping: 18 })

  const rotY = useTransform(springX, [-300, 300], [-28, 28])
  const rotX = useTransform(springY, [-300, 300], [18, -18])

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [mouseX, mouseY])

  return (
    /* Perspective container — smaller = more dramatic 3D */
    <div className="absolute right-[2%] md:right-[5%] top-1/2 -translate-y-1/2 pointer-events-none"
      style={{ perspective: "420px" }}>
      <motion.div
        style={{ rotateY: rotY, rotateX: rotX, transformStyle: "preserve-3d" }}
        animate={{ y: [0, -22, -8, -28, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="w-[260px] h-[260px] md:w-[420px] md:h-[420px] lg:w-[540px] lg:h-[540px]"
      >
        {/* Deep shadow layer (back) */}
        <div style={{ transform: "translateZ(-30px) scale(1.08)" }}
          className="absolute inset-0 text-amber-900/30">
          <HorseshoeSVG className="w-full h-full blur-sm" />
        </div>
        {/* Mid layer */}
        <div style={{ transform: "translateZ(-12px) scale(1.03)" }}
          className="absolute inset-0 text-amber-600/20">
          <HorseshoeSVG className="w-full h-full" />
        </div>
        {/* Front face */}
        <div style={{ transform: "translateZ(0px)" }}
          className="absolute inset-0 text-amber-400/22 drop-shadow-[0_0_50px_rgba(196,144,58,0.5)]">
          <HorseshoeSVG className="w-full h-full" />
        </div>
        {/* Highlight layer (front-most) */}
        <div style={{ transform: "translateZ(8px) scale(0.96)" }}
          className="absolute inset-0 text-amber-200/8">
          <HorseshoeSVG className="w-full h-full" />
        </div>
      </motion.div>
    </div>
  )
}

/* ── Floating Particle dots ── */
const PARTICLES = [
  { delay: 0,   x: "11%", y: "28%", size: 4 },
  { delay: 0.8, x: "84%", y: "20%", size: 3 },
  { delay: 1.5, x: "68%", y: "74%", size: 5 },
  { delay: 0.4, x: "24%", y: "68%", size: 3 },
  { delay: 2.1, x: "53%", y: "87%", size: 4 },
  { delay: 1.1, x: "90%", y: "58%", size: 3 },
  { delay: 0.6, x: "36%", y: "13%", size: 2 },
  { delay: 1.8, x: "7%",  y: "53%", size: 3 },
]

function FloatDot({ x, y, size, delay }: typeof PARTICLES[0]) {
  return (
    <motion.div className="absolute rounded-full bg-amber-400/30 pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -28, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.5, 1] }}
      transition={{ duration: 4 + delay * 0.8, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  )
}

/* ── Orbit Rings ── */
function OrbitRing({ size, duration, opacity }: { size: number; duration: number; opacity: number }) {
  return (
    <motion.div animate={{ rotate: 360 }} transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="absolute right-[-8%] top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
      style={{ width: size, height: size }}>
      <svg viewBox="0 0 400 400" fill="none" className="w-full h-full"
        style={{ color: `rgba(196,144,58,${opacity})` }}>
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="8 16"/>
        <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 20"/>
        <circle cx="20"  cy="200" r="4" fill="currentColor" opacity="0.6"/>
        <circle cx="380" cy="200" r="4" fill="currentColor" opacity="0.6"/>
        <circle cx="200" cy="20"  r="3" fill="currentColor" opacity="0.4"/>
        <circle cx="200" cy="380" r="3" fill="currentColor" opacity="0.4"/>
      </svg>
    </motion.div>
  )
}

/* ── Typewriter text ── */
const SUBTITLE = "El Arte del Casco Natural — La infraestructura completa de conocimiento para la salud integral de tu caballo."
function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) { clearInterval(id); setDone(true) }
    }, 22)
    return () => clearInterval(id)
  }, [text])

  return (
    <span>
      {displayed}
      {!done && <span className="animate-pulse text-amber-400">|</span>}
    </span>
  )
}

/* ── Main Hero ── */
export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section id="hero"
      className="min-h-screen flex flex-col justify-center px-6 lg:px-16 py-20 relative overflow-hidden bg-background">

      {/* Canvas particle network */}
      <ParticleCanvas />

      {/* Aurora blobs */}
      <AuroraBg />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(oklch(1 0 0 / 3%) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

      {/* Orbit rings */}
      <OrbitRing size={620} duration={80} opacity={0.055} />
      <OrbitRing size={370} duration={50} opacity={0.035} />

      {/* True 3D horseshoe */}
      <Horseshoe3D />

      {/* Floating dots */}
      {mounted && PARTICLES.map((p, i) => <FloatDot key={i} {...p} />)}

      {/* ── CONTENT ── */}
      <div className="max-w-5xl relative z-10 mx-auto text-center">

        {/* Label */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 rounded-full border border-amber-500/25 bg-amber-500/6 px-5 py-2 mb-10 backdrop-blur-md">
          <span className="flex h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[11px] tracking-[0.4em] uppercase font-semibold text-amber-400/80">
            Curso Completo · 11 Módulos
          </span>
        </motion.div>

        {/* Title — staggered reveal */}
        <div className="overflow-hidden mb-1">
          <motion.div initial={{ y: 130 }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
            <h1 className="font-display font-bold tracking-tight leading-[0.9] text-foreground"
              style={{ fontSize: "clamp(4.5rem, 14vw, 10rem)" }}>
              Pie
            </h1>
          </motion.div>
        </div>
        <div className="overflow-hidden mb-7">
          <motion.div initial={{ y: 130 }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}>
            <h1 className="font-display font-bold tracking-tight leading-[0.9] italic text-amber-400"
              style={{ fontSize: "clamp(4.5rem, 14vw, 10rem)" }}>
              Descalzo.
            </h1>
          </motion.div>
        </div>

        {/* Shimmer divider */}
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.65 }}
          className="relative w-28 h-px mx-auto mb-8 origin-center overflow-hidden">
          <div className="absolute inset-0 bg-amber-500/35" />
          <motion.div animate={{ x: ["-100%", "250%"] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1.8 }}
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />
        </motion.div>

        {/* Typewriter subtitle */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}
          className="text-base md:text-lg text-muted-foreground font-light mb-12 max-w-xl mx-auto leading-relaxed min-h-[4rem]">
          {mounted ? <TypewriterText text={SUBTITLE} /> : SUBTITLE}
        </motion.p>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.95 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="#modulo-1"
            className={cn(buttonVariants({ size: "lg" }),
              "group rounded-full px-10 py-6 text-base font-semibold tracking-wide bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(196,144,58,0.45)] hover:shadow-[0_0_80px_rgba(196,144,58,0.65)]"
            )}>
            <span>Comenzar recorrido</span>
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="ml-2">→</motion.span>
          </Link>
          <motion.button
            className="rounded-full px-8 py-3 text-sm font-medium text-muted-foreground border border-white/10 hover:border-amber-500/30 hover:text-amber-400/80 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            Ver módulos
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.4 }}
          className="mt-14 flex items-center justify-center gap-10 md:gap-16">
          {[
            { val: "11", label: "Módulos" },
            { val: "∞", label: "Valor" },
            { val: "1", label: "Caballo" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-3xl font-bold text-amber-400/70">{s.val}</p>
              <p className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground/40 mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/35 pointer-events-none">
        <span className="text-[9px] tracking-[0.5em] uppercase">Scroll</span>
        <div className="relative w-px h-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/30 to-transparent" />
          <motion.div animate={{ y: ["-100%", "200%"] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeIn" }}
            className="absolute top-0 left-0 w-full h-[40%] bg-amber-400/80" />
        </div>
      </motion.div>
    </section>
  )
}
