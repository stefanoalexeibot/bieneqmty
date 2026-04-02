import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería | BieneqMty — Rehabilitaciones, Clínicas y Cascos",
  description: "Galería de evidencia visual de rehabilitaciones equinas, clínicas presenciales y resultados reales del trabajo de BieneqMty en Monterrey.",
  openGraph: {
    title: "Galería BieneqMty",
    description: "Antes y después de cascos equinos rehabilitados, clínicas presenciales y galería completa.",
  },
};

export default function GaleriaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
