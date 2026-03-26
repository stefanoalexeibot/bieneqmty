"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"
import { Sparkles, ArrowRight, Play } from "lucide-react"

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

/* ── 3D Horseshoe (mouse-reactive + auto-rock) ── */
function Horseshoe3D() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 25, damping: 18 })
  const springY = useSpring(mouseY, { stiffness: 25, damping: 18 })

  const rotY = useTransform(springX, [-300, 300], [-25, 25])
  const rotX = useTransform(springY, [-300, 300], [15, -15])

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [mouseX, mouseY])

  return (
    <div className="absolute right-[5%] top-1/2 -translate-y-1/2 pointer-events-none z-10 hidden lg:block"
      style={{ perspective: "800px" }}>
      <motion.div
        style={{ rotateY: rotY, rotateX: rotX, transformStyle: "preserve-3d" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="w-[500px] h-[500px]"
      >
        <div style={{ transform: "translateZ(0px)" }}
          className="absolute inset-0 text-amber-500/10 backdrop-blur-[2px] drop-shadow-[0_0_100px_rgba(245,158,11,0.2)]">
          <HorseshoeSVG className="w-full h-full" />
        </div>
      </motion.div>
    </div>
  )
}

const SUBTITLE = "La infraestructura completa de conocimiento para la salud integral y el bienestar de tu caballo."

/* ── Main Hero ── */
export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section id="hero"
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center p-12 lg:p-24">

      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-black/40" />
          {/* Subtle slow zoom background element would go here */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.2] mix-blend-overlay" />
      </div>

      <Horseshoe3D />

      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-start text-left space-y-12">
        
        {/* Experience Label */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="flex items-center gap-6"
        >
          <div className="h-px w-16 bg-amber-500" />
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-xl">
            <Sparkles className="w-3 h-3 text-amber-500 animate-pulse" />
            <span className="text-[10px] tracking-[0.5em] uppercase font-black text-white/60">
              Inmersión Total · Barefoot Pro
            </span>
          </div>
        </motion.div>

        {/* Cinematic Title */}
        <div className="space-y-4">
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-medium tracking-tighter leading-[0.85] text-white"
              style={{ fontSize: "clamp(5rem, 15vw, 12rem)" }}
            >
              PIE
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-medium tracking-tighter leading-[0.85] text-amber-500 italic"
              style={{ fontSize: "clamp(5rem, 15vw, 12rem)" }}
            >
              DESCALZO.
            </motion.h1>
          </div>
        </div>

        {/* Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl space-y-8"
        >
          <p className="text-2xl md:text-3xl text-white/40 font-light leading-relaxed font-display italic">
            "{SUBTITLE}"
          </p>

          {/* Premium CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <Link 
              href="#modulo-1"
              className="group relative flex items-center justify-center gap-4 bg-amber-500 text-black px-12 py-6 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs transition-all hover:scale-105 hover:bg-white active:scale-95 shadow-[0_0_50px_rgba(245,158,11,0.3)]"
            >
              <span>Empezar Recorrido</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="group flex items-center justify-center gap-4 bg-white/5 border border-white/10 px-12 py-6 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs text-white/60 hover:text-white hover:bg-white/10 transition-all">
               <Play className="w-4 h-4 fill-current" />
               <span>Ver Trailer</span>
            </button>
          </div>
        </motion.div>

        {/* Experience Stats */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-20 flex gap-20"
        >
          {[
            { val: "11", label: "Módulos" },
            { val: "Cinematic", label: "Experiencia" },
            { val: "∞", label: "Conexión" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="font-display text-4xl font-bold text-white/20 tracking-tighter leading-none">{s.val}</span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-amber-500 font-black">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Scroll HUD */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 right-12 flex items-center gap-6 pointer-events-none"
      >
        <div className="flex flex-col items-end">
           <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-black">Scroll Down</span>
        </div>
        <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 via-amber-500/20 to-transparent" />
      </motion.div>
    </section>
  )
}
