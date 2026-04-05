"use client";

import { motion } from "framer-motion";
import { OutlineText } from "@/components/ui/outline-text";

const tampicoImages = [
  {
    src: "/images/home/wellness/tampico-02.jpg",
    alt: "Práctica clínica en Tampico - Anatomía palpación",
    className: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: "/images/home/wellness/tampico-03.jpg",
    alt: "Instrucción grupal bajo sombra",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/home/wellness/tampico-04.jpg",
    alt: "Evaluación de aplomos y conformación",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/home/wellness/tampico-05.jpg",
    alt: "Demostración de recorte fisiológico",
    className: "col-span-1 row-span-2 md:col-span-2",
  },
  {
    src: "/images/home/wellness/tampico-06.jpg",
    alt: "Análisis biomecánico en pista",
    className: "col-span-1 row-span-1",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function ClinicTampicoGallery() {
  return (
    <section className="py-20 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-bieneq-green font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              Memoria Clínica 03
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Sede <br className="hidden md:block" />
              <OutlineText text="Tampico." strokeColor="rgba(255,255,255,0.2)" className="text-white" />
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto md:mx-0">
              Capturas exclusivas de nuestra formación en Tampico. Un grupo comprometido con la salud podal y la biomecánica avanzada.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] gap-4 md:gap-6"
        >
          {tampicoImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 0.98 }}
              className={`relative overflow-hidden rounded-[2rem] border border-white/10 group cursor-pointer ${image.className}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              />
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent blur-sm" />
                <div className="relative">
                  <div className="w-8 h-1 bg-bieneq-green mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
                  <p className="text-white font-medium text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    {image.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
