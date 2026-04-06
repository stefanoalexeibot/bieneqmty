"use client";

import { motion } from "framer-motion";
import { Download, PlayCircle, ArrowRight } from "lucide-react";

export default function RecursosPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center bg-transparent text-white">
      <div className="text-center mb-16 relative z-10 w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-bieneq-yellow font-semibold tracking-wider uppercase text-sm mb-4 block">Recursos Gratuitos</span>
          <h1 className="text-4xl md:text-6xl font-heading font-semibold text-white mb-6 tracking-tight">
            Conocimiento a tu <br/> alcance.
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light">
            Empieza tu viaje hacia el bienestar equino con nuestras guías y videos fundamentales, sin costo.
          </p>
        </motion.div>
      </div>

      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-bieneq-cafe/30 transition-all flex flex-col justify-between"
        >
          <div className="space-y-4 mb-8">
            <div className="w-12 h-12 bg-bieneq-cafe/20 flex items-center justify-center rounded-xl text-bieneq-cafe">
              <Download className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Guía Rápida: Los 5 Pilares del Barefoot</h3>
            <p className="text-white/60">Descarga este Ebook y descubre los secretos que la industria del hierro no quiere que sepas.</p>
          </div>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Tu mejor correo electrónico" 
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-bieneq-cafe transition-colors"
            />
            <button className="w-full flex items-center justify-center gap-2 bg-bieneq-cafe text-white px-6 py-3 rounded-xl font-medium hover:bg-bieneq-cafe/90 transition-all">
              Descargar Ahora <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-bieneq-yellow/30 transition-all"
        >
           <div className="space-y-4 mb-8">
            <div className="w-12 h-12 bg-bieneq-yellow/20 flex items-center justify-center rounded-xl text-bieneq-yellow">
              <PlayCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Masterclass: Anatomía Viva</h3>
            <p className="text-white/60">Una clase magistral de 30 minutos sobre la función del casco. Regístrate y recibe acceso instantáneo.</p>
          </div>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Tu mejor correo electrónico" 
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-bieneq-yellow transition-colors"
            />
            <button className="w-full flex items-center justify-center gap-2 bg-bieneq-yellow text-black px-6 py-3 rounded-xl font-medium hover:bg-bieneq-yellow/90 transition-all">
              Acceder al Video <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
