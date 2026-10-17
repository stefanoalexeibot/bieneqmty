"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
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

function AcademyNavigation() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#dfe4da] bg-[#f5f4ed] text-[#26382c]">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/academia" className="flex items-baseline gap-2" aria-label="BieneqMty Academy, inicio">
          <span className="text-xs font-bold tracking-[0.16em]">BIENEQMTY</span>
          <span className="text-[10px] font-medium tracking-[0.12em] text-[#718866]">ACADEMY</span>
        </Link>
        <nav aria-label="Navegación de Academia" className="flex items-center gap-5 text-xs font-semibold">
          <Link href="/academia/cursos" className="text-[#536653] transition-colors hover:text-[#254534]">Cursos</Link>
          <Link href="/" className="rounded-full border border-[#cdd6c8] px-4 py-2 text-[#254534] transition-colors hover:bg-white">Salir al sitio</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAcademy = pathname.startsWith("/academia");
  const focusedAcademy = focusedAcademyPrefixes.some((prefix) => pathname.startsWith(prefix));

  return (
    <LenisProvider>
      {!focusedAcademy ? (
        <>
          <DynamicBackground />
          <Noise />
          {!isAcademy ? (
            <>
              <CustomCursor />
              <Navbar />
            </>
          ) : null}
          <CartDrawer />
        </>
      ) : null}
      {isAcademy ? <AcademyNavigation /> : null}
      {children}
      {!focusedAcademy ? <Footer /> : null}
    </LenisProvider>
  );
}
