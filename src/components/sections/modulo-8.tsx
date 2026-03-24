"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench } from "lucide-react"

export function Modulo8() {
  const tools = [
    { title: "Casco de pezuñero (Hoof jack)", desc: "Soporte regulable en altura para sostener el pie. Reduce fatiga y permite buena postura." },
    { title: "Rascador de cascos (Hoof pick)", desc: "Primer paso siempre: limpiar el casco antes de evaluarlo o recortarlo." },
    { title: "Pinzas de casco (Nippers)", desc: "Tijeras de gran apertura para cortar pared. Deben estar perfectamente afiladas." },
    { title: "Cuchilla de suela (Hoof knife)", desc: "Para limpiar la suela y evaluar surcos. Existen con hoja derecha e izquierda." },
    { title: "Raspa (Rasp)", desc: "La herramienta más versátil. Cara áspera para reducir pared; cara fina (lima) para terminar el mustang roll." },
    { title: "Bloque de recorte", desc: "Superficie de plástico o madera donde apoyar el casco con comodidad para verificar balance." }
  ]

  return (
    <section id="modulo-8" className="min-h-screen py-20 px-6 lg:px-16 bg-background flex flex-col justify-center border-t border-border">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto w-full">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 text-center">Módulo 8</h2>
        <h3 className="text-4xl lg:text-5xl font-bold mb-16 text-foreground text-center">Herramientas del Recortador</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, idx) => (
            <Card key={idx} className="border-none shadow-md hover:shadow-xl transition-all bg-card group hover:-translate-y-1">
              <CardHeader className="pb-4 flex flex-col items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary group-hover:text-white text-primary transition-colors">
                  <Wrench className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{tool.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-base leading-relaxed">
                {tool.desc}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-card p-10 rounded-3xl shadow-sm border border-border/50 transition-all hover:shadow-md">
            <h4 className="font-bold text-2xl text-foreground mb-5">Mantenimiento Correcto</h4>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Las cuchillas deben afilarse regularmente. Una raspa gastada no corta, sino que aplana — no sirve y durará entre 3 a 6 meses de uso. Las nippers se afilan con piedras especializadas.
            </p>
          </div>
          <div className="bg-card p-10 rounded-3xl shadow-sm border border-border/50 border-l-8 border-l-primary transition-all hover:shadow-md">
            <h4 className="font-bold text-2xl text-foreground mb-5">Equipo de Protección</h4>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Usa guantes de trabajo duraderos, gafas de protección y calzado con punta reforzada. El recorte de cascos es un trabajo físico exigente — <strong>cuida tu cuerpo ante todo</strong>.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
