"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Info, CheckCircle2 } from "lucide-react"
import cursoData from "@/data/curso_lms.json"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Import custom interactive modules (to be created)
import { InteractiveHotspots } from "./modules/interactive-hotspots"
import { FlipCardGallery } from "./modules/flip-card-gallery"
import { BentoGridLMS } from "./modules/bento-grid-lms"
import { StepSlider } from "./modules/step-slider"
import { HeroSection } from "@/components/sections/hero"
import { Presentacion } from "@/components/sections/presentacion"
import { useCourse } from "@/hooks/use-course"

export function CoursePlayer() {
  const { currentModuleIndex, setCurrentModuleIndex, modules, nextModule, prevModule } = useCourse()
  const [direction, setDirection] = useState(0) // 1 for next, -1 for prev

  const currentModule = modules[currentModuleIndex]

  const handleNext = () => {
    setDirection(1)
    nextModule()
  }

  const handlePrev = () => {
    setDirection(-1)
    prevModule()
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "ArrowLeft") handlePrev()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentModuleIndex])

  const renderModuleContent = () => {
    switch (currentModule.tipo_vista) {
      case "hero":
        return <HeroSection />
      case "presentacion":
        return <Presentacion />
      case "hero-split":
        return (
          <div className="flex flex-col lg:flex-row gap-12 items-center">
             <div className="flex-1 space-y-8">
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-none tracking-tight">
                  {currentModule.titulo}
                </h1>
                <p className="text-xl text-white/50 font-light leading-relaxed max-w-xl">
                  {currentModule.texto_instructor}
                </p>
                {currentModule.cita_destacada && (
                  <blockquote className="border-l-4 border-amber-500 pl-6 py-2 italic text-lg text-amber-500/80">
                    "{currentModule.cita_destacada}"
                  </blockquote>
                )}
             </div>
             {currentModule.media?.video_url && (
               <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-3xl">
                  {/* Placeholder for video */}
                  <div className="w-full h-full flex items-center justify-center bg-amber-500/5">
                     <span className="text-amber-500/40 font-mono text-xs uppercase tracking-widest">Video: {currentModule.media.video_url}</span>
                  </div>
               </div>
             )}
          </div>
        )
      case "intro-module":
        return (
          <div className="max-w-4xl mx-auto text-center space-y-12 py-20">
             <span className="text-xs uppercase tracking-[0.5em] text-amber-500 font-black">
                {currentModule.parte}
             </span>
             <h2 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-none">
                {currentModule.titulo}
             </h2>
             <div className="h-px w-24 bg-amber-500/30 mx-auto" />
             <p className="text-2xl md:text-3xl text-white/60 font-light leading-relaxed italic">
                {currentModule.descripcion}
             </p>
          </div>
        )
      case "interactive-image-hotspots":
        return <InteractiveHotspots data={currentModule} />
      case "flip-cards-gallery":
        return <FlipCardGallery data={currentModule} />
      case "bento-grid":
        return <BentoGridLMS data={currentModule} />
      case "step-slider":
        return <StepSlider data={currentModule} />
      default:
        return (
          <div className="py-32 text-center">
            <h2 className="text-3xl font-display font-bold text-white">{currentModule.titulo}</h2>
            <p className="text-white/40 mt-4">Este módulo está en construcción o usa una vista no implementada.</p>
          </div>
        )
    }
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      {/* Header / Progress Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
              <Play className="w-4 h-4 text-amber-500 fill-amber-500" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400/60 font-bold leading-none mb-1">
                {currentModule.parte || "Módulo " + currentModule.numero}
              </p>
              <h2 className="text-sm font-semibold text-white/90 leading-none">
                {currentModule.titulo}
              </h2>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
             <div className="flex flex-col items-end">
               <span className="text-[10px] text-white/40 uppercase tracking-widest leading-none mb-1">Progreso</span>
               <div className="flex items-center gap-2">
                 <div className="h-1.5 w-32 bg-white/5 rounded-full overflow-hidden">
                   <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentModuleIndex + 1) / modules.length) * 100}%` }}
                    className="h-full bg-amber-500" 
                   />
                 </div>
                 <span className="text-xs font-mono text-amber-500 font-bold">
                   {Math.round(((currentModuleIndex + 1) / modules.length) * 100)}%
                 </span>
               </div>
             </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentModule.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full flex flex-col pt-12 pb-24"
          >
            <div className="max-w-7xl mx-auto w-full px-6">
              {/* Module Title Section */}
              <div className="mb-12">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-amber-500 font-mono text-sm font-bold tracking-widest"
                >
                  {String(currentModule.numero).padStart(2, '0')}
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter mt-2 mb-6"
                >
                  {currentModule.titulo}
                </motion.h1>
                {currentModule.descripcion && (
                   <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-white/50 max-w-2xl font-light leading-relaxed"
                   >
                     {currentModule.descripcion}
                   </motion.p>
                )}
              </div>

              {/* Dynamic Component Rendering */}
              <div className="relative">
                {renderModuleContent()}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 p-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
          <Button
            variant="outline"
            size="lg"
            onClick={handlePrev}
            disabled={currentModuleIndex === 0}
            className="rounded-full bg-background/50 backdrop-blur-xl border-white/10 hover:bg-white/5 group h-14 px-8"
          >
            <ChevronLeft className="w-5 h-5 mr-4 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <span className="block text-[10px] uppercase tracking-widest text-white/30 font-bold leading-none">Anterior</span>
              <span className="block text-sm font-medium">Volver</span>
            </div>
          </Button>

          <Button
            variant="default"
            size="lg"
            onClick={handleNext}
            disabled={currentModuleIndex === modules.length - 1}
            className="rounded-full bg-amber-500 hover:bg-amber-400 text-black h-14 px-10 shadow-[0_0_20px_rgba(245,158,11,0.3)] group"
          >
            <div className="text-right mr-4">
              <span className="block text-[10px] uppercase tracking-widest text-black/50 font-bold leading-none">Siguiente</span>
              <span className="block text-sm font-bold">Continuar</span>
            </div>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </footer>
    </div>
  )
}
