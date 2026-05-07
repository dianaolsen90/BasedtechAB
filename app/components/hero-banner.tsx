"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.0, 0.0, 0.2, 1] as [number, number, number, number];

export function HeroBanner() {
  return (
    <section className="w-full" aria-label="Hero bild">
      <Image
        src="/Bilder/herobase.png"
        alt="BASEDtech – automatiserad bokföring"
        width={1920}
        height={1080}
        priority
        className="h-auto w-full object-contain"
        sizes="100vw"
      />
    </section>
  );
}

export function HeroTagline() {
  return (
    <section
      className="px-6 py-16"
      style={{ background: "#F8FAFB" }}
      aria-label="Tagline"
    >
      <div className="max-w-3xl">
        <motion.p
          className="mb-3 text-sm font-medium uppercase tracking-widest text-[#0EA5C9]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          Automagi för din ekonomi
        </motion.p>
        <motion.p
          className="font-h text-4xl font-bold leading-tight text-[#1B2F4A] md:text-5xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6, ease }}
        >
          Automatiserad bokföring
        </motion.p>
        <motion.p
          className="font-h text-4xl font-bold italic leading-tight text-[#0EA5C9] md:text-5xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease }}
        >
          som glider på is
        </motion.p>
        <motion.div
          className="my-4 h-0.5 w-16 bg-[#0EA5C9]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease }}
        />
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6, ease }}
        >
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-full bg-[#0EA5C9] px-8 py-4 font-h text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#0891B2]"
          >
            Boka kostnadsfri analys
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
