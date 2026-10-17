export type AcademyPresentationSection = {
  title: string;
  lead: string;
  points: string[];
  presenterNotes: string;
  image: string;
};

export type AcademyPresentation = {
  title: string;
  objective: string;
  sections: AcademyPresentationSection[];
  sources: { label: string; href: string }[];
};

const hoofSources = [
  { label: "UC Davis Center for Equine Health · Anatomy of the Equine Foot", href: "https://ceh.vetmed.ucdavis.edu/sites/g/files/dgvnsk4536/files/local_resources/pdfs/pubs-Spring2014-sec.pdf" },
  { label: "AAEP · Foundational Clinical Skills for Equine Practice", href: "https://aaep.org/wp-content/uploads/2024/02/Proceedings-68th-Annual-Convention-2022.pdf" },
];

const welfareSources = [
  { label: "AAEP · Principles of Equine Welfare", href: "https://aaep.org/resource/aaep-principles-of-equine-welfare/" },
  { label: "Merck Veterinary Manual · Pasture for Horses", href: "https://www.merckvetmanual.com/management-and-nutrition/preventative-health-care-and-husbandry-of-horses/pasture-for-horses" },
];

const nutritionSources = [
  { label: "Merck Veterinary Manual · Feeding Practices in Horses", href: "https://www.merckvetmanual.com/management-and-nutrition/nutrition-horses/feeding-practices-in-horses-and-other-equids" },
  { label: "UMN Extension · Hay in Horse Diets", href: "https://es.extension.umn.edu/agriculture/animals-and-livestock/horse/hay-in-horse-diets" },
  { label: "UMN Extension · Encouraging Your Horse to Drink", href: "https://extension.umn.edu/agriculture/animals-and-livestock/horse/encouraging-your-horse-to-drink" },
];

const observationImage = "/images/TEORICO/DSC04906.JPG";
const anatomyImage = "/images/TEORICO/DSC04902.JPG";
const practiceImage = "/images/PRACTICA/PRACTICA3.jpg";
const horseImage = "/images/PRACTICA/PRACTICA4.jpg";
const classroomImage = "/images/INSTALACIONES/ESTUDIOTEORIA1.jpeg";

