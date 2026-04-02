"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// NOTE: These are placeholder images — replace with real photos from José Manuel
const hoovesGallery = [
  { id: 1, before: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80", after: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=600&q=80", title: "Rehabilitación 6 semanas", caption: "Laminitis crónica resuelta" },
  { id: 2, before: "https://images.unsplash.com/photo-1506795660198-e95c77602129?w=600&q=80", after: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80", title: "Transición Barefoot", caption: "Casco desviado corregido en 3 meses" },
  { id: 3, before: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=80", after: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80", title: "Casco plano severo", caption: "Arco palmar restaurado" },
  { id: 4, before: "https://images.unsplash.com/photo-1535083783855-aabecc5e67db?w=600&q=80", after: "https://images.unsplash.com/photo-1506795660198-e95c77602129?w=600&q=80", title: "Talones contraídos", caption: "Expansión total en 4 semanas" },
];

const clinicsGallery = [
  { id: 1, img: "https://images.unsplash.com/photo-1535083783855-aabecc5e67db?w=800&q=80", title: "Clínica Enero 2025 — Monterrey" },
  { id: 2, img: "https://images.unsplash.com/photo-1506795660198-e95c77602129?w=800&q=80", title: "Taller Herramientas — Saltillo" },
  { id: 3, img: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80", title: "Módulo Biomecánica — Monterrey" },
  { id: 4, img: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=800&q=80", title: "Clínica Barefoot — Linares" },
  { id: 5, img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", title: "Formación Podología — Monterrey" },
  { id: 6, img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80", title: "Taller Avanzado — García NL" },
];

const generalGallery = [
  ...clinicsGallery,
  { id: 7, img: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80", title: "Herramientas BieneqMty" },
  { id: 8, img: "https://images.unsplash.com/photo-1506795660198-e95c77602129?w=800&q=80", title: "Kit Élite de Podología" },
];

const tabs = [
  { id: "cascos", label: "Cascos — Antes & Después" },
  { id: "clinicas", label: "Clínicas & Cursos" },
  { id: "general", label: "Galería General" },
];

function HoofCard({ item }: { item: typeof hoovesGallery[0] }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 cursor-pointer"
      onClick={() => setShowAfter(!showAfter)}
    >
      <div className="relative aspect-square overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={showAfter ? "after" : "before"}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${showAfter ? item.after : item.before})` }}
          />
        </AnimatePresence>
        
        {/* Toggle pill */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <button
            onClick={(e) => { e.stopPropagation(); setShowAfter(false); }}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${!showAfter ? "bg-white text-black" : "bg-white/20 text-white"}`}
          >
            ANTES
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setShowAfter(true); }}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${showAfter ? "bg-bieneq-green text-black" : "bg-white/20 text-white"}`}
          >
            DESPUÉS
          </button>
        </div>
      </div>

      <div className="p-5">
        <h4 className="text-white font-semibold">{item.title}</h4>
        <p className="text-white/50 text-sm mt-1">{item.caption}</p>
      </div>
    </motion.div>
  );
}

function ImageGrid({ images }: { images: typeof clinicsGallery }) {
  return (
    <div className="columns-2 md:columns-3 gap-4 space-y-4">
      {images.map((img, i) => (
        <motion.div
          key={img.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="relative break-inside-avoid rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
        >
          <div
            className="w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url(${img.img})`,
              height: i % 3 === 1 ? "350px" : "250px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <p className="text-white text-sm font-medium">{img.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function GaleriaPage() {
  const [activeTab, setActiveTab] = useState("cascos");

  return (
    <main className="min-h-screen pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-semibold text-white mb-4">
            Galería
          </h1>
          <p className="text-white/60 text-xl max-w-2xl">
            Evidencia real de rehabilitaciones, clínicas presenciales y el trabajo de BieneqMty en campo.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 flex-wrap mb-12 border-b border-white/10 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-bieneq-green text-black"
                  : "text-white/60 hover:text-white bg-white/5 border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === "cascos" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hoovesGallery.map((item) => (
                  <HoofCard key={item.id} item={item} />
                ))}
              </div>
            )}

            {activeTab === "clinicas" && <ImageGrid images={clinicsGallery} />}

            {activeTab === "general" && <ImageGrid images={generalGallery} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
