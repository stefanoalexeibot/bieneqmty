import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bieneq Academy | Formación de Élite",
  description: "Cursos avanzados de podología y mecánica equina para profesionales. Aprende con José Manuel Luna.",
  openGraph: {
    title: "Bieneq Academy | El Estándar de la Podología Equina",
    description: "Formación científica y técnica avanzada en el sector equino.",
    images: [{ url: "https://bieneqmty.com/og-academy.jpg" }],
  },
};

export default function AcademiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
