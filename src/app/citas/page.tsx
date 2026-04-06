"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Video, Calendar as CalendarIcon, CheckCircle2, ChevronRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { GradientText } from "@/components/ui/gradient-text";
import { ScrollReveal, RevealItem } from "@/components/animations/scroll-reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function CitasPage() {
  const [selectedMode, setSelectedMode] = useState<"presencial" | "online" | null>(null);

  const { x, y } = useMousePosition();
  const springConfig = { stiffness: 150, damping: 20 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    mouseX.set((x / (typeof window !== "undefined" ? window.innerWidth : 1)) - 0.5);
    mouseY.set((y / (typeof window !== "undefined" ? window.innerHeight : 1)) - 0.5);
  }, [x, y, mouseX, mouseY]);

  const bgX = useTransform(mouseX, [-0.5, 0.5], [20, -20]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], [20, -20]);

  const steps = [
    { id: 1, title: "Modalidad" },
    { id: 2, title: "Fecha y Hora" },
    { id: 3, title: "Confirmación" }
  ];

  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Decorative Elements & Parallax */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
      >
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-bieneq-green/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-bieneq-cafe/5 blur-[150px] rounded-full" />
      </motion.div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <ScrollReveal direction="left" staggerChildren={0.15}>
          <RevealItem>
            <span className="text-bieneq-green font-bold text-[10px] tracking-[0.4em] uppercase mb-6 block">
              Exclusive Booking
            </span>
          </RevealItem>
          <RevealItem>
            <h1 className="text-5xl md:text-8xl font-heading font-bold leading-[0.9] tracking-tighter mb-8">
              Agenda tu <br />
              <ShimmerWord className="text-5xl md:text-8xl">Consulta.</ShimmerWord>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-xl text-white/40 font-light leading-relaxed max-w-2xl">
              Prioriza el rendimiento de tu caballo con una evaluación biomecánica de clase mundial.
            </p>
          </RevealItem>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Selection & Info */}
          <div className="lg:col-span-12">
            
            {/* Steps Progress */}
            <div className="flex justify-start gap-12 mb-12 border-b border-white/5 pb-8 overflow-x-auto scrollbar-hide">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center gap-4 shrink-0">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border transition-all duration-500",
                    selectedMode && step.id === 1 ? "bg-bieneq-green border-bieneq-green text-black" :
                    step.id === 2 && selectedMode ? "border-white text-white" : "border-white/10 text-white/30"
                  )}>
                    {selectedMode && step.id === 1 ? <CheckCircle2 className="w-5 h-5" /> : step.id}
                  </div>
                  <span className={cn(
                    "text-xs font-bold uppercase tracking-widest",
                    selectedMode && step.id === 1 ? "text-bieneq-green" :
                    step.id === 2 && selectedMode ? "text-white" : "text-white/30"
                  )}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Selection Grid */}
            <ScrollReveal className="grid md:grid-cols-2 gap-8 mb-16" staggerChildren={0.2}>
              {/* Presencial */}
              <RevealItem>
                <TiltCard className="h-full">
                  <div
                    onClick={() => setSelectedMode("presencial")}
                    className={cn(
                      "relative p-10 rounded-[2.5rem] border cursor-pointer transition-all duration-500 group bg-white/5 backdrop-blur-sm h-full",
                      selectedMode === "presencial" 
                      ? "border-bieneq-green shadow-[0_0_50px_rgba(34,197,94,0.1)]" 
                      : "border-white/10 hover:border-white/20"
                    )}
                  >
                    <BorderBeam size={200} duration={selectedMode === "presencial" ? 5 : 15} colorFrom="#16a34a" colorTo="#84cc16" />
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors",
                      selectedMode === "presencial" ? "bg-bieneq-green text-black" : "bg-white/5 text-white/40"
                    )}>
                      <MapPin className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Clínica Presencial</h3>
                    <p className="text-white/40 mb-8 leading-relaxed">
                      Evaluación física completa en Monterrey. Análisis de aplomos, recorte correctivo y plan de rehabilitación.
                    </p>
                    <div className="flex items-end justify-between uppercase mt-auto">
                      <span className="text-[10px] font-bold tracking-widest text-white/30">Inversión</span>
                      <span className="text-2xl font-bold text-white tracking-tighter">$2,500 <span className="text-xs text-white/40">MXN</span></span>
                    </div>
                    
                    {selectedMode === "presencial" && (
                      <motion.div layoutId="active-indicator" className="absolute top-6 right-6 w-3 h-3 rounded-full bg-bieneq-green animate-pulse" />
                    )}
                  </div>
                </TiltCard>
              </RevealItem>

              {/* Online */}
              <RevealItem>
                <TiltCard className="h-full">
                  <div
                    onClick={() => setSelectedMode("online")}
                    className={cn(
                      "relative p-10 rounded-[2.5rem] border cursor-pointer transition-all duration-500 group bg-white/5 backdrop-blur-sm h-full",
                      selectedMode === "online" 
                      ? "border-bieneq-yellow shadow-[0_0_50px_rgba(234,179,8,0.1)]" 
                      : "border-white/10 hover:border-white/20"
                    )}
                  >
                    <BorderBeam size={200} duration={selectedMode === "online" ? 5 : 15} colorFrom="#eab308" colorTo="#f59e0b" />
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors",
                      selectedMode === "online" ? "bg-bieneq-yellow text-black" : "bg-white/5 text-white/40"
                    )}>
                      <Video className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Evaluación Digital</h3>
                    <p className="text-white/40 mb-8 leading-relaxed">
                      Asesoría remota vía videollamada HD. Revisión de radiografías y videos de movimiento desde cualquier lugar.
                    </p>
                    <div className="flex items-end justify-between uppercase mt-auto">
                      <span className="text-[10px] font-bold tracking-widest text-white/30">Inversión</span>
                      <span className="text-2xl font-bold text-white tracking-tighter">$1,500 <span className="text-xs text-white/40">MXN</span></span>
                    </div>

                    {selectedMode === "online" && (
                      <motion.div layoutId="active-indicator" className="absolute top-6 right-6 w-3 h-3 rounded-full bg-bieneq-yellow animate-pulse" />
                    )}
                  </div>
                </TiltCard>
              </RevealItem>
            </ScrollReveal>

            {/* Interactive Scheduler Container */}
            <AnimatePresence>
              {selectedMode && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="w-full bg-[#080808] border border-white/10 rounded-[3rem] p-8 md:p-16 mb-20 relative overflow-hidden"
                  >
                    <BorderBeam size={600} duration={20} colorFrom="#16a34a" colorTo="#84cc16" />
                    <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                    {/* Calendar Section */}
                    <div>
                      <div className="flex items-center justify-between mb-10">
                        <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                          <CalendarIcon className="w-6 h-6 text-bieneq-green" /> Elige fecha
                        </h4>
                        <span className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">Octubre 2026</span>
                      </div>
                      
                      <div className="grid grid-cols-7 gap-1 md:gap-4 text-center">
                        {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map(d => (
                          <div key={d} className="text-[10px] font-bold text-white/20 uppercase pb-4">{d}</div>
                        ))}
                        {Array.from({ length: 30 }).map((_, i) => (
                          <button key={i} className={cn(
                            "aspect-square rounded-2xl flex items-center justify-center text-sm font-bold transition-all border border-transparent",
                            i === 14 ? "bg-white text-black" : "text-white/40 hover:bg-white/5 hover:text-white hover:border-white/10",
                            (i < 5 || i === 20) ? "opacity-10 pointer-events-none" : ""
                          )}>
                            {i + 1}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time & Confirmation */}
                    <div className="flex flex-col">
                      <h4 className="text-2xl font-bold text-white mb-10">Horarios Disponibles</h4>
                      <div className="grid grid-cols-2 gap-4 mb-12">
                        {["09:00", "11:30", "14:00", "16:30"].map((time, i) => (
                          <button key={time} className={cn(
                            "py-4 rounded-2xl border font-bold text-sm transition-all",
                            i === 1 ? "bg-bieneq-green border-bieneq-green text-black" : "bg-white/5 border-white/10 text-white/40 hover:border-white/20"
                          )}>
                            {time} <span className="text-[10px] opacity-60">AM</span>
                          </button>
                        ))}
                      </div>

                      <div className="mt-auto bg-white/5 rounded-3xl p-6 border border-white/5 flex items-start gap-4 mb-8">
                        <Info className="w-5 h-5 text-bieneq-green mt-1 shrink-0" />
                        <p className="text-xs text-white/40 leading-relaxed">
                          Al confirmar, recibirás un correo con las instrucciones de preparación de radiografías o ubicación del establo.
                        </p>
                      </div>

                      <button className="w-full py-6 bg-white text-black font-bold uppercase tracking-[0.3em] rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
                        Confirmar Cita
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </main>
  );
}
