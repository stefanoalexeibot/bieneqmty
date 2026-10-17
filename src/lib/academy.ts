export type AcademyLesson = {
  id: string;
  title: string;
  duration: string;
  format: string;
  bonus?: boolean;
};

export type AcademyModule = {
  slug: string;
  title: string;
  summary: string;
  lessons: AcademyLesson[];
  bonus?: boolean;
};

export type AcademyCourse = {
  slug: string;
  title: string;
  shortTitle: string;
  level: string;
  duration: string;
  status: "available" | "upcoming";
  description: string;
  audience: string;
  prerequisites: string;
  outcomes: string[];
  modules: AcademyModule[];
};

export const academyCourses: AcademyCourse[] = [
  {
    slug: "anatomia-del-casco",
    title: "Anatomía y comprensión del casco equino",
    shortTitle: "Anatomía del casco",
    level: "Introductorio",
    duration: "2 a 4 horas",
    status: "available",
    description:
      "Un curso visual para reconocer las estructuras del casco y aprender a describir lo que observas, sin sustituir la valoración de un profesional.",
    audience: "Propietarios, cuidadores y personas que comienzan a aprender sobre el casco equino.",
    prerequisites: "No se requieren conocimientos previos.",
    outcomes: [
      "Identificar las principales estructuras externas del casco.",
      "Relacionar el casco con las estructuras internas y el movimiento.",
      "Registrar observaciones de forma ordenada y descriptiva.",
      "Reconocer cuándo una preocupación debe consultarse con un profesional.",
    ],
    modules: [
      {
        slug: "bienvenida-y-observacion",
        title: "Bienvenida y observación segura",
        summary: "Objetivos del curso, límites del aprendizaje y una forma ordenada de comenzar a observar.",
        lessons: [
          { id: "A01", title: "Bienvenida, objetivos y límites", duration: "5 a 7 min", format: "Explicación a cámara" },
          { id: "A06", title: "Cómo observar y documentar un casco", duration: "8 a 10 min", format: "Demostración guiada" },
        ],
      },
      {
        slug: "estructuras-visibles",
        title: "Estructuras visibles del casco",
        summary: "Reconocimiento de las estructuras desde el exterior y la vista inferior.",
        lessons: [
          { id: "A02", title: "Anatomía externa", duration: "8 a 10 min", format: "Modelo y vistas de detalle" },
          { id: "A03", title: "Vista inferior del casco", duration: "8 a 10 min", format: "Observación práctica" },
        ],
      },
      {
        slug: "estructuras-y-movimiento",
        title: "Estructuras internas y movimiento",
        summary: "Relación general entre las estructuras del miembro, el casco y el apoyo.",
        lessons: [
          { id: "A04", title: "Estructuras internas relacionadas con el casco", duration: "8 a 10 min", format: "Esquema y explicación" },
          { id: "A05", title: "Casco, apoyo y movimiento", duration: "8 a 10 min", format: "Explicación y tomas de movimiento" },
        ],
      },
      {
        slug: "repaso-y-consulta",
        title: "Repaso y consulta profesional",
        summary: "Práctica de observación y reconocimiento de situaciones que requieren orientación profesional.",
        lessons: [
          { id: "A07", title: "Cuándo consultar a un profesional", duration: "6 a 8 min", format: "Explicación educativa" },
          { id: "A08", title: "Repaso visual", duration: "5 a 8 min", format: "Caso y preguntas" },
        ],
      },
    ],
  },
  {
    slug: "barefoot-integral",
    title: "Barefoot Integral",
    shortTitle: "Barefoot Integral",
    level: "Programa central",
    duration: "8 a 12 horas",
    status: "available",
    description:
      "Un programa educativo sobre observación del casco, movimiento, entorno, alimentación básica y colaboración con profesionales.",
    audience: "Propietarios y cuidadores que desean comprender el cuidado integral del caballo y preparar mejores preguntas para su equipo profesional.",
    prerequisites: "No se requieren conocimientos previos. Se recomienda Anatomía y comprensión del casco equino.",
    outcomes: [
      "Describir observaciones del casco y del movimiento sin emitir un diagnóstico.",
      "Identificar aspectos del entorno que conviene revisar para el bienestar del caballo.",
      "Reunir información básica sobre forraje, agua y manejo para conversar con profesionales.",
      "Comprender los objetivos y límites de una demostración de trabajo profesional.",
      "Organizar un registro de seguimiento y reconocer cuándo pedir ayuda.",
    ],
    modules: [
      {
        slug: "fundamentos-y-necesidades",
        title: "Fundamentos y necesidades básicas",
        summary: "Comportamiento, percepción, compañía, descanso y movimiento como contexto de observación.",
        lessons: [
          { id: "B01", title: "Qué significa el enfoque integral", duration: "6 a 8 min", format: "Explicación a cámara" },
          { id: "B02", title: "Comportamiento y percepción", duration: "8 a 10 min", format: "Explicación y observación" },
          { id: "B03", title: "Necesidades básicas", duration: "8 a 10 min", format: "Explicación y recorrido" },
          { id: "X01", title: "Bonus: necesidades básicas del caballo", duration: "7 a 9 min", format: "Recurso complementario", bonus: true },
        ],
      },
      {
        slug: "observacion-del-caballo",
        title: "Observación del casco y del movimiento",
        summary: "Registro descriptivo, contexto de observación y preguntas útiles para una consulta.",
        lessons: [
          { id: "B04", title: "Observar al caballo en movimiento", duration: "8 a 12 min", format: "Práctica guiada" },
          { id: "B09", title: "Qué observa el profesional antes de trabajar", duration: "8 a 10 min", format: "Demostración comentada" },
          { id: "B11", title: "Revisión posterior y preguntas", duration: "8 a 12 min", format: "Conversación guiada" },
        ],
      },
      {
        slug: "entorno-y-manejo",
        title: "Entorno y manejo",
        summary: "Una revisión del espacio, los recursos y las oportunidades de movimiento disponibles.",
        lessons: [
          { id: "B05", title: "Entorno y oportunidades de movimiento", duration: "8 a 12 min", format: "Recorrido narrado" },
          { id: "X02", title: "Bonus: manejo y entorno", duration: "8 a 10 min", format: "Recurso complementario", bonus: true },
        ],
      },
      {
        slug: "alimentacion-basica",
        title: "Alimentación básica para una conversación informada",
        summary: "Qué observar y qué datos reunir sobre agua y forraje, sin prescribir dietas individuales.",
        lessons: [
          { id: "B06", title: "Alimentación: qué observar y preguntar", duration: "8 a 10 min", format: "Explicación a cámara" },
          { id: "B07", title: "Agua, forraje y hábitos", duration: "6 a 8 min", format: "Explicación y ejemplos" },
          { id: "X03", title: "Bonus: forraje, agua y observación", duration: "8 a 10 min", format: "Recurso complementario", bonus: true },
          { id: "X04", title: "Bonus: datos que reunir antes de un cambio", duration: "5 a 7 min", format: "Ficha guiada", bonus: true },
        ],
      },
      {
        slug: "seguridad-y-demostracion",
        title: "Seguridad y demostración profesional",
        summary: "Herramientas, condiciones de seguridad y observación del razonamiento profesional.",
        lessons: [
          { id: "B08", title: "Herramientas y seguridad", duration: "6 a 8 min", format: "Presentación de herramientas" },
          { id: "B10", title: "Demostración profesional completa", duration: "Toma continua", format: "Demostración real" },
        ],
      },
      {
        slug: "transicion-alertas-y-seguimiento",
        title: "Transición, alertas y seguimiento",
        summary: "Registrar cambios, reconocer límites y preparar una consulta profesional.",
        lessons: [
          { id: "B12", title: "Transición, comodidad y protección", duration: "8 a 10 min", format: "Explicación educativa" },
          { id: "B13", title: "Señales de alerta y consulta", duration: "6 a 8 min", format: "Explicación educativa" },
          { id: "B14", title: "Plan de observación y seguimiento", duration: "8 a 10 min", format: "Ejercicio aplicado" },
        ],
      },
    ],
  },
  {
    slug: "barefoot-integral-pro",
    title: "Barefoot Integral Pro",
    shortTitle: "Barefoot Integral Pro",
    level: "Avanzado con mentoría",
    duration: "8 semanas",
    status: "upcoming",
    description:
      "Programa avanzado en preparación, con estudio de casos, sesiones de acompañamiento y trabajo progresivo.",
    audience: "Personas con experiencia relevante que buscan profundizar mediante casos y acompañamiento.",
    prerequisites: "Requisitos de admisión y experiencia previa por definir antes de abrir inscripciones.",
    outcomes: [
      "Documentar y comunicar observaciones de manera estructurada.",
      "Analizar casos con atención al contexto y a los límites de la información disponible.",
      "Preparar preguntas y seguimiento en colaboración con profesionales competentes.",
    ],
    modules: [
      { slug: "semana-1", title: "Semana 1: alcance y caso inicial", summary: "Presentación, expectativas y línea base.", lessons: [{ id: "P01", title: "Presentación del caso", duration: "Por definir", format: "Mentoría y trabajo guiado" }] },
      { slug: "semana-2", title: "Semana 2: anatomía aplicada", summary: "Relación entre estructuras y observaciones visuales.", lessons: [{ id: "P02", title: "Correlación visual", duration: "Por definir", format: "Caso guiado" }] },
      { slug: "semana-3", title: "Semana 3: movimiento", summary: "Revisión y documentación de movimiento.", lessons: [{ id: "P03", title: "Revisión de video", duration: "Por definir", format: "Sesión de análisis" }] },
      { slug: "semana-4", title: "Semana 4: entorno", summary: "Auditoría contextual del manejo.", lessons: [{ id: "P04", title: "Auditoría del entorno", duration: "Por definir", format: "Caso aplicado" }] },
      { slug: "semana-5", title: "Semana 5: alimentación y consulta", summary: "Organización de datos para conversar con profesionales.", lessons: [{ id: "P05", title: "Preparar una consulta", duration: "Por definir", format: "Caso aplicado" }] },
      { slug: "semana-6", title: "Semana 6: decisiones profesionales", summary: "Observación de decisiones y límites de la demostración.", lessons: [{ id: "P06", title: "Lectura de una demostración", duration: "Por definir", format: "Revisión guiada" }] },
      { slug: "semana-7", title: "Semana 7: seguimiento", summary: "Comparación de registros y comunicación de cambios.", lessons: [{ id: "P07", title: "Revisión longitudinal", duration: "Por definir", format: "Discusión de caso" }] },
      { slug: "semana-8", title: "Semana 8: presentación final", summary: "Síntesis del caso y próximos pasos.", lessons: [{ id: "P08", title: "Presentación y cierre", duration: "Por definir", format: "Mentoría" }] },
    ],
  },
];

export function getAcademyCourse(slug: string) {
  return academyCourses.find((course) => course.slug === slug);
}


