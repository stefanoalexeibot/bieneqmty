import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Academia BieneqMty", template: "%s | Academia BieneqMty" },
  description: "Cursos en español sobre anatomía del casco equino, bienestar, manejo y barefoot.",
};

export default function AcademiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
