"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Play, X, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ShimmerWord } from "@/components/ui/shimmer-word";

// Testimonials — certificate photos from Clinica Barefoot 01
const testimonials = [
  {
    id: 1,
    name: "Alonso Alvarez",
    location: "Apaseo el Grande, GTO",
    result: "Certificado en Clínica de Barefoot 01. La técnica cambió mi perspectiva del bienestar equino.",
    videoId: "ClsvEWI-3CI",
    img: "/images/testimonials/alonso-alvarez.png",
    tags: ["Certificación", "Barefoot 01"]
  },
  {
    id: 2,
    name: "Antonio Rodriguez",
    location: "Parras, Coahuila",
    result: "Una experiencia transformadora. Antonio comparte su testimonio tras completar el curso intensivo.",
    videoId: "QUaaMzjiRB4",
    img: "/images/testimonials/antonio-rodriguez.png",
    tags: ["Academia", "Clínica 2023"]
  },
  {
    id: 3,
    name: "Dante Torres",
    location: "Toluca, EdoMex",
    result: "El nivel técnico de BieneqMty es superior. Recomendado para todo profesional del caballo.",
    videoId: "rM0tBunVGdc",
    img: "/images/testimonials/dante-torres.png",
    tags: ["Profesional", "Barefoot"]
  },
  {
    id: 4,
    name: "MVZ Ivan Huerta",
    location: "Puebla, MX",
    result: "Como médico veterinario, la evidencia clínica de estos certificados es indispensable.",
    videoId: "vI-gKEhcdL8",
    img: "/images/testimonials/ivan-huerta.png",
    tags: ["Veterinaria", "Certificación"]
  }
];

export function VideoTestimonials() {
  const [activeId, setActiveId] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  // Drag-to-scroll refs
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);

  const openVideo = (videoId: string) => {
    setSelectedVideoId(videoId);
    setIsModalOpen(true);
  };

  // ── Mouse drag-to-scroll handlers ──────────────────────────────────────────
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeftRef.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
  }, []);

  const onMouseLeave = useCallback(() => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.5;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  }, []);

  // Arrow navigation
  const scroll = (dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = 288 + 24; // card width + gap
    container.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  // Close modal on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section className="relative w-full bg-transparent py-24 md:py-48 overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-bieneq-green/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
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
            Testimonios en{" "}
            <ShimmerWord>Video</ShimmerWord>
          </h3>
        </motion.div>
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* ── Left: Active Testimonial Info ────────────────────────── */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              {testimonials.map((t) =>
                t.id === activeId ? (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="flex flex-col"
                  >
                    <div className="flex gap-2 mb-6">
                      {t.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-white/5 border border-white/10 text-white/40 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <MessageSquare className="w-8 h-8 text-bieneq-green mb-6" />

                    <p className="text-2xl md:text-3xl font-heading text-white leading-tight mb-8">
                      &ldquo;{t.result}&rdquo;
                    </p>

                    <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                      {/* Avatar: real certificate photo */}
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-bieneq-green/30 shrink-0">
                        <img
                          src={t.img}
                          alt={t.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{t.name}</h4>
                        <p className="text-sm text-white/30">{t.location}</p>
                      </div>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>

          {/* ── Right: Draggable Video Card Carousel ─────────────────── */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2 relative">

            {/* Arrow buttons — desktop only */}
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Scroll container with mouse drag support */}
            <div
              ref={scrollRef}
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
              className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory select-none"
              style={{ cursor: "grab" }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="snap-center shrink-0"
                  onClick={() => setActiveId(t.id)}
                >
                  <motion.div
                    animate={{
                      scale: activeId === t.id ? 1 : 0.9,
                      opacity: activeId === t.id ? 1 : 0.45,
                    }}
                    transition={{ duration: 0.4 }}
                    className={cn(
                      "relative w-[260px] md:w-[288px] aspect-[9/16] rounded-[2rem] overflow-hidden cursor-pointer group border-2 transition-colors duration-500",
                      activeId === t.id ? "border-bieneq-green" : "border-white/10"
                    )}
                  >
                    {/* Real certificate ceremony photo */}
                    <img
                      src={t.img}
                      alt={t.name}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          openVideo(t.videoId);
                        }}
                        className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] z-20"
                      >
                        <Play className="w-6 h-6 fill-black ml-1" />
                      </motion.button>
                    </div>

                    {/* Name tag at bottom */}
                    <div className="absolute bottom-0 left-0 w-full p-5 z-10">
                      <p className="text-[10px] font-bold text-bieneq-green uppercase tracking-[0.15em] mb-1">
                        Ver Testimonio
                      </p>
                      <p className="text-base font-bold text-white leading-tight">{t.name}</p>
                      <p className="text-xs text-white/40 mt-0.5">{t.location}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-2">
              {testimonials.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveId(t.id)}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    activeId === t.id
                      ? "w-6 h-2 bg-bieneq-green"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  )}
                  aria-label={`Ver ${t.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Video Modal (9:16 portrait for Shorts) ──────────────────────── */}
      <AnimatePresence>
        {isModalOpen && selectedVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-3xl overflow-hidden border border-white/10 z-[101] shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-[102] w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&rel=0`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="YouTube video player"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
