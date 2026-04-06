"use client";

import { motion } from "framer-motion";
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/magnetic";
import { ShimmerWord } from "@/components/ui/shimmer-word";

const clinics = [
  {
    id: 1,
    title: "Clínica Intensiva Barefoot",
    type: "Presencial",
    date: "Realizada con Éxito",
    location: "Monterrey, NL",
    spots: 0,
    spotsLeft: 0,
    hours: "16 hrs",
    img: "/images/home/wellness/IPPELP - 05.jpg",
    accent: "#22c55e",
    soldOut: true,
  },
  {
    id: 3,
    title: "Clínica Barefoot 03",
    type: "Tampico, Tamps",
    date: "Realizada con Éxito",
    location: "Tampico",
    spots: 0,
    spotsLeft: 0,
    hours: "12 hrs",
    img: "/images/home/wellness/tampico-02.jpg",
    accent: "#22c55e",
    soldOut: true,
  },
  {
    id: 2,
    title: "Próxima Clínica en Monterrey",
    type: "Presencial — Próximamente",
    date: "Junio 2026",
    location: "Sede por confirmar",
    spots: 0,
    spotsLeft: 0,
    hours: "16 hrs",
    img: "/images/home/wellness/IPPELP - 04.jpg",
    accent: "#eab308",
    comingSoon: true,
  },
];

export function ClinicsFocus() {
  return (
    <section className="relative w-full bg-transparent py-24 md:py-40 overflow-hidden z-20 border-t border-white/5">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-bieneq-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-semibold text-bieneq-green tracking-widest uppercase mb-4">
              Formación Élite
            </h2>
            <h3 className="text-4xl md:text-6xl font-heading font-semibold text-white leading-tight">
              Clínicas &{" "}<ShimmerWord>Cursos</ShimmerWord>
            </h3>
            <p className="text-white/60 text-xl mt-4 max-w-lg">
              Aprende directamente con José Manuel Luna. Grupos reducidos, práctica intensiva y conocimiento que transforma.
            </p>
          </div>
          <Magnetic strength={0.2}>
            <Link href="/citas" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium border border-white/20 px-6 py-3 rounded-full hover:border-white/50 transition-all shrink-0">
              Ver disponibilidad <ArrowRight className="w-4 h-4" />
            </Link>
          </Magnetic>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {clinics.map((clinic, i) => (
            <motion.div
              key={clinic.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 cursor-pointer h-[400px] md:h-[500px]"
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                style={{ backgroundImage: `url(${clinic.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Coming soon overlay */}
              {clinic.comingSoon && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="px-6 py-3 border border-bieneq-yellow/50 rounded-full bg-bieneq-yellow/10 backdrop-blur-md">
                    <span className="text-bieneq-yellow font-semibold tracking-widest uppercase text-sm">Próximamente</span>
                  </div>
                </div>
              )}

              <div className="absolute top-6 left-6 z-10">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: `${clinic.accent}20`, color: clinic.accent, border: `1px solid ${clinic.accent}40` }}
                >
                  {clinic.type}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                <h4 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4">
                  {clinic.title}
                </h4>

                <div className="flex flex-wrap gap-4 text-sm text-white/70 mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" style={{ color: clinic.accent }} />
                    {clinic.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" style={{ color: clinic.accent }} />
                    {clinic.location}
                  </span>
                  {clinic.spots > 0 && !clinic.soldOut && (
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" style={{ color: clinic.accent }} />
                      <span style={{ color: clinic.spotsLeft <= 3 ? "#ef4444" : "white" }}>
                        {clinic.spotsLeft} lugares disponibles
                      </span>
                    </span>
                  )}
                  {clinic.soldOut && (
                    <span className="flex items-center gap-1.5 min-w-max">
                      <Users className="w-4 h-4 text-red-500" />
                      <span className="text-red-500 font-bold uppercase tracking-widest text-[10px] px-2 py-0.5 rounded-sm bg-red-500/10 border border-red-500/20">
                        Sold Out
                      </span>
                    </span>
                  )}
                </div>

                {!clinic.comingSoon && !clinic.soldOut && (
                  <Link href="/citas" className="inline-flex items-center gap-2 font-semibold text-black px-6 py-3 rounded-full transition-all text-sm" style={{ backgroundColor: clinic.accent }}>
                    Reservar mi lugar <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                {clinic.soldOut && (
                  <Link href="/clinicas" className="inline-flex items-center gap-2 font-semibold text-white border border-white/20 hover:border-white/50 px-6 py-3 rounded-full transition-all text-sm group/btn bg-white/5 backdrop-blur-md">
                    Ver Resumen Fotográfico <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
