import type { Metadata } from "next";
import Image from "next/image";
import { IconMail14, IconPhone14 } from "@/app/components/icons";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";

export const metadata: Metadata = {
  title: "Kontakt · BASEDtech",
  description:
    "Träffa teamet bakom BASEDtech Sweden AB. David Olsen och Johan Adamsson.",
};

const borderStyle = { borderColor: "var(--based-border)" } as const;

function LinkedInConnectLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-0 border-none bg-[#0A66C2] px-7 py-[0.85rem] font-h text-base font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0856A8]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        viewBox="0 0 24 24"
        fill="white"
        aria-hidden
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
      Connect på LinkedIn
    </a>
  );
}

export default function KontaktPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section
          className="relative overflow-hidden px-8 pb-[5rem] pt-40"
          style={{
            background:
              "linear-gradient(135deg, #EFF9F5 0%, #E8F4F8 50%, #F0EDF8 100%)",
          }}
          aria-label="Kontakt intro"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-[min(70vw,420px)] w-[min(70vw,420px)] translate-x-1/4 -translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(45,224,165,0.14)_0%,rgba(125,212,240,0.12)_45%,transparent_70%)]" aria-hidden />
          <div className="relative z-[1] mx-auto max-w-[780px] text-center">
            <p className="mb-6 inline-block font-h text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-based-cyan">
              Teamet bakom BASEDtech
            </p>
            <h1 className="font-h text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[0.01em] text-based-heading">
              Vi är enkla att nå. Och ännu enklare att prata med.
            </h1>
            <p className="mt-8 font-b text-[1.05rem] font-light leading-[1.8] text-based-body">
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
                  <LinkedInConnectLink href="https://www.linkedin.com/in/david-olsen-075343220/" />
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
                  <LinkedInConnectLink href="https://www.linkedin.com/in/johan-adamsson-071957152/" />
                </div>
              </div>
            </article>
          </div>
        </section>
        <section
          className="bg-based-mist px-8 py-20 text-center sm:py-24"
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
