"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Background3D } from "@/components/ui/3d-canvas";
import { GradientText } from "@/components/ui/gradient-text";
import { KineticWord } from "@/components/ui/kinetic-word";
import { OutlineText } from "@/components/ui/outline-text";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 z-0">
        <Background3D />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bieneq-green/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bieneq-cafe/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10 overflow-hidden group hover:border-bieneq-green/30 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-bieneq-green animate-pulse" />
          <span className="text-[10px] font-bold text-white/60 tracking-[0.2em] uppercase font-mono">
            Bienestar Equino de Clase Mundial
          </span>
        </motion.div>

        {/* Hero H1 — Mixed Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-bold text-white tracking-tight max-w-5xl leading-[1] text-center"
        >
          {/* Line 1 */}
          <span className="block text-6xl md:text-8xl lg:text-9xl mb-2">
            El{" "}
            <GradientText variant="aurora" className="font-heading font-bold text-6xl md:text-8xl lg:text-9xl">
              Bienestar
            </GradientText>
          </span>

          {/* Line 2 — Outline / stroke text component */}
          <span className="block text-6xl md:text-8xl lg:text-9xl mb-2 font-heading font-bold">
            <OutlineText 
              text="de tu Caballo" 
              strokeWidth="2px"
              strokeColor="rgba(255,255,255,0.2)"
              className="tracking-tighter"
            />
          </span>

          {/* Line 3 — Back to solid with accent */}
          <span className="block text-6xl md:text-8xl lg:text-9xl text-white">
            empieza{" "}
            <GradientText variant="green" className="font-heading font-bold text-6xl md:text-8xl lg:text-9xl">
              en la Base.
            </GradientText>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-xl md:text-2xl text-white/40 max-w-2xl font-light leading-relaxed"
        >
          Herramientas de precisión,{" "}
          <span className="text-white/80 font-medium">consultoría técnica</span> y{" "}
          <span className="text-bieneq-green/80 font-medium">formación especializada</span>.{" "}
          <br className="hidden md:block"/>
          Definiendo el estándar global en el cuidado barefoot.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-6"
        >
          <Link
            href="/tienda"
            className="group relative px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_0_50px_rgba(255,255,255,0.15)]"
          >
            <span className="relative z-10">Ir a la Tienda</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-bieneq-green/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </Link>

          <Link
            href="/academia"
            className="group px-10 py-5 bg-transparent text-white font-semibold rounded-full border border-white/20 transition-all hover:border-bieneq-green/50 hover:bg-bieneq-green/5 active:scale-95 flex items-center gap-3 backdrop-blur-sm"
          >
            <PlayCircle className="w-6 h-6 text-bieneq-green transition-transform group-hover:scale-110" />
            <span>Bieneq Academy</span>
          </Link>
        </motion.div>

        {/* Scroll hint with mouse icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-[30px] h-[50px] rounded-full border-2 border-white/10 flex justify-center p-2">
            <motion.div 
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-bieneq-green rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"
            />
          </div>
          <span className="text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase">Explorar</span>
        </motion.div>
      </div>

      {/* Decorative Floor fade */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
    </section>
  );
}

