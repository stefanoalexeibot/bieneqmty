export interface ClinicTier {
  name: string;
  price: number;
  description: string;
  includes: string[];
}

export interface ClinicSyllabusItem {
  time?: string;
  activity: string;
  description: string;
}

export interface ClinicAddon {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: string;
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
  gallery: {
    theory: string[];
    practice: string[];
    installations: string[];
  };
  tiers: ClinicTier[];
  addons: ClinicAddon[];
  syllabus: ClinicSyllabusItem[];
  schedule: {
    day: string;
    items: ClinicSyllabusItem[];
  }[];
  inclusions: string[];
  requirements: string[];
  testimonials: {
    name: string;
    role: string;
    content: string;
    image: string;
  }[];
}

export const clinics: Clinic[] = [
  {
    id: "clinic-june-2025",
    slug: "clinica-barefoot-integral-junio",
    name: "Clínica Barefoot Integral",
    date: "Junio 2025",
    fullDate: "Fecha por confirmar - Junio 2025",
    location: "Sede Monterrey, N.L.",
    shortDescription: "Inmersión total en anatomía aplicada, balance biomecánico y recorte funcional avanzado. 🚀",
    longDescription: "Nuestra clínica insignia diseñada para transformar tu visión del caballo. Durante dos días intensivos, combinamos la teoría científica con la práctica real en pista, enfocándonos en el bienestar integral a través del sistema Barefoot.",
    featuredImage: "/images/home/wellness/tampico-02.jpg",
    gallery: {
      theory: [
        "/images/home/wellness/tampico-02.jpg",
        "/images/clinics/clinica-01-hd/01.png",
      ],
      practice: [
        "/images/clinics/clinica-01-hd/02.png",
        "/images/clinics/clinica-01-hd/03.png",
      ],
      installations: [
        "/images/clinics/clinica-01-hd/04.png",
        "/images/home/wellness/tampico-03.jpg",
      ]
    },
    tiers: [
      {
        name: "Oyente",
        price: 4500,
        description: "Acceso total a la teoría y observación de prácticas. 👁️",
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
        description: "Experiencia completa con práctica en caballos reales. 🛠️",
        includes: [
          "Todo lo de Oyente",
          "Uso de herramientas Bieneq",
          "Práctica personalizada con expertos",
          "Kit de bienvenida Premium"
        ]
      }
    ],
    addons: [
      {
        id: "airport-pickup",
        name: "Traslado Aeropuerto",
        price: 1000,
        description: "Servicio de transporte ida y vuelta ✈️",
        icon: "Plane"
      },
      {
        id: "premium-stay",
        name: "Estancia Premium",
        price: 1500,
        description: "Hospedaje de lujo por 2 noches 🏠",
        icon: "Bed"
      }
    ],
    syllabus: [
      {
        activity: "Anatomía y Biomecánica",
        description: "Estudio profundo de las estructuras internas y cómo el balance afecta el movimiento global."
      },
      {
        activity: "Evaluación Crítica",
        description: "Protocolos de observación y diagnóstico para determinar el estado actual del casco."
      }
    ],
    schedule: [
      {
        day: "Día 1: Teoría & Biomecánica",
        items: [
          { time: "10:00 AM", activity: "Bienvenida y Fundamentos", description: "Introducción al sistema Barefoot y anatomía básica." },
          { time: "01:00 PM", activity: "Lunch Break", description: "Espacio para networking y comida incluida." },
          { time: "02:00 PM", activity: "Taller Práctico", description: "Evaluación de aplomos y primeras prácticas con herramientas." },
          { time: "05:00 PM", activity: "Cierre de Jornada", description: "Q&A y reflexiones del primer día." }
        ]
      },
      {
        day: "Día 2: Inmersión Técnica",
        items: [
          { time: "10:00 AM", activity: "Revisión y Ajuste", description: "Análisis de casos reales y técnica de corte." },
          { time: "01:00 PM", activity: "Lunch Break", description: "Comida en las instalaciones." },
          { time: "02:00 PM", activity: "Práctica Intensiva", description: "Cada alumno trabaja bajo supervisión directa." },
          { time: "05:00 PM", activity: "Certificación", description: "Entrega de reconocimientos y convivencia final." }
        ]
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
    ],
    testimonials: [
      {
        name: "Alonso Alvarez",
        role: "Podólogo - Apaseo el Grande, GTO",
        content: "Certificado en Clínica de Barefoot 01. La técnica cambió mi perspectiva del bienestar equino y el balance real. ⭐⭐⭐⭐⭐",
        image: "/images/testimonials/alonso-alvarez.png"
      },
      {
        name: "Antonio Rodriguez",
        role: "Instructor - Parras, Coahuila",
        content: "Una experiencia transformadora. El curso intensivo me brindó las herramientas para entender la salud desde la base. ✨",
        image: "/images/testimonials/antonio-rodriguez.png"
      },
      {
        name: "Dante Torres",
        role: "Barefoot Pro - Toluca, EdoMex",
        content: "El nivel técnico de BieneqMty es superior. Recomendado para todo profesional del caballo que busque excelencia.",
        image: "/images/testimonials/dante-torres.png"
      },
      {
        name: "MVZ Ivan Huerta",
        role: "Médico Veterinario - Puebla, MX",
        content: "Como médico veterinario, la evidencia clínica de estos certificados es indispensable para nuestra práctica diaria. 🏆",
        image: "/images/testimonials/ivan-huerta.png"
      }
    ]
  }
];

export function getClinicBySlug(slug: string): Clinic | undefined {
  return clinics.find(c => c.slug === slug);
}
