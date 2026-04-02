"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/magnetic";

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
        className="fixed bottom-0 w-full h-[600px] md:h-[800px] flex flex-col justify-between pt-24 pb-8 px-6 lg:px-12 bg-[#020202]"
      >
        <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-white/10 pb-16">
          <div className="max-w-sm">
            <h4 className="text-white text-2xl font-semibold mb-6">Empecemos a trabajar.</h4>
            <p className="text-white/60 mb-8">
              Agenda tu consultoría, o mejora drásticamente tus técnicas accediendo a nuestra academia hoy mismo.
            </p>
            <Magnetic strength={0.3}>
              <Link href="/citas" className="inline-block px-8 py-4 bg-bieneq-green text-black font-semibold rounded-full hover:bg-bieneq-green/90 transition-colors">
                Agendar Consultoría
              </Link>
            </Magnetic>
          </div>

          <div className="flex gap-16 md:gap-24">
            <div className="flex flex-col gap-4">
              <h5 className="text-white/40 font-mono text-sm tracking-widest uppercase mb-2">Ecosistema</h5>
              <Link href="/tienda" className="text-white/70 hover:text-white transition-colors">Tienda Oficial</Link>
              <Link href="/academia" className="text-white/70 hover:text-white transition-colors">Bieneq Academy</Link>
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
        <div className="mt-auto flex justify-center items-end overflow-hidden pt-8">
          <h1 className="text-[15vw] md:text-[18vw] font-heading font-bold text-white/5 tracking-tighter leading-none select-none">
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
