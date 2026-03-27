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
  const step = steps[currentStep]

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(prev => prev + 1)
  }
  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1)
  }

  const stepText = step?.descripcion || step?.texto || ""

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">

      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.04, 0.09, 0.04], scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-amber-600 blur-[250px] rounded-full"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-8">

        {/* Module Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-1"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-black">
            {data.parte || "Protocolo"}
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter leading-none">
            {data.titulo}
          </h2>
        </motion.div>

        {/* Step Navigation Rail */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3"
        >
          {steps.map((_: any, i: number) => (
            <button
              key={i}
              onClick={() => setCurrentStep(i)}
              className={cn(
                "relative flex items-center justify-center rounded-2xl transition-all duration-500 font-display font-bold text-sm",
                i === currentStep
                  ? "w-14 h-14 bg-amber-500 text-black shadow-[0_0_30px_rgba(245,158,11,0.5)] scale-110"
                  : i < currentStep
                  ? "w-12 h-12 bg-amber-500/20 border border-amber-500/40 text-amber-500"
                  : "w-12 h-12 bg-white/5 border border-white/10 text-white/30 hover:bg-white/10 hover:text-white/60"
              )}
            >
              {i < currentStep
                ? <CheckCircle2 className="w-5 h-5" />
                : <span>{String(i + 1).padStart(2, "0")}</span>
              }
              {/* Label below active */}
              {i === currentStep && (
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] text-amber-500 font-black whitespace-nowrap">
                  {step?.nombre?.split(" ")[0]}
                </span>
              )}
            </button>
          ))}
          {/* Connecting line after dots */}
          <div className="flex-1 h-px bg-white/5 ml-2" />
        </motion.div>

        {/* Main Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(20px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-900/50 backdrop-blur-3xl shadow-2xl p-12 md:p-16 group mt-6"
          >
            {/* Subtle inner glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/[0.03] blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 group-hover:scale-125 transition-transform duration-1000 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 relative z-10">
              {/* Left: Content */}
              <div className="flex-1 space-y-6">
                <span className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-black block">
                  Técnica Paso a Paso
                </span>

                <h3 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter leading-none">
                  {step?.nombre}
                </h3>

                {stepText && (
                  <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed font-display italic max-w-2xl">
                    {stepText}
                  </p>
                )}
              </div>

              {/* Right: Navigation */}
              <div className="flex flex-col items-start md:items-end gap-6 shrink-0">
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-20 transition-all group/btn"
                  >
                    <ChevronLeft className="w-5 h-5 group-hover/btn:-translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={currentStep === steps.length - 1}
                    className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center text-black hover:bg-amber-500 hover:scale-110 transition-all shadow-xl disabled:opacity-20 group/btn"
                  >
                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-black">Total Pasos</span>
                  <span className="text-2xl font-mono font-bold text-white/70">
                    {currentStep + 1} / {steps.length}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pro Tip Callout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`tip-${currentStep}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-8 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group"
          >
            {/* Amber left accent */}
            <div className="absolute left-0 top-6 bottom-6 w-1 bg-amber-500 rounded-full" />

            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 ml-4">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-[0.5em] text-amber-500/70 font-black">
                Recomendación Profesional
              </span>
              <p className="text-white/50 font-display italic text-lg leading-relaxed">
                &ldquo;{
                  step?.recomendacion ||
                  step?.pro_tip ||
                  `Asegúrate de llevar el recorte hasta este punto sin exceder el tejido vivo. La precisión en este paso es crucial.`
                }&rdquo;
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  )
}
