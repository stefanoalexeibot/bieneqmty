"use client"
import { motion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 lg:px-16 py-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-background to-background pointer-events-none" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl relative z-10 mx-auto text-center"
      >
        <div className="inline-flex items-center rounded-full border border-white/10 bg-card/5 px-4 py-1.5 text-sm font-medium text-foreground mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-3 animate-pulse"></span>
          Todo lo que necesitas saber
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-foreground mb-8 leading-[1.1]">
          Pie Descalzo.<br/>
          <span className="text-muted-foreground font-medium tracking-tight">El Arte del Casco Natural.</span>
        </h1>
        <p className="text-xl lg:text-2xl text-muted-foreground font-medium mb-12 max-w-2xl mx-auto">
          De la Teoría a la Práctica — La infraestructura completa de conocimiento para la salud integral de tu caballo.
        </p>
        <Link 
          href="#modulo-1" 
          className={cn(buttonVariants({ size: "lg" }), "rounded-full px-10 py-6 text-lg hover:scale-105 transition-transform bg-primary text-primary-foreground font-semibold")}
        >
          Empezar recorrido
        </Link>
      </motion.div>
    </section>
  )
}
