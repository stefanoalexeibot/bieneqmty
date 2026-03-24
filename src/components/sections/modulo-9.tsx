"use client"
import { motion } from "framer-motion"

export function Modulo9() {
  const steps = [
    { title: "Paso 1: Limpieza", desc: "Usa el rascador. Evalúa olor (podredumbre), color de la línea blanca y temperatura." },
    { title: "Paso 2: Evaluación visual", desc: "Observa la pared desde el frente, lado y planta. Evalúa asimetrías." },
    { title: "Paso 3: Nivelación de la base", desc: "Con la raspa (cara áspera), nivela la base para que apoye uniformemente en el bloque de recorte." },
    { title: "Paso 4: Talones", desc: "Los talones no deben estar más altos que la ranilla. Redúcelos gradualmente si es necesario." },
    { title: "Paso 5: Mustang Roll", desc: "Con la cara fina de la raspa, crea un bisel de 45° en todo el perímetro exterior. Previene astillamiento." },
    { title: "Paso 6: Ranilla", desc: "No se recorta agresivamente, solo se retira tejido necrótico con cuchilla. La ranilla activa se deja intacta." },
    { title: "Paso 7: Evaluación final", desc: "Baja el pie y observa caminar al caballo. Si camina más cómodo, el recorte fue correcto." }
  ]

  return (
    <section id="modulo-9" className="min-h-screen py-20 px-6 lg:px-16 bg-card flex flex-col justify-center border-t border-border">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto w-full">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 text-center">Módulo 9</h2>
        <h3 className="text-4xl lg:text-5xl font-bold mb-12 text-foreground text-center">Técnica de Recorte Paso a Paso</h3>
        
        <div className="bg-primary/10 p-8 lg:p-10 rounded-3xl mb-16 border-l-4 border-l-primary shadow-sm">
          <strong className="text-primary text-xl block mb-4">REGLAS DE ORO:</strong>
          <ul className="list-none space-y-3 text-muted-foreground text-lg">
            <li className="flex gap-3"><span className="text-primary font-bold">✓</span>El caballo debe estar relajado y cooperativo.</li>
            <li className="flex gap-3"><span className="text-primary font-bold">✓</span>Evalúa siempre al caballo en movimiento antes de recortar.</li>
            <li className="flex gap-3"><span className="text-primary font-bold">✓</span>Nunca recortes más de 5 mm en una sola sesión de mantenimiento.</li>
            <li className="flex gap-3"><span className="text-primary font-bold">✓</span>El objetivo es un casco que permita al caballo caminar cómodo AHORA.</li>
          </ul>
        </div>

        <div className="relative border-l-2 border-border/50 ml-4 md:ml-12 space-y-12 pb-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[11px] top-1 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-sm" />
              <h4 className="text-2xl font-bold text-foreground mb-2">{step.title}</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
