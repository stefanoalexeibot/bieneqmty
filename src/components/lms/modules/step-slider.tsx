"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, CheckCircle2, Ruler, Info, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

interface Step {
  numero: number
  nombre: string
  descripcion?: string
  imagen?: string
}

interface StepSliderProps {
  data: any
}

export function StepSlider({ data }: StepSliderProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = data.pasos || []
  
  const bgImage = data.media?.imagen_fondo

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(prev => prev + 1)
  }

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1)
  }

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center p-8 md:p-12 lg:p-24">
      
      {/* Immersive Background Cinematic Layer */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.2)_0%,transparent_70%)]" 
        />
        {bgImage && (
          <motion.img 
            key={currentStep}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 2 }}
            src={bgImage} 
            className="w-full h-full object-cover grayscale" 
            alt="" 
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-16 lg:gap-24">
        
        {/* Header Section */}
        <div className="max-w-4xl space-y-6">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-black uppercase tracking-[0.6em] text-[10px]"
           >
              <ShieldCheck className="w-4 h-4" />
              <span>Protocolo de Recorte</span>
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="text-6xl md:text-[8.5rem] font-display font-bold text-white tracking-tighter leading-none"
           >
              {data.titulo || "Técnica Profesional"}
           </motion.h2>

           <div className="h-px w-24 bg-amber-500/30" />
        </div>

        {/* Main Stage: Step Content */}
        <div className="relative w-full aspect-[21/9] min-h-[600px] rounded-[4rem] overflow-hidden border border-white/5 bg-zinc-900/40 backdrop-blur-3xl shadow-3xl group">
           <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 50, filter: "blur(40px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -50, filter: "blur(40px)" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col md:flex-row h-full"
              >
                 {/* Visual Area */}
                 <div className="flex-1 relative overflow-hidden h-full">
                    {steps[currentStep].imagen ? (
                      <motion.img 
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2 }}
                        src={steps[currentStep].imagen} 
                        alt={steps[currentStep].nombre} 
                        className="w-full h-full object-cover saturate-[1.2] brightness-75 group-hover:scale-105 transition-transform duration-[4s]" 
                        onError={(e) => {
                           (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1598974357851-98166a9f9b44?auto=format&fit=crop&q=80&w=1200";
                           (e.target as HTMLImageElement).classList.add("grayscale");
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-amber-500/5 flex items-center justify-center">
                         <Ruler className="w-24 h-24 text-amber-500/10" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-900 hidden md:block" />
                 </div>

                 {/* Information and Navigation Area */}
                 <div className="flex-1 p-12 md:p-24 flex flex-col justify-center bg-zinc-900/60 relative">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/[0.03] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-1000" />
                    
                    <div className="flex items-center gap-4 mb-10">
                       <span className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-black leading-none">Paso 0{steps[currentStep].numero || currentStep + 1}</span>
                       <div className="h-px flex-1 bg-amber-500/20" />
                    </div>
                    
                    <h3 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-12">
                      {steps[currentStep].nombre}
                    </h3>
                    
                    <p className="text-2xl md:text-3xl text-white/50 font-light leading-relaxed font-display italic max-w-2xl mb-16">
                      "{steps[currentStep].descripcion || "Visualización técnica fundamental para el proceso de salud."}"
                    </p>
                    
                    {/* Controls */}
                    <div className="flex items-center gap-12 mt-auto">
                       <div className="flex items-center gap-4">
                          <button 
                             onClick={prevStep} 
                             disabled={currentStep === 0}
                             className="w-16 h-16 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-white/10 disabled:opacity-20 transition-all hover:scale-110 group/btn"
                          >
                             <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-1 transition-transform" />
                          </button>
                          <button 
                             onClick={nextStep} 
                             disabled={currentStep === steps.length - 1}
                             className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center hover:bg-amber-500 transition-all hover:scale-110 shadow-2xl disabled:opacity-20 group/btn"
                          >
                             <ChevronRight className="w-8 h-8 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                       </div>
                       
                       <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-widest text-white/30 font-black leading-none mb-1">Progreso</span>
                          <span className="text-2xl font-mono text-white/80 font-bold">0{currentStep + 1} <span className="text-white/20">/</span> 0{steps.length}</span>
                       </div>
                    </div>
                 </div>
              </motion.div>
           </AnimatePresence>
        </div>

        {/* Global Progress Bar */}
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
           <motion.div 
             className="h-full bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.6)]"
             initial={{ width: 0 }}
             animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
             transition={{ duration: 1 }}
           />
        </div>

      </div>
    </div>
  )
}
