"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Play, Pause, X, MessageSquare, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { OutlineText } from "@/components/ui/outline-text";

const testimonials = [
  {
    id: 1,
    name: "Alonso Alvarez",
    location: "Apaseo el Grande, GTO",
    result: "Certificado en Clínica de Barefoot 01. La técnica cambió mi perspectiva del bienestar equino.",
    videoUrl: "/content/clinics/clinica-01/videos/alonso-alvarez.mp4",
    img: "/content/clinics/clinica-01/certificates/alonso-alvarez.png",
    tags: ["Certificación", "Barefoot 01"]
  },
  {
    id: 2,
    name: "Antonio Rodriguez",
    location: "Querétaro, MX",
    result: "Una experiencia transformadora. Antonio comparte su testimonio tras completar el curso intensivo.",
    videoUrl: "/content/clinics/clinica-01/videos/antonio-rodriguez.mp4",
    img: "/content/clinics/clinica-01/certificates/antonio-rodriguez.png",
    tags: ["Academia", "Clínica 2023"]
  },
  {
    id: 3,
    name: "Dante Torres",
    location: "Toluca, EdoMex",
    result: "El nivel técnico de BieneqMty es superior. Recomendado para todo profesional del caballo.",
    videoUrl: "/content/clinics/clinica-01/videos/dante-torres.mp4",
    img: "/content/clinics/clinica-01/certificates/dante-torres.png",
    tags: ["Profesional", "Barefoot"]
  },
  {
    id: 4,
    name: "MVZ Ivan Huerta",
    location: "Puebla, MX",
    result: "Como médico veterinario, la evidencia clínica de estos certificados es indispensable.",
    videoUrl: "/content/clinics/clinica-01/videos/ivan-huerta.mp4",
    img: "/content/clinics/clinica-01/certificates/ivan-huerta.png",
    tags: ["Veterinaria", "Certificación"]
  }
];

export function VideoTestimonials() {
  const [activeId, setActiveId] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideo = (url: string) => {
    setSelectedVideo(url);
    setIsModalOpen(true);
  };

  return (
    <section className="relative w-full bg-[#030303] py-24 md:py-48 overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-bieneq-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold text-bieneq-green tracking-[0.3em] uppercase mb-6">
            Casos de Éxito Reales
          </h2>
          <h3 className="text-5xl md:text-7xl font-heading font-bold text-white leading-none">
            Testimonios en <OutlineText text="Video" className="text-white" strokeColor="rgba(255,255,255,0.2)" />
          </h3>
        </motion.div>
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side: Active Testimonial Info */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              {testimonials.map((t) => (
                t.id === activeId && (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="flex flex-col"
                  >
                    <div className="flex gap-2 mb-6">
                      {t.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-white/5 border border-white/10 text-white/40 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <MessageSquare className="w-8 h-8 text-bieneq-green mb-6" />
                    
                    <p className="text-2xl md:text-3xl font-heading text-white leading-tight mb-8">
                      &ldquo;{t.result}&rdquo;
                    </p>
                    
                    <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                      <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden grayscale">
                        <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{t.name}</h4>
                        <p className="text-sm text-white/30">{t.location}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Right Side: Interactive Video Cards */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
              {testimonials.map((t) => (
                <div 
                  key={t.id} 
                  className="snap-center shrink-0 first:pl-0 last:pr-0"
                  onClick={() => setActiveId(t.id)}
                >
                  <motion.div
                    animate={{ 
                      scale: activeId === t.id ? 1 : 0.9,
                      opacity: activeId === t.id ? 1 : 0.4
                    }}
                    className={cn(
                      "relative w-[280px] md:w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden cursor-pointer group border-2 transition-colors duration-500",
                      activeId === t.id ? "border-bieneq-green" : "border-white/10"
                    )}
                  >
                    {/* Background */}
                    <img 
                      src={t.img} 
                      alt={t.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Centered Play Trigger */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          openVideo(t.videoUrl);
                        }}
                        className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] z-20"
                      >
                        <Play className="w-6 h-6 fill-black ml-1" />
                      </motion.button>
                    </div>

                    {/* Bottom info for card */}
                    <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                      <p className="text-xs font-bold text-bieneq-green uppercase tracking-tighter mb-1">Ver Testimonio</p>
                      <p className="text-lg font-bold text-white">{t.name}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setIsModalOpen(false)} />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-white/5 rounded-3xl overflow-hidden border border-white/10 z-[101] shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 z-[102] w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full h-full bg-black">
                {selectedVideo && (
                  <video 
                    src={selectedVideo} 
                    controls 
                    autoPlay 
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
