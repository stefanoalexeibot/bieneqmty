import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clínicas y Casos | Resultados Reales",
  description: "Documentación técnica de rehabilitaciones exitosas y procedimientos clínicos. Ciencia aplicada al bienestar equino.",
  openGraph: {
    title: "Casos de Éxito y Clínicas Bieneq",
    description: "Resultados reales en rehabilitación y podología equina avanzada.",
    images: [{ url: "https://bieneqmty.com/og-clinics.jpg" }],
  },
};

export default function ClinicasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
