export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  currency: string;
  category: string;
  tag: string;
  images: string[];
  accent: string;
  specs: ProductSpecification[];
  features: string[];
  benefits: string[];
}

export const products: Product[] = [
  {
    id: "hoofpick-pro",
    slug: "hoofpick-bieneq-pro",
    name: "Hoofpick Bieneq Pro",
    shortDescription: "La herramienta de limpieza definitiva, grabada en acero de grado industrial.",
    description: "Diseñado para el profesional que no acepta compromisos. Nuestro Hoofpick Pro combina una ergonomía superior con una durabilidad extrema. Cada pieza es forjada en acero inoxidable de alta resistencia y grabada con láser para un acabado premium que resiste las condiciones más duras del campo.",
    price: 1249,
    currency: "MXN",
    category: "Herramientas",
    tag: "Exclusivo",
    images: [
      "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
    ],
    accent: "bieneq-green",
    specs: [
      { label: "Material", value: "Acero Inoxidable 316L" },
      { label: "Mango", value: "Ergonómico Anti-deslizante" },
      { label: "Peso", value: "180g" },
      { label: "Acabado", value: "Cepillado con Grabado Láser" }
    ],
    features: [
      "Punta de precisión para surcos profundos",
      "Borde dentado para limpieza lateral",
      "Resistencia total a la corrosión",
      "Garantía de por vida en la estructura"
    ],
    benefits: [
      "Reduce la fatiga manual en jornadas largas",
      "Limpieza más rápida y profunda",
      "Imagen profesional impecable"
    ]
  },
  {
    id: "escofina-elite",
    slug: "escofina-de-elite",
    name: "Escofina Bieneq Élite",
    shortDescription: "Nivelación milimétrica para un balance biomecánico perfecto.",
    description: "La Escofina Bieneq Élite es el estándar de oro para el acabado de cascos. Su diseño de dientes de doble acción permite una remoción de material agresiva pero controlada, resultando en una superficie perfectamente nivelada en menos tiempo. Indispensable para transiciones barefoot exitosas.",
    price: 2400,
    currency: "MXN",
    category: "Herramientas",
    tag: "Lo Más Vendido",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
      "https://images.unsplash.com/photo-1506795660198-e95c77602129?w=1200&q=80"
    ],
    accent: "bieneq-green",
    specs: [
      { label: "Material", value: "Acero Templado de Carbono" },
      { label: "Dientes", value: "Corte Bidireccional de Precisión" },
      { label: "Longitud", value: "14 Pulgadas" },
      { label: "Uso", value: "Nivelación y Acabado" }
    ],
    features: [
      "Doble cara: Grueso para desbaste y Fino para acabado",
      "Tratamiento térmico para mantener el filo 3x más tiempo",
      "Geometría optimizada para evitar obstrucciones",
      "Compatible con mangos estándar de nailon o madera"
    ],
    benefits: [
      "Acabados más suaves y precisos",
      "Menor esfuerzo físico por pasada",
      "Durabilidad extendida bajo uso intensivo"
    ]
  },
  {
    id: "navaja-doble",
    slug: "navaja-doble-bieneq",
    name: "Navaja Doble Bieneq",
    shortDescription: "Doble filo, doble eficiencia. El corte quirúrgico que necesitas.",
    description: "Nuestra Navaja Doble redefine el descorolado. Con dos filos paralelos de acero quirúrgico, permite realizar cortes limpios y precisos en ambos sentidos sin cambiar de herramienta. El mango de madera noble está contorneado específicamente para proporcionar un agarre seguro incluso con guantes o en ambientes húmedos.",
    price: 3100,
    currency: "MXN",
    category: "Herramientas",
    tag: "Nuevo",
    images: [
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1200&q=80",
      "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=1200&q=80"
    ],
    accent: "bieneq-cafe",
    specs: [
      { label: "Blade", value: "Acero Quirúrgico 440C" },
      { label: "Handle", value: "Madera de Ébano Tratada" },
      { label: "Tipo de Filo", value: "Doble Bisel Profesional" },
      { label: "Ensamblaje", value: "Remaches de Latón Reforzado" }
    ],
    features: [
      "Filo de larga duración re-afilable",
      "Perfil delgado para acceso a lagunas estrechas",
      "Diseño ambidiestro optimizado",
      "Estuche de cuero artesanal incluido"
    ],
    benefits: [
      "Versatilidad total en una sola herramienta",
      "Cortes más limpios, reduciendo riesgo de abscesos",
      "Comodidad superior para uso prolongado"
    ]
  },
  {
    id: "pinzas-un-toque",
    slug: "pinzas-de-un-solo-toque",
    name: "Pinzas Bieneq One-Touch",
    shortDescription: "Potencia masiva operada con una sola mano mediante resorte integrado.",
    description: "La innovación más esperada por la comunidad Barefoot. Estas pinzas de alta palanca cuentan con un sistema de resorte interno que las mantiene abiertas automáticamente, permitiendo posicionarlas y operarlas con una sola mano mientras se sostiene el casco. Diseñadas para maximizar la fuerza de corte con el mínimo esfuerzo.",
    price: 7000,
    currency: "MXN",
    category: "Herramientas",
    tag: "Premium",
    images: [
      "https://images.unsplash.com/photo-1506795660198-e95c77602129?w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
    ],
    accent: "bieneq-green",
    specs: [
      { label: "Mecanismo", value: "Resorte de Retorno Integrado" },
      { label: "Capacidad", value: "Hasta 15 Toneladas de Presión" },
      { label: "Material", value: "Acero Cromo-Vanadio Forjado" },
      { label: "Longitud", value: "12 Pulgadas de Alta Palanca" }
    ],
    features: [
      "Operación 100% con una sola mano",
      "Puntas alineadas con precisión láser",
      "Mangos ergonómicos recubiertos de polímero técnico",
      "Ideal para caballos inquietos o trabajo en solitario"
    ],
    benefits: [
      "Aumenta la seguridad al trabajar solo",
      "Reduce drásticamente la tensión en la muñeca",
      "Cortes precisos y rápidos sin esfuerzo"
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
