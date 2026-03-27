"use client"

import React, { useEffect, useRef } from "react"

interface AmbientParticlesProps {
  count?: number
  color?: string
  minSize?: number
  maxSize?: number
  speed?: number
  opacity?: number
}

export function AmbientParticles({
  count = 40,
  color = "rgba(245, 158, 11, 0.4)", // Amber fallback
  minSize = 1,
  maxSize = 3,
  speed = 0.5,
  opacity = 0.5
}: AmbientParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number

      constructor() {
        if (!canvas) {
          this.x = 0
          this.y = 0
        } else {
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
        }
        this.size = Math.random() * (maxSize - minSize) + minSize
        this.speedX = (Math.random() - 0.5) * speed
        this.speedY = (Math.random() - 0.5) * speed
        this.opacity = Math.random() * opacity
      }

      update() {
        if (!canvas) return
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = color.replace(/[\d.]+\)$/g, `${this.opacity})`)
        ctx.fill()
      }
    }

    const initParticles = () => {
      particles = []
      for (let i = 0; i < count; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [count, color, minSize, maxSize, speed, opacity])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
