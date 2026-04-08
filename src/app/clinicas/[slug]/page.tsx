import { getClinicBySlug, clinics } from "@/lib/clinics";
import ClinicView from "./clinic-view";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  return clinics.map((clinic) => ({
    slug: clinic.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const clinic = getClinicBySlug(params.slug);
  if (!clinic) return { title: "Clínica no encontrada" };

  return {
    title: `${clinic.name} | BieneqMty - Formación Equina`,
    description: clinic.shortDescription,
    openGraph: {
      title: clinic.name,
      description: clinic.shortDescription,
      images: [clinic.featuredImage],
    },
  };
}

export default function ClinicPage({ params }: { params: { slug: string } }) {
  const clinic = getClinicBySlug(params.slug);

  if (!clinic) {
    notFound();
  }

  return <ClinicView clinic={clinic} />;
}
