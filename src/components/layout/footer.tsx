"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/magnetic";
import { 
  ShoppingBag, 
  GraduationCap, 
  ActivitySquare, 
  Calendar 
} from "lucide-react";
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24 w-full md:w-auto mt-12 md:mt-0">
            <div className="flex flex-col gap-6">
              <h5 className="text-white/40 font-mono text-xs tracking-[0.2em] uppercase mb-2 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-white/20"></span>
                Ecosistema
              </h5>
              <div className="flex flex-col gap-4">
                <Link href="/tienda" className="group flex items-center gap-4 text-white/50 hover:text-white transition-all">
                  <div className="w-10 h-10 rounded-full bg-white/[0.02] flex items-center justify-center border border-white/5 group-hover:bg-bieneq-green/10 group-hover:border-bieneq-green/30 group-hover:text-bieneq-green group-hover:scale-110 transition-all duration-300">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <span className="font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300">Tienda Oficial</span>
                </Link>
                <Link href="/academia" className="group flex items-center gap-4 text-white/50 hover:text-white transition-all">
                  <div className="w-10 h-10 rounded-full bg-white/[0.02] flex items-center justify-center border border-white/5 group-hover:bg-bieneq-green/10 group-hover:border-bieneq-green/30 group-hover:text-bieneq-green group-hover:scale-110 transition-all duration-300">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300">Bieneq Academy</span>
                </Link>
                <Link href="/clinicas" className="group flex items-center gap-4 text-white/50 hover:text-white transition-all">
                  <div className="w-10 h-10 rounded-full bg-white/[0.02] flex items-center justify-center border border-white/5 group-hover:bg-bieneq-green/10 group-hover:border-bieneq-green/30 group-hover:text-bieneq-green group-hover:scale-110 transition-all duration-300">
                    <ActivitySquare className="w-4 h-4" />
                  </div>
                  <span className="font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300">Clínicas</span>
                </Link>
                <Link href="/citas" className="group flex items-center gap-4 text-white/50 hover:text-white transition-all">
                  <div className="w-10 h-10 rounded-full bg-white/[0.02] flex items-center justify-center border border-white/5 group-hover:bg-bieneq-green/10 group-hover:border-bieneq-green/30 group-hover:text-bieneq-green group-hover:scale-110 transition-all duration-300">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300">Consultoría</span>
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <h5 className="text-white/40 font-mono text-xs tracking-[0.2em] uppercase mb-2 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-white/20"></span>
                Social
              </h5>
              <div className="flex flex-col gap-4">
                <Link href="https://instagram.com/bieneqmty" target="_blank" className="group flex items-center gap-4 text-white/50 hover:text-white transition-all">
                  <div className="w-10 h-10 rounded-full bg-white/[0.02] flex items-center justify-center border border-white/5 group-hover:bg-[#E1306C]/10 group-hover:border-[#E1306C]/30 group-hover:text-[#E1306C] group-hover:scale-110 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </div>
                  <span className="font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300">Instagram</span>
                </Link>
                <Link href="#" className="group flex items-center gap-4 text-white/50 hover:text-white transition-all">
                  <div className="w-10 h-10 rounded-full bg-white/[0.02] flex items-center justify-center border border-white/5 group-hover:bg-[#FF0000]/10 group-hover:border-[#FF0000]/30 group-hover:text-[#FF0000] group-hover:scale-110 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                  </div>
                  <span className="font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300">YouTube</span>
                </Link>
                <Link href="#" className="group flex items-center gap-4 text-white/50 hover:text-white transition-all">
                  <div className="w-10 h-10 rounded-full bg-white/[0.02] flex items-center justify-center border border-white/5 group-hover:bg-[#1877F2]/10 group-hover:border-[#1877F2]/30 group-hover:text-[#1877F2] group-hover:scale-110 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </div>
                  <span className="font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300">Facebook</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Massive Text Background with Parallax */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0.5, 1], [100, 0]) }}
          className="mt-auto flex justify-center items-end overflow-hidden pt-8 relative z-0"
        >
          <h1 className="text-[15vw] md:text-[18vw] font-heading font-black tracking-tighter leading-none select-none bg-gradient-to-b from-white/10 to-transparent bg-clip-text text-transparent">
            BIENEQ<span className="text-bieneq-green/10">MTY</span>
          </h1>
        </motion.div>
        
        {/* Sleek Bottom Bar container */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-2xl px-6 py-4 mt-8 md:mt-2">
          <p className="text-white/40 text-xs tracking-wider uppercase">© {new Date().getFullYear()} BieneqMty. Todos los derechos reservados.</p>
          <div className="flex gap-8 mt-4 md:mt-0 text-xs font-mono tracking-widest uppercase">
            <Link href="#" className="text-white/50 hover:text-white transition-colors relative group">
              Aviso de Privacidad
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
            </Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors relative group">
              Términos
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
