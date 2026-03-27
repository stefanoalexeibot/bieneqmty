"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { TiltCard } from "@/components/ui/tilt-card"
import { Magnetic } from "@/components/ui/magnetic"
import { Video, Mic, BookOpen, ArrowRight, Eye, Lock } from "lucide-react"

function TopicCard({ id, title, image, delay }: { id: number; title: string; image: string; delay: number }) {
  const label = String(id).padStart(2, "0")
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="h-full"
    >
      <Magnetic strength={0.15}>
        <TiltCard intensity={10} className="group h-full">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="h-full p-6 rounded-[2.5rem] bg-zinc-900/40 backdrop-blur-xl border border-white/10 group-hover:bg-amber-500/[0.08] group-hover:border-amber-500/40 transition-all duration-500 flex flex-col gap-4 relative overflow-hidden"
          >
            {/* Background Image Preview */}
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-60 transition-opacity duration-700 grayscale group-hover:grayscale-0">
               <img src={image} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt={title} />
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
            </div>
            
            <div className="flex items-start justify-between relative z-10">
              <span className="font-mono text-4xl font-black text-amber-500/30 group-hover:text-amber-500 transition-colors leading-none tracking-tighter">
                {label}
              </span>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-amber-500 group-hover:border-amber-500 transition-all">
                <BookOpen className="w-5 h-5 text-white/20 group-hover:text-black transition-colors" />
              </div>
            </div>
            
            <div className="flex-1 flex flex-col gap-3 relative z-10 justify-end">
              <h3 className="text-2xl text-white/90 font-display font-bold leading-tight group-hover:text-white transition-colors group-hover:scale-105 origin-left duration-500">
                {title}
              </h3>
              <div className="h-1 w-12 bg-amber-500/30 group-hover:w-full transition-all duration-700 rounded-full" />
            </div>
          </motion.div>
        </TiltCard>
      </Magnetic>
    </motion.div>
  )
}

