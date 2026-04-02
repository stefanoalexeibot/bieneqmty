import { HeroSection } from "@/components/sections/hero";
import { BentoGrid } from "@/components/sections/bento-grid";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-bieneq-green/20 selection:text-bieneq-green">
      <HeroSection />
      <BentoGrid />
    </main>
  );
}
