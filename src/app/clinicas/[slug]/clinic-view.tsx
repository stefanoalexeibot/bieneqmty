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
  ChevronDown
} from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";
import { Magnetic } from "@/components/ui/magnetic";
import { ScrollReveal, RevealItem } from "@/components/animations/scroll-reveal";

export default function ClinicView({ clinic }: { clinic: Clinic }) {
  const [selectedTier, setSelectedTier] = useState<number>(1); // Default to Practicante
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const [activeGalleryTab, setActiveGalleryTab] = useState<"theory" | "practice" | "installations">("theory");

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
      `👋 *Interés en Clínica - BieneqMty*\n` +
      `-------------------------------\n` +
      `📌 *Evento:* ${clinic.name}\n` +
      `🗓️ *Fecha:* ${clinic.date}\n` +
      `💎 *Nivel elegido:* ${tier.name} ($${tier.price.toLocaleString()})${addonsText}\n` +
      `-------------------------------\n` +
      `💰 *Total Estimado:* $${totalPrice.toLocaleString()} MXN\n` +
      `-------------------------------\n` +
      `Quisiera agendar mi lugar y recibir los detalles de pago.\n\n` +
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
                  <p className="text-white/30 text-xs font-bold uppercase tracking-widest">Inmersión Técnica 10 AM - 6 PM</p>
                </div>
                <div className="flex bg-black/40 p-1 rounded-2xl border border-white/10">
                  {[1, 2].map((day) => (
                    <button 
                      key={day}
                      onClick={() => setActiveDay(day as 1|2)}
                      className={cn(
                        "px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all",
                        activeDay === day ? "bg-white text-black" : "text-white/40 hover:text-white"
                      )}
                    >
                      Día 0{day}
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
                    {(activeDay === 1 ? clinic.schedule.day1 : clinic.schedule.day2).map((item, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx} 
                        className="relative"
                      >
                        <div className={cn(
                          "absolute -left-11 top-0 w-6 h-6 rounded-full border-4 border-[#020202] transition-colors z-10",
                          item.time.includes("Lunch") ? "bg-bieneq-yellow shadow-[0_0_15px_rgba(234,179,8,0.5)]" : "bg-bieneq-green shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                        )} />
                        <div className="group p-6 rounded-3xl hover:bg-white/5 transition-colors">
                          <span className="text-bieneq-green font-mono text-sm mb-2 block font-bold tracking-widest">{item.time}</span>
                          <h4 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">{item.title}</h4>
                          <p className="text-white/40 text-sm leading-relaxed max-w-lg">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

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
                  {clinic.gallery[activeGalleryTab].map((img, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group"
                    >
                      <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Gallery" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
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
                    <div className="inline-block px-4 py-1.5 bg-bieneq-green/10 border border-bieneq-green/20 rounded-full text-bieneq-green text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Pase de Inmersión</div>
                    <h3 className="text-5xl font-heading font-bold text-white mb-2 leading-none">Reserva 🎟️</h3>
                    <p className="text-white/40 text-sm font-light">Configura tu experiencia académica</p>
                  </div>

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

                  {/* Final Calculation */}
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

                     <div className="space-y-6">
                        <Magnetic strength={0.2}>
                          <button 
                            onClick={handleRegistration}
                            className="w-full py-7 bg-bieneq-green text-black font-extrabold uppercase tracking-widest rounded-[2rem] flex items-center justify-center gap-4 hover:bg-white shadow-[0_20px_60px_rgba(34,197,94,0.3)] transition-all group active:scale-95"
                          >
                            Agendar por WhatsApp <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                          </button>
                        </Magnetic>
                        <div className="flex items-center justify-center gap-3 text-white/20">
                          <ShieldCheck className="w-4 h-4" />
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Respaldo Bieneq & Certificado 🏆</p>
                        </div>
                     </div>
                  </div>
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
    </main>
  );
}
