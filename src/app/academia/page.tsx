"use client";

import { motion } from "framer-motion";
import { Construction, Sparkles, Bell } from "lucide-react";
import { useState } from "react";
import { BorderBeam } from "@/components/ui/border-beam";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function AcademiaPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { x, y } = useMousePosition();
  const springConfig = { stiffness: 150, damping: 20 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    mouseX.set((x / (typeof window !== "undefined" ? window.innerWidth : 1)) - 0.5);
    mouseY.set((y / (typeof window !== "undefined" ? window.innerHeight : 1)) - 0.5);
  }, [x, y, mouseX, mouseY]);

  const bgX = useTransform(mouseX, [-0.5, 0.5], [30, -30]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], [30, -30]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-transparent text-white flex items-center justify-center relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 pointer-events-none -z-10"
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-bieneq-green/8 blur-[180px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-bieneq-green/5 blur-[150px] rounded-full" />
      </motion.div>

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-2xl mx-auto px-6 text-center py-32">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center justify-center w-28 h-28 rounded-[2.5rem] bg-white/5 border border-white/10 mb-10 relative overflow-hidden mx-auto"
        >
          <BorderBeam size={200} duration={6} colorFrom="#16a34a" colorTo="#84cc16" />
          <Construction className="w-12 h-12 text-bieneq-green" />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 bg-bieneq-green/10 border border-bieneq-green/20 rounded-full text-bieneq-green text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          En Construcción
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-heading font-bold tracking-tighter leading-[0.9] mb-6"
        >
          Academia
          <br />
          <span className="text-bieneq-green italic">Bieneq</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-white/40 font-light leading-relaxed mb-14 max-w-lg mx-auto"
        >
          Estamos construyendo la plataforma de formación de élite más completa en bienestar y podología equina. Pronto disponible.
        </motion.p>

        {/* Email Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl"
        >
          <BorderBeam size={400} duration={15} colorFrom="#16a34a" colorTo="#84cc16" />

          {!submitted ? (
            <>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Bell className="w-4 h-4 text-bieneq-green" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  Avísame cuando esté lista
                </span>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="flex-1 h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-sm focus:border-bieneq-green outline-none transition-colors placeholder:text-white/20"
                />
                <button
                  type="submit"
                  className="h-14 px-8 bg-bieneq-green text-black font-bold rounded-2xl hover:bg-white transition-colors uppercase tracking-widest text-xs whitespace-nowrap"
                >
                  Notificarme
                </button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 py-4"
            >
              <div className="w-12 h-12 rounded-full bg-bieneq-green/20 flex items-center justify-center border border-bieneq-green/40">
                <Sparkles className="w-6 h-6 text-bieneq-green" />
              </div>
              <p className="text-white font-bold text-lg">¡Listo! Te avisaremos.</p>
              <p className="text-white/40 text-sm">Serás de los primeros en acceder a la Academia Bieneq.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
