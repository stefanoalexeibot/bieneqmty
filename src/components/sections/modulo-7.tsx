"use client"
import { motion } from "framer-motion"
import { Map, Sun, Users, Activity } from "lucide-react"

export function Modulo7() {
  const elements = [
    { icon: <Map className="w-6 h-6 text-primary" />, title: "Espacios Separados", desc: "Puntos de agua, heno y minerales separados entre sí para forzar desplazamiento." },
    { title: "Variedad de Sustratos", icon: <Activity className="w-6 h-6 text-primary" />, desc: "Zonas de grava fina o arena para estimular la planta del casco." },
    { title: "Sombra y Refugio", icon: <Sun className="w-6 h-6 text-primary" />, desc: "Accesibles desde el corredor principal en todo momento." },
    { title: "Compañía Social", icon: <Users className="w-6 h-6 text-primary" />, desc: "Compañía de al menos otro caballo. El aislamiento eleva el cortisol y la insulina." }
  ]

  return (
    <section id="modulo-7" className="min-h-screen py-20 px-6 lg:px-16 bg-white flex flex-col justify-center border-t border-slate-100">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 text-center">Módulo 7</h2>
        <h3 className="text-4xl lg:text-5xl font-bold mb-16 text-foreground text-center">Entorno: Paddock Paradise</h3>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-16 items-center">
          <div className="prose prose-lg text-muted-foreground leading-relaxed">
            <h4 className="text-3xl font-bold text-foreground mb-6">El concepto diseñado por Jaime Jackson</h4>
            <p className="mb-6">
              A partir de estudios del mustang americano, el Paddock Paradise es un sistema de manejo donde el espacio del caballo se diseña en forma de corredor o pista alrededor del perímetro del terreno disponible.
            </p>
            <p>
              <strong className="text-primary tracking-wide block mb-2">¿POR QUÉ FUNCIONA?</strong> 
              Esto obliga al caballo a moverse continuamente. El movimiento continuo sobre terreno variado estimula la circulación en el casco, desgasta la pared y mantiene la almohadilla digital tonificada.
            </p>
          </div>
          
          <div className="bg-primary/5 rounded-[2rem] p-10 border border-primary/10 shadow-sm">
            <h4 className="text-2xl font-bold text-primary mb-8">Elementos Clave del Diseño</h4>
            <div className="space-y-8">
              {elements.map((el, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="mt-1 bg-white p-3 rounded-full shadow-sm flex items-center justify-center shrink-0">
                    {el.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-foreground mb-1">{el.title}</h5>
                    <p className="text-muted-foreground">{el.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-10 rounded-3xl text-center shadow-sm border border-slate-200">
          <h4 className="font-bold text-3xl text-foreground mb-4">¿Cuánto movimiento es suficiente?</h4>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Idealmente entre <strong className="text-primary text-2xl px-2">15 y 25 km diarios</strong>. <br/>En sistemas de estabulación convencional, un caballo puede moverse apenas 1–3 km, explicando gran parte de los cascos débiles o enfermos.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
