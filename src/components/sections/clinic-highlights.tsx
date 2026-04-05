"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { OutlineText } from "@/components/ui/outline-text";
import { X } from "lucide-react";

const highlights = [
  {
    id: "2023-10",
    title: "Clínica Barefoot 01",
    subtitle: "Octubre 2023",
    videoUrl: "/content/clinics/clinica-01/highlights/resumen-2023-10.mp4",
    thumbnail: "/images/home/wellness/IPPELP - 05.jpg",
    description: "Una inmersión total en la teoría y práctica del cuidado equino sin herraduras."
  },
  {
    id: "2024-03-tampico",
    title: "Clínica Barefoot 03 - Tampico",
    subtitle: "Marzo 2024",
    videoUrl: "",
    thumbnail: "/images/home/wellness/tampico-04.jpg",
    description: "Expandiendo la filosofía barefoot a Tampico, con un éxito rotundo en la formación teórica y práctica."
  }
];

export function ClinicHighlights() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold text-bieneq-green tracking-[0.3em] uppercase mb-4">Lo que se vivió</h2>
            <h3 className="text-5xl md:text-7xl font-heading font-bold text-white">
              <OutlineText text="Experiencias" strokeColor="rgba(255,255,255,0.2)" className="text-white" /> <br />
              Inmersivas.
            </h3>
          </div>
          <p className="text-white/40 max-w-md text-lg font-light">
            Revive los momentos más impactantes de nuestras clínicas presenciales y formaciones técnicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className="group relative aspect-[16/10] bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10 cursor-pointer"
              onClick={() => setSelectedVideo(item.videoUrl)}
            >
              <img 
                src={item.thumbnail} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-bieneq-green text-black flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-500 shadow-[0_0_30px_rgba(46,213,115,0.4)]">
                  <Play className="w-6 h-6 fill-black ml-1" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8">
                <span className="text-[10px] font-bold text-bieneq-green tracking-widest uppercase mb-2 block">{item.subtitle}</span>
                <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-white/40 line-clamp-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Portal Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl">
          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute top-10 right-10 z-[201] text-white hover:text-bieneq-green transition-colors"
          >
            <X className="w-10 h-10" />
          </button>
          <div className="w-full max-w-6xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <video 
              src={selectedVideo} 
              autoPlay 
              controls 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
