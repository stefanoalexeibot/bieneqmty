"use client";

import { Product } from "@/lib/products";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ChevronLeft, 
  ShoppingBag, 
  Star, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  CheckCircle2,
  ArrowRight,
  Info,
  X,
  Maximize2
} from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import { ShimmerWord } from "@/components/ui/shimmer-word";
import { BorderBeam } from "@/components/ui/border-beam";
import { ScrollReveal, RevealItem } from "@/components/animations/scroll-reveal";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";
import { useCart } from "@/hooks/use-cart";

export default function ProductView({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { addItem, toggleCart } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      slug: product.slug,
      category: product.category,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    toggleCart(true);
  };
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const stickyOpacity = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);
  const stickyY = useTransform(scrollYProgress, [0.1, 0.15], [-20, 0]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#050505] text-white pt-32 pb-24 relative overflow-x-hidden">
      {/* Background Parallax */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className={cn(
          "absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] blur-[150px] opacity-20 transition-colors duration-1000",
          product.accent === "bieneq-green" ? "bg-bieneq-green" : 
          product.accent === "bieneq-cafe" ? "bg-bieneq-cafe" : "bg-bieneq-yellow"
        )} />
      </div>

      {/* Sticky Quick Buy Bar */}
      <motion.div 
        style={{ opacity: stickyOpacity, y: stickyY }}
        className="fixed top-20 inset-x-0 z-50 px-6 py-4 bg-black/60 backdrop-blur-2xl border-b border-white/10 hidden md:block"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={product.images[0]} className="w-10 h-10 rounded-lg object-cover border border-white/10" alt="" />
            <div>
              <p className="text-sm font-bold">{product.name}</p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">{product.category}</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <span className="text-xl font-light">${product.price.toLocaleString()}</span>
            <Magnetic>
              <button 
                onClick={handleAddToCart}
                className="px-8 py-3 bg-bieneq-green text-black font-bold rounded-full text-sm hover:scale-105 transition-transform"
              >
                Agregar al Carrito
              </button>
            </Magnetic>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumbs & Back */}
        <Link 
          href="/tienda" 
          className="inline-flex items-center gap-2 text-xs font-bold text-white/40 hover:text-white transition-colors uppercase tracking-widest mb-12"
        >
          <ChevronLeft className="w-4 h-4" />
          Volver a la Tienda
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Left Side: Gallery */}
          <div className="space-y-6">
            <motion.div 
              layoutId={`img-${product.id}`}
              onClick={() => setIsImageExpanded(true)}
              className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 cursor-zoom-in group"
            >
              <BorderBeam size={400} duration={15} colorFrom="#16a34a" colorTo="#84cc16" />
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </AnimatePresence>
              
              {/* Zoom Indicator */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <Maximize2 className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute top-8 left-8">
                <span className="px-4 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest rounded-full">
                  {product.tag}
                </span>
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "w-24 h-24 rounded-2xl overflow-hidden border transition-all duration-300",
                    activeImage === idx ? "border-bieneq-green scale-105 shadow-[0_0_20px_rgba(22,163,74,0.3)]" : "border-white/10 opacity-40 hover:opacity-100"
                  )}
                >
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Info */}
          <div className="flex flex-col">
            <ScrollReveal staggerChildren={0.1}>
              <RevealItem>
                <div className="flex items-center gap-2 mb-4 text-bieneq-green">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-2">48 Reseñas</span>
                </div>
              </RevealItem>

              <RevealItem>
                <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-4 leading-none">
                  {product.name}
                </h1>
              </RevealItem>

              <RevealItem>
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-4xl font-light text-white">${product.price.toLocaleString()}</span>
                  <span className="text-sm text-white/20 uppercase tracking-[0.2em] font-bold">{product.currency}</span>
                </div>
              </RevealItem>

              <RevealItem>
                <p className="text-lg text-white/50 leading-relaxed mb-12 max-w-xl">
                  {product.description}
                </p>
              </RevealItem>

              {/* Action Buttons */}
              <RevealItem className="flex flex-col sm:flex-row gap-4 mb-16">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 h-16 bg-white text-black font-bold uppercase tracking-widest rounded-2xl hover:bg-bieneq-green hover:text-black transition-colors flex items-center justify-center gap-3 group"
                >
                  <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
                  Agregar al Carrito
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="px-10 h-16 bg-white/5 border border-white/10 font-bold uppercase tracking-widest rounded-2xl hover:border-white/30 transition-colors flex items-center justify-center"
                >
                  Comprar Ahora
                </button>
              </RevealItem>

              {/* Trust Badges */}
              <RevealItem className="grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
                <div className="flex gap-4">
                  <ShieldCheck className="w-6 h-6 text-bieneq-green shrink-0" />
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">Garantía Pro</h4>
                    <p className="text-xs text-white/40">Soporte industrial de por vida.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Truck className="w-6 h-6 text-bieneq-green shrink-0" />
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">Envío Express</h4>
                    <p className="text-xs text-white/40">Entrega nacional en 48-72h.</p>
                  </div>
                </div>
              </RevealItem>
            </ScrollReveal>
          </div>
        </div>

        {/* Specifications Bento Grid */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <ScrollReveal>
              <RevealItem>
                <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter">Especificaciones <br /> <span className="text-bieneq-green font-light italic">Técnicas.</span></h2>
              </RevealItem>
            </ScrollReveal>
            <p className="text-white/40 max-w-sm mb-2 text-sm">
              Cada herramienta es sometida a pruebas rigurosas para garantizar el rendimiento en las sesiones más exigentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Spec Cards */}
            {product.specs.map((spec, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4">{spec.label}</p>
                <p className="text-2xl font-bold">{spec.value}</p>
              </motion.div>
            ))}
            
            {/* Feature Highlights Large Card */}
            <div className="md:col-span-2 p-12 rounded-[3rem] bg-gradient-to-br from-bieneq-green/10 to-transparent border border-bieneq-green/20 relative overflow-hidden group">
              <BorderBeam size={500} duration={20} colorFrom="#16a34a" colorTo="transparent" />
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Características Elite</h3>
                  <div className="space-y-4">
                    {product.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-bieneq-green" />
                        <span className="text-sm text-white/60">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Beneficios Pro</h3>
                  <div className="space-y-4">
                    {product.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <ArrowRight className="w-4 h-4 text-bieneq-green" />
                        <span className="text-sm text-white/60">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="mb-20">
          <div className="bg-white/5 border border-white/10 rounded-[4rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 space-y-8">
              <div className="w-20 h-20 rounded-3xl bg-bieneq-green/20 flex items-center justify-center">
                <Info className="w-10 h-10 text-bieneq-green" />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">Asesoría <br /> Técnica Bieneq.</h2>
              <p className="text-white/40 text-lg leading-relaxed">
                ¿Tienes dudas sobre cómo implementar esta herramienta en tu protocolo de trabajo? Nuestros expertos barefoot están disponibles para guiarte.
              </p>
              <button className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                Hablar con un Experto
              </button>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1200&q=80" 
                  className="w-full h-full object-cover opacity-60"
                  alt="Soporte técnico" 
                />
              </div>
              <div className="absolute -bottom-8 -left-8 p-8 bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl">
                <p className="text-2xl font-bold text-bieneq-green tracking-tighter">100% Satisfacción</p>
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-1">Calidad Garantizada</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Sticky Mobile Add to Cart */}
      <div className="fixed bottom-0 inset-x-0 z-50 p-4 bg-black/80 backdrop-blur-2xl border-t border-white/10 md:hidden">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-xs font-bold truncate">{product.name}</p>
            <p className="text-sm font-light text-bieneq-green">${product.price.toLocaleString()}</p>
          </div>
          <button 
            onClick={handleAddToCart}
            className="px-8 py-4 bg-bieneq-green text-black font-bold rounded-2xl text-xs uppercase tracking-widest active:scale-95 transition-transform"
          >
            Comprar
          </button>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {isImageExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setIsImageExpanded(false)}
          >
            <button 
              className="absolute top-8 right-8 p-4 text-white/50 hover:text-white transition-colors"
              onClick={() => setIsImageExpanded(false)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src={product.images[activeImage]}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              alt={product.name}
            />
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
              {product.images.map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    activeImage === i ? "bg-bieneq-green w-8" : "bg-white/20"
                  )} 
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
