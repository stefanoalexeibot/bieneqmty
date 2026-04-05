"use client";

import { motion } from "framer-motion";
import { ComparisonSlider } from "@/components/ui/comparison-slider";
import { OutlineText } from "@/components/ui/outline-text";

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
                <OutlineText text="Indiscutibles" strokeColor="rgba(255,255,255,0.2)" className="text-white" />
              </h3>
              
              <p className="text-xl text-white/50 font-light leading-relaxed mb-10">
                La transición al barefoot no es solo estética; es una reconstrucción funcional de la anatomía del caballo. Observa cómo recuperamos la concavidad, el grosor de la muralla y la salud del candado.
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
          <div className="w-full lg:w-1/2 relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <ComparisonSlider 
                beforeImage="/images/home/wellness/antes.jpg"
                afterImage="/images/home/wellness/despues.jpg"
                beforeLabel="Casco Contraído"
                afterLabel="Barefoot Saludable"
                className="shadow-[0_40px_80px_rgba(0,0,0,0.5)] border-white/5"
              />
              
              {/* Subtle accent glow */}
              <div className="absolute -inset-4 bg-bieneq-green/5 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>
            
            <p className="text-center text-white/20 text-[10px] uppercase font-bold tracking-[0.4em] mt-8">
              Desliza para comparar la evolución
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
