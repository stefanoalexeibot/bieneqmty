"use client";

import { motion } from "framer-motion";
import { Play, Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { Magnetic } from "@/components/ui/magnetic";
import { ClinicHDGallery } from "@/components/sections/clinic-gallery";
import { ClinicVisitor } from "@/components/sections/clinic-visitor";
import { ClinicTampicoGallery } from "@/components/sections/clinic-tampico-gallery";
import { ScrollReveal, RevealItem } from "@/components/animations/scroll-reveal";
import { BorderBeam } from "@/components/ui/border-beam";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { clinics } from "@/lib/clinics";
import { Sparkles } from "lucide-react";

export default function ClinicasPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "gcUj60vlPrE";

  const { x, y } = useMousePosition();
  const springConfig = { stiffness: 150, damping: 20 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    mouseX.set((x / (typeof window !== "undefined" ? window.innerWidth : 1)) - 0.5);
    mouseY.set((y / (typeof window !== "undefined" ? window.innerHeight : 1)) - 0.5);
  }, [x, y, mouseX, mouseY]);

  const bgX = useTransform(mouseX, [-0.5, 0.5], [15, -15]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], [15, -15]);

  return (
    <main className="min-h-screen bg-transparent pt-32 pb-24 overflow-hidden relative">
      {/* Background decoration */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute top-0 left-0 w-full h-[100vh] pointer-events-none opacity-50 overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-bieneq-green/10 via-transparent to-transparent" />
        <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-bieneq-green/5 blur-[120px] rounded-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <ScrollReveal direction="up" staggerChildren={0.15}>
            <RevealItem>
              <span className="text-bieneq-green font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Inmersión Técnica</span>
            </RevealItem>
            <RevealItem>
              <h1 className="text-5xl md:text-8xl font-heading font-bold text-white leading-[1.1] mb-8">
                Lo que se vivió en la <br />
                <ShimmerWord className="text-5xl md:text-8xl">Clínica.</ShimmerWord>
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                Revive la experiencia de nuestra última clínica presencial. Teoría avanzada, práctica real y una comunidad apasionada por el bienestar equino.
              </p>
            </RevealItem>
          </ScrollReveal>
        </div>

        {/* Featured Clinic - NEW */}
        <div className="mb-32">
          <ScrollReveal direction="up" delay={0.3}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-bieneq-green to-bieneq-yellow rounded-[4rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <Link 
                href={`/clinicas/${clinics[0].slug}`}
                className="relative block p-12 md:p-16 rounded-[4rem] bg-black/40 border border-white/10 backdrop-blur-3xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden">
                    <img 
                      src={clinics[0].featuredImage} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      alt="Next Clinic"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  
                  <div className="space-y-8">
                    <div className="flex items-center gap-3">
                      <span className="px-4 py-1.5 bg-bieneq-green text-black text-[10px] font-bold uppercase tracking-widest rounded-full">Próximo Evento</span>
                      <span className="text-white/40 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <Sparkles className="w-3 h-3" /> {clinics[0].date}
                      </span>
                    </div>
                    
                    <h3 className="text-4xl md:text-6xl font-heading font-bold text-white leading-none">
                      {clinics[0].name}
                    </h3>
                    
                    <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                      {clinics[0].shortDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-6 pt-4">
                      <div className="flex items-center gap-3 text-white/40">
                        <MapPin className="w-5 h-5 text-bieneq-green" />
                        <span className="text-sm font-bold uppercase tracking-widest">{clinics[0].location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/40">
                        <Users className="w-5 h-5 text-bieneq-green" />
                        <span className="text-sm font-bold uppercase tracking-widest">Cupos Limitados</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="inline-flex items-center gap-4 px-8 py-4 bg-white text-black font-bold rounded-2xl group/btn overflow-hidden relative">
                         <span className="relative z-10">Ver Detalles de la Clínica</span>
                         <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover/btn:translate-x-1" />
                         <div className="absolute inset-0 bg-bieneq-green translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Cinematic Video Wrapper */}
        <ScrollReveal direction="up" delay={0.4}>
          <div
            className="relative group aspect-video lg:aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(34,197,94,0.1)] bg-black/40 backdrop-blur-sm mb-32"
          >
            <BorderBeam size={400} duration={12} colorFrom="#16a34a" colorTo="#84cc16" />
            {!isPlaying ? (
              <div 
                className="absolute inset-0 cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                {/* Overlay with dynamic gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                
                {/* Thumbnail (using high res YT thumb) */}
                <img 
                  src="/images/home/wellness/tampico-02.jpg"
                  alt="Clinic Experience Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="md:block hidden">
                    <Magnetic strength={0.2}>
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-500">
                        <Play className="w-10 h-10 fill-current ml-2" />
                      </div>
                    </Magnetic>
                  </div>
                  {/* Simple play button for mobile to avoid magnetic interference */}
                  <div className="md:hidden w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.4)] active:scale-95 transition-transform">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>

                {/* Video Title Indicator */}
                <div className="absolute bottom-10 left-10 z-20 hidden md:block">
                  <div className="flex items-center gap-4 text-white/50 mb-2">
                    <div className="w-12 h-[1px] bg-white/20" />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase">Resumen de Clínica</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white uppercase tracking-tighter">Aftermovie Oficial</h4>
                </div>
              </div>
            ) : (
              <iframe 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`} 
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Clinica Aftermovie"
              />
            )}
          </div>
        </ScrollReveal>

        {/* HD Gallery Bento - Clinica 01 */}
        <div className="mb-20">
          <h4 className="text-2xl font-bold text-white mb-8 border-l-4 border-bieneq-green pl-6">Clínica 01 - Memoria Visual</h4>
          <ClinicHDGallery />
        </div>

        {/* Tommy Vasques Visit Section */}
        <div className="mb-20">
          <ClinicVisitor />
        </div>

        {/* Clínica 03 Tampico Gallery */}
        <div className="mb-32">
          <ClinicTampicoGallery />
        </div>

        {/* Experience Details Bento */}
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32" staggerChildren={0.1}>
          <RevealItem className="relative p-8 rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden group">
            <BorderBeam size={200} duration={12} colorFrom="#16a34a" colorTo="#84cc16" />
            <Calendar className="w-8 h-8 text-bieneq-green mb-6" />
            <h5 className="text-xl font-bold text-white mb-3 relative z-10 transition-transform group-hover:translate-x-1">Formación Continua</h5>
            <p className="text-white/40 leading-relaxed relative z-10">
              2 días de inmersión total combinando anatomía aplicada y disecciones con práctica real en pista.
            </p>
          </RevealItem>
          
          <RevealItem className="relative p-8 rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden group">
            <BorderBeam size={200} duration={10} colorFrom="#eab308" colorTo="#ca8a04" delay={2} />
            <MapPin className="w-8 h-8 text-bieneq-yellow mb-6" />
            <h5 className="text-xl font-bold text-white mb-3 relative z-10 transition-transform group-hover:translate-x-1">Sedes Premium</h5>
            <p className="text-white/40 leading-relaxed relative z-10">
              Instalaciones de primer nivel diseñadas para el confort del caballo y la mejor experiencia de aprendizaje.
            </p>
          </RevealItem>

          <RevealItem className="relative p-8 rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden group">
            <BorderBeam size={200} duration={14} colorFrom="#c2410c" colorTo="#9a3412" delay={4} />
            <Users className="w-8 h-8 text-bieneq-green mb-6" />
            <h5 className="text-xl font-bold text-white mb-3 relative z-10 transition-transform group-hover:translate-x-1">Comunidad Real</h5>
            <p className="text-white/40 leading-relaxed relative z-10">
              Conexión con profesionales y propietarios que buscan elevar el estándar de salud equina en México.
            </p>
          </RevealItem>
        </ScrollReveal>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/clinics/clinica-01-hd/01.png')] bg-cover bg-center opacity-10 grayscale mix-blend-overlay" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">¿Listo para la próxima?</h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
              Nuestras clínicas tienen cupo limitado para garantizar atención personalizada. Asegura tu lugar hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Magnetic strength={0.3}>
                <Link 
                  href="/citas" 
                  className="px-10 py-5 bg-bieneq-green text-black font-bold rounded-full hover:bg-white transition-all flex items-center gap-3 group"
                >
                  Agendar Consultoría <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Magnetic>
              <Link href="/academia" className="text-white font-semibold hover:text-bieneq-green transition-colors">
                Explorar Academia →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
