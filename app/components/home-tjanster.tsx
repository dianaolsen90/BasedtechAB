import { IconBroom, IconCheckSmall, IconStar, IconZap } from "@/app/components/icons";

const tHover =
  "transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-2 hover:border-[rgba(45,224,165,0.45)] hover:shadow-[0_24px_48px_rgba(26,61,53,0.08)]";

const toolHover =
  "transition-all duration-[350ms] hover:-translate-y-[5px] hover:border-[rgba(45,224,165,0.35)] hover:bg-[rgba(45,224,165,0.04)]";

const urgencyStats = [
  "Sparar i snitt 8 timmar per vecka",
  "Bokföringsfel minskar med 94%",
  "Kostnadsfri analys inom 48 timmar",
];

const serviceCards = [
  {
    num: "01",
    topBg: "bg-[rgba(45,224,165,0.1)]",
    Icon: IconBroom,
    title: "Vi städar",
    subtitle: "Avstämningar och kvalitetssäkring",
    body:
      "Fel i bokföringen blir nästan alltid dyrare över tid. Vi går igenom nuläget, hittar felen och ser till att du har en korrekt grund att stå på. När grunden är rätt kan vi automatisera resten på ett tryggt sätt.",
    steps: [
      "Genomgång av befintlig bokföring",
      "Identifiering av fel och avvikelser",
      "Korrekt grund på plats",
    ],
    fomo:
      "När grunden är rätt blir rapporter, moms och bokslut betydligt enklare.",
    badges: ["Korrekt", "Snabbt", "Tryggt"],
  },
  {
    num: "02",
    topBg: "bg-[rgba(125,212,240,0.18)]",
    Icon: IconZap,
    title: "Automagi",
    subtitle: "Automatiserad bokföring",
    body:
      "De flesta tidstjuvar i bokföringen är återkommande. Vi sätter upp automation som tar hand om flödena och bygger kontroller som minskar fel. Du får en process som faktiskt håller, månad efter månad.",
    steps: [
      "Kartläggning av dina ekonomiflöden",
      "Implementation av rätt automationsverktyg",
      "Du kör på full automagi",
    ],
    fomo:
      "Målet är enkelt: mindre manuellt jobb och bättre beslutsunderlag.",
    badges: ["8h sparad per vecka", "AI-drivet", "Realtid"],
  },
  {
    num: "03",
    topBg: "bg-[rgba(240,237,248,0.65)]",
    Icon: IconStar,
    title: "Skräddarsytt",
    subtitle: "Anpassade lösningar",
    body:
      "Det som fungerar i ett bolag fungerar inte alltid i ett annat. Vi börjar med att förstå hur ni jobbar och bygger en lösning som passar era flöden. Skräddarsytt efter ditt behov, utan onödigt krångel.",
    steps: [
      "Djupdykning i din verksamhet",
      "Skräddarsydd lösning tas fram",
      "Löpande support och optimering",
    ],
    fomo:
      "Du får en lösning som är lätt att äga och enkel att bygga vidare på.",
    badges: ["Unikt för dig", "Flexibelt", "Skalbart"],
  },
] as const;

const tools = [
  {
    badge: "REDA",
    cat: "SMART FAKTURAHANTERING",
    name: "REDA",
    text: "AI som lär sig dina fakturaflöden och hanterar dem automatiskt. Sätter egna kontrollregler så du slipper kolla fakturor som redan är korrekta.",
    usp: "Sparar 3 till 5 timmar fakturahantering per vecka",
  },
  {
    badge: "AI",
    cat: "DIGITAL EKONOMIASSISTENT",
    name: "Lerry.ai",
    text: "En AI som aldrig sover, aldrig missar en transaktion och alltid följer Skatteverkets regler. Budget, analys och rapporter på nolltid. Din ekonomiassistent för en bråkdel av kostnaden.",
    usp: "Ekonomianalys på under 30 sekunder",
  },
  {
    badge: "MYNT",
    cat: "ENKELT MED KORTKÖP",
    name: "Mynt",
    text: "Foto på kvittot direkt vid köpet. Klart. Inga kvittohögar, inga borttappade underlag och inga stressade bokslut. Kopplas till Google Pay och Apple Pay.",
    usp: "Noll borttappade kvitton",
  },
  {
    badge: "FLD",
    cat: "PROJEKTREDOVISNING",
    name: "Fieldly",
    text: "Bygg- och installationsbolag slösar i snitt 20% av projekttiden på administration. Fieldly tar hand om projektflödena automatiskt och kopplar direkt till ditt affärssystem.",
    usp: "20% mindre administrativ tid per projekt",
  },
] as const;

