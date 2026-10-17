"use client";

import { useEffect, useRef, useState } from "react";

/** Progressive enhancement: content stays readable before JavaScript runs. */
export function useClinicPresentation() {
  const pageRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (preference.matches) continue;
          const element = entry.target as HTMLElement;
          const animation = element.animate(
            [
              { opacity: 0, transform: "translateY(24px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 650,
              delay: Number(element.dataset.revealDelay || 0),
              easing: "cubic-bezier(.16,1,.3,1)",
              fill: "backwards",
            },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        }
      },
      { threshold: 0.12 },
    );
    page
      .querySelectorAll("[data-reveal]")
      .forEach((element) => observer.observe(element));
    const stopMotion = () => {
      if (preference.matches) {
        animations.forEach((animation) => animation.cancel());
        animations.clear();
      }
    };
    preference.addEventListener("change", stopMotion);

    const sections = [
      "experiencia",
      "modalidades",
      "programa",
      "instructor",
      "inscripcion",
      "preguntas",
    ]
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));
    let frame = 0;
    const updateScroll = () => {
      frame = 0;
      const bounds = page.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, -bounds.top / Math.max(1, page.offsetHeight - innerHeight)),
      );
      page.style.setProperty("--reading-progress", String(progress));
      let current = "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 245) current = section.id;
      }
      setActiveSection(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateScroll);
    };
    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", stopMotion);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  useEffect(() => {
    const link = pageRef.current?.querySelector<HTMLElement>(
      'nav a[aria-current="location"]',
    );
    const list = link?.parentElement;
    if (!link || !list || list.scrollWidth <= list.clientWidth) return;
    const target =
      list.scrollLeft +
      link.getBoundingClientRect().left -
      list.getBoundingClientRect().left -
      (list.clientWidth - link.clientWidth) / 2;
    list.scrollTo({
      left: target,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, [activeSection]);
  return { pageRef, activeSection };
}
