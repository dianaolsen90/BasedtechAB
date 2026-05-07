"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.0, 0.0, 0.2, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-10 bg-[#0EA5C9] opacity-50" aria-hidden />
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#0EA5C9]">
        {children}
      </p>
      <span className="h-px w-10 bg-[#0EA5C9] opacity-50" aria-hidden />
    </div>
  );
}

function Divider() {
  return <hr className="section-divider" />;
}

export function IntroSection() {
  return (
    <>
      <Divider />
      <section
        className="arctic-bg px-6 py-16 md:py-24"
        style={{ background: "#EBF5F9" }}
        id="om-oss"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="flex flex-col items-center gap-12 md:flex-row md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div className="flex-1" variants={fadeLeft}>
              <Image
                src="/Bilder/Bokforing inte endast for revisorn.png"
                alt="Bokföring inte endast för revisorn"
                width={640}
                height={480}
                className="h-auto w-full rounded-2xl shadow-[0_4px_24px_rgba(14,165,201,0.10)]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div className="flex-1" variants={fadeRight}>
              <SectionLabel>Om oss</SectionLabel>
              <h2 className="mb-5 font-h text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-tight text-[#0D2137]">
                Vi brinner för en smart ekonomihantering
              </h2>
              <p className="mb-5 text-lg font-semibold leading-relaxed text-[#0D2137]">
                Bokföringen är inte endast till för revisorn eller skatteverket.
                Den är till för att mäta och utveckla DIN verksamhet.
              </p>
              <p className="leading-relaxed text-[#2D4A5F]">
                BASEDtech Sweden AB hjälper ekonomiavdelningar och
                redovisningsansvariga att automatisera och effektivisera
                bokföringen. Med över 20 års erfarenhet inom byråvärlden har vi
                hjälpt kunder att skapa en pricksäker uppföljning, spetsa till
                sina processer för att komma åt felkällor och tidstjuvar i sin
                ekonomihantering.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Divider />
    </>
  );
}

const cards = [
  {
    title: "Vem älskar inte rena skrivbord?",
    image: "/Bilder/Automagi.png",
    alt: "Automagi – ren bokföringsgrund",
    body: "Allt börjar med en korrekt grund att stå på. Vi säkerställer att historisk bokföringsdata är korrekt genom att granska och justera, sedan är vi redo för automagi!",
  },
  {
    title: "Automagi?",
    image: "/Bilder/Automagi.png",
    alt: "Automagi – automatisering av ekonomiprocesser",
    body: "Nej, att skicka digitala PDF:er till affärssystemet är inte automagi. Vi implementerar moderna verktyg för automation av ekonomiprocesserna. Fokus skiftas från manuellt arbete till renodlad ekonomisk analys.",
  },
  {
    title: "EUREKA!",
    image: "/Bilder/EUREKA.png",
    alt: "EUREKA – hitta och automatisera tidstjuvar",
    body: "Det finns alltid saker utanför bokföringen som driver tid i ekonomihanteringen som kan gå att automatisera, från särskilda rapporter till specialiserade listor.",
  },
];