export function HomeTjansterSection() {
  return (
    <section id="tjanster" className="reveal scroll-mt-[84px]">
      <div className="relative overflow-hidden bg-based-mist px-8 py-36">
        <div className="pointer-events-none absolute right-0 top-0 h-[min(60vw,480px)] w-[min(60vw,480px)] translate-x-1/4 -translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(45,224,165,0.14)_0%,rgba(125,212,240,0.1)_45%,transparent_70%)]" aria-hidden />
        <div className="relative z-[1] mx-auto max-w-container">
          <div className="mb-16 text-center">
            <div className="mb-8 flex items-center justify-center gap-3">
              <span
                className="h-px w-10 max-w-[3rem] bg-based-cyan opacity-70 sm:w-14"
                aria-hidden
              />
              <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-based-cyan">
                TJÄNSTER
              </p>
              <span
                className="h-px w-10 max-w-[3rem] bg-based-cyan opacity-70 sm:w-14"
                aria-hidden
              />
            </div>
            <h2 className="font-h text-[clamp(3rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-[0.01em] text-based-heading">
              En bokföring som fungerar
              <br />
              ska ge dig kontroll,
              <br />
              inte mer att göra.
              <br />
              <span className="text-based-cyan">Här börjar automagi.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-[600px] font-b text-[1.1rem] font-light leading-[1.8] text-based-body">
              Vi säkrar rätt grund, hittar felkällor och tar bort tidstjuvarna.
              Sedan automatiserar vi det som går att automatisera, med personlig
              service hela vägen.
            </p>
          </div>
          <div
            className="my-14 flex w-full flex-wrap items-center justify-center gap-x-16 gap-y-6 border-y border-[rgba(26,61,53,0.1)] px-8 py-8 max-lg:max-w-none max-lg:overflow-x-auto max-lg:flex-nowrap max-lg:justify-start max-lg:gap-10 max-lg:px-4"
            style={{
              background:
                "linear-gradient(90deg, rgba(45,224,165,0.06), rgba(125,212,240,0.1), rgba(240,237,248,0.35))",
            }}
          >
            {urgencyStats.map((label) => (
              <div
                key={label}
                className="flex min-w-[min(100%,280px)] shrink-0 items-center gap-3 max-lg:min-w-[260px]"
              >
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full bg-based-cyan shadow-[0_0_12px_rgba(45,224,165,0.45)] motion-safe:animate-[pulse_2s_ease-in-out_infinite]"
                  aria-hidden
                />
                <p className="font-h text-base font-semibold text-based-heading">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-24 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {serviceCards.map((c) => {
              const CardIcon = c.Icon;
              return (
                <article
                  key={c.num}
                  className={`relative flex min-h-[600px] flex-col overflow-hidden rounded-[24px] border border-[rgba(26,61,53,0.12)] bg-based-white shadow-card-tjanst ${tHover}`}
                >
                  <div
                    className={`relative min-h-[200px] px-10 pb-10 pt-10 ${c.topBg}`}
                  >
                    <span
                      className="pointer-events-none absolute right-6 top-4 font-h text-[8rem] font-extrabold leading-none text-[rgba(45,224,165,0.12)]"
                      aria-hidden
                    >
                      {c.num}
                    </span>
                    <div className="relative z-[1]">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[14px] border border-[rgba(26,61,53,0.12)] bg-based-white/80">
                        <CardIcon className="h-7 w-7 text-based-cyan" />
                      </div>
                      <h3 className="font-h text-[2.2rem] font-extrabold leading-tight text-based-heading">
                        {c.title}
                      </h3>
                      <p className="mt-2 font-h text-base font-medium text-based-muted">
                        {c.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col px-10 pb-10 pt-2">
                    <p className="font-b text-base font-light leading-[1.85] text-based-body">
                      {c.body}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {c.steps.map((s) => (
                        <li
                          key={s}
                          className="flex items-start gap-3 font-b text-[0.9rem] font-normal leading-relaxed text-based-body"
                        >
                          <IconCheckSmall className="mt-0.5 h-4 w-4 shrink-0 text-based-cyan" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 rounded-r-lg border-l-[3px] border-[rgba(255,100,100,0.35)] bg-[rgba(255,100,100,0.06)] py-4 pl-5 pr-4">
                      <p className="font-b text-[0.875rem] font-light italic leading-relaxed text-based-muted">
                        {c.fomo}
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {c.badges.map((b) => (
                        <span
                          key={b}
                          className="inline-flex rounded-full border border-[rgba(26,61,53,0.1)] bg-based-mist px-3.5 py-1 font-h text-[0.75rem] font-medium text-based-cyan"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-based-white px-8 py-32">
        <div className="mx-auto max-w-container">
          <div className="mb-16 text-center">
            <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-based-cyan">
              VERKTYGEN VI SVÄR VID
            </p>
            <h2 className="mt-6 font-h text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] text-based-heading">
              Handplockade verktyg.
              <br />
              <span className="text-based-ice">
                Testade av oss. Godkända för dig.
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl font-b text-base font-light leading-[1.8] text-based-body">
              Vi testar allt och behåller bara det bästa. Sedan kopplar vi ihop
              det så det faktiskt fungerar i din vardag.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {tools.map((t) => (
              <article
                key={t.name}
                className={`rounded-2xl border border-[rgba(26,61,53,0.1)] bg-based-mist p-10 shadow-card-tjanst ${toolHover}`}
              >
                <span className="mb-6 inline-block rounded-lg border border-[rgba(26,61,53,0.1)] bg-based-white px-4 py-2 font-h text-[0.9rem] font-bold text-based-cyan">
                  {t.badge}
                </span>
                <p className="font-h text-[0.7rem] font-medium uppercase tracking-[0.1em] text-based-muted">
                  {t.cat}
                </p>
                <h3 className="mt-2 font-h text-[1.8rem] font-extrabold text-based-heading">
                  {t.name}
                </h3>
                <p className="mt-4 font-b text-[0.9rem] font-light leading-[1.75] text-based-body">
                  {t.text}
                </p>
                <div className="mt-6 flex items-center gap-2 border-t border-[rgba(26,61,53,0.1)] pt-6">
                  <IconZap className="h-4 w-4 shrink-0 text-based-ice" />
                  <p className="font-b text-[0.85rem] font-normal text-based-muted">
                    {t.usp}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
