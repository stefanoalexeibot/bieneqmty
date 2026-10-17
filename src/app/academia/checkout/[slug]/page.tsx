import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, CreditCard, LockKeyhole, ShieldCheck, UserRound } from "lucide-react";
import { getAcademyCourse } from "@/lib/academy";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: `Inscripción · ${getAcademyCourse(slug)?.shortTitle ?? "Academia"}` };
}

export default async function AcademyCheckoutPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getAcademyCourse(slug);
  if (!course || course.status !== "available") notFound();
  const accountUrl = `/academia/registro?curso=${course.slug}`;
  return (
    <main className="min-h-screen bg-[#f5f4ed] px-4 py-6 text-[#26382c] sm:px-7 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between"><Link href="/academia" className="font-heading text-lg">Bieneq<span className="text-[#718866]">Academy</span></Link><span className="inline-flex items-center gap-2 rounded-full border border-[#dfe4da] bg-white/70 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#687765]"><LockKeyhole className="h-3.5 w-3.5 text-[#718866]" />Inscripción segura</span></div>
        <Link href={`/academia/cursos/${course.slug}`} className="mb-7 inline-flex items-center gap-2 text-xs font-medium text-[#728070] hover:text-[#254534]"><ArrowLeft className="h-3.5 w-3.5" />Volver al programa</Link>
        <div className="mb-8 grid grid-cols-3 overflow-hidden rounded-2xl border border-[#e0e4da] bg-white/70">{[{ icon: UserRound, title: "Cuenta" }, { icon: Check, title: "Revisión" }, { icon: CreditCard, title: "Pago seguro" }].map(({ icon: Icon, title }, index) => <div key={title} className={`flex items-center justify-center gap-2 border-r border-[#e9ece5] px-2 py-4 last:border-r-0 sm:justify-start sm:px-6 ${index === 0 ? "text-[#526c4c]" : "text-[#a2a99f]"}`}><span className={`flex h-7 w-7 items-center justify-center rounded-full ${index === 0 ? "bg-[#e8ece3]" : "bg-[#f0f2ed]"}`}><Icon className="h-3.5 w-3.5" /></span><span className="text-[9px] font-semibold sm:text-xs">0{index + 1} · {title}</span></div>)}</div>
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <section className="rounded-[1.75rem] border border-[#e2e5dc] bg-white p-6 shadow-[0_15px_45px_rgba(36,57,42,0.055)] sm:p-9"><p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#718866]">Tu siguiente paso</p><h1 className="mt-2 font-heading text-3xl text-[#26382c] sm:text-4xl">Prepara tu acceso.</h1><p className="mt-3 max-w-xl text-sm leading-6 text-[#758174]">Primero crearás tu cuenta de alumno. Después podrás revisar los datos del programa y continuar al pago.</p>
            <div className="mt-7 rounded-2xl border border-[#e6e9e2] bg-[#f8f9f6] p-5"><div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8ece3] text-[#5c7555]"><UserRound className="h-5 w-5" /></span><div><h2 className="font-heading text-xl text-[#354a39]">Crea tu cuenta de alumno</h2><p className="mt-1 text-xs leading-5 text-[#788276]">Tu cuenta será el lugar para consultar el programa, ver lecciones y guardar el avance.</p><Link href={accountUrl} className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#254534] px-5 py-3 text-[10px] font-semibold text-white hover:bg-[#183324]">Crear cuenta y continuar<ArrowRight className="h-3.5 w-3.5" /></Link></div></div></div>
            <p className="mt-5 text-center text-xs text-[#828b80]">¿Ya tienes cuenta? <Link href={`/academia/ingresar?curso=${course.slug}`} className="font-semibold text-[#526c4c] hover:text-[#254534]">Inicia sesión</Link> para continuar.</p>
            <div className="mt-7 flex gap-3 rounded-xl border border-[#eadfbe] bg-[#faf6e9] p-3 text-[10px] leading-5 text-[#7e7151]"><LockKeyhole className="mt-0.5 h-3.5 w-3.5 shrink-0" /><p>Prototipo de inscripción. El formulario de cuenta y el pago aún no están activos; no se guardarán datos ni se realizará ningún cobro.</p></div>
          </section>
          <aside className="h-fit rounded-[1.75rem] bg-[#254534] p-6 text-white sm:p-7"><p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#c6d7bd]">Resumen de inscripción</p><h2 className="mt-3 font-heading text-2xl">{course.shortTitle}</h2><p className="mt-2 text-xs leading-5 text-white/70">{course.description}</p><div className="my-6 border-t border-white/15" /><div className="space-y-3 text-xs text-white/80"><p className="flex justify-between gap-3"><span>Duración estimada</span><span>{course.duration}</span></p><p className="flex justify-between gap-3"><span>Contenido</span><span>{course.modules.length} módulos</span></p><p className="flex justify-between gap-3"><span>Modalidad y precio</span><span className="text-[#d3ddc9]">Por definir</span></p></div><div className="my-6 border-t border-white/15" /><div className="flex items-center justify-between gap-3"><span className="text-xs text-white/70">Total</span><span className="font-heading text-xl">Por definir</span></div><div className="mt-6 flex gap-2 text-[9px] leading-4 text-white/55"><ShieldCheck className="h-4 w-4 shrink-0 text-[#c6d7bd]" />El cobro se procesará con Stripe Checkout una vez configurada la cuenta comercial.</div></aside>
        </div>
        <p className="mt-6 text-center text-[9px] leading-5 text-[#929a8f]">Revisaremos los términos de compra, la política de reembolso y el aviso de privacidad antes de abrir inscripciones.</p>
      </div>
    </main>
  );
}