export function CardsSection() {
  return (
    <>
      <section
        className="px-6 py-16 md:py-24"
        style={{ background: "#F7FAFB" }}
        id="tjanster"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-14 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <SectionLabel>Vad vi gör</SectionLabel>
            <h2 className="font-h text-[clamp(2rem,4vw,3rem)] font-bold text-[#0D2137]">
              Tre steg mot full{" "}
              <span className="italic text-[#0EA5C9]">automagi</span>
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {cards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#BAE6F7] bg-white shadow-sm transition-all duration-300 hover:border-[#0EA5C9] hover:shadow-md"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 rounded-t-2xl bg-[#0EA5C9] transition-transform duration-300 group-hover:scale-x-100" />
                <div
                  className="relative w-full overflow-hidden bg-[#EBF5F9]"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="mb-3 font-h text-xl font-bold italic text-[#0D2137]">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#2D4A5F]">
                    {card.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Divider />
    </>
  );
}

const products = [
  {
    name: "REDA",
    image: "/Bilder/5.png",
    alt: "REDA – AI-tolkad fakturahantering",
    body: "REDA gör hanteringen enkel med en kombination av AI-tolk och möjligheten att sätta egna kontrollregler, lägg inte onödig tid på korrekta fakturor.",
    badge: null,
  },
  {
    name: "Mynt",
    image: "/Bilder/2.png",
    alt: "Mynt – VISA-kort med app",
    body: "Mynt utfärdar VISA-kort med en tillhörande app som är väldigt användarvänlig. Fota kvittot direkt och skicka in det till bokföringen. Självklart kan kortet kopplas till Google eller Apple Pay!",
    badge: null,
  },
  {
    name: "Fieldly",
    image: "/Bilder/3.png",
    alt: "Fieldly – projekt och kommunikation",
    body: "Med Fieldly i fickan och på kontoret kan du arbeta, planera och kommunicera mer effektivt med dina kollegor – full kontroll, lyckade projekt och nöjda kunder.",
    badge: null,
  },
  {
    name: "Månadsrapport­knappen",
    image: "/Bilder/4.png",
    alt: "Månadsrapportknappen – rapport med ett knapptryck",
    body: "Ja, exakt som det låter. Månadsrapporten klar med bara ett knapptryck. Lanseras i september, kontakta oss för mer info.",
    badge: "Kommer snart",
  },
];

export function ProductsSection() {
  return (
    <>
      <section
        className="arctic-bg px-6 py-16 md:py-24"
        style={{ background: "#EBF5F9" }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-14 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <SectionLabel>Verktyg</SectionLabel>
            <h2 className="mb-4 font-h text-[clamp(2rem,4vw,3rem)] font-bold italic text-[#0D2137]">
              Marknadens vassaste verktyg enligt oss
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#2D4A5F]">
              Vi samarbetar med leverantörer som tillhandahåller
              svenskutvecklade, molnbaserade och GDPR-säkrade program som lätt
              kan kopplas på à la carte. Nedan är ett urval av produkter vi har
              samarbete med!
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {products.map((p) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="group relative flex flex-row items-center gap-5 overflow-hidden rounded-2xl border border-[#BAE6F7] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#0EA5C9] hover:shadow-md"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 rounded-t-2xl bg-[#0EA5C9] transition-transform duration-300 group-hover:scale-x-100" />
                <div className="relative h-[110px] w-[110px] shrink-0 overflow-hidden rounded-xl bg-[#EBF5F9]">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    className="object-cover object-top"
                    sizes="110px"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  {p.badge && (
                    <span className="inline-block w-fit rounded-full border border-[#0EA5C9] bg-[#DFF0F7] px-3 py-0.5 text-xs font-semibold text-[#0EA5C9]">
                      {p.badge}
                    </span>
                  )}
                  <h3 className="font-h text-base font-bold text-[#0D2137]">
                    {p.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#2D4A5F]">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Divider />
    </>
  );
}

export function CtaSection() {
  return (
    <section
      className="arctic-bg px-6 py-16 md:py-24"
      style={{ background: "#DFF0F7" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="flex flex-col items-center gap-12 md:flex-row-reverse md:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div className="flex-1" variants={fadeRight}>
            <Image
              src="/Bilder/6.png"
              alt="David Olsen och Johan Adamsson – BASEDtech"
              width={640}
              height={480}
              className="h-auto w-full rounded-2xl shadow-[0_4px_24px_rgba(14,165,201,0.10)]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div className="flex flex-1 flex-col" variants={fadeLeft}>
            <SectionLabel>Vi finns här</SectionLabel>
            <h2 className="mb-5 font-h text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-tight text-[#0D2137]">
              Vi finns med dig hela vägen på effektiviseringsresan
            </h2>
            <p className="mb-6 leading-relaxed text-[#2D4A5F]">
              Vi hjälper att implementera tjänsterna och utbilda personal i
              deras användning. AI i all ära, men när det kommer till support
              är det alltid personligt som gäller!
            </p>
            <p className="mb-8 font-h text-lg italic text-[#0D2137]">
              — David Olsen & Johan Adamsson
            </p>
            <Link
              href="/kontakt"
              className="inline-flex w-fit items-center rounded-full bg-[#0EA5C9] px-8 py-4 font-h text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#0891B2]"
            >
              Boka kostnadsfri analys
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
