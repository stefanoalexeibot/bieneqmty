"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 lg:px-16 py-20 relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl relative z-10"
      >
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
          Pie Descalzo:<br/>
          <span className="text-primary">El Arte de Cuidar el Casco Natural</span>
        </h1>
        <p className="text-xl lg:text-2xl text-muted-foreground font-medium mb-10 max-w-2xl">
          De la Teoría a la Práctica — Todo lo que Necesitas Saber
        </p>
        <Button size="lg" className="rounded-full px-8 text-lg shadow-lg hover:shadow-xl transition-all" asChild>
          <a href="#modulo-1">Comenzar el recorrido</a>
        </Button>
      </motion.div>
    </section>
  )
}
