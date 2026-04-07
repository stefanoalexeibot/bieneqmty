import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bieneq Shop | Herramientas Profesionales",
  description: "Equipamiento de grado industrial para el cuidado y mantenimiento del caballo. Herramientas diseñadas para profesionales.",
  openGraph: {
    title: "Bieneq Shop | Herramientas de Élite para Caballos",
    description: "La boutique definitiva para el herrador y podólogo equino profesional.",
    images: [{ url: "https://bieneqmty.com/og-shop.jpg" }],
  },
};

export default function TiendaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
