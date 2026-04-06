"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Background3D } from "@/components/ui/3d-canvas";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import Link from "next/link";
import { useEffect, useState } from "react";

// Real BieneqMty wellness images
const wellnessImages = [
  "/images/home/wellness/IPPELP - 01.jpg",
  "/images/home/wellness/IPPELP - 004.jpg",
  "/images/home/wellness/IPPELP - 05.jpg",
  "/images/home/wellness/tampico-02.jpg",
  "/images/home/wellness/IPPELP - 06.jpg",
  "/images/home/wellness/tampico-05.jpg",
];

// Floating decorative images (card-friendly crops)
const floatingImages = [
  "/images/home/wellness/IPPELP - 002.jpg",
  "/images/home/wellness/IPPELP - 003.jpg",
  "/images/home/wellness/IPPELP - 007.jpg",
  "/images/home/wellness/tampico-04.jpg",
  "/images/home/wellness/tampico-06.jpg",
];

export function HeroSection() {
  const { x, y } = useMousePosition();
  const [bgIndex, setBgIndex] = useState(0);
  const [floatIndex, setFloatIndex] = useState(0);
  
  // Smooth spring motion for parallax
  const springConfig = { stiffness: 150, damping: 20 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    mouseX.set((x / (typeof window !== 'undefined' ? window.innerWidth : 1)) - 0.5);
    mouseY.set((y / (typeof window !== 'undefined' ? window.innerHeight : 1)) - 0.5);
  }, [x, y, mouseX, mouseY]);

  // Cycle BIENESTAR background image every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % wellnessImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Cycle floating images every 4s (offset so they don't change together)
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatIndex((prev) => (prev + 1) % floatingImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Parallax transforms for different layers
  const bgX = useTransform(mouseX, [-0.5, 0.5], [20, -20]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], [20, -20]);
  
  const midX = useTransform(mouseX, [-0.5, 0.5], [40, -40]);
  const midY = useTransform(mouseY, [-0.5, 0.5], [40, -40]);

  const textX = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const textY = useTransform(mouseY, [-0.5, 0.5], [-10, 10]);

  return (
    <section className="relative min-h-[110vh] w-full flex items-center justify-center overflow-hidden bg-transparent perspective-1000">
      {/* Background Ambient Effects - Layer 0 (Deep) */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 z-0"
      >
        <Background3D />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-bieneq-green/10 rounded-full blur-[160px] mix-blend-screen pointer-events-none opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-bieneq-cafe/10 rounded-full blur-[160px] mix-blend-screen pointer-events-none opacity-40" />
      </motion.div>

      {/* Floating Decorative Images - Layer 1 (Mid) */}
      <motion.div 
        style={{ x: midX, y: midY, rotateZ: 5 }}
        className="absolute inset-0 z-5 pointer-events-none"
      >
        {/* Top-right floating card */}
        <div className="absolute top-20 right-[15%] w-64 h-64 rotate-12">
          <div className="w-full h-full border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
            {floatingImages.map((img, i) => (
              <motion.img
                key={img}
                src={img}
                alt="BieneqMty"
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-110"
                animate={{
                  opacity: i === floatIndex ? 0.75 : 0,
                  scale: i === floatIndex ? 1 : 1.08,
                  filter: i === floatIndex ? 'blur(0px)' : 'blur(6px)',
                }}
                transition={{
                  opacity: { duration: 2, ease: [0.16, 1, 0.3, 1] },
                  scale: { duration: 2.5, ease: [0.16, 1, 0.3, 1] },
                  filter: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
                }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
          </div>
        </div>

        {/* Bottom-left floating card */}
        <div className="absolute bottom-40 left-[10%] w-48 h-48 -rotate-12">
          <div className="w-full h-full border border-white/10 rounded-full overflow-hidden shadow-2xl relative">
            {floatingImages.map((img, i) => {
              const idx = (i + 2) % floatingImages.length;
              const active = idx === floatIndex;
              return (
                <motion.img
                  key={img}
                  src={img}
                  alt="BieneqMty"
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-110"
                  animate={{
                    opacity: active ? 0.75 : 0,
                    scale: active ? 1 : 1.08,
                    filter: active ? 'blur(0px)' : 'blur(6px)',
                  }}
                  transition={{
                    opacity: { duration: 2, ease: [0.16, 1, 0.3, 1] },
                    scale: { duration: 2.5, ease: [0.16, 1, 0.3, 1] },
                    filter: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
                  }}
                />
              );
            })}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-full z-10" />
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10 overflow-hidden group hover:border-bieneq-green/30 transition-colors cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-bieneq-green animate-pulse" />
          <span className="text-[10px] font-bold text-white/60 tracking-[0.2em] uppercase font-mono">
            Bienestar Equino de Clase Mundial
          </span>
        </motion.div>

        {/* Hero H1 — Video Masked Text with Cycling Real Images */}
        <motion.h1
          style={{ x: textX, y: textY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black text-white tracking-tighter max-w-6xl leading-[0.9] text-center"
        >
          {/* Line 1 — Each image has its OWN bg-clip:text span, stacked and crossfaded */}
          <div className="relative inline-flex items-center justify-center mb-4">
            {/* First span sets the natural size/layout */}
            <span
              className="block text-7xl md:text-9xl lg:text-[11.5rem] select-none leading-none py-4 invisible"
              aria-hidden="true"
            >
              BIENESTAR
            </span>

            {/* All image spans are absolute-positioned on top, fading in/out */}
            {wellnessImages.map((img, i) => (
              <motion.span
                key={img}
                className="absolute inset-0 flex items-center justify-center text-7xl md:text-9xl lg:text-[11.5rem] select-none leading-none py-4 font-heading font-black"
                style={{
                  backgroundImage: `url("${img}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
                animate={{
                  opacity: i === bgIndex ? 1 : 0,
                  scale: i === bgIndex ? 1 : 1.05,
                  filter: i === bgIndex ? 'blur(0px)' : 'blur(8px)',
                }}
                transition={{
                  opacity: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
                  scale: { duration: 2.2, ease: [0.16, 1, 0.3, 1] },
                  filter: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
                }}
              >
                BIENESTAR
              </motion.span>
            ))}

            {/* Reveal animation line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 1.2, ease: "circOut" }}
              className="absolute bottom-4 left-0 h-[2px] bg-gradient-to-r from-transparent via-bieneq-green to-transparent"
            />
          </div>

          <br />

          {/* Line 2 — Kinetic Heading with Shimmer accent */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white tracking-tighter">
            EQUINO{" "}<ShimmerWord>REDEFINIDO.</ShimmerWord>
          </h2>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 text-xl md:text-2xl text-white/50 max-w-2xl font-light leading-relaxed"
        >
          Elevando el estándar del cuidado podológico con la visión de{" "}
          <span className="text-white/90 font-medium">José Manuel Luna</span>.{" "}
          <br className="hidden md:block"/>
          Donde la ciencia se encuentra con la pasión ecuestre.
        </motion.p>

        {/* CTAs with Magnetic Effect (Simplified for now) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col sm:flex-row items-center gap-8"
        >
          <Link
            href="/tienda"
            className="group relative px-12 py-6 bg-bieneq-green text-black font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_0_60px_rgba(34,197,94,0.3)]"
          >
            <span className="relative z-10">DESCUBRIR EQUIPO</span>
            <ArrowRight className="w-6 h-6 relative z-10 transition-transform group-hover:translate-x-2" />
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </Link>

          <Link
            href="/academia"
            className="group px-12 py-6 bg-transparent text-white font-bold rounded-full border-2 border-white/10 transition-all hover:border-bieneq-green/50 hover:bg-bieneq-green/5 active:scale-95 flex items-center gap-3 backdrop-blur-xl"
          >
            <PlayCircle className="w-8 h-8 text-bieneq-green transition-transform group-hover:scale-110" />
            <span>CLASES MAGISTRALES</span>
          </Link>
        </motion.div>

        {/* Floating Stat Reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2 }}
          className="mt-20 flex items-center gap-10 text-white/30 font-mono text-xs tracking-[0.4em]"
        >
          <span>EST. 2018</span>
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <span>MONTERREY</span>
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <span>GLOBAL REACH</span>
        </motion.div>
      </div>

      {/* Decorative Floor fade with grid */}
      <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
      <div className="absolute bottom-0 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)] opacity-60 z-[1]" />
    </section>
  );
}

