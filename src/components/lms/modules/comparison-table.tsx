"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Leaf, Ban, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface FoodItem {
  alimento: string
  desc: string
}

interface ComparisonTableProps {
  data: any
}

// Visual references per food item
const GREEN_IMAGES: Record<string, string> = {
  default: "https://images.unsplash.com/photo-1500595046743-cec271a393dc?auto=format&fit=crop&q=80&w=800",
}
const RED_IMAGES: Record<string, string> = {
  default: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800",
}

function ImpactBar({ level, color }: { level: number; color: "green" | "red" }) {
  return (
    <div className="flex items-center gap-3">
      <span className={cn("text-[9px] uppercase tracking-widest font-black", color === "green" ? "text-emerald-500/60" : "text-red-500/60")}>
        {color === "green" ? "Seguridad" : "Riesgo"}
      </span>
      <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.2, ease: "circOut", delay: 0.3 }}
          className={cn("h-full rounded-full", color === "green" ? "bg-emerald-500" : "bg-red-500")}
        />
      </div>
      <span className={cn("text-[10px] font-mono font-bold", color === "green" ? "text-emerald-500" : "text-red-500")}>
        {level}%
      </span>
    </div>
  )
}

const GREEN_LEVELS = [95, 88, 92, 78, 85]
const RED_LEVELS  = [85, 92, 78, 95, 88]

export function ComparisonTable({ data }: ComparisonTableProps) {
  const [expandedGreen, setExpandedGreen] = useState<number | null>(null)
  const [expandedRed, setExpandedRed] = useState<number | null>(null)

  const interaction = data.interacciones?.[0] || {}
  const itemsVerde: FoodItem[] = interaction.verde || []
  const itemsRojo: FoodItem[]  = interaction.rojo  || []

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col">

      {/* Full-bleed atmospheric split background */}
      <div className="absolute inset-0 grid grid-cols-2 pointer-events-none">
        {/* Green side BG */}
        <div className="relative overflow-hidden">
          <img
            src="/assets/curso/pasto en slowfeeder para padock paradise.png"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = GREEN_IMAGES.default }}
            alt=""
            className="w-full h-full object-cover brightness-[0.18] saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/30 via-emerald-950/10 to-black/80" />
        </div>
        {/* Red side BG */}
        <div className="relative overflow-hidden">
          <img
            src="/assets/curso/grano y alfalfa.png"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = RED_IMAGES.default }}
            alt=""
            className="w-full h-full object-cover brightness-[0.18] saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-red-950/30 via-red-950/10 to-black/80" />
        </div>
      </div>

      {/* Center spine glow */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-white/[0.04] z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_40px_12px_rgba(245,158,11,0.3)] z-10" />

      {/* Content */}
      <div className="relative z-20 w-full h-full flex flex-col overflow-hidden">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-10 px-6 space-y-2 shrink-0"
        >
          <span className="text-[10px] uppercase tracking-[0.7em] text-amber-500 font-black block">
            {data.parte} · Nutrición
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter leading-none">
            Semáforo <span className="text-amber-400 italic">Nutricional</span>
          </h2>
          {data.texto_introduccion && (
            <p className="text-white/30 text-sm font-light max-w-xl mx-auto">{data.texto_introduccion}</p>
          )}
        </motion.div>

        {/* Column labels */}
        <div className="grid grid-cols-2 px-8 md:px-16 gap-4 mb-4 shrink-0">
          {/* Green label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="relative w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.15)]">
              <Leaf className="w-7 h-7 text-emerald-400" />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl border border-emerald-500/30"
              />
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-[0.5em] text-emerald-500/50 font-black block">Nivel Verde</span>
              <h3 className="text-2xl font-display font-bold text-emerald-400 uppercase tracking-wider">Permitidos</h3>
            </div>
          </motion.div>

          {/* Red label */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="relative w-16 h-16 rounded-2xl bg-red-500/15 border border-red-500/25 flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.15)]">
              <Ban className="w-7 h-7 text-red-400" />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute inset-0 rounded-2xl border border-red-500/30"
              />
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-[0.5em] text-red-500/50 font-black block">Nivel Rojo</span>
              <h3 className="text-2xl font-display font-bold text-red-400 uppercase tracking-wider">Peligrosos</h3>
            </div>
          </motion.div>
        </div>

        {/* Food items grid - scrollable */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 px-8 md:px-16 overflow-y-auto flex-1 pb-8" style={{ scrollbarWidth: "none" }}>

          {/* GREEN column */}
          <div className="space-y-2">
            {itemsVerde.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.08 }}
                onClick={() => setExpandedGreen(expandedGreen === i ? null : i)}
                className="group cursor-pointer"
              >
                <div className={cn(
                  "p-5 rounded-[1.5rem] border transition-all duration-500",
                  expandedGreen === i
                    ? "bg-emerald-500/10 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                    : "bg-emerald-500/[0.03] border-emerald-500/10 hover:border-emerald-500/30 hover:bg-emerald-500/[0.07]"
                )}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                      <h4 className="text-base font-display font-bold text-white">{item.alimento}</h4>
                    </div>
                    <div className="text-white/20 group-hover:text-white/50 transition-colors">
                      {expandedGreen === i ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>

                  <ImpactBar level={GREEN_LEVELS[i % GREEN_LEVELS.length]} color="green" />

                  <AnimatePresence>
                    {expandedGreen === i && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-white/40 text-sm font-light leading-relaxed mt-3 overflow-hidden"
                      >
                        {item.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RED column */}
          <div className="space-y-2">
            {itemsRojo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.08 }}
                onClick={() => setExpandedRed(expandedRed === i ? null : i)}
                className="group cursor-pointer"
              >
                <div className={cn(
                  "p-5 rounded-[1.5rem] border transition-all duration-500",
                  expandedRed === i
                    ? "bg-red-500/10 border-red-500/40 shadow-[0_0_30px_rgba(239,68,68,0.1)]"
                    : "bg-red-500/[0.03] border-red-500/10 hover:border-red-500/30 hover:bg-red-500/[0.07]"
                )}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                      <h4 className="text-base font-display font-bold text-white">{item.alimento}</h4>
                    </div>
                    <div className="text-white/20 group-hover:text-white/50 transition-colors">
                      {expandedRed === i ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>

                  <ImpactBar level={RED_LEVELS[i % RED_LEVELS.length]} color="red" />

                  <AnimatePresence>
                    {expandedRed === i && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-white/40 text-sm font-light leading-relaxed mt-3 overflow-hidden"
                      >
                        {item.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
