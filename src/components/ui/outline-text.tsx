"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface OutlineTextProps extends HTMLMotionProps<"span"> {
  text: string;
  className?: string;
  strokeWidth?: string;
  strokeColor?: string;
  fillColor?: string;
  hoverFill?: boolean;
}

export function OutlineText({
  text,
  className,
  strokeWidth = "1px",
  strokeColor = "currentColor",
  fillColor = "transparent",
  hoverFill = true,
  ...props
}: OutlineTextProps) {
  return (
    <motion.span
      className={cn(
        "relative inline-block transition-colors duration-500",
        hoverFill && "hover:text-current",
        className
      )}
      style={{
        WebkitTextStroke: `${strokeWidth} ${strokeColor}`,
        color: fillColor,
      }}
      {...props}
    >
      {text}
    </motion.span>
  );
}
