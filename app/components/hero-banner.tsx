"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.0, 0.0, 0.2, 1] as [number, number, number, number];

export function HeroBanner() {
  return (
    <section className="hero-section relative w-full overflow-hidden" aria-label="Hero">
      <div className="hero-img-wrap relative w-full">
        <Image
          src="/Bilder/heroB.png"
          alt="BASEDtech – automatiserad bokföring"
          width={1920}
          height={1080}
          priority
          className="h-auto w-full"
          sizes="100vw"
        />
      </div>
      <div className="hero-card-wrap absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4 text-center">
        <motion.div
          className="hero-card rounded-2xl border border-white/30 bg-white/60 sm:bg-white/20 px-4 py-4 sm:px-10 sm:py-8 shadow-lg backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#0EA5C9]">
            Automagi för din ekonomi
          </p>
          <p className="hero-h1 font-h text-lg font-bold leading-tight text-[#1B2F4A] sm:text-4xl md:text-5xl">
            Automatiserad bokföring
          </p>
          <p className="hero-italic font-h text-lg font-bold italic leading-tight text-[#0EA5C9] sm:text-4xl md:text-5xl">
            som glider på is
          </p>
          <div className="mx-auto my-4 h-0.5 w-16 bg-[#0EA5C9]" />
          <Link
            href="/kontakt"
            className="hero-cta inline-flex items-center rounded-full bg-[#0EA5C9] px-4 py-2 font-h text-xs font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#0891B2] sm:px-8 sm:py-3.5 sm:text-base"
          >
            Boka kostnadsfri analys
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
