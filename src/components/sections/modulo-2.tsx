"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Activity, Scissors } from "lucide-react"

export function Modulo2() {
  const pillars = [
    { title: "Nutrición", icon: <Leaf className="w-8 h-8 text-primary" />, desc: "Dieta baja en azúcares, rica en fibra y minerales." },
    { title: "Movimiento", icon: <Activity className="w-8 h-8 text-primary" />, desc: "Mínimo 20 km/día en terrenos variados." },
    { title: "Recorte", icon: <Scissors className="w-8 h-8 text-primary" />, desc: "Imitando el desgaste natural del caballo salvaje." }
  ]

  return (
    <section id="modulo-2" className="min-h-screen py-20 px-6 lg:px-16 bg-slate-50 flex flex-col justify-center border-t border-slate-100">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="max-w-5xl">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Módulo 2</h2>
        <h3 className="text-4xl lg:text-5xl font-bold mb-8 text-foreground">¿Qué es el pie descalzo?</h3>
        
        <div className="prose prose-lg text-muted-foreground mb-12 max-w-none text-lg leading-relaxed">
          <p className="mb-6">
            El barefoot o pie descalzo no es una moda reciente ni una corriente radical. Es el retorno al estado natural del casco del caballo. Durante miles de años, los équidos recorrieron decenas de kilómetros diarios sobre distintos terrenos, y sus cascos se fortalecían con ese uso constante.
          </p>
          <p className="mb-6">
            La herradura de metal se popularizó hace 1,000 años para proteger cascos debilitados por condiciones de estabulación y dietas inadecuadas. Hoy en día, a menudo perpetúa exactamente los problemas que intenta resolver.
          </p>
          <div className="bg-white p-8 rounded-xl border-l-4 border-primary shadow-sm my-10 text-foreground font-medium text-xl">
            <strong className="text-primary tracking-wide">PRINCIPIO FUNDAMENTAL:</strong> El barefoot no es solo quitar herraduras y esperar. Es crear las condiciones para que el casco funcione como fue diseñado por la naturaleza.
          </div>
        </div>

        <h4 className="text-2xl lg:text-3xl font-bold mb-8 text-foreground text-center">Los 3 Pilares del Barefoot</h4>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <Card key={idx} className="border-none shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-primary/10 w-20 h-20 flex items-center justify-center rounded-full mb-6">
                  {pillar.icon}
                </div>
                <CardTitle className="text-2xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground text-lg">
                {pillar.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
