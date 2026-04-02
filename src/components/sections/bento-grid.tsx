"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, GraduationCap, MapPin, ArrowRight } from "lucide-react";

export function BentoGrid() {
  return (
    <section className="relative w-full py-24 px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-bieneq-green font-semibold tracking-wider uppercase text-sm mb-4 block">Ecosistema BieneqC</span>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight">Todo lo que necesitas, en un solo lugar.</h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Card 1: Tienda (Spans 2 columns on tablet, 1 on desktop but taller? Let's just do a clean 3-col or 2-col span) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-bieneq-cafe/40 transition-all flex flex-col justify-between p-8 text-left"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-bieneq-cafe/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-bieneq-cafe mb-auto">
              <ShoppingBag className="w-8 h-8" />
            </div>

            <div className="relative z-10 mt-12">
              <h3 className="text-3xl font-bold text-white mb-2">Tienda Bieneq</h3>
              <p className="text-white/60 mb-6 max-w-md">Herramientas de nivel profesional y recursos digitales esenciales para el cuidado del casco.</p>
              <Link href="/tienda" className="inline-flex items-center gap-2 text-white font-medium hover:text-bieneq-cafe transition-colors">
                Explorar Catálogo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Academia */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-bieneq-green/40 transition-all flex flex-col justify-between p-8 text-left"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-bieneq-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-bieneq-green mb-auto">
              <GraduationCap className="w-8 h-8" />
            </div>

            <div className="relative z-10 mt-12">
              <h3 className="text-3xl font-bold text-white mb-2">Bieneq Academy</h3>
              <p className="text-white/60 mb-6">Formación de élite en podología equina integrativa.</p>
              <Link href="/academia" className="inline-flex items-center gap-2 text-white font-medium hover:text-bieneq-green transition-colors">
                Ver Cursos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

           {/* Card 3: Citas / Consultoría (Spans 3 cols or just 1?) */}
           <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-3 group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-bieneq-yellow/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 text-left"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-bieneq-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 max-w-2xl">
               <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-bieneq-yellow mb-6">
                 <MapPin className="w-8 h-8" />
               </div>
              <h3 className="text-3xl font-bold text-white mb-2">Consultoría y Servicios</h3>
              <p className="text-white/60 mb-6">Agenda una evaluación clínica presencial en Monterrey, o una asesoría técnica remota desde cualquier parte del mundo.</p>
            </div>

            <div className="relative z-10 mt-6 md:mt-0">
               <Link href="/citas" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform active:scale-95">
                Agendar Cita
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
