import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "text" | "none">("default");
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.2 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - (isHovering ? 20 : 12));
      cursorY.set(e.clientY - (isHovering ? 20 : 12));
      
      const target = e.target as HTMLElement;
      const isLink = !!target.closest("a, button, [role='button']");
      const isCard = !!target.closest(".tilt-card, .group");
      
      setIsHovering(isLink || isCard);
      setCursorType(isLink ? "pointer" : isCard ? "pointer" : "default");
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isHovering]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        width: isHovering ? 40 : 24,
        height: isHovering ? 40 : 24,
      }}
    >
      <div className="relative w-full h-full">
        <motion.div
           animate={{ scale: isHovering ? 1.5 : 1 }}
           className="absolute inset-0 rounded-full border border-white/50 bg-white/5 backdrop-blur-[2px]"
        />
        <motion.div 
           initial={{ scale: 0 }}
           animate={{ scale: isHovering ? 0.3 : 1 }}
           className="absolute inset-0 m-auto w-1 h-1 bg-white rounded-full" 
        />
      </div>
    </motion.div>
  );
}
