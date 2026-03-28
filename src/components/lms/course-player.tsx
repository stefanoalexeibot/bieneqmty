"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
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
import { HighlightCards } from "./modules/highlight-cards"
import { AmbientParticles } from "@/components/ui/ambient-particles"
import { Magnetic } from "@/components/ui/magnetic"

import { HeroSplit } from "./modules/hero-split"
import { FullScreenView } from "./modules/full-screen-view"

// ... (existing code)

const TextReveal = ({ text }: { text: string }) => {
  const words = text.split(" ")
  return (
    <motion.div className="flex flex-wrap gap-x-[0.2em]">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
const INTRO_BG_FALLBACKS: Record<string, string> = {
  "hero": "/assets/curso/anatomy/anatomy-bg.png",
  "etologia": "/assets/curso/etologia-bg.png",
  "habitat": "/assets/curso/wild-habitat.png",
  "manada": "/assets/curso/horse-herd-social.png",
  "mustang": "/assets/curso/mustang/mustang-bg.png",
  "retorno": "/assets/curso/recorte-natural.png",
  "paddock": "/assets/curso/paddockparadise.png",
  "tecnica": "/assets/curso/tools/tools-bg.png",
  "laminitis": "/assets/curso/laminitis-bg.png"
}

export function CoursePlayer() {
  const { currentModuleIndex, setCurrentModuleIndex, modules, nextModule, prevModule } = useCourse()
  const [direction, setDirection] = useState(0) 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isHudVisible, setIsHudVisible] = useState(true)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 20, stiffness: 100 }
  const bgX = useSpring(mouseX, springConfig)
  const bgY = useSpring(mouseY, springConfig)

  const currentModule = modules[currentModuleIndex]

  const handleNext = () => {
    setDirection(1)
    nextModule()
  }

  const handlePrev = () => {
    setDirection(-1)
    prevModule()
  }

  // Handle keyboard navigation — Space + ArrowRight advance, ArrowLeft goes back, C toggles Clean Mode
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
      if (e.key === "Escape") {
        e.preventDefault()
        setIsSidebarOpen(false)
      }
      if (e.key === "c" || e.key === "C") {
        setIsHudVisible(prev => !prev)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentModuleIndex, isSidebarOpen])

  // Handle mouse move for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX - window.innerWidth / 2) / 50
      const y = (clientY - window.innerHeight / 2) / 50
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const renderModuleContent = () => {
    switch (currentModule.tipo_vista) {
      case "hero":
        return <HeroSection />
      case "presentacion":
        return <Presentacion data={currentModule} />
      case "hero-split":
        return <HeroSplit data={currentModule} />
      case "intro-module":
        return (
          <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
             {/* Background image — local or Unsplash fallback */}
             <motion.div
               initial={{ scale: 1.1, opacity: 0 }}
               animate={{ scale: 1, opacity: 0.35 }}
               transition={{ duration: 2.5 }}
               style={{ x: bgX, y: bgY }}
               className="absolute inset-[-5%] z-0"
             >
               <img
                 src={currentModule.media?.imagen_fondo || INTRO_BG_FALLBACKS[currentModule.id] || "/assets/curso/backgrounds/technical-grid.png"}
                 className="w-full h-full object-cover grayscale opacity-20"
                 alt=""
                 onError={(e) => {
                   (e.currentTarget as HTMLImageElement).src = INTRO_BG_FALLBACKS[currentModule.id] || "/assets/curso/backgrounds/technical-grid.png"
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
                   initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1.2 }}
                   className="text-6xl md:text-8xl lg:text-[7rem] font-display font-black text-white leading-[0.9] tracking-tighter text-balance px-4"
                 >
                   {currentModule.titulo}
                 </motion.h2>
                <motion.div 
                  initial={{ width: 0 }} animate={{ width: 120 }}
                  className="h-px bg-amber-500/50 mx-auto" 
                />
                <motion.p 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                  className="text-2xl md:text-3xl text-white/70 font-display italic leading-relaxed"
                >
                    {currentModule.descripcion}
                </motion.p>
             </div>
          </div>
        )
      case "interactive-image-hotspots":
        return <InteractiveHotspots data={currentModule} />
      case "hoof-pump":
        return <HoofPumpView data={currentModule} />
      case "step-slider":
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
      case "highlight-cards":
        return <HighlightCards data={currentModule} />
      case "case-studies":
        return <CaseStudies data={currentModule} />
      case "flip-card-gallery":
        return <FlipCardGallery data={currentModule} />
      case "full-screen-image":
        return <FullScreenView data={currentModule} />
      case "completion":
        return <Completion data={currentModule} />
      default:
        return (
          <div className="min-h-screen flex items-center justify-center p-12 relative overflow-hidden">
            {currentModule.media?.imagen_fondo && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                style={{ x: bgX, y: bgY }}
                className="absolute inset-[-5%] z-0"
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
      <AmbientParticles 
        count={50} 
        color={currentModule.tipo_vista === "hero" ? "rgba(255,255,255,0.3)" : "rgba(245,158,11,0.3)"} 
      />
      
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
                <Magnetic>
                  <button 
                    onClick={() => setIsSidebarOpen(false)}
                    className="absolute right-8 top-8 z-[80] w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-amber-500 hover:text-black hover:scale-110 transition-all shadow-2xl backdrop-blur-3xl active:scale-95"
                  >
                    <X className="w-8 h-8" />
                  </button>
                </Magnetic>
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
              <Magnetic strength={0.3}>
                <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-6 rounded-3xl bg-black/40 backdrop-blur-3xl border border-white/10 text-white hover:bg-amber-500 hover:text-black transition-all group active:scale-90"
            >
              <Menu className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </button>
              </Magnetic>
              
              {/* Only show title if not in presentacion/hero to avoid repetition */}
              {currentModule.tipo_vista !== "presentacion" && currentModule.tipo_vista !== "hero" && (
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.4em] text-amber-500 font-black leading-none mb-1.5">
                    {currentModule.parte || "Módulo"}
                  </span>
                  <span className="text-base font-bold text-white tracking-tight">
                    <TextReveal text={currentModule.titulo} />
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-10 pointer-events-auto">
              <div className="hidden md:flex flex-col items-end">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs text-white/60 uppercase tracking-[0.3em] font-bold">Progreso del curso</span>
                  <span className="text-base font-mono text-amber-500 font-black">
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
              <Magnetic strength={0.2}>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10"
                >
                  <Layers className="w-4 h-4 text-white/60" />
                </Button>
              </Magnetic>
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
            initial={{ 
              opacity: 0, 
              x: direction > 0 ? 100 : -100,
              scale: 0.95, 
              filter: "blur(20px)" 
            }}
            animate={{ 
              opacity: 1, 
              x: 0,
              scale: 1, 
              filter: "blur(0px)" 
            }}
            exit={{ 
              opacity: 0, 
              x: direction > 0 ? -100 : 100,
              scale: 1.05, 
              filter: "blur(20px)" 
            }}
            transition={{ 
              duration: 1.1, 
              ease: [0.16, 1, 0.3, 1] 
            }}
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
              <Magnetic strength={0.5}>
                <button 
            onClick={handlePrev} 
            className="p-6 rounded-2xl bg-zinc-900/80 text-white/40 hover:text-white hover:bg-zinc-800 transition-all active:scale-90" 
            title="Anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
              </Magnetic>

              <div className="h-4 w-px bg-white/10 mx-2" />

              <div className="px-8 flex flex-col items-center">
                <span className="text-xs uppercase tracking-[0.3em] text-white/60 font-black mb-1.5">Escena</span>
                <span className="text-base font-mono text-white font-black">
                  {String(currentModuleIndex + 1).padStart(2, '0')} / {String(modules.length).padStart(2, '0')}
                </span>
              </div>

              <div className="h-4 w-px bg-white/10 mx-2" />

              <Magnetic strength={0.4}>
                <button 
            onClick={handleNext} 
            className="p-6 pr-8 rounded-2xl bg-amber-500 text-black hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 active:scale-90 flex items-center gap-4 group"
            title="Siguiente"
          >
            <span className="text-xs font-black uppercase tracking-widest">Siguiente</span>
            <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
          </button>
              </Magnetic>
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
