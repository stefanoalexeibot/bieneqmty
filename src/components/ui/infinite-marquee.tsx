"use client";

import { motion } from "framer-motion";

export function InfiniteMarquee() {
  const words = [
    "Rehabilitación Élite",
    "Estándar Oro",
    "Podología Avanzada",
    "Biomecánica Pura",
    "Sistema Barefoot",
    "Salud Integral",
  ];

  return (
    <div className="w-full bg-bieneq-green py-4 overflow-hidden flex whitespace-nowrap z-20 relative border-y border-white/20">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        className="flex items-center gap-16"
      >
        {/* Repeat twice for seamless infinite scroll */}
        {[...words, ...words].map((word, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="text-black font-heading text-4xl font-bold uppercase tracking-tighter">
              {word}
            </span>
            <span className="w-3 h-3 rounded-full bg-black/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
