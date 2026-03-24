"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function Modulo1() {
  return (
    <section id="modulo-1" className="min-h-screen flex flex-col justify-center px-6 lg:px-16 py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl"
      >
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Módulo 1</h2>
        <h3 className="text-4xl lg:text-5xl font-bold mb-12 text-foreground">Bienvenida e Introducción</h3>
        
        <blockquote className="border-l-4 border-primary pl-6 text-xl lg:text-3xl font-medium text-slate-700 italic mb-16 leading-relaxed">
          "El casco de un caballo no es solo una estructura de queratina — es un corazón periférico, un amortiguador biomecánico y el reflejo más fiel de la salud interna del animal."
        </blockquote>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-md bg-slate-50">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold mb-4 text-foreground">Sobre el instructor</h4>
              <p className="text-muted-foreground leading-relaxed">
                Soy un profesional certificado en cuidado natural del casco con años de experiencia trabajando con caballos de todas las razas y disciplinas. He acompañado la transición de múltiples caballos de herraduras convencionales a pie descalzo, viendo de primera mano cómo mejora su calidad de vida. Este curso nació de esa experiencia práctica.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-primary/5">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold mb-4 text-primary">¿Qué vas a aprender?</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Al finalizar este curso serás capaz de:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">Evaluar el estado del casco de tu caballo.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">Entender la importancia del entorno y nutrición (70% del éxito).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">Identificar señales tempranas de problemas.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">Tomar decisiones informadas junto a tu veterinario y herrador.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}
