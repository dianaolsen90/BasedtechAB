"use client";

import { useEffect } from "react";

export function ScrollRevealInit() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    if (nodes.length === 0) return;

    const list = Array.from(nodes);
    const observers: IntersectionObserver[] = [];

    list.forEach((el, index) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          setTimeout(() => {
            el.classList.add("visible");
          }, index * 55);
          obs.unobserve(el);
        },
        { threshold: 0.08 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return null;
}
