export interface ClinicTier {
  name: string;
  mode?: "online" | "presencial";
  tagline?: string;
  highlighted?: boolean;
  limitations?: string;
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
  startsAt: string;
  completed?: boolean;
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
  faqs: {
    question: string;
    answer: string;
  }[];
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

const pastClinics: Clinic[] = [
  {
    id: "clinic-august-2026",
    slug: "clinica-barefoot-integral-agosto",
    name: "Clínica Barefoot Integral",
    date: "15 y 16 de Agosto",
    fullDate: "15 y 16 de Agosto, 2026",
    startsAt: "2026-08-15T10:00:00-06:00",
    completed: true,
    location: "Sede Monterrey, N.L.",
    shortDescription:
      "Inmersión total en anatomía aplicada, balance biomecánico y recorte funcional avanzado. 🚀",
    longDescription:
      "Nuestra clínica insignia diseñada para transformar tu visión del caballo. Durante dos días intensivos, combinamos la teoría científica con la práctica real en pista, enfocándonos en el bienestar integral a través del sistema Barefoot.",
    featuredImage: "/images/home/wellness/tampico-02.jpg",
    faqs: [
      {
        question: "¿Necesito llevar mis propias herramientas?",
        answer:
          "No es necesario. Bieneq te proporciona un kit profesional completo durante la clínica. Sin embargo, si ya tienes las tuyas, puedes traerlas para recibir asesoría sobre su mantenimiento y uso correcto.",
      },
      {
        question: "¿Qué nivel de experiencia se requiere?",
        answer:
          "Nuestra metodología está diseñada para ser absorbida desde cero. Tanto principiantes como podólogos experimentados encontrarán valor, ya que nos enfocamos en fundamentos biológicos que suelen omitirse en la formación tradicional.",
      },
      {
        question: "¿Incluye hospedaje y alimentación?",
        answer:
          "La alimentación (Lunch Premium y Coffee Break) está incluida ambos días. Para el hospedaje, contamos con convenios en hoteles cercanos y opciones de estancia premium dentro de nuestras instalaciones.",
      },
      {
        question: "¿Se entrega algún comprobante oficial?",
        answer:
          "Sí, al finalizar se entrega un certificado oficial de participación con validez curricular en la metodología BieneqMty, avalando las horas de práctica y teoría cursadas.",
      },
    ],
    spots: {
      total: 12,
      left: 5,
    },
    instructor: {
      name: "José Manuel Luna",
      role: "Fundador & Especialista Barefoot",
      bio: "Con más de 10 años de experiencia en la rehabilitación podal equina, José Manuel ha desarrollado una metodología única que fusiona la ciencia anatómica con el respeto biológico del caballo.",
      image: "/images/founder/profile.jpg",
      credentials: [
        "Certificado IPPELP",
        "Especialista en Biomecánica",
        "100+ Casos de Éxito",
      ],
    },
    gallery: {
      theory: [
        "/images/clinics/junio-2025/TEORICO/CLASE- CL01 2.png",
        "/images/clinics/junio-2025/TEORICO/DSC04902.JPG",
        "/images/clinics/junio-2025/TEORICO/DSC04906.JPG",
        "/images/clinics/junio-2025/TEORICO/TEORICO2.jpg",
      ],
      practice: [
        "/images/clinics/junio-2025/PRACTICO/DSC04901.JPG",
        "/images/clinics/junio-2025/PRACTICO/DSC04938.JPG",
        "/images/clinics/junio-2025/PRACTICO/PRACTICA2.jpg",
        "/images/clinics/junio-2025/PRACTICO/PRACTICA3.jpg",
        "/images/clinics/junio-2025/PRACTICO/PRACTICA4.jpg",
        "/images/clinics/junio-2025/PRACTICO/PRACTICA5.jpg",
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
        "/images/clinics/junio-2025/INSTALACIONES/WhatsApp Image 2026-04-13 at 4.33.24 PM (1).jpeg",
      ],
    },
    tiers: [
      {
        name: "Online",
        price: 3500,
        description:
          "Transmisión en vivo completa de la teoría y grabaciones. 💻",
        includes: [
          "Transmisión en vivo de clases teóricas",
          "Acceso a grabaciones por 30 días",
          "Manual digital Bieneq",
          "Constancia de participación digital",
        ],
      },
      {
        name: "Oyente",
        price: 4500,
        description: "Acceso total a la teoría y observación de prácticas. 👁️",
        includes: [
          "Manual digital Bieneq",
          "Coffe Break continuo",
          "Comida incluida (2 días)",
          "Constancia de participación",
        ],
      },
      {
        name: "Practicante",
        price: 8500,
        description: "Experiencia completa con práctica en caballos reales. 🛠️",
        includes: [
          "Todo lo de Oyente",
          "Uso de herramientas Bieneq",
          "Práctica personalizada con expertos",
          "Kit de bienvenida Premium",
        ],
      },
    ],
    addons: [
      {
        id: "airport-pickup",
        name: "Traslado Aeropuerto",
        price: 1000,
        description: "Servicio de transporte ida y vuelta ✈️",
        icon: "Plane",
      },
      {
        id: "premium-stay",
        name: "Estancia Premium",
        price: 1500,
        description: "Hospedaje de lujo por 2 noches 🏠",
        icon: "Bed",
      },
    ],
    syllabus: [
      {
        activity: "Anatomía y Biomecánica",
        description:
          "Estudio profundo de las estructuras internas y cómo el balance afecta el movimiento global.",
      },
      {
        activity: "Evaluación Crítica",
        description:
          "Protocolos de observación y diagnóstico para determinar el estado actual del casco.",
      },
    ],
    schedule: [
      {
        day: "Día 1: Teoría & Biomecánica",
        items: [
          {
            time: "10:00 AM",
            activity: "Bienvenida y Fundamentos",
            description: "Introducción al sistema Barefoot y anatomía básica.",
          },
          {
            time: "01:00 PM",
            activity: "Lunch Break",
            description: "Espacio para networking y comida incluida.",
          },
          {
            time: "02:00 PM",
            activity: "Taller Práctico",
            description:
              "Evaluación de aplomos y primeras prácticas con herramientas.",
          },
          {
            time: "05:00 PM",
            activity: "Cierre de Jornada",
            description: "Q&A y reflexiones del primer día.",
          },
        ],
      },
      {
        day: "Día 2: Inmersión Técnica",
        items: [
          {
            time: "10:00 AM",
            activity: "Revisión y Ajuste",
            description: "Análisis de casos reales y técnica de corte.",
          },
          {
            time: "01:00 PM",
            activity: "Lunch Break",
            description: "Comida en las instalaciones.",
          },
          {
            time: "02:00 PM",
            activity: "Práctica Intensiva",
            description: "Cada alumno trabaja bajo supervisión directa.",
          },
          {
            time: "05:00 PM",
            activity: "Certificación",
            description: "Entrega de reconocimientos y convivencia final.",
          },
        ],
      },
    ],
    inclusions: [
      "Instalaciones techadas de primer nivel",
      "Material didáctico impreso",
      "Certificado con validez curricular",
      "Acceso a grupo de seguimiento post-clínica",
    ],
    requirements: [
      "Ganas de aprender y cuestionar lo tradicional",
      "Ropa cómoda para trabajo en campo",
      "Guantes de protección (para practicantes)",
    ],
    testimonials: [
      {
        name: "Alonso Alvarez",
        role: "Podólogo - Apaseo el Grande, GTO",
        content:
          "Certificado en Clínica de Barefoot 01. La técnica cambió mi perspectiva del bienestar equino y el balance real. ⭐⭐⭐⭐⭐",
        image: "/images/testimonials/alonso-alvarez.png",
      },
      {
        name: "Antonio Rodriguez",
        role: "Instructor - Parras, Coahuila",
        content:
          "Una experiencia transformadora. El curso intensivo me brindó las herramientas para entender la salud desde la base. ✨",
        image: "/images/testimonials/antonio-rodriguez.png",
      },
      {
        name: "Dante Torres",
        role: "Barefoot Pro - Toluca, EdoMex",
        content:
          "El nivel técnico de BieneqMty es superior. Recomendado para todo profesional del caballo que busque excelencia.",
        image: "/images/testimonials/dante-torres.png",
      },
      {
        name: "MVZ Ivan Huerta",
        role: "Médico Veterinario - Puebla, MX",
        content:
          "Como médico veterinario, la evidencia clínica de estos certificados es indispensable para nuestra práctica diaria. 🏆",
        image: "/images/testimonials/ivan-huerta.png",
      },
    ],
  },
];

export const upcomingClinic: Clinic = {
  ...pastClinics[0],
  id: "clinic-october-2026",
  slug: "clinica-barefoot-integral-octubre",
  date: "17 y 18 de Octubre",
  fullDate: "17 y 18 de Octubre, 2026",
  startsAt: "2026-10-17T10:00:00-06:00",
  completed: false,
  tiers: [
    {
      name: "Online Esencial",
      mode: "online",
      tagline: "DA EL PRIMER PASO",
      price: 990,
      description:
        "Conoce el enfoque Barefoot como espectador de la teoría del primer día, en vivo.",
      includes: [
        "Teoría del sábado 17 en vivo",
        "Transmisión simultánea con la clínica presencial",
        "Acceso como espectador",
      ],
      limitations:
        "Sin preguntas, grabaciones, manual ni constancia. No incluye el segundo día.",
    },
    {
      name: "Online Participativo",
      mode: "online",
      tagline: "APRENDE Y RESUELVE TUS DUDAS",
      price: 2490,
      description:
        "Sigue la teoría de ambos días y participa en los bloques de preguntas con apoyo del moderador.",
      includes: [
        "Teoría de ambos días en vivo",
        "Preguntas en los bloques designados",
        "Moderador que reúne las preguntas",
        "Grabaciones de teoría por 7 días",
        "Manual digital Bieneq",
      ],
      limitations:
        "Sin constancia, revisión de caso ni sesión de seguimiento posterior.",
    },
    {
      name: "Online VIP",
      mode: "online",
      tagline: "MAYOR ACOMPAÑAMIENTO",
      highlighted: true,
      price: 3500,
      description:
        "Aprende en vivo, repasa con más tiempo y vuelve con tus dudas a una sesión grupal posterior.",
      includes: [
        "Teoría de ambos días en vivo",
        "Preguntas en los bloques designados",
        "Moderador que reúne las preguntas",
        "Grabaciones de teoría por 30 días",
        "Manual digital Bieneq",
        "Constancia digital de participación",
        "Sesión grupal posterior de preguntas",
        "Revisión educativa de un caso por participante en la sesión grupal",
      ],
      limitations:
        "El caso se envía con formato y fecha límite indicados por el equipo. El seguimiento es grupal; no incluye asesoría individual.",
    },
    {
      ...pastClinics[0].tiers[1],
      mode: "presencial",
      tagline: "APRENDE OBSERVANDO",
    },
    {
      ...pastClinics[0].tiers[2],
      mode: "presencial",
      tagline: "APRENDE HACIENDO",
    },
  ],
  faqs: [
    {
      question: "¿Cómo será la transmisión online?",
      answer:
        "Será en vivo por Zoom, simultáneamente con los bloques de teoría de la clínica presencial. Contaremos con cámara, micrófono y una persona dedicada a monitorear la transmisión y moderar las preguntas. El acceso se comparte después de confirmar tu inscripción. La práctica presencial con caballos no está incluida en los planes online.",
    },
    {
      question: "¿En qué planes puedo hacer preguntas?",
      answer:
        "Online Participativo y Online VIP pueden enviar preguntas durante los bloques designados; el moderador las organiza para el instructor. Online Esencial es acceso como espectador y no incluye preguntas. El apoyo técnico de acceso está disponible para todos los planes.",
    },
    {
      question: "¿Qué pasa si no puedo conectarme en vivo?",
      answer:
        "Esencial no incluye grabaciones. Participativo incluye 7 días de acceso a las grabaciones de teoría y VIP incluye 30 días, contados a partir de su entrega. El equipo te indicará cómo acceder.",
    },
    {
      question: "¿Cómo funciona el seguimiento VIP?",
      answer:
        "Incluye una sesión grupal posterior para resolver dudas y revisar un caso educativo por participante VIP. El equipo comunicará la fecha, el formato de envío y la fecha límite. No es una consulta individual ni sustituye una valoración veterinaria.",
    },
    ...pastClinics[0].faqs.filter(
      (faq) =>
        !faq.question.includes("hospedaje") &&
        !faq.question.includes("comprobante"),
    ),
    {
      question: "¿Qué planes incluyen alimentación y constancia?",
      answer:
        "Oyente y Practicante presenciales incluyen comida los dos días y constancia. Online VIP incluye constancia digital; Esencial y Participativo no la incluyen. Los planes online no incluyen alimentación, hospedaje ni traslado. Para asistentes presenciales, el hospedaje y el traslado se contratan como extras opcionales.",
    },
  ],
};

export const clinics: Clinic[] = [upcomingClinic, ...pastClinics];

export function getClinicBySlug(slug: string): Clinic | undefined {
  return clinics.find((c) => c.slug === slug);
}
