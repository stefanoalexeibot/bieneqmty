"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface KineticWordProps {
  word: string;
  className?: string;
  hoverColor?: string;
}

export function KineticWord({ word, className, hoverColor = "#22c55e" }: KineticWordProps) {
  return (
    <span className={cn("inline-flex overflow-hidden", className)} aria-label={word}>
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ transformOrigin: "bottom center" }}
          whileHover={{
            y: -6,
            color: hoverColor,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          transition={{ delay: i * 0.02 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/** Staggered entrance + kinetic hover for full sentences split by words */
export function KineticHeading({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");

  return (
    <motion.span
      className={cn("inline-flex flex-wrap gap-x-3", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 40, rotateX: -90 },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: { type: "spring", stiffness: 120, damping: 14 },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
