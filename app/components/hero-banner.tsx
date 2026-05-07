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
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3 + index * 0.12,
        duration: 0.55,
        ease: [0.0, 0.0, 0.2, 1],
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
      className="relative min-h-screen w-full overflow-hidden"
      aria-label="Hero"
      style={{
        background:
          "linear-gradient(150deg, #F8FAFB 0%, #EAF3F8 55%, #E0F0F5 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #0EA5C9 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 left-1/4 h-[400px] w-[400px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #1B2F4A 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-10 px-6 py-24 md:flex-row md:gap-16">
        <div className="flex flex-1 flex-col items-start">
          <motion.p
            className="mb-5 font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#0EA5C9]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Automagi för din ekonomi
          </motion.p>
          <h1 className="mb-6 font-h text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.08]">
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
            className="mb-8 h-[2px] w-16 bg-[#0EA5C9]"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            style={{ transformOrigin: "left" }}
            transition={{ delay: 1.0, duration: 0.5, ease: [0.0, 0.0, 0.2, 1] }}
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-full bg-[#0EA5C9] px-8 py-4 font-h text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#0891B2]"
            >
              Boka kostnadsfri analys
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-1 items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.0, 0.0, 0.2, 1] }}
        >
          <Image
            src="/Bilder/hero basedtech.png"
            alt="BASEDtech – automatiserad bokföring"
            width={700}
            height={560}
            priority
            className="h-auto w-full max-w-[560px] object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