function QuestionCard({ id, question, delay }: { id: number; question: string; delay: number }) {
  const [isRevealed, setIsRevealed] = useState(false)
  const label = String(id).padStart(2, "0")
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="h-full"
    >
      <Magnetic strength={0.1}>
        <TiltCard intensity={5} className="group h-full">
          <div 
            onClick={() => setIsRevealed(!isRevealed)}
            className={cn(
              "h-full p-8 rounded-[2.5rem] bg-zinc-900/40 backdrop-blur-xl border transition-all duration-500 flex flex-col gap-6 relative overflow-hidden cursor-pointer",
              isRevealed ? "border-amber-500/50 bg-amber-500/[0.05]" : "border-white/10 hover:border-white/20"
            )}
          >
            {/* Visual indicators */}
            <div className="absolute top-0 right-0 p-6 pointer-events-none">
              <AnimatePresence mode="wait">
                {!isRevealed ? (
                  <motion.div 
                    key="closed"
                    initial={{ opacity: 0, rotate: -20 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 20 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                  >
                    <Lock className="w-3 h-3 text-amber-500" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-amber-500">Locked</span>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="opened"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500 border border-amber-600 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                  >
                    <Eye className="w-3 h-3 text-black" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-black">Revealed</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-start justify-between relative z-10">
              <span className="font-mono text-5xl font-black text-amber-500/10 group-hover:text-amber-500/30 transition-colors leading-none tracking-tighter">
                {label}
              </span>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-amber-500 group-hover:border-amber-500 transition-all">
                 <Video className={cn("w-4 h-4 transition-colors", isRevealed ? "text-black" : "text-white/20")} />
              </div>
            </div>
            
            <div className="flex-1 flex flex-col gap-4 relative z-10">
              <div className={cn("h-px w-12 transition-all duration-700", isRevealed ? "w-full bg-amber-500" : "bg-amber-500/30 group-hover:w-24")} />
              <p className="text-[10px] text-amber-500/60 tracking-[0.3em] uppercase font-black">Pregunta para Video</p>
              
              <div className="relative">
                <motion.h3 
                  animate={{ 
                    filter: isRevealed ? "blur(0px)" : "blur(12px)",
                    opacity: isRevealed ? 1 : 0.3,
                    y: isRevealed ? 0 : 5
                  }}
                  className="text-xl md:text-2xl text-white font-display font-medium leading-[1.2]"
                >
                  {question}
                </motion.h3>
                
                {!isRevealed && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500 text-center animate-pulse">
                      Tap to reveal
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 relative z-10">
               <Mic className={cn("w-3 h-3", isRevealed ? "text-amber-500" : "text-white/20")} />
               <span className={cn("text-[8px] uppercase tracking-[0.2em] font-bold", isRevealed ? "text-white/60" : "text-white/10")}>
                 Respuesta sugerida: 1-2 min
               </span>
            </div>
          </div>
        </TiltCard>
      </Magnetic>
    </motion.div>
  )
}

export function Presentacion({ data }: { data?: any }) {
  const [activeView, setActiveView] = useState<"curriculum" | "questions">("curriculum")
  const questions = data?.interacciones?.find((i: any) => i.tipo === "video-questions")?.items || []
  const initialCurriculum = data?.interacciones?.find((i: any) => i.tipo === "curriculum-preview")?.items || []
  
  return (
    <section
      id="presentacion"
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center p-8 md:p-12 lg:p-24"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.06)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-overlay" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-12 h-full justify-center">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8 relative">
          <div className="space-y-4 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-10 bg-amber-500" />
              <span className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-black">Escena 02 · Introducción</span>
            </motion.div>
            
            <motion.h2
              key={activeView}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-medium text-white tracking-tighter leading-[0.85]"
              style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
            >
              {activeView === "curriculum" ? (
                <>Temas del <span className="text-amber-400 italic">Curso</span></>
              ) : (
                <>Dinámica de <span className="text-amber-400 italic">Grabación</span></>
              )}
            </motion.h2>
          </div>

          <div className="flex items-center gap-2 md:gap-4 bg-zinc-950/80 backdrop-blur-2xl p-2 rounded-3xl border border-white/10 shadow-2xl">
             <button 
                onClick={() => setActiveView("curriculum")}
                className={cn(
                  "px-6 py-3 rounded-2xl text-[10px] items-center gap-2 flex uppercase tracking-widest font-black transition-all",
                  activeView === "curriculum" ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20" : "text-white/40 hover:text-white"
                )}
             >
                <BookOpen className="w-3 h-3" /> Contenido
             </button>
             <button 
                onClick={() => setActiveView("questions")}
                className={cn(
                  "px-6 py-3 rounded-2xl text-[10px] items-center gap-2 flex uppercase tracking-widest font-black transition-all",
                  activeView === "questions" ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20" : "text-white/40 hover:text-white"
                )}
             >
                <Video className="w-3 h-3" /> Entrevistas
             </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative flex-1 overflow-y-auto pr-2 custom-scrollbar max-h-[60vh]">
          <AnimatePresence mode="wait">
            {activeView === "curriculum" ? (
              <motion.div 
                key="curriculum"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 relative z-10"
              >
                {initialCurriculum.map((topic: any, i: number) => (
                  <TopicCard 
                    key={topic.id || i} 
                    id={i + 1} 
                    title={topic.titulo} 
                    image={topic.imagen} 
                    delay={0.1 + i * 0.05} 
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="questions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10"
              >
                {questions.map((q: any, i: number) => (
                  <QuestionCard 
                    key={q.id || i} 
                    id={i + 1} 
                    question={q.pregunta} 
                    delay={0.1 + i * 0.05} 
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center pt-4"
        >
          {activeView === "curriculum" && (
            <button 
              onClick={() => setActiveView("questions")}
              className="group bg-white/5 backdrop-blur-3xl px-10 py-5 rounded-full border border-white/10 flex items-center gap-6 shadow-2xl hover:bg-amber-500 transition-all hover:text-black"
            >
               <span className="text-[10px] uppercase tracking-[0.4em] font-black whitespace-nowrap group-hover:text-black">Ir a Dinámica de Grabación</span>
               <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
