import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tienda | BieneqMty — Herramientas de Podología Equina",
  description: "Herramientas de precisión para podólogos: escofinas, cuchillas y kits profesionales para el cuidado del casco equino.",
  openGraph: { title: "Tienda BieneqMty", description: "Herramientas de élite para podología equina." },
};

export default function TiendaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
