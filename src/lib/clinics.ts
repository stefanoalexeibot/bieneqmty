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
  spots: {
    total: number;
    left: number;
  };
  instructor: {
    name: string;
    role: string;
    bio: string;
    image: string;
    credentials: string[];
  };
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
    spots: {
      total: 12,
      left: 4
    },
    instructor: {
      name: "José Manuel Alvarez",
      role: "Fundador & Especialista Barefoot",
      bio: "Con más de 10 años de experiencia en la rehabilitación podal equina, José Manuel ha desarrollado una metodología única que fusiona la ciencia anatómica con el respeto biológico del caballo.",
      image: "/images/founder/profile.jpg",
      credentials: ["Certificado IPPELP", "Especialista en Biomecánica", "100+ Casos de Éxito"]
    },
    gallery: {
      theory: [
        "/images/clinics/junio-2025/TEORICO/CLASE- CL01 2.png",
        "/images/clinics/junio-2025/TEORICO/DSC04902.JPG",
        "/images/clinics/junio-2025/TEORICO/DSC04906.JPG",
        "/images/clinics/junio-2025/TEORICO/TEORICO2.jpg"
      ],
      practice: [
        "/images/clinics/junio-2025/PRACTICO/DSC04901.JPG",
        "/images/clinics/junio-2025/PRACTICO/DSC04938.JPG",
        "/images/clinics/junio-2025/PRACTICO/PRACTICA2.jpg",
        "/images/clinics/junio-2025/PRACTICO/PRACTICA3.jpg",
        "/images/clinics/junio-2025/PRACTICO/PRACTICA4.jpg",
        "/images/clinics/junio-2025/PRACTICO/PRACTICA5.jpg"
      ],
      installations: [
        "/images/clinics/junio-2025/INSTALACIONES/INSTALACIONES EXTERIOR.jpeg",
        "/images/clinics/junio-2025/INSTALACIONES/INSTEXT2.jpeg",
        "/images/clinics/junio-2025/INSTALACIONES/INSTALACIONES EXT 3.jpeg",
        "/images/clinics/junio-2025/INSTALACIONES/INSTALACIONES EXT 4.jpeg",
        "/images/clinics/junio-2025/INSTALACIONES/INSTALACIONES EXT 5.jpeg",
        "/images/clinics/junio-2025/INSTALACIONES/INSTALACIONES EXT 6.jpeg",
        "/images/clinics/junio-2025/INSTALACIONES/INSTALACIONES EXT 7.jpeg",
        "/images/clinics/junio-2025/INSTALACIONES/INSTALACIONES EXT 8.jpeg",
        "/images/clinics/junio-2025/INSTALACIONES/INSTALACIONES EXT 9.jpeg",
        "/images/clinics/junio-2025/INSTALACIONES/INSTALACIONES EXT 10.jpeg",
        "/images/clinics/junio-2025/INSTALACIONES/INSTALACIONES EXT 11.jpeg",
        "/images/clinics/junio-2025/INSTALACIONES/ESTUDIOTEORIA1.jpeg",
        "/images/clinics/junio-2025/INSTALACIONES/ESTUDIOTEORIA2.jpeg",
        "/images/clinics/junio-2025/INSTALACIONES/RECAMARA1.jpg",
        "/images/clinics/junio-2025/INSTALACIONES/RECAMARA2.jpg",
        "/images/clinics/junio-2025/INSTALACIONES/RECONOCIMIENTOS1.jpeg",
        "/images/clinics/junio-2025/INSTALACIONES/RECONOCIMIENTOS2.jpeg",
        "/images/clinics/junio-2025/INSTALACIONES/WhatsApp Image 2026-04-13 at 4.33.24 PM (1).jpeg"
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
