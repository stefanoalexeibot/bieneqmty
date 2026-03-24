"use client"

import { useActiveSection } from "@/hooks/use-active-section"
import { motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import Link from "next/link"

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "modulo-1", label: "1. Introducción" },
  { id: "modulo-2", label: "2. Filosofía y Pilares" },
  { id: "modulo-3", label: "3. El Caballo Salvaje" },
  { id: "modulo-4", label: "4. Anatomía del Casco" },
  { id: "modulo-5", label: "5. Fisiología y Función" },
  { id: "modulo-6", label: "6. Nutrición" },
  { id: "modulo-7", label: "7. Entorno" },
  { id: "modulo-8", label: "8. Herramientas" },
  { id: "modulo-9", label: "9. Técnica de Recorte" },
  { id: "modulo-10", label: "10. Laminitis" },
  { id: "modulo-11", label: "11. Transición/Conclusión" },
]

export function ProgressSidebar() {
  const targetIds = sections.map((s) => s.id)
  const activeSection = useActiveSection(targetIds, "hero")

  return (
    <aside className="sticky top-0 h-screen w-[280px] shrink-0 border-r bg-sidebar hidden lg:flex flex-col shadow-sm z-50">
      <div className="p-6 border-b bg-sidebar">
        <h2 className="text-xl font-bold text-primary tracking-tight">
          Pie Descalzo
        </h2>
        <p className="text-xs text-muted-foreground mt-1 max-w-[200px] leading-relaxed">
          El Arte de Cuidar el Casco Natural
        </p>
      </div>
      <ScrollArea className="flex-1 py-4">
        <nav className="flex flex-col gap-1 px-4">
          {sections.map((section) => {
            const isActive = activeSection === section.id
            return (
              <Link 
                key={section.id} 
                href={`#${section.id}`} 
                className={cn(
                  "relative flex items-center px-4 py-3 rounded-md text-sm transition-colors cursor-pointer",
                  isActive 
                    ? "text-primary-foreground font-medium" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-sidebar-bg"
                    className="absolute inset-0 bg-primary rounded-md -z-10 shadow-sm"
                    initial={false}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{section.label}</span>
              </Link>
            )
          })}
        </nav>
      </ScrollArea>
    </aside>
  )
}
