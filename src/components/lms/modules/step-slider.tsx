"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"
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

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(prev => prev + 1)
  }

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1)
  }

  return (
    <div className="flex flex-col gap-12 max-w-5xl mx-auto">
      {/* Steps indicator */}
      <div className="flex items-center justify-between px-4">
        {steps.map((step: Step, i: number) => (
          <div key={i} className="flex flex-col items-center gap-3 group">
            <button 
              onClick={() => setCurrentStep(i)}
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 border-2",
                i === currentStep 
                  ? "bg-amber-500 border-amber-500 text-black shadow-lg shadow-amber-500/20" 
                  : i < currentStep 
                    ? "bg-amber-500/10 border-amber-500/30 text-amber-500" 
                    : "bg-white/5 border-white/10 text-white/20 hover:border-white/20"
              )}
            >
               {i < currentStep ? <CheckCircle2 className="w-5 h-5" /> : <span className="text-xs font-bold font-mono">{step.numero}</span>}
            </button>
            <span className={cn(
              "text-[10px] uppercase tracking-widest font-bold transition-all duration-300 hidden md:block",
              i === currentStep ? "text-amber-500" : "text-white/20"
            )}>
              {step.nombre}
            </span>
          </div>
        ))}
      </div>

      {/* Slide Content */}
      <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden border border-white/5 bg-white/[0.02] bg-gradient-to-br from-white/[0.03] to-transparent shadow-2xl">
         <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col md:flex-row"
            >
               {/* Detail section */}
               <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500/60 font-black mb-4">Paso {steps[currentStep].numero}</span>
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter mb-6">
                    {steps[currentStep].nombre}
                  </h3>
                  <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed">
                    {steps[currentStep].descripcion || "Descripción detallada del paso para un recorte perfecto."}
                  </p>
                  
                  {/* Local Nav */}
                  <div className="mt-12 flex items-center gap-6">
                     <button 
                      onClick={prevStep} 
                      disabled={currentStep === 0}
                      className="p-4 rounded-full border border-white/10 text-white hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none transition-all"
                     >
                        <ChevronLeft className="w-5 h-5" />
                     </button>
                     <button 
                      onClick={nextStep} 
                      disabled={currentStep === steps.length - 1}
                      className="p-4 rounded-full border border-white/10 text-white hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none transition-all"
                     >
                        <ChevronRight className="w-5 h-5" />
                     </button>
                  </div>
               </div>

               {/* Image section */}
               <div className="flex-1 relative overflow-hidden h-64 md:h-auto">
                  {steps[currentStep].imagen ? (
                    <img src={steps[currentStep].imagen} alt={steps[currentStep].nombre} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  ) : (
                    <div className="w-full h-full bg-amber-500/5 flex items-center justify-center p-20 text-center">
                       <p className="text-amber-500/30 text-sm italic">Imagine showing visual detail of {steps[currentStep].nombre} here.</p>
                    </div>
                  )}
                  {/* Overlay grad */}
                  <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent hidden md:block" />
               </div>
            </motion.div>
         </AnimatePresence>
      </div>

      {/* Footer / Instructions */}
      <div className="p-8 bg-amber-500/5 border border-amber-500/10 rounded-3xl">
         <div className="flex items-start gap-4">
            <div className="bg-amber-500/20 p-2 rounded-lg mt-1">
               <CheckCircle2 className="w-4 h-4 text-amber-500" />
            </div>
            <div>
               <h4 className="text-white font-semibold mb-1">Punto clave del paso</h4>
               <p className="text-sm text-white/40 leading-relaxed">
                 Asegúrate de llevar el recorte hasta este punto sin exceder el tejido vivo. La precisión es crucial para el bienestar del caballo.
               </p>
            </div>
         </div>
      </div>
    </div>
  )
}
