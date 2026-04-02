import { HeroSection } from "@/components/sections/hero";
import { InfiniteMarquee } from "@/components/ui/infinite-marquee";
import { WellnessPhilosophy } from "@/components/sections/wellness-philosophy";
import { BentoGrid } from "@/components/sections/bento-grid";
import { FounderProfile } from "@/components/sections/founder-profile";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-bieneq-green/20 selection:text-bieneq-green">
      <HeroSection />
      <InfiniteMarquee />
      <WellnessPhilosophy />
      <BentoGrid />
      <FounderProfile />
    </main>
  );
}
