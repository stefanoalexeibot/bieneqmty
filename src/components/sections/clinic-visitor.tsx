"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { OutlineText } from "@/components/ui/outline-text";
import { Magnetic } from "@/components/ui/magnetic";

export function ClinicVisitor() {
  return (
    <section className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-bieneq-green/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-bieneq-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                Visitas Especiales
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">
                Tommy Vasques <br />
                <OutlineText text="nos visita." strokeColor="rgba(255,255,255,0.2)" className="text-white" />
              </h2>
              <p className="text-white/60 text-lg mb-10 font-light leading-relaxed">
                Recibimos a Tommy Vasques en nuestro rancho para una jornada de intercambio técnico y visión compartida sobre el bienestar equino. Descubre la experiencia completa y los aprendizajes que dejó esta valiosa visita.
              </p>
            </motion.div>
          </div>

          {/* Visual Content: Image */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Main Image Overlay */}
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/images/clinics/tommy-visita.jpg" 
                  alt="Tommy Vasques y JM Luna en BieneqMty"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle overlay to match aesthetics */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </div>

              {/* Float Card */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 p-6 bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl max-w-[280px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-bieneq-green/20 flex items-center justify-center">
                    <span className="text-bieneq-green text-xs font-bold">TV</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Tommy Vasques</h4>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest">Invitado de Honor</p>
                  </div>
                </div>
                <p className="text-white/60 text-xs italic leading-relaxed">
                  "Un honor compartir conocimientos en BieneqMty, un lugar destinado a la salud real del caballo."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
