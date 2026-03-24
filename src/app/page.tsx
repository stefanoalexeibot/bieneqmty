import { HeroSection } from "@/components/sections/hero"
import { Presentacion } from "@/components/sections/presentacion"
import { Etologia } from "@/components/sections/etologia"
import { HabitatPresa } from "@/components/sections/habitat-presa"
import { VidaManada } from "@/components/sections/vida-manada"
import { Sentidos } from "@/components/sections/sentidos"
import { Necesidades } from "@/components/sections/necesidades"
import { Bienestar } from "@/components/sections/bienestar"
import { Comportamientos } from "@/components/sections/comportamientos"
import { PausaComida } from "@/components/sections/pausa"
import { Modulo1 } from "@/components/sections/modulo-1"
import { Modulo2 } from "@/components/sections/modulo-2"
import { Modulo3 } from "@/components/sections/modulo-3"
import { Modulo4 } from "@/components/sections/modulo-4"
import { Modulo5 } from "@/components/sections/modulo-5"
import { Modulo6 } from "@/components/sections/modulo-6"
import { Modulo7 } from "@/components/sections/modulo-7"
import { Modulo8 } from "@/components/sections/modulo-8"
import { Modulo9 } from "@/components/sections/modulo-9"
import { Modulo10 } from "@/components/sections/modulo-10"
import { Modulo11 } from "@/components/sections/modulo-11"
import { InfiniteMarquee } from "@/components/ui/infinite-marquee"
import { CourseControls } from "@/components/layout/course-controls"

const ETOLOGIA_MARQUEE = [
  "Etología Equina", "Hábitat Natural", "Animal de Presa",
  "Vida en Manada", "Los Sentidos", "Necesidades Básicas",
  "Comportamiento", "Facilitación Social", "Bienestar Equino",
]

const BAREFOOT_MARQUEE = [
  "Pie Descalzo", "Barefoot Trimming", "Mustang Roll",
  "Paddock Paradise", "Casco Natural", "Biomecánica",
  "Ranilla Activa", "Desgaste Natural", "Salud Equina",
]

const MARQUEE_END = [
  "Anatomía del Casco", "Nutrición Equina", "Herramientas de Corte",
  "Fisiología", "Laminitis", "Transición", "Movimiento Continuo",
  "Forraje 24/7", "Minerales Balanceados",
]

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <CourseControls />
      <HeroSection />

      <Presentacion />
      <InfiniteMarquee items={ETOLOGIA_MARQUEE} speed={40} />

      <Etologia />
      <HabitatPresa />
      <VidaManada />
      <Sentidos />
      <Necesidades />
      <Bienestar />
      <Comportamientos />

      <PausaComida />
      <InfiniteMarquee items={BAREFOOT_MARQUEE} speed={35} direction="right" />

      <Modulo1 />
      <Modulo2 />
      <InfiniteMarquee items={MARQUEE_END} speed={50} direction="right" />
      <Modulo3 />
      <Modulo4 />
      <Modulo5 />
      <InfiniteMarquee items={BAREFOOT_MARQUEE} speed={35} />
      <Modulo6 />
      <Modulo7 />
      <Modulo8 />
      <InfiniteMarquee items={MARQUEE_END} speed={45} direction="right" />
      <Modulo9 />
      <Modulo10 />
      <Modulo11 />
      <InfiniteMarquee items={ETOLOGIA_MARQUEE} speed={40} />
    </div>
  )
}
