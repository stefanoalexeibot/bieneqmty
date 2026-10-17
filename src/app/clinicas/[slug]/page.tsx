import { getClinicBySlug, clinics, upcomingClinic } from "@/lib/clinics";
import ClinicView from "./clinic-view";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return clinics.map((clinic) => ({
    slug: clinic.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);
  if (!clinic) return { title: "Clínica no encontrada" };

  return {
    title: `${clinic.name} — ${clinic.fullDate} | BieneqMty - Formación Equina`,
    description: `${clinic.fullDate}. ${clinic.shortDescription}`,
    openGraph: {
      title: `${clinic.name} — ${clinic.fullDate}`,
      description: clinic.shortDescription,
      images: [clinic.featuredImage],
    },
  };
}

export default async function ClinicPage({ params }: PageProps) {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);

  if (!clinic) {
    notFound();
  }

  if (clinic.completed) {
    return (
      <main className="min-h-screen bg-black px-6 pt-40 pb-24 text-white">
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="font-bold uppercase tracking-widest text-bieneq-green">Evento finalizado</p>
          <h1 className="text-4xl md:text-6xl font-bold">{clinic.name}</h1>
          <p className="text-xl text-white/60">{clinic.fullDate} · {clinic.location}</p>
          <p className="text-lg">Esta edición ya concluyó. Nuestra próxima clínica será el {upcomingClinic.fullDate}.</p>
          <Link href={`/clinicas/${upcomingClinic.slug}`} className="inline-block rounded-2xl bg-bieneq-green px-8 py-4 font-bold text-black">
            Ver clínica de octubre e inscribirme
          </Link>
        </div>
      </main>
    );
  }

  return <ClinicView clinic={clinic} />;
}
