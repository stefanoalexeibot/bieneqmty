"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Info, CheckCircle2, Menu, X, Layers } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useCourse } from "@/hooks/use-course"
import { ProgressSidebar } from "@/components/layout/progress-sidebar"

// Import custom interactive modules
import { InteractiveHotspots } from "./modules/interactive-hotspots"
import { FlipCardGallery } from "./modules/flip-card-gallery"
import { BentoGridLMS } from "./modules/bento-grid-lms"
import { StepSlider } from "./modules/step-slider"
import { HoofPumpView } from "./modules/hoof-pump-view"
import { ComparisonTable } from "./modules/comparison-table"
import { AlertCards } from "./modules/alert-cards"
import { TimelineView } from "./modules/timeline-view"
import { CaseStudies } from "./modules/case-studies"
import { Completion } from "./modules/completion"
import { HeroSection } from "@/components/sections/hero"
import { Presentacion } from "@/components/sections/presentacion"
import { NutritionFormula } from "./modules/nutrition-formula"
import { SplitComparison } from "./modules/split-comparison"

// Unsplash fallback backgrounds per intro-module id
const INTRO_BG_FALLBACKS: Record<string, string> = {
  "etologia": "https://images.unsplash.com/photo-1598974357851-98166a9f9b44?auto=format&fit=crop&q=80&w=1800",
  "habitat-presa": "https://images.unsplash.com/photo-1500595046743-cec271a393dc?auto=format&fit=crop&q=80&w=1800",
  "vida-manada": "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=1800",
}

