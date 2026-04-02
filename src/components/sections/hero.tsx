"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bieneq-green/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bieneq-cafe/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-bieneq-green animate-pulse" />
          <span className="text-sm font-medium text-white/80">Revolucionando la Podología Equina</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold text-white tracking-tight max-w-5xl leading-[1.1]"
        >
          El <span className="text-transparent bg-clip-text bg-gradient-to-r from-bieneq-green to-bieneq-yellow">Bienestar</span> de tu Caballo Empieza en la Base
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl font-light"
        >
          Herramientas de precisión, consultoría especializada y formación de élite. 
          Descubre el estándar oro en el barefoot y cuidado integral equino.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="group relative px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
            <span>Ir a la Tienda</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button className="group px-8 py-4 bg-transparent text-white font-medium rounded-full border border-white/20 transition-all hover:bg-white/5 active:scale-95 flex items-center gap-2">
            <PlayCircle className="w-5 h-5 text-bieneq-green" />
            <span>Bieneq Academy</span>
          </button>
        </motion.div>
      </div>

      {/* Decorative Floor fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
