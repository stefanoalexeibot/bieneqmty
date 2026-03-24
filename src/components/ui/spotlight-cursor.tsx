"use client"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"

export function SpotlightCursor() {
  const mouseX = useMotionValue(-600)
  const mouseY = useMotionValue(-600)

  const springX = useSpring(mouseX, { stiffness: 90, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 90, damping: 20 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="fixed pointer-events-none z-[9990] rounded-full"
      style={{
        left: springX,
        top: springY,
        translateX: "-50%",
        translateY: "-50%",
        width: 700,
        height: 700,
        background: "radial-gradient(circle, oklch(0.72 0.14 68 / 5%) 0%, transparent 65%)",
      }}
    />
  )
}
