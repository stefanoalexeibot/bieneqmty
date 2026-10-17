import { StudentShell } from "@/components/academy/student-shell";

export default function LessonLayout({ children }: { children: React.ReactNode }) {
  return <StudentShell>{children}</StudentShell>;
}
