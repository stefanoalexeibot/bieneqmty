import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { ProgressSidebar } from "@/components/layout/progress-sidebar";
import { SpotlightCursor } from "@/components/ui/spotlight-cursor";
import { CourseProvider } from "@/hooks/use-course";

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
      <body className="min-h-screen font-sans overflow-hidden bg-black">
        <CourseProvider>
          <SpotlightCursor />
          {/* ProgressSidebar moved to CoursePlayer as a drawer */}
          <main className="w-full h-full relative overflow-y-auto overflow-x-hidden">
            {children}
          </main>
        </CourseProvider>
      </body>
    </html>
  );
}
