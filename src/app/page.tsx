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

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <Modulo1 />
      <Modulo2 />
      <Modulo3 />
      <Modulo4 />
      <Modulo5 />
      <Modulo6 />
      <Modulo7 />
      <Modulo8 />
      <Modulo9 />
      <Modulo10 />
      <Modulo11 />
    </div>
  );
}