export const academyPresentations: Record<string, AcademyPresentation> = {
  "anatomia-del-casco/bienvenida-y-observacion": {
    title: "Bienvenida y observación segura",
    objective: "Adoptar una mirada descriptiva y reconocer el alcance educativo del curso.",
    sources: hoofSources,
    sections: [
      { title: "Observar antes de interpretar", lead: "Una buena observación empieza por describir lo que está frente a nosotros.", points: ["Separar lo que se ve de lo que se supone.", "Registrar el contexto: fecha, superficie y actividad reciente.", "Hacer preguntas claras para conversar con el equipo profesional."], presenterNotes: "Abre el curso explicando que el objetivo es aprender vocabulario y observación, no diagnosticar ni indicar tratamientos.", image: observationImage },
      { title: "Un registro que sí ayuda", lead: "Las notas y fotografías comparables aportan contexto a una consulta.", points: ["Mantener la misma vista, distancia e iluminación cuando sea posible.", "Describir ambos lados y el entorno sin etiquetar una causa.", "Anotar cuándo apareció un cambio y a quién se comunicó."], presenterNotes: "Muestra una ficha vacía de observación. Evita concluir que una forma aislada confirma un problema.", image: anatomyImage },
      { title: "Primero, seguridad", lead: "El bienestar del caballo y de las personas guía cada observación práctica.", points: ["Trabajar con el responsable del caballo y seguir sus indicaciones.", "No forzar posturas ni levantar una extremidad sin preparación.", "Detener la actividad si el caballo muestra incomodidad o riesgo."], presenterNotes: "En la grabación, deja claro que el manejo físico debe hacerlo una persona competente en un espacio adecuado.", image: practiceImage },
    ],
  },
  "anatomia-del-casco/estructuras-visibles": {
    title: "Estructuras visibles del casco",
    objective: "Reconocer las regiones externas y nombrarlas de forma consistente.",
    sources: hoofSources,
    sections: [
      { title: "La cápsula que vemos", lead: "La superficie externa contiene regiones con formas y funciones distintas.", points: ["Pared: porción externa que rodea el casco.", "Coronete: zona de unión con la piel y origen del crecimiento de la pared.", "Punta, cuartos y talones: referencias descriptivas alrededor del casco."], presenterNotes: "Usa una vista lateral amplia y señala las regiones sin atribuir normalidad o enfermedad a una sola forma.", image: anatomyImage },
      { title: "Vista de la cara inferior", lead: "Al voltear la vista, aparecen referencias que orientan la observación.", points: ["Suela y línea blanca en el contorno interno.", "Ranillas, surcos y barras como referencias anatómicas.", "Registrar lo visible sin introducir herramientas ni recortar."], presenterNotes: "La demostración debe ser visual. No conviertas la clase en una práctica de recorte ni retires tejido.", image: observationImage },
      { title: "Un mismo casco, varias vistas", lead: "La observación gana contexto cuando se comparan vistas complementarias.", points: ["Vista lateral para el perfil de la pared y los talones.", "Vista inferior para localizar suela, ranilla y línea blanca.", "Vista frontal y posterior para describir diferencias entre lados."], presenterNotes: "Explica qué información aporta cada toma; las fotografías por sí solas no sustituyen una evaluación profesional.", image: practiceImage },
    ],
  },
  "anatomia-del-casco/estructuras-y-movimiento": {
    title: "Estructuras internas y movimiento",
    objective: "Relacionar la cápsula visible con estructuras internas y con el apoyo del miembro.",
    sources: hoofSources,
    sections: [
      { title: "Una estructura en capas", lead: "El casco visible rodea tejidos y huesos que forman parte del dedo equino.", points: ["La cápsula córnea envuelve estructuras internas.", "La falange distal se conoce también como tercera falange o P3.", "Las láminas conectan la pared interna con la superficie del hueso."], presenterNotes: "Apóyate en un esquema anatómico revisado. Presenta estos nombres como referencias y evita explicar lesiones o tratamientos.", image: anatomyImage },
      { title: "Forma y función trabajan juntas", lead: "El casco participa en soporte, tracción y adaptación a las fuerzas de la locomoción.", points: ["Las regiones de la cápsula tienen propiedades distintas.", "Tejidos blandos del pie también participan durante el apoyo.", "La función se entiende mejor observando al caballo completo."], presenterNotes: "No reduzcas el movimiento a una sola estructura ni prometas que una modificación externa corrige un problema interno.", image: practiceImage },
      { title: "Observar el movimiento con contexto", lead: "Una toma ordenada permite describir una secuencia; no establece por sí misma un diagnóstico.", points: ["Anotar superficie, dirección, velocidad y condiciones de la toma.", "Observar el conjunto del cuerpo y no solo una extremidad.", "Compartir cambios o dudas con un profesional competente."], presenterNotes: "Usa video breve y estable, con autorización del responsable del caballo. No pidas provocar dolor ni forzar el movimiento.", image: horseImage },
    ],
  },
  "anatomia-del-casco/repaso-y-consulta": {
    title: "Repaso y consulta profesional",
    objective: "Integrar vocabulario visual y preparar una comunicación útil con profesionales.",
    sources: hoofSources,
    sections: [
      { title: "De la observación a una pregunta", lead: "Una nota clara informa qué viste, cuándo y en qué contexto.", points: ["Describe ubicación y aspecto con palabras concretas.", "Añade imágenes comparables si son seguras y pertinentes.", "Pregunta qué evaluación profesional conviene realizar."], presenterNotes: "Compara una descripción neutral con una conclusión diagnóstica. Invita a usar preguntas abiertas.", image: observationImage },
      { title: "Cambios que ameritan atención", lead: "Una alteración repentina, molestia o dificultad para apoyar requiere orientación profesional.", points: ["No retrasar la consulta por intentar interpretar imágenes en casa.", "Evitar manipular o tratar el casco sin indicación competente.", "Si hay preocupación inmediata, contactar al veterinario responsable."], presenterNotes: "Mensaje de seguridad: no ofrezcas protocolos ni tratamientos. El veterinario decide la urgencia y la evaluación.", image: practiceImage },
      { title: "Cierre: mirar, anotar, preguntar", lead: "La meta de este curso es una observación más ordenada y una colaboración más clara.", points: ["Identifica las referencias externas.", "Describe el contexto y el movimiento.", "Reconoce cuándo pedir ayuda profesional."], presenterNotes: "Recapitula las tres acciones y enlaza con el curso Barefoot Integral.", image: classroomImage },
    ],
  },
  "barefoot-integral/fundamentos-y-necesidades": {
    title: "Fundamentos y necesidades básicas",
    objective: "Comprender el enfoque integral y ubicar las necesidades del caballo en su contexto.",
    sources: welfareSources,
    sections: [
      { title: "El casco no vive aislado", lead: "El cuidado del pie forma parte de la observación del caballo completo.", points: ["Entorno, movimiento y manejo aportan contexto.", "Las necesidades y condiciones individuales importan.", "Una decisión se conversa con los profesionales del caballo."], presenterNotes: "Presenta barefoot como un enfoque de manejo y evaluación individual, no como una solución universal ni una promesa de resultado.", image: horseImage },
      { title: "Mirar el comportamiento", lead: "El comportamiento aporta información sobre el contexto, pero no confirma por sí solo una causa.", points: ["Observa rutina, compañía, descanso y actividad.", "Anota qué cambió y cuándo ocurrió.", "Si aparece una inquietud de salud, consúltala con un veterinario."], presenterNotes: "Evita antropomorfizar o etiquetar conductas. Pide observar patrones con calma y discutirlos con el equipo.", image: observationImage },
      { title: "Bienestar como marco", lead: "Alimentación, agua, manejo, atención sanitaria y ambiente se consideran juntos.", points: ["Revisar recursos disponibles y su acceso real.", "Considerar necesidades de especie y variación individual.", "Coordinar cambios con responsables y profesionales."], presenterNotes: "Usa los principios de bienestar como marco general, no como lista que diagnostica el estado de un caballo.", image: classroomImage },
    ],
  },
  "barefoot-integral/observacion-del-caballo": {
    title: "Observación del casco y del movimiento",
    objective: "Registrar observaciones repetibles y formular preguntas útiles para una revisión profesional.",
    sources: hoofSources,
    sections: [
      { title: "Establecer el contexto", lead: "Una imagen o un video solo se interpreta junto con las condiciones de observación.", points: ["Anota superficie, dirección, rutina y fecha.", "Mantén encuadre y distancia comparables.", "Describe el movimiento sin asignar diagnóstico."], presenterNotes: "Explica que una grabación casera puede aportar contexto al equipo, pero no reemplaza el examen presencial.", image: horseImage },
      { title: "Observar sin adelantar conclusiones", lead: "Empieza por lo que se aprecia y separa la descripción de la interpretación.", points: ["¿Qué parte del movimiento llamó tu atención?", "¿En qué condiciones se observó?", "¿Qué información falta para responder la pregunta?"], presenterNotes: "Puedes modelar una descripción neutral. No pidas pruebas dolorosas ni maniobras clínicas a los alumnos.", image: practiceImage },
      { title: "Preparar una consulta", lead: "Un registro breve ayuda a compartir la pregunta con claridad.", points: ["Fecha y cambios recientes.", "Fotos o video obtenidos con seguridad.", "Preguntas y datos de manejo relevantes."], presenterNotes: "Invita a presentar datos, no a autodiagnosticarse. La interpretación corresponde al profesional que evalúa al caballo.", image: observationImage },
    ],
  },
  "barefoot-integral/entorno-y-manejo": {
    title: "Entorno y manejo",
    objective: "Reconocer elementos del entorno que aportan contexto al bienestar y a la rutina del caballo.",
    sources: welfareSources,
    sections: [
      { title: "Recorrer el espacio", lead: "El manejo cotidiano se entiende mejor al observar cómo se usan los recursos.", points: ["Acceso a agua, forraje, sombra y descanso.", "Espacio disponible y oportunidades de movimiento.", "Convivencia, competencia por recursos y rutina."], presenterNotes: "Adapta la revisión al sitio y a la región. No uses un único plano de manejo como estándar para todos.", image: classroomImage },
      { title: "Observar el acceso, no solo la presencia", lead: "Que exista un recurso no significa que todos los caballos accedan a él de la misma forma.", points: ["Identifica puntos de acceso y posibles barreras.", "Observa horarios y patrones de uso.", "Registra hallazgos para conversarlos con el equipo."], presenterNotes: "Presenta una auditoría descriptiva. Cambios de grupo o alimentación necesitan planeación responsable.", image: horseImage },
      { title: "Pequeños datos, mejores conversaciones", lead: "Una revisión organizada ayuda a priorizar preguntas de manejo.", points: ["¿Qué se mantiene estable durante la semana?", "¿Qué cambió recientemente en el espacio?", "¿Qué apoyo profesional sería útil?"], presenterNotes: "Cierra recordando que la decisión debe considerar caballo, instalaciones, recursos y orientación profesional.", image: observationImage },
    ],
  },
  "barefoot-integral/alimentacion-basica": {
    title: "Alimentación básica para una conversación informada",
    objective: "Identificar información básica de forraje y agua sin prescribir dietas individuales.",
    sources: nutritionSources,
    sections: [
      { title: "Forraje como punto de partida", lead: "La alimentación equina se organiza alrededor de necesidades individuales y de los alimentos disponibles.", points: ["Registra tipo, origen y cambios de forraje.", "Considera calidad, almacenamiento y acceso.", "La ración se ajusta con asesoría según cada caballo."], presenterNotes: "Evita convertir porcentajes generales en una dieta individual. Los datos nutricionales deben evaluarse con profesionales.", image: observationImage },
      { title: "Agua y hábitos", lead: "La disponibilidad y limpieza del agua son observaciones básicas del manejo.", points: ["Confirma que el agua esté accesible y limpia.", "Anota cambios observados en los hábitos de consumo.", "Comunica cualquier inquietud de salud al veterinario."], presenterNotes: "No indiques cantidades universales ni soluciones caseras. El consumo depende del caballo, el clima y su situación.", image: horseImage },
      { title: "Antes de cambiar la dieta", lead: "Un cambio alimentario debe planearse, documentarse y revisarse según la respuesta del caballo.", points: ["Anota la dieta actual y quién la formuló.", "Registra motivo y fecha de cada ajuste.", "Consulta a un veterinario o especialista en nutrición equina."], presenterNotes: "No recomiendes suplementos ni cantidades; enfatiza los riesgos de cambiar una ración sin valoración individual.", image: classroomImage },
      { title: "Datos que conviene reunir", lead: "Una ficha ordenada facilita la conversación con quien asesora la dieta.", points: ["Edad, actividad, condición y antecedentes relevantes.", "Etiquetas, análisis de forraje y cantidades actuales.", "Cambios recientes y observaciones del responsable."], presenterNotes: "Presenta estos datos como preparación para la consulta, no como una calculadora de raciones.", image: anatomyImage },
    ],
  },
  "barefoot-integral/seguridad-y-demostracion": {
    title: "Seguridad y demostración profesional",
    objective: "Comprender el papel del entorno seguro y observar cómo se organiza una demostración profesional.",
    sources: hoofSources,
    sections: [
      { title: "Preparar un entorno seguro", lead: "La demostración requiere un caballo, un espacio y un equipo preparados.", points: ["El responsable del caballo mantiene el control y la atención.", "Herramientas fuera del alcance del público.", "La actividad se detiene si aumenta el riesgo o la incomodidad."], presenterNotes: "Muestra el espacio desde una distancia segura. No invites a replicar maniobras o técnicas con caballos propios.", image: practiceImage },
      { title: "Observar el proceso", lead: "El alumno sigue el razonamiento y las decisiones del profesional.", points: ["Qué información revisa antes de empezar.", "Qué comunica al responsable del caballo.", "Qué límites reconoce y cuándo pide apoyo."], presenterNotes: "Describe la secuencia y las preguntas; no conviertas la demostración en una certificación práctica.", image: horseImage },
      { title: "Herramientas con propósito", lead: "El uso de herramientas depende de formación, objetivo y condiciones del caballo.", points: ["Identifica nombres y usos generales.", "Observa cómo se mantienen y presentan.", "No manipules ni practiques sin supervisión competente."], presenterNotes: "No enseñes ángulos de corte ni pasos de intervención en estas diapositivas. El objetivo es reconocer y preguntar.", image: classroomImage },
    ],
  },
  "barefoot-integral/transicion-alertas-y-seguimiento": {
    title: "Transición, alertas y seguimiento",
    objective: "Entender el seguimiento como registro individual y reconocer cuándo escalar una inquietud.",
    sources: [...hoofSources, ...welfareSources],
    sections: [
      { title: "Cada caballo tiene su contexto", lead: "Cualquier cambio de manejo o protección se evalúa de forma individual.", points: ["Considera actividad, superficie, historial y comodidad.", "Coordina el plan con profesionales y responsables.", "No retires protección ni cambies rutinas por una regla general."], presenterNotes: "Esta clase no prescribe una transición ni retirada de herraduras. Cada decisión necesita valoración competente.", image: horseImage },
      { title: "Registrar para comparar", lead: "La continuidad de un registro ayuda a comunicar cómo cambia una situación.", points: ["Usa fechas y condiciones comparables.", "Anota rutina, entorno y cambios observados.", "Comparte el registro con quien acompaña al caballo."], presenterNotes: "Aclara que el registro es un apoyo para el profesional, no un sustituto del examen.", image: observationImage },
      { title: "Cuándo pedir ayuda", lead: "Dolor aparente, dificultad para moverse o un cambio repentino merecen consulta profesional.", points: ["Prioriza la seguridad y evita pruebas caseras.", "Contacta al veterinario o profesional responsable.", "Sigue instrucciones individualizadas y documenta el seguimiento."], presenterNotes: "No trates ni diagnostiques. Si la preocupación parece urgente, indica contactar al veterinario de inmediato.", image: practiceImage },
    ],
  },
};

export function getAcademyPresentation(courseSlug: string, moduleSlug: string) {
  return academyPresentations[`${courseSlug}/${moduleSlug}`];
}
