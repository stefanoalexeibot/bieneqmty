"use client"

import { useActiveSection } from "@/hooks/use-active-section"
import { motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import Link from "next/link"

const sections = [
  { id: "hero",      label: "Inicio",                  num: "·" },
  { id: "modulo-1",  label: "Introducción",             num: "01" },
  { id: "modulo-2",  label: "Filosofía y Pilares",      num: "02" },
  { id: "modulo-3",  label: "El Caballo Salvaje",       num: "03" },
  { id: "modulo-4",  label: "Anatomía del Casco",       num: "04" },
  { id: "modulo-5",  label: "Fisiología y Función",     num: "05" },
  { id: "modulo-6",  label: "Nutrición",                num: "06" },
  { id: "modulo-7",  label: "Entorno",                  num: "07" },
  { id: "modulo-8",  label: "Herramientas",             num: "08" },
  { id: "modulo-9",  label: "Técnica de Recorte",       num: "09" },
  { id: "modulo-10", label: "Laminitis",                num: "10" },
  { id: "modulo-11", label: "Transición",               num: "11" },
]

function HorseshoeIcon() {
  return (
    <svg viewBox="0 0 60 65" fill="none" className="w-7 h-7 text-amber-400" aria-hidden>
      <path
        d="M 8 4 L 8 34 A 22 22 0 0 0 52 34 L 52 4"
        stroke="currentColor" strokeWidth="9" strokeLinecap="butt" fill="none"
      />
      <circle cx="8"  cy="14" r="2.5" fill="currentColor" opacity="0.5"/>
      <circle cx="8"  cy="26" r="2.5" fill="currentColor" opacity="0.5"/>
      <circle cx="52" cy="26" r="2.5" fill="currentColor" opacity="0.5"/>
      <circle cx="52" cy="14" r="2.5" fill="currentColor" opacity="0.5"/>
    </svg>
  )
}

export function ProgressSidebar() {
  const targetIds = sections.map((s) => s.id)
  const activeSection = useActiveSection(targetIds, "hero")

  const activeIndex = sections.findIndex(s => s.id === activeSection)
  const progress = activeIndex <= 0 ? 0 : activeIndex / (sections.length - 1)

  return (
    <aside className="sticky top-0 h-screen w-[260px] shrink-0 border-r border-border hidden lg:flex flex-col z-50 overflow-hidden bg-sidebar">
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "150px 150px",
        }}
      />

      {/* Amber left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />

      {/* Header */}
      <div className="p-5 pb-4 border-b border-border relative">
        <div className="flex items-center gap-3 mb-1">
          <HorseshoeIcon />
          <h2 className="font-display font-semibold text-xl text-foreground tracking-tight leading-none">
            Pie Descalzo
          </h2>
        </div>
        <p className="text-[10px] text-muted-foreground/60 tracking-[0.25em] uppercase ml-10">
          El Arte del Casco Natural
        </p>

        {/* Progress bar */}
        <div className="mt-4 h-[2px] bg-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
            animate={{ width: `${Math.round(progress * 100)}%` }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[9px] text-muted-foreground/40 tracking-widest uppercase">Inicio</span>
          <span className="text-[9px] text-amber-500/60 tracking-widest uppercase font-medium">
            {Math.round(progress * 100)}%
          </span>
          <span className="text-[9px] text-muted-foreground/40 tracking-widest uppercase">Fin</span>
        </div>
      </div>

      {/* Nav items */}
      <ScrollArea className="flex-1 py-3">
        <nav className="flex flex-col px-3 gap-0.5">
          {sections.map((section, index) => {
            const isActive = activeSection === section.id
            const isPast  = index < activeIndex
            const isHero  = section.id === "hero"

            return (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className={cn(
                  "group relative flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-all duration-300",
                  isActive
                    ? "text-primary-foreground"
                    : isPast
                    ? "text-muted-foreground/50 hover:text-muted-foreground"
                    : "text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent"
                )}
              >
                {/* Active background */}
                {isActive && (
                  <motion.div
                    layoutId="active-sidebar-bg"
                    className="absolute inset-0 rounded-md bg-primary shadow-[0_0_20px_rgba(196,144,58,0.35)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                {/* Number */}
                <span className={cn(
                  "relative z-10 font-mono text-[10px] w-7 shrink-0 font-bold transition-colors duration-300",
                  isActive  ? "text-primary-foreground/70"
                  : isPast   ? "text-amber-500/40"
                  : "text-muted-foreground/30 group-hover:text-amber-500/50"
                )}>
                  {section.num}
                </span>

                {/* Status dot */}
                <span className="relative z-10 shrink-0">
                  {isActive ? (
                    <span className="flex h-1.5 w-1.5 rounded-full bg-primary-foreground/80 animate-pulse" />
                  ) : isPast && !isHero ? (
                    <span className="flex h-1.5 w-1.5 rounded-full bg-amber-500/40" />
                  ) : (
                    <span className="flex h-1.5 w-1.5 rounded-full border border-muted-foreground/20 group-hover:border-amber-500/40 transition-colors" />
                  )}
                </span>

                {/* Label */}
                <span className="relative z-10 font-medium leading-none truncate">
                  {section.label}
                </span>

                {/* Hover shimmer */}
                {!isActive && (
                  <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent pointer-events-none" />
                )}
              </Link>
            )
          })}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <p className="text-[9px] text-muted-foreground/30 tracking-[0.3em] uppercase text-center">
          Bieneq · Monterrey
        </p>
      </div>
    </aside>
  )
}
