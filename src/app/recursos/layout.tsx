import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recursos Gratuitos | Conocimiento Abierto",
  description: "Guías y materiales descargables sobre bienestar equino y podología.",
  openGraph: {
     title: "Recursos y Descargas | BieneqMty",
     description: "Educación de élite gratuita para todos los entusiastas del caballo.",
     images: [{ url: "https://bieneqmty.com/og-resources.jpg" }],
  },
};

export default function RecursosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