export function CoursePlayer() {
  const { currentModuleIndex, setCurrentModuleIndex, modules, nextModule, prevModule } = useCourse()
  const [direction, setDirection] = useState(0) 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isHudVisible, setIsHudVisible] = useState(true)

  const currentModule = modules[currentModuleIndex]

  const handleNext = () => {
    setDirection(1)
    nextModule()
  }

  const handlePrev = () => {
    setDirection(-1)
    prevModule()
  }

  // Handle keyboard navigation — Space + ArrowRight advance, ArrowLeft goes back
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault()
        handleNext()
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault()
        handlePrev()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentModuleIndex])

  // Projector mode: HUD is always visible — instructor controls from keyboard
  // (auto-hide removed to prevent controls disappearing when instructor steps away)


  const renderModuleContent = () => {
    switch (currentModule.tipo_vista) {
      case "hero":
        return <HeroSection />
      case "presentacion":
        return <Presentacion data={currentModule} />
      case "hero-split":
        return (
          <div className="flex flex-col lg:flex-row gap-12 items-center min-h-screen p-12 lg:p-24 relative overflow-hidden">
             {/* Background glow for depth */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.04)_0%,transparent_70%)]" />
             
             <div className="flex-1 space-y-8 relative z-10">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-amber-500 font-mono text-sm font-bold tracking-[0.4em] uppercase"
                >
                  {currentModule.parte}
                </motion.span>
                <h1 className="text-6xl md:text-9xl font-display font-bold text-white leading-[0.85] tracking-tighter">
                  {currentModule.titulo}
                </h1>
                <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-xl">
                  {currentModule.texto_instructor}
                </p>
                {currentModule.cita_destacada && (
                  <blockquote className="border-l-2 border-amber-500/50 pl-8 py-4 italic text-xl text-amber-400 font-display">
                    "{currentModule.cita_destacada}"
                  </blockquote>
                )}
             </div>
             {currentModule.media?.video_url && (
               <div className="flex-1 w-full aspect-square md:aspect-video rounded-[40px] overflow-hidden bg-white/5 border border-white/10 shadow-3xl group relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent mix-blend-overlay" />
                  <div className="w-full h-full flex items-center justify-center">
                     <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                        <Play className="w-8 h-8 text-white fill-white" />
                     </div>
                  </div>
               </div>
             )}
          </div>
        )
      case "intro-module":
        return (
          <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
             {/* Background image — local or Unsplash fallback */}
             <motion.div
               initial={{ scale: 1.1, opacity: 0 }}
               animate={{ scale: 1, opacity: 0.35 }}
               transition={{ duration: 2.5 }}
               className="absolute inset-0 z-0"
             >
               <img
                 src={currentModule.media?.imagen_fondo || INTRO_BG_FALLBACKS[currentModule.id] || "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&q=80&w=1800"}
                 className="w-full h-full object-cover grayscale"
                 alt=""
                 onError={(e) => {
                   (e.currentTarget as HTMLImageElement).src = INTRO_BG_FALLBACKS[currentModule.id] || "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&q=80&w=1800"
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
             </motion.div>
             
             <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10 p-6">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="text-xs uppercase tracking-[0.8em] text-amber-500 font-black block"
                >
                    {currentModule.parte}
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="text-7xl md:text-[12rem] font-display font-bold text-white tracking-tighter leading-[0.7] mb-8"
                >
                    {currentModule.titulo}
                </motion.h2>
                <motion.div 
                  initial={{ width: 0 }} animate={{ width: 120 }}
                  className="h-px bg-amber-500/50 mx-auto" 
                />
                <motion.p 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                  className="text-2xl md:text-4xl text-white/70 font-display italic leading-relaxed"
                >
                    {currentModule.descripcion}
                </motion.p>
             </div>
          </div>
        )
      case "interactive-image-hotspots":
        return <InteractiveHotspots data={currentModule} />
      case "step-slider":
        // modulo-5 (La Bomba del Casco) gets a dedicated premium view
        if (currentModule.id === "modulo-5") return <HoofPumpView data={currentModule} />
        return <StepSlider data={currentModule} />
      case "comparison-table":
        return <ComparisonTable data={currentModule} />
      case "bento-grid":
        return <BentoGridLMS data={currentModule} />
      case "alert-cards":
        return <AlertCards data={currentModule} />
      case "timeline-view":
        return <TimelineView data={currentModule} />
      case "nutrition-formula":
        return <NutritionFormula data={currentModule} />
      case "split-comparison":
        return <SplitComparison data={currentModule} />
      case "completion":
        return <Completion data={currentModule} />
      default:
        return (
          <div className="min-h-screen flex items-center justify-center p-12 relative overflow-hidden">
            {currentModule.media?.imagen_fondo && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                className="absolute inset-0 z-0"
              >
                <img src={currentModule.media.imagen_fondo} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60" />
              </motion.div>
            )}
            <div className="text-center space-y-6 relative z-10">
              <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-black">Módulo en Desarrollo</span>
              <h2 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter">{currentModule.titulo}</h2>
              <p className="text-white/40 max-w-md mx-auto italic font-light">Estamos puliendo esta escena para ofrecerte una experiencia visual premium.</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="relative w-full h-screen bg-black text-foreground flex flex-col overflow-hidden">
      
      {/* Sidebar Drawer Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="absolute inset-0 z-[60] bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
              className="absolute left-0 top-0 bottom-0 z-[70] w-[320px] shadow-2xl"
            >
              <div className="relative h-full">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsSidebarOpen(false)}
                  className="absolute right-4 top-4 z-[80] rounded-full hover:bg-white/10"
                >
                  <X className="w-5 h-5 text-white" />
                </Button>
                <ProgressSidebar />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating HUD: Header */}
      <AnimatePresence>
        {isHudVisible && !isSidebarOpen && (
          <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 pointer-events-none"
          >
            <div className="flex items-center gap-6 pointer-events-auto">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsSidebarOpen(true)}
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 group"
              >
                <Menu className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </Button>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-black leading-none mb-1">
                  {currentModule.parte || "Módulo"}
                </span>
                <span className="text-sm font-semibold text-white/80 tracking-tight">
                  {currentModule.titulo}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-10 pointer-events-auto">
              <div className="hidden md:flex flex-col items-end">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[9px] text-white/40 uppercase tracking-[0.3em] font-bold">Progreso del curso</span>
                  <span className="text-xs font-mono text-amber-500 font-bold">
                    {Math.round(((currentModuleIndex + 1) / modules.length) * 100)}%
                  </span>
                </div>
                <div className="h-1 w-48 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentModuleIndex + 1) / modules.length) * 100}%` }}
                    className="h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" 
                  />
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10"
              >
                <Layers className="w-4 h-4 text-white/60" />
              </Button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Main Cinematic Content Area */}
      <main className="flex-1 relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentModule.id}
            custom={direction}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            {renderModuleContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating HUD: Navigation Footer */}
      <AnimatePresence>
        {isHudVisible && !isSidebarOpen && (
          <motion.footer 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-10 pointer-events-none flex justify-center"
          >
            <div className="flex items-center gap-2 p-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full pointer-events-auto">
              <Button
                variant="ghost"
                onClick={handlePrev}
                disabled={currentModuleIndex === 0}
                className="h-14 w-14 rounded-full border-none hover:bg-white/10 disabled:opacity-20"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </Button>

              <div className="h-4 w-px bg-white/10 mx-2" />

              <div className="px-6 flex flex-col items-center">
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold mb-1">Escena</span>
                <span className="text-sm font-mono text-white/80 font-bold">
                  {String(currentModuleIndex + 1).padStart(2, '0')} / {String(modules.length).padStart(2, '0')}
                </span>
              </div>

              <div className="h-4 w-px bg-white/10 mx-2" />

              <Button
                variant="ghost"
                onClick={handleNext}
                disabled={currentModuleIndex === modules.length - 1}
                className="h-14 w-28 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold flex items-center justify-between px-6 shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all group"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.footer>
        )}
      </AnimatePresence>

      {/* Background ambient glow (subtle) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-600/3 blur-[120px] rounded-full" />
      </div>
    </div>
  )
}
