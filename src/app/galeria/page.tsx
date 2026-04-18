"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ComparisonSlider } from "@/components/ui/comparison-slider";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { GradientText } from "@/components/ui/gradient-text";
import { cn } from "@/lib/utils";
import { ScrollReveal, RevealItem } from "@/components/animations/scroll-reveal";
import { BorderBeam } from "@/components/ui/border-beam";
import { TiltCard } from "@/components/ui/tilt-card";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

// Case Studies Data
const hoofCases = [
  { 
    id: 1, 
    before: "/images/home/wellness/antes.jpg", 
    after: "/images/home/wellness/despues.jpg", 
    title: "Recorte Fisiológico", 
    desc: "Balance digital y recuperación de la profundidad de laguna lateral en una sola sesión de recorte profesional." 
  },
  { 
    id: 2, 
    before: "/images/home/wellness/ai-hoof-before.png", 
    after: "/images/home/wellness/ai-hoof-after.png", 
    title: "Expansión de Talones", 
    desc: "Rehabilitación de un casco contraído (atrotifiado) a un estado funcional con ranilla activa y talones expandidos." 
  },
  { 
    id: 3, 
    before: "/images/home/wellness/rehab-after.jpg", 
    after: "/images/home/wellness/rehab-before.jpg", 
    title: "Rehabilitación Estructural", 
    desc: "Proceso de saneamiento y fortalecimiento de la estructura podal mediante estimulación natural y recorte correctivo." 
  }
];

const clinics = [
  { id: 1, img: "/images/home/wellness/IPPELP - 01.jpg", title: "Certificación 2023 — NL", size: "tall" },
  { id: 3, img: "/images/home/wellness/IPPELP - 03.jpg", title: "Primeros Resultados", size: "wide" },
  { id: 4, img: "/images/home/wellness/IPPELP - 04.jpg", title: "Evaluación Clínica", size: "small" },
  { id: 5, img: "/images/home/wellness/IPPELP - 05.jpg", title: "Práctica de Campo", size: "tall" },
  { id: 13, img: "/images/clinics/junio-2025/INSTALACIONES/INSTALACIONES EXTERIOR.jpeg", title: "Nuestra Sede Monterrey", size: "wide" },
  { id: 6, img: "/images/home/wellness/IPPELP - 06.jpg", title: "Clínica 01 - Octubre", size: "small" },
  { id: 14, img: "/images/clinics/junio-2025/INSTALACIONES/ESTUDIOTEORIA1.jpeg", title: "Sala de Teoría", size: "small" },
  { id: 16, img: "/images/clinics/junio-2025/TEORICO/TEORICO2.jpg", title: "Fundamentos Científicos", size: "small" },
  { id: 7, img: "/images/home/wellness/tampico-02.jpg", title: "Sede Tampico - Anatomía", size: "small" },
  { id: 17, img: "/images/clinics/junio-2025/PRACTICO/PRACTICA3.jpg", title: "Práctica en Pista", size: "wide" },
  { id: 8, img: "/images/home/wellness/tampico-03.jpg", title: "Dinámicas de Grupo", size: "wide" },
  { id: 15, img: "/images/clinics/junio-2025/INSTALACIONES/INSTALACIONES EXT 6.jpeg", title: "Área de Práctica", size: "tall" },
  { id: 9, img: "/images/home/wellness/tampico-04.jpg", title: "Análisis de Aplomos", size: "tall" },
  { id: 10, img: "/images/home/wellness/tampico-05.jpg", title: "Recorte en Vivo", size: "small" },
  { id: 11, img: "/images/home/wellness/tampico-06.jpg", title: "Biomecánica Aplicada", size: "small" },
  { id: 12, img: "/images/home/wellness/DANTE TORRES RECORTANDO - CL01.png", title: "José Manuel en Acción", size: "wide" },
];

const tabs = [
  { id: "cascos", label: "Evidencia de Cascos" },
  { id: "clinicas", label: "Cursos & Clínicas" }
];

export default function GaleriaPage() {
  const [activeTab, setActiveTab] = useState("cascos");

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

  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Decorative Elements & Parallax */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bieneq-green/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-bieneq-green/2 blur-[120px] rounded-full" />
      </motion.div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <ScrollReveal direction="up" staggerChildren={0.15}>
          <RevealItem>
            <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter mb-8 leading-none">
              <ShimmerWord className="text-6xl md:text-8xl">Galería de</ShimmerWord> <br />
              <ShimmerWord className="text-6xl md:text-8xl">Resultados.</ShimmerWord>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
              Documentación visual de nuestra metodología Barefoot y formación técnica especializada.
            </p>
          </RevealItem>
        </ScrollReveal>
      </div>

      {/* Modern Tabs */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="flex justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-8 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all border",
                activeTab === tab.id
                  ? "bg-white text-black border-white"
                  : "bg-white/5 border-white/10 text-white/40 hover:border-white/30"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            {activeTab === "cascos" ? (
              <ScrollReveal className="flex flex-col gap-24 md:gap-32" staggerChildren={0.3}>
                {hoofCases.map((item, i) => (
                  <RevealItem key={item.id}>
                    <div className={cn(
                      "flex flex-col gap-12 items-center",
                      i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    )}>
                      <div className="w-full lg:w-7/12">
                        <TiltCard intensity={10} className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative">
                          <BorderBeam size={400} duration={15} colorFrom="#16a34a" colorTo="#84cc16" />
                          <ComparisonSlider 
                            beforeImage={item.before} 
                            afterImage={item.after}
                            beforeLabel="Problema Inicial"
                            afterLabel="Resultado Bieneq"
                          />
                        </TiltCard>
                      </div>
                      <div className="w-full lg:w-5/12 space-y-6">
                        <span className="text-bieneq-green font-bold text-sm tracking-widest uppercase">Caso No. {item.id}</span>
                        <h3 className="text-4xl font-heading font-bold text-white tracking-tight">{item.title}</h3>
                        <p className="text-lg text-white/50 leading-relaxed font-light">{item.desc}</p>
                        <div className="flex gap-4 pt-4 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                          <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">#Barefoot</span>
                          <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">#Rehabilitación</span>
                        </div>
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </ScrollReveal>
            ) : (
              <ScrollReveal className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]" staggerChildren={0.1}>
                {clinics.map((img) => (
                  <RevealItem
                    key={img.id}
                    className={cn(
                      "relative",
                      img.size === "tall" ? "row-span-2" : 
                      img.size === "wide" ? "col-span-2" : ""
                    )}
                  >
                    <TiltCard className="h-full">
                      <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 group cursor-pointer bg-white/5 backdrop-blur-sm">
                        <BorderBeam size={200} duration={10} colorFrom="#16a34a" colorTo="#84cc16" />
                        <img 
                          src={img.img} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          alt={img.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                          <div>
                            <p className="text-xs font-bold text-bieneq-green uppercase tracking-widest mb-1">Clínica Bieneq</p>
                            <p className="text-lg font-bold text-white">{img.title}</p>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </RevealItem>
                ))}
              </ScrollReveal>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
