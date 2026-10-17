import type { Metadata } from "next";
import { AuthPanel } from "@/components/academy/auth-panel";
import { getAcademyCourse } from "@/lib/academy";

export const metadata: Metadata = { title: "Crear cuenta de alumno" };

export default async function SignupPage({ searchParams }: { searchParams: Promise<{ curso?: string }> }) {
  const { curso } = await searchParams;
  const selectedCourse = curso ? getAcademyCourse(curso) : undefined;
  return <AuthPanel mode="signup" course={selectedCourse?.status === "available" ? selectedCourse : undefined} />;
}
