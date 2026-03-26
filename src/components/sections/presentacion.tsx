"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TiltCard } from "@/components/ui/tilt-card"
import { MessageSquare, Compass, Sparkles, Video, Mic, BookOpen, ArrowRight } from "lucide-react"

function TopicCard({ id, title, image, delay }: { id: number; title: string; image: string; delay: number }) {
  const label = String(id).padStart(2, "0")
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <TiltCard intensity={10} className="group h-full">
        <div className="h-full p-6 rounded-[2rem] bg-zinc-900/40 backdrop-blur-xl border border-white/10 hover:bg-amber-500/[0.05] hover:border-amber-500/30 transition-all duration-700 flex flex-col gap-4 relative overflow-hidden group">
          {/* Background Image Preview (Subtle) */}
          <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700 grayscale group-hover:grayscale-0">
             <img src={image} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-[1]" />
          
          <div className="flex items-start justify-between relative z-10">
            <span className="font-mono text-3xl font-black text-amber-500/20 group-hover:text-amber-500/40 transition-colors leading-none tracking-tighter">
              {label}
            </span>
            <BookOpen className="w-5 h-5 text-white/20 group-hover:text-amber-500 transition-colors" />
          </div>
          
          <div className="flex-1 flex flex-col gap-3 relative z-10 justify-end">
            <h3 className="text-xl text-white/80 font-display font-medium leading-tight group-hover:text-white transition-colors">
              {title}
            </h3>
            <div className="h-px w-8 bg-amber-500/30 group-hover:w-full transition-all duration-700" />
          </div>
        </div>
      </TiltCard>
    </motion.div>
  )
}

function QuestionCard({ id, question, delay }: { id: number; question: string; delay: number }) {
  const label = String(id).padStart(2, "0")
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <TiltCard intensity={10} className="group h-full">
        <div className="h-full p-8 rounded-[2.5rem] bg-zinc-900/40 backdrop-blur-xl border border-white/10 hover:bg-amber-500/[0.05] hover:border-amber-500/30 transition-all duration-700 flex flex-col gap-6 relative overflow-hidden group">
          {/* Subtle internal glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/5 blur-[40px] rounded-full group-hover:bg-amber-500/10 transition-colors" />
          
          <div className="flex items-start justify-between relative z-10">
            <span className="font-mono text-5xl font-black text-amber-500/10 group-hover:text-amber-500/30 transition-colors leading-none tracking-tighter">
              {label}
            </span>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-amber-500 group-hover:border-amber-500 transition-all">
               <Video className="w-4 h-4 text-white/20 group-hover:text-black transition-colors" />
            </div>
          </div>
          
          <div className="flex-1 flex flex-col gap-4 relative z-10">
            <div className="h-px w-12 bg-amber-500/30 group-hover:w-full transition-all duration-700" />
            <p className="text-[10px] text-amber-500/60 tracking-[0.3em] uppercase font-black">Pregunta para Video</p>
            <h3 className="text-xl md:text-2xl text-white/80 font-display font-medium leading-tight group-hover:text-white transition-colors">
              {question}
            </h3>
          </div>

          <div className="flex items-center gap-2 pt-4 relative z-10">
             <Mic className="w-3 h-3 text-white/20" />
             <span className="text-[8px] uppercase tracking-[0.2em] text-white/20 font-bold">Respuesta sugerida: 1-2 min</span>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  )
}

export function Presentacion({ data }: { data?: any }) {
  const [activeView, setActiveView] = useState<"curriculum" | "questions">("curriculum")
  const questions = data?.interacciones?.find((i: any) => i.tipo === "video-questions")?.items || []
  const curriculum = data?.interacciones?.find((i: any) => i.tipo === "curriculum-preview")?.items || []
  
  return (
    <section
      id="presentacion"
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center p-12 lg:p-24"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.06)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-overlay" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-10">
          <div className="space-y-6 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-10 bg-amber-500" />
              <span className="text-[10px] uppercase tracking-[0.6em] text-amber-500 font-black">Escena 02 · Introducción</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-medium text-white tracking-tighter leading-[0.85]"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              {activeView === "curriculum" ? (
                <>Temas del <span className="text-amber-500 italic">Curso</span></>
              ) : (
                <>Dinámica de <span className="text-amber-500 italic">Grabación</span></>
              )}
            </motion.h2>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/10">
             <button 
                onClick={() => setActiveView("curriculum")}
                className={`px-6 py-3 rounded-xl text-[10px] items-center gap-2 flex uppercase tracking-widest font-black transition-all ${activeView === "curriculum" ? "bg-amber-500 text-black" : "text-white/40 hover:text-white"}`}
             >
                <BookOpen className="w-3 h-3" /> Contenido
             </button>
             <button 
                onClick={() => setActiveView("questions")}
                className={`px-6 py-3 rounded-xl text-[10px] items-center gap-2 flex uppercase tracking-widest font-black transition-all ${activeView === "questions" ? "bg-amber-500 text-black" : "text-white/40 hover:text-white"}`}
             >
                <Video className="w-3 h-3" /> Entrevistas
             </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative flex-1 min-h-[400px]">
          <div className="absolute -inset-20 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {activeView === "curriculum" ? (
              <motion.div 
                key="curriculum"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
              >
                {curriculum.map((topic: any, i: number) => (
                  <TopicCard 
                    key={topic.id} 
                    id={i + 1} 
                    title={topic.titulo} 
                    image={topic.imagen} 
                    delay={0.2 + i * 0.1} 
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="questions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
              >
                {questions.map((q: any, i: number) => (
                  <QuestionCard 
                    key={q.id} 
                    id={i + 1} 
                    question={q.pregunta} 
                    delay={0.2 + i * 0.1} 
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
          transition={{ delay: 1 }}
          className="flex justify-center"
        >
          {activeView === "curriculum" && (
            <button 
              onClick={() => setActiveView("questions")}
              className="group bg-white/5 backdrop-blur-3xl px-10 py-5 rounded-full border border-white/10 flex items-center gap-6 shadow-2xl hover:bg-amber-500 transition-all hover:text-black"
            >
               <span className="text-[10px] uppercase tracking-[0.4em] font-black whitespace-nowrap">Continuar a las preguntas</span>
               <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
