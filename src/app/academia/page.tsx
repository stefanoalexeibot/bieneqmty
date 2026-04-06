"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, Clock, BarChart, BookOpen, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { OutlineText } from "@/components/ui/outline-text";
import { GradientText } from "@/components/ui/gradient-text";
import { cn } from "@/lib/utils";
import { ClinicHighlights } from "@/components/sections/clinic-highlights";
import { TiltCard } from "@/components/ui/tilt-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ScrollReveal, RevealItem } from "@/components/animations/scroll-reveal";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const categories = ["Todos", "Barefoot", "Biomecánica", "Rehabilitación", "Herramientas"];

const courses = [
  { 
    id: 1, 
    title: "Fundamentos del Barefoot", 
    duration: "2.5h", 
    level: "Básico", 
    img: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=800&q=80",
    rating: 4.9,
    category: "Barefoot",
    description: "La base teórica para entender el casco sin herraduras."
  },
  { 
    id: 2, 
    title: "Biomecánica Avanzada", 
    duration: "4h", 
    level: "Avanzado", 
    img: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80",
    rating: 5.0,
    category: "Biomecánica",
    description: "Análisis cinemático del movimiento equino."
  },
  { 
    id: 3, 
    title: "Rehabilitación de Laminitis", 
    duration: "5h", 
    level: "Máster", 
    img: "https://images.unsplash.com/photo-1506795660198-e95c77602129?w=800&q=80",
    rating: 4.8,
    category: "Rehabilitación",
    description: "Protocolos clínicos para casos críticos."
  },
  { 
    id: 4, 
    title: "Manejo de Herramientas", 
    duration: "1.5h", 
    level: "Taller", 
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    rating: 4.7,
    category: "Herramientas",
    description: "Afilado y técnica de corte profesional."
  },
  { 
    id: 5, 
    title: "Podología Deportiva", 
    duration: "3h", 
    level: "Intermedio", 
    img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
    rating: 4.9,
    category: "Biomecánica",
    description: "Optimización del rendimiento en salto y adiestramiento."
  }
];

function CourseCard({ course }: { course: typeof courses[0] }) {
  return (
    <RevealItem>
      <TiltCard className="h-full">
        <div className="group relative w-[320px] md:w-[380px] h-full shrink-0 rounded-3xl overflow-hidden bg-white/5 border border-white/10 transition-all backdrop-blur-sm">
          <BorderBeam size={250} duration={12} colorFrom="#16a34a" colorTo="#84cc16" />
          
          {/* Thumbnail */}
          <div className="relative aspect-video overflow-hidden">
            <img 
              src={course.img} 
              alt={course.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
                <Play className="w-6 h-6 fill-black ml-1" />
              </div>
            </div>

            {/* Rating Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full flex items-center gap-1.5 border border-white/10">
              <Star className="w-3 h-3 text-bieneq-green fill-bieneq-green" />
              <span className="text-[10px] font-bold text-white">{course.rating}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <span className="text-[10px] font-bold tracking-[0.2em] text-bieneq-green uppercase mb-2 block">
              {course.category}
            </span>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-bieneq-green transition-colors">
              {course.title}
            </h3>
            <p className="text-sm text-white/40 mb-6 line-clamp-2 leading-relaxed">
              {course.description}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-white/30" />
                  <span className="text-xs text-white/50">{course.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BarChart className="w-3.5 h-3.5 text-white/30" />
                  <span className="text-xs text-white/50">{course.level}</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </div>
      </TiltCard>
    </RevealItem>
  );
}

export default function AcademiaPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

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
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 overflow-hidden relative">
      {/* Background Glow & Parallax */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 pointer-events-none -z-10"
      >
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bieneq-green/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-bieneq-green/3 blur-[120px] rounded-full" />
      </motion.div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <ScrollReveal direction="up" staggerChildren={0.15}>
          <RevealItem>
            <h1 className="text-5xl md:text-8xl font-heading font-bold leading-[0.9] tracking-tighter mb-8">
              <OutlineText text="Formación" strokeColor="rgba(22, 163, 74, 0.3)" className="text-white" /> <br />
              de <GradientText variant="green">Élite.</GradientText>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed mb-10 max-w-3xl">
              Aprende la ciencia detrás del barefoot y la podología equina moderna con José Manuel Luna.
            </p>
          </RevealItem>

          {/* Stats Bar */}
          <RevealItem>
            <div className="flex flex-wrap gap-8 py-6 border-y border-white/5 mb-12">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tighter">15+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Módulos</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tighter">50h</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Contenido HD</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tighter">1.2k</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Alumnos</span>
              </div>
            </div>
          </RevealItem>
        </ScrollReveal>
      </div>

      {/* Featured Course (Spotlight) */}
      <ScrollReveal className="max-w-7xl mx-auto px-6 lg:px-8 mb-32" direction="up" delay={0.4}>
        <div
          className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/10 group"
        >
          <BorderBeam size={600} duration={20} colorFrom="#c2410c" colorTo="#9a3412" />
          <img 
            src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1600&q=80" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            alt="Main Course"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 bg-bieneq-green text-black font-bold uppercase text-[10px] tracking-widest rounded-full">
                Lo más Visto
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-bieneq-green fill-bieneq-green" />)}
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Masterclass: Biomecánica Crónica</h2>
            <p className="text-lg text-white/60 mb-10 line-clamp-3">
              Descubre cómo abordar casos de laminitis y deformaciones digitales desde una perspectiva puramente científica y biomecánica.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 font-mono text-xs tracking-widest">
                <Play className="w-4 h-4 fill-black" /> Comenzar Ahora
              </button>
              <button className="px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/20 font-bold rounded-full hover:bg-white/10 transition-all font-mono text-xs tracking-widest">
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all whitespace-nowrap border",
                activeCategory === cat 
                  ? "bg-bieneq-green border-bieneq-green text-black" 
                  : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Course Carousel */}
      <div className="w-full overflow-hidden">
        <ScrollReveal className="flex gap-6 px-6 lg:px-12 overflow-x-auto pb-12 scrollbar-hide" direction="right" staggerChildren={0.1}>
          {courses
            .filter(c => activeCategory === "Todos" || c.category === activeCategory)
            .map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
        </ScrollReveal>
      </div>

      {/* Clinic Highlights Section */}
      <ClinicHighlights />
    </main>
  );
}
