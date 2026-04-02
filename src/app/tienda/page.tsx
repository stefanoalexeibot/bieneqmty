"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function TiendaPage() {
  const products = [
    {
      id: 1,
      name: "Escofina Bieneq Pro",
      desc: "Precisión suiza adaptada a la biomecánica del casco equino. La herramienta definitiva.",
      price: "$1,200 MXN",
      tag: "Nuevo",
      color: "from-neutral-800 to-neutral-900"
    },
    {
      id: 2,
      name: "Cuchilla Curva Élite",
      desc: "Acero de alto carbono para descorolado sin esfuerzo.",
      price: "$850 MXN",
      tag: "Best Seller",
      color: "from-neutral-900 to-black border-bieneq-cafe/20"
    },
    {
      id: 3,
      name: "Kit Completo Barefoot",
      desc: "Todo lo que necesitas para la transición al barefoot.",
      price: "$3,400 MXN",
      tag: "Kit",
      color: "from-bieneq-green/10 to-transparent border-bieneq-green/20"
    },
    {
      id: 4,
      name: "Ebook: Fundamentos del Recorte",
      desc: "Guía digital de 150 páginas con diagramas biomecánicos.",
      price: "$499 MXN",
      tag: "Digital",
      color: "from-neutral-800 to-black"
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center bg-[#050505]">
      <div className="text-center mb-16 relative z-10 w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-bieneq-cafe font-semibold tracking-wider uppercase text-sm mb-4 block">Herramientas de Autor</span>
          <h1 className="text-5xl md:text-7xl font-heading font-semibold text-white mb-6 tracking-tight">
            Diseñadas para la <br/> perfección.
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light">
            No solo vendemos herramientas, proveemos la extensión de tus manos para garantizar la salud del caballo.
          </p>
        </motion.div>
      </div>
      
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {products.map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className={`group relative h-[450px] rounded-3xl p-8 flex flex-col justify-end overflow-hidden border border-white/5 bg-gradient-to-br ${item.color} hover:border-white/20 transition-all duration-500`}
          >
            {/* Tag */}
            <div className="absolute top-8 left-8">
              <span className="px-3 py-1 bg-white/10 text-white backdrop-blur-md rounded-full text-xs font-medium tracking-wide">
                {item.tag}
              </span>
            </div>

            {/* Fake Product Image Space */}
            <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-700">
              <div className="w-64 h-64 bg-gradient-to-t from-white/5 to-transparent rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-3xl font-bold text-white mb-2">{item.name}</h3>
              <p className="text-white/60 max-w-md mb-6">{item.desc}</p>
              
              <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <span className="text-2xl font-light text-white">{item.price}</span>
                <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform">
                  <ShoppingCart className="w-4 h-4" />
                  Agregar
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
