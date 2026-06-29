"use client";

import { SlideDeck, type Slide } from "@/components/ui/slide-deck";
import { 
  Eye, 
  HelpCircle, 
  Map, 
  Info, 
  Compass, 
  Volume2, 
  Heart, 
  ArrowRight, 
  Table, 
  XOctagon, 
  Lightbulb,
  FileText,
  Calendar,
  Layers
} from "lucide-react";
import Link from "next/link";

export default function EtologiaRecursoPage() {
  const slides: Slide[] = [
    {
      id: "portada",
      title: "Etología y Necesidades Básicas",
      subtitle: "Manual de Relación Humano-Caballo",
      accent: "yellow",
      content: (
        <div className="flex flex-col items-center text-center justify-center p-8 space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-bieneq-yellow/10 border border-bieneq-yellow/20 flex items-center justify-center text-bieneq-yellow shadow-[0_0_50px_rgba(234,179,8,0.15)]">
            <Heart className="w-10 h-10 animate-pulse" />
          </div>
          <p className="text-white/60 text-lg max-w-md">
            Un manual desarrollado sobre los fundamentos del comportamiento natural equino y sus requerimientos biológicos elementales.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-white/40 uppercase tracking-widest">
            Usa las flechas del teclado (← / →) o desliza para navegar
          </div>
        </div>
      )
    },
    {
      id: "preguntas",
      title: "¿Qué nos interesa realmente?",
      subtitle: "Preguntas Esenciales",
      accent: "yellow",
      content: (
        <div className="flex flex-col md:flex-row gap-8 items-center py-4">
          <div className="flex-1 space-y-4">
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed">
              Para comprender la conducta de tu caballo, debes alejarte de la perspectiva del manejo humano tradicional y plantearte tres preguntas fundamentales sobre su naturaleza:
            </p>
            <div className="bg-white/5 border border-white/5 p-6 rounded-3xl space-y-3">
              <p className="text-sm text-white/60 flex items-center gap-3">
                <HelpCircle className="w-4 h-4 text-bieneq-yellow shrink-0" />
                <span>¿Cómo viviría mi caballo en su hábitat natural?</span>
              </p>
              <p className="text-sm text-white/60 flex items-center gap-3">
                <HelpCircle className="w-4 h-4 text-bieneq-yellow shrink-0" />
                <span>¿De qué lo estamos privando al domesticarlo y estabularlo?</span>
              </p>
              <p className="text-sm text-white/60 flex items-center gap-3">
                <HelpCircle className="w-4 h-4 text-bieneq-yellow shrink-0" />
                <span>¿Cómo se relacionan entre ellos y cómo nos comunicamos nosotros?</span>
              </p>
            </div>
          </div>
          <div className="w-full md:w-72 bg-bieneq-yellow/5 border border-bieneq-yellow/20 p-8 rounded-[2rem] text-center">
            <span className="text-xs font-bold text-bieneq-yellow uppercase tracking-widest block mb-2">Máxima de Etología</span>
            <p className="text-2xl font-bold text-white font-heading">¿POR QUÉ?</p>
            <p className="text-xs text-white/40 mt-2 leading-relaxed">Antes de etiquetar una conducta como "mala", siempre pregúntate la causa biológica oculta.</p>
          </div>
        </div>
      )
    },
    {
      id: "definicion",
      title: "¿Qué es la Etología?",
      subtitle: "Estudio del Comportamiento",
      accent: "yellow",
      content: (
        <div className="flex flex-col md:flex-row gap-8 items-center py-4">
          <div className="flex-1 space-y-6">
            <p className="text-white/60 text-lg leading-relaxed">
              Proviene del griego *ethos* (costumbre) y *logos* (estudio). Es la ciencia encargada de estudiar el comportamiento de los seres vivos **en su entorno natural**.
            </p>
            <div className="border-l-4 border-bieneq-yellow pl-6 py-2 bg-bieneq-yellow/5 rounded-r-2xl">
              <p className="text-sm italic text-white/80">
                "La etología NO es el estudio del comportamiento de animales domesticados bajo el sesgo de nuestro manejo, sino cómo sus instintos evolutivos dictan sus reacciones."
              </p>
            </div>
          </div>
          <div className="w-full md:w-80 aspect-video md:aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10 relative">
            <img 
              src="/images/home/wellness/tampico-02.jpg" 
              className="w-full h-full object-cover grayscale opacity-75 hover:grayscale-0 transition-all duration-700" 
              alt="Etología"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=600&q=80";
              }}
            />
          </div>
        </div>
      )
    },
    {
      id: "habitat",
      title: "El Hábitat Natural Feral",
      subtitle: "Diseño Biológico",
      accent: "yellow",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Entorno Semiárido</h4>
            <p className="text-white/40 text-sm leading-relaxed">
              La anatomía (forma) y fisiología (funcionamiento) del caballo se desarrollaron en un hábitat seco y rústico. Están evolutivamente diseñados para soportar escasez de agua, variaciones drásticas de temperatura y comida con bajo valor nutricional dispersa en grandes extensiones.
            </p>
          </div>
          <div className="bg-white/5 border border-white/5 p-6 rounded-3xl flex flex-col justify-center space-y-2">
            <h5 className="font-bold text-white text-xs uppercase tracking-widest text-bieneq-yellow">Condiciones del Hábitat Evolutivo:</h5>
            <ul className="text-xs text-white/50 space-y-2">
              <li>• Suelos abrasivos y pedregosos (que desgastan el casco de forma natural).</li>
              <li>• Vegetación escasa y fibrosa (libre de azúcares concentrados).</li>
              <li>• Amplios terrenos abiertos que obligan al movimiento continuo.</li>
              <li>• Ausencia de refugios cerrados (necesidad de rango visual de escape).</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "presa",
      title: "El Caballo es un Animal Presa",
      subtitle: "Supervivencia y Huida",
      accent: "yellow",
      content: (
        <div className="flex flex-col md:flex-row gap-8 items-center py-4">
          <div className="w-full md:w-72 bg-red-950/20 border border-red-500/20 p-8 rounded-3xl space-y-4">
            <h4 className="font-bold text-white text-lg uppercase tracking-widest text-red-400">Instinto Primario</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              La principal defensa del caballo es la huida física. Son animales puramente instintivos: **"Primero huyo, después pienso."**
            </p>
          </div>
          <div className="flex-1 space-y-4">
            <h4 className="font-bold text-white text-xl">Mecanismos Evolutivos de Defensa</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>• **Espacios abiertos:** Se desarrollaron en planicies largas para detectar depredadores a gran distancia.</li>
              <li>• **Distancia de Huida:** Su zona de escape innata ante una amenaza es de **400 a 500 metros** antes de detenerse a evaluar.</li>
              <li>• **Claustrofobia natural:** El confinamiento en boxes anula su capacidad de huir, disparando altos niveles de cortisol y estrés.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "manada",
      title: "La Vida en Manada",
      subtitle: "El Grupo Social",
      accent: "yellow",
      content: (
        <div className="flex flex-col md:flex-row gap-8 items-center py-4">
          <div className="flex-1 space-y-4">
            <h4 className="font-bold text-white text-lg">Animal Gregario</h4>
            <p className="text-white/40 text-sm leading-relaxed">
              El caballo necesita socializar obligatoriamente. La manada representa seguridad y salud psicológica. Un caballo aislado se siente vulnerable y expuesto a la muerte.
            </p>
            <h4 className="font-bold text-white text-lg">Facilitación Social</h4>
            <p className="text-white/40 text-sm leading-relaxed">
              Es la sincronización natural de actividades (comer, moverse, descansar). Permite turnos de vigilancia mutua para que el grupo descanse de forma segura y ahorre energía.
            </p>
          </div>
          <div className="w-full md:w-80 aspect-video md:aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10 relative">
            <img 
              src="/images/home/wellness/tampico-02.jpg" 
              className="w-full h-full object-cover grayscale opacity-75 hover:grayscale-0 transition-all duration-700" 
              alt="Caballos en manada"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1506795660198-e95c77602129?w=600&q=80";
              }}
            />
          </div>
        </div>
      )
    },
    {
      id: "sentidos",
      title: "La Visión del Caballo",
      subtitle: "Percepción del Depredador",
      accent: "yellow",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2">
          <div className="bg-white/5 border border-white/5 p-6 rounded-3xl">
            <div className="w-10 h-10 rounded-xl bg-bieneq-yellow/10 flex items-center justify-center text-bieneq-yellow mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white mb-2">Visión Periférica</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              Tienen los ojos a los lados de la cabeza, permitiendo un campo monocular gigante de 130-140° por ojo para rastrear el horizonte.
            </p>
          </div>
          <div className="bg-white/5 border border-white/5 p-6 rounded-3xl">
            <div className="w-10 h-10 rounded-xl bg-bieneq-yellow/10 flex items-center justify-center text-bieneq-yellow mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white mb-2">Visión Dificultosa</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              Mucha detección de movimiento, pero bajo detalle. Tienen puntos ciegos notables (directo detrás de su cola y debajo de su nariz).
            </p>
          </div>
          <div className="bg-white/5 border border-white/5 p-6 rounded-3xl">
            <div className="w-10 h-10 rounded-xl bg-bieneq-yellow/10 flex items-center justify-center text-bieneq-yellow mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white mb-2">Gama Cromática</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              Son dicromáticos. Distinguen bien tonos azules, verdes y amarillos. No diferencian los rojos y violetas.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "sentidos-2",
      title: "Oído y Órgano Vomeronasal",
      subtitle: "Señales Invisibles",
      accent: "yellow",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-bieneq-yellow">
              <Volume2 className="w-5 h-5" />
              <h4 className="font-bold text-white text-base">Oído y Vibraciones</h4>
            </div>
            <p className="text-white/40 text-xs leading-relaxed">
              Su rango auditivo (4 Hz a 25 kHz) supera al del humano en altas frecuencias. Las orejas móviles se orientan al origen del sonido. Además, captan vibraciones de la tierra mediante sus cascos y dientes mientras pastan.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-bieneq-yellow">
              <Compass className="w-5 h-5" />
              <h4 className="font-bold text-white text-base">Órgano Vomeronasal</h4>
            </div>
            <p className="text-white/40 text-xs leading-relaxed">
              Ubicado sobre el paladar, detecta feromonas en el aire. Para activarlo, el caballo realiza el reflejo de **Flehmen**: levanta la cabeza, sube el labio superior y bombea aire hacia el saco nasal para procesar feromonas reproductivas o de alarma.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "necesidades",
      title: "Las Tres Necesidades Básicas",
      subtitle: "La Trinidad del Bienestar",
      accent: "yellow",
      content: (
        <div className="flex flex-col items-center justify-center py-4 space-y-6 max-w-2xl mx-auto">
          <div className="border-l-4 border-bieneq-yellow pl-6 py-2 bg-bieneq-yellow/5 rounded-r-2xl">
            <p className="text-base md:text-lg italic text-white/80">
              "Las cosas que más importan para el caballo son: la compañía, la libertad y bastantes horas masticando. Es impresionante cuan a menudo los privamos de las tres y pensamos que estamos cuidándolos bien."
            </p>
            <span className="text-xs text-white/40 mt-2 block font-bold">— Lucy Rees, Etóloga</span>
          </div>
          <div className="grid grid-cols-3 gap-6 w-full text-center pt-4">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
              <p className="text-sm font-bold text-white">Compañía</p>
              <p className="text-[10px] text-white/40 mt-1">Manada y contacto social</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
              <p className="text-sm font-bold text-white">Libertad</p>
              <p className="text-[10px] text-white/40 mt-1">Movimiento continuo 24/7</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
              <p className="text-sm font-bold text-white">Masticación</p>
              <p className="text-[10px] text-white/40 mt-1">Fibra libre de azúcares</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "alimentacion",
      title: "El Sistema Digestivo",
      subtitle: "Alimentación Natural",
      accent: "yellow",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Masticación Continua</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              El caballo feral invierte hasta **18 horas diarias** en comer. Produce hasta 12 litros de saliva al día para neutralizar los ácidos estomacales.
            </p>
            <h4 className="font-bold text-white text-lg">Estómago Pequeño</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              Su capacidad estomacal es limitada (7-15 litros), pero secreta ácido de forma ininterrumpida. Si el estómago pasa horas vacío, los ácidos erosionan las paredes provocando úlceras dolorosas.
            </p>
          </div>
          <div className="p-6 rounded-3xl bg-white/5 border border-white/5 flex flex-col justify-center space-y-3">
            <h5 className="font-bold text-white text-xs uppercase tracking-widest text-bieneq-yellow">Consumo hídrico:</h5>
            <p className="text-white/40 text-xs">
              Requieren entre **38 y 45 litros de agua al día**. La digestión de fibra requiere una gran reserva de líquidos en el ciego, actuando como depósito interno de agua y electrolitos.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "comparativa",
      title: "Resumen Comparativo",
      subtitle: "Feral vs Doméstico",
      accent: "yellow",
      content: (
        <div className="overflow-x-auto w-full py-2">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-bieneq-yellow font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Factor</th>
                <th className="py-3 px-4">Caballo Salvaje (Feral)</th>
                <th className="py-3 px-4">Caballo Estabulado (Doméstico)</th>
              </tr>
            </thead>
            <tbody className="text-white/60 divide-y divide-white/5">
              <tr>
                <td className="py-3 px-4 font-bold text-white">Alimentación</td>
                <td className="py-3 px-4">18h comiendo, 55,000 movimientos de mandíbula.</td>
                <td className="py-3 px-4">3h comiendo, 7,000 movimientos. Raciones altas en grano.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-white">Movimiento</td>
                <td className="py-3 px-4">Hasta 30 km diarios en terrenos variados.</td>
                <td className="py-3 px-4">A veces 1 hora al día o confinamiento total.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-white">Alojamiento</td>
                <td className="py-3 px-4">Aire libre en manada 24/7.</td>
                <td className="py-3 px-4">23 horas en box cerrado de 3x3 metros.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-white">Socialización</td>
                <td className="py-3 px-4">Contacto continuo con su grupo familiar.</td>
                <td className="py-3 px-4">Aislado visual y físicamente de otros equinos.</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      id: "afectaciones",
      title: "Consecuencias de la Estabulación",
      subtitle: "Estrés y Estereotipias",
      accent: "yellow",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Estereotipias (Vicios de Cuadra)</h4>
            <p className="text-white/40 text-xs leading-relaxed">
              Conductas repetitivas anormales (tragar aire, balanceo, morder madera). Son un mecanismo de supervivencia neurológica: el caballo realiza estos movimientos para forzar la liberación de endorfinas que mitiguen su estrés crónico por encierro.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Enfermedades Físicas Frecuentes</h4>
            <ul className="text-xs text-white/50 space-y-2">
              <li className="flex items-center gap-2">
                <XOctagon className="w-4 h-4 text-red-500 shrink-0" />
                <span>**Cólicos recurrentes:** Por dietas rápidas de concentrado.</span>
              </li>
              <li className="flex items-center gap-2">
                <XOctagon className="w-4 h-4 text-red-500 shrink-0" />
                <span>**Úlceras gástricas:** Por pasar horas con el estómago vacío.</span>
              </li>
              <li className="flex items-center gap-2">
                <XOctagon className="w-4 h-4 text-red-500 shrink-0" />
                <span>**Patologías de cascos:** Por camas de aserrín orinadas y falta de flujo de sangre.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "propuestas",
      title: "Propuestas de Solución",
      subtitle: "Manejo Alternativo",
      accent: "yellow",
      content: (
        <div className="flex flex-col md:flex-row gap-6 items-center py-4">
          <div className="flex-1 space-y-4">
            <h4 className="font-bold text-white text-lg">Modificaciones Creativas</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              No necesitas grandes extensiones de tierra o presupuestos millonarios. El rediseño del espacio y el manejo diario marcan la diferencia:
            </p>
            <ul className="space-y-2 text-xs text-white/40">
              <li>• **Hospedaje tipo Paddock Paradise:** Pistas en forma de corredor para obligar al movimiento en manada.</li>
              <li>• **Slow Feeders (Redes):** Disminuyen la velocidad de ingesta para que el caballo mastique más horas sin engordar.</li>
              <li>• **Corrales de Integración:** Integrar gradualmente al caballo con otros congéneres para que viva en grupo.</li>
            </ul>
          </div>
          <div className="w-full md:w-72 p-6 rounded-3xl bg-bieneq-yellow/10 border border-bieneq-yellow/20 flex flex-col justify-center text-center">
            <Lightbulb className="w-8 h-8 text-bieneq-yellow mx-auto mb-2" />
            <p className="text-xs italic text-white/70">
              "Hagan lo mejor que puedan con lo que tengan. La mayor limitante no es el dinero o el espacio, sino la creatividad."
            </p>
          </div>
        </div>
      )
    },
    {
      id: "cierre",
      title: "Consigue la Guía Completa",
      subtitle: "Fin de la Presentación",
      accent: "yellow",
      content: (
        <div className="flex flex-col items-center justify-center text-center p-8 space-y-8">
          <h4 className="text-xl md:text-2xl font-bold text-white">¿Deseas profundizar en la relación y comportamiento de tu caballo?</h4>
          <p className="text-white/50 text-sm max-w-lg leading-relaxed">
            Descarga el manual completo en PDF para tenerlo en tu móvil o tableta, o contáctanos para agendar una consultoría de manejo natural.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
            <Link 
              href="/citas"
              className="w-full sm:flex-1 py-4 bg-bieneq-yellow text-black font-bold uppercase tracking-widest rounded-2xl text-xs hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-2"
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
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-bieneq-yellow/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-5xl relative z-10">
        <SlideDeck 
          title="Guía Completa: Etología y Necesidades Básicas"
          slides={slides}
          pdfUrl="/content/recursos/etologia-y-necesidades-basicas.pdf"
          pdfName="Etologia_y_Necesidades_Basicas.pdf"
          backUrl="/recursos"
        />
      </div>
    </main>
  );
}
