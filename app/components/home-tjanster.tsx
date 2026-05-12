import { IconBroom, IconCheckSmall, IconStar, IconZap } from "@/app/components/icons";

const polarCard =
  "rounded-[24px] border-[0.5px] border-[rgba(125,212,240,0.18)] bg-[rgba(255,255,255,0.04)] shadow-card-tjanst";

const tHover =
  "transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-2 hover:border-[rgba(125,212,240,0.28)] hover:shadow-[0_24px_48px_rgba(0,20,40,0.45)]";

const toolHover =
  "transition-all duration-[350ms] hover:-translate-y-[5px] hover:border-[rgba(125,212,240,0.25)] hover:bg-[rgba(125,212,240,0.06)]";

const urgencyStats = [
  "Sparar i snitt 8 timmar per vecka",
  "Bokföringsfel minskar med 94%",
  "Kostnadsfri analys inom 48 timmar",
];

const serviceCards = [
  {
    num: "01",
    topBg: "bg-[rgba(45,224,165,0.08)]",
    topAccent: "border-t-2 border-t-[#2DE0A5]",
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
    topBg: "bg-[rgba(125,212,240,0.1)]",
    topAccent: "border-t-2 border-t-[#7DD4F0]",
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
    topBg: "bg-[rgba(168,232,245,0.08)]",
    topAccent: "border-t-2 border-t-[#A8E8F5]",
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
    subtitle: "Automatiserad fakturahantering",
    text: "AI som lär sig dina fakturaflöden och hanterar dem automatiskt. Sätter egna kontrollregler så du slipper kolla fakturor som redan är korrekta.",
    usp: "Sparar 3 till 5 timmar fakturahantering per vecka",
  },
  {
    badge: "AI",
    cat: "DIGITAL EKONOMIASSISTENT",
    name: "Lerry.ai",
    subtitle: undefined,
    text: "En AI som aldrig sover, aldrig missar en transaktion och alltid följer Skatteverkets regler. Budget, analys och rapporter på nolltid. Din ekonomiassistent för en bråkdel av kostnaden.",
    usp: "Ekonomianalys på under 30 sekunder",
  },
  {
    badge: "MYNT",
    cat: "ENKELT MED KORTKÖP",
    name: "Mynt",
    subtitle: "Företagskort med automatisk kvittohantering",
    text: "Foto på kvittot direkt vid köpet. Klart. Inga kvittohögar, inga borttappade underlag och inga stressade bokslut. Kopplas till Google Pay och Apple Pay.",
    usp: "Noll borttappade kvitton",
  },
  {
    badge: "FLD",
    cat: "PROJEKTREDOVISNING",
    name: "Fieldly",
    subtitle: "Projektredovisningssystem",
    text: "Bygg- och installationsbolag slösar i snitt 20% av projekttiden på administration. Fieldly tar hand om projektflödena automatiskt och kopplar direkt till ditt affärssystem.",
    usp: "20% mindre administrativ tid per projekt",
  },
] as const;

