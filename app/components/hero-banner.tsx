"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.0, 0.0, 0.2, 1] as [number, number, number, number];

export function HeroBanner() {
  return (
    <section
      className="relative h-[500px] w-full overflow-hidden md:h-[600px]"
      aria-label="Hero"
    >
      <Image
        src="/Bilder/heroB.png"
        alt="BASEDtech – automatiserad bokföring"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.div
          className="mx-4 rounded-2xl border border-white/30 bg-white/20 px-10 py-8 shadow-lg backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#0EA5C9]">
            Automagi för din ekonomi
          </p>
          <p className="font-h text-4xl font-bold leading-tight text-[#1B2F4A] md:text-5xl">
            Automatiserad bokföring
          </p>
          <p className="font-h text-4xl font-bold italic leading-tight text-[#0EA5C9] md:text-5xl">
            som glider på is
          </p>
          <div className="mx-auto my-4 h-0.5 w-16 bg-[#0EA5C9]" />
          <Link
            href="/kontakt"
            className="mt-4 inline-flex items-center rounded-full bg-[#0EA5C9] px-8 py-3.5 font-h text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#0891B2]"
          >
            Boka kostnadsfri analys
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
