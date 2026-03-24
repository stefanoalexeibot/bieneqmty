"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Activity, Scissors } from "lucide-react"
import { cn } from "@/lib/utils"

export function Modulo2() {
  const pillars = [
    { title: "Nutrición", icon: <Leaf className="w-8 h-8 text-primary" />, desc: "Dieta baja en azúcares, rica en fibra y minerales." },
    { title: "Movimiento", icon: <Activity className="w-8 h-8 text-primary" />, desc: "Mínimo 20 km/día en terrenos variados." },
    { title: "Recorte", icon: <Scissors className="w-8 h-8 text-primary" />, desc: "Imitando el desgaste natural del caballo salvaje." }
  ]

  return (
    <section id="modulo-2" className="min-h-screen py-20 px-6 lg:px-16 bg-background flex flex-col justify-center border-t border-border">
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
          <div className="bg-card p-8 rounded-xl border-l-4 border-primary shadow-sm my-10 text-foreground font-medium text-xl">
            <strong className="text-primary tracking-wide">PRINCIPIO FUNDAMENTAL:</strong> El barefoot no es solo quitar herraduras y esperar. Es crear las condiciones para que el casco funcione como fue diseñado por la naturaleza.
          </div>
        </div>

        <h4 className="text-2xl lg:text-3xl font-bold mb-8 text-foreground text-center">Los 3 Pilares del Barefoot</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <Card key={idx} className={cn(
              "border-white/10 bg-white/5 backdrop-blur-md shadow-2xl hover:bg-white/10 transition-all duration-500 overflow-hidden relative group",
              idx === 0 ? "md:col-span-2 lg:col-span-2" : "",
              idx === 2 ? "md:col-span-2 lg:col-span-1" : ""
            )}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="pb-4 relative z-10">
                <div className="bg-primary/20 w-16 h-16 flex items-center justify-center rounded-2xl mb-4 text-primary group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <CardTitle className="text-3xl tracking-tight">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-lg relative z-10 leading-relaxed">
                {pillar.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
