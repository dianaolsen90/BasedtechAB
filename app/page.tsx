import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconClock,
  IconGroup,
  IconShield,
} from "@/app/components/icons";
import { HomeTjansterSection } from "@/app/components/home-tjanster";
import { ScrollRevealInit } from "@/app/components/scroll-reveal-init";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";

export const metadata: Metadata = {
  title: "BASEDtech Sweden AB",
  description:
    "Automagi för din ekonomi. Vi säkrar rätt grund i bokföringen och automatiserar resten, med personlig service.",
};

const bentoHover =
  "transition-all duration-[350ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-1 hover:scale-[1.01] hover:border-[rgba(45,224,165,0.45)]";

const larryPhotoBackdrop =
  "pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(45,224,165,0.12)] via-[#E8F4F8] to-[#F0EDF8]";
const larryPhotoFadeToCard =
  "pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[32%] min-h-[3rem] bg-gradient-to-t from-[rgba(255,255,255,0.95)] via-[rgba(255,255,255,0.55)] to-transparent";
const larryPhotoImgClass =
  "object-cover object-[center_28%] saturate-[1.08] contrast-[1.03] transition-transform duration-[480ms] ease-out group-hover:scale-[1.035]";

export default function HomePage() {
  return (
    <>
      <ScrollRevealInit />
      <SiteHeader />
      <main>
        <section
          className="relative overflow-x-hidden px-8 pb-20 pt-28 max-md:px-6 max-md:pb-16 max-md:pt-24"
          style={{
            background:
              "linear-gradient(135deg, #EFF9F5 0%, #E8F4F8 50%, #F0EDF8 100%)",
          }}
          aria-label="Introduktion"
        >
          <div className="hero-grid-cyan" aria-hidden />
          <div className="relative z-[2] mx-auto grid min-h-[90vh] w-full max-w-[1160px] grid-cols-1 gap-14 md:grid-cols-2 md:grid-rows-1 md:gap-x-10 md:gap-y-0">
            <div className="flex min-h-0 flex-col justify-center text-center md:text-left">
              <div className="hero-fade-1 mb-6 inline-flex items-center gap-2 self-center rounded-full border border-based-heading bg-white px-[1.1rem] py-[0.35rem] font-h text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-based-heading md:self-start">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-based-cyan motion-safe:animate-[pulse_2s_ease-in-out_infinite]"
                  aria-hidden
                />
                20 ÅR I BYRÅVÄRLDEN
              </div>
              <h1 className="hero-fade-2 mb-6 max-w-[36ch] font-h text-[clamp(2.2rem,4.2vw,3.75rem)] font-extrabold leading-[1.12] tracking-[-0.01em] text-based-heading md:max-w-none">
                Sluta betala för tidstjuvar. Börja köra{" "}
                <span className="text-based-cyan">automagi.</span>
              </h1>
              <div className="hero-fade-3 max-w-[520px] space-y-5 self-center md:self-start">
                <p className="font-b text-[1.05rem] font-light leading-[1.85] text-based-body">
                  Varje vecka går timmar åt till manuella moment i bokföringen.
                  Ofta handlar det om samma saker: kvitton, avstämningar och
                  fakturor som tar tid från det som faktiskt driver bolaget.
                </p>
                <p className="font-b text-[1.05rem] font-medium leading-[1.85] text-based-heading">
                  Vi tar hand om det. Du får tiden tillbaka.
                </p>
              </div>
              <div className="hero-fade-4 mt-12 flex w-full max-w-[420px] flex-col gap-5 self-center text-center md:self-start md:text-left">
                <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                  <div className="flex items-center pl-2">
                    <Image
                      src="/Bilder/adamprofil.jpg"
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full border-2 border-[rgba(26,61,53,0.15)] object-cover"
                    />
                    <Image
                      src="/Bilder/davidolsenprofilbild.jpg"
                      alt=""
                      width={40}
                      height={40}
                      className="-ml-3.5 h-10 w-10 rounded-full border-2 border-[rgba(26,61,53,0.15)] object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-h text-[0.875rem] font-semibold text-based-heading">
                      David och Johan
                    </p>
                    <p className="font-b text-[0.75rem] font-light text-based-muted">
                      Svarar inom 24 timmar
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 border-t border-[rgba(26,61,53,0.1)] pt-5">
                  <a
                    href="tel:0733017339"
                    className="font-b text-[0.95rem] font-normal text-based-body transition-colors hover:text-based-cyan"
                  >
                    073-301 73 39
                  </a>
                  <a
                    href="mailto:david.olsen@basedtech.se"
                    className="font-b text-[0.9rem] font-light text-based-muted transition-colors hover:text-based-cyan"
                  >
                    david.olsen@basedtech.se
                  </a>
                </div>
              </div>
            </div>
            <div className="relative flex min-h-0 flex-col items-center justify-center md:min-h-[90vh] md:items-center md:justify-center md:pr-[40px]">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(90vw,420px)] w-[min(90vw,420px)] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[min(36vw,520px)] md:w-[min(36vw,520px)]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(45,224,165,0.18) 0%, rgba(125,212,240,0.12) 40%, transparent 65%)",
                }}
                aria-hidden
              />
              <div className="relative z-[1] mx-auto w-full max-w-[280px] motion-safe:animate-float md:max-w-[min(100%,520px)]">
                <Image
                  src="/Bilder/avatar.png"
                  alt="Larry, BASEDtechs pingvinmaskot"
                  width={520}
                  height={520}
                  className="h-auto w-full max-h-[min(72vh,520px)] object-contain object-center drop-shadow-[0_28px_60px_rgba(26,61,53,0.12)]"
                  priority
                  sizes="(max-width: 768px) 280px, 520px"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="om-oss"
          className="reveal relative scroll-mt-[84px] overflow-hidden bg-based-white px-8 py-32"
        >
          <div className="om-oss-hex" aria-hidden />
          <div
            className="pointer-events-none absolute left-0 top-0 z-0 h-[min(50vw,420px)] w-[min(50vw,420px)] -translate-x-[15%] -translate-y-[15%] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(45,224,165,0.12) 0%, rgba(125,212,240,0.08) 45%, transparent 70%)",
            }}
            aria-hidden
          />
          <div className="relative z-[1] mx-auto max-w-container">
            <div className="mb-20 text-center">
              <div className="mb-6 flex items-center justify-center gap-3">
                <span
                  className="h-px w-10 max-w-[3rem] bg-based-cyan opacity-70 sm:w-14"
                  aria-hidden
                />
                <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-based-cyan">
                  OM OSS
                </p>
                <span
                  className="h-px w-10 max-w-[3rem] bg-based-cyan opacity-70 sm:w-14"
                  aria-hidden
                />
              </div>
              <h2 className="font-h text-[clamp(3rem,6vw,5rem)] font-extrabold leading-none tracking-[0.01em] text-based-heading">
                Vi brinner för
                <br />
                <span className="text-based-cyan">smart ekonomi</span>
              </h2>
              <p className="mx-auto mt-6 max-w-[600px] font-b text-[1.05rem] font-light leading-[1.8] text-based-body">
                På BASEDtech Sweden AB hjälper vi ekonomiavdelningar och
                redovisningsansvariga att automatisera och effektivisera
                bokföringen. Med över 20 års erfarenhet i byråvärlden vet vi
                exakt var tidstjuvarna gömmer sig.
              </p>
            </div>
            <div className="mb-20 grid grid-cols-1 gap-6 min-[900px]:grid-cols-2">
              {[
                {
                  n: "20+",
                  l: "ÅRS ERFARENHET",
                  d: "I byråvärlden",
                },
                {
                  n: "100%",
                  l: "PERSONLIG SERVICE",
                  d: "Alltid en riktig människa",
                },
              ].map((s) => (
                <div
                  key={s.n}
                  className="rounded-2xl border border-[rgba(26,61,53,0.12)] bg-based-mist p-10 shadow-card-tjanst transition-all duration-300 hover:border-[rgba(45,224,165,0.35)] hover:shadow-[0_20px_40px_rgba(26,61,53,0.08)]"
                >
                  <p
                    className="font-h text-[4.5rem] font-extrabold leading-none text-based-cyan"
                    style={{
                      textShadow: "0 0 32px rgba(45,224,165,0.35)",
                    }}
                  >
                    {s.n}
                  </p>
                  <p className="mt-3 font-h text-[0.8rem] font-semibold tracking-[0.1em] text-based-body">
                    {s.l}
                  </p>
                  <p className="mt-2 font-b text-[0.875rem] font-light text-based-muted">
                    {s.d}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6 nav:grid-cols-2 nav:items-stretch nav:gap-6">
              <div className="flex flex-col gap-6">
                {[
                  {
                    Icon: IconShield,
                    t: "Korrekt grund att stå på",
                    b: "Vi säkerställer att bokföringen stämmer innan vi sätter automagi på resten.",
                  },
                  {
                    Icon: IconClock,
                    t: "Din tid är värdefull",
                    b: "Vi eliminerar tidstjuvar och manuella moment så din tid går till analys och strategi.",
                  },
                  {
                    Icon: IconGroup,
                    t: "Alltid personligt",
                    b: "Teknik i all ära. Support och rådgivning är alltid en riktig människa hos oss.",
                  },
                ].map(({ Icon, t, b }) => (
                  <div
                    key={t}
                    className="rounded-[14px] border border-[rgba(26,61,53,0.1)] border-l-[3px] border-l-based-cyan bg-based-white p-7 shadow-card-tjanst transition-all duration-300 hover:-translate-y-[3px] hover:border-l-based-cyan-bright"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[rgba(26,61,53,0.1)] bg-based-mist">
                      <Icon className="h-5 w-5 text-based-cyan" />
                    </div>
                    <h3 className="mt-4 font-h text-[1.1rem] font-bold text-based-heading">
                      {t}
                    </h3>
                    <p className="mt-2 font-b text-[0.9rem] font-light leading-[1.7] text-based-body">
                      {b}
                    </p>
                  </div>
                ))}
              </div>
              <div className="relative flex min-h-full flex-col overflow-hidden rounded-[20px] border border-[rgba(26,61,53,0.12)] bg-based-mist p-12 shadow-card-tjanst">
                <div
                  className="pointer-events-none absolute right-0 top-0 h-[200px] w-[200px] translate-x-1/4 -translate-y-1/4 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(45,224,165,0.14) 0%, rgba(125,212,240,0.1) 45%, transparent 70%)",
                  }}
                  aria-hidden
                />
                <p
                  className="pointer-events-none absolute right-8 top-4 font-h text-[8rem] font-extrabold leading-none text-based-cyan/[0.15]"
                  aria-hidden
                >
                  20
                </p>
                <div className="relative z-[1] flex min-h-0 flex-1 flex-col">
                  <span className="mb-6 inline-flex w-fit rounded-full border border-[rgba(26,61,53,0.15)] bg-based-white px-4 py-1 font-h text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-based-cyan">
                    GRUNDAT I BYRÅVÄRLDEN
                  </span>
                  <h3 className="font-h text-[1.8rem] font-bold leading-[1.2] text-based-heading">
                    Erfarenheten syns i lösningarna.
                  </h3>
                  <p className="mt-4 font-b text-[0.95rem] font-light leading-[1.8] text-based-body">
                    Vi har sett vad som händer när bokföringen inte hänger med
                    verksamhetens tempo. Med över 20 års erfarenhet i
                    byråvärlden vet vi exakt var tidstjuvarna gömmer sig och hur
                    man stoppar dem med smart automation.
                  </p>
                  <p className="mt-8 flex items-center gap-4 font-b text-[0.875rem] italic leading-relaxed text-based-muted">
                    <span className="text-xl not-italic" aria-hidden>
                      🐧
                    </span>
                    Och Larry hjälper till på vägen.
                  </p>
                  <Link
                    href="/kontakt"
                    className="group mt-auto inline-flex items-center gap-1.5 font-h text-[0.9rem] font-medium text-based-cyan transition-all duration-300 hover:text-based-cyan"
                  >
                    Lär känna teamet bakom BASEDtech
                    <IconArrowRight
                      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HomeTjansterSection />
        <section
          id="meet-larry"
          className="reveal relative scroll-mt-[84px] overflow-hidden bg-based-white px-8 py-36"
        >
          <div className="pointer-events-none absolute left-0 top-1/2 h-[min(80vw,560px)] w-[min(80vw,560px)] -translate-x-1/3 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(125,212,240,0.12)_0%,rgba(240,237,248,0.2)_50%,transparent_70%)]" aria-hidden />
          <div className="relative z-[1] mx-auto max-w-container">
            <div className="mb-20 text-center">
              <div className="mx-auto mb-6 flex justify-center">
                <Image
                  src="/Bilder/avatar.png"
                  alt="Larry, BASEDtechs pingvinmaskot"
                  width={88}
                  height={88}
                  className="h-[88px] w-[88px] rounded-full border border-[rgba(26,61,53,0.15)] object-cover shadow-[0_16px_40px_rgba(26,61,53,0.1)]"
                />
              </div>
              <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-based-cyan">
                MÖT LARRY
              </p>
              <h2 className="mt-4 font-h text-[clamp(3rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[0.01em] text-based-heading">
                En pingvin med
                <br />
                <span className="text-based-cyan">många talanger.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-[560px] font-b text-base font-light leading-[1.8] text-based-body">
                Larry är mer än en maskot. Han representerar allt vi gör för dig
                varje dag. Smart, snabb och alltid på plats.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 min-[700px]:max-lg:grid-cols-2 lg:grid-cols-12 lg:gap-6">
              <article
                className={`group relative flex min-h-[380px] flex-col overflow-hidden rounded-[20px] border border-[rgba(26,61,53,0.12)] bg-based-mist shadow-card-tjanst max-lg:col-span-1 min-[700px]:max-lg:col-span-2 lg:col-span-5 lg:row-span-2 lg:h-[460px] lg:min-h-0 ${bentoHover}`}
              >
                <div className="relative w-full shrink-0 overflow-hidden rounded-t-[20px] border-b border-[rgba(26,61,53,0.08)] lg:min-h-0 lg:flex-[1_1_54%]">
                  <div className={larryPhotoBackdrop} aria-hidden />
                  <div className="relative aspect-[4/3] w-full lg:absolute lg:inset-0 lg:aspect-auto lg:h-full">
                    <Image
                      src="/Bilder/The Analyst.png"
                      alt="Larry som analytiker som följer KPIer och ekonomiska trender i realtid"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className={larryPhotoImgClass}
                    />
                  </div>
                  <div className={larryPhotoFadeToCard} aria-hidden />
                </div>
                <div className="relative z-[2] flex min-h-0 flex-1 flex-col px-8 pb-8 pt-7 lg:flex-[1_1_46%] lg:justify-center">
                  <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-based-cyan">
                    THE ANALYST
                  </p>
                  <h3 className="mt-2 font-h text-[1.6rem] font-extrabold leading-tight text-based-heading">
                    Larry analyserar.
                  </h3>
                  <p className="mt-2 font-b text-[0.875rem] font-light leading-relaxed text-based-body">
                    Realtidsdata, KPIer och ekonomiska trender. Larry har koll på
                    allt medan du fokuserar på att växa.
                  </p>
                </div>
              </article>
              <article
                className={`group relative flex min-h-[260px] flex-col overflow-hidden rounded-[20px] border border-[rgba(26,61,53,0.1)] bg-based-white shadow-card-tjanst max-lg:col-span-1 min-[700px]:max-lg:col-span-2 lg:col-span-4 lg:col-start-6 lg:row-start-1 ${bentoHover}`}
              >
                <div className="relative w-full shrink-0 overflow-hidden rounded-t-[20px] border-b border-[rgba(26,61,53,0.08)]">
                  <div className={larryPhotoBackdrop} aria-hidden />
                  <div className="relative aspect-[5/4] w-full min-[500px]:aspect-[16/11]">
                    <Image
                      src="/Bilder/The Automator.png"
                      alt="Larry som automatiserar fakturor, kvitton och avstämningar"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className={larryPhotoImgClass}
                    />
                  </div>
                  <div className={larryPhotoFadeToCard} aria-hidden />
                </div>
                <div className="relative z-[2] flex flex-1 flex-col px-6 pb-6 pt-6">
                  <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-based-cyan">
                    THE AUTOMATOR
                  </p>
                  <h3 className="mt-2 font-h text-[1.3rem] font-extrabold leading-tight text-based-heading">
                    Larry automatiserar.
                  </h3>
                  <p className="mt-2 font-b text-[0.8rem] font-light leading-relaxed text-based-body">
                    Fakturor, kvitton, avstämningar. Automatiskt. Alltid.
                  </p>
                </div>
              </article>
              <article
                className={`group relative flex min-h-[260px] flex-col overflow-hidden rounded-[20px] border border-[rgba(45,224,165,0.28)] bg-[rgba(45,224,165,0.08)] shadow-card-tjanst max-lg:col-span-1 min-[700px]:max-lg:col-span-2 lg:col-span-3 lg:col-start-10 lg:row-start-1 ${bentoHover}`}
              >
                <div className="relative w-full shrink-0 overflow-hidden rounded-t-[20px] border-b border-[rgba(26,61,53,0.08)]">
                  <div className={larryPhotoBackdrop} aria-hidden />
                  <div className="relative aspect-[5/4] w-full">
                    <Image
                      src="/Bilder/The problem solver.png"
                      alt="Larry som problemlösare som tar sig an utmaningar stora som små"
                      fill
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className={larryPhotoImgClass}
                    />
                  </div>
                  <div className={larryPhotoFadeToCard} aria-hidden />
                </div>
                <div className="relative z-[2] flex flex-1 flex-col px-5 pb-5 pt-5">
                  <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-based-cyan">
                    PROBLEM SOLVER
                  </p>
                  <h3 className="mt-2 font-h text-[1.2rem] font-extrabold leading-tight text-based-heading">
                    Larry löser det.
                  </h3>
                  <p className="mt-2 font-b text-[0.8rem] font-light leading-relaxed text-based-body">
                    Inga problem är för stora eller för små.
                  </p>
                </div>
              </article>
              <article
                className={`group relative flex min-h-[260px] flex-col overflow-hidden rounded-[20px] border border-[rgba(26,61,53,0.1)] bg-based-white shadow-card-tjanst max-lg:col-span-1 min-[700px]:max-lg:col-span-2 lg:col-span-4 lg:col-start-6 lg:row-start-2 ${bentoHover}`}
              >
                <div className="relative w-full shrink-0 overflow-hidden rounded-t-[20px] border-b border-[rgba(26,61,53,0.08)]">
                  <div className={larryPhotoBackdrop} aria-hidden />
                  <div className="relative aspect-[5/4] w-full min-[500px]:aspect-[16/11]">
                    <Image
                      src="/Bilder/The Advisor.png"
                      alt="Larry som rådgivare som alltid är redo för ett samtal"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className={larryPhotoImgClass}
                    />
                  </div>
                  <div className={larryPhotoFadeToCard} aria-hidden />
                </div>
                <div className="relative z-[2] flex flex-1 flex-col px-6 pb-6 pt-6">
                  <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-based-cyan">
                    THE ADVISOR
                  </p>
                  <h3 className="mt-2 font-h text-[1.3rem] font-extrabold leading-tight text-based-heading">
                    Larry rådgiver.
                  </h3>
                  <p className="mt-2 font-b text-[0.8rem] font-light leading-relaxed text-based-body">
                    Alltid redo för ett samtal. Alltid med rätt svar.
                  </p>
                </div>
              </article>
              <article
                className={`group relative flex min-h-[260px] flex-col overflow-hidden rounded-[20px] border border-[rgba(125,212,240,0.35)] bg-[rgba(125,212,240,0.1)] shadow-card-tjanst max-lg:col-span-1 min-[700px]:max-lg:col-span-2 lg:col-span-3 lg:col-start-10 lg:row-start-2 ${bentoHover}`}
              >
                <div className="relative w-full shrink-0 overflow-hidden rounded-t-[20px] border-b border-[rgba(26,61,53,0.08)]">
                  <div className={larryPhotoBackdrop} aria-hidden />
                  <div className="relative aspect-[5/4] w-full">
                    <Image
                      src="/Bilder/The tech wizard.png"
                      alt="Larry som teknikexpert som förenklar det komplexa"
                      fill
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className={larryPhotoImgClass}
                    />
                  </div>
                  <div className={larryPhotoFadeToCard} aria-hidden />
                </div>
                <div className="relative z-[2] flex flex-1 flex-col px-5 pb-5 pt-5">
                  <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-based-cyan">
                    TECH WIZARD
                  </p>
                  <h3 className="mt-2 font-h text-[1.2rem] font-extrabold leading-tight text-based-heading">
                    Larry trollar.
                  </h3>
                  <p className="mt-2 font-b text-[0.8rem] font-light leading-relaxed text-based-body">
                    Tekniken är komplex. Resultatet är enkelt.
                  </p>
                </div>
              </article>
              <article
                className={`group rounded-[20px] border border-[rgba(26,61,53,0.12)] bg-based-mist p-12 shadow-card-tjanst max-lg:col-span-1 min-[700px]:max-lg:col-span-2 lg:col-span-12 lg:row-start-3 ${bentoHover}`}
              >
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12">
                  <div className="relative mx-auto w-full max-w-[400px]">
                    <div
                      className="overflow-hidden rounded-[22px] shadow-[0_24px_48px_rgba(26,61,53,0.12)] ring-1 ring-[rgba(26,61,53,0.1)]"
                      style={{
                        background:
                          "linear-gradient(145deg, rgba(45,224,165,0.2) 0%, rgba(232,244,248,0.92) 42%, rgba(240,237,248,0.88) 100%)",
                      }}
                    >
                      <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[20px]">
                        <div className={larryPhotoBackdrop} aria-hidden />
                        <Image
                          src="/Bilder/The Team Player.png"
                          alt="Larry som lagspelare tillsammans med BASEDtech-teamet"
                          fill
                          sizes="(max-width: 1024px) 100vw, 400px"
                          className={`${larryPhotoImgClass} object-[center_30%]`}
                        />
                        <div
                          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[28%] bg-gradient-to-t from-[rgba(239,244,242,0.95)] to-transparent"
                          aria-hidden
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-based-cyan">
                      THE TEAM PLAYER
                    </p>
                    <h3 className="mt-4 font-h text-[2.5rem] font-extrabold leading-[1.1] text-based-heading">
                      Larry jobbar aldrig ensam.
                    </h3>
                    <p className="mt-4 font-b text-base font-light leading-[1.8] text-based-body">
                      Bakom Larry finns David och Johan. Två personer med 20 års
                      erfarenhet i byråvärlden som ser till att tekniken faktiskt
                      levererar det den lovar. Larry sköter automagin. David och
                      Johan sköter relationen.
                    </p>
                    <div className="my-8 border-t border-[rgba(26,61,53,0.1)]" />
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-6">
                        <Image
                          src="/Bilder/adamprofil.jpg"
                          alt="Johan Adamsson, partner och implementerare"
                          width={40}
                          height={40}
                          className="h-10 w-10 shrink-0 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-h text-base font-semibold text-based-heading">
                            Johan Adamsson
                          </p>
                          <p className="font-b text-[0.8rem] font-light text-based-muted">
                            Partner och implementerare
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <Image
                          src="/Bilder/davidolsenprofilbild.jpg"
                          alt="David Olsen, grundare och rådgivare"
                          width={40}
                          height={40}
                          className="h-10 w-10 shrink-0 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-h text-base font-semibold text-based-heading">
                            David Olsen
                          </p>
                          <p className="font-b text-[0.8rem] font-light text-based-muted">
                            Grundare och rådgivare
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/kontakt"
                      className="mt-8 inline-flex items-center justify-center rounded-lg bg-based-cyan px-10 py-4 font-h text-base font-bold text-based-heading transition-all duration-300 hover:-translate-y-0.5 hover:bg-based-cyan-bright"
                    >
                      Boka ett möte med David och Johan
                    </Link>
                  </div>
                </div>
              </article>
            </div>
            <div className="mx-auto mt-16 flex max-w-[280px] justify-center opacity-90">
              <Image
                src="/Loga-basedtech.png"
                alt="BASEDtech Sweden AB logotyp"
                width={280}
                height={84}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
