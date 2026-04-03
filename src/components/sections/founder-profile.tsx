"use client";

import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/magnetic";
import { KineticWord } from "@/components/ui/kinetic-word";
import { TiltCard } from "@/components/ui/tilt-card";

// Custom Instagram SVG to avoid lucide-react version issues
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export function FounderProfile() {
  const reels = [
    { 
      id: 1, 
      title: "El Secreto del Bombeo Sanguíneo en el Casco", 
      views: "1.2M", 
      img: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&q=80",
      link: "https://www.instagram.com/bieneqmty/reels/"
    },
    { 
      id: 2, 
      title: "Rehabilitación: De Cojera a Galope en 6 Meses", 
      views: "850K", 
      img: "https://images.unsplash.com/photo-1506795660198-e95c77602129?w=400&q=80",
      link: "https://www.instagram.com/bieneqmty/reels/"
    },
    { 
      id: 3, 
      title: "Por qué las Herraduras Limitan el Bienestar", 
      views: "2.1M", 
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
      link: "https://www.instagram.com/bieneqmty/reels/"
    },
    { 
      id: 4, 
      title: "Preparación de la Suela: El Arte del Barefoot", 
      views: "560K", 
      img: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=400&q=80",
      link: "https://www.instagram.com/bieneqmty/reels/"
    },
  ];

  return (
    <section className="relative w-full bg-[#030303] py-24 md:py-48 overflow-hidden z-20 border-t border-white/5">
      {/* Background Aura */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-bieneq-green/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col xl:flex-row items-center gap-24">
        
        {/* Left Side: Bio & Branding */}
        <div className="w-full xl:w-5/12 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-10"
          >
            <div className="relative w-24 h-24 rounded-full border border-white/20 p-1.5 overflow-visible">
              <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-bieneq-green to-transparent opacity-50 animate-pulse" />
              <div className="w-full h-full rounded-full bg-bieneq-cafe/20 bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80')] bg-cover bg-center grayscale mix-blend-luminosity border border-white/10" />
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-white tracking-tight flex flex-col">
                <KineticWord word="José Manuel" className="text-white" />
                <KineticWord word="Luna" className="text-bieneq-green" />
              </div>
              <p className="text-white/40 font-medium tracking-widest uppercase text-[10px] mt-1">Founder & Lead Podology Expert</p>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white font-semibold leading-[1.05] mb-8">
            Eleva tus estándares. <br />
            <span className="text-white/40">Trata a los caballos como merecen.</span>
          </h2>
          
          <p className="text-xl text-white/50 font-light mb-12 leading-relaxed max-w-lg">
            Impulsando la revolución del bienestar equino en México. Nuestra misión es simple: devolverle la salud natural a cada casco a través de la ciencia, la educación y herramientas de precisión.
          </p>

          <div className="flex flex-wrap gap-4">
            <Magnetic strength={0.2}>
              <Link 
                href="https://www.instagram.com/bieneqmty/reels/" 
                target="_blank"
                className="group relative flex items-center justify-center gap-3 bg-white text-black font-semibold px-8 py-4 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <InstagramIcon className="w-5 h-5 relative z-10 group-hover:text-white" />
                <span className="relative z-10 group-hover:text-white">Ver Reels Virales</span>
                <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:text-white" />
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* Right Side: Instagram Reels Grid */}
        <div className="w-full xl:w-7/12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {reels.map((reel, index) => (
              <TiltCard key={reel.id} intensity={15}>
                <motion.a
                  href={reel.link}
                  target="_blank"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative block aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl"
                >
                  {/* Reel Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                    style={{ backgroundImage: `url(${reel.img})` }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="p-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10">
                      <InstagramIcon className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Play Button Center */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-20">
                    <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                      <Play className="w-6 h-6 fill-black ml-1" />
                    </div>
                  </div>

                  {/* Bottom Text Info */}
                  <div className="absolute bottom-0 left-0 w-full p-6 z-10 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-bieneq-green uppercase tracking-widest mb-2">
                      <Play className="w-3 h-3 fill-bieneq-green" />
                      <span>{reel.views} Views</span>
                    </div>
                    <p className="text-sm font-semibold text-white leading-tight line-clamp-3">
                      {reel.title}
                    </p>
                  </div>
                </motion.a>
              </TiltCard>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-white/20 text-xs mt-10 tracking-[0.2em] font-medium uppercase"
          >
            Sigue la Revolución @BieneqMty
          </motion.p>
        </div>

      </div>
    </section>
  );
}
