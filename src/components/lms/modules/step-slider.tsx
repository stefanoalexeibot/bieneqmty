"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

interface StepSliderProps {
  data: any
}

export function StepSlider({ data }: StepSliderProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = data.pasos || []
  const totalSteps = steps.length
  
  const step = steps[currentStep]
  const stepText = step?.texto || step?.descripcion || ""

  const handleNext = () => {
    if (currentStep < totalSteps - 1) setCurrentStep(prev => prev + 1)
  }

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1)
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-8 lg:p-24 overflow-hidden bg-black font-sans">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-zinc-950" />
        
        {/* Premium Background Texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay">
           <img src="/assets/curso/backgrounds/hoof-texture.png" className="w-full h-full object-cover grayscale" alt="" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.2_0.05_62)_0%,_transparent_70%)] opacity-30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content Area */}
        <div className="space-y-10 order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-amber-500/50" />
              <span className="text-amber-500 font-mono text-[10px] font-black tracking-[0.5em] uppercase">
                Módulo {data.numero} · Protocolo BieneQ
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter leading-[0.85]">
              {data.titulo}
            </h2>
          </motion.div>

          {/* Active Step Card */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="p-10 md:p-12 rounded-[3rem] bg-zinc-900/40 border border-white/5 backdrop-blur-3xl relative overflow-hidden group shadow-2xl"
              >
                {/* Step Counter Watermark */}
                <div className="absolute top-0 right-0 p-10 select-none">
                   <span className="text-[10rem] font-display font-black text-white/[0.02] leading-none">
                     {currentStep + 1}
                   </span>
                </div>
                
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-5">
                     <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                        <span className="font-mono text-lg font-black text-black">{currentStep + 1}</span>
                     </div>
                     <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                       {step?.nombre}
                     </h3>
                  </div>
                  
                  <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light italic font-display">
                    &ldquo;{stepText}&rdquo;
                  </p>

                  {/* Navigation within card */}
                  <div className="flex items-center gap-4 pt-4">
                     <button 
                       onClick={handlePrev}
                       disabled={currentStep === 0}
                       className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-all hover:bg-white/5 active:scale-90 disabled:opacity-20 backdrop-blur-md"
                     >
                       <ChevronLeft className="w-6 h-6 text-white" />
                     </button>
                     <button 
                       onClick={handleNext}
                       disabled={currentStep === totalSteps - 1}
                       className="flex-1 lg:flex-none px-10 h-14 rounded-full bg-white hover:bg-amber-500 hover:text-black text-black font-bold flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-20 shadow-xl group/bn"
                     >
                       <span>Siguiente Paso</span>
                       <ChevronRight className="w-5 h-5 group-hover/bn:translate-x-1 transition-transform" />
                     </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pro Tip Callout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 p-6 md:p-8 rounded-[2rem] bg-amber-500/[0.03] border border-amber-500/10"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-amber-500" />
              </div>
              <p className="text-sm md:text-base text-white/40 font-medium tracking-wide">
                <span className="text-amber-500 font-black uppercase text-[10px] tracking-[0.3em] block mb-1">Nota Técnica</span>
                Protocolo estandarizado para la máxima salud estructural del casco.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Cinematic Step Image (Right Side) */}
        <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-[4rem] border border-white/10 shadow-3xl bg-zinc-900 order-1 lg:order-2 group">
           <AnimatePresence mode="wait">
             <motion.img 
               key={currentStep}
               initial={{ opacity: 0, scale: 1.15, filter: "blur(40px)" }}
               animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
               exit={{ opacity: 0, scale: 1.15, filter: "blur(40px)" }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
               src={step?.imagen}
               className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000 group-hover:scale-105"
               alt={step?.nombre}
             />
           </AnimatePresence>
           
           {/* Overlays */}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
           <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-transparent" />
           
           {/* Step Indicators */}
           <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-3">
              {steps.map((_: any, i: number) => (
                <button
                  key={i}
                  onClick={() => setCurrentStep(i)}
                  className={cn(
                    "h-1.5 transition-all duration-700 rounded-full",
                    currentStep === i ? "w-12 bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.6)]" : "w-1.5 bg-white/30 hover:bg-white/50"
                  )} 
                />
              ))}
           </div>

           {/* Perspective helper label */}
           <div className="absolute top-10 right-10 flex items-center gap-3 opacity-40">
              <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Visual Insight</span>
              <div className="w-1 h-1 rounded-full bg-white" />
           </div>
        </div>
      </div>
    </div>
  )
}
