"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Daniela Morales",
    location: "San Pedro Garza García, NL",
    result: "Mi yegua Canela dejó de cojear en 6 semanas.",
    duration: "0:42",
    img: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&q=80",
    color: "#22c55e",
  },
  {
    id: 2,
    name: "Rodrigo Elizondo",
    location: "Saltillo, Coahuila",
    result: "Laminitis crónica resuelta. Increíble la diferencia.",
    duration: "1:15",
    img: "https://images.unsplash.com/photo-1506795660198-e95c77602129?w=400&q=80",
    color: "#eab308",
  },
  {
    id: 3,
    name: "Ana Sofía Treviño",
    location: "Monterrey, NL",
    result: "Las herramientas son de otro nivel. Mi trabajo mejoró 100%.",
    duration: "0:58",
    img: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=400&q=80",
    color: "#b45309",
  },
  {
    id: 4,
    name: "Francisco Garza",
    location: "Linares, NL",
    result: "Llevé a mi caballo al barefoot y ya no hay cómo parar.",
    duration: "1:30",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
    color: "#22c55e",
  },
  {
    id: 5,
    name: "Valeria Cantú",
    location: "García, NL",
    result: "El curso en línea fue transformador para mi práctica.",
    duration: "2:05",
    img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&q=80",
    color: "#eab308",
  },
];

function VideoCard({ testimonial, isPaused }: { testimonial: typeof testimonials[0]; isPaused: boolean }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative shrink-0 w-[220px] md:w-[260px] aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer group border border-white/10 bg-black shadow-2xl"
      onClick={() => setPlaying(!playing)}
      style={{ boxShadow: `0 30px 60px ${testimonial.color}22` }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${testimonial.img})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Top badge */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: testimonial.color }} />
        <span className="text-xs font-mono text-white/80">{testimonial.duration}</span>
      </div>

      {/* Play/Pause button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {playing ? (
            <Pause className="w-5 h-5 text-white fill-white" />
          ) : (
            <Play className="w-5 h-5 text-white fill-white ml-1" />
          )}
        </motion.div>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 w-full p-5 z-10">
        <Quote className="w-4 h-4 mb-2" style={{ color: testimonial.color }} />
        <p className="text-sm font-medium text-white/90 mb-3 leading-snug">
          &ldquo;{testimonial.result}&rdquo;
        </p>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white/20" />
          <div>
            <p className="text-xs font-bold text-white">{testimonial.name}</p>
            <p className="text-[10px] text-white/50">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function VideoTestimonials() {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const CARD_WIDTH = 280;
  const TOTAL_WIDTH = CARD_WIDTH * testimonials.length;

  useAnimationFrame((_, delta) => {
    if (paused) return;
    const current = x.get();
    const next = current - delta * 0.04;
    x.set(next <= -TOTAL_WIDTH ? 0 : next);
  });

  return (
    <section className="relative w-full bg-[#020202] py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-bieneq-green/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <h2 className="text-sm font-semibold text-bieneq-green tracking-widest uppercase mb-4">
          Lo que dicen nuestros clientes
        </h2>
        <h3 className="text-4xl md:text-5xl font-heading font-semibold text-white">
          Resultados que hablan solos.
        </h3>
      </div>

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left + right fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020202] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020202] to-transparent z-10" />

        <motion.div
          style={{ x }}
          className="flex gap-5 w-max px-12"
        >
          {/* Double the list for seamless loop */}
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <VideoCard key={`${t.id}-${i}`} testimonial={t} isPaused={paused} />
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 text-center">
        <p className="text-white/40 text-sm">
          Pasa el mouse para pausar • Haz clic para reproducir
        </p>
      </div>
    </section>
  );
}
