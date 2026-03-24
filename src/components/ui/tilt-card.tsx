"use client"
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TiltCardProps {
  children: ReactNode
  className?: string
  intensity?: number
  glare?: boolean
}

export function TiltCard({ children, className, intensity = 12, glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0.5)
  const rawY = useMotionValue(0.5)

  const rotX = useSpring(useTransform(rawY, [0, 1], [intensity, -intensity]), { stiffness: 400, damping: 28 })
  const rotY = useSpring(useTransform(rawX, [0, 1], [-intensity, intensity]), { stiffness: 400, damping: 28 })

  const glareX = useTransform(rawX, [0, 1], [15, 85])
  const glareY = useTransform(rawY, [0, 1], [15, 85])
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.08) 0%, transparent 55%)`

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    rawX.set((e.clientX - left) / width)
    rawY.set((e.clientY - top) / height)
  }

  function handleMouseLeave() {
    rawX.set(0.5)
    rawY.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotX,
        rotateY: rotY,
        transformStyle: "preserve-3d",
      }}
      className={cn("relative", className)}
    >
      {/* Specular glare highlight */}
      {glare && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-20 rounded-[inherit]"
          style={{ background: glareBackground }}
        />
      )}
      {/* Depth shadow */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ transform: "translateZ(-8px)", boxShadow: "0 25px 60px rgba(0,0,0,0.4)" }}
      />
      {children}
    </motion.div>
  )
}
