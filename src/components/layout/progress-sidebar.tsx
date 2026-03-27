"use client"

import { useCourse } from "@/hooks/use-course"
import { motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { CheckCircle2, PlayCircle } from "lucide-react"

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

function GroupDivider({ label }: { label: string }) {
  return (
    <div className="px-3 pt-4 pb-1.5">
      <div className="h-px bg-border/50 mb-1.5" />
      <span className="text-[8px] tracking-[0.35em] uppercase text-muted-foreground/30 font-semibold">
        {label}
      </span>
    </div>
  )
}

export function ProgressSidebar() {
  const { currentModuleIndex, setCurrentModuleIndex, modules } = useCourse()
  const progress = currentModuleIndex / (modules.length - 1)

  // Build render list with group dividers
  type RenderItem =
    | { type: "divider"; label: string; key: string }
    | { type: "section"; section: any; index: number }

  const renderItems: RenderItem[] = []
  let lastGroup: string | undefined = undefined

  modules.forEach((section, index) => {
    if (section.parte && section.parte !== lastGroup) {
      renderItems.push({ type: "divider", label: section.parte, key: `divider-${section.parte}` })
      lastGroup = section.parte
    }
    renderItems.push({ type: "section", section, index })
  })

  return (
    <aside className="sticky top-0 h-screen w-[280px] shrink-0 border-r border-border hidden lg:flex flex-col z-50 overflow-hidden bg-sidebar">
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
      <div className="p-6 pb-4 border-b border-border relative">
        <div className="flex items-center gap-3 mb-1">
          <HorseshoeIcon />
          <h2 className="font-display font-semibold text-xl text-foreground tracking-tight leading-none">
            Pie Descalzo
          </h2>
        </div>
        <p className="text-[10px] text-muted-foreground/60 tracking-[0.25em] uppercase ml-10">
          Plataforma de Curso
        </p>

        {/* Progress bar */}
        <div className="mt-6 h-[2px] bg-border rounded-full overflow-hidden">
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
      <ScrollArea className="flex-1 py-4">
        <nav className="flex flex-col px-3 gap-1">
          {renderItems.map(item => {
            if (item.type === "divider") {
              return <GroupDivider key={item.key} label={item.label} />
            }

            const { section, index } = item
            const isActive = currentModuleIndex === index
            const isPast   = index < currentModuleIndex

            return (
              <button
                key={section.id}
                onClick={() => setCurrentModuleIndex(index)}
                className={cn(
                  "group relative flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-300 text-left",
                  isActive
                    ? "text-primary-foreground"
                    : isPast
                    ? "text-amber-500/60 hover:text-amber-500"
                    : "text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent"
                )}
              >
                {/* Active background */}
                {isActive && (
                  <motion.div
                    layoutId="active-sidebar-bg"
                    className="absolute inset-0 rounded-xl bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                {/* Number */}
                <span className={cn(
                  "relative z-10 font-mono text-[10px] w-6 shrink-0 font-bold transition-colors duration-300",
                  isActive  ? "text-black"
                  : isPast   ? "text-amber-500/40"
                  : "text-muted-foreground/30 group-hover:text-amber-500/50"
                )}>
                  {String(section.numero).padStart(2, '0')}
                </span>

                {/* Thumbnail/Icon */}
                <div className="relative z-10 w-8 h-8 rounded-full overflow-hidden border border-white/10 shrink-0">
                  {section.media?.imagen_fondo || section.media?.imagen_principal ? (
                    <img 
                      src={section.media?.imagen_fondo || section.media?.imagen_principal} 
                      className={cn("w-full h-full object-cover", !isActive && "grayscale opacity-50")} 
                      alt="" 
                    />
                  ) : (
                    <div className={cn("w-full h-full flex items-center justify-center bg-white/5", isActive ? "text-black" : "text-white/20")}>
                      {isActive ? <PlayCircle className="w-4 h-4" /> : <div className="w-1.5 h-1.5 rounded-full bg-current" />}
                    </div>
                  )}
                </div>

                {/* Label */}
                <span className={cn(
                  "relative z-10 font-medium leading-tight truncate text-[11px] tracking-tight",
                  isActive ? "text-black" : ""
                )}>
                  {section.titulo}
                </span>

                {/* Hover shimmer */}
                {!isActive && (
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent pointer-events-none" />
                )}
              </button>
            )
          })}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="p-6 border-t border-border bg-sidebar-accent/50">
        <div className="flex items-center gap-3 opacity-40">
           <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
              <span className="text-[10px] font-bold text-amber-500">JL</span>
           </div>
           <div>
              <p className="text-[10px] font-bold text-white leading-none">José Manuel Luna</p>
              <p className="text-[8px] text-white/50 uppercase tracking-widest mt-1">Instructor</p>
           </div>
        </div>
      </div>
    </aside>
  )
}
