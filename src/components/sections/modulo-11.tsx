"use client"
import { motion } from "framer-motion"
import { CheckCircle2, AlertCircle } from "lucide-react"

export function Modulo11() {
  return (
    <section id="modulo-11" className="min-h-screen py-20 px-6 lg:px-16 bg-card flex flex-col justify-center border-t border-border">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto w-full">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 text-center">Módulo 11 & Conclusión</h2>
        <h3 className="text-4xl lg:text-5xl font-bold mb-12 text-foreground text-center">Transición y Mensaje Final</h3>
        
        <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
          La transición toma de 3 a 12 meses dependiento del estado previo. La "sensibilidad de transición" es normal; puedes usar botas de protección o asegurar superficies blandas para apoyar su recuperación.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-green-50/50 p-10 rounded-3xl border border-green-200 shadow-sm">
            <h4 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" /> Señales de Éxito
            </h4>
            <ul className="space-y-4 text-green-800 text-lg">
              <li className="flex gap-2"><span>•</span> Mejora progresiva en confort.</li>
              <li className="flex gap-2"><span>•</span> La ranilla crece hacia abajo y toca el suelo.</li>
              <li className="flex gap-2"><span>•</span> Los talones se abren (expansión lateral).</li>
              <li className="flex gap-2"><span>•</span> La almohadilla digital se palpa más firme.</li>
            </ul>
          </div>
          <div className="bg-red-50/50 p-10 rounded-3xl border border-red-200 shadow-sm">
            <h4 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-red-600" /> Señales de Alarma
            </h4>
            <ul className="space-y-4 text-red-800 text-lg">
              <li className="flex gap-2"><span>•</span> El caballo empeora o no mejora tras 3–4 meses.</li>
              <li className="flex gap-2"><span>•</span> Aparecen anillos (rings) divergentes nuevos.</li>
              <li className="flex gap-2"><span>•</span> Pulso digital fuerte constante.</li>
              <li className="flex gap-2"><span>•</span> Abscesos fuertes y recurrentes.</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground p-12 lg:p-20 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
          <h4 className="text-3xl lg:text-4xl font-extrabold mb-8 relative z-10">El Barefoot es un compromiso integral</h4>
          <p className="text-xl lg:text-2xl opacity-90 leading-relaxed max-w-4xl mx-auto mb-10 font-medium relative z-10">
            Un caballo que vive en movimiento, come lo que su fisiología puede procesar y tiene cascos mantenidos correctamente, tiene todas las condiciones para ser sano y longevo.
          </p>
          <div className="bg-card/10 p-6 rounded-2xl border border-white/20 inline-block relative z-10">
            <p className="text-xl font-bold">
              Sé el mejor observador de tu caballo y forma equipo con tu veterinario y tu recortador.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
