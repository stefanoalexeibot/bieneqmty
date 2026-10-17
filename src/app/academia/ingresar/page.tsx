import type { Metadata } from "next";
import { AuthPanel } from "@/components/academy/auth-panel";
import { getAcademyCourse } from "@/lib/academy";

export const metadata: Metadata = { title: "Iniciar sesión" };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ curso?: string }> }) {
  const { curso } = await searchParams;
  const selectedCourse = curso ? getAcademyCourse(curso) : undefined;
  return <AuthPanel mode="login" course={selectedCourse?.status === "available" ? selectedCourse : undefined} />;
}
