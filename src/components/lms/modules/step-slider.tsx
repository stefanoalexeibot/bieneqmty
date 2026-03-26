"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, CheckCircle2, Ruler } from "lucide-react"
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
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center p-12 lg:p-24">
      
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        {bgImage && (
          <motion.img 
            key={currentStep} /* Subtle re-fade on step change */
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.25, scale: 1 }}
            transition={{ duration: 1.5 }}
            src={bgImage} 
            className="w-full h-full object-cover grayscale" 
            alt="" 
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-16">
        
        {/* Cinematic Step Progress Header */}
        <div className="flex items-center justify-center gap-4 md:gap-8 px-4 overflow-x-auto pb-6 no-scrollbar">
          {steps.map((step: Step, i: number) => (
            <div key={i} className="flex flex-col items-center gap-4 shrink-0">
              <button 
                onClick={() => setCurrentStep(i)}
                className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 border-2",
                  i === currentStep 
                    ? "bg-amber-500 border-amber-500 text-black shadow-[0_0_30px_rgba(245,158,11,0.4)]" 
                    : i < currentStep 
                      ? "bg-amber-500/10 border-amber-500/30 text-amber-500" 
                      : "bg-white/5 border-white/10 text-white/20 hover:border-white/20"
                )}
              >
                 {i < currentStep ? <CheckCircle2 className="w-6 h-6" /> : <span className="text-sm font-black font-mono">0{step.numero}</span>}
              </button>
              <span className={cn(
                "text-[9px] uppercase tracking-[0.4em] font-black transition-all duration-500 hidden md:block",
                i === currentStep ? "text-amber-500 opacity-100" : "text-white/20 opacity-0 group-hover:opacity-100"
              )}>
                {step.nombre}
              </span>
            </div>
          ))}
        </div>

        {/* Main Step Detail Stage */}
        <div className="relative w-full aspect-[21/9] rounded-[4rem] overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-3xl shadow-3xl">
           <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(20px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col md:flex-row"
              >
                 {/* Visual focus section */}
                 <div className="flex-1 relative overflow-hidden h-72 md:h-auto">
                    {steps[currentStep].imagen ? (
                      <motion.img 
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        src={steps[currentStep].imagen} 
                        alt={steps[currentStep].nombre} 
                        className="w-full h-full object-cover saturate-[1.2] brightness-75" 
                      />
                    ) : (
                      <div className="w-full h-full bg-amber-500/10 flex items-center justify-center">
                         <Ruler className="w-20 h-20 text-amber-500/20" />
                      </div>
                    )}
                    {/* Artistic gradient split */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-900/90 hidden md:block" />
                 </div>

                 {/* Information and Navigation */}
                 <div className="flex-1 p-16 md:p-24 flex flex-col justify-center bg-zinc-900/90 relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    
                    <span className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-black mb-8 block leading-none">
                      Técnica Paso a Paso
                    </span>
                    
                    <h3 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tighter leading-none mb-10">
                      {steps[currentStep].nombre}
                    </h3>
                    
                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed font-display italic max-w-xl">
                      {steps[currentStep].descripcion || "Descripción detallada del paso para un recorte perfecto."}
                    </p>
                    
                    {/* Detailed Navigation */}
                    <div className="mt-16 flex items-center gap-10">
                       <div className="flex items-center gap-3">
                         <button 
                          onClick={prevStep} 
                          disabled={currentStep === 0}
                          className="w-16 h-16 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-white/10 disabled:opacity-20 transition-all group"
                         >
                            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                         </button>
                         <button 
                          onClick={nextStep} 
                          disabled={currentStep === steps.length - 1}
                          className="w-16 h-16 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-white/10 disabled:opacity-20 transition-all group"
                         >
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                         </button>
                       </div>
                       
                       <div className="flex flex-col">
                          <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold leading-none mb-1">Total Pasos</span>
                          <span className="text-lg font-mono text-white/60 font-medium">{currentStep + 1} / {steps.length}</span>
                       </div>
                    </div>
                 </div>
              </motion.div>
           </AnimatePresence>
        </div>

        {/* Cinematic tip banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="max-w-3xl mx-auto p-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] relative overflow-hidden"
        >
           <div className="absolute top-0 left-0 w-2 h-full bg-amber-500" />
           <div className="flex items-start gap-8">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center shrink-0">
                 <CheckCircle2 className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                 <h4 className="text-xl font-display font-bold text-white mb-3">Recomendación Profesional</h4>
                 <p className="text-lg text-white/40 leading-relaxed font-light font-display italic">
                   "Asegúrate de llevar el recorte hasta este punto sin exceder el tejido vivo. La precisión en este paso es crucial para el equilibrio palmar/plantar."
                 </p>
              </div>
           </div>
        </motion.div>
      </div>
    </div>
  )
}
