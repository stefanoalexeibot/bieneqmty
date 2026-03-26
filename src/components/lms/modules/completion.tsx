"use client"

import { motion } from "framer-motion"
import { Award, Share2, Download, CheckCircle2, ArrowRight } from "lucide-react"

export function Completion({ data }: { data: any }) {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden p-12 lg:p-24">
      {/* Cinematic Finale Background */}
      {data.media?.imagen_fondo && (
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2.5 }}
          className="absolute inset-0 z-0"
        >
          <img src={data.media.imagen_fondo} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.5)_0%,rgba(0,0,0,1)_80%)]" />
        </motion.div>
      )}

      <div className="relative z-10 w-full max-w-4xl mx-auto space-y-12 text-center">
        
        {/* Celebration Badges */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative inline-flex items-center justify-center"
        >
           <div className="absolute inset-[-40px] bg-amber-500/10 blur-[60px] rounded-full animate-pulse" />
           <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-amber-600 to-amber-300 p-[2px] shadow-[0_0_80px_rgba(245,158,11,0.3)]">
              <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.2] mix-blend-overlay" />
                 <Award className="w-20 h-20 md:w-28 md:h-28 text-amber-500 drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]" />
              </div>
           </div>
        </motion.div>

        {/* Message */}
        <div className="space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-display font-medium text-white tracking-tighter leading-[0.9]"
          >
             {data.mensaje.split('!')[0]}<span className="text-amber-500 italic">!</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="h-px w-24 bg-amber-500/50 mx-auto"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl text-white/40 font-light max-w-xl mx-auto italic font-display"
          >
            "Has completado el recorrido teórico del Pie Descalzo con maestría."
          </motion.p>
        </div>

        {/* Next Steps List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 relative">
           {data.siguientes_pasos.map((step: string, i: number) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1 + i * 0.15 }}
               className="group p-6 rounded-3xl bg-white/5 backdrop-blur-3xl border border-white/10 hover:border-amber-500/30 transition-all text-left space-y-4"
             >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500 transition-all">
                   <CheckCircle2 className="w-4 h-4 text-amber-500 group-hover:text-black transition-colors" />
                </div>
                <p className="text-sm text-white/60 font-medium group-hover:text-white transition-colors">{step}</p>
             </motion.div>
           ))}
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center pt-10"
        >
           <button className="group relative flex items-center justify-center gap-4 bg-amber-500 text-black px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:scale-105 shadow-[0_0_50px_rgba(245,158,11,0.3)]">
             <Download className="w-4 h-4" />
             <span>Descargar Certificado</span>
           </button>
           
           <button className="group flex items-center justify-center gap-4 bg-white/5 border border-white/10 px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] text-white/60 hover:text-white hover:bg-white/10 transition-all">
              <Share2 className="w-4 h-4" />
              <span>Compartir Logro</span>
           </button>
        </motion.div>
      </div>

      {/* Confetti or animated particles would be nice here */}
    </div>
  )
}
