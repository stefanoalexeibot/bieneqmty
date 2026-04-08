"use client";

import { Clinic, ClinicTier } from "@/lib/clinics";
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
  Camera
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";
import { Magnetic } from "@/components/ui/magnetic";
import { ScrollReveal, RevealItem } from "@/components/animations/scroll-reveal";

export default function ClinicView({ clinic }: { clinic: Clinic }) {
  const [selectedTier, setSelectedTier] = useState<number>(1); // Default to Practicante

  const WHATSAPP_NUMBER = "5218134179632";

  const handleRegistration = () => {
    const tier = clinic.tiers[selectedTier];
    const text = encodeURIComponent(
      `👋 *Interés en Clínica - BieneqMty*\n` +
      `-------------------------------\n` +
      `📌 *Evento:* ${clinic.name}\n` +
      `🗓️ *Fecha:* ${clinic.date}\n` +
      `💎 *Nivel elegido:* ${tier.name} ($${tier.price.toLocaleString()})\n` +
      `-------------------------------\n` +
      `Quisiera recibir más información sobre cómo apartar mi lugar y los detalles de pago.\n\n` +
      `_Enviado desde el sitio web bieneqmty.com_`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] pb-32 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${clinic.featuredImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <RevealItem>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-bieneq-green/10 border border-bieneq-green/20 rounded-full text-bieneq-green text-xs font-bold uppercase tracking-[0.2em] mb-8">
                <Sparkles className="w-3 h-3" /> Evento Exclusivo
              </span>
            </RevealItem>
            <RevealItem>
              <h1 className="text-5xl md:text-8xl font-heading font-bold text-white mb-8 tracking-tighter">
                {clinic.name}
              </h1>
            </RevealItem>
            <RevealItem>
              <div className="flex flex-wrap justify-center gap-8 text-white/60 mb-12">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-bieneq-green" />
                  <span className="text-lg font-light">{clinic.fullDate}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-bieneq-green" />
                  <span className="text-lg font-light">{clinic.location}</span>
                </div>
              </div>
            </RevealItem>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-20 relative z-20">
        {/* Summary Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="md:col-span-2 p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
            <BorderBeam size={400} duration={15} colorFrom="#16a34a" colorTo="#84cc16" />
            <h2 className="text-3xl font-bold text-white mb-6">Sobre la experiencia</h2>
            <p className="text-white/60 text-xl leading-relaxed font-light italic">
              "{clinic.longDescription}"
            </p>
          </div>
          <div className="p-12 rounded-[3rem] bg-bieneq-green text-black flex flex-col justify-between">
            <Users className="w-12 h-12 mb-8" />
            <div>
              <p className="text-sm font-bold uppercase tracking-widest opacity-60 mb-2">Disponibilidad</p>
              <p className="text-4xl font-heading font-bold leading-tight">Cupo Limitado por sesión</p>
            </div>
          </div>
        </div>

        {/* Syllabus / Curriculum */}
        <div className="mb-32">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">¿Qué aprenderás?</h3>
              <p className="text-white/40 max-w-xl">Un recorrido técnico desde la base anatómica hasta la resolución de patologías complejas.</p>
            </div>
            <div className="hidden md:block">
              <span className="text-6xl font-heading font-bold text-white/5 tracking-tighter">CURRICULUM</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clinic.syllabus.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-white/10 transition-all flex gap-6 group"
              >
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-bieneq-green font-bold text-xl">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-bieneq-green transition-colors">{item.title}</h4>
                  <p className="text-white/40 leading-relaxed text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Installations Gallery */}
        <div className="mb-32">
           <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Camera className="w-5 h-5 text-bieneq-green" />
            </div>
            <h3 className="text-3xl font-bold text-white uppercase tracking-tighter">Nuestras Instalaciones</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px]">
            <div className="relative rounded-[3rem] overflow-hidden group">
              <img src={clinic.installations[0]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="grid grid-rows-2 gap-8">
               <div className="relative rounded-[3rem] overflow-hidden group">
                <img src={clinic.installations[1]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="relative rounded-[3rem] bg-white/5 border border-white/10 p-12 flex flex-col justify-center overflow-hidden">
                 <BorderBeam size={200} duration={10} colorFrom="#16a34a" colorTo="#84cc16" />
                 <h4 className="text-2xl font-bold text-white mb-4">Entorno Controlado</h4>
                 <p className="text-white/40">Áreas diseñadas para que el caballo se sienta seguro while you learn high-performance techniques.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Matrix */}
        <div className="relative">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-bieneq-green/10 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Elige tu nivel</h2>
            <div className="flex justify-center p-1 bg-white/5 rounded-full border border-white/10 w-fit mx-auto">
              {clinic.tiers.map((tier, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTier(idx)}
                  className={cn(
                    "px-10 py-3 rounded-full text-sm font-bold transition-all duration-500",
                    selectedTier === idx ? "bg-bieneq-green text-black shadow-[0_0_30px_rgba(34,197,94,0.3)]" : "text-white/40 hover:text-white"
                  )}
                >
                  {tier.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Benefits List */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">¿Qué incluye el pase {clinic.tiers[selectedTier].name}?</h3>
              <div className="grid gap-4">
                {clinic.tiers[selectedTier].includes.map((incl, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-bieneq-green" />
                    <span className="text-white/80">{incl}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Price Card */}
            <motion.div 
              key={selectedTier}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 rounded-[4rem] bg-gradient-to-br from-white/10 to-transparent border border-white/20 backdrop-blur-3xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                <ShieldCheck className="w-12 h-12 text-bieneq-green/20" />
              </div>
              
              <p className="text-bieneq-green font-bold uppercase tracking-[0.3em] text-xs mb-4">Inversión Recomendada</p>
              <h4 className="text-7xl font-heading font-bold text-white mb-2">
                ${clinic.tiers[selectedTier].price.toLocaleString()}
                <span className="text-xl text-white/40 font-light italic ml-2">MXN</span>
              </h4>
              <p className="text-white/40 mb-12">{clinic.tiers[selectedTier].description}</p>
              
              <div className="space-y-4">
                <Magnetic strength={0.2}>
                  <button 
                    onClick={handleRegistration}
                    className="w-full py-6 bg-white text-black font-bold uppercase tracking-widest rounded-3xl flex items-center justify-center gap-4 hover:bg-bieneq-green transition-all group"
                  >
                    Inscribirme Ahora <WhatsAppIcon className="w-5 h-5" />
                  </button>
                </Magnetic>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Reserva con el 50% vía WhatsApp</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Global Inclusions & Requirements */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 p-12 bg-white/5 rounded-[3rem] border border-white/10">
          <div>
            <h5 className="text-xl font-bold text-white mb-8 border-l-4 border-bieneq-green pl-6 italic">Garantía Bieneq</h5>
            <div className="grid gap-6">
              {clinic.inclusions.map((inc, i) => (
                <div key={i} className="flex items-start gap-4">
                  <Star className="w-4 h-4 text-bieneq-green mt-1 shrink-0" />
                  <p className="text-sm text-white/60 leading-relaxed">{inc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 bg-black/40 rounded-3xl border border-white/5">
             <h5 className="text-xl font-bold text-white mb-8 italic">Requisitos</h5>
             <div className="grid gap-6">
              {clinic.requirements.map((req, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-bieneq-green" />
                  <p className="text-sm text-white/60">{req}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function WhatsAppIcon(props: any) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
