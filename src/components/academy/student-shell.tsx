import Link from "next/link";
import { BookOpen, Compass, GraduationCap, LifeBuoy, ShieldCheck } from "lucide-react";

const links = [
  { href: "/academia/mi-aprendizaje", label: "Mi aprendizaje", icon: GraduationCap },
  { href: "/academia/cursos", label: "Explorar cursos", icon: Compass },
];

export function StudentShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f4ed] text-[#26382c]">
      <header className="sticky top-0 z-40 border-b border-[#e2e5dc] bg-[#f8f7f1]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1480px] items-center justify-between px-4 sm:px-7 lg:px-10">
          <Link href="/academia" className="flex items-center gap-3" aria-label="Academia BieneqMty">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#254534] text-white"><BookOpen className="h-5 w-5" /></span>
            <span><span className="block font-heading text-lg leading-none text-[#26382c]">Bieneq<span className="text-[#718866]">Academy</span></span><span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#899185]">Aula de aprendizaje</span></span>
          </Link>
          <div className="hidden items-center gap-2 rounded-full border border-[#e2e5dc] bg-white/70 px-4 py-2 text-xs text-[#778176] sm:flex"><ShieldCheck className="h-4 w-4 text-[#718866]" />Espacio de alumnos</div>
          <Link href="/academia" className="text-xs font-semibold text-[#61745a] transition hover:text-[#254534]">Volver al Academy</Link>
        </div>
      </header>
      <div className="mx-auto grid max-w-[1480px] lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="border-b border-[#e2e5dc] px-4 py-3 lg:min-h-[calc(100vh-72px)] lg:border-b-0 lg:border-r lg:px-5 lg:py-8">
          <p className="mb-3 hidden px-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9aa194] lg:block">Espacio personal</p>
          <nav aria-label="Navegación de alumno" className="flex gap-2 lg:flex-col">{links.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className="inline-flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold text-[#5f6e61] transition hover:bg-white hover:text-[#254534] sm:text-sm"><Icon className="h-4 w-4 text-[#718866]" />{label}</Link>)}</nav>
          <div className="mt-8 hidden rounded-2xl border border-[#e1e5dc] bg-white/65 p-4 lg:block"><p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#718866]">¿Necesitas ayuda?</p><p className="mt-2 text-xs leading-5 text-[#758174]">Estamos preparando los canales de acompañamiento para alumnos.</p><span className="mt-3 inline-flex items-center gap-2 text-[10px] font-semibold text-[#5b7054]"><LifeBuoy className="h-3.5 w-3.5" />Soporte Academy</span></div>
        </aside>
        <div className="min-w-0 px-4 py-7 sm:px-7 sm:py-9 lg:px-10 lg:py-10">{children}</div>
      </div>
    </div>
  );
}
