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
  title: {
    default: "BieneqMty | Bienestar Equino Ultra-Premium",
    template: "%s | BieneqMty",
  },
  description: "Clínica, Podología y Academia Digital de Excelencia para el caballo.",
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐎</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: "BieneqMty",
    description: "Bienestar Equino Ultra-Premium: Clínica, Podología y Academia.",
    siteName: "BieneqMty",
    locale: "es_MX",
    type: "website",
  },
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

