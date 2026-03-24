"use client"
import { motion } from "framer-motion"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export function Modulo6() {
  const allowed = [
    { title: "Heno de pasto", desc: "Base de la dieta (1.5-2% del peso corporal). Bajo en azúcares no estructurales." },
    { title: "Pasto fresco", desc: "Con moderación y supervisión. Ojo con los niveles de fructanos en primavera o heladas." },
    { title: "Agua limpia y ad libitum", desc: "Un caballo deshidratado tiene peor circulación en el casco." },
    { title: "Sal y minerales", desc: "Suplementos de cobre y zinc, minerales críticos para la queratina." }
  ]

  const forbidden = [
    { title: "Granos (avena, maíz, cebada)", desc: "Altos en almidones de digestión rápida. Producen acidosis cecal y elevan insulina." },
    { title: "Concentrados comerciales con melaza", desc: "El NSC (almidón + azúcar) no debe superar el 10-12% en caballos normales." },
    { title: "Heno de alfalfa en exceso", desc: "Rica en proteína y calcio, pero en exceso aporta demasiada energía y desequilibra." }
  ]

  return (
    <section id="modulo-6" className="min-h-screen py-20 px-6 lg:px-16 bg-background flex flex-col justify-center border-t border-border">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto w-full">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 text-center">Módulo 6</h2>
        <h3 className="text-4xl lg:text-5xl font-bold mb-8 text-foreground text-center">Nutrición: El Verdadero Cimiento</h3>
        
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          El casco crece a partir de células vivas nutridas por la sangre. Si la sangre lleva excesos de azúcares, el entorno hormonal se altera y las láminas se debilitan. <strong className="text-foreground">No hay recorte que corrija lo que una mala dieta destruye.</strong>
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-green-50/50 p-8 lg:p-10 rounded-3xl border border-green-200">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-green-200">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <h4 className="text-2xl font-bold text-green-900">Lo que SÍ debe comer</h4>
            </div>
            <ul className="space-y-6">
              {allowed.map((item, idx) => (
                <li key={idx} className="bg-card p-5 rounded-xl shadow-sm">
                  <h5 className="font-bold text-lg text-green-800 mb-1">{item.title}</h5>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50/50 p-8 lg:p-10 rounded-3xl border border-red-200">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-red-200">
              <AlertCircle className="w-8 h-8 text-red-600" />
              <h4 className="text-2xl font-bold text-red-900">Lo que HAY QUE EVITAR</h4>
            </div>
            <ul className="space-y-6">
              {forbidden.map((item, idx) => (
                <li key={idx} className="bg-card p-5 rounded-xl shadow-sm">
                  <h5 className="font-bold text-lg text-red-800 mb-1">{item.title}</h5>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 bg-red-100 text-red-900 p-5 rounded-xl text-sm leading-relaxed border border-red-200">
              <strong>Atención al Síndrome Metabólico Equino (EMS):</strong> Caballos con cresta nucal prominente y grasa detrás del hombro son de alto riesgo de laminitis crónica.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
