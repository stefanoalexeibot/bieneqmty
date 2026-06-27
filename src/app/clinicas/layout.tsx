import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clínicas de Formación | BieneqMty",
  description: "Detalles y fechas de nuestras próximas clínicas presenciales de podología, rehabilitación y barefoot integral.",
  openGraph: {
    title: "Clínicas y Formación Bieneq",
    description: "Fechas, temarios e inscripciones de nuestras próximas clínicas de barefoot en Monterrey.",
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
