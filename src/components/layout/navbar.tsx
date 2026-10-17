"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, BookOpen, CircleUserRound } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { useCart } from "@/hooks/use-cart";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const pathname = usePathname();
  const isAcademy = pathname.startsWith("/academia");
  const { toggleCart, getTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    
    // Check for modal-open class periodically or via observer
    const checkModal = () => {
      setIsModalActive(document.body.classList.contains("modal-open"));
    };
    
    const observer = new MutationObserver(checkModal);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Tienda", href: "/tienda" },
    { name: "Academia", href: "/academia" },
    { name: "Clínicas", href: "/clinicas" },
    { name: "Galería", href: "/galeria" },
    { name: "Citas", href: "/citas" },
    { name: "Recursos", href: "/recursos" },
  ];

  return (
    <nav
      className={`fixed top-4 inset-x-4 z-50 transition-all duration-500 flex justify-center px-4 py-2 rounded-full border shadow-none ${isAcademy ? "border-[#dfe4d9] bg-[#f5f4ed]/95 shadow-[0_10px_30px_rgba(36,57,42,0.08)] backdrop-blur-2xl" : "border-white/0"} ${
        isModalActive ? "opacity-0 pointer-events-none translate-y-[-20px]" : "opacity-100"
      } ${
        scrolled 
          ? isAcademy ? "bg-[#f5f4ed]/95 border-[#dfe4d9] py-3 translate-y-0 shadow-[0_10px_30px_rgba(36,57,42,0.08)]" : "bg-white/[0.03] backdrop-blur-3xl backdrop-saturate-150 border-white/10 border-t-white/20 py-4 translate-y-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          : isAcademy ? "translate-y-0" : "bg-transparent translate-y-[-10px]"
      }`}
    >
      <div className="w-full max-w-7xl flex items-center justify-between">
        {/* LOGO */}
        <Magnetic strength={0.1}>
          <Link href="/" className="relative z-50 flex items-center gap-2 group block">
            <div className="h-16 md:h-20 flex items-center justify-center -ml-2">
              <img 
                src="/images/logo.png" 
                alt="BieneqMty Logo" 
                className="h-[140%] md:h-[160%] w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
          </Link>
        </Magnetic>

        {/* DESKTOP NAV */}
        <div className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-lg ${isAcademy ? "border border-[#dfe4d9] bg-white/70 shadow-sm" : "bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 shadow-inner"}`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            
            return (
              <Magnetic strength={0.2} key={link.name}>
                <Link
                  href={link.href}
                  className={`px-4 py-1 text-sm font-medium transition-colors relative group block ${isAcademy ? (isActive ? "text-[#254534]" : "text-[#647164] hover:text-[#254534]") : (isActive ? "text-white" : "text-white/70 hover:text-white")}`}
                >
                  {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all ${isAcademy ? "bg-[#718866]" : "bg-bieneq-green"} ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              </Magnetic>
            )
          })}
        </div>

        {/* ICONS & MOBILE TOGGLE */}
        <div className="flex items-center gap-2 sm:gap-4 relative z-50">
          <Magnetic strength={0.2}>
            <Link href="/academia/cursos" aria-label="Ver cursos" className={`p-2 rounded-full transition-colors hidden md:block ${isAcademy ? "text-[#647164] hover:bg-[#e8ece3] hover:text-[#254534]" : "text-white/70 hover:text-white hover:bg-white/10"}`}>
              <BookOpen className="w-5 h-5" />
            </Link>
          </Magnetic>
          {isAcademy ? <Magnetic strength={0.2}><Link href="/academia/mi-aprendizaje" className="hidden items-center gap-2 rounded-full bg-[#254534] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#183324] md:inline-flex"><CircleUserRound className="h-4 w-4" />Mi aula</Link></Magnetic> : null}
          <Magnetic strength={0.2}>
            <button 
              onClick={() => toggleCart(true)}
              className={`relative p-2 rounded-full transition-colors ${isAcademy ? "text-[#647164] hover:bg-[#e8ece3] hover:text-[#254534]" : "text-white/70 hover:text-white hover:bg-white/10"}`}
            >
              <ShoppingBag className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-bieneq-green text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </Magnetic>
          
          <Magnetic strength={0.2}>
            <button 
              className={`p-2 md:hidden ${isAcademy ? "text-[#647164] hover:text-[#254534]" : "text-white/70 hover:text-white"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </Magnetic>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute top-full left-0 w-full backdrop-blur-2xl border-b flex flex-col px-6 py-10 gap-6 md:hidden shadow-2xl gpu-optimize ${isAcademy ? "bg-[#f5f4ed]/98 border-[#dfe4d9]" : "bg-black/95 border-white/10"}`}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-heading font-bold transition-colors flex items-center justify-between group ${isAcademy ? "text-[#34493a] hover:text-[#718866]" : "text-white/90 hover:text-bieneq-green"}`}
                >
                  {link.name}
                  <span className="w-6 h-px bg-bieneq-green scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

