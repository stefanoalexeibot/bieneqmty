"use client";

import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/magnetic";

export function FounderProfile() {
  const reels = [
    { id: 1, title: "Anatomía del Casco", views: "124K", img: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&q=80" },
    { id: 2, title: "Herramientas Élite", views: "89K", img: "https://images.unsplash.com/photo-1506795660198-e95c77602129?w=400&q=80" },
    { id: 3, title: "Recuperación Barefoot", views: "210K", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80" },
    { id: 4, title: "Consejos de Podología", views: "56K", img: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=400&q=80" },
  ];

  return (
    <section className="relative w-full bg-[#030303] py-24 md:py-48 overflow-hidden z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col xl:flex-row items-center gap-24">
        
        {/* Left Side: Bio & Branding */}
        <div className="w-full xl:w-5/12 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 rounded-full border border-white/20 p-1">
              {/* Founder Avatar Placeholder */}
              <div className="w-full h-full rounded-full bg-bieneq-cafe/20 bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80')] bg-cover bg-center grayscale mix-blend-luminosity" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">José Manuel Luna</h3>
              <p className="text-bieneq-green font-medium">Fundador y Podólogo Élite</p>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading text-white font-semibold leading-[1.1] mb-8">
            Eleva tus estándares. Trata a los caballos como merecen ser tratados.
          </h2>
          
          <p className="text-xl text-white/60 font-light mb-10 leading-relaxed">
            Conductor incansable de la revolución barefoot en México. A través de contenido educativo, consultorías a medida y herramientas de clase mundial, estamos transformando cojeras crónicas en puro poder y salud.
          </p>

          <Magnetic strength={0.3}>
            <Link 
              href="https://www.instagram.com/bieneqmty/reels/" 
              target="_blank"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 text-white font-medium px-8 py-4 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(217,70,239,0.3)] w-auto max-w-max"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span>Sigue su trabajo en Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Magnetic>
        </div>

        {/* Right Side: Instagram Reels Grid */}
        <div className="w-full xl:w-7/12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {reels.map((reel, index) => (
              <motion.a
                href="https://www.instagram.com/bieneqmty/reels/"
                target="_blank"
                key={reel.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-white/5 cursor-pointer"
              >
                {/* Reel Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80"
                  style={{ backgroundImage: `url(${reel.img})` }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-20">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <Play className="w-5 h-5 text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Bottom Text Info */}
                <div className="absolute bottom-0 left-0 w-full p-4 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-white/90 mb-1">
                    <Play className="w-3 h-3" />
                    <span>{reel.views}</span>
                  </div>
                  <p className="text-sm font-medium text-white line-clamp-2">
                    {reel.title}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
