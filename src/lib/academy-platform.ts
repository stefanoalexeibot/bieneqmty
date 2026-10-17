/** Domain types for the student platform. Persistence and provider clients are intentionally separate. */
export type EnrollmentStatus = "pending_payment" | "active" | "refunded" | "revoked";

export type LessonProgressStatus = "not_started" | "in_progress" | "completed";

export type StudentProfile = {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
};

export type AcademyEnrollment = {
  id: string;
  studentId: string;
  courseSlug: string;
  status: EnrollmentStatus;
  stripeCheckoutSessionId?: string;
  enrolledAt?: string;
  accessEndsAt?: string;
};

export type AcademyLessonProgress = {
  studentId: string;
  courseSlug: string;
  moduleSlug: string;
  lessonId: string;
  status: LessonProgressStatus;
  watchedSeconds: number;
  completedAt?: string;
  updatedAt: string;
};

export type AcademyVideoAsset = {
  lessonId: string;
  provider: "mux";
  playbackId: string;
  policy: "signed";
};

/** Provider readiness is explicit so preview screens never imply a live integration. */
export const academyIntegrations = {
  authentication: "not_configured",
  payments: "not_configured",
  video: "not_configured",
} as const;
