"use client"

import { motion } from "framer-motion"

const COMPARISON_ROWS = [
  {
    categoria: "Alimentación",
    icon: "🌾",
    feral: { title: "18h comiendo", desc: "55,000 masticaciones diarias. Forraje variado y continuo." },
    domestico: { title: "3h comiendo", desc: "7,000 masticaciones. Concentrado en pocas tomas." },
  },
  {
    categoria: "Movimiento",
    icon: "🏃",
    feral: { title: "Hasta 30 km al día", desc: "Movimiento constante y natural en terrenos variados." },
    domestico: { title: "A veces 1h caminando", desc: "Estabulación prolongada, poco movimiento." },
  },
  {
    categoria: "Descanso",
    icon: "😴",
    feral: { title: "5–7h, 5 min acostados", desc: "Sueño en grupo, vigilancia compartida, descanso real." },
    domestico: { title: "23h estabulados", desc: "Sin compañía, sin libertad de movimiento, estrés crónico." },
  },
  {
    categoria: "Contacto social",
    icon: "🤝",
    feral: { title: "Siempre en manada", desc: "Vínculos sociales fuertes, comunicación constante." },
    domestico: { title: "Aislados", desc: "Paddocks individuales, sin contacto, sin lenguaje social." },
  },
  {
    categoria: "Potrillos",
    icon: "🐴",
    feral: { title: "Destete 9 meses + juego", desc: "Tiempo suficiente con la madre, aprendizaje por juego." },
    domestico: { title: "Destete 4 meses", desc: "Destete prematuro, trauma temprano, aprendizaje limitado." },
  },
  {
    categoria: "Sistema inmune",
    icon: "🛡️",
    feral: { title: "Sistema inmune activo", desc: "Exposición a variedad de microbios, microbioma rico." },
    domestico: { title: "Sistema debilitado", desc: "Desinfección excesiva, ambiente estéril, poca variedad." },
  },
]

export function Bienestar() {
  return (
    <section
      id="bienestar"
      className="min-h-screen py-24 md:py-32 bg-background relative overflow-hidden border-t border-white/5"
    >
      <div className="absolute top-1/3 left-[-100px] w-[600px] h-[500px] bg-emerald-900/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: "radial-gradient(oklch(1 0 0 / 3%) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-6xl mx-auto w-full px-6 relative z-10">
        {/* Module label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-px w-10 bg-amber-500/40" />
          <span className="text-xs tracking-[0.45em] text-amber-400/70 uppercase font-semibold">Módulo 06 · Bienestar</span>
          <div className="h-px w-10 bg-amber-500/40" />
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-3">
          <motion.h2
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-foreground leading-[0.95]"
            style={{ fontSize: "clamp(3rem, 9vw, 6rem)" }}
          >
            Feral vs Doméstico
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-lg text-muted-foreground/60 font-light mb-14 italic"
        >
          Lo que les privamos al domesticarlos
        </motion.p>

        {/* Column headers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-4 mb-4 px-2"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-emerald-400/70 font-semibold">Feral · Natural</span>
          </div>
          <div className="w-16" />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-amber-400/70 font-semibold">Doméstico</span>
          </div>
        </motion.div>

        {/* Comparison rows */}
        <div className="flex flex-col gap-4">
          {COMPARISON_ROWS.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="grid md:grid-cols-[1fr_auto_1fr] gap-3 items-stretch"
            >
              {/* Feral card */}
              <div className="p-5 rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/[0.15] hover:border-emerald-500/25 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                  <span className="text-[9px] tracking-[0.3em] uppercase text-emerald-400/50 font-semibold hidden md:block">Feral</span>
                </div>
                <p className="text-sm font-semibold text-emerald-300/80 mb-1">{row.feral.title}</p>
                <p className="text-xs text-emerald-400/50 font-light leading-relaxed">{row.feral.desc}</p>
              </div>

              {/* Separator */}
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center gap-1 md:gap-1.5">
                  <span className="text-base">{row.icon}</span>
                  <span className="text-[9px] tracking-widest uppercase text-muted-foreground/25 font-semibold hidden md:block">{row.categoria}</span>
                  <div className="hidden md:block w-px h-4 bg-border/50" />
                  <span className="hidden md:block text-[9px] text-muted-foreground/20 font-bold">vs</span>
                  <div className="hidden md:block w-px h-4 bg-border/50" />
                </div>
              </div>

              {/* Domestic card */}
              <div className="p-5 rounded-2xl bg-amber-500/[0.03] border border-amber-500/[0.12] hover:border-amber-500/20 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/50" />
                  <span className="text-[9px] tracking-[0.3em] uppercase text-amber-400/45 font-semibold hidden md:block">Doméstico</span>
                </div>
                <p className="text-sm font-semibold text-amber-300/75 mb-1">{row.domestico.title}</p>
                <p className="text-xs text-amber-400/45 font-light leading-relaxed">{row.domestico.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
