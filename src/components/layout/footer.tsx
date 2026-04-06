"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/magnetic";
import { ShimmerWord } from "@/components/ui/shimmer-word";

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <footer 
      ref={containerRef}
      className="relative h-[600px] md:h-[800px] w-full bg-black overflow-hidden clip-path-footer"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <motion.div 
        style={{ y }}
        className="fixed bottom-0 w-full h-[600px] md:h-[800px] flex flex-col justify-between pt-24 pb-8 px-6 lg:px-12 bg-[#050505] overflow-hidden"
      >
        {/* Ambient Footer Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-bieneq-green/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-white/10 pb-16">
          <div className="max-w-sm">
            <h4 className="text-white text-3xl font-heading font-semibold mb-6">
              Empecemos a <ShimmerWord className="text-3xl">trabajar.</ShimmerWord>
            </h4>
            <p className="text-white/60 mb-8 font-light text-lg">
              Agenda tu consultoría clínica presencial, o mejora drásticamente tus técnicas accediendo a nuestra academia hoy mismo.
            </p>
            <Magnetic strength={0.3}>
              <Link href="/citas" className="group inline-flex items-center gap-3 px-8 py-4 bg-bieneq-green text-black font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(34,197,94,0.15)] relative">
                <span className="relative z-10">AGENDAR AHORA</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform group-hover:translate-x-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              </Link>
            </Magnetic>
          </div>

          <div className="flex gap-16 md:gap-24">
            <div className="flex flex-col gap-4">
              <h5 className="text-white/40 font-mono text-sm tracking-widest uppercase mb-2">Ecosistema</h5>
              <Link href="/tienda" className="text-white/70 hover:text-white transition-colors">Tienda Oficial</Link>
              <Link href="/academia" className="text-white/70 hover:text-white transition-colors">Bieneq Academy</Link>
              <Link href="/clinicas" className="text-white/70 hover:text-white transition-colors">Clínicas</Link>
              <Link href="/citas" className="text-white/70 hover:text-white transition-colors">Consultoría</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-white/40 font-mono text-sm tracking-widest uppercase mb-2">Social</h5>
              <Link href="https://instagram.com/bieneqmty" target="_blank" className="text-white/70 hover:text-white transition-colors">Instagram</Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">YouTube</Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">Facebook</Link>
            </div>
          </div>
        </div>

        {/* Massive Text Background */}
        <div className="mt-auto flex justify-center items-end overflow-hidden pt-8 relative z-10">
          <h1 className="text-[15vw] md:text-[18vw] font-heading font-black text-white/5 tracking-tighter leading-none select-none">
            BIENEQ<span className="text-bieneq-green/10">MTY</span>
          </h1>
        </div>
        
        <div className="flex justify-between items-center text-white/40 text-sm mt-8 border-t border-white/5 pt-8">
          <p>© {new Date().getFullYear()} BieneqMty. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Aviso de Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
