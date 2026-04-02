"use client";

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import { cn } from "@/lib/utils";

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
  initialSliderPosition?: number;
}

export function ComparisonSlider({
  beforeImage,
  afterImage,
  className,
  initialSliderPosition = 50,
}: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(initialSliderPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => handleMove(e.clientX);
  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full h-full select-none overflow-hidden touch-none", className)}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 sm:w-1.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize flex items-center justify-center transition-opacity"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-xl z-30">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black w-4 h-4 sm:w-6 sm:h-6">
              <path d="M15 18l1.5-1.5M18 15l1.5-1.5M6 6L22 22M9 18l-1.5-1.5M6 15l-1.5-1.5M18 9l1.5-1.5M15 6l1.5-1.5"></path>
              <path d="M11 7l-4 4-4-4"></path>
              <path d="M13 17l4-4 4 4"></path>
           </svg>
        </div>
      </div>
    </div>
  );
}
