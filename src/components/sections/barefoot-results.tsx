"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ComparisonSlider } from "@/components/ui/comparison-slider";
import { OutlineText } from "@/components/ui/outline-text";
import { TiltCard } from "@/components/ui/tilt-card";
import { useRef } from "react";

export function BarefootResults() {
  return (
    <section className="relative w-full bg-black py-24 md:py-48 overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-bieneq-green/0 via-bieneq-green/50 to-bieneq-green/0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-semibold text-bieneq-green tracking-[0.3em] uppercase mb-6 font-mono">
                Evidencia Clínica
              </h2>
              <h3 className="text-5xl md:text-6xl font-heading font-bold text-white leading-none mb-8">
                Resultados <br />
                <OutlineText text="Indiscutibles" strokeColor="rgba(22, 163, 74, 0.3)" className="text-white" />
              </h3>
              
              <p className="text-xl text-white/50 font-extralight leading-relaxed mb-10 max-w-xl">
                La transición al barefoot no es solo estética; es una <span className="text-white/80 font-medium italic">reconstrucción funcional</span> de la anatomía del caballo. Observa cómo recuperamos la concavidad, el grosor de la muralla y la salud del candado.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-bieneq-green font-bold text-2xl mb-1">90 Días</h4>
                  <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Tiempo de Transición</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-2xl mb-1">Biomecánica</h4>
                  <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Recuperación Total</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Slider Content */}
          <div className="w-full lg:w-1/2 relative group perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <TiltCard intensity={15} className="w-full max-w-2xl mx-auto shadow-[0_50px_100px_-20px_rgba(34,197,94,0.15)] ring-1 ring-white/5 rounded-3xl overflow-hidden">
                <ComparisonSlider 
                  beforeImage="/images/home/wellness/antes.jpg"
                  afterImage="/images/home/wellness/despues.jpg"
                  beforeLabel="Antes de recortar"
                  afterLabel="Después de recortar"
                  className="border-none"
                />
              </TiltCard>
              
              {/* Subtle accent glow */}
              <div className="absolute -inset-10 bg-bieneq-green/10 blur-[120px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>
            
            <motion.p 
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="text-center text-white/20 text-[10px] uppercase font-bold tracking-[0.6em] mt-10 select-none"
            >
              Interacción 3D Activa
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
