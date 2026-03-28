"use client"

import { motion } from "framer-motion"
import { HelpCircle, AlertTriangle, Stethoscope, HeartPulse, ShieldAlert } from "lucide-react"

interface AlertCardsProps {
  data: any
}

const INFO_ICONS: Record<number, React.ElementType> = {
  0: HelpCircle,
  1: AlertTriangle,
  2: Stethoscope,
}

export function AlertCards({ data }: AlertCardsProps) {
  const bgImage = data.media?.imagen_fondo
  const infoCards = data.info_cards || []
  // Fallback for old format
  const checklist = data.checklist_emergencia || []
  const sos = data.procedimiento_sos || []
  const hasInfoCards = infoCards.length > 0

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-end pb-0">

      {/* Full-screen background image — takes up most of the screen */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="absolute inset-0 z-0"
      >
        {bgImage && (
          <img src={bgImage} className="w-full h-full object-cover" alt="" />
        )}
        {/* Heavy gradient from bottom for content readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </motion.div>

      {/* Red ambient */}
      <motion.div
        animate={{ opacity: [0.04, 0.12, 0.04] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 z-0 bg-red-950/30"
      />

      {/* Content — anchored to bottom */}
      <div className="relative z-10 w-full px-10 md:px-20 pb-10">

        {/* Alert label + title at top-left of content */}
        <div className="mb-8 space-y-3">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-black uppercase tracking-[0.5em] text-[10px]"
          >
            <HeartPulse className="w-4 h-4 animate-pulse" />
            <span>04 · El Conflicto</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-[7rem] font-display font-black text-white leading-none tracking-tighter"
            dangerouslySetInnerHTML={{ __html: data.titulo_alerta || `<span>${data.titulo}</span>` }}
          />

          {data.texto_introduccion && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-lg md:text-xl text-white/60 font-light italic max-w-xl leading-relaxed"
            >
              {data.texto_introduccion}
            </motion.p>
          )}
        </div>

        {/* Informative 3-panel cards */}
        {hasInfoCards && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {infoCards.map((card: any, i: number) => {
              const IconComp = INFO_ICONS[i] || HelpCircle
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + i * 0.1 }}
                  className="group relative p-8 rounded-[2rem] bg-black/60 border border-white/10 backdrop-blur-xl hover:border-red-500/30 hover:bg-black/80 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[60px] rounded-full group-hover:bg-red-500/10 transition-colors duration-700" />

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-red-400" />
                    </div>
                    <span className="text-red-400 font-black uppercase tracking-[0.4em] text-[9px]">
                      {card.pregunta}
                    </span>
                  </div>

                  <p className="text-white/90 text-lg md:text-xl font-display font-semibold leading-snug relative z-10">
                    {card.respuesta}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        )}

        {/* Fallback: checklist + sos */}
        {!hasInfoCards && (
          <div className="space-y-6">
            {checklist.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                {checklist.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-white font-display font-bold text-base">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 animate-pulse" />
                    {item}
                  </div>
                ))}
              </motion.div>
            )}
            {sos.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="space-y-3"
              >
                {sos.map((step: string, i: number) => (
                  <div key={i} className="flex items-center gap-5">
                    <span className="text-4xl font-mono font-black text-red-500/30 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-xl font-display font-bold text-white/80 italic">{step}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
