"use client"

import { motion } from "framer-motion"
import { HeartPulse, AlertTriangle, Thermometer, Zap, ShieldAlert, Ban } from "lucide-react"

interface AlertCardsProps {
  data: any
}

const ICON_MAP: Record<string, React.ElementType> = {
  heart: HeartPulse,
  alert: AlertTriangle,
  thermo: Thermometer,
  zap: Zap,
  shield: ShieldAlert,
  ban: Ban,
}

export function AlertCards({ data }: AlertCardsProps) {
  const bgImage = data.media?.imagen_fondo
  const checklist = data.checklist_emergencia || []
  const sos = data.procedimiento_sos || []
  const isLaminitis = data.id === "laminitis" || (data.titulo_alerta || "").toLowerCase().includes("roja")

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center">

      {/* Full-screen background image */}
      {bgImage && (
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: isLaminitis ? 0.45 : 0.35 }}
          transition={{ duration: 2.5 }}
          className="absolute inset-0 z-0"
        >
          <img src={bgImage} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        </motion.div>
      )}

      {/* Red ambient pulse */}
      <motion.div
        animate={{ opacity: [0.06, 0.18, 0.06] }}
        transition={{ duration: isLaminitis ? 1.5 : 3, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-red-900/20 blur-[200px] rounded-full z-0"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-10 md:px-20 flex flex-col gap-10">

        {/* Alert badge */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-black uppercase tracking-[0.5em] text-[10px] w-fit"
        >
          <HeartPulse className="w-4 h-4 animate-pulse" />
          <span>{isLaminitis ? "Emergencia Metabólica" : "Problema Estructural"}</span>
        </motion.div>

        {/* Big title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="text-[5rem] md:text-[8rem] lg:text-[9rem] font-display font-black text-white leading-none tracking-tighter"
          dangerouslySetInnerHTML={{ __html: data.titulo_alerta || `<span>${data.titulo}</span>` }}
        />

        {/* Intro description */}
        {data.texto_introduccion && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-white/55 font-light italic max-w-2xl leading-relaxed"
          >
            {data.texto_introduccion}
          </motion.p>
        )}

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="h-px bg-red-500/40"
        />

        {/* Checklist as large visual badges */}
        {checklist.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {checklist.map((item: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + i * 0.08 }}
                className="flex items-center gap-3 px-7 py-4 rounded-2xl bg-red-500/10 border border-red-500/25 text-white font-display font-bold text-lg md:text-xl"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 animate-pulse" />
                {item}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* SOS Protocol - big numbered lines */}
        {sos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-5 mt-2"
          >
            <span className="text-[9px] uppercase tracking-[0.7em] text-red-500/50 font-black">
              Protocolo SOS
            </span>
            <div className="space-y-4">
              {sos.map((step: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.75 + i * 0.1 }}
                  className="flex items-center gap-6"
                >
                  <span className="text-4xl md:text-5xl font-mono font-black text-red-500/30 tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-white/80 italic leading-snug">
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
