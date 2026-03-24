"use client"
import { motion } from "framer-motion"

interface InfiniteMarqueeProps {
  items: string[]
  speed?: number
  direction?: "left" | "right"
  className?: string
}

export function InfiniteMarquee({ items, speed = 35, direction = "left", className }: InfiniteMarqueeProps) {
  const doubled = [...items, ...items, ...items]
  const xStart = direction === "left" ? "0%" : "-33.33%"
  const xEnd   = direction === "left" ? "-33.33%" : "0%"

  return (
    <div className={`overflow-hidden border-y border-white/[0.04] py-3 ${className ?? ""}`}>
      <motion.div
        animate={{ x: [xStart, xEnd] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex gap-0 whitespace-nowrap"
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            <span className="text-white/18 text-[11px] tracking-[0.45em] uppercase font-semibold">
              {item}
            </span>
            <span className="text-amber-500/35 text-[8px]">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
