"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, XCircle, Info } from "lucide-react"

const verde = [
  { alimento: "Fibra larga (Heno)", desc: "Base de la dieta, libre de melaza y azúcares." },
  { alimento: "Minerales quelatados", desc: "Cobre, Zinc y Selenio para fortalecer la queratina." },
  { alimento: "Agua fresca", desc: "Hidratación constante y limpia 24/7." }
]

const rojo = [
  { alimento: "Alfalfa y Granos", desc: "Exceso de NSC (Carbohidratos No Estructurales)." },
  { alimento: "Frutas Dulces", desc: "Picos de insulina que inflaman la lámina." },
  { alimento: "Pastos Tiernos", desc: "Nitrógeno y fructanos peligrosos en primavera." }
]

export function Modulo6() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])

  return (
    <section id="modulo-6" ref={ref} className="min-h-screen py-32 bg-background relative flex items-center justify-center overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_oklch(0.72_0.14_68_/_0.03)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col gap-16">
        
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <motion.div style={{ y }}>
            <span className="text-xs tracking-[0.6em] text-amber-500 font-black uppercase mb-4 block">Módulo 06</span>
            <h2 className="font-display text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-6">
              Nutrición <br /> <span className="text-amber-400 italic">Crítica</span>
            </h2>
            <p className="text-xl text-white/40 font-light leading-relaxed">
              El casco se construye desde adentro. El "Semáforo Nutricional" es tu guía para evitar la inflamación laminar.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Green Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group p-10 bg-emerald-500/[0.03] border border-emerald-500/20 rounded-[3rem] backdrop-blur-3xl space-y-10"
          >
            <div className="flex items-center gap-4 border-b border-emerald-500/10 pb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                 <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-display font-bold text-emerald-400 tracking-widest uppercase">Altamente Recomendado</h3>
            </div>
            
            <div className="space-y-6">
              {verde.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all">
                  <h4 className="text-white font-bold mb-1">{item.alimento}</h4>
                  <p className="text-white/40 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Red Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group p-10 bg-red-500/[0.03] border border-red-500/20 rounded-[3rem] backdrop-blur-3xl space-y-10"
          >
            <div className="flex items-center gap-4 border-b border-red-500/10 pb-6">
              <div className="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center">
                 <XCircle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-display font-bold text-red-400 tracking-widest uppercase">Peligro - Evitar</h3>
            </div>
            
            <div className="space-y-6">
              {rojo.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-red-500/30 transition-all">
                  <h4 className="text-white font-bold mb-1">{item.alimento}</h4>
                  <p className="text-white/40 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pro Tip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-amber-500/5 border border-amber-500/20 rounded-3xl p-8 flex items-start gap-6 max-w-4xl mx-auto"
        >
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0">
             <Info className="w-6 h-6 text-amber-500" />
          </div>
          <p className="text-amber-200/50 italic text-lg leading-relaxed">
            "La resistencia a la insulina es la causa número 1 de patologías en el casco. Controlar el NSC (Carbohidratos No Estructurales) es salvarle la vida a tu caballo."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

