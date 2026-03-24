import { HeroSection } from "@/components/sections/hero"
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

const MARQUEE_A = [
  "Pie Descalzo", "Barefoot Trimming", "Mustang Roll",
  "Paddock Paradise", "Casco Natural", "Biomecánica",
  "Ranilla Activa", "Desgaste Natural", "Salud Equina",
]

const MARQUEE_B = [
  "Anatomía del Casco", "Nutrición Equina", "Herramientas de Corte",
  "Fisiología", "Laminitis", "Transición", "Movimiento Continuo",
  "Forraje 24/7", "Minerales Balanceados",
]

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <InfiniteMarquee items={MARQUEE_A} speed={40} />
      <Modulo1 />
      <Modulo2 />
      <InfiniteMarquee items={MARQUEE_B} speed={50} direction="right" />
      <Modulo3 />
      <Modulo4 />
      <Modulo5 />
      <InfiniteMarquee items={MARQUEE_A} speed={35} />
      <Modulo6 />
      <Modulo7 />
      <Modulo8 />
      <InfiniteMarquee items={MARQUEE_B} speed={45} direction="right" />
      <Modulo9 />
      <Modulo10 />
      <Modulo11 />
    </div>
  );
}
