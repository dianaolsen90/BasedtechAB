import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroBanner, HeroTagline } from "@/app/components/hero-banner";
import { ScrollRevealInit } from "@/app/components/scroll-reveal-init";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";

export const metadata: Metadata = {
  title: "BASEDtech Sweden AB",
  description:
    "Automagi för din ekonomi. Vi hjälper ekonomiavdelningar att automatisera bokföringen med personlig service.",
};

function SnowflakeSvg({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      className={className}
      style={style}
    >
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <ScrollRevealInit />
      <SiteHeader />
      <main>
        <HeroBanner />
        <HeroTagline />
        {/* ── HERO ── */}
        <section
          className="relative overflow-hidden px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24"
          style={{
            background:
              "linear-gradient(160deg, #F8FAFB 0%, #EEF4F8 50%, #E6F7F4 100%)",
          }}
          aria-label="Introduktion"
        >
          <SnowflakeSvg
            className="snowflake-slow pointer-events-none absolute left-[5%] top-[8%] text-nordic-teal"
            style={{ width: 24, height: 24, opacity: 0.15 }}
          />
          <SnowflakeSvg
            className="snowflake-medium pointer-events-none absolute right-[8%] top-[12%] text-nordic-teal"
            style={{ width: 20, height: 20, opacity: 0.12 }}
          />
          <SnowflakeSvg
            className="snowflake-fast pointer-events-none absolute bottom-[15%] left-[15%] text-nordic-teal"
            style={{ width: 16, height: 16, opacity: 0.15 }}
          />
          <SnowflakeSvg
            className="snowflake-slow pointer-events-none absolute bottom-[20%] right-[12%] text-nordic-teal"
            style={{ width: 28, height: 28, opacity: 0.12 }}
          />
          <div className="relative z-[2] mx-auto flex max-w-container flex-col items-center gap-10 md:flex-row md:gap-14">
            <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
              <h1 className="hero-fade-1 mb-6 font-h text-[clamp(2.4rem,5vw,3.75rem)] font-bold leading-[1.1] text-nordic-navy">
                Vi brinner för en smart ekonomihantering
              </h1>
              <p className="hero-fade-2 mb-4 max-w-2xl font-b text-xl font-light leading-[1.8] text-nordic-slate">
                Bokföringen är inte bara till för revisorn eller Skatteverket.
                Den är ditt viktigaste verktyg för att mäta och utveckla din
                verksamhet.
              </p>
              <p className="hero-fade-3 mb-8 max-w-2xl font-b text-base font-light leading-[1.8] text-nordic-subtle">
                BASEDtech Sweden AB hjälper ekonomiavdelningar och
                redovisningsansvariga att automatisera och effektivisera
                bokföringen. Med över 20 års erfarenhet inom byråvärlden har vi
                hjälpt kunder att skapa en pricksäker uppföljning, spetsa sina
                processer och komma åt felkällor och tidstjuvar i sin
                ekonomihantering.
              </p>
              <div className="hero-fade-4 flex flex-wrap justify-center gap-4 md:justify-start">
                <Link
                  href="/kontakt"
                  className="rounded-full bg-nordic-teal px-8 py-4 font-b text-base font-semibold text-white transition-colors duration-300 hover:bg-nordic-teal-light"
                >
                  Kostnadsfri analys
                </Link>
                <Link
                  href="#tjanster"
                  className="rounded-full border border-nordic-teal px-8 py-4 font-b text-base font-semibold text-nordic-teal transition-colors duration-300 hover:bg-[#E6F7F4]"
                >
                  Läs mer
                </Link>
              </div>
            </div>
            <div className="hero-fade-5 flex flex-1 items-center justify-center">
              <Image
                src="/Bilder/The Team Player.png"
                alt="David Olsen och Johan Adamsson - BASEDtech"
                width={600}
                height={520}
                className="h-auto w-full max-w-[520px] object-contain"
                style={{
                  filter: "drop-shadow(0 12px 40px rgba(14, 124, 110, 0.18))",
                }}
                priority
              />
            </div>
          </div>
        </section>

        {/* ── VAD VI GÖR ── */}
        <section
          id="tjanster"
          className="reveal scroll-mt-[84px] px-6 py-24 md:px-8"
          style={{ background: "#EEF4F8" }}
        >
          <div className="mx-auto max-w-container">
            <div className="mb-16 text-center">
              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-aurora-teal opacity-70" aria-hidden />
                <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-aurora-teal">
                  VAD VI GÖR
                </p>
                <span className="h-px w-10 bg-aurora-teal opacity-70" aria-hidden />
              </div>
              <h2 className="font-h text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-none text-nordic-navy">
                Tre steg mot full{" "}
                <span className="text-nordic-teal">automagi</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div
                className="flex flex-col rounded-2xl border border-[#C8DDE9] bg-white transition-all duration-[350ms] hover:scale-[1.02] hover:border-[#0E7C6E]"
                style={{ boxShadow: "0 2px 16px rgba(15,34,64,0.07)" }}
              >
                <div className="relative w-full overflow-hidden rounded-t-2xl bg-[#EEF4F8]" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src="/Bilder/The Analyst.png"
                    alt="Pingvin analyserar bokföring"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-3">
                    <SnowflakeSvg className="h-6 w-6 text-aurora-teal" />
                  </div>
                  <h3 className="mb-3 font-h text-xl font-bold text-nordic-navy">
                    Vem älskar inte rena skrivbord?
                  </h3>
                  <p className="font-b text-base font-light leading-[1.75] text-nordic-slate">
                    Allt börjar med en korrekt grund att stå på. Vi granskar och
                    justerar historisk bokföringsdata så att den är pricksäker,
                    sedan är vi redo för automagi.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col rounded-2xl border border-[#C8DDE9] bg-white transition-all duration-[350ms] hover:scale-[1.02] hover:border-[#0E7C6E]"
                style={{ boxShadow: "0 2px 16px rgba(15,34,64,0.07)" }}
              >
                <div className="relative w-full overflow-hidden rounded-t-2xl bg-[#EEF4F8]" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src="/Bilder/The Automator.png"
                    alt="Pingvin automatiserar ekonomiflöden"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-6 w-6 text-aurora-teal"
                      aria-hidden
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <h3 className="mb-3 font-h text-xl font-bold text-nordic-navy">
                    Automagi - på riktigt
                  </h3>
                  <p className="font-b text-base font-light leading-[1.75] text-nordic-slate">
                    Att skicka digitala PDF:er till affärssystemet är inte
                    automagi. Vi implementerar moderna verktyg som faktiskt
                    automatiserar dina ekonomiprocesser. Fokus skiftas från
                    manuellt arbete till renodlad ekonomisk analys.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col rounded-2xl border border-[#C8DDE9] bg-white transition-all duration-[350ms] hover:scale-[1.02] hover:border-[#0E7C6E]"
                style={{ boxShadow: "0 2px 16px rgba(15,34,64,0.07)" }}
              >
                <div className="relative w-full overflow-hidden rounded-t-2xl bg-[#EEF4F8]" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src="/Bilder/The problem solver.png"
                    alt="Pingvin löser ekonomiska utmaningar"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-6 w-6 text-aurora-green"
                      aria-hidden
                    >
                      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 3.5-2 5-3 6H8c-1-1-3-2.5-3-6a7 7 0 0 1 7-7z" />
                    </svg>
                  </div>
                  <h3 className="mb-3 font-h text-xl font-bold text-nordic-navy">
                    EUREKA!
                  </h3>
                  <p className="font-b text-base font-light leading-[1.75] text-nordic-slate">
                    Det finns alltid saker utanför bokföringen som driver tid -
                    från specialrapporter till anpassade listor. Vi hittar dem,
                    automatiserar dem. Vi kan redovisning, uppföljning och kod.
                    Vad behöver du?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PARTNERS ── */}
        <section
          id="om-oss"
          className="reveal scroll-mt-[84px] px-6 py-24 md:px-8"
          style={{ background: "#F8FAFB" }}
        >
          <div className="mx-auto max-w-container">
            <div className="mb-12 text-center">
              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-aurora-teal opacity-70" aria-hidden />
                <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-aurora-teal">
                  VERKTYG
                </p>
                <span className="h-px w-10 bg-aurora-teal opacity-70" aria-hidden />
              </div>
              <h2 className="font-h text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.1] text-nordic-navy">
                Marknadens vassaste verktyg - enligt oss
              </h2>
              <p className="mx-auto mt-6 max-w-2xl font-b text-base font-light leading-[1.8] text-nordic-subtle">
                Vi samarbetar med leverantörer som tillhandahåller svenska,
                molnbaserade och GDPR-säkrade program som kopplas på efter
                behov. Nedan är ett urval av produkter vi arbetar med.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div
                className="flex flex-row items-center gap-5 rounded-2xl border border-[#C8DDE9] bg-white p-6 transition-all duration-[350ms] hover:scale-[1.01] hover:border-[#0E7C6E]"
                style={{ boxShadow: "0 2px 12px rgba(15,34,64,0.06)" }}
              >
                <div className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-xl bg-[#EEF4F8]">
                  <Image
                    src="/Bilder/The Advisor.png"
                    alt="REDA - AI-tolkad fakturahantering"
                    fill
                    className="object-cover object-top"
                    sizes="120px"
                  />
                </div>
                <div>
                  <h3 className="mb-2 font-h text-lg font-bold text-nordic-navy">
                    REDA
                  </h3>
                  <p className="font-b text-sm font-light leading-[1.75] text-nordic-slate">
                    AI-tolkad fakturahantering med egna kontrollregler. Lägg
                    inte onödig tid på korrekta fakturor - REDA hanterar dem åt
                    dig.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-row items-center gap-5 rounded-2xl border border-[#C8DDE9] bg-white p-6 transition-all duration-[350ms] hover:scale-[1.01] hover:border-[#0E7C6E]"
                style={{ boxShadow: "0 2px 12px rgba(15,34,64,0.06)" }}
              >
                <div className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-xl bg-[#EEF4F8]">
                  <Image
                    src="/Bilder/The tech wizard.png"
                    alt="Mynt - VISA-kort med app"
                    fill
                    className="object-cover object-top"
                    sizes="120px"
                  />
                </div>
                <div>
                  <h3 className="mb-2 font-h text-lg font-bold text-nordic-navy">
                    Mynt
                  </h3>
                  <p className="font-b text-sm font-light leading-[1.75] text-nordic-slate">
                    VISA-kort med tillhörande app. Fota kvittot direkt och
                    skicka det till bokföringen. Kopplas till Google Pay och
                    Apple Pay.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-row items-center gap-5 rounded-2xl border border-[#C8DDE9] bg-white p-6 transition-all duration-[350ms] hover:scale-[1.01] hover:border-[#0E7C6E]"
                style={{ boxShadow: "0 2px 12px rgba(15,34,64,0.06)" }}
              >
                <div className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-xl bg-[#EEF4F8]">
                  <Image
                    src="/Bilder/The problem solver.png"
                    alt="Fieldly - projekt och kommunikation"
                    fill
                    className="object-cover object-top"
                    sizes="120px"
                  />
                </div>
                <div>
                  <h3 className="mb-2 font-h text-lg font-bold text-nordic-navy">
                    Fieldly
                  </h3>
                  <p className="font-b text-sm font-light leading-[1.75] text-nordic-slate">
                    Med Fieldly i fickan och på kontoret arbetar, planerar och
                    kommunicerar du mer effektivt med kollegorna - full kontroll,
                    lyckade projekt och nöjda kunder.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-row items-center gap-5 rounded-2xl border border-[#C8DDE9] bg-white p-6 transition-all duration-[350ms] hover:scale-[1.01] hover:border-[#0E7C6E]"
                style={{ boxShadow: "0 2px 12px rgba(15,34,64,0.06)" }}
              >
                <div className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-xl bg-[#EEF4F8]">
                  <Image
                    src="/Bilder/The Analyst.png"
                    alt="Månadsrapport-knappen"
                    fill
                    className="object-cover object-top"
                    sizes="120px"
                  />
                </div>
                <div>
                  <span className="mb-2 inline-block rounded-full border border-aurora-teal bg-[#E6F7F4] px-3 py-1 font-b text-xs font-medium text-nordic-teal">
                    Lanseras i september
                  </span>
                  <h3 className="mb-2 font-h text-lg font-bold text-nordic-navy">
                    Månadsrapport-knappen
                  </h3>
                  <p className="font-b text-sm font-light leading-[1.75] text-nordic-slate">
                    Månadsrapporten klar med ett enda knapptryck. Lite
                    inställningar krävs första gången, sedan sköter det sig
                    självt. Kontakta oss för mer info.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="reveal border-t border-[#C8DDE9] px-6 py-24 md:px-8"
          style={{
            background: "linear-gradient(160deg, #EEF4F8 0%, #E6F7F4 100%)",
          }}
        >
          <div className="mx-auto max-w-container">
            <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
              <div className="flex flex-1 items-center justify-center">
                <Image
                  src="/Bilder/The Team Player.png"
                  alt="David Olsen och Johan Adamsson - BASEDtech teamet"
                  width={560}
                  height={480}
                  className="h-auto w-full max-w-[480px] object-contain"
                  style={{
                    filter: "drop-shadow(0 8px 32px rgba(14, 124, 110, 0.15))",
                  }}
                />
              </div>
              <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
                <h2 className="mb-6 font-h text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] text-nordic-navy">
                  Vi finns med dig hela vägen på effektiviseringsresan
                </h2>
                <p className="mb-8 font-b text-lg font-light leading-[1.8] text-nordic-slate">
                  Vi hjälper dig implementera tjänsterna och utbildar personalen
                  i deras användning. AI i all ära, men när det gäller support
                  är det alltid personligt som gäller.
                </p>
                <div className="mb-8 flex flex-wrap justify-center gap-4 md:justify-start">
                  <div
                    className="rounded-2xl border border-[#C8DDE9] bg-white px-6 py-4 text-center"
                    style={{ boxShadow: "0 2px 10px rgba(15,34,64,0.06)" }}
                  >
                    <p className="font-h text-base font-semibold text-nordic-navy">
                      David Olsen
                    </p>
                    <a
                      href="mailto:david.olsen@basedtech.se"
                      className="mt-1 block font-b text-sm font-light text-nordic-slate transition-colors hover:text-nordic-teal"
                    >
                      david.olsen@basedtech.se
                    </a>
                    <a
                      href="tel:0733017339"
                      className="mt-0.5 block font-b text-sm font-light text-nordic-slate transition-colors hover:text-nordic-teal"
                    >
                      073-301 73 39
                    </a>
                  </div>
                  <div
                    className="rounded-2xl border border-[#C8DDE9] bg-white px-6 py-4 text-center"
                    style={{ boxShadow: "0 2px 10px rgba(15,34,64,0.06)" }}
                  >
                    <p className="font-h text-base font-semibold text-nordic-navy">
                      Johan Adamsson
                    </p>
                  </div>
                </div>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center rounded-full bg-nordic-teal px-8 py-4 font-b text-base font-semibold text-white transition-colors duration-300 hover:bg-nordic-teal-light"
                >
                  Boka kostnadsfri analys
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
