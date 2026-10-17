"use client";

import { usePathname } from "next/navigation";
import { CartDrawer } from "@/components/layout/cart-drawer";
import { Footer } from "@/components/layout/footer";
import { LenisProvider } from "@/components/layout/lenis-provider";
import { Navbar } from "@/components/layout/navbar";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { DynamicBackground } from "@/components/ui/dynamic-background";
import { Noise } from "@/components/ui/noise";

const focusedAcademyPrefixes = [
  "/academia/registro",
  "/academia/ingresar",
  "/academia/checkout",
  "/academia/mi-aprendizaje",
  "/academia/aula",
  "/academia/proyector",
];

export function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const focusedAcademy = focusedAcademyPrefixes.some((prefix) => pathname.startsWith(prefix));

  return (
    <LenisProvider>
      {!focusedAcademy ? (
        <>
          <DynamicBackground />
          <Noise />
          <CustomCursor />
          <Navbar />
          <CartDrawer />
        </>
      ) : null}
      {children}
      {!focusedAcademy ? <Footer /> : null}
    </LenisProvider>
  );
}
