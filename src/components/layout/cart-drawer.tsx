"use client";

import { useCart } from "@/hooks/use-cart";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";
import Link from "next/link";

export function CartDrawer() {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCart();

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleCart(false)}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm shadow-2xl"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-[70] w-full max-w-lg bg-[#0a0a0a] border-l border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-bieneq-green" />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight">Tu Carrito</h2>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{getTotalItems()} Artículos</p>
                </div>
              </div>
              <button
                onClick={() => toggleCart(false)}
                className="p-3 rounded-full hover:bg-white/5 transition-colors"
                aria-label="Close Cart"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
              <AnimatePresence mode="popLayout">
                {items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center">
                      <ShoppingBag className="w-10 h-10 text-white/10" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Tu carrito está vacío</h3>
                      <p className="text-sm text-white/30 max-w-[200px] mt-2">Parece que aún no has añadido ninguna herramienta bieneq.</p>
                    </div>
                    <Magnetic>
                      <button
                        onClick={() => toggleCart(false)}
                        className="px-8 py-3 bg-white text-black font-bold rounded-full text-xs uppercase tracking-widest"
                      >
                        Continuar Comprando
                      </button>
                    </Magnetic>
                  </motion.div>
                ) : (
                  <ul className="space-y-6">
                    {items.map((item) => (
                      <motion.li
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="group flex gap-6 p-4 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        {/* Item Image */}
                        <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden bg-white/5">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>

                        {/* Item Details */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-[10px] font-bold text-bieneq-green uppercase tracking-widest mb-1">{item.category}</p>
                              <h4 className="text-sm font-bold group-hover:text-bieneq-light transition-colors">{item.name}</h4>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-1 px-2 text-white/20 hover:text-red-400 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="flex items-center justify-between">
                            {/* Quantity Controls */}
                            <div className="flex items-center bg-black/40 rounded-full px-2 py-1 border border-white/10">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:text-bieneq-green transition-colors disabled:opacity-20"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-6 text-center text-xs font-bold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:text-bieneq-green transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <span className="text-sm font-bold">${(item.price * item.quantity).toLocaleString()}</span>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </AnimatePresence>
            </div>

            {/* Footer / Summary */}
            {items.length > 0 && (
              <div className="p-8 border-t border-white/10 space-y-6 bg-black/40 backdrop-blur-3xl">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Subtotal</span>
                    <span className="font-light">${getTotalPrice().toLocaleString()} MXN</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Envío</span>
                    <span className="text-bieneq-green font-bold text-[10px] uppercase">Calculado en el checkout</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex justify-between items-end">
                    <span className="text-xl font-bold">Total</span>
                    <div className="text-right">
                      <p className="text-2xl font-heading font-bold text-bieneq-green tracking-tighter">${getTotalPrice().toLocaleString()}</p>
                      <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest">Precios con IVA incluido</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <Magnetic strength={0.1}>
                    <button className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:bg-bieneq-green transition-colors group">
                      <span>Finalizar Compra</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Magnetic>
                  <p className="text-[10px] text-center text-white/20 uppercase tracking-widest font-bold">Pagos seguros con Stripe & PayPal</p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
