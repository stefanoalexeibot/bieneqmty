"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ComparisonSlider } from "@/components/ui/comparison-slider";
import { OutlineText } from "@/components/ui/outline-text";
import { GradientText } from "@/components/ui/gradient-text";
import { cn } from "@/lib/utils";

// Case Studies Data
const hoofCases = [
  { 
    id: 1, 
    before: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1000&q=80", 
    after: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=1000&q=80", 
    title: "Rehabilitación Laminitis", 
    desc: "Recuperación de la concavidad y muralla en 6 semanas de tratamiento intensivo." 
  },
  { 
    id: 2, 
    before: "https://images.unsplash.com/photo-1506795660198-e95c77602129?w=1000&q=80", 
    after: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=80", 
    title: "Transición Barefoot", 
    desc: "De herrado tradicional a funcionalidad completa sin protección metálica." 
  }
];

const clinics = [
  { id: 1, img: "https://images.unsplash.com/photo-1535083783855-aabecc5e67db?w=800&q=80", title: "Clínica Teórica — NL", size: "tall" },
  { id: 2, img: "https://images.unsplash.com/photo-1506795660198-e95c77602129?w=800&q=80", title: "Certificación Pro", size: "small" },
  { id: 3, img: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80", title: "Taller de Forja", size: "wide" },
  { id: 4, img: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=800&q=80", title: "Manejo Etológico", size: "small" },
  { id: 5, img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", title: "Biomecánica de Campo", size: "tall" },
  { id: 6, img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80", title: "Clínica Internacional", size: "small" },
];

const tabs = [
  { id: "cascos", label: "Evidencia de Cascos" },
  { id: "clinicas", label: "Cursos & Clínicas" }
];

export default function GaleriaPage() {
  const [activeTab, setActiveTab] = useState("cascos");

  return (
    <main className="min-h-screen bg-[#020202] text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bieneq-green/5 blur-[150px] rounded-full -z-10" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter mb-8 leading-none">
            <OutlineText text="Galería de" strokeColor="rgba(255,255,255,0.2)" className="text-white" /> <br />
            <GradientText variant="green">Resultados.</GradientText>
          </h1>
          <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            Documentación visual de nuestra metodología Barefoot y formación técnica especializada.
          </p>
        </motion.div>
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
              <div className="flex flex-col gap-24 md:gap-32">
                {hoofCases.map((item, i) => (
                  <div key={item.id} className={cn(
                    "flex flex-col gap-12 items-center",
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  )}>
                    <div className="w-full lg:w-7/12">
                      <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                        <ComparisonSlider 
                          beforeImage={item.before} 
                          afterImage={item.after}
                          beforeLabel="Problema Inicial"
                          afterLabel="Resultado Bieneq"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-5/12 space-y-6">
                      <span className="text-bieneq-green font-bold text-sm tracking-widest uppercase">Caso No. {item.id}</span>
                      <h3 className="text-4xl font-heading font-bold text-white">{item.title}</h3>
                      <p className="text-lg text-white/50 leading-relaxed font-light">{item.desc}</p>
                      <div className="flex gap-4 pt-4 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                        <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">#Barefoot</span>
                        <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">#Rehabilitación</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
                {clinics.map((img) => (
                  <motion.div
                    key={img.id}
                    className={cn(
                      "relative rounded-3xl overflow-hidden border border-white/10 group cursor-pointer",
                      img.size === "tall" ? "row-span-2" : 
                      img.size === "wide" ? "col-span-2" : ""
                    )}
                  >
                    <img 
                      src={img.img} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      alt={img.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                      <div>
                        <p className="text-xs font-bold text-bieneq-green uppercase tracking-widest mb-1">Clínica Bieneq</p>
                        <p className="text-lg font-bold text-white">{img.title}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
