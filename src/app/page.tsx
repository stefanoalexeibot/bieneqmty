import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero";
import { InfiniteMarquee } from "@/components/ui/infinite-marquee";
import { WellnessPhilosophy } from "@/components/sections/wellness-philosophy";
import { BarefootResults } from "@/components/sections/barefoot-results";
import { ClinicsFocus } from "@/components/sections/clinics-focus";
import { StatsSection } from "@/components/sections/stats";
import { BentoGrid } from "@/components/sections/bento-grid";
import { FounderProfile } from "@/components/sections/founder-profile";
import { VideoTestimonials } from "@/components/sections/video-testimonials";
import { ClinicVisitor } from "@/components/sections/clinic-visitor";
import { ClinicHighlights } from "@/components/sections/clinic-highlights";
import { ClinicHDGallery } from "@/components/sections/clinic-gallery";

export const metadata: Metadata = {
  title: "Bienestar Equino Ultra-Premium",
  description: "Especialistas en podología, rehabilitación y alto rendimiento equino. El estándar de oro en el cuidado del caballo en Monterrey.",
  openGraph: {
    title: "BieneqMty | El Estándar Ultra-Premium del Caballo",
    description: "Rehabilitación clínica, herramientas de élite y formación avanzada en Monterrey.",
    url: "https://bieneqmty.com",
    siteName: "BieneqMty",
    images: [
      {
        url: "https://bieneqmty.com/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "BieneqMty - Bienestar Equino",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-foreground antialiased selection:bg-bieneq-green/20 selection:text-bieneq-green">
      <HeroSection />
      <InfiniteMarquee />
      <StatsSection />
      <WellnessPhilosophy />
      <BarefootResults />
      <ClinicsFocus />
      <BentoGrid />
      <FounderProfile />
      <VideoTestimonials />
    </main>
  );
}
