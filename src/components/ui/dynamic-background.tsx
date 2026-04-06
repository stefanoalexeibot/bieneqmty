"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// The real clinic backgrounds provided
const ALL_BACKGROUNDS = [
  "/images/backgrounds/IPPELP - 002.jpg",
  "/images/backgrounds/IPPELP - 003.jpg",
  "/images/backgrounds/IPPELP - 004.jpg",
  "/images/backgrounds/IPPELP - 005.jpg",
  "/images/backgrounds/IPPELP - 006.jpg",
  "/images/backgrounds/IPPELP - CLINICA TAMPICO 03.jpg",
  "/images/backgrounds/IPPELP - CLINICA TAMPICO 05.jpg",
  "/images/backgrounds/TOMMY VASQUES NOS VISITA AL RANCHO .jpg",
  "/images/backgrounds/lo.png"
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function DynamicBackground() {
  const [bgImages, setBgImages] = useState<string[]>([]);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    // Randomize backgrounds on each session/refresh
    setBgImages(shuffleArray(ALL_BACKGROUNDS).slice(0, 4));
  }, []);

  // Smooth the scroll progress for a more "luxurious" feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Layer 1 Opacity (First image - starts visible)
  const op1 = useTransform(smoothProgress, [0, 0.25], [0.4, 0]);
  // Layer 2 Opacity (Second image)
  const op2 = useTransform(smoothProgress, [0.15, 0.4, 0.55], [0, 0.3, 0]);
  // Layer 3 Opacity (Third image)
  const op3 = useTransform(smoothProgress, [0.45, 0.7, 0.85], [0, 0.3, 0]);
  // Layer 4 Opacity (Fourth image)
  const op4 = useTransform(smoothProgress, [0.75, 1], [0, 0.35]);

  // Dynamic Gradient Color Shifts (Vibrant & Immersive)
  const gradientColor = useTransform(
    smoothProgress,
    [0, 0.3, 0.6, 1],
    ["rgba(34, 197, 94, 0.15)", "rgba(180, 83, 9, 0.18)", "rgba(234, 179, 8, 0.15)", "rgba(34, 197, 94, 0.15)"]
  );

  if (bgImages.length === 0) return null;

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none bg-black overflow-hidden">
      {/* Dynamic Ambient Gradient */}
      <motion.div 
        style={{ backgroundColor: gradientColor }}
        className="absolute inset-0 transition-colors duration-1000"
      />

      {/* Layered Images with Parallax & Opacity Blending */}
      {bgImages.map((src, i) => {
        const opacity = [op1, op2, op3, op4][i];
        return (
          <motion.div
            key={src}
            style={{ opacity }}
            className="absolute inset-0"
          >
            <motion.img
              src={src}
              alt=""
              className="w-full h-full object-cover grayscale opacity-80 mix-blend-overlay scale-110 blur-[1px]"
              style={{
                y: useTransform(smoothProgress, [0, 1], [0, -200 * (i + 1)])
              }}
            />
          </motion.div>
        );
      })}

      {/* Global Vignette */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-80" />
      
      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 bg-[url('https://grain-y.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
    </div>
  );
}
