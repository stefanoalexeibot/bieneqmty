import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de Éxito | Transformación Real",
  description: "Testimonios y resultados de rehabilitaciones de alto impacto con BieneqMty.",
  openGraph: {
     title: "Resultados y Testimonios Élite | BieneqMty",
     description: "Historias de éxito en podología y bienestar equino.",
     images: [{ url: "https://bieneqmty.com/og-success.jpg" }],
  },
};

export default function CasosDeExitoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
