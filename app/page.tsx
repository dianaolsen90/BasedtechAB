import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
        <section
          className="relative overflow-hidden bg-arctic-night px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24"
          aria-label="Introduktion"
        >
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background: "var(--aurora-gradient)",
              mixBlendMode: "screen" as const,
            }}
            aria-hidden
          />
          <SnowflakeSvg
            className="snowflake-slow pointer-events-none absolute left-[5%] top-[8%] text-aurora-teal"
            style={{ width: 24, height: 24, opacity: 0.2 }}
          />
          <SnowflakeSvg
            className="snowflake-medium pointer-events-none absolute right-[8%] top-[12%] text-frost-white"
            style={{ width: 20, height: 20, opacity: 0.15 }}
          />
          <SnowflakeSvg
            className="snowflake-fast pointer-events-none absolute bottom-[15%] left-[15%] text-aurora-teal"
            style={{ width: 16, height: 16, opacity: 0.25 }}
          />
          <SnowflakeSvg
            className="snowflake-slow pointer-events-none absolute bottom-[20%] right-[12%] text-frost-white"
            style={{ width: 28, height: 28, opacity: 0.18 }}
          />
          <SnowflakeSvg
            className="snowflake-medium pointer-events-none absolute left-[2%] top-1/2 text-aurora-teal"
            style={{ width: 18, height: 18, opacity: 0.15 }}
          />
          <SnowflakeSvg
            className="snowflake-fast pointer-events-none absolute right-[3%] top-1/3 text-frost-white"
            style={{ width: 22, height: 22, opacity: 0.2 }}
          />
          <div className="relative z-[2] mx-auto flex max-w-container flex-col items-center gap-12 md:flex-row md:gap-16">
            <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
              <h1 className="hero-fade-1 mb-6 font-h text-[clamp(2.4rem,5vw,3.75rem)] font-bold leading-[1.1] text-frost-white">
                Vi brinner för en smart ekonomihantering
              </h1>
              <p className="hero-fade-2 mb-4 max-w-2xl font-b text-xl font-light leading-[1.8] text-frost-muted">
                Bokföringen är inte bara till för revisorn eller Skatteverket.
                Den är ditt viktigaste verktyg för att mäta och utveckla din
                verksamhet.
              </p>
              <p className="hero-fade-3 mb-8 max-w-2xl font-b text-base font-light leading-[1.8] text-frost-subtle">
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
                  className="rounded-full bg-aurora-teal px-8 py-4 font-b text-base font-semibold text-arctic-night transition-transform duration-300 hover:scale-[1.04]"
                >
                  Kostnadsfri analys
                </Link>
                <Link
                  href="#tjanster"
                  className="rounded-full border border-aurora-teal px-8 py-4 font-b text-base font-semibold text-aurora-teal transition-colors duration-300 hover:bg-[rgba(46,207,176,0.08)]"
                >
                  Läs mer
                </Link>
              </div>
            </div>
            <div className="hero-fade-5 flex flex-1 items-center justify-center">
              <Image
                src="/images/bokforing-inte-for-revisorn.png"
                alt="Pingvin som undervisar om bokföring"
                width={560}
                height={480}
                className="h-auto w-full max-w-[480px] object-contain"
                style={{ filter: "drop-shadow(var(--glow-teal))" }}
                priority
              />
            </div>
          </div>
        </section>
        <section
          id="tjanster"
          className="reveal scroll-mt-[84px] bg-arctic-deep px-6 py-24 md:px-8"
        >
          <div className="mx-auto max-w-container">
            <div className="mb-16 text-center">
              <div className="mb-6 flex items-center justify-center gap-3">
                <span
                  className="h-px w-10 bg-aurora-teal opacity-70"
                  aria-hidden
                />
                <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-aurora-teal">
                  VAD VI GÖR
                </p>
                <span
                  className="h-px w-10 bg-aurora-teal opacity-70"
                  aria-hidden
                />
              </div>
              <h2 className="font-h text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-none text-frost-white">
                Tre steg mot full{" "}
                <span className="text-aurora-teal">automagi</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[rgba(46,207,176,0.2)] bg-arctic-ice p-8 transition-all duration-[350ms] hover:scale-[1.02] hover:border-aurora-teal">
                <div className="mb-4">
                  <SnowflakeSvg className="h-6 w-6 text-aurora-teal" />
                </div>
                <div className="mb-6 overflow-hidden rounded-xl bg-[rgba(255,255,255,0.03)]">
                  <Image
                    src="/images/manadsrapport-pingvin.png"
                    alt="Pingvin vid månadsrapport"
                    width={400}
                    height={260}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <h3 className="mb-3 font-h text-xl font-bold text-frost-white">
                  Vem älskar inte rena skrivbord?
                </h3>
                <p className="font-b text-base font-light leading-[1.75] text-frost-muted">
                  Allt börjar med en korrekt grund att stå på. Vi granskar och
                  justerar historisk bokföringsdata så att den är pricksäker,
                  sedan är vi redo för automagi.
                </p>
              </div>
              <div className="rounded-2xl border border-[rgba(46,207,176,0.2)] bg-arctic-ice p-8 transition-all duration-[350ms] hover:scale-[1.02] hover:border-aurora-teal">
                <div className="mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-6 w-6 text-aurora-purple"
                    aria-hidden
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div className="mb-6 overflow-hidden rounded-xl bg-[rgba(255,255,255,0.03)]">
                  <Image
                    src="/images/automagi.png"
                    alt="Pingvin vid skrivbord med tech-skärmar"
                    width={400}
                    height={260}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <h3 className="mb-3 font-h text-xl font-bold text-frost-white">
                  Automagi - på riktigt
                </h3>
                <p className="font-b text-base font-light leading-[1.75] text-frost-muted">
                  Att skicka digitala PDF:er till affärssystemet är inte
                  automagi. Vi implementerar moderna verktyg som faktiskt
                  automatiserar dina ekonomiprocesser. Fokus skiftas från
                  manuellt arbete till renodlad ekonomisk analys.
                </p>
              </div>
              <div className="rounded-2xl border border-[rgba(46,207,176,0.2)] bg-arctic-ice p-8 transition-all duration-[350ms] hover:scale-[1.02] hover:border-aurora-teal">
                <div className="mb-4">
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
                <div className="mb-6 overflow-hidden rounded-xl bg-[rgba(255,255,255,0.03)]">
                  <Image
                    src="/images/eureka.png"
                    alt="Pingvin vid whiteboard med lösningsflöde"
                    width={400}
                    height={260}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <h3 className="mb-3 font-h text-xl font-bold text-frost-white">
                  EUREKA!
                </h3>
                <p className="font-b text-base font-light leading-[1.75] text-frost-muted">
                  Det finns alltid saker utanför bokföringen som driver tid -
                  från specialrapporter till anpassade listor. Vi hittar dem,
                  automatiserar dem. Vi kan redovisning, uppföljning och kod.
                  Vad behöver du?
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="om-oss"
          className="reveal relative scroll-mt-[84px] overflow-hidden bg-arctic-night px-6 py-24 md:px-8"
        >
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{ background: "var(--aurora-gradient)", opacity: 0.5 }}
            aria-hidden
          />
          <div className="relative z-[1] mx-auto max-w-container">
            <div className="mb-12 text-center">
              <div className="mb-6 flex items-center justify-center gap-3">
                <span
                  className="h-px w-10 bg-aurora-teal opacity-70"
                  aria-hidden
                />
                <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-aurora-teal">
                  VERKTYG
                </p>
                <span
                  className="h-px w-10 bg-aurora-teal opacity-70"
                  aria-hidden
                />
              </div>
              <h2 className="font-h text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.1] text-frost-white">
                Marknadens vassaste verktyg - enligt oss
              </h2>
              <p className="mx-auto mt-6 max-w-2xl font-b text-base font-light leading-[1.8] text-frost-muted">
                Vi samarbetar med leverantörer som tillhandahåller svenska,
                molnbaserade och GDPR-säkrade program som kopplas på efter
                behov. Nedan är ett urval av produkter vi arbetar med.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-row gap-5 rounded-2xl border border-[rgba(46,207,176,0.2)] bg-arctic-ice p-6 transition-all duration-[350ms] hover:scale-[1.01] hover:border-aurora-teal">
                <div className="shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src="/images/reda-pingvin.png"
                    alt="REDA - AI-tolkad fakturahantering"
                    width={100}
                    height={100}
                    className="h-[100px] w-[100px] object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-2 font-h text-lg font-bold text-frost-white">
                    REDA
                  </h3>
                  <p className="font-b text-sm font-light leading-[1.75] text-frost-muted">
                    AI-tolkad fakturahantering med egna kontrollregler. Lägg
                    inte onödig tid på korrekta fakturor - REDA hanterar dem åt
                    dig.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5 rounded-2xl border border-[rgba(46,207,176,0.2)] bg-arctic-ice p-6 transition-all duration-[350ms] hover:scale-[1.01] hover:border-aurora-teal">
                <div className="shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mynt-pingvin.png"
                    alt="Mynt - VISA-kort med app"
                    width={100}
                    height={100}
                    className="h-[100px] w-[100px] object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-2 font-h text-lg font-bold text-frost-white">
                    Mynt
                  </h3>
                  <p className="font-b text-sm font-light leading-[1.75] text-frost-muted">
                    VISA-kort med tillhörande app. Fota kvittot direkt och
                    skicka det till bokföringen. Kopplas till Google Pay och
                    Apple Pay.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5 rounded-2xl border border-[rgba(46,207,176,0.2)] bg-arctic-ice p-6 transition-all duration-[350ms] hover:scale-[1.01] hover:border-aurora-teal">
                <div className="shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src="/images/fieldly-pingvin.png"
                    alt="Fieldly - projekt och kommunikation"
                    width={100}
                    height={100}
                    className="h-[100px] w-[100px] object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-2 font-h text-lg font-bold text-frost-white">
                    Fieldly
                  </h3>
                  <p className="font-b text-sm font-light leading-[1.75] text-frost-muted">
                    Med Fieldly i fickan och på kontoret arbetar, planerar och
                    kommunicerar du mer effektivt med kollegorna - full kontroll,
                    lyckade projekt och nöjda kunder.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5 rounded-2xl border border-[rgba(46,207,176,0.2)] bg-arctic-ice p-6 transition-all duration-[350ms] hover:scale-[1.01] hover:border-aurora-teal">
                <div className="shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src="/images/manadsrapport-pingvin.png"
                    alt="Månadsrapport-knappen"
                    width={100}
                    height={100}
                    className="h-[100px] w-[100px] object-cover"
                  />
                </div>
                <div>
                  <span className="mb-2 inline-block rounded-full bg-[rgba(123,94,167,0.2)] px-3 py-1 font-b text-xs font-medium text-aurora-purple">
                    Lanseras i september
                  </span>
                  <h3 className="mb-2 font-h text-lg font-bold text-frost-white">
                    Månadsrapport-knappen
                  </h3>
                  <p className="font-b text-sm font-light leading-[1.75] text-frost-muted">
                    Månadsrapporten klar med ett enda knapptryck. Lite
                    inställningar krävs första gången, sedan sköter det sig
                    självt. Kontakta oss för mer info.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="reveal relative overflow-hidden px-6 py-24 md:px-8"
          style={{
            background: "linear-gradient(to bottom, #0A1628, #060D1A)",
          }}
        >
          <SnowflakeSvg
            className="snowflake-medium pointer-events-none absolute left-[8%] top-[10%] text-aurora-teal"
            style={{ width: 20, height: 20, opacity: 0.18 }}
          />
          <SnowflakeSvg
            className="snowflake-slow pointer-events-none absolute right-[6%] top-[20%] text-frost-white"
            style={{ width: 24, height: 24, opacity: 0.15 }}
          />
          <SnowflakeSvg
            className="snowflake-fast pointer-events-none absolute bottom-[15%] left-[12%] text-aurora-teal"
            style={{ width: 16, height: 16, opacity: 0.2 }}
          />
          <SnowflakeSvg
            className="snowflake-medium pointer-events-none absolute bottom-[20%] right-[10%] text-frost-white"
            style={{ width: 22, height: 22, opacity: 0.18 }}
          />
          <div className="relative z-[1] mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-h text-4xl font-bold leading-[1.1] text-frost-white">
              Vi finns med dig hela vägen på effektiviseringsresan
            </h2>
            <p className="mb-10 font-b text-lg font-light leading-[1.8] text-frost-muted">
              Vi hjälper dig implementera tjänsterna och utbildar personalen i
              deras användning. AI i all ära, men när det gäller support är det
              alltid personligt som gäller.
            </p>
            <div className="mb-12 flex flex-wrap justify-center gap-6">
              <div className="rounded-2xl border border-[rgba(46,207,176,0.2)] bg-arctic-ice p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(46,207,176,0.2)]">
                  <span className="font-h text-lg font-bold text-aurora-teal">
                    DO
                  </span>
                </div>
                <p className="font-h text-base font-semibold text-frost-white">
                  David Olsen
                </p>
                <a
                  href="mailto:david.olsen@basedtech.se"
                  className="mt-1 block font-b text-sm font-light text-frost-muted transition-colors hover:text-aurora-teal"
                >
                  david.olsen@basedtech.se
                </a>
                <a
                  href="tel:0733017339"
                  className="mt-1 block font-b text-sm font-light text-frost-muted transition-colors hover:text-aurora-teal"
                >
                  073-301 73 39
                </a>
              </div>
              <div className="rounded-2xl border border-[rgba(46,207,176,0.2)] bg-arctic-ice p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(123,94,167,0.2)]">
                  <span className="font-h text-lg font-bold text-aurora-purple">
                    JA
                  </span>
                </div>
                <p className="font-h text-base font-semibold text-frost-white">
                  Johan Adamsson
                </p>
              </div>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-full bg-aurora-teal px-8 py-4 font-b text-base font-semibold text-arctic-night transition-transform duration-300 hover:scale-[1.05]"
            >
              Boka kostnadsfri analys
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
