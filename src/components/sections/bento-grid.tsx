"use client";

import Link from "next/link";
import { ShoppingBag, GraduationCap, MapPin, ArrowRight } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ScrollReveal, RevealItem } from "@/components/animations/scroll-reveal";

export function BentoGrid() {
  return (
    <section className="relative w-full py-24 px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 text-center">
        <ScrollReveal>
          <RevealItem>
            <span className="text-bieneq-green font-semibold tracking-wider uppercase text-sm mb-4 block">Ecosistema Bieneq</span>
          </RevealItem>
          <RevealItem>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight">Todo lo que necesitas, en un solo lugar.</h2>
          </RevealItem>
        </ScrollReveal>

        {/* Bento Grid Layout */}
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]" staggerChildren={0.15}>
          
          {/* Card 1: Tienda */}
          <RevealItem className="md:col-span-2">
            <TiltCard className="h-full">
              <div className="group relative h-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between p-8 text-left backdrop-blur-sm">
                <BorderBeam size={250} duration={12} colorFrom="#b45309" colorTo="#d97706" />
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1996337/pexels-photo-1996337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity grayscale duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-bieneq-cafe/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-bieneq-cafe mb-auto shadow-inner backdrop-blur-md border border-white/10">
                  <ShoppingBag className="w-8 h-8" />
                </div>

                <div className="relative z-10 mt-12">
                  <h3 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase">Tienda Bieneq</h3>
                  <p className="text-white/60 mb-6 max-w-md font-light">Herramientas de nivel profesional y recursos digitales esenciales para el cuidado del casco.</p>
                  <Link href="/tienda" className="inline-flex items-center gap-2 text-white font-bold hover:text-bieneq-cafe transition-colors group/btn">
                    Explorar Catálogo <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </RevealItem>

          {/* Card 2: Academia */}
          <RevealItem>
            <TiltCard className="h-full">
              <div className="group relative h-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between p-8 text-left backdrop-blur-sm">
                <BorderBeam size={200} duration={10} colorFrom="#22c55e" colorTo="#10b981" delay={2} />
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1996331/pexels-photo-1996331.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity grayscale duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-bieneq-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-bieneq-green mb-auto shadow-inner backdrop-blur-md border border-white/10">
                  <GraduationCap className="w-8 h-8" />
                </div>

                <div className="relative z-10 mt-12">
                  <h3 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase">Bieneq Academy</h3>
                  <p className="text-white/60 mb-6 font-light">Formación de élite en podología equina integrativa.</p>
                  <Link href="/academia" className="inline-flex items-center gap-2 text-white font-bold hover:text-bieneq-green transition-colors group/btn">
                    Ver Cursos <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </RevealItem>

           {/* Card 3: Citas / Consultoría */}
           <RevealItem className="md:col-span-3">
            <TiltCard className="h-full">
              <div className="group relative h-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 text-left backdrop-blur-sm">
                <BorderBeam size={400} duration={20} colorFrom="#eab308" colorTo="#ca8a04" delay={5} />
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1996330/pexels-photo-1996330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity grayscale duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-bieneq-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 max-w-2xl">
                   <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-bieneq-yellow mb-6 shadow-inner backdrop-blur-md border border-white/10">
                     <MapPin className="w-8 h-8" />
                   </div>
                  <h3 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase">Consultoría y Servicios</h3>
                  <p className="text-white/60 mb-6 font-light text-lg">Agenda una evaluación clínica presencial en Monterrey, o una asesoría técnica remota desde cualquier parte del mundo.</p>
                </div>

                <div className="relative z-10 mt-6 md:mt-0">
                   <Link href="/citas" className="inline-flex items-center justify-center gap-2 bg-white text-black px-10 py-5 rounded-full font-black uppercase hover:scale-110 shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition-all active:scale-95">
                    Agendar Cita <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </RevealItem>

        </ScrollReveal>
      </div>
    </section>
  );
}
