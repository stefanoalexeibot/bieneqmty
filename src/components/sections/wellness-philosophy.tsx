"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { GradientText } from "@/components/ui/gradient-text";
import { KineticHeading } from "@/components/ui/kinetic-word";
import { ScrollReveal, RevealItem } from "@/components/animations/scroll-reveal";

const HOOF_IMAGES = [
  "/images/home/wellness/IPPELP - 01.jpg",
  "/images/home/wellness/IPPELP - 02.png",
  "/images/home/wellness/IPPELP - 03.jpg",
  "/images/home/wellness/IPPELP - 04.jpg",
  "/images/home/wellness/IPPELP - 05.jpg",
  "/images/home/wellness/IPPELP - 06.jpg",
  "/images/home/wellness/IPPELP - 07.jpg",
  "/images/home/wellness/IPPELP - 08.jpg",
  "/images/home/wellness/IPPELP - 09.jpg"
];

export function WellnessPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HOOF_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-transparent py-32 md:py-48 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Typography */}
        <ScrollReveal className="w-full md:w-1/2" staggerChildren={0.15}>
          <RevealItem>
            <h2 className="text-sm font-semibold text-bieneq-green tracking-widest uppercase mb-6 font-mono">
              La Filosofía Bieneq
            </h2>
          </RevealItem>
          <RevealItem>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white leading-[1.1] mb-8">
              <KineticHeading text="No es quitar herraduras." className="text-white mb-1" />
              <span className="block mt-2">
                Es devolver la{" "}
                <GradientText variant="green" className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl">
                  naturaleza.
                </GradientText>
              </span>
            </h3>
          </RevealItem>
          <RevealItem>
            <p className="text-lg md:text-xl text-white/60 font-light max-w-lg mb-8 leading-relaxed">
              El sistema <span className="italic text-white/80">barefoot</span> y la podología equina moderna no se tratan de una moda. Se trata de{" "}
              <span className="text-bieneq-green font-medium">biomecánica perfecta</span> probada por millones de años de evolución.
            </p>
          </RevealItem>
          <RevealItem>
            <div className="w-16 h-1 bg-bieneq-cafe mb-8" />
          </RevealItem>
          <RevealItem>
            <p className="text-lg text-white/50 leading-relaxed font-light">
              En BieneqMty, vemos el casco como el{" "}
              <span className="text-bieneq-yellow/80 italic">segundo corazón del caballo</span>. Rehabilitar problemas crónicos, expandir la fuerza estructural y educar al propietario es nuestro estándar de excelencia diaria.
            </p>
          </RevealItem>
        </ScrollReveal>

        {/* Right Side: Visual Metaphor (Dynamic Slideshow) */}
        <motion.div style={{ y: y1 }} className="w-full md:w-1/2 relative h-[500px] md:h-[700px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 z-20" />
          
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={HOOF_IMAGES[currentIndex]} 
                alt="JM recortando cascoss y verificando biomecánica" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
              />
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute bottom-10 left-10 z-30">
            <span className="text-bieneq-green font-mono text-sm tracking-widest uppercase mb-2 block">
              Biomecánica Pura
            </span>
            <p className="text-2xl font-heading text-white max-w-xs drop-shadow-lg">
              Estructura digital para el bienestar físico.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
