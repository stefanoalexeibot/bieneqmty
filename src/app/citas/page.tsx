"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Video, Calendar as CalendarIcon, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CitasPage() {
  const [selectedMode, setSelectedMode] = useState<"presencial" | "online" | null>(null);

  const steps = [
    { id: 1, title: "Selecciona Modalidad" },
    { id: 2, title: "Elige Fecha" },
    { id: 3, title: "Confirmación" }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center bg-[#050505]">
      <div className="text-center mb-16 relative z-10 w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-bieneq-green font-semibold tracking-wider uppercase text-sm mb-4 block">Agenda Inteligente</span>
          <h1 className="text-4xl md:text-6xl font-heading font-semibold text-white mb-6 tracking-tight">
            Prioriza la salud de tu caballo.
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light">
            Reserva una consulta presencial en Monterrey o una evaluación remota de radiografías desde cualquier parte del mundo.
          </p>
        </motion.div>
      </div>

      <div className="w-full max-w-5xl flex flex-col gap-12 relative z-10">

        {/* Progress Steps */}
        <div className="flex justify-center items-center gap-4 mb-4">
          {steps.map((step) => (
            <div key={step.id} className="flex items-center gap-4">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors",
                selectedMode && step.id === 1 ? "bg-bieneq-green text-black" :
                  step.id === 2 && selectedMode ? "bg-white text-black" : "bg-white/10 text-white/50"
              )}>
                {selectedMode && step.id === 1 ? <CheckCircle2 className="w-5 h-5" /> : step.id}
              </div>
              <span className={cn(
                "hidden sm:block text-sm font-medium",
                selectedMode && step.id === 1 ? "text-bieneq-green" :
                  step.id === 2 && selectedMode ? "text-white" : "text-white/50"
              )}>
                {step.title}
              </span>
              {step.id !== 3 && <div className="w-8 h-0.5 bg-white/10" />}
            </div>
          ))}
        </div>

        {/* Modalidad Selection */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedMode("presencial")}
            className={cn(
              "cursor-pointer p-8 rounded-3xl border transition-all duration-300 flex flex-col items-center text-center gap-6",
              selectedMode === "presencial"
                ? "bg-bieneq-green/10 border-bieneq-green shadow-[0_0_30px_rgba(34,197,94,0.15)]"
                : "bg-white/5 border-white/10 hover:border-white/30"
            )}
          >
            <div className={cn(
              "w-20 h-20 rounded-full flex items-center justify-center transition-colors",
              selectedMode === "presencial" ? "bg-bieneq-green text-black" : "bg-white/10 text-white"
            )}>
              <MapPin className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Consulta Presencial</h3>
              <p className="text-white/60">Monterrey y área metropolitana. Evaluación clínica completa, recorte y plan de transición.</p>
            </div>
            <div className="mt-auto pt-4">
              <span className="text-lg font-semibold text-white">$2,500 MXN</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedMode("online")}
            className={cn(
              "cursor-pointer p-8 rounded-3xl border transition-all duration-300 flex flex-col items-center text-center gap-6",
              selectedMode === "online"
                ? "bg-bieneq-yellow/10 border-bieneq-yellow shadow-[0_0_30px_rgba(234,179,8,0.15)]"
                : "bg-white/5 border-white/10 hover:border-white/30"
            )}
          >
            <div className={cn(
              "w-20 h-20 rounded-full flex items-center justify-center transition-colors",
              selectedMode === "online" ? "bg-bieneq-yellow text-black" : "bg-white/10 text-white"
            )}>
              <Video className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Asesoría Remota</h3>
              <p className="text-white/60">Análisis detallado de radiografías, fotos del casco y videollamada de 60 minutos.</p>
            </div>
            <div className="mt-auto pt-4">
              <span className="text-lg font-semibold text-white">$1,500 MXN</span>
            </div>
          </motion.div>
        </div>

        {/* Calendar UI Mockup */}
        <AnimatePresence>
          {selectedMode && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Mock Calendar */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-bieneq-green" /> Elige un día
                    </h4>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white">&lt;</button>
                      <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white">&gt;</button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium">
                    {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map(d => <div key={d} className="text-white/40 pb-2">{d}</div>)}
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div key={i} className={cn(
                        "aspect-square flex items-center justify-center rounded-full cursor-pointer hover:bg-white/10 transition-colors",
                        i === 14 ? "bg-bieneq-green text-black hover:bg-bieneq-green" : "text-white",
                        (i < 5 || i === 12 || i === 20) ? "opacity-20 pointer-events-none" : ""
                      )}>
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-px bg-white/10" />

                {/* Mock Time Slots */}
                <div className="w-full md:w-64 space-y-6">
                  <h4 className="text-xl font-semibold text-white">Horas disponibles</h4>
                  <p className="text-sm text-white/50">Octubre 15, 2026</p>
                  <div className="flex flex-col gap-3">
                    {["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"].map((t, i) => (
                      <button key={i} className={cn(
                        "w-full py-3 rounded-xl border transition-all text-sm font-medium",
                        i === 1 ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]" : "bg-transparent border-white/20 text-white hover:border-white/50"
                      )}>
                        {t}
                      </button>
                    ))}
                  </div>
                  <button className="w-full mt-8 py-4 bg-bieneq-green text-black rounded-xl font-bold uppercase tracking-wider hover:bg-[#1ea852] transition-colors">
                    Continuar
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}
