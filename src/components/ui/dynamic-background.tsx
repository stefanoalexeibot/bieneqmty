"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useState, useEffect } from "react";

// Real clinic backgrounds
const ALL_BACKGROUNDS = [
  "/images/backgrounds/IPPELP - 002.jpg",
  "/images/backgrounds/IPPELP - 003.jpg",
  "/images/backgrounds/IPPELP - 004.jpg",
  "/images/backgrounds/IPPELP - 005.jpg",
  "/images/backgrounds/IPPELP - 006.jpg",
  "/images/backgrounds/IPPELP - CLINICA TAMPICO 03.jpg",
  "/images/backgrounds/IPPELP - CLINICA TAMPICO 05.jpg",
  "/images/backgrounds/TOMMY VASQUES NOS VISITA AL RANCHO .jpg",
  "/images/backgrounds/lo.png",
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Dedicated sub-component: each layer manages its own hooks independently
function BackgroundLayer({
  src,
  index,
  opacity,
  smoothProgress,
}: {
  src: string;
  index: number;
  opacity: MotionValue<number>;
  smoothProgress: MotionValue<number>;
}) {
  // Called at the top level of this sub-component – safe!
  const y = useTransform(smoothProgress, [0, 1], [0, -180 * (index + 1)]);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.img
        src={src}
        alt=""
        className="w-full h-full object-cover grayscale opacity-80 mix-blend-overlay scale-110 blur-[1px]"
        style={{ y }}
      />
    </motion.div>
  );
}

export function DynamicBackground() {
  const [bgImages, setBgImages] = useState<string[]>([]);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setBgImages(shuffleArray(ALL_BACKGROUNDS).slice(0, 4));
  }, []);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // All hooks at top level – no loops
  const op1 = useTransform(smoothProgress, [0, 0.25], [0.4, 0]);
  const op2 = useTransform(smoothProgress, [0.15, 0.4, 0.55], [0, 0.3, 0]);
  const op3 = useTransform(smoothProgress, [0.45, 0.7, 0.85], [0, 0.3, 0]);
  const op4 = useTransform(smoothProgress, [0.75, 1], [0, 0.35]);
  const opacities = [op1, op2, op3, op4];

  const gradientColor = useTransform(
    smoothProgress,
    [0, 0.3, 0.6, 1],
    [
      "rgba(34, 197, 94, 0.15)",
      "rgba(180, 83, 9, 0.18)",
      "rgba(234, 179, 8, 0.15)",
      "rgba(34, 197, 94, 0.15)",
    ]
  );

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none bg-black overflow-hidden">
      {/* Ambient Gradient */}
      <motion.div
        style={{ backgroundColor: gradientColor }}
        className="absolute inset-0"
      />

      {/* Randomized Layered Images */}
      {bgImages.map((src, i) => (
        <BackgroundLayer
          key={src}
          src={src}
          index={i}
          opacity={opacities[i]}
          smoothProgress={smoothProgress}
        />
      ))}

      {/* Global Vignette */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-80" />
    </div>
  );
}
