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
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    horseName: "",
    message: ""
  });

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
    { id: 3, title: "Detalles" },
    { id: 4, title: "Confirmación" }
  ];

  const handleSelectMode = (mode: "presencial" | "online") => {
    setSelectedMode(mode);
    setSelectedDay(null);
    setSelectedTime(null);
    setCurrentStep(2);
  };

  const handleWhatsAppSend = () => {
    const phone = "5218134179632";
    const modeText = selectedMode === "presencial" ? "Clínica Presencial" : "Evaluación Digital";
    const message = `Hola José Manuel Luna, me gustaría confirmar una cita de ${modeText} para mi caballo.

📋 *Detalles de la Cita:*
• *Fecha:* ${selectedDay} de Agosto, 2026
• *Hora:* ${selectedTime} ${parseInt(selectedTime || "") < 12 ? "AM" : "PM"}
• *Propietario:* ${formData.name}
• *Caballo:* ${formData.horseName}
• *Email:* ${formData.email}
• *Mensaje:* ${formData.message || "Sin comentarios adicionales"}

Quedo a la espera de las instrucciones para la preparación. ¡Muchas gracias!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
  };

  const handleReset = () => {
    setSelectedMode(null);
    setSelectedDay(null);
    setSelectedTime(null);
    setFormData({ name: "", whatsapp: "", email: "", horseName: "", message: "" });
    setCurrentStep(1);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp || !formData.email || !formData.horseName) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }
    setCurrentStep(4);
  };

  const emptyDays = Array.from({ length: 5 });
  const monthDays = Array.from({ length: 31 });

  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 relative overflow-hidden">
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
      >
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-bieneq-green/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-bieneq-cafe/5 blur-[150px] rounded-full" />
      </motion.div>

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
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-12">
            
            <div className="flex justify-start gap-12 mb-12 border-b border-white/5 pb-8 overflow-x-auto scrollbar-hide">
              {steps.map((step) => {
                const isCompleted = currentStep > step.id;
                const isActive = currentStep === step.id;
                return (
                  <div key={step.id} className="flex items-center gap-4 shrink-0">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border transition-all duration-500",
                      isCompleted ? "bg-bieneq-green border-bieneq-green text-black" :
                      isActive ? "border-white bg-white/10 text-white" : "border-white/10 text-white/30"
                    )}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : step.id}
                    </div>
                    <span className={cn(
                      "text-xs font-bold uppercase tracking-widest transition-colors",
                      isCompleted ? "text-bieneq-green" :
                      isActive ? "text-white" : "text-white/30"
                    )}>
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {currentStep <= 3 && (
              <ScrollReveal className="grid md:grid-cols-2 gap-8 mb-16" staggerChildren={0.2}>
                <RevealItem>
                  <TiltCard className="h-full">
                    <div
                      onClick={() => handleSelectMode("presencial")}
                      className={cn(
                        "relative p-10 rounded-[2.5rem] border cursor-pointer transition-all duration-500 group bg-white/5 backdrop-blur-sm h-full",
                        selectedMode === "presencial" 
                        ? "border-bieneq-green shadow-[0_0_50px_rgba(34,197,94,0.15)] bg-white/[0.07]" 
                        : "border-white/10 hover:border-white/20"
                      )}
                    >
                      <BorderBeam size={200} duration={selectedMode === "presencial" ? 5 : 15} colorFrom="#16a34a" colorTo="#84cc16" />
                      <div className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300",
                        selectedMode === "presencial" ? "bg-bieneq-green text-black scale-110" : "bg-white/5 text-white/40 group-hover:text-white"
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

                <RevealItem>
                  <TiltCard className="h-full">
                    <div
                      onClick={() => handleSelectMode("online")}
                      className={cn(
                        "relative p-10 rounded-[2.5rem] border cursor-pointer transition-all duration-500 group bg-white/5 backdrop-blur-sm h-full",
                        selectedMode === "online" 
                        ? "border-bieneq-yellow shadow-[0_0_50px_rgba(234,179,8,0.15)] bg-white/[0.07]" 
                        : "border-white/10 hover:border-white/20"
                      )}
                    >
                      <BorderBeam size={200} duration={selectedMode === "online" ? 5 : 15} colorFrom="#eab308" colorTo="#f59e0b" />
                      <div className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300",
                        selectedMode === "online" ? "bg-bieneq-yellow text-black scale-110" : "bg-white/5 text-white/40 group-hover:text-white"
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
            )}

            <AnimatePresence mode="wait">
              {selectedMode && currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full bg-[#080808]/80 border border-white/10 rounded-[3rem] p-8 md:p-16 mb-20 relative overflow-hidden backdrop-blur-2xl"
                >
                  <BorderBeam size={600} duration={20} colorFrom="#16a34a" colorTo="#84cc16" />
                  <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                    
                    <div>
                      <div className="flex items-center justify-between mb-10">
                        <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                          <CalendarIcon className="w-6 h-6 text-bieneq-green" /> Elige fecha
                        </h4>
                        <span className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">Agosto 2026</span>
                      </div>
                      
                      <div className="grid grid-cols-7 gap-2 text-center">
                        {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map(d => (
                          <div key={d} className="text-[10px] font-bold text-white/20 uppercase pb-4">{d}</div>
                        ))}
                        
                        {emptyDays.map((_, idx) => (
                          <div key={`empty-${idx}`} className="aspect-square" />
                        ))}

                        {monthDays.map((_, i) => {
                          const dayNumber = i + 1;
                          const isSpecialClinicWeekend = dayNumber === 15 || dayNumber === 16;
                          const isSelected = selectedDay === dayNumber;
                          
                          return (
                            <button 
                              key={dayNumber} 
                              onClick={() => setSelectedDay(dayNumber)}
                              className={cn(
                                "aspect-square rounded-2xl flex flex-col items-center justify-center text-sm font-bold transition-all border relative overflow-hidden",
                                isSelected 
                                  ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105" 
                                  : isSpecialClinicWeekend
                                    ? "border-bieneq-yellow/40 text-bieneq-yellow hover:bg-bieneq-yellow/10"
                                    : "border-transparent text-white/40 hover:bg-white/5 hover:text-white hover:border-white/10"
                              )}
                            >
                              <span>{dayNumber}</span>
                              {isSpecialClinicWeekend && !isSelected && (
                                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-bieneq-yellow animate-ping" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                      
                      {selectedMode === "presencial" && (
                        <div className="mt-6 flex items-center gap-2 text-xs text-bieneq-yellow">
                          <span className="w-1.5 h-1.5 rounded-full bg-bieneq-yellow animate-ping shrink-0" />
                          <span>Fines de semana (15 y 16) corresponden a la Clínica Barefoot Integral presencial.</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <h4 className="text-2xl font-bold text-white mb-10 flex items-center gap-2">
                        Horarios Disponibles
                      </h4>
                      <div className="grid grid-cols-2 gap-4 mb-12">
                        {["09:00", "11:30", "14:00", "16:30"].map((time) => {
                          const isSelected = selectedTime === time;
                          return (
                            <button 
                              key={time} 
                              onClick={() => setSelectedTime(time)}
                              className={cn(
                                "py-4 rounded-2xl border font-bold text-sm transition-all duration-300",
                                isSelected 
                                  ? "bg-bieneq-green border-bieneq-green text-black shadow-[0_0_15px_rgba(34,197,94,0.4)] scale-105" 
                                  : "bg-white/5 border-white/10 text-white/40 hover:border-white/20 hover:text-white"
                              )}
                            >
                              {time} <span className="text-[10px] opacity-60">{parseInt(time) < 12 ? "AM" : "PM"}</span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="bg-white/5 rounded-3xl p-6 border border-white/5 flex items-start gap-4 mb-8">
                        <Info className="w-5 h-5 text-bieneq-green mt-1 shrink-0" />
                        <p className="text-xs text-white/40 leading-relaxed">
                          Has seleccionado la modalidad <strong className="text-white capitalize">{selectedMode}</strong>.
                          {selectedDay && selectedTime && (
                            <span> Reservando para el <strong className="text-white">{selectedDay} de Agosto</strong> a las <strong className="text-white">{selectedTime}</strong>.</span>
                          )}
                        </p>
                      </div>

                      <button 
                        onClick={() => setCurrentStep(3)}
                        disabled={!selectedDay || !selectedTime}
                        className={cn(
                          "w-full py-6 font-bold uppercase tracking-[0.3em] rounded-2xl transition-all duration-300",
                          selectedDay && selectedTime 
                            ? "bg-white text-black hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-[0_20px_50px_rgba(255,255,255,0.1)]" 
                            : "bg-white/5 text-white/20 border border-white/5 cursor-not-allowed"
                        )}
                      >
                        Continuar
                      </button>
                    </div>

                  </div>
                </motion.div>
              )}

              {selectedMode && currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full bg-[#080808]/80 border border-white/10 rounded-[3rem] p-8 md:p-16 mb-20 relative overflow-hidden backdrop-blur-2xl"
                >
                  <BorderBeam size={600} duration={20} colorFrom="#eab308" colorTo="#84cc16" />
                  
                  <div className="max-w-2xl mx-auto z-10 relative">
                    <h3 className="text-3xl font-bold text-white mb-2">Detalles del Propietario y Caballo</h3>
                    <p className="text-white/40 text-sm mb-10">Ingresa tus datos para registrar la agenda en la base de datos de BieneqMty.</p>
                    
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-white/60">Nombre del Propietario *</label>
                          <input 
                            type="text" 
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="Ej. Juan Pérez" 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-bieneq-green transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-white/60">WhatsApp *</label>
                          <input 
                            type="tel" 
                            required
                            value={formData.whatsapp}
                            onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                            placeholder="Ej. +52 81 1234 5678" 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-bieneq-green transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-white/60">Correo Electrónico *</label>
                          <input 
                            type="email" 
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="Ej. juan@correo.com" 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-bieneq-green transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-white/60">Nombre del Caballo *</label>
                          <input 
                            type="text" 
                            required
                            value={formData.horseName}
                            onChange={(e) => setFormData({...formData, horseName: e.target.value})}
                            placeholder="Ej. Tornado" 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-bieneq-green transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/60">Observaciones o Síntomas (Opcional)</label>
                        <textarea 
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Cuéntanos un poco sobre el estado del casco de tu caballo, aplomos o lesiones previas." 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-bieneq-green transition-colors resize-none"
                        />
                      </div>

                      <div className="flex gap-4 pt-4">
                        <button 
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="px-8 py-5 border border-white/10 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-colors"
                        >
                          Atrás
                        </button>
                        <button 
                          type="submit"
                          className="flex-1 py-5 bg-bieneq-green text-black font-bold uppercase tracking-[0.2em] rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all text-xs"
                        >
                          Confirmar y Agendar
                        </button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              )}

              {selectedMode && currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full bg-[#080808]/90 border border-bieneq-green/30 rounded-[3rem] p-12 md:p-24 mb-20 text-center relative overflow-hidden backdrop-blur-3xl"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-bieneq-green/10 rounded-full blur-[80px] -z-10" />
                  
                  <div className="max-w-xl mx-auto flex flex-col items-center">
                    <div className="w-20 h-20 bg-bieneq-green text-black rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(34,197,94,0.4)] animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                      ¡Cita Pre-Agendada!
                    </h2>
                    
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                      Tu solicitud ha sido guardada. Para asegurar y confirmar tu espacio en la agenda de José Manuel Luna, presiona el botón a continuación para enviar los detalles por WhatsApp.
                    </p>

                    <div className="w-full bg-white/5 rounded-3xl p-6 border border-white/5 text-left space-y-3 mb-10">
                      <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                        <span className="text-white/40">Modalidad:</span>
                        <span className="text-white font-bold capitalize">{selectedMode}</span>
                      </div>
                      <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                        <span className="text-white/40">Fecha:</span>
                        <span className="text-white font-bold">{selectedDay} de Agosto, 2026</span>
                      </div>
                      <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                        <span className="text-white/40">Hora:</span>
                        <span className="text-white font-bold">{selectedTime} {parseInt(selectedTime || "") < 12 ? "AM" : "PM"}</span>
                      </div>
                      <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                        <span className="text-white/40">Caballo:</span>
                        <span className="text-white font-bold">{formData.horseName}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/40">Propietario:</span>
                        <span className="text-white font-bold">{formData.name}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                      <button 
                        onClick={handleWhatsAppSend}
                        className="px-8 py-5 bg-bieneq-green text-black font-bold uppercase tracking-wider rounded-2xl hover:scale-105 transition-all text-sm flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(34,197,94,0.3)] cursor-pointer"
                      >
                        <span>Confirmar por WhatsApp</span>
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412 0 12.049a11.82 11.82 0 001.611 5.96L0 24l6.117-1.605a11.845 11.845 0 005.933 1.586h.005c6.637 0 12.048-5.412 12.052-12.05a11.829 11.829 0 00-3.536-8.503z"/></svg>
                      </button>
                      <button 
                        onClick={handleReset}
                        className="px-8 py-5 border border-white/10 rounded-2xl font-bold uppercase tracking-wider hover:bg-white/5 transition-all text-sm text-white"
                      >
                        Agendar Nueva Cita
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
