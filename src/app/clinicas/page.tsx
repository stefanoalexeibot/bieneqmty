"use client";

import { motion } from "framer-motion";
import { Play, Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { useState } from "react";
import { OutlineText } from "@/components/ui/outline-text";
import { Magnetic } from "@/components/ui/magnetic";
import { ClinicHDGallery } from "@/components/sections/clinic-gallery";
import { ClinicVisitor } from "@/components/sections/clinic-visitor";
import { ClinicTampicoGallery } from "@/components/sections/clinic-tampico-gallery";
import Link from "next/link";

export default function ClinicasPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "gcUj60vlPrE";

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[100vh] bg-gradient-to-b from-bieneq-green/10 via-transparent to-transparent pointer-events-none opacity-50" />
      <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-bieneq-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-bieneq-green font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Inmersión Técnica</span>
            <h1 className="text-5xl md:text-8xl font-heading font-bold text-white leading-[1.1] mb-8">
              Lo que se vivió en la <br />
              <OutlineText text="Clínica." strokeColor="rgba(255,255,255,0.2)" className="text-white" />
            </h1>
            <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              Revive la experiencia de nuestra última clínica presencial. Teoría avanzada, práctica real y una comunidad apasionada por el bienestar equino.
            </p>
          </motion.div>
        </div>

        {/* Cinematic Video Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group aspect-video lg:aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(34,197,94,0.1)] bg-black/40 backdrop-blur-sm mb-32"
        >
          {!isPlaying ? (
            <div 
              className="absolute inset-0 cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              {/* Overlay with dynamic gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
              
              {/* Thumbnail (using high res YT thumb) */}
              <img 
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Clinic Experience Thumbnail"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <Magnetic strength={0.2}>
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.4)] group-hover:bg-bieneq-green group-hover:shadow-[0_0_60px_rgba(34,197,94,0.4)] transition-all duration-500">
                    <Play className="w-10 h-10 fill-current ml-2" />
                  </div>
                </Magnetic>
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
        </motion.div>

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-white/5 border border-white/10"
          >
            <Calendar className="w-8 h-8 text-bieneq-green mb-6" />
            <h5 className="text-xl font-bold text-white mb-3">Formación Continua</h5>
            <p className="text-white/40 leading-relaxed">
              2 días de inmersión total combinando anatomía aplicada y disecciones con práctica real en pista.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-[2rem] bg-white/5 border border-white/10"
          >
            <MapPin className="w-8 h-8 text-bieneq-yellow mb-6" />
            <h5 className="text-xl font-bold text-white mb-3">Sedes Premium</h5>
            <p className="text-white/40 leading-relaxed">
              Instalaciones de primer nivel diseñadas para el confort del caballo y la mejor experiencia de aprendizaje.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-[2rem] bg-white/5 border border-white/10"
          >
            <Users className="w-8 h-8 text-bieneq-green mb-6" />
            <h5 className="text-xl font-bold text-white mb-3">Comunidad Real</h5>
            <p className="text-white/40 leading-relaxed">
              Conexión con profesionales y propietarios que buscan elevar el estándar de salud equina en México.
            </p>
          </motion.div>
        </div>

        {/* HD Gallery Bento */}
        <ClinicHDGallery />

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
