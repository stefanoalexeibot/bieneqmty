"use client";

import { motion, useMotionValue, useSpring, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { GradientText } from "@/components/ui/gradient-text";

interface StatItemProps {
  number: number;
  suffix?: string;
  label: string;
  description: string;
  color: "green" | "gold" | "leather" | "white";
  delay?: number;
}

function AnimatedNumber({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (isInView) motionVal.set(to);
  }, [isInView, motionVal, to]);

  useEffect(() => {
    return springVal.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(v)}${suffix}`;
      }
    });
  }, [springVal, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats: StatItemProps[] = [
  {
    number: 340,
    suffix: "+",
    label: "Caballos Rehabilitados",
    description: "De cojeras crónicas a rendimiento pleno mediante el sistema barefoot.",
    color: "green",
    delay: 0,
  },
  {
    number: 8,
    suffix: " años",
    label: "De Experiencia",
    description: "Práctica clínica continua avalada por resultados y formación especializada.",
    color: "gold",
    delay: 0.1,
  },
  {
    number: 98,
    suffix: "%",
    label: "Tasa de Satisfacción",
    description: "Propietarios y profesionales que regresan y recomiendan a BieneqMty.",
    color: "leather",
    delay: 0.2,
  },
  {
    number: 24,
    suffix: "+",
    label: "Clínicas Presenciales",
    description: "Impartidas en Monterrey y estados del norte de México.",
    color: "white",
    delay: 0.3,
  },
];

export function StatsSection() {
  return (
    <section className="relative w-full bg-[#030303] py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Top edge line accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-bieneq-green to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold text-bieneq-green tracking-widest uppercase mb-4">
            BieneqMty en Números
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-semibold text-white">
            Resultados que{" "}
            <GradientText variant="aurora" className="font-heading">
              se miden.
            </GradientText>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: stat.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative group flex flex-col gap-4 p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
            >
              {/* Number */}
              <div className="text-4xl md:text-6xl font-heading font-bold tracking-tighter leading-none">
                <GradientText variant={stat.color} className="font-heading font-bold">
                  <AnimatedNumber to={stat.number} suffix={stat.suffix} />
                </GradientText>
              </div>

              {/* Label */}
              <div>
                <p className="text-white font-semibold text-lg mb-1">{stat.label}</p>
                <p className="text-white/40 text-sm leading-relaxed">{stat.description}</p>
              </div>

              {/* Hover glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-bieneq-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
