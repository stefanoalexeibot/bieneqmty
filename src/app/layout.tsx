import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";

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
    <html lang="es" className={cn("dark font-sans antialiased", inter.variable, playfair.variable)}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

