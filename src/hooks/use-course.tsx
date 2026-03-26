"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import cursoData from "@/data/curso_lms.json"

interface CourseContextType {
  currentModuleIndex: number
  setCurrentModuleIndex: (index: number) => void
  modules: any[]
  nextModule: () => void
  prevModule: () => void
}

const CourseContext = createContext<CourseContextType | undefined>(undefined)

export function CourseProvider({ children }: { children: ReactNode }) {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0)
  const modules = cursoData.modulos

  const nextModule = () => {
    if (currentModuleIndex < modules.length - 1) {
      setCurrentModuleIndex(prev => prev + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevModule = () => {
    if (currentModuleIndex > 0) {
      setCurrentModuleIndex(prev => prev - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <CourseContext.Provider value={{ 
      currentModuleIndex, 
      setCurrentModuleIndex, 
      modules,
      nextModule,
      prevModule
    }}>
      {children}
    </CourseContext.Provider>
  )
}

export function useCourse() {
  const context = useContext(CourseContext)
  if (context === undefined) {
    throw new Error("useCourse must be used within a CourseProvider")
  }
  return context
}
