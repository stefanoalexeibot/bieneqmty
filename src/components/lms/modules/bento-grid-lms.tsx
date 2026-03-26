"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BentoItem {
  titulo: string
  descripcion: string
  imagen?: string
  color?: string
}

interface BentoGridLMSProps {
  data: any
}

export function BentoGridLMS({ data }: BentoGridLMSProps) {
  const interactions = data.interactions || data.interacciones || []
  const items = interactions.find((i: any) => i.tipo === "bento-items")?.items || []

  return (
    <div className="flex flex-col gap-12">
      {/* Intro text */}
      <div className="max-w-3xl">
         <p className="text-xl text-white/60 font-light leading-relaxed">
           {data.texto_principal}
         </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 auto-rows-[250px]">
        {items.map((item: BentoItem, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "relative rounded-[2rem] p-8 overflow-hidden group border border-white/5",
              i === 0 ? "md:col-span-2 md:row-span-2 bg-amber-500 text-black" : "bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
            )}
          >
            {/* Visual background for large items if image provided */}
            {i === 0 && (
              <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
            )}

            <div className="relative z-10 h-full flex flex-col justify-end">
               <span className={cn(
                 "text-[10px] uppercase tracking-widest font-black mb-4",
                 i === 0 ? "text-black/40" : "text-amber-500/60"
               )}>
                 Lección {i + 1}
               </span>
               <h3 className={cn(
                 "text-2xl md:text-3xl font-display font-bold tracking-tight mb-4",
                 i === 0 ? "text-black" : "text-white"
               )}>
                 {item.titulo}
               </h3>
               <p className={cn(
                 "text-sm leading-relaxed",
                 i === 0 ? "text-black/70" : "text-white/40"
               )}>
                 {item.descripcion}
               </p>
            </div>

            {/* Accent hover line */}
            {i !== 0 && (
              <div className="absolute bottom-0 left-0 h-1 bg-amber-500 w-0 group-hover:w-full transition-all duration-500" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
