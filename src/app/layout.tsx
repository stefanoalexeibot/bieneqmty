import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProgressSidebar } from "@/components/layout/progress-sidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
      className={`${inter.variable} h-full antialiased scroll-smooth`}
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
