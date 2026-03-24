"use client"
import { motion } from "framer-motion"
import { AlertTriangle, Info } from "lucide-react"

export function Modulo10() {
  const causes = [
    "Alimentaria/metabólica: Exceso de carbohidratos, EMS, Cushing.",
    "Sobrecarga: Al cargar excesivamente un miembro por cojera en el contrario.",
    "Endotoxemia: Enfermedades sistémicas graves (cólicos, retenciones).",
    "Trabajo excesivo sobre suelos duros de forma prolongada."
  ]

  const alerts = [
    "Anillos en la pared (rings) divergentes.",
    "Línea blanca ensanchada o amarillenta.",
    "Suela plana o caída (convexa).",
    "Pulso digital fuerte al tacto.",
    "Postura en sawhorse (echando peso hacia atrás)."
  ]

  return (
    <section id="modulo-10" className="min-h-screen py-20 px-6 lg:px-16 bg-background flex flex-col justify-center border-t border-border">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto w-full">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 text-center">Módulo 10</h2>
        <h3 className="text-4xl lg:text-5xl font-bold mb-12 text-foreground text-center">Laminitis: Prevención y Manejo</h3>
        
        <div className="bg-red-50 text-red-900 p-8 lg:p-10 rounded-3xl mb-12 border border-red-200 flex flex-col md:flex-row gap-6 items-center shadow-sm">
          <AlertTriangle className="w-16 h-16 shrink-0 text-red-600" />
          <p className="text-xl leading-relaxed font-medium">
            La laminitis es la inflamación de las láminas sensitivas del casco. Cuando se inflaman, la unión se debilita y puede producirse la rotación del hueso coffin. Es una urgencia veterinaria extremadamente dolorosa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-card p-10 rounded-3xl shadow-sm border border-border/50">
            <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Info className="text-primary w-6 h-6" /> Causas Principales
            </h4>
            <ul className="space-y-4">
              {causes.map((c, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground text-lg">
                  <span className="text-primary font-bold">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-card p-10 rounded-3xl shadow-sm border border-border/50">
            <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <AlertTriangle className="text-red-500 w-6 h-6" /> Señales de Alerta Temprana
            </h4>
            <ul className="space-y-4">
              {alerts.map((a, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground text-lg">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-card p-10 rounded-3xl shadow-sm mt-10 border border-border/50 text-center">
          <h4 className="text-2xl font-bold text-foreground mb-4">Manejo en caso de crisis aguda:</h4>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto">
            Contacta urgentemente al veterinario. Retira TODO acceso a pasto/granos, proporciona cama profunda de viruta o arena fina para reducir el dolor. No fuerces su movimiento y aplica hielo durante 72 hrs.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
