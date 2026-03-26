"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, ShieldCheck, Sparkles, Target } from "lucide-react"

export function Modulo2() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="modulo-2" ref={ref} className="min-h-[120vh] bg-black relative flex items-center overflow-hidden border-t border-white/5">
      {/* Background Cinematic Image */}
      <motion.div 
        style={{ y: yImage, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/assets/curso/historia/recorte-perfecto.webp" 
          className="w-full h-full object-cover grayscale brightness-50"
          alt="Recorte Perfecto Detail"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-4">
              <span className="text-xs tracking-[0.5em] text-amber-500 font-black uppercase">Módulo 02</span>
              <div className="h-px w-10 bg-amber-500/50" />
            </div>
            <h2 className="font-display text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
              Retorno al <br /> <span className="text-amber-400 italic">Estado Natural</span>
            </h2>
          </div>

          <p className="text-2xl text-white/50 font-light leading-relaxed max-w-xl">
            El recorte fisiológico no es solo estética; es permitir que el casco recupere su función biológica original. Respetando los ángulos de la P3 y estimulando el crecimiento sano.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: <ShieldCheck className="w-5 h-5" />, text: "Protección Interna" },
              { icon: <Sparkles className="w-5 h-5" />, text: "Crecimiento Óptimo" },
              { icon: <CheckCircle2 className="w-5 h-5" />, text: "Equilibrio Fisiológico" },
              { icon: <Target className="w-5 h-5" />, text: "Precisión de Corte" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-amber-400/60 font-medium tracking-wide">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                   {item.icon}
                </div>
                <span className="text-sm uppercase tracking-widest">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-amber-500/10 blur-[120px] rounded-full" />
          <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl">
             <img 
               src="/assets/curso/historia/recorte-perfecto-zoom.png" 
               className="w-full h-full object-cover" 
               alt="Zoom al recorte" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
             <div className="absolute bottom-10 left-10">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40 font-black mb-2">Detalle Técnico</p>
                <p className="text-2xl font-display font-medium text-white italic">"Simetría y Balance"</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

