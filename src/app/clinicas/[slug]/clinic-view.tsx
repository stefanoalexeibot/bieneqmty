"use client";

import { Clinic, ClinicTier, ClinicAddon } from "@/lib/clinics";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Star, 
  Clock, 
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Camera,
  Plane,
  Bed,
  Utensils,
  Trophy,
  Info,
  ChevronDown,
  X,
  Maximize2,
  User,
  MessageSquare,
  Gauge
} from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";
import { Magnetic } from "@/components/ui/magnetic";
import { ScrollReveal, RevealItem } from "@/components/animations/scroll-reveal";

// WhatsApp Logo Component for Premium UI
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412 0 12.049a11.82 11.82 0 001.611 5.96L0 24l6.117-1.605a11.845 11.845 0 005.933 1.586h.005c6.637 0 12.048-5.412 12.052-12.05a11.829 11.829 0 00-3.536-8.503z"/>
  </svg>
);

export default function ClinicView({ clinic }: { clinic: Clinic }) {
  const [selectedTier, setSelectedTier] = useState<number>(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [activeDay, setActiveDay] = useState<number>(0);
  const [activeGalleryTab, setActiveGalleryTab] = useState<"theory" | "practice" | "installations">("theory");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // New states for Multi-step registration
  const [step, setStep] = useState<0 | 1>(0);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    city: "",
    experience: "intermedio",
    message: ""
  });

  const WHATSAPP_NUMBER = "5218134179632";

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const totalPrice = useMemo(() => {
    const base = clinic.tiers[selectedTier].price;
    const addonsTotal = clinic.addons
      .filter(a => selectedAddons.includes(a.id))
      .reduce((sum, a) => sum + a.price, 0);
    return base + addonsTotal;
  }, [selectedTier, selectedAddons, clinic]);

  const handleRegistration = () => {
    const tier = clinic.tiers[selectedTier];
    const activatedAddons = clinic.addons.filter(a => selectedAddons.includes(a.id));
    const addonsText = activatedAddons.length > 0 
      ? `\n➕ *Extras:* ${activatedAddons.map(a => a.name).join(", ")}` 
      : "";

    const text = encodeURIComponent(
      `👋 *Nueva Inscripción - Clínicas Bieneq*\n` +
      `-------------------------------\n` +
      `👤 *Alumno:* ${formData.name}\n` +
      `📞 *WhatsApp:* ${formData.whatsapp}\n` +
      `📍 *Ciudad:* ${formData.city}\n` +
      `🎓 *Nivel de Exp:* ${formData.experience.toUpperCase()}\n` +
      `-------------------------------\n` +
      `📌 *Evento:* ${clinic.name}\n` +
      `🗓️ *Fecha:* ${clinic.date}\n` +
      `💎 *Plan:* ${tier.name} ($${tier.price.toLocaleString()})${addonsText}\n` +
      `-------------------------------\n` +
      `💰 *Total:* $${totalPrice.toLocaleString()} MXN\n` +
      `-------------------------------\n` +
      `💬 *Mensaje:* ${formData.message || "Sin mensaje adicional"}\n\n` +
      `_Enviado desde el sitio web bieneqmty.com_`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#020202] pb-32 overflow-hidden">
      {/* Cinematic Hero */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${clinic.featuredImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020202]/60 to-[#020202]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <RevealItem>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-bieneq-green text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Certificación Oficial Bieneq
              </div>
            </RevealItem>
            <RevealItem>
              <h1 className="text-6xl md:text-[10rem] font-heading font-bold text-white mb-8 tracking-tighter leading-[0.85]">
                {clinic.name.split(' ').map((word, i) => (
                   <span key={i} className={cn("block", i === 1 && "text-bieneq-green")}>{word}</span>
                ))}
              </h1>
            </RevealItem>
            <RevealItem>
              <div className="flex flex-wrap justify-center gap-12 text-white/40 mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Calendar className="w-4 h-4 text-bieneq-green" />
                  </div>
                  <span className="text-xl font-light tracking-tight">{clinic.fullDate}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <MapPin className="w-4 h-4 text-bieneq-green" />
                  </div>
                  <span className="text-xl font-light tracking-tight">{clinic.location}</span>
                </div>
              </div>
            </RevealItem>
          </ScrollReveal>
        </div>

        {/* Floating Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Scroll para explorar</span>
          <ChevronDown className="w-4 h-4 text-bieneq-green/40" />
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
          
          {/* Left Column: Details & Schedule */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-32">
            
            {/* Experience Intro */}
            <ScrollReveal direction="up">
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-bieneq-green" />
                  <h2 className="text-4xl font-heading font-bold text-white tracking-tighter uppercase italic">Misión Académica ✨</h2>
                </div>
                <div className="p-12 rounded-[4rem] bg-white/5 border border-white/10 relative overflow-hidden group">
                  <BorderBeam size={600} duration={20} colorFrom="#16a34a" colorTo="#84cc16" />
                  <p className="text-white/60 text-2xl md:text-3xl leading-relaxed font-light italic tracking-tight">
                    {clinic.longDescription}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Schedule Timeline */}
            <div className="space-y-12 bg-white/5 p-12 rounded-[4rem] border border-white/10">
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-white uppercase tracking-tighter">Cronograma ⏰</h3>
                  <p className="text-white/30 text-xs font-bold uppercase tracking-widest">Inmersión Técnica 10 AM - 5 PM</p>
                </div>
                <div className="flex bg-black/40 p-1 rounded-2xl border border-white/10">
                  {clinic.schedule.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setActiveDay(i)}
                      className={cn(
                        "px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all",
                        activeDay === i ? "bg-white text-black" : "text-white/40 hover:text-white"
                      )}
                    >
                      Día 0{i + 1}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative pl-8 border-l border-white/10 space-y-12 py-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDay}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-12"
                  >
                    <div className="space-y-12">
                      {clinic.schedule[activeDay].items.map((item, idx) => (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          key={idx} 
                          className="relative"
                        >
                          <div className={cn(
                            "absolute -left-11 top-0 w-6 h-6 rounded-full border-4 border-[#020202] transition-colors z-10",
                            item.activity?.includes("Lunch") || item.activity?.includes("Break") ? "bg-bieneq-yellow shadow-[0_0_15px_rgba(234,179,8,0.5)]" : "bg-bieneq-green shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                          )} />
                          <div className="group p-6 rounded-3xl hover:bg-white/5 transition-colors">
                            <span className="text-bieneq-green font-mono text-sm mb-2 block font-bold tracking-widest">{item.time}</span>
                            <h4 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">{item.activity}</h4>
                            <p className="text-white/40 text-sm leading-relaxed max-w-lg">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Instructor Profile */}
            <ScrollReveal direction="up">
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-bieneq-green" />
                  <h2 className="text-4xl font-heading font-bold text-white tracking-tighter uppercase italic">Tu Instructor 🎓</h2>
                </div>
                <div className="relative p-1 rounded-[4rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 overflow-hidden group">
                  <div className="flex flex-col md:flex-row items-center gap-12 p-8 md:p-12">
                    <div className="w-full md:w-5/12 aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative">
                      <img 
                        src={clinic.instructor.image} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        alt={clinic.instructor.name} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-white font-bold text-xl">{clinic.instructor.name}</p>
                        <p className="text-bieneq-green text-xs font-bold uppercase tracking-widest">{clinic.instructor.role}</p>
                      </div>
                    </div>
                    <div className="w-full md:w-7/12 space-y-8">
                      <p className="text-white/60 text-xl leading-relaxed font-light italic">
                        "{clinic.instructor.bio}"
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {clinic.instructor.credentials.map((cred, i) => (
                          <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                            <ShieldCheck className="w-4 h-4 text-bieneq-green" />
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{cred}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Categorized Gallery */}
            <div className="space-y-12">
              <div className="flex items-center gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {[
                  { id: "theory", label: "Teoría 📚", icon: Info },
                  { id: "practice", label: "Acción Práctica 🐴", icon: Play },
                  { id: "installations", label: "Instalaciones 🏠", icon: Camera }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveGalleryTab(tab.id as any)}
                    className={cn(
                      "flex items-center gap-3 px-8 py-4 rounded-3xl text-sm font-bold whitespace-nowrap transition-all border",
                      activeGalleryTab === tab.id 
                        ? "bg-white text-black border-white" 
                        : "bg-white/5 text-white/40 border-white/10 hover:border-white/30"
                    )}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGalleryTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {clinic.gallery[activeGalleryTab].length > 0 ? (
                    clinic.gallery[activeGalleryTab].map((img, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => {
                          setSelectedImage(img);
                          setIsLightboxOpen(true);
                        }}
                        className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group cursor-zoom-in"
                      >
                        <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Gallery" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <Maximize2 className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all" />
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full py-32 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-[4rem] bg-white/[0.02] backdrop-blur-sm">
                       <Camera className="w-12 h-12 text-white/5 mb-6" />
                       <p className="text-white/20 text-xl font-light italic tracking-tight">Registro visual en proceso...</p>
                       <p className="text-white/[0.05] text-[10px] uppercase font-bold tracking-[0.3em] mt-4">Bieneq Media Team</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Interactive Booking Configurator */}
          <div className="lg:col-span-12 xl:col-span-5">
            <div className="sticky top-32 space-y-8">
              <div className="p-12 rounded-[5rem] bg-white/5 border border-white/10 backdrop-blur-3xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-12 overflow-hidden pointer-events-none opacity-10">
                  <Sparkles className="w-64 h-64 text-bieneq-green rotate-12" />
                </div>

                <div className="space-y-12">
                  <div className="text-center">
                    {/* Scarcity Indicator */}
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-[10px] font-bold uppercase tracking-widest mb-6"
                    >
                      <Users className="w-3 h-3" /> Solo quedan {clinic.spots.left} lugares disponibles
                    </motion.div>
                    
                    <div className="inline-block px-4 py-1.5 bg-bieneq-green/10 border border-bieneq-green/20 rounded-full text-bieneq-green text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Pase de Inmersión</div>
                    <h3 className="text-5xl font-heading font-bold text-white mb-2 leading-none">Reserva 🎟️</h3>
                    <p className="text-white/40 text-sm font-light">Configura tu experiencia académica</p>
                  </div>

                  <AnimatePresence mode="wait">
                    {step === 0 ? (
                      <motion.div
                        key="step0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-12"
                      >
                        {/* Tier Selection */}
                        <div className="space-y-4">
                          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] ml-4">Nivel de Participación</p>
                          <div className="grid grid-cols-2 gap-4">
                            {clinic.tiers.map((tier, idx) => (
                              <button
                                key={idx}
                                onClick={() => setSelectedTier(idx)}
                                className={cn(
                                  "p-6 rounded-[2.5rem] border transition-all text-center relative overflow-hidden group",
                                  selectedTier === idx 
                                    ? "bg-white text-black border-white shadow-xl" 
                                    : "bg-white/5 text-white/40 border-white/10 hover:border-white/30"
                                )}
                              >
                                <span className="relative z-10 text-base font-bold block mb-1">{tier.name}</span>
                                <span className={cn("relative z-10 text-xs font-light block", selectedTier === idx ? "text-black/60" : "text-white/20")}>
                                  ${tier.price.toLocaleString()}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Addons Selection */}
                        <div className="space-y-6">
                          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] ml-4">Servicios VIP Opcionales</p>
                          <div className="grid gap-5">
                            {clinic.addons.map((addon) => (
                              <button
                                key={addon.id}
                                onClick={() => toggleAddon(addon.id)}
                                className={cn(
                                  "flex items-center justify-between p-6 rounded-[2.5rem] border transition-all text-left group",
                                  selectedAddons.includes(addon.id)
                                    ? "bg-bieneq-green/10 border-bieneq-green/50"
                                    : "bg-white/5 border-white/10 hover:border-white/20"
                                )}
                              >
                                <div className="flex items-center gap-5">
                                  <div className={cn(
                                    "w-14 h-14 rounded-[1.5rem] flex items-center justify-center transition-all",
                                    selectedAddons.includes(addon.id) ? "bg-bieneq-green text-black shadow-lg" : "bg-white/5 text-white/40"
                                  )}>
                                    {addon.icon === 'Plane' && <Plane className="w-6 h-6" />}
                                    {addon.icon === 'Bed' && <Bed className="w-6 h-6" />}
                                  </div>
                                  <div>
                                    <p className="font-bold text-white group-hover:text-bieneq-green transition-colors text-lg">{addon.name}</p>
                                    <p className="text-xs text-white/30 font-light">{addon.description}</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                   <span className={cn(
                                      "font-bold text-sm block",
                                      selectedAddons.includes(addon.id) ? "text-bieneq-green" : "text-white/20"
                                    )}>
                                      +${addon.price.toLocaleString()}
                                    </span>
                                    <div className={cn(
                                      "w-4 h-4 rounded-full border-2 border-white/10 mt-2 mx-auto transition-colors",
                                      selectedAddons.includes(addon.id) && "bg-bieneq-green border-bieneq-green"
                                    )} />
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Summary Step 0 */}
                        <div className="pt-10 border-t border-white/10">
                           <div className="flex justify-between items-end mb-10 px-4">
                              <div className="space-y-1">
                                <p className="text-xs text-white/30 uppercase tracking-[0.2em] font-bold">Total Final</p>
                                <div className="flex items-center gap-2 text-bieneq-green">
                                  <Utensils className="w-3.5 h-3.5" />
                                  <p className="text-[10px] font-bold uppercase tracking-widest">Lunch Incluido 🍽️</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <AnimatePresence mode="wait">
                                  <motion.p 
                                    key={totalPrice}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-6xl font-heading font-bold text-white tracking-tighter leading-none mb-1"
                                  >
                                    ${totalPrice.toLocaleString()}
                                  </motion.p>
                                </AnimatePresence>
                                <p className="text-[10px] text-white/20 uppercase font-bold tracking-widest">Moneda: MXN</p>
                              </div>
                           </div>

                           <Magnetic strength={0.3}>
                             <button 
                               onClick={() => setStep(1)}
                               className="w-full h-24 bg-white text-black font-extrabold uppercase tracking-widest rounded-[2.5rem] flex items-center justify-between px-10 hover:bg-bieneq-green transition-all group active:scale-[0.98] overflow-hidden shadow-[0_20px_60px_rgba(255,255,255,0.1)]"
                             >
                                <span className="text-base">Continuar Registro</span>
                                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                                  <ArrowRight className="w-5 h-5" />
                                </div>
                             </button>
                           </Magnetic>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-10"
                      >
                        <button 
                          onClick={() => setStep(0)}
                          className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4 hover:text-white transition-colors"
                        >
                          <ChevronDown className="w-3 h-3 rotate-90" /> Volver a selección
                        </button>

                        <div className="space-y-6">
                           <div className="relative">
                              <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                              <input 
                                type="text" 
                                placeholder="Nombre Completo"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full h-20 bg-white/5 border border-white/10 rounded-3xl pl-16 pr-6 text-sm focus:border-bieneq-green outline-none transition-colors"
                              />
                           </div>

                           <div className="relative">
                              <MessageSquare className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                              <input 
                                type="tel" 
                                placeholder="WhatsApp / Celular"
                                value={formData.whatsapp}
                                onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                                className="w-full h-20 bg-white/5 border border-white/10 rounded-3xl pl-16 pr-6 text-sm focus:border-bieneq-green outline-none transition-colors"
                              />
                           </div>

                           <div className="relative">
                              <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                              <input 
                                type="text" 
                                placeholder="Ciudad / Estado"
                                value={formData.city}
                                onChange={(e) => setFormData({...formData, city: e.target.value})}
                                className="w-full h-20 bg-white/5 border border-white/10 rounded-3xl pl-16 pr-6 text-sm focus:border-bieneq-green outline-none transition-colors"
                              />
                           </div>

                           <div className="relative group">
                              <Gauge className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                              <select 
                                value={formData.experience}
                                onChange={(e) => setFormData({...formData, experience: e.target.value})}
                                className="w-full h-20 bg-white/5 border border-white/10 rounded-3xl pl-16 pr-12 text-sm focus:border-bieneq-green outline-none transition-colors appearance-none cursor-pointer"
                              >
                                <option value="principiante" className="bg-[#0a0a0a]">Nivel: Principiante</option>
                                <option value="intermedio" className="bg-[#0a0a0a]">Nivel: Intermedio</option>
                                <option value="profesional" className="bg-[#0a0a0a]">Nivel: Profesional</option>
                              </select>
                              <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none group-focus-within:rotate-180 transition-transform" />
                           </div>
                        </div>

                        <div className="pt-6">
                           <Magnetic strength={0.3}>
                             <button 
                               disabled={!formData.name || !formData.whatsapp}
                               onClick={handleRegistration}
                               className="w-full h-24 bg-bieneq-green text-black font-extrabold uppercase tracking-widest rounded-[2.5rem] flex items-center justify-between px-10 hover:bg-white shadow-[0_20px_60px_rgba(34,197,94,0.3)] transition-all group active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                             >
                                <div className="flex items-center gap-4">
                                  <WhatsAppIcon className="w-8 h-8" />
                                  <span className="text-base">Confirmar Registro</span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                                  <ArrowRight className="w-5 h-5" />
                                </div>
                             </button>
                           </Magnetic>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Certificate Badge Card */}
              <div className="p-10 rounded-[4rem] bg-gradient-to-br from-bieneq-green/20 to-[#020202] border border-bieneq-green/30 overflow-hidden relative group">
                <BorderBeam size={200} duration={8} colorFrom="#16a34a" colorTo="#84cc16" />
                <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <Trophy className="w-48 h-48 text-bieneq-green" />
                </div>
                <div className="relative z-10 flex items-start gap-6">
                   <div className="w-14 h-14 rounded-2xl bg-bieneq-green/20 flex items-center justify-center border border-bieneq-green/30">
                      <ShieldCheck className="w-7 h-7 text-bieneq-green" />
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold text-white mb-2">Certificación VIP</h4>
                     <p className="text-white/40 text-sm leading-relaxed max-w-[200px]">Incluye certificado oficial académico con validez curricular.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section (Infinite Marquee) */}
        <section className="mb-40 space-y-16 overflow-hidden -mx-6 lg:-mx-12">
           <ScrollReveal>
             <div className="text-center space-y-4 px-6 lg:px-12">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tighter">Voces de la <br /> <span className="text-bieneq-green italic font-light">Comunidad Bieneq.</span></h2>
                <p className="text-white/40 text-sm max-w-lg mx-auto">Lo que dicen nuestros alumnos después de vivir la inmersión total en el sistema Barefoot.</p>
             </div>
           </ScrollReveal>

           <div className="relative">
              {/* Gradient masks for seamless fading */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none" />

              <div className="flex group">
                <motion.div 
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{ 
                    duration: 50, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="flex gap-8 px-4 flex-nowrap"
                >
                  {/* First set of testimonials */}
                  {[...clinic.testimonials, ...clinic.testimonials].map((t, i) => (
                    <div 
                      key={i}
                      className="w-[450px] shrink-0 p-12 rounded-[4rem] bg-white/5 border border-white/10 relative overflow-hidden group/card hover:bg-white/[0.08] transition-all"
                    >
                      <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover/card:scale-110 transition-transform duration-700">
                        <Trophy className="w-48 h-48 text-white" />
                      </div>
                      <div className="flex gap-2 mb-8">
                        {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 text-bieneq-yellow fill-current" />)}
                      </div>
                      <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light italic mb-10 tracking-tight line-clamp-4">"{t.content}"</p>
                      <div className="flex items-center gap-4 mt-auto">
                        <img src={t.image} className="w-16 h-16 rounded-2xl object-cover border-2 border-bieneq-green/30" alt={t.name} />
                        <div>
                          <p className="font-bold text-white whitespace-nowrap">{t.name}</p>
                          <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
                
                {/* Second set for seamless loop - duplicate the first set fully */}
                <motion.div 
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{ 
                    duration: 50, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="flex gap-8 px-4 flex-nowrap"
                >
                  {[...clinic.testimonials, ...clinic.testimonials].map((t, i) => (
                    <div 
                      key={i + 100}
                      className="w-[450px] shrink-0 p-12 rounded-[4rem] bg-white/5 border border-white/10 relative overflow-hidden group/card hover:bg-white/[0.08] transition-all"
                    >
                      <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover/card:scale-110 transition-transform duration-700">
                        <Trophy className="w-48 h-48 text-white" />
                      </div>
                      <div className="flex gap-2 mb-8">
                        {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 text-bieneq-yellow fill-current" />)}
                      </div>
                      <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light italic mb-10 tracking-tight line-clamp-4">"{t.content}"</p>
                      <div className="flex items-center gap-4 mt-auto">
                        <img src={t.image} className="w-16 h-16 rounded-2xl object-cover border-2 border-bieneq-green/30" alt={t.name} />
                        <div>
                          <p className="font-bold text-white whitespace-nowrap">{t.name}</p>
                          <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
           </div>
        </section>

        {/* Global Bento Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-40">
           {[
             { title: "Metodología", desc: "Sistema Barefoot de 7 puntos.", icon: Star, color: "text-bieneq-yellow" },
             { title: "Alimentación", desc: "Catering premium incluido.", icon: Utensils, color: "text-bieneq-green" },
             { title: "Comunidad VIP", desc: "Grupo exclusivo de seguimiento.", icon: Sparkles, color: "text-blue-400" },
             { title: "Especialización", desc: "16 horas de técnica pura.", icon: Clock, color: "text-red-400" }
           ].map((item, i) => (
             <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all relative overflow-hidden group"
             >
                <div className={cn("inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 mb-8 transition-transform group-hover:scale-110 group-hover:rotate-6", item.color)}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h5 className="text-xl font-bold text-white mb-3">{item.title}</h5>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </div>

        {/* Inclusions & Requirements Section */}
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-16 bg-white/5 rounded-[5rem] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-bieneq-green/5 blur-[100px] pointer-events-none" />
            
            <div className="space-y-12">
              <h4 className="text-3xl font-heading font-bold text-white flex items-center gap-4">
                <CheckCircle2 className="w-8 h-8 text-bieneq-green" /> Garantía de Inmersión
              </h4>
              <div className="grid gap-8">
                {clinic.inclusions.map((inc, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-bieneq-green mt-2 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(34,197,94,1)]" />
                    <p className="text-lg text-white/50 group-hover:text-white transition-colors">{inc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <h4 className="text-3xl font-heading font-bold text-white flex items-center gap-4">
                <Info className="w-8 h-8 text-bieneq-yellow" /> ¿Qué necesitas?
              </h4>
              <div className="grid gap-8">
                {clinic.requirements.map((req, i) => (
                  <div key={i} className="flex items-center gap-5 p-6 rounded-3xl bg-black/40 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xs font-bold text-white/20">0{i+1}</div>
                    <p className="text-white/60 font-medium tracking-tight">{req}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Premium Image Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button 
              className="absolute top-8 right-8 p-4 text-white/50 hover:text-white transition-colors"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src={selectedImage}
              className="max-w-full max-h-[85vh] object-contain rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/10"
              alt="Clinic View Expanded"
            />
            <div className="absolute bottom-12 px-8 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-widest">
              Vista Inmersiva Bieneq
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
