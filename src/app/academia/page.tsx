"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const courses = [
  { id: 1, title: "Fundamentos del Barefoot", duration: "2h 45m", level: "Básico", img: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=800&q=80" },
  { id: 2, title: "Biomecánica Avanzada", duration: "4h 20m", level: "Avanzado", img: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80" },
  { id: 3, title: "Rehabilitación de Laminitis", duration: "5h 15m", level: "Especialización", img: "https://images.unsplash.com/photo-1506795660198-e95c77602129?w=800&q=80" },
  { id: 4, title: "Herramientas y Afilado", duration: "1h 30m", level: "Taller", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" },
];

export default function AcademiaPage() {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-black overflow-hidden flex flex-col">
      <div className="px-6 lg:px-12 mb-10 w-full max-w-[1600px] mx-auto">
        <h1 className="text-4xl md:text-6xl font-heading font-semibold text-white mb-2">
          Bieneq Academy
        </h1>
        <p className="text-white/60 text-lg">
          Masterclass y módulos técnicos de élite.
        </p>
      </div>
      
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12">
        <h2 className="text-xl font-medium text-white mb-6">Tendencias en Podología</h2>
        
        <div className="flex gap-4 overflow-x-auto pb-10 scrollbar-hide snap-x">
          {courses.map((course) => {
            const isHovered = hoveredCourse === course.id;
            
            return (
              <motion.div
                key={course.id}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
                layout
                animate={{
                  width: isHovered ? 450 : 300,
                  opacity: hoveredCourse && !isHovered ? 0.5 : 1
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative h-[200px] md:h-[250px] shrink-0 rounded-md overflow-hidden cursor-pointer snap-center bg-white/5 border border-white/10 group"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${course.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                
                {isHovered && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center transform transition-transform hover:scale-110">
                      <Play className="w-6 h-6 ml-1 fill-black" />
                    </div>
                  </motion.div>
                )}

                <motion.div 
                  layout="position"
                  className="absolute bottom-0 left-0 w-full p-6 z-20"
                >
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{course.title}</h3>
                  <div className="flex items-center gap-3 text-xs font-semibold">
                    <span className="text-bieneq-green px-2 py-0.5 bg-bieneq-green/10 rounded-sm">
                      {course.level}
                    </span>
                    <span className="text-white/80">{course.duration}</span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
