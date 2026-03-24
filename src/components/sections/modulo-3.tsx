"use client"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function Modulo3() {
  const points = [
    "El casco se autorregula con el desgaste si el entorno es correcto.",
    "La ranilla siempre toca el suelo y actúa como bomba de sangre.",
    "La suela es cóncava, nunca plana.",
    "Las paredes son perpendiculares al suelo, sin flares.",
    "El ángulo de la pinza coincide con el ángulo del hueso coffin (3ª falange)."
  ]

  return (
    <section id="modulo-3" className="min-h-screen py-20 px-6 lg:px-16 bg-card flex flex-col justify-center border-t border-border">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="max-w-6xl">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Módulo 3</h2>
        <h3 className="text-4xl lg:text-5xl font-bold mb-12 text-foreground">El Caballo Salvaje como Referencia</h3>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="prose prose-lg text-muted-foreground text-lg leading-relaxed">
            <p className="mb-6">
              ¿Por qué estudiar al caballo salvaje? Porque es el único que tiene cascos sin intervención humana y, sin embargo, en perfectas condiciones. Los mustangs del oeste americano o los caballos de Przewalski recorren entre 20 y 40 km diarios sobre terrenos abrasivos. Sus cascos son compactos, duros, con ranilla bien desarrollada y suela cóncava.
            </p>
            <div className="bg-background p-8 rounded-xl mt-10 text-foreground font-medium shadow-inner border border-border text-xl">
              <span className="text-primary font-bold tracking-wide">DATO CLAVE:</span> Un caballo estabulado que no se mueve suficiente tendrá un casco débil independientemente del recorte. <br/><br/>
              <span className="text-muted-foreground italic">El movimiento es el motor del crecimiento y la salud del casco.</span>
            </div>
          </div>

          <div className="bg-primary/10 rounded-3xl p-10 border border-primary/20 shadow-lg">
            <h4 className="text-2xl lg:text-3xl font-bold mb-8 text-foreground">Lo que nos enseña el Mustang:</h4>
            <ul className="space-y-6">
              {points.map((point, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <span className="text-lg text-muted-foreground font-medium leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
