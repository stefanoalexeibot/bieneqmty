"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  RotateCcw, 
  X, 
  Maximize2, 
  Minimize2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./border-beam";
import { Magnetic } from "./magnetic";
import Link from "next/link";

export interface Slide {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  accent?: "green" | "yellow" | "cafe";
}

interface SlideDeckProps {
  title: string;
  slides: Slide[];
  pdfUrl: string;
  pdfName: string;
  backUrl: string;
}

export function SlideDeck({ title, slides, pdfUrl, pdfName, backUrl }: SlideDeckProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const minSwipeDistance = 50;

  // Handle slide change
  const navigateTo = (index: number) => {
    if (index < 0 || index >= slides.length) return;
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const handleNext = () => {
    if (current < slides.length - 1) {
      navigateTo(current + 1);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      navigateTo(current - 1);
    }
  };

  const handleReset = () => {
    setDirection(-1);
    setCurrent(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "Escape") {
        if (isFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      } else if (e.key === "r" || e.key === "R") {
        handleReset();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current, isFullscreen]);

  // Fullscreen support
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error entering fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Handle Swipe Gesture
  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Handle PDF Download
  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.setAttribute("download", pdfName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 1500);
  };

  // Variants for slide transition
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        filter: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      filter: "blur(4px)",
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  const currentSlide = slides[current];
  const accentColor = 
    currentSlide.accent === "green" ? "text-bieneq-green" : 
    currentSlide.accent === "yellow" ? "text-bieneq-yellow" : 
    currentSlide.accent === "cafe" ? "text-amber-500" : "text-white";

  const accentBg = 
    currentSlide.accent === "green" ? "bg-bieneq-green" : 
    currentSlide.accent === "yellow" ? "bg-bieneq-yellow" : 
    currentSlide.accent === "cafe" ? "bg-amber-500" : "bg-white";

  const accentBorder = 
    currentSlide.accent === "green" ? "border-bieneq-green/20" : 
    currentSlide.accent === "yellow" ? "border-bieneq-yellow/20" : 
    currentSlide.accent === "cafe" ? "border-amber-500/20" : "border-white/10";

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative flex flex-col bg-[#050505] text-white transition-all duration-300 w-full overflow-hidden select-none",
        isFullscreen ? "h-screen w-screen z-[100]" : "h-[80vh] min-h-[550px] md:min-h-[650px] rounded-[3rem] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)]"
      )}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-15 transition-colors duration-1000",
          currentSlide.accent === "green" ? "bg-bieneq-green" : 
          currentSlide.accent === "yellow" ? "bg-bieneq-yellow" : 
          currentSlide.accent === "cafe" ? "bg-amber-600" : "bg-white"
        )} />
      </div>

      <BorderBeam size={isFullscreen ? 800 : 500} duration={15} colorFrom="#16a34a" colorTo="#84cc16" />

      {/* Top Header */}
      <header className="flex items-center justify-between p-6 md:px-10 border-b border-white/5 bg-black/20 backdrop-blur-md z-10 shrink-0">
        <div className="flex items-center gap-4">
          <Link 
            href={backUrl}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-white/60 hover:text-white"
          >
            <X className="w-4 h-4" />
          </Link>
          <div>
            <h2 className="text-sm font-black tracking-widest text-white/40 uppercase hidden sm:block">Presentación Interactiva</h2>
            <h1 className="text-sm md:text-base font-bold text-white tracking-tight line-clamp-1">{title}</h1>
          </div>
        </div>

        {/* Header Controls */}
        <div className="flex items-center gap-3">
          {/* Progress Indicator */}
          <span className="text-xs font-bold text-white/40 uppercase tracking-widest bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">
            Diapositiva {current + 1} / {slides.length}
          </span>
          <button 
            onClick={toggleFullscreen}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-white/60 hover:text-white"
            title="Pantalla Completa"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-white/5 relative z-10 shrink-0">
        <motion.div 
          className={cn("h-full transition-all duration-300", accentBg)}
          animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Slide Content Area */}
      <div className="flex-1 relative overflow-y-auto px-6 py-8 md:p-12 flex flex-col justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center"
          >
            {/* Header Content */}
            <div className="mb-6 md:mb-8 text-center sm:text-left">
              {currentSlide.subtitle && (
                <span className={cn("text-xs font-bold tracking-[0.25em] uppercase mb-2 block", accentColor)}>
                  {currentSlide.subtitle}
                </span>
              )}
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight tracking-tight">
                {currentSlide.title}
              </h3>
            </div>

            {/* Slide Body */}
            <div className="flex-1 flex flex-col justify-center">
              {currentSlide.content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Footer Controls */}
      <footer className="p-6 md:px-10 border-t border-white/5 bg-black/20 backdrop-blur-md z-10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
        {/* Reset & PDF buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <button 
            onClick={handleReset}
            disabled={current === 0}
            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white/50 hover:text-white disabled:opacity-20 disabled:hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest"
            title="Reiniciar Presentación"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden md:inline">Reiniciar</span>
          </button>
          
          <Magnetic strength={0.1}>
            <button 
              onClick={handleDownload}
              disabled={isDownloading}
              className={cn(
                "px-5 py-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest transition-all",
                accentBorder,
                isDownloading ? "bg-white/5 text-white/40" : "bg-[#0b0b0b] hover:bg-white/5 text-white"
              )}
            >
              <Download className={cn("w-4 h-4", isDownloading && "animate-bounce", accentColor)} />
              <span>{isDownloading ? "Descargando..." : "Descargar PDF"}</span>
            </button>
          </Magnetic>
        </div>

        {/* Back and Next */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button 
            onClick={handlePrev}
            disabled={current === 0}
            className="flex-1 sm:flex-initial px-6 py-4 bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-2xl disabled:opacity-20 disabled:hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest"
          >
            <ChevronLeft className="w-4 h-4" />
            Atrás
          </button>
          
          <button 
            onClick={handleNext}
            disabled={current === slides.length - 1}
            className={cn(
              "flex-1 sm:flex-initial px-8 py-4 text-black font-bold rounded-2xl transition-all flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest",
              current === slides.length - 1 ? "bg-white/5 text-white/20 border border-white/10 cursor-not-allowed" : "hover:scale-[1.02] active:scale-[0.98] cursor-pointer",
              current !== slides.length - 1 && accentBg
            )}
          >
            {current === slides.length - 1 ? (
              "Fin de la Guía"
            ) : (
              <>
                Siguiente
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </footer>
    </div>
  );
}
