"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ChevronRight, Filter, Info, Star } from "lucide-react";
import { useState } from "react";
import { OutlineText } from "@/components/ui/outline-text";
import { GradientText } from "@/components/ui/gradient-text";
import { cn } from "@/lib/utils";

const productCategories = ["Todos", "Herramientas", "Digital", "Kits", "Accesorios"];

const products = [
  {
    id: 1,
    name: "Escofina Bieneq Pro",
    desc: "Precisión suiza adaptada a la biomecánica del casco equino. La herramienta definitiva.",
    price: "$1,200",
    tag: "Nuevo",
    category: "Herramientas",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    accent: "bieneq-green"
  },
  {
    id: 2,
    name: "Cuchilla Curva Élite",
    desc: "Acero de alto carbono para descorolado sin esfuerzo.",
    price: "$850",
    tag: "Best Seller",
    category: "Herramientas",
    img: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=800&q=80",
    accent: "bieneq-cafe"
  },
  {
    id: 3,
    name: "Kit Completo Barefoot",
    desc: "Todo lo que necesitas para la transición al barefoot, desde herramientas hasta guía.",
    price: "$3,400",
    tag: "Especial",
    category: "Kits",
    img: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80",
    accent: "bieneq-green"
  },
  {
    id: 4,
    name: "Ebook: Principios Biomecánicos",
    desc: "Guía digital avanzada con diagramas anatómicos detallados.",
    price: "$499",
    tag: "Digital",
    category: "Digital",
    img: "https://images.unsplash.com/photo-1506795660198-e95c77602129?w=800&q=80",
    accent: "bieneq-yellow"
  }
];

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-white/20 transition-all duration-500"
    >
      {/* Visual Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={product.img} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        
        {/* Floating Tag */}
        <div className="absolute top-6 left-6">
          <span className="px-4 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest rounded-full">
            {product.tag}
          </span>
        </div>

        {/* Action Button */}
        <div className="absolute top-6 right-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ShoppingBag className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 relative">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[10px] font-bold text-bieneq-green uppercase tracking-[0.2em] mb-1 block">
              {product.category}
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">{product.name}</h3>
          </div>
          <span className="text-xl font-light text-white/80">{product.price}</span>
        </div>
        
        <p className="text-sm text-white/40 leading-relaxed mb-8 line-clamp-2">
          {product.desc}
        </p>

        <button className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-bieneq-green transition-colors group/btn">
          Detalles del Producto 
          <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}

export default function TiendaPage() {
  const [activeTab, setActiveTab] = useState("Todos");

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-bieneq-green/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-bieneq-cafe/5 blur-[120px] rounded-full" />
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-8xl font-heading font-bold leading-[0.85] tracking-tighter mb-8">
              Boutique <br />
              <OutlineText text="Profesional." strokeColor="rgba(255,255,255,0.2)" className="text-white" />
            </h1>
            <p className="text-xl text-white/40 font-light leading-relaxed">
              Herramientas de precisión para el cuidado barefoot, diseñadas para durar toda una carrera profesional.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl"
          >
            <Star className="w-6 h-6 text-bieneq-green mb-4 fill-bieneq-green" />
            <span className="text-3xl font-bold tracking-tighter">4.9/5</span>
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-1">Calidad Premium</span>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-8 border-b border-white/5 pb-6">
          <div className="hidden md:flex items-center gap-2 text-white/30">
            <Filter className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Filtrar:</span>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide py-2">
            {productCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all border",
                  activeTab === cat 
                    ? "bg-white text-black border-white" 
                    : "bg-transparent border-white/10 text-white/40 hover:border-white/30"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {products
            .filter(p => activeTab === "Todos" || p.category === activeTab)
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>

      {/* Help Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-32">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-bieneq-green/10 to-transparent border border-bieneq-green/20 flex flex-col items-center text-center"
        >
          <Info className="w-12 h-12 text-bieneq-green mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">¿No sabes qué herramienta elegir?</h2>
          <p className="text-lg text-white/50 max-w-xl mb-10 leading-relaxed">
            Nuestro equipo de expertos Barefoot puede asesorarte para elegir el kit perfecto según tu nivel de experiencia.
          </p>
          <button className="px-10 py-5 bg-bieneq-green text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-3">
            Recibir Asesoría
          </button>
        </motion.div>
      </div>
    </main>
  );
}
