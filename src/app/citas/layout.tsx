import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Citas | Consultoría Clínica",
  description: "Agenda una evaluación presencial o virtual para tu caballo. Expertos en rehabilitación.",
  openGraph: {
    title: "Agendar Cita | BieneqMty",
    description: "Evaluaciones clínicas y de podología avanzada.",
    images: [{ url: "https://bieneqmty.com/og-appointments.jpg" }],
  },
};

export default function CitasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
