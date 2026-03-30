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
  title: "Tjänster | BASEDtech Sweden AB",
  description:
    "Automatisera din bokföring med BASEDtech. Vi erbjuder avstämningar, automagi och skräddarsydda lösningar. Kostnadsfri analys inom 48 timmar.",
};

const bentoHover =
  "transition-all duration-[350ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-1 hover:scale-[1.01] hover:border-[rgba(44,228,212,0.45)]";

const larryPhotoBackdrop =
  "pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(44,228,212,0.14)] via-[#0c3430] to-[#051916]";
const larryPhotoFadeToCard =
  "pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[32%] min-h-[3rem] bg-gradient-to-t from-[rgba(8,34,32,0.98)] via-[rgba(8,34,32,0.5)] to-transparent";
const larryPhotoImgClass =
  "object-cover object-[center_28%] saturate-[1.08] contrast-[1.03] transition-transform duration-[480ms] ease-out group-hover:scale-[1.035]";

export default function HomePage() {
  return (
    <>
      <ScrollRevealInit />
      <SiteHeader />
      <main>
        <section
          className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#082220] px-8 pb-24 pt-28 max-[600px]:px-6 max-[600px]:pb-16 max-[600px]:pt-24"
          aria-label="Introduktion"
        >
          <div className="aurora-wrap" aria-hidden>
            <div className="aurora-band aurora-1" />
            <div className="aurora-band aurora-2" />
            <div className="aurora-band aurora-3" />
            <div className="aurora-band aurora-4" />
          </div>
          <div className="hero-grid-cyan" aria-hidden />
          <div className="relative z-[2] mx-auto flex w-full max-w-[1160px] flex-col items-stretch gap-12 min-[900px]:grid min-[900px]:grid-cols-[minmax(0,55%)_minmax(0,45%)] min-[900px]:items-center min-[900px]:gap-16">
            <div className="order-2 flex flex-col items-center text-center min-[900px]:order-1 min-[900px]:items-start min-[900px]:text-left">
              <div className="hero-fade-1 mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(44,228,212,0.4)] bg-[rgba(44,228,212,0.1)] px-[1.1rem] py-[0.35rem] font-h text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-[#2CE4D4]">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-[#22c55e] motion-safe:animate-[pulse_2s_ease-in-out_infinite]"
                  aria-hidden
                />
                20 år i byråvärlden
              </div>
              <h1 className="hero-fade-2 mb-6 font-h text-[clamp(3.2rem,6vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.01em] text-[#EEF7F6]">
                Sluta betala
                <br />
                för tidstjuvar.
                <br />
                Börja köra
                <br />
                <span className="text-[#2CE4D4]">automagi.</span>
              </h1>
              <p className="hero-fade-3 mb-3 max-w-[500px] font-b text-[1.05rem] font-light leading-[1.85] text-[rgba(238,247,246,0.7)]">
                Varje vecka lägger svenska SME-bolag i snitt 8 timmar på manuell
                bokföring. Det är 416 timmar om året. Timmar du aldrig får
                tillbaka.
              </p>
              <p className="hero-fade-3 max-w-[500px] font-b text-[1.05rem] font-normal leading-[1.85] text-[#EEF7F6]">
                Vi tar hand om det. Du fokuserar på att växa.
              </p>
              <div className="hero-fade-4 mt-10 flex w-full max-w-[420px] flex-col gap-5 text-center min-[900px]:text-left">
                <div className="flex flex-wrap items-center justify-center gap-4 min-[900px]:justify-start">
                  <div className="flex items-center pl-2">
                    <Image
                      src="/Bilder/adamprofil.jpg"
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full border-2 border-[#082220] object-cover"
                    />
                    <Image
                      src="/Bilder/davidolsenprofilbild.jpg"
                      alt=""
                      width={40}
                      height={40}
                      className="-ml-3.5 h-10 w-10 rounded-full border-2 border-[#082220] object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-h text-[0.875rem] font-semibold text-[#EEF7F6]">
                      David och Johan
                    </p>
                    <p className="font-b text-[0.75rem] font-light text-[rgba(238,247,246,0.5)]">
                      Svarar inom 24 timmar
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 border-t border-[rgba(44,228,212,0.12)] pt-5">
                  <a
                    href="tel:0733017339"
                    className="font-b text-[0.95rem] font-normal text-[rgba(238,247,246,0.75)] transition-colors hover:text-[#2CE4D4]"
                  >
                    073-301 73 39
                  </a>
                  <a
                    href="mailto:david.olsen@basedtech.se"
                    className="font-b text-[0.9rem] font-light text-[rgba(238,247,246,0.55)] transition-colors hover:text-[#2CE4D4]"
                  >
                    david.olsen@basedtech.se
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 flex min-h-[320px] items-center justify-center min-[900px]:order-2 min-[900px]:min-h-[480px]">
              <div className="relative flex w-full max-w-[260px] items-center justify-center min-[900px]:max-w-none">
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full min-[900px]:h-[400px] min-[900px]:w-[400px]"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(44,228,212,0.10) 0%, transparent 65%)",
                  }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[247px] w-[247px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(44,228,212,0.15)] motion-safe:animate-spin-22 min-[900px]:h-[380px] min-[900px]:w-[380px]"
                  aria-hidden
                >
                  <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2CE4D4]" />
                </div>
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[325px] w-[325px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(44,228,212,0.08)] motion-safe:animate-spin-30-rev min-[900px]:h-[500px] min-[900px]:w-[500px]"
                  aria-hidden
                >
                  <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2CE4D4]" />
                </div>
                <div className="relative z-10 mx-auto w-full max-w-[260px] motion-safe:animate-float min-[900px]:max-w-[460px]">
                  <div
                    className="overflow-hidden rounded-[20px] shadow-[0_30px_80px_rgba(44,228,212,0.22)]"
                    style={{ isolation: "isolate" }}
                  >
                    <Image
                      src="/Bilder/avatar.png"
                      alt="Larry, BASEDtechs pingvinmaskot"
                      width={460}
                      height={460}
                      className="h-auto w-full mix-blend-multiply"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="om-oss"
          className="reveal relative scroll-mt-[84px] overflow-hidden bg-[#082220] px-8 py-28"
        >
          <div className="aurora-wrap" aria-hidden>
            <div className="aurora-band aurora-1" />
            <div className="aurora-band aurora-2" />
            <div className="aurora-band aurora-3" />
            <div className="aurora-band aurora-4" />
          </div>
          <div className="om-oss-hex" aria-hidden />
          <div
            className="pointer-events-none absolute left-0 top-0 z-0 h-[min(50vw,420px)] w-[min(50vw,420px)] -translate-x-[15%] -translate-y-[15%] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(44,228,212,0.08) 0%, transparent 70%)",
            }}
            aria-hidden
          />
          <div className="relative z-[1] mx-auto max-w-container">
            <div className="mb-20 text-center">
              <div className="mb-6 flex items-center justify-center gap-3">
                <span
                  className="h-px w-10 max-w-[3rem] bg-[#0F9E8E] opacity-70 sm:w-14"
                  aria-hidden
                />
                <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#0F9E8E]">
                  OM OSS
                </p>
                <span
                  className="h-px w-10 max-w-[3rem] bg-[#0F9E8E] opacity-70 sm:w-14"
                  aria-hidden
                />
              </div>
              <h2 className="font-h text-[clamp(3rem,6vw,5rem)] font-extrabold leading-none tracking-[0.01em] text-[#EEF7F6]">
                Vi brinner för
                <br />
                <span className="text-[#2CE4D4]">smart ekonomi</span>
              </h2>
              <p className="mx-auto mt-6 max-w-[600px] font-b text-[1.05rem] font-light leading-[1.8] text-[rgba(238,247,246,0.7)]">
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
                  className="rounded-2xl border border-[rgba(44,228,212,0.2)] bg-[rgba(255,255,255,0.04)] p-10 backdrop-blur-[10px] transition-all duration-300 hover:border-[rgba(44,228,212,0.5)] hover:bg-[rgba(255,255,255,0.07)]"
                >
                  <p
                    className="font-h text-[4.5rem] font-extrabold leading-none text-[#2CE4D4]"
                    style={{
                      textShadow: "0 0 40px rgba(44,228,212,0.4)",
                    }}
                  >
                    {s.n}
                  </p>
                  <p className="mt-3 font-h text-[0.8rem] font-semibold tracking-[0.1em] text-[rgba(238,247,246,0.6)]">
                    {s.l}
                  </p>
                  <p className="mt-2 font-b text-[0.875rem] font-light text-[rgba(238,247,246,0.45)]">
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
                    className="rounded-[14px] border border-[rgba(44,228,212,0.15)] border-l-[3px] border-l-[#0F9E8E] bg-[rgba(255,255,255,0.03)] p-7 transition-all duration-300 hover:-translate-y-[3px] hover:border-l-[#2CE4D4]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[rgba(44,228,212,0.3)] bg-[rgba(44,228,212,0.1)]">
                      <Icon className="h-5 w-5 text-[#2CE4D4]" />
                    </div>
                    <h3 className="mt-4 font-h text-[1.1rem] font-bold text-[#EEF7F6]">
                      {t}
                    </h3>
                    <p className="mt-2 font-b text-[0.9rem] font-light leading-[1.7] text-[rgba(238,247,246,0.65)]">
                      {b}
                    </p>
                  </div>
                ))}
              </div>
              <div className="relative flex min-h-full flex-col overflow-hidden rounded-[20px] border border-[rgba(44,228,212,0.25)] bg-[rgba(44,228,212,0.06)] p-12">
                <div
                  className="pointer-events-none absolute right-0 top-0 h-[200px] w-[200px] translate-x-1/4 -translate-y-1/4 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(44,228,212,0.15) 0%, transparent 70%)",
                  }}
                  aria-hidden
                />
                <p
                  className="pointer-events-none absolute right-8 top-4 font-h text-[8rem] font-extrabold leading-none text-[#2CE4D4]/[0.15]"
                  aria-hidden
                >
                  20
                </p>
                <div className="relative z-[1] flex min-h-0 flex-1 flex-col">
                  <span className="mb-6 inline-flex w-fit rounded-full border border-[rgba(44,228,212,0.3)] bg-[rgba(44,228,212,0.1)] px-4 py-1 font-h text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#2CE4D4]">
                    GRUNDAT I BYRÅVÄRLDEN
                  </span>
                  <h3 className="font-h text-[1.8rem] font-bold leading-[1.2] text-[#EEF7F6]">
                    Erfarenheten syns i lösningarna.
                  </h3>
                  <p className="mt-4 font-b text-[0.95rem] font-light leading-[1.8] text-[rgba(238,247,246,0.65)]">
                    Vi har sett vad som händer när bokföringen inte hänger med
                    verksamhetens tempo. Med över 20 års erfarenhet i
                    byråvärlden vet vi exakt var tidstjuvarna gömmer sig och hur
                    man stoppar dem med smart automation.
                  </p>
                  <p className="mt-8 flex items-center gap-4 font-b text-[0.875rem] italic leading-relaxed text-[rgba(238,247,246,0.5)]">
                    <span className="text-xl not-italic" aria-hidden>
                      🐧
                    </span>
                    Och Larry hjälper till på vägen.
                  </p>
                  <Link
                    href="/kontakt"
                    className="group mt-auto inline-flex items-center gap-1.5 font-h text-[0.9rem] font-medium text-[#0F9E8E] transition-all duration-300 hover:text-[#2CE4D4]"
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
          className="reveal relative scroll-mt-[84px] overflow-hidden bg-[#082220] px-8 py-28"
        >
          <div className="aurora-wrap" aria-hidden>
            <div className="aurora-band aurora-1" />
            <div className="aurora-band aurora-2" />
            <div className="aurora-band aurora-3" />
            <div className="aurora-band aurora-4" />
          </div>
          <div className="relative z-[1] mx-auto max-w-container">
            <div className="mb-20 text-center">
              <div className="mx-auto mb-6 flex justify-center">
                <Image
                  src="/Bilder/avatar.png"
                  alt="Larry, BASEDtechs pingvinmaskot"
                  width={88}
                  height={88}
                  className="h-[88px] w-[88px] rounded-full border border-[rgba(44,228,212,0.35)] object-cover shadow-[0_12px_40px_rgba(44,228,212,0.2)]"
                />
              </div>
              <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#0F9E8E]">
                MÖT LARRY
              </p>
              <h2 className="mt-4 font-h text-[clamp(3rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[0.01em] text-[#EEF7F6]">
                En pingvin med
                <br />
                <span className="text-[#2CE4D4]">många talanger.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-[560px] font-b text-base font-light leading-[1.8] text-[rgba(238,247,246,0.65)]">
                Larry är mer än en maskot. Han representerar allt vi gör för dig
                varje dag. Smart, snabb och alltid på plats.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 min-[700px]:max-lg:grid-cols-2 lg:grid-cols-12 lg:gap-6">
              <article
                className={`group relative flex min-h-[380px] flex-col overflow-hidden rounded-[20px] border border-[rgba(44,228,212,0.25)] bg-[rgba(44,228,212,0.06)] max-lg:col-span-1 min-[700px]:max-lg:col-span-2 lg:col-span-5 lg:row-span-2 lg:h-[460px] lg:min-h-0 ${bentoHover}`}
              >
                <div className="relative w-full shrink-0 overflow-hidden rounded-t-[20px] border-b border-[rgba(44,228,212,0.12)] lg:min-h-0 lg:flex-[1_1_54%]">
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
                  <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#0F9E8E]">
                    THE ANALYST
                  </p>
                  <h3 className="mt-2 font-h text-[1.6rem] font-extrabold leading-tight text-[#EEF7F6]">
                    Larry analyserar.
                  </h3>
                  <p className="mt-2 font-b text-[0.875rem] font-light leading-relaxed text-[rgba(238,247,246,0.65)]">
                    Realtidsdata, KPIer och ekonomiska trender. Larry har koll på
                    allt medan du fokuserar på att växa.
                  </p>
                </div>
              </article>
              <article
                className={`group relative flex min-h-[260px] flex-col overflow-hidden rounded-[20px] border border-[rgba(44,228,212,0.18)] bg-[rgba(255,255,255,0.03)] max-lg:col-span-1 min-[700px]:max-lg:col-span-2 lg:col-span-4 lg:col-start-6 lg:row-start-1 ${bentoHover}`}
              >
                <div className="relative w-full shrink-0 overflow-hidden rounded-t-[20px] border-b border-[rgba(44,228,212,0.1)]">
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
                  <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#0F9E8E]">
                    THE AUTOMATOR
                  </p>
                  <h3 className="mt-2 font-h text-[1.3rem] font-extrabold leading-tight text-[#EEF7F6]">
                    Larry automatiserar.
                  </h3>
                  <p className="mt-2 font-b text-[0.8rem] font-light leading-relaxed text-[rgba(238,247,246,0.6)]">
                    Fakturor, kvitton, avstämningar. Automatiskt. Alltid.
                  </p>
                </div>
              </article>
              <article
                className={`group relative flex min-h-[260px] flex-col overflow-hidden rounded-[20px] border border-[rgba(44,228,212,0.3)] bg-[rgba(44,228,212,0.08)] max-lg:col-span-1 min-[700px]:max-lg:col-span-2 lg:col-span-3 lg:col-start-10 lg:row-start-1 ${bentoHover}`}
              >
                <div className="relative w-full shrink-0 overflow-hidden rounded-t-[20px] border-b border-[rgba(44,228,212,0.1)]">
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
                  <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#0F9E8E]">
                    PROBLEM SOLVER
                  </p>
                  <h3 className="mt-2 font-h text-[1.2rem] font-extrabold leading-tight text-[#EEF7F6]">
                    Larry löser det.
                  </h3>
                  <p className="mt-2 font-b text-[0.8rem] font-light leading-relaxed text-[rgba(238,247,246,0.6)]">
                    Inga problem är för stora eller för små.
                  </p>
                </div>
              </article>
              <article
                className={`group relative flex min-h-[260px] flex-col overflow-hidden rounded-[20px] border border-[rgba(44,228,212,0.18)] bg-[rgba(255,255,255,0.03)] max-lg:col-span-1 min-[700px]:max-lg:col-span-2 lg:col-span-4 lg:col-start-6 lg:row-start-2 ${bentoHover}`}
              >
                <div className="relative w-full shrink-0 overflow-hidden rounded-t-[20px] border-b border-[rgba(44,228,212,0.1)]">
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
                  <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#0F9E8E]">
                    THE ADVISOR
                  </p>
                  <h3 className="mt-2 font-h text-[1.3rem] font-extrabold leading-tight text-[#EEF7F6]">
                    Larry rådgiver.
                  </h3>
                  <p className="mt-2 font-b text-[0.8rem] font-light leading-relaxed text-[rgba(238,247,246,0.6)]">
                    Alltid redo för ett samtal. Alltid med rätt svar.
                  </p>
                </div>
              </article>
              <article
                className={`group relative flex min-h-[260px] flex-col overflow-hidden rounded-[20px] border border-[rgba(44,228,212,0.2)] bg-[rgba(44,228,212,0.05)] max-lg:col-span-1 min-[700px]:max-lg:col-span-2 lg:col-span-3 lg:col-start-10 lg:row-start-2 ${bentoHover}`}
              >
                <div className="relative w-full shrink-0 overflow-hidden rounded-t-[20px] border-b border-[rgba(44,228,212,0.1)]">
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
                  <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#0F9E8E]">
                    TECH WIZARD
                  </p>
                  <h3 className="mt-2 font-h text-[1.2rem] font-extrabold leading-tight text-[#EEF7F6]">
                    Larry trollar.
                  </h3>
                  <p className="mt-2 font-b text-[0.8rem] font-light leading-relaxed text-[rgba(238,247,246,0.6)]">
                    Tekniken är komplex. Resultatet är enkelt.
                  </p>
                </div>
              </article>
              <article
                className={`group rounded-[20px] border border-[rgba(44,228,212,0.25)] bg-[rgba(44,228,212,0.06)] p-12 max-lg:col-span-1 min-[700px]:max-lg:col-span-2 lg:col-span-12 lg:row-start-3 ${bentoHover}`}
              >
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12">
                  <div className="relative mx-auto w-full max-w-[400px]">
                    <div
                      className="overflow-hidden rounded-[22px] shadow-[0_28px_56px_rgba(0,0,0,0.35)] ring-1 ring-[rgba(44,228,212,0.18)]"
                      style={{
                        background:
                          "linear-gradient(145deg, rgba(44,228,212,0.2) 0%, rgba(8,34,32,0.95) 42%, #051916 100%)",
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
                          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[28%] bg-gradient-to-t from-[rgba(8,34,32,0.85)] to-transparent"
                          aria-hidden
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#0F9E8E]">
                      THE TEAM PLAYER
                    </p>
                    <h3 className="mt-4 font-h text-[2.5rem] font-extrabold leading-[1.1] text-[#EEF7F6]">
                      Larry jobbar aldrig ensam.
                    </h3>
                    <p className="mt-4 font-b text-base font-light leading-[1.8] text-[rgba(238,247,246,0.65)]">
                      Bakom Larry finns David och Johan. Två personer med 20 års
                      erfarenhet i byråvärlden som ser till att tekniken faktiskt
                      levererar det den lovar. Larry sköter automagin. David och
                      Johan sköter relationen.
                    </p>
                    <div className="my-8 border-t border-[rgba(44,228,212,0.15)]" />
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
                          <p className="font-h text-base font-semibold text-[#EEF7F6]">
                            Johan Adamsson
                          </p>
                          <p className="font-b text-[0.8rem] font-light text-[rgba(238,247,246,0.5)]">
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
                          <p className="font-h text-base font-semibold text-[#EEF7F6]">
                            David Olsen
                          </p>
                          <p className="font-b text-[0.8rem] font-light text-[rgba(238,247,246,0.5)]">
                            Grundare och rådgivare
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/kontakt"
                      className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#0F9E8E] px-10 py-4 font-h text-base font-bold text-[#082220] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2CE4D4]"
                    >
                      Boka ett möte med David och Johan
                    </Link>
                  </div>
                </div>
              </article>
            </div>
            <div className="mx-auto mt-16 flex max-w-[160px] justify-center opacity-90">
              <Image
                src="/Loga-basedtech.png"
                alt="BASEDtech Sweden AB logotyp"
                width={160}
                height={48}
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
