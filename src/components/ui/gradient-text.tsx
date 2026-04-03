"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  /** "green" | "gold" | "leather" | "white" | "aurora" */
  variant?: "green" | "gold" | "leather" | "white" | "aurora";
  animate?: boolean;
}

const gradients = {
  green: "from-bieneq-green via-emerald-300 to-bieneq-green",
  gold: "from-bieneq-yellow via-amber-200 to-bieneq-yellow",
  leather: "from-bieneq-cafe via-amber-400 to-bieneq-cafe",
  white: "from-white via-white/60 to-white",
  aurora: "from-bieneq-green via-emerald-200 via-bieneq-yellow to-bieneq-green",
};

export function GradientText({
  children,
  className,
  variant = "green",
  animate = true,
}: GradientTextProps) {
  return (
    <motion.span
      className={cn(
        "inline-block bg-gradient-to-r bg-clip-text text-transparent bg-[length:200%_auto]",
        gradients[variant],
        className
      )}
      animate={
        animate
          ? { backgroundPosition: ["0% center", "200% center"] }
          : undefined
      }
      transition={{
        duration: 4,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      {children}
    </motion.span>
  );
}
