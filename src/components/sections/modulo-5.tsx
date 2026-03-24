"use client"
import { motion } from "framer-motion"

export function Modulo5() {
  const steps = [
    { title: "1. Aterrizaje Talón-Primero", desc: "La ranilla contacta el suelo primero, luego los bulbos y talones, y finalmente la pinza." },
    { title: "2. Expansión Lateral", desc: "El impacto desencadena la expansión lateral de los talones (entre 3 y 5 mm en una pisada normal)." },
    { title: "3. Compresión", desc: "Se comprime la almohadilla digital, absorbiendo el impacto y protegiendo los huesos internos." },
    { title: "4. Bombeo de Sangre", desc: "Esta compresión empuja la sangre hacia arriba, estimulando la circulación en todo el miembro. ¡El corazón periférico!" }
  ]

  return (
    <section id="modulo-5" className="min-h-screen py-20 px-6 lg:px-16 bg-white flex flex-col justify-center border-t border-slate-100">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 text-center">Módulo 5</h2>
        <h3 className="text-4xl lg:text-5xl font-bold mb-12 text-foreground text-center">Fisiología: Cómo Funciona el Pie</h3>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg text-muted-foreground text-lg leading-relaxed">
            <h4 className="text-2xl font-bold text-foreground mb-4">El Mecanismo de Expansión</h4>
            <p className="mb-6">
              Cada vez que el casco toca el suelo, ocurre una secuencia perfectamente coordinada. La herradura convencional interfiere con este proceso al impedir la expansión lateral y elevar la ranilla del suelo.
            </p>
            <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
              <strong className="text-primary">La ranilla como sensor nervioso:</strong> Tiene alta densidad de receptores propioceptivos. Un caballo barefoot "siente" el terreno con precisión milimétrica, ajustando su paso en tiempo real.
            </div>
          </div>

          <div className="space-y-6">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-primary/40"></div>
                <h5 className="font-bold text-xl text-foreground mb-2">{step.title}</h5>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
