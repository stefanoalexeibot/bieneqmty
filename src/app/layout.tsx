import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { LenisProvider } from "@/components/layout/lenis-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { DynamicBackground } from "@/components/ui/dynamic-background";
import { Noise } from "@/components/ui/noise";
import { Footer } from "@/components/layout/footer";

const inter = Inter({subsets:['latin'], variable:'--font-sans'});
const playfair = Playfair_Display({subsets:['latin'], variable:'--font-heading'});

export const metadata: Metadata = {
  title: "BieneqMty | Bienestar Equino Ultra-Premium",
  description: "Clínica, Podología y Academia Digital de Excelencia para el caballo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("dark font-sans antialiased cursor-none", inter.variable, playfair.variable)}>
      <body className="cursor-none">
        <DynamicBackground />
        <Noise />
        <CustomCursor />
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

