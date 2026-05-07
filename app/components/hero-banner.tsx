"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.0, 0.0, 0.2, 1] as [number, number, number, number];

function FadeIn({
  children,
  delay = 0,
  x = 0,
  y = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay, duration: 0.65, ease }}
    >
      {children}
    </motion.div>
  );
}

export function HeroBanner() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#F8FAFB" }}
      aria-label="Hero"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col md:flex-row md:items-stretch">
        <div className="flex flex-1 flex-col justify-center px-8 py-20 md:py-28 md:pl-14 lg:pl-20">
          <FadeIn delay={0.1} x={-24}>
            <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#0EA5C9]">
              Automagi för din ekonomi
            </p>
          </FadeIn>
          <FadeIn delay={0.25} x={-24}>
            <h1 className="mb-1 font-h text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.06] text-[#1B2F4A]">
              Automatiserad bokföring
            </h1>
          </FadeIn>
          <FadeIn delay={0.38} x={-24}>
            <p className="font-h text-[clamp(2.4rem,5.5vw,4rem)] font-bold italic leading-[1.06] text-[#0EA5C9]">
              som glider på is
            </p>
          </FadeIn>
          <FadeIn delay={0.52} x={-24}>
            <div className="my-6 h-0.5 w-14 bg-[#0EA5C9]" />
          </FadeIn>
          <FadeIn delay={0.62} y={10}>
            <Link
              href="/kontakt"
              className="inline-flex w-fit items-center rounded-full bg-[#0EA5C9] px-8 py-4 font-h text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#0891B2]"
            >
              Boka kostnadsfri analys
            </Link>
          </FadeIn>
        </div>
        <motion.div
          className="relative min-h-[320px] flex-1 md:min-h-[560px]"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.9, ease }}
        >
          <Image
            src="/Bilder/heroB.png"
            alt="BASEDtech – automatiserad bokföring"
            fill
            priority
            className="object-contain object-center md:object-right"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
