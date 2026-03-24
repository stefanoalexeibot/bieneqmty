"use client"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Modulo4() {
  const externalStructs = [
    { title: "Banda coronaria (corona)", desc: "Franja de tejido vivo ubicada en la unión entre la piel y la pared del casco. Produce la pared del casco de arriba hacia abajo a un ritmo de aproximadamente 1 cm por mes. Cualquier daño o interrupción produce irregularidades en la pared (rings, ondulaciones)." },
    { title: "Pared del casco", desc: "Estructura de queratina dura que protege las estructuras internas. Se divide en tres capas y crece desde la corona hacia abajo. Su ángulo ideal en las manos es de 50-55° y en los pies traseros de 53-58°." },
    { title: "Pinza", desc: "La parte frontal de la pared. Es el punto de mayor longitud y el primero en desgastarse en caballos salvajes. En barefoot se mantiene ligeramente biselada (mustang roll) para evitar que se astille." },
    { title: "Bulbos", desc: "Las dos protuberancias carnosas en la parte posterior del casco. Son tejido blando y altamente vascularizado. Cuando están planos o apretados, indican que el casco está contraído." },
    { title: "Ranilla", desc: "Estructura triangular de queratina blanda ubicada en la planta. Actúa como bomba auxiliar de sangre — al comprimir el suelo, empuja la sangre hacia arriba. También funciona como sensor propioceptivo. En barefoot debe estar desarrollada, firme y tocar el suelo." },
    { title: "Suela", desc: "Placa protectora de la planta del casco. En un casco sano debe ser cóncava (arqueada) para distribuir la presión hacia la pared y la ranilla. Una suela plana indica desequilibrio o problemas internos." },
    { title: "Línea blanca", desc: "Unión visible entre la pared y la suela. Es el punto de conexión entre las láminas sensibles y las láminas insensibles. En laminitis, esta zona se dilata, forma 'pockets' o cambia de color." },
    { title: "Barras", desc: "Extensiones de la pared que doblan hacia adentro en los talones. Estabilizan el talón y distribuyen el peso. Cuando crecen excesivamente hacia la suela, se sobrecargan y causan dolor." },
    { title: "Surco central y colaterales", desc: "Canales que rodean la ranilla. Son indicadores de salud: deben ser superficiales y limpios. Si son profundos o tienen material necrótico, indican podredumbre de ranilla (thrush)." }
  ]

  const internalStructs = [
    { title: "1ª Falange (hueso largo)", desc: "Se ubica encima del casco, entre el nudo y la corona." },
    { title: "2ª Falange (hueso corto)", desc: "Parcialmente dentro del casco. Articula entre la 1ª y 3ª falange." },
    { title: "3ª Falange o hueso coffin", desc: "El hueso principal dentro del casco. Su orientación determina el ángulo ideal de recorte. En laminitis, este hueso rota o se hunde — de ahí la gravedad de la enfermedad." },
    { title: "Hueso navicular", desc: "Pequeño hueso sesamoideo ubicado detrás de la 3ª falange. Relacionado con el síndrome navicular, condición que puede mejorar considerablemente con barefoot correcto." },
    { title: "Tendón flexor digital profundo (TFDP)", desc: "Recorre la parte posterior del casco y se inserta en la 3ª falange. Cuando los talones son demasiado altos, este tendón trabaja en tensión constante." },
    { title: "Láminas sensitivas y no sensitivas", desc: "Conexiones que mantienen la 3ª falange suspendida dentro del casco. Se entrelazan entre sí. En la laminitis, estas conexiones se dañan." },
    { title: "Almohadilla digital", desc: "Estructura de tejido fibrocartilaginoso detrás de los bulbos. En caballos con movimiento y ranilla desarrollada, se engrosará y mejorará el amortiguamiento. Con herraduras o poca actividad, se atrofia." }
  ]

  return (
    <section id="modulo-4" className="min-h-screen py-20 px-6 lg:px-16 bg-card flex flex-col justify-center border-t border-border">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto w-full">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 text-center">Módulo 4</h2>
        <h3 className="text-4xl lg:text-5xl font-bold mb-8 text-foreground text-center">Anatomía Completa del Casco</h3>
        
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto leading-relaxed">
          Conocer la anatomía es vital para entender cómo el entorno, la dieta y el recorte afectan la estructura.
        </p>

        <div className="space-y-16">
          <div>
            <h4 className="text-3xl font-bold mb-8 text-primary border-b pb-4">Estructuras Externas</h4>
            {/* @ts-ignore */}
            <Accordion type="single" collapsible className="w-full bg-background/50 rounded-2xl shadow-sm border border-border/50 px-6 py-4">
              {externalStructs.map((item, idx) => (
                <AccordionItem key={idx} value={`ext-${idx}`} className="border-b last:border-none border-border/50">
                  <AccordionTrigger className="text-xl font-semibold hover:text-primary transition-colors text-left py-6">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-8 pt-2">
                    {item.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h4 className="text-3xl font-bold mb-8 text-primary border-b pb-4">Estructuras Internas</h4>
            {/* @ts-ignore */}
            <Accordion type="single" collapsible className="w-full bg-background/50 rounded-2xl shadow-sm border border-border/50 px-6 py-4">
              {internalStructs.map((item, idx) => (
                <AccordionItem key={idx} value={`int-${idx}`} className="border-b last:border-none border-border/50">
                  <AccordionTrigger className="text-xl font-semibold hover:text-primary transition-colors text-left py-6">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-8 pt-2">
                    {item.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
