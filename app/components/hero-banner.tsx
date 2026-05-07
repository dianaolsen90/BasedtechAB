"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
      <div className="mx-auto max-w-3xl">
        <motion.p
          className="font-h text-4xl font-bold leading-tight text-[#1B2F4A] md:text-5xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.0, 0.0, 0.2, 1] }}
        >
          Automatiserad bokföring
        </motion.p>
        <motion.p
          className="font-h text-4xl font-bold italic leading-tight text-[#0EA5C9] md:text-5xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.0, 0.0, 0.2, 1] }}
        >
          som glider på is
        </motion.p>
        <motion.div
          className="mt-6 h-[2px] w-16 bg-[#0EA5C9]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6, ease: [0.0, 0.0, 0.2, 1] }}
        />
      </div>
    </section>
  );
}
