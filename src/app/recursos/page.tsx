"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, PlayCircle, ArrowRight, CheckCircle2, Loader2, FileDown } from "lucide-react";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { BorderBeam } from "@/components/ui/border-beam";

export default function RecursosPage() {
  // Independent states for Resource 1 (Ebook)
  const [email1, setEmail1] = useState("");
  const [status1, setStatus1] = useState<"idle" | "loading" | "success">("idle");

  // Independent states for Resource 2 (Guide)
  const [email2, setEmail2] = useState("");
  const [status2, setStatus2] = useState<"idle" | "loading" | "success">("idle");

  const handleDownloadResource = (resourceId: 1 | 2, e: React.FormEvent) => {
    e.preventDefault();
    const setStatus = resourceId === 1 ? setStatus1 : setStatus2;
    const fileUrl = resourceId === 1 
      ? "/content/recursos/guia-pie-descalzo.pdf" 
      : "/content/recursos/etologia-y-necesidades-basicas.pdf";
    const fileName = resourceId === 1 
      ? "Guia_Rapida_Los_5_Pilares_del_Barefoot.pdf" 
      : "Etologia_y_Necesidades_Basicas.pdf";

    setStatus("loading");

    // Simulate premium loading state (1.5 seconds)
    setTimeout(() => {
      setStatus("success");
      
      // Trigger the browser file download programmatically
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center bg-transparent text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-bieneq-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-bieneq-yellow/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="text-center mb-16 relative z-10 w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-bieneq-green font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Recursos Gratuitos</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight leading-none">
            Conocimiento a tu <br />
            <ShimmerWord className="text-5xl md:text-7xl">alcance.</ShimmerWord>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-lg mx-auto leading-relaxed">
            Empieza tu viaje hacia el bienestar equino con nuestras guías y materiales fundamentales totalmente gratis.
          </p>
        </motion.div>
      </div>

      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 relative z-10 px-4">
        {/* Resource 1: Ebook */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-bieneq-green/20 hover:bg-white/[0.07] transition-all flex flex-col justify-between relative overflow-hidden group min-h-[450px]"
        >
          <BorderBeam size={200} duration={12} colorFrom="#16a34a" colorTo="#84cc16" />
          
          <div className="space-y-4 mb-8">
            <div className="w-14 h-14 bg-bieneq-green/10 flex items-center justify-center rounded-2xl text-bieneq-green border border-bieneq-green/20 group-hover:scale-110 transition-transform duration-300">
              <FileDown className="w-7 h-7" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Guía Rápida: Los 5 Pilares del Barefoot</h3>
            <p className="text-white/40 text-sm leading-relaxed">Descarga nuestro Ebook introductorio y descubre los secretos del balance y cuidado natural del casco.</p>
          </div>
          
          <AnimatePresence mode="wait">
            {status1 !== "success" ? (
              <motion.form 
                key="form1"
                onSubmit={(e) => handleDownloadResource(1, e)} 
                className="space-y-4 w-full mt-auto"
                exit={{ opacity: 0, y: -10 }}
              >
                <input 
                  type="email" 
                  required
                  value={email1}
                  onChange={(e) => setEmail1(e.target.value)}
                  disabled={status1 === "loading"}
                  placeholder="Tu correo electrónico" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-bieneq-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button 
                  type="submit"
                  disabled={status1 === "loading"}
                  className="w-full flex items-center justify-center gap-2 bg-bieneq-green text-black px-6 py-4 rounded-xl font-bold uppercase tracking-[0.1em] text-xs hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-[0_10px_30px_rgba(34,197,94,0.15)]"
                >
                  {status1 === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Generando enlace...
                    </>
                  ) : (
                    <>
                      Descargar Guía (PDF) <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success1"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-bieneq-green/10 border border-bieneq-green/20 rounded-2xl p-6 text-center space-y-4 mt-auto"
              >
                <div className="w-10 h-10 bg-bieneq-green text-black rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-sm">¡Descarga Iniciada!</h4>
                <p className="text-white/40 text-xs">Si la descarga no comenzó automáticamente, haz clic en el botón de abajo.</p>
                <a 
                  href="/content/recursos/guia-pie-descalzo.pdf" 
                  download="Guia_Rapida_Los_5_Pilares_del_Barefoot.pdf"
                  className="inline-flex items-center gap-2 text-xs font-bold text-bieneq-green hover:underline pt-2"
                >
                  Descarga Directa <Download className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Resource 2: Masterclass */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex-1 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-bieneq-yellow/20 hover:bg-white/[0.07] transition-all flex flex-col justify-between relative overflow-hidden group min-h-[450px]"
        >
          <BorderBeam size={200} duration={14} colorFrom="#eab308" colorTo="#f59e0b" delay={2} />
          
          <div className="space-y-4 mb-8">
            <div className="w-14 h-14 bg-bieneq-yellow/10 flex items-center justify-center rounded-2xl text-bieneq-yellow border border-bieneq-yellow/20 group-hover:scale-110 transition-transform duration-300">
              <PlayCircle className="w-7 h-7" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Guía Completa: Etología y Necesidades</h3>
            <p className="text-white/40 text-sm leading-relaxed">Aprende sobre el comportamiento natural, alimentación libre de azúcares y requerimientos biológicos del caballo descalzo.</p>
          </div>
          
          <AnimatePresence mode="wait">
            {status2 !== "success" ? (
              <motion.form 
                key="form2"
                onSubmit={(e) => handleDownloadResource(2, e)} 
                className="space-y-4 w-full mt-auto"
                exit={{ opacity: 0, y: -10 }}
              >
                <input 
                  type="email" 
                  required
                  value={email2}
                  onChange={(e) => setEmail2(e.target.value)}
                  disabled={status2 === "loading"}
                  placeholder="Tu correo electrónico" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-bieneq-yellow transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button 
                  type="submit"
                  disabled={status2 === "loading"}
                  className="w-full flex items-center justify-center gap-2 bg-bieneq-yellow text-black px-6 py-4 rounded-xl font-bold uppercase tracking-[0.1em] text-xs hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-[0_10px_30px_rgba(234,179,8,0.15)]"
                >
                  {status2 === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Generando enlace...
                    </>
                  ) : (
                    <>
                      Descargar Guía (PDF) <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-bieneq-yellow/10 border border-bieneq-yellow/20 rounded-2xl p-6 text-center space-y-4 mt-auto"
              >
                <div className="w-10 h-10 bg-bieneq-yellow text-black rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-sm">¡Descarga Iniciada!</h4>
                <p className="text-white/40 text-xs">Si la descarga no comenzó automáticamente, haz clic en el botón de abajo.</p>
                <a 
                  href="/content/recursos/etologia-y-necesidades-basicas.pdf" 
                  download="Etologia_y_Necesidades_Basicas.pdf"
                  className="inline-flex items-center gap-2 text-xs font-bold text-bieneq-yellow hover:underline pt-2"
                >
                  Descarga Directa <Download className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
