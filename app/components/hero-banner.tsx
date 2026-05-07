"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const line1Words = ["Automatiserad", "bokföring"];
const line2Words = ["som", "glider", "på", "is"];

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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.0, 0.0, 0.2, 1],
      }}
    >
      {word}
    </motion.span>
  );
}

export function HeroBanner() {
  return (
    <section
      className="relative h-[58vh] min-h-[340px] w-full overflow-hidden md:h-[72vh] md:min-h-[480px]"
      aria-label="Hero banner"
    >
      <Image
        src="/Bilder/hero basedtech.png"
        alt="BASEDtech hero"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F2240]/40 via-transparent to-transparent" />
      <div className="absolute bottom-8 left-6 max-w-[90vw] md:bottom-12 md:left-12 lg:left-16">
        <div className="rounded-xl bg-white/20 px-6 py-5 backdrop-blur-sm md:px-8 md:py-6">
          <div className="mb-1 flex flex-wrap gap-x-3">
            {line1Words.map((word, i) => (
              <AnimatedWord
                key={word}
                word={word}
                index={i}
                className="font-h text-[clamp(1.9rem,5vw,3.5rem)] font-bold leading-tight text-[#1B2A4A]"
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-x-3">
            {line2Words.map((word, i) => (
              <AnimatedWord
                key={word}
                word={word}
                index={line1Words.length + i}
                className="font-h text-[clamp(1.9rem,5vw,3.5rem)] font-bold italic leading-tight text-[#0D9488]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
