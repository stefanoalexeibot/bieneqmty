"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const bgImages = [
  "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1600&q=80", // Horse motion
  "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=1600&q=80", // Detail
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80", // Tools
  "https://images.unsplash.com/photo-1506795660198-e95c77602129?w=1600&q=80", // Results
];

export function DynamicBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Smooth the scroll progress for a more "luxurious" feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Layer 1 Opacity (First image)
  const op1 = useTransform(smoothProgress, [0, 0.25], [0.15, 0]);
  // Layer 2 Opacity (Second image)
  const op2 = useTransform(smoothProgress, [0.15, 0.4, 0.55], [0, 0.1, 0]);
  // Layer 3 Opacity (Third image)
  const op3 = useTransform(smoothProgress, [0.45, 0.7, 0.85], [0, 0.1, 0]);
  // Layer 4 Opacity (Fourth image)
  const op4 = useTransform(smoothProgress, [0.75, 1], [0, 0.1]);

  // Dynamic Gradient Color Shifts
  const gradientColor = useTransform(
    smoothProgress,
    [0, 0.3, 0.6, 1],
    ["rgba(22, 163, 74, 0.08)", "rgba(180, 83, 9, 0.08)", "rgba(234, 179, 8, 0.05)", "rgba(22, 163, 74, 0.08)"]
  );

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
              className="w-full h-full object-cover grayscale opacity-50 mix-blend-overlay scale-110"
              style={{
                y: useTransform(smoothProgress, [0, 1], [0, -100 * (i + 1)])
              }}
            />
          </motion.div>
        );
      })}

      {/* Global Vignette */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
      
      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 bg-[url('https://grain-y.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
    </div>
  );
}
