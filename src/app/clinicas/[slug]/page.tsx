import { getClinicBySlug, clinics } from "@/lib/clinics";
import ClinicView from "./clinic-view";
import { notFound } from "next/navigation";
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
    title: `${clinic.name} | BieneqMty - Formación Equina`,
    description: clinic.shortDescription,
    openGraph: {
      title: clinic.name,
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

  return <ClinicView clinic={clinic} />;
}