export function HomeTjansterSection() {
  return (
    <section id="tjanster" className="reveal scroll-mt-[84px]">
      <div className="relative overflow-hidden bg-polar-night px-4 py-16 sm:px-8 lg:py-36">
        <div className="pointer-events-none absolute right-0 top-0 h-[min(60vw,480px)] w-[min(60vw,480px)] translate-x-1/4 -translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(45,224,165,0.08)_0%,rgba(125,212,240,0.06)_45%,transparent_70%)]" aria-hidden />
        <div className="relative z-[1] mx-auto max-w-container">
          <div className="mb-8 text-center lg:mb-16">
            <div className="mb-6 flex items-center justify-center gap-3 lg:mb-8">
              <span
                className="h-px w-10 max-w-[3rem] bg-aurora-teal opacity-70 sm:w-14"
                aria-hidden
              />
              <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-aurora-teal">
                TJÄNSTER
              </p>
              <span
                className="h-px w-10 max-w-[3rem] bg-aurora-teal opacity-70 sm:w-14"
                aria-hidden
              />
            </div>
            <h2 className="font-h text-[clamp(2rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-[0.01em] text-snow-white">
              En bokföring som fungerar
              <br />
              ska ge dig kontroll,
              <br />
              inte mer att göra.
              <br />
              <span className="text-aurora-teal">Här börjar automagi.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[600px] font-b text-[1rem] font-light leading-[1.8] text-based-body sm:text-[1.1rem] lg:mt-8">
              Vi säkrar rätt grund, hittar felkällor och tar bort tidstjuvarna.
              Sedan automatiserar vi det som går att automatisera, med personlig
              service hela vägen.
            </p>
          </div>
          <div
            className="my-8 flex w-full flex-wrap items-center justify-center gap-x-16 gap-y-6 border-y border-[rgba(125,212,240,0.15)] px-4 py-6 max-lg:max-w-none max-lg:overflow-x-auto max-lg:flex-nowrap max-lg:justify-start max-lg:gap-10 sm:px-8 sm:py-8 lg:my-14"
            style={{
              background:
                "linear-gradient(90deg, rgba(45,224,165,0.06), rgba(125,212,240,0.08), rgba(168,232,245,0.06))",
            }}
          >
            {urgencyStats.map((label) => (
              <div
                key={label}
                className="flex min-w-[min(100%,280px)] shrink-0 items-center gap-3 max-lg:min-w-[260px]"
              >
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full bg-aurora-teal shadow-[0_0_12px_rgba(45,224,165,0.4)] motion-safe:animate-[pulse_2s_ease-in-out_infinite]"
                  aria-hidden
                />
                <p className="font-h text-base font-semibold text-snow-white">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:mt-24 lg:grid-cols-3 lg:gap-10">
            {serviceCards.map((c) => {
              const CardIcon = c.Icon;
              return (
                <article
                  key={c.num}
                  className={`relative flex flex-col overflow-hidden ${polarCard} ${c.topAccent} ${tHover}`}
                >
                  <div
                    className={`relative px-5 pb-6 pt-6 sm:px-10 sm:pb-10 sm:pt-10 ${c.topBg}`}
                  >
                    <span
                      className="pointer-events-none absolute right-6 top-4 font-h text-[6rem] font-extrabold leading-none text-[rgba(45,224,165,0.1)] sm:text-[8rem]"
                      aria-hidden
                    >
                      {c.num}
                    </span>
                    <div className="relative z-[1]">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] border-[0.5px] border-[rgba(125,212,240,0.18)] bg-[rgba(255,255,255,0.04)] sm:mb-6 sm:h-14 sm:w-14">
                        <CardIcon className="h-6 w-6 text-aurora-teal sm:h-7 sm:w-7" />
                      </div>
                      <h3 className="font-h text-[1.8rem] font-extrabold leading-tight text-snow-white sm:text-[2.2rem]">
                        {c.title}
                      </h3>
                      <p className="mt-2 font-h text-base font-medium text-based-muted">
                        {c.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-2 sm:px-10 sm:pb-10">
                    <p className="font-b text-base font-light leading-[1.85] text-based-card">
                      {c.body}
                    </p>
                    <ul className="mt-5 space-y-3 sm:mt-6">
                      {c.steps.map((s) => (
                        <li
                          key={s}
                          className="flex items-start gap-3 font-b text-[0.9rem] font-normal leading-relaxed text-based-card"
                        >
                          <IconCheckSmall className="mt-0.5 h-4 w-4 shrink-0 text-aurora-teal" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 rounded-r-lg border-l-[3px] border-[rgba(125,212,240,0.35)] bg-[rgba(125,212,240,0.06)] py-4 pl-5 pr-4">
                      <p className="font-b text-[0.875rem] font-light italic leading-relaxed text-based-muted">
                        {c.fomo}
                      </p>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
                      {c.badges.map((b) => (
                        <span
                          key={b}
                          className="inline-flex rounded-full border-[0.5px] border-[rgba(125,212,240,0.18)] bg-[rgba(255,255,255,0.04)] px-3.5 py-1 font-h text-[0.75rem] font-medium text-aurora-teal"
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
      <div className="bg-deep-ocean px-4 py-16 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-container">
          <div className="mb-10 text-center lg:mb-16">
            <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-aurora-teal">
              VERKTYGEN VI SVÄR VID
            </p>
            <h2 className="mt-5 font-h text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-[1.1] text-snow-white lg:mt-6">
              Handplockade verktyg.
              <br />
              <span className="text-ice-blue">
                Testade av oss. Godkända för dig.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-b text-base font-light leading-[1.8] text-based-body lg:mt-8">
              Vi testar allt och behåller bara det bästa. Sedan kopplar vi ihop
              det så det faktiskt fungerar i din vardag.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2">
            {tools.map((t, i) => {
              const accents = [
                "border-t-2 border-t-[#2DE0A5]",
                "border-t-2 border-t-[#7DD4F0]",
                "border-t-2 border-t-[#A8E8F5]",
                "border-t-2 border-t-[#2DE0A5]",
              ];
              return (
                <article
                  key={t.name}
                  className={`rounded-2xl border-[0.5px] border-[rgba(125,212,240,0.18)] bg-[rgba(255,255,255,0.04)] p-5 shadow-card-tjanst sm:p-10 ${accents[i % 4]} ${toolHover}`}
                >
                  <span className="mb-4 inline-block rounded-lg border-[0.5px] border-[rgba(125,212,240,0.18)] bg-[rgba(255,255,255,0.04)] px-4 py-2 font-h text-[0.9rem] font-bold text-aurora-teal sm:mb-6">
                    {t.badge}
                  </span>
                  <p className="font-h text-[0.7rem] font-medium uppercase tracking-[0.1em] text-based-muted">
                    {t.cat}
                  </p>
                  <h3 className="mt-2 font-h text-[1.5rem] font-extrabold text-snow-white sm:text-[1.8rem]">
                    {t.name}
                    {t.subtitle && (
                      <span className="ml-2 font-h text-[1.5rem] font-extrabold text-snow-white sm:text-[1.8rem]">
                        – {t.subtitle}
                      </span>
                    )}
                  </h3>
                  <p className="mt-4 font-b text-[0.9rem] font-light leading-[1.75] text-based-card">
                    {t.text}
                  </p>
                  <div className="mt-5 flex items-center gap-2 border-t border-[rgba(125,212,240,0.15)] pt-5 sm:mt-6 sm:pt-6">
                    <IconZap className="h-4 w-4 shrink-0 text-ice-blue" />
                    <p className="font-b text-[0.85rem] font-normal text-based-muted">
                      {t.usp}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
