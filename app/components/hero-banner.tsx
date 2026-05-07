"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function AnimatedWord({
  word,
  index,
  className,
}: {
  word: string;
  index: number;
  className: string;
}) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.4 + index * 0.12,
        duration: 0.55,
        ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number],
      }}
    >
      {word}
    </motion.span>
  );
}

const navyWords = ["Automatiserad", "bokföring"];
const tealWords = ["som", "glider", "på", "is"];

export function HeroBanner() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center overflow-hidden"
      aria-label="Hero"
    >
      <Image
        src="/Bilder/herobase.png"
        alt="BASEDtech – automatiserad bokföring"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(240,248,253,0.88) 0%, rgba(232,244,252,0.72) 45%, rgba(220,238,250,0.15) 100%)",
        }}
      />
      <div className="relative z-10 w-full px-6 py-32 md:px-12 lg:px-20">
        <div className="max-w-xl">
          <motion.p
            className="mb-5 font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#0EA5C9]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Automagi för din ekonomi
          </motion.p>
          <h1 className="mb-5 font-h text-[clamp(2.6rem,6vw,4.2rem)] font-bold leading-[1.06]">
            <span className="flex flex-wrap gap-x-4">
              {navyWords.map((w, i) => (
                <AnimatedWord
                  key={w}
                  word={w}
                  index={i}
                  className="text-[#1B2F4A]"
                />
              ))}
            </span>
            <span className="flex flex-wrap gap-x-4">
              {tealWords.map((w, i) => (
                <AnimatedWord
                  key={w}
                  word={w}
                  index={navyWords.length + i}
                  className="italic text-[#0EA5C9]"
                />
              ))}
            </span>
          </h1>
          <motion.div
            className="mb-8 h-[2px] w-14 bg-[#0EA5C9]"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            style={{ transformOrigin: "left" }}
            transition={{
              delay: 1.1,
              duration: 0.5,
              ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number],
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-full bg-[#0EA5C9] px-8 py-4 font-h text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#0891B2]"
            >
              Boka kostnadsfri analys
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
