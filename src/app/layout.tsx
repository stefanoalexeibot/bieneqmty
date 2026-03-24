import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { ProgressSidebar } from "@/components/layout/progress-sidebar";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pie Descalzo | Curso Barefoot",
  description: "El Arte de Cuidar el Casco Natural del Caballo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${dmSans.variable} dark h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex font-sans">
        <ProgressSidebar />
        <main className="flex-1 min-w-0 bg-background">
          {children}
        </main>
      </body>
    </html>
  );
}
