"use client";

import { SlideDeck, type Slide } from "@/components/ui/slide-deck";
import { 
  ShieldAlert, 
  Heart, 
  Compass, 
  CircleDot, 
  ChevronRight, 
  Apple, 
  Activity, 
  TrendingUp, 
  AlertCircle,
  Download,
  Calendar
} from "lucide-react";
import Link from "next/link";

export default function PilaresRecursoPage() {
  const slides: Slide[] = [
    {
      id: "portada",
      title: "Los 5 Pilares del Barefoot",
      subtitle: "Guía Rápida e Introducción",
      accent: "green",
      content: (
        <div className="flex flex-col items-center text-center justify-center p-8 space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-bieneq-green/10 border border-bieneq-green/20 flex items-center justify-center text-bieneq-green shadow-[0_0_50px_rgba(34,197,94,0.15)]">
            <Compass className="w-10 h-10 animate-pulse" />
          </div>
          <p className="text-white/60 text-lg max-w-md">
            Un manual desarrollado por José Manuel Luna para comprender el cuidado natural y el balance del casco del caballo.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-white/40 uppercase tracking-widest">
            Usa las flechas del teclado (← / →) o desliza para navegar
          </div>
        </div>
      )
    },
    {
      id: "objetivo",
      title: "Objetivo de la Formación",
      subtitle: "Filosofía Bieneq",
      accent: "green",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
          <div className="bg-white/5 border border-white/5 p-6 rounded-3xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-bieneq-green/10 flex items-center justify-center text-bieneq-green">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-lg">Conocimiento</h4>
            <p className="text-white/40 text-sm leading-relaxed">
              Brindar los fundamentos teóricos y herramientas prácticas para el cuidado y mantenimiento del pie.
            </p>
          </div>
          <div className="bg-white/5 border border-white/5 p-6 rounded-3xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-bieneq-green/10 flex items-center justify-center text-bieneq-green">
              <Apple className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-lg">Manejo Natural</h4>
            <p className="text-white/40 text-sm leading-relaxed">
              Fomentar prácticas de alojamiento libre, movimiento continuo y alimentación metabólicamente adecuada.
            </p>
          </div>
          <div className="bg-white/5 border border-white/5 p-6 rounded-3xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-bieneq-green/10 flex items-center justify-center text-bieneq-green">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-lg">Calidad de Vida</h4>
            <p className="text-white/40 text-sm leading-relaxed">
              Mejorar drásticamente la salud del animal mediante un pie sano, buena nutrición y conexión real con el propietario.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "que-es",
      title: "¿Qué es el Pie Descalzo o Barefoot?",
      subtitle: "Definición Básica",
      accent: "green",
      content: (
        <div className="flex flex-col md:flex-row gap-8 items-center py-4">
          <div className="flex-1 space-y-6">
            <p className="text-white/60 text-lg leading-relaxed">
              Es un enfoque natural para el cuidado de los cascos de los caballos, que permite que el pie funcione como fue diseñado por la naturaleza, libre de las limitaciones físicas y biomecánicas de las herraduras de metal.
            </p>
            <div className="border-l-4 border-bieneq-green pl-6 py-2 bg-bieneq-green/5 rounded-r-2xl">
              <p className="text-sm italic text-white/80">
                "No consiste solo en quitar herraduras y esperar, sino en crear las condiciones ambientales de nutrición, movimiento y desbaste que imitan el desgaste natural."
              </p>
            </div>
          </div>
          <div className="w-full md:w-80 aspect-video md:aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10 relative">
            <img 
              src="/images/home/wellness/IPPELP%20-%2005.jpg" 
              className="w-full h-full object-cover grayscale opacity-75 hover:grayscale-0 transition-all duration-700" 
              alt="Pie Descalzo"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80";
              }}
            />
          </div>
        </div>
      )
    },
    {
      id: "beneficios",
      title: "Beneficios de un Casco Libre",
      subtitle: "Fisiología Aplicada",
      accent: "green",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2">
          <div className="bg-white/5 border border-white/5 p-6 rounded-3xl hover:border-white/10 transition-colors">
            <span className="text-4xl font-bold text-bieneq-green/20 mb-4 block">01</span>
            <h4 className="font-bold text-white mb-2">Circulación Sanguínea</h4>
            <p className="text-white/40 text-sm leading-relaxed">
              El pie actúa como una bomba auxiliar. Al pisar, el casco se expande empujando la sangre de vuelta hacia arriba, aliviando el esfuerzo del corazón.
            </p>
          </div>
          <div className="bg-white/5 border border-white/5 p-6 rounded-3xl hover:border-white/10 transition-colors">
            <span className="text-4xl font-bold text-bieneq-green/20 mb-4 block">02</span>
            <h4 className="font-bold text-white mb-2">Absorción de Impactos</h4>
            <p className="text-white/40 text-sm leading-relaxed">
              Los talones y ranilla absorben las vibraciones de la pisada, previniendo lesiones crónicas en articulaciones, tendones y navicular.
            </p>
          </div>
          <div className="bg-white/5 border border-white/5 p-6 rounded-3xl hover:border-white/10 transition-colors">
            <span className="text-4xl font-bold text-bieneq-green/20 mb-4 block">03</span>
            <h4 className="font-bold text-white mb-2">Tracción y Agarre</h4>
            <p className="text-white/40 text-sm leading-relaxed">
              La elasticidad natural permite que el casco se amolde al terreno en milisegundos, ofreciendo mejor estabilidad física sobre cualquier superficie.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "compromiso",
      title: "No Hace Magia ni Milagros",
      subtitle: "El Factor Humano",
      accent: "yellow",
      content: (
        <div className="flex flex-col md:flex-row gap-8 items-center py-4">
          <div className="w-full md:w-72 bg-bieneq-yellow/10 border border-bieneq-yellow/20 p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-bieneq-yellow/10 flex items-center justify-center text-bieneq-yellow">
              <ShieldAlert className="w-6 h-6 animate-bounce" />
            </div>
            <h4 className="font-bold text-white text-lg">Advertencia</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              El Barefoot sirve para **todo tipo de caballos** (cualquier raza, edad o disciplina), pero **NO es para todos los dueños**.
            </p>
          </div>
          <div className="flex-1 space-y-4">
            <h4 className="font-bold text-white text-xl">¿Qué se requiere del propietario?</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li className="flex items-start gap-3">
                <CircleDot className="w-4 h-4 text-bieneq-yellow shrink-0 mt-1" />
                <span>**Naturalizar el entorno:** Asegurar movimiento libre en manada.</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot className="w-4 h-4 text-bieneq-yellow shrink-0 mt-1" />
                <span>**Alimentación adecuada:** Eliminar granos excesivos y azúcares.</span>
              </li>
              <li className="flex items-start gap-3">
                <CircleDot className="w-4 h-4 text-bieneq-yellow shrink-0 mt-1" />
                <span>**Recorte regular:** Mantener el balance con desbastes periódicos correctos.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "externa",
      title: "Anatomía Externa del Casco",
      subtitle: "El Escudo de Queratina",
      accent: "green",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="font-bold text-white text-sm mb-2">Banda Coronaria (Corona)</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              Zona de crecimiento vivo en la parte superior. Produce la pared del casco de arriba hacia abajo a un ritmo de ~1 cm por mes.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="font-bold text-white text-sm mb-2">Pared del Casco</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              Estructura dura de queratina tubular protectora. Distribuye las fuerzas físicas y requiere un ángulo ideal de 50-55° en manos.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="font-bold text-white text-sm mb-2">Bulbos</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              Tejido blando y vascularizado en la zona trasera. Bulbos contraídos o planos son indicador de un casco enfermo o herrado.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="font-bold text-white text-sm mb-2">Pinza</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              Parte delantera del casco. En barefoot se realiza un biselado suave (*Mustang Roll*) para evitar astillamientos al caminar.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "interna",
      title: "Anatomía Interna (La Planta)",
      subtitle: "Mecanismo del Pie",
      accent: "green",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="font-bold text-white text-sm mb-2">Ranilla</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              Triángulo flexible en la planta. Amortigua y funciona como bomba de sangre. Debe tocar firmemente el suelo para estar sana.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="font-bold text-white text-sm mb-2">Suela</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              Estructura cóncava que protege el interior del casco. La suela plana es señal de deformación interna o herrado prolongado.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="font-bold text-white text-sm mb-2">Línea Blanca</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              Unión de las láminas sensibles con las insensibles. Si se ensancha, denota estrés o principios de laminitis.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="font-bold text-white text-sm mb-2">Barras</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              Extensiones de la pared hacia los talones. Estabilizan el casco impidiendo la contracción dolorosa de los talones.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "dieta",
      title: "Alimentación Metabólicamente Adecuada",
      subtitle: "Nutrición natural",
      accent: "yellow",
      content: (
        <div className="flex flex-col md:flex-row gap-6 items-center py-4">
          <div className="flex-1 space-y-4">
            <h4 className="font-bold text-white text-lg">Evitar Excesos de Granos</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              El sistema digestivo del caballo está diseñado para procesar fibra (pasto y heno) de forma continua. Las dietas altas en almidón o granos comerciales sobrecargan el intestino ciego, provocando acidez y endotoxinas que viajan directas a los cascos.
            </p>
            <div className="flex items-center gap-4 text-xs font-bold text-bieneq-yellow uppercase">
              <span>🌾 Menos Granos</span>
              <span>•</span>
              <span>🌿 Más Fibra</span>
              <span>•</span>
              <span>⛰️ Minerales Libres</span>
            </div>
          </div>
          <div className="w-full md:w-72 p-6 rounded-3xl bg-white/5 border border-white/5 space-y-4">
            <h5 className="font-bold text-white text-sm">Beneficios de la Dieta Natural:</h5>
            <ul className="space-y-2 text-xs text-white/40">
              <li className="flex items-center gap-2">
                <CircleDot className="w-3.5 h-3.5 text-bieneq-yellow" />
                <span>Prevención de cólicos</span>
              </li>
              <li className="flex items-center gap-2">
                <CircleDot className="w-3.5 h-3.5 text-bieneq-yellow" />
                <span>Casco fuerte y sin ondulaciones</span>
              </li>
              <li className="flex items-center gap-2">
                <CircleDot className="w-3.5 h-3.5 text-bieneq-yellow" />
                <span>Prevención del hormiguillo</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "expansion",
      title: "La Expansión y Contracción",
      subtitle: "El Mecanismo de Amortiguación",
      accent: "green",
      content: (
        <div className="flex flex-col md:flex-row gap-8 items-center py-4">
          <div className="w-full md:w-80 bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center min-h-[220px]">
            <span className="text-xs font-bold text-bieneq-green uppercase tracking-widest mb-2 block">Ciclo de Carga</span>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-bieneq-green" />
                <div>
                  <p className="text-white text-sm font-bold">Apoyo en el suelo</p>
                  <p className="text-white/40 text-xs">El casco se expande lateralmente.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-bieneq-green" />
                <div>
                  <p className="text-white text-sm font-bold">Elevación del pie</p>
                  <p className="text-white/40 text-xs">El casco recupera su ancho original.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <h4 className="font-bold text-white text-xl">¿Por qué es crucial la expansión?</h4>
            <p className="text-white/40 text-sm leading-relaxed">
              Un pie contraído (donde el casco no se expande al pisar) bloquea la circulación y genera presión interna. Esto debilita la queratina y desgasta el hueso coffin, causando dolor constante en el talón que el caballo compensa pisando mal.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "consecuencias",
      title: "Efectos del Herrado Convencional",
      subtitle: "Patología del Herrado",
      accent: "yellow",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Pérdida de la Bomba Sanguínea</h4>
            <p className="text-white/40 text-sm leading-relaxed">
              Al fijar la pared del casco con clavos a una pieza de hierro rígida, se restringe la expansión en un 70%. Esto obliga al corazón a latir con más fuerza para compensar la falta de retorno venoso del pie.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Daño por Vibración</h4>
            <p className="text-white/40 text-sm leading-relaxed">
              Las herraduras transmiten la frecuencia de vibración del suelo (especialmente en asfalto) directamente al hueso, dañando articulaciones y causando la calcificación de cartílagos laterales.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "laminitis",
      title: "Indicadores de Laminitis",
      subtitle: "Emergencia Veterinaria",
      accent: "yellow",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
          <div className="p-6 rounded-3xl bg-red-950/20 border border-red-500/20 space-y-3">
            <div className="flex items-center gap-2 text-red-400">
              <AlertCircle className="w-5 h-5" />
              <h4 className="font-bold text-white text-sm uppercase tracking-widest">Indicadores Externos</h4>
            </div>
            <ul className="space-y-2 text-xs text-white/50">
              <li>• Dificultad marcada para caminar o girar.</li>
              <li>• Postura de fundador (apoyarse en talones traseros).</li>
              <li>• Casco inusualmente caliente al tacto.</li>
              <li>• Pulso digital perceptible e intenso en la cuartilla.</li>
            </ul>
          </div>
          <div className="p-6 rounded-3xl bg-red-950/20 border border-red-500/20 space-y-3">
            <div className="flex items-center gap-2 text-red-400">
              <AlertCircle className="w-5 h-5" />
              <h4 className="font-bold text-white text-sm uppercase tracking-widest">Indicadores Internos</h4>
            </div>
            <ul className="space-y-2 text-xs text-white/50">
              <li>• Dolor profundo al presionar la zona de la pinza.</li>
              <li>• Ensanchamiento o estiramiento de la línea blanca.</li>
              <li>• Rotación del hueso de la tercera falange.</li>
              <li>• Desprendimiento de la unión laminar sensitiva.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "cierre",
      title: "Lleva el Conocimiento Contigo",
      subtitle: "Fin de la Presentación",
      accent: "green",
      content: (
        <div className="flex flex-col items-center justify-center text-center p-8 space-y-8">
          <h4 className="text-xl md:text-2xl font-bold text-white">¿Quieres profundizar en el cuidado de tus caballos?</h4>
          <p className="text-white/50 text-sm max-w-lg leading-relaxed">
            Descarga la guía digital en PDF para tenerla en tus dispositivos o agenda una asesoría personalizada con nosotros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
            <Link 
              href="/citas"
              className="w-full sm:flex-1 py-4 bg-bieneq-green text-black font-bold uppercase tracking-widest rounded-2xl text-xs hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Agendar Consultoría
            </Link>
          </div>
        </div>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-20 px-6 flex items-center justify-center relative overflow-hidden">
      {/* Background ambience */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-bieneq-green/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-5xl relative z-10">
        <SlideDeck 
          title="Guía Rápida: Los 5 Pilares del Barefoot"
          slides={slides}
          pdfUrl="/content/recursos/guia-pie-descalzo.pdf"
          pdfName="Guia_Rapida_Los_5_Pilares_del_Barefoot.pdf"
          backUrl="/recursos"
        />
      </div>
    </main>
  );
}
