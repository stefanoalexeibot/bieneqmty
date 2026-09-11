"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  MessageCircle,
  Plus,
  X,
} from "lucide-react";
import type { Clinic } from "@/lib/clinics";
import styles from "./clinic-view.module.css";
import { useClinicPresentation } from "./use-clinic-presentation";

function AnimatedValue({ children }: { children: string }) {
  return (
    <span className={styles.valueWindow}>
      <span key={children} className={styles.valueFlip}>
        {children}
      </span>
    </span>
  );
}

const money = (value: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(value);
const galleryLabels = {
  theory: "Teoría",
  practice: "Práctica",
  installations: "Instalaciones",
};

export default function ClinicView({ clinic }: { clinic: Clinic }) {
  const { pageRef, activeSection } = useClinicPresentation();
  const [remaining, setRemaining] = useState<number | null>(null);
  const [tierIndex, setTierIndex] = useState(() =>
    Math.max(
      0,
      clinic.tiers.findIndex((item) => item.name === "Oyente"),
    ),
  );
  const [extras, setExtras] = useState<string[]>([]);
  const [gallery, setGallery] = useState<keyof Clinic["gallery"]>("practice");
  const [photo, setPhoto] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    city: "",
    experience: "principiante",
    message: "",
  });
  const tier = clinic.tiers[tierIndex];
  const isOnline = tier.mode === "online" || tier.name === "Online";
  const chosenExtras = isOnline
    ? []
    : clinic.addons.filter((item) => extras.includes(item.id));
  const total =
    tier.price + chosenExtras.reduce((sum, item) => sum + item.price, 0);
  const photos = clinic.gallery[gallery];
  const starts = new Date(clinic.startsAt);
  const startLabel = new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Monterrey",
  }).format(starts);

  useEffect(() => {
    const update = () =>
      setRemaining(
        Math.max(
          0,
          Math.floor((new Date(clinic.startsAt).getTime() - Date.now()) / 1000),
        ),
      );
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [clinic.startsAt]);

  const selectTier = (index: number) => {
    setTierIndex(index);
    if (
      clinic.tiers[index].mode === "online" ||
      clinic.tiers[index].name === "Online"
    )
      setExtras([]);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = [
      "Hola, quiero solicitar mi inscripción a la clínica Bieneq.",
      `Evento: ${clinic.name}`,
      `Fecha: ${clinic.fullDate}`,
      `Nombre: ${form.name.trim()}`,
      `WhatsApp: ${form.whatsapp.trim()}`,
      `Ciudad: ${form.city.trim() || "No indicada"}`,
      `Experiencia: ${form.experience}`,
      `Modalidad: ${tier.name} (${money(tier.price)} MXN)`,
      `Extras: ${chosenExtras.map((item) => `${item.name} (${money(item.price)} MXN)`).join(", ") || "Sin extras"}`,
      `Total: ${money(total)} MXN`,
      `Mensaje: ${form.message.trim() || "Quisiera confirmar disponibilidad y los siguientes pasos."}`,
    ].join("\n");
    window.open(
      `https://wa.me/5218134179632?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <main ref={pageRef} className={styles.page}>
      <section className={`${styles.wrap} ${styles.hero}`}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span /> MONTERREY · OCTUBRE 2026
          </p>
          <p className={styles.eventName}>{clinic.name}</p>
          <h1>
            <span className={styles.titleLine}>El bienestar</span>
            <span className={styles.titleLine}>empieza en</span>
            <span className={styles.titleLine}>
              <em>el casco.</em>
            </span>
          </h1>
          <p className={styles.lead}>
            Entiende su anatomía. Aprende a evaluar su balance. Acércate al
            recorte funcional con una experiencia de teoría y práctica equina.
          </p>
          <div className={styles.eventMeta}>
            <span>
              <CalendarDays />
              {clinic.fullDate}
            </span>
            <span>
              <MapPin />
              {clinic.location}
            </span>
          </div>
          <div className={styles.actions}>
            <a className={styles.primary} href="#modalidades">
              Encuentra tu modalidad <ArrowRight size={18} />
            </a>
            <a className={styles.textLink} href="#programa">
              Ver programa ↗
            </a>
          </div>
          <p className={styles.micro}>
            Desde {money(Math.min(...clinic.tiers.map((item) => item.price)))}{" "}
            MXN · No necesitas experiencia previa
          </p>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.visualHalo} aria-hidden="true" />
          <span className={styles.visualIndex} aria-hidden="true">
            BIENEQ / FORMACIÓN EQUINA
          </span>
          <img
            className={styles.heroImage}
            src={clinic.gallery.practice[0]}
            alt="Práctica de podología equina en una clínica anterior de Bieneq"
            fetchPriority="high"
          />
          <div className={styles.imageCaption}>
            <span>APRENDER CON EL CABALLO</span>
            <p>
              Conocimiento que
              <br />
              se lleva a la práctica.
            </p>
            <small>Imagen de una edición anterior</small>
          </div>
          <div className={styles.heroInset}>
            <img
              src={clinic.gallery.theory[0]}
              alt="Sesión teórica de una edición anterior de la clínica"
              loading="lazy"
            />
            <span>
              TEORÍA + PRÁCTICA <ArrowRight size={12} />
            </span>
          </div>
          <div className={styles.dateBadge}>
            <strong>17—18</strong>
            <span>OCT / 2026</span>
          </div>
          <div className={styles.countdown}>
            <div className={styles.countdownTitle}>
              <span>
                {remaining === 0
                  ? "La fecha de inicio ha llegado"
                  : "Nos vemos en Monterrey"}
              </span>
              <Clock3 size={16} />
            </div>
            <div
              className={styles.digits}
              role="timer"
              aria-label="Tiempo restante para la clínica"
              aria-live="off"
            >
              {[
                { label: "Días", divisor: 86400 },
                { label: "Horas", divisor: 3600, mod: 24 },
                { label: "Minutos", divisor: 60, mod: 60 },
                { label: "Segundos", divisor: 1, mod: 60 },
              ].map((item) => (
                <div key={item.label}>
                  <strong>
                    <AnimatedValue>
                      {remaining === null
                        ? "—"
                        : String(
                            item.mod
                              ? Math.floor(remaining / item.divisor) % item.mod
                              : Math.floor(remaining / item.divisor),
                          ).padStart(2, "0")}
                    </AnimatedValue>
                  </strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <small>Inicio: {startLabel} · Hora de Monterrey</small>
          </div>
        </div>
      </section>

      <nav className={styles.sectionNav} aria-label="Explorar la clínica">
        <div className={styles.wrap}>
          {[
            ["La experiencia", "experiencia"],
            ["Modalidades", "modalidades"],
            ["Programa", "programa"],
            ["Instructor", "instructor"],
            ["Inscripción", "inscripcion"],
            ["Preguntas", "preguntas"],
          ].map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </div>
        <span className={styles.readingProgress} aria-hidden="true" />
      </nav>

      <section id="experiencia" className={`${styles.wrap} ${styles.section}`}>
        <div data-reveal className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>01 / LA EXPERIENCIA</p>
            <h2>
              Más criterio.
              <br />
              <span>Mejor cuidado.</span>
            </h2>
          </div>
          <p>
            Para propietarios, estudiantes y profesionales que quieren
            comprender al caballo desde su base. Elige cuánto quieres
            involucrarte: aprender online, observar en sede o practicar bajo
            supervisión.
          </p>
        </div>
        <div className={styles.learningGrid}>
          {[
            [
              "01",
              "Mira más allá del casco",
              "Estudia las estructuras anatómicas y su relación con el movimiento del caballo.",
            ],
            [
              "02",
              "Aprende a evaluar",
              "Conoce protocolos de observación para comprender el balance y el estado del casco.",
            ],
            [
              "03",
              "Conecta teoría y técnica",
              "Observa el trabajo real o participa en las prácticas con la modalidad Practicante.",
            ],
          ].map(([number, title, text]) => (
            <article
              key={number}
              data-reveal
              data-reveal-delay={Number(number) * 70}
            >
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="modalidades" className={styles.lightSection}>
        <div className={`${styles.wrap} ${styles.section}`}>
          <div data-reveal className={styles.sectionHead}>
            <div>
              <p className={styles.eyebrow}>02 / TU FORMA DE APRENDER</p>
              <h2>
                En vivo, donde estés.
                <br />
                <span>Un mismo propósito.</span>
              </h2>
            </div>
            <p>
              Compara qué incluye cada experiencia. Los precios están en pesos
              mexicanos; los servicios de traslado y hospedaje son opcionales.
            </p>
          </div>
          <div className={styles.liveSession}>
            <p className={styles.eyebrow}>ONLINE EN VIVO POR ZOOM</p>
            <h3>La misma clase. Una forma distinta de estar.</h3>
            <p>
              Conéctate a los bloques de teoría mientras se imparte la clínica
              presencial. Cámara, micrófono y una persona dedicada a monitorear
              la transmisión y organizar las preguntas.
            </p>
            <p>
              Esencial participa como espectador el primer día. Participativo y
              VIP pueden preguntar en los bloques designados de ambos días.
              Todos reciben apoyo técnico de acceso.
            </p>
          </div>
          {(["online", "presencial"] as const).map((mode) => (
            <div key={mode} className={styles.planGroup}>
              <h3>
                {mode === "online"
                  ? "Elige tu experiencia online"
                  : "¿Prefieres venir a Monterrey?"}
              </h3>
              <div className={styles.tierGrid} data-mode={mode}>
                {clinic.tiers
                  .map((item, index) => ({ item, index }))
                  .filter(
                    ({ item }) =>
                      (item.mode ??
                        (item.name === "Online" ? "online" : "presencial")) ===
                      mode,
                  )
                  .map(({ item, index }) => (
                    <article
                      key={item.name}
                      data-reveal
                      data-reveal-delay={index * 80}
                      data-selected={tierIndex === index}
                      className={`${styles.tierCard} ${item.highlighted ? styles.featuredTier : ""}`}
                    >
                      <p className={styles.tierTag}>
                        {item.tagline ?? "APRENDE CON BIENEQ"}
                      </p>
                      <h3>{item.name}</h3>
                      <p className={styles.tierDescription}>
                        {item.description.replace(/[💻👁️🛠️]/gu, "")}
                      </p>
                      <p className={styles.price}>
                        {money(item.price)} <small>MXN</small>
                      </p>
                      <ul>
                        {item.includes.map((include) => (
                          <li key={include}>
                            <Check size={16} />
                            {include}
                          </li>
                        ))}
                      </ul>
                      {item.limitations && (
                        <p className={styles.planLimits}>{item.limitations}</p>
                      )}
                      <a
                        href="#inscripcion"
                        className={
                          item.highlighted
                            ? styles.primary
                            : styles.outlineButton
                        }
                        onClick={() => selectTier(index)}
                      >
                        {tierIndex === index ? "Continuar con " : "Elegir "}
                        {item.name} <ArrowRight size={17} />
                      </a>
                    </article>
                  ))}
              </div>
              {mode === "online" && (
                <p className={styles.note}>
                  Por $1,010 más que Participativo, VIP suma 30 días de
                  grabaciones, constancia y seguimiento grupal con revisión
                  educativa de un caso. La sesión posterior se coordina con los
                  participantes VIP.
                </p>
              )}
            </div>
          ))}
          <p className={styles.note}>
            La práctica con caballos corresponde a Practicante presencial. Los
            planes online cubren los bloques de teoría de los días incluidos.
            Recibirás el enlace de Zoom y las instrucciones después de confirmar
            tu inscripción.
          </p>
        </div>
      </section>

      <section id="programa" className={`${styles.wrap} ${styles.section}`}>
        <div data-reveal className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>03 / EL PROGRAMA</p>
            <h2>
              Dos días para
              <br />
              <span>cambiar tu mirada.</span>
            </h2>
          </div>
          <p>
            De los fundamentos a la evaluación de casos reales. Ambas jornadas
            comienzan a las 10:00 a. m. y terminan a las 5:00 p. m.
          </p>
        </div>
        <div className={styles.scheduleGrid}>
          {clinic.schedule.map((day, index) => (
            <article
              data-reveal
              data-reveal-delay={index * 100}
              key={day.day}
              className={styles.scheduleDay}
            >
              <header>
                <span>0{index + 1}</span>
                <div>
                  <p>
                    {index === 0
                      ? "SÁBADO 17 DE OCTUBRE"
                      : "DOMINGO 18 DE OCTUBRE"}
                  </p>
                  <h3>{day.day.replace(/^Día \d: /, "")}</h3>
                </div>
              </header>
              <ol>
                {day.items.map((item) => (
                  <li key={item.time}>
                    <time>{item.time}</time>
                    <div>
                      <h4>
                        {item.activity === "Lunch Break"
                          ? "Pausa para comer"
                          : item.activity}
                      </h4>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section
        data-reveal
        id="instructor"
        className={`${styles.wrap} ${styles.instructor}`}
      >
        <div className={styles.portrait}>
          <img
            src={clinic.instructor.image}
            alt={clinic.instructor.name}
            loading="lazy"
          />
        </div>
        <div>
          <p className={styles.eyebrow}>APRENDE CON QUIEN LO PRACTICA</p>
          <h2>{clinic.instructor.name}</h2>
          <p className={styles.instructorRole}>{clinic.instructor.role}</p>
          <p>{clinic.instructor.bio}</p>
          <div className={styles.credentials}>
            {clinic.instructor.credentials.map((item) => (
              <span key={item}>
                <Check size={14} />
                {item}
              </span>
            ))}
          </div>
          <a href="#inscripcion" className={styles.textLink}>
            Quiero ser parte de esta edición <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.section}`}>
        <div data-reveal className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>ASÍ SE VIVE BIENEQ</p>
            <h2>
              Del aula
              <br />
              <span>al trabajo real.</span>
            </h2>
          </div>
          <p>
            Explora fotografías de ediciones anteriores y de las instalaciones.
            Una mirada a los espacios, la convivencia y el aprendizaje en campo.
          </p>
        </div>
        <div
          className={styles.galleryTabs}
          aria-label="Categorías de fotografías"
        >
          {(
            Object.keys(galleryLabels) as Array<keyof typeof galleryLabels>
          ).map((key) => (
            <button
              key={key}
              aria-pressed={gallery === key}
              onClick={() => {
                setGallery(key);
                setPhoto(0);
              }}
            >
              {galleryLabels[key]} <span>{clinic.gallery[key].length}</span>
            </button>
          ))}
        </div>
        <div className={styles.galleryGrid} data-reveal>
          {photos.slice(0, 4).map((src, index) => (
            <button
              key={src}
              onClick={() => {
                setPhoto(index);
                dialog.current?.showModal();
              }}
              aria-label={`Ampliar fotografía ${index + 1} de ${galleryLabels[gallery]}`}
            >
              <img
                src={src}
                alt={`${galleryLabels[gallery]} en Bieneq, fotografía ${index + 1}`}
                loading="lazy"
              />
              <span>
                <Plus size={18} />
              </span>
            </button>
          ))}
        </div>
        <button
          className={styles.textLink}
          onClick={() => {
            setPhoto(0);
            dialog.current?.showModal();
          }}
        >
          Ver las {photos.length} fotografías de{" "}
          {galleryLabels[gallery].toLowerCase()} <ArrowRight size={16} />
        </button>
      </section>

      <section className={styles.testimonialSection}>
        <div className={`${styles.wrap} ${styles.section}`}>
          <p className={styles.eyebrow}>LA COMUNIDAD BIENEQ</p>
          <h2>
            Quienes ya
            <br />
            <span>vivieron la experiencia.</span>
          </h2>
          <div className={styles.testimonials}>
            {clinic.testimonials.map((item) => (
              <figure data-reveal key={item.name}>
                <blockquote>
                  “{item.content.replace(/[⭐✨🏆]/gu, "").trim()}”
                </blockquote>
                <figcaption>
                  <img src={item.image} alt="" loading="lazy" />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        id="registro"
        className={`${styles.wrap} ${styles.section} ${styles.booking}`}
      >
        <div className={styles.bookingIntro}>
          <p className={styles.eyebrow}>04 / TU SIGUIENTE PASO</p>
          <h2>
            Nos vemos
            <br />
            <span>en la clínica.</span>
          </h2>
          <p>
            Elige tu experiencia y envíanos tu solicitud. Te acompañamos por
            WhatsApp para confirmar disponibilidad y los detalles de tu
            inscripción.
          </p>
          <ol className={styles.steps}>
            <li>
              <span>1</span>
              <div>
                <h3>Elige tu modalidad</h3>
                <p>
                  Online Esencial, Participativo o VIP; o asiste como Oyente o
                  Practicante.
                </p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <h3>Cuéntanos sobre ti</h3>
                <p>Completa tus datos y las dudas que quieras resolver.</p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <h3>Confirma con nuestro equipo</h3>
                <p>
                  La solicitud se envía por WhatsApp. Tu lugar se confirma
                  directamente con Bieneq.
                </p>
              </div>
            </li>
          </ol>
          <div className={styles.requirements}>
            <h3>Si vienes a la sede</h3>
            <ul>
              {clinic.requirements.map((item) => (
                <li key={item}>
                  <Check size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <form id="inscripcion" className={styles.form} onSubmit={submit}>
          <div className={styles.formHead}>
            <span>SOLICITUD DE INSCRIPCIÓN</span>
            <p>{clinic.fullDate}</p>
          </div>
          <fieldset>
            <legend>Tu modalidad</legend>
            <div className={styles.modeChoices}>
              {clinic.tiers.map((item, index) => (
                <label key={item.name}>
                  <input
                    type="radio"
                    name="modalidad"
                    value={item.name}
                    checked={index === tierIndex}
                    onChange={() => selectTier(index)}
                  />
                  <span>
                    {item.name}
                    <strong>{money(item.price)}</strong>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          {isOnline && (
            <p className={styles.selectedAccess}>
              En vivo por Zoom · {tier.name}. {tier.limitations} El enlace se
              comparte al confirmar la inscripción.
            </p>
          )}
          {!isOnline && (
            <fieldset>
              <legend>
                Complementa tu estancia <small>Opcional</small>
              </legend>
              {clinic.addons.map((item) => (
                <label className={styles.extra} key={item.id}>
                  <input
                    type="checkbox"
                    checked={extras.includes(item.id)}
                    onChange={() =>
                      setExtras((current) =>
                        current.includes(item.id)
                          ? current.filter((id) => id !== item.id)
                          : [...current, item.id],
                      )
                    }
                  />
                  <span>
                    {item.name}
                    <small>{item.description}</small>
                  </span>
                  <strong>+{money(item.price)}</strong>
                </label>
              ))}
            </fieldset>
          )}
          <div className={styles.formFields}>
            <label>
              Nombre completo *
              <input
                name="name"
                autoComplete="name"
                required
                pattern=".*\S.*"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Tu nombre"
              />
            </label>
            <label>
              WhatsApp *
              <input
                name="whatsapp"
                type="tel"
                autoComplete="tel"
                required
                pattern="[+0-9\(\) .\-]{10,20}"
                title="Escribe un teléfono de 10 a 20 caracteres, incluyendo código de país si corresponde."
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                placeholder="Ej. 81 1234 5678"
              />
            </label>
            <label>
              Ciudad / Estado
              <input
                autoComplete="address-level2"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                placeholder="¿De dónde nos visitas?"
              />
            </label>
            <label>
              Tu experiencia
              <select
                value={form.experience}
                onChange={(e) =>
                  setForm({ ...form, experience: e.target.value })
                }
              >
                <option value="principiante">Principiante</option>
                <option value="intermedio">Intermedio</option>
                <option value="profesional">Profesional</option>
              </select>
            </label>
            <label className={styles.fullField}>
              ¿Alguna duda o comentario?
              <textarea
                rows={2}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Cuéntanos cómo podemos ayudarte"
              />
            </label>
          </div>
          <div className={styles.total} aria-live="polite">
            <div>
              <span>Total de tu selección</span>
              <small>
                {tier.name}
                {chosenExtras.length > 0
                  ? ` + ${chosenExtras.length} extra(s)`
                  : " · Sin extras"}
              </small>
            </div>
            <strong>
              <AnimatedValue>{money(total)}</AnimatedValue>
              <small>MXN</small>
            </strong>
          </div>
          <button className={styles.primary} type="submit">
            <MessageCircle size={19} /> Solicitar por WhatsApp{" "}
            <ArrowRight size={17} />
          </button>
          <p className={styles.formNote}>
            Se abrirá WhatsApp con tu selección y tus datos. Enviar la solicitud
            no realiza un cobro ni confirma automáticamente tu lugar.
          </p>
        </form>
      </section>

      <section
        id="preguntas"
        className={`${styles.wrap} ${styles.section} ${styles.faq}`}
      >
        <div>
          <p className={styles.eyebrow}>ANTES DE INSCRIBIRTE</p>
          <h2>
            Todo claro.
            <br />
            <span>Todo listo.</span>
          </h2>
        </div>
        <div>
          {[
            ...clinic.faqs,
            {
              question: "¿Qué pasa después de enviar mi solicitud?",
              answer:
                "Se abrirá WhatsApp con tus datos, modalidad y extras. Envía el mensaje para que el equipo de Bieneq confirme disponibilidad y te indique los siguientes pasos para tu inscripción.",
            },
          ].map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <Plus size={19} />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className={`${styles.wrap} ${styles.closing}`}>
        <p className={styles.eyebrow}>{clinic.fullDate} · MONTERREY</p>
        <h2>
          Aprende a cuidar
          <br />
          <em>desde la base.</em>
        </h2>
        <a className={styles.primary} href="#inscripcion">
          Quiero inscribirme <ArrowRight size={18} />
        </a>
      </section>
      {remaining !== null &&
        createPortal(
          <div className={styles.mobileBar}>
            <div>
              <small>{tier.name} · Octubre 17–18</small>
              <strong>
                {money(total)} <span>MXN</span>
              </strong>
            </div>
            <a href="#inscripcion">
              Inscribirme <ArrowRight size={17} />
            </a>
          </div>,
          document.body,
        )}
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-label="Galería de fotografías"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") setPhoto((photo + 1) % photos.length);
          if (e.key === "ArrowLeft")
            setPhoto((photo - 1 + photos.length) % photos.length);
        }}
      >
        <div className={styles.dialogInner}>
          <header>
            <span>
              {galleryLabels[gallery]} · {photo + 1} / {photos.length}
            </span>
            <button
              aria-label="Cerrar galería"
              onClick={() => dialog.current?.close()}
            >
              <X />
            </button>
          </header>
          <img
            key={photos[photo]}
            src={photos[photo]}
            alt={`${galleryLabels[gallery]}, fotografía ${photo + 1}`}
          />
          <footer>
            <button
              aria-label="Fotografía anterior"
              onClick={() =>
                setPhoto((photo - 1 + photos.length) % photos.length)
              }
            >
              <ChevronLeft /> Anterior
            </button>
            <button
              aria-label="Fotografía siguiente"
              onClick={() => setPhoto((photo + 1) % photos.length)}
            >
              Siguiente <ChevronRight />
            </button>
          </footer>
        </div>
      </dialog>
    </main>
  );
}
