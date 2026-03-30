import type { Metadata } from "next";
import Image from "next/image";
import {
  IconLinkedIn14,
  IconLinkedIn20,
  IconMail14,
  IconPhone14,
} from "@/app/components/icons";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";

export const metadata: Metadata = {
  title: "Kontakt · BASEDtech",
  description:
    "Träffa teamet bakom BASEDtech Sweden AB. David Olsen och Johan Adamsson.",
};

const borderStyle = { borderColor: "var(--based-border)" } as const;

export default function KontaktPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section
          className="relative overflow-hidden bg-[#082220] px-8 pb-[5rem] pt-40"
          aria-label="Kontakt intro"
        >
          <div className="aurora-wrap" aria-hidden>
            <div className="aurora-band aurora-1" />
            <div className="aurora-band aurora-2" />
            <div className="aurora-band aurora-3" />
            <div className="aurora-band aurora-4" />
          </div>
          <div className="relative z-[1] mx-auto max-w-[780px] text-center">
            <p className="mb-6 inline-block font-h text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[rgba(238,247,246,0.85)]">
              Teamet bakom BASEDtech
            </p>
            <h1 className="font-h text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[0.01em] text-[#EEF7F6]">
              Vi är enkla att nå. Och ännu enklare att prata med.
            </h1>
            <p className="mt-8 font-b text-[1.05rem] font-light leading-[1.8] text-[rgba(238,247,246,0.75)]">
              Vi tror på korta vägar och raka svar. Oavsett om du har en specifik
              fråga, vill boka en kostnadsfri analys eller bara vill se om vi
              passar ihop, hör av dig direkt till oss. Inga mellanhänder, inga
              formulär som försvinner i en inkorg. Du pratar med oss från dag
              ett.
            </p>
          </div>
        </section>
        <section
          className="bg-based-white py-16 pl-8 pr-8 sm:py-24"
          aria-label="Team"
        >
          <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-12 nav:grid-cols-2">
            <article
              className="overflow-hidden rounded-2xl border bg-based-white shadow-sm"
              style={borderStyle}
            >
              <div className="relative w-full max-h-[420px] overflow-hidden rounded-t-2xl">
                <Image
                  src="/Bilder/davidolsenprofilbild.jpg"
                  alt="Porträtt av David Olsen"
                  width={960}
                  height={560}
                  className="h-full max-h-[420px] w-full rounded-t-2xl object-cover object-top"
                  sizes="(max-width: 700px) 100vw, 480px"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 top-1/2 rounded-t-2xl"
                  style={{
                    background:
                      "linear-gradient(transparent, rgba(8,34,32,0.4))",
                  }}
                  aria-hidden
                />
              </div>
              <div className="p-8">
                <h2 className="font-h text-[2rem] font-extrabold leading-tight tracking-[0.01em] text-based-heading">
                  David Olsen
                </h2>
                <p className="mt-2 font-h text-sm font-semibold uppercase tracking-[0.14em] text-based-cyan">
                  Grundare och rådgivare
                </p>
                <p className="mt-4 font-b text-[1.05rem] font-light leading-[1.8] text-based-body">
                  David har tillbringat över 20 år i byråvärlden och sett precis
                  vad som händer när ekonomihanteringen inte hänger med
                  verksamhetens tempo. Han startade BASEDtech för att det finns
                  ett bättre sätt. Konkret, personligt och utan onödig krångel.
                  Hör av dig direkt så svarar David inom kort.
                </p>
                <div
                  className="mt-6 border-t pt-6"
                  style={{ borderColor: "var(--based-border)" }}
                >
                  <a
                    href="tel:0733017339"
                    className="mb-4 flex items-center gap-2.5 font-b text-[1.05rem] font-light text-based-body transition hover:text-based-cyan"
                  >
                    <IconPhone14 className="shrink-0 text-based-cyan" />
                    073-301 73 39
                  </a>
                  <a
                    href="mailto:david.olsen@basedtech.se"
                    className="mb-4 flex items-center gap-2.5 font-b text-[1.05rem] font-light text-based-body transition hover:text-based-cyan"
                  >
                    <IconMail14 className="shrink-0 text-based-cyan" />
                    david.olsen@basedtech.se
                  </a>
                  <a
                    href="https://www.linkedin.com/in/david-olsen-075343220/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 font-b text-[1.05rem] font-light text-based-body transition hover:text-based-cyan"
                  >
                    <IconLinkedIn14 className="shrink-0 text-based-cyan" />
                    linkedin.com/in/david-olsen-075343220
                  </a>
                  <a
                    href="https://www.linkedin.com/in/david-olsen-075343220/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#0A66C2] px-7 py-[0.85rem] font-h text-sm font-semibold text-white transition hover:opacity-[0.85]"
                  >
                    <IconLinkedIn20 className="text-white" />
                    Se profil på LinkedIn
                  </a>
                </div>
              </div>
            </article>
            <article
              className="overflow-hidden rounded-2xl border bg-based-white shadow-sm"
              style={borderStyle}
            >
              <div className="relative w-full max-h-[420px] overflow-hidden rounded-t-2xl">
                <Image
                  src="/Bilder/adamprofil.jpg"
                  alt="Porträtt av Johan Adamsson"
                  width={960}
                  height={560}
                  className="h-full max-h-[420px] w-full rounded-t-2xl object-cover object-top"
                  sizes="(max-width: 700px) 100vw, 480px"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 top-1/2 rounded-t-2xl"
                  style={{
                    background:
                      "linear-gradient(transparent, rgba(8,34,32,0.4))",
                  }}
                  aria-hidden
                />
              </div>
              <div className="p-8">
                <h2 className="font-h text-[2rem] font-extrabold leading-tight tracking-[0.01em] text-based-heading">
                  Johan Adamsson
                </h2>
                <p className="mt-2 font-h text-sm font-semibold uppercase tracking-[0.14em] text-based-cyan">
                  Partner och implementerare
                </p>
                <p className="mt-4 font-b text-[1.05rem] font-light leading-[1.8] text-based-body">
                  Johan är den som ser till att allt faktiskt fungerar i
                  praktiken. Han tar systemet från idé till vardag, utbildar
                  teamet och finns kvar tills det sitter. Med ett öga för
                  detaljer och ett genuint intresse för att hitta den smartaste
                  lösningen är Johan personen du vill ha vid din sida när
                  förändringen väl sätter igång.
                </p>
                <div
                  className="mt-6 border-t pt-6"
                  style={{ borderColor: "var(--based-border)" }}
                >
                  <a
                    href="tel:0733017339"
                    className="mb-4 flex items-center gap-2.5 font-b text-[1.05rem] font-light text-based-body transition hover:text-based-cyan"
                  >
                    <IconPhone14 className="shrink-0 text-based-cyan" />
                    073-301 73 39
                  </a>
                  <a
                    href="mailto:johan.adamsson@basedtech.se"
                    className="mb-4 flex items-center gap-2.5 font-b text-[1.05rem] font-light text-based-body transition hover:text-based-cyan"
                  >
                    <IconMail14 className="shrink-0 text-based-cyan" />
                    johan.adamsson@basedtech.se
                  </a>
                  <a
                    href="https://www.linkedin.com/in/johan-adamsson-071957152/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 font-b text-[1.05rem] font-light text-based-body transition hover:text-based-cyan"
                  >
                    <IconLinkedIn14 className="shrink-0 text-based-cyan" />
                    linkedin.com/in/johan-adamsson-071957152
                  </a>
                  <a
                    href="https://www.linkedin.com/in/johan-adamsson-071957152/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#0A66C2] px-7 py-[0.85rem] font-h text-sm font-semibold text-white transition hover:opacity-[0.85]"
                  >
                    <IconLinkedIn20 className="text-white" />
                    Se profil på LinkedIn
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section
          className="bg-based-section px-8 py-20 text-center sm:py-24"
          aria-label="Boka analys"
        >
          <div className="mx-auto max-w-[640px]">
            <p className="mb-4 font-h text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-based-cyan">
              Kostnadsfri analys
            </p>
            <h2 className="font-h text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-[0.01em] text-based-heading">
              Redo att effektivisera din ekonomi?
            </h2>
            <p className="mt-4 font-b text-[1.05rem] font-light leading-[1.8] text-based-body">
              Vi erbjuder alltid en kostnadsfri och förutsättningslös analys av
              er ekonomihantering. Ingen bindningstid, inga konstigheter.
            </p>
            <a
              href="mailto:david.olsen@basedtech.se"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-based-cyan px-8 py-3 font-b text-sm font-medium text-based-heading transition hover:-translate-y-0.5 hover:bg-based-cyan-bright"
            >
              Boka ett samtal
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
