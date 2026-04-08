export interface ClinicTier {
  name: string;
  price: number;
  description: string;
  includes: string[];
}

export interface ClinicSyllabusItem {
  time?: string;
  title: string;
  description: string;
}

export interface Clinic {
  id: string;
  slug: string;
  name: string;
  date: string;
  fullDate: string;
  location: string;
  shortDescription: string;
  longDescription: string;
  featuredImage: string;
  gallery: string[];
  installations: string[];
  tiers: ClinicTier[];
  syllabus: ClinicSyllabusItem[];
  inclusions: string[];
  requirements: string[];
}

export const clinics: Clinic[] = [
  {
    id: "clinic-june-2025",
    slug: "clinica-barefoot-integral-junio",
    name: "Clínica Barefoot Integral",
    date: "Junio 2025",
    fullDate: "Fecha por confirmar - Junio 2025",
    location: "Sede Monterrey, N.L.",
    shortDescription: "Inmersión total en anatomía aplicada, balance biomecánico y recorte funcional avanzado.",
    longDescription: "Nuestra clínica insignia diseñada para transformar tu visión del caballo. Durante dos días intensivos, combinamos la teoría científica con la práctica real en pista, enfocándonos en el bienestar integral a través del sistema Barefoot.",
    featuredImage: "/images/home/wellness/tampico-02.jpg",
    gallery: [
      "/images/home/wellness/tampico-02.jpg",
      "/images/clinics/clinica-01-hd/01.png",
      "/images/clinics/clinica-01-hd/02.png"
    ],
    installations: [
      "/images/clinics/clinica-01-hd/03.png",
      "/images/clinics/clinica-01-hd/04.png"
    ],
    tiers: [
      {
        name: "Oyente",
        price: 4500,
        description: "Acceso total a la teoría y observación de prácticas.",
        includes: [
          "Manual digital Bieneq",
          "Coffe Break continuo",
          "Comida incluida (2 días)",
          "Constancia de participación"
        ]
      },
      {
        name: "Practicante",
        price: 8500,
        description: "Experiencia completa con práctica en caballos reales.",
        includes: [
          "Todo lo de Oyente",
          "Uso de herramientas Bieneq",
          "Práctica personalizada con expertos",
          "Kit de bienvenida Premium"
        ]
      }
    ],
    syllabus: [
      {
        title: "Anatomía y Biomecánica",
        description: "Estudio profundo de las estructuras internas y cómo el balance afecta el movimiento global."
      },
      {
        title: "Evaluación Crítica",
        description: "Protocolos de observación y diagnóstico para determinar el estado actual del casco."
      },
      {
        title: "Técnica de Recorte",
        description: "Demostración y práctica guiada de los 7 puntos clave del sistema Barefoot."
      },
      {
        title: "Casos de Patología",
        description: "Manejo de laminitis, navicular y otras condiciones comunes sin herraduras."
      }
    ],
    inclusions: [
      "Instalaciones techadas de primer nivel",
      "Material didáctico impreso",
      "Certificado con validez curricular",
      "Acceso a grupo de seguimiento post-clínica"
    ],
    requirements: [
      "Ganas de aprender y cuestionar lo tradicional",
      "Ropa cómoda para trabajo en campo",
      "Guantes de protección (para practicantes)"
    ]
  }
];

export function getClinicBySlug(slug: string): Clinic | undefined {
  return clinics.find(c => c.slug === slug);
}
