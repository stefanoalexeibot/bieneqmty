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

export const metadata: Metadata = {
  title: "BieneqMty | Bienestar Equino Ultra-Premium en Monterrey",
  description: "Clínica de podología equina, herramientas profesionales para herrado y academia de entrenamiento barefoot en Monterrey, México. José Manuel Luna.",
  openGraph: {
    title: "BieneqMty | El Apple del Bienestar Equino",
    description: "Rehabilitación, herramientas de élite y cursos de podología equina en Monterrey.",
    type: "website",
    url: "https://bieneqmty.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-bieneq-green/20 selection:text-bieneq-green">
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

