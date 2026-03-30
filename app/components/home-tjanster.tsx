import { IconBroom, IconCheckSmall, IconStar, IconZap } from "@/app/components/icons";

const tHover =
  "transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-2 hover:border-[rgba(44,228,212,0.5)] hover:shadow-[0_40px_80px_rgba(44,228,212,0.08)]";

const toolHover =
  "transition-all duration-[350ms] hover:-translate-y-[5px] hover:border-[rgba(44,228,212,0.45)] hover:bg-[rgba(44,228,212,0.04)]";

const urgencyStats = [
  "Sparar i snitt 8 timmar per vecka",
  "Bokföringsfel minskar med 94%",
  "Kostnadsfri analys inom 48 timmar",
];

const serviceCards = [
  {
    num: "01",
    topBg: "bg-[rgba(44,228,212,0.06)]",
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
    topBg: "bg-[rgba(44,228,212,0.08)]",
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
    topBg: "bg-[rgba(44,228,212,0.06)]",
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
      <div className="relative overflow-hidden bg-[#082220] px-8 py-32">
        <div className="aurora-wrap" aria-hidden>
          <div className="aurora-band aurora-1" />
          <div className="aurora-band aurora-2" />
          <div className="aurora-band aurora-3" />
          <div className="aurora-band aurora-4" />
        </div>
        <div className="relative z-[1] mx-auto max-w-container">
          <div className="mb-12 text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span
                className="h-px w-10 max-w-[3rem] bg-[#0F9E8E] opacity-70 sm:w-14"
                aria-hidden
              />
              <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#0F9E8E]">
                TJÄNSTER
              </p>
              <span
                className="h-px w-10 max-w-[3rem] bg-[#0F9E8E] opacity-70 sm:w-14"
                aria-hidden
              />
            </div>
            <h2 className="font-h text-[clamp(3rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-[0.01em] text-[#EEF7F6]">
              En bokföring som fungerar
              <br />
              ska ge dig kontroll,
              <br />
              inte mer att göra.
              <br />
              <span className="text-[#2CE4D4]">Här börjar automagi.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[600px] font-b text-[1.1rem] font-light leading-[1.8] text-[rgba(238,247,246,0.7)]">
              Vi säkrar rätt grund, hittar felkällor och tar bort tidstjuvarna.
              Sedan automatiserar vi det som går att automatisera, med personlig
              service hela vägen.
            </p>
          </div>
          <div
            className="my-12 flex w-full flex-wrap items-center justify-center gap-x-16 gap-y-6 border-y border-[rgba(44,228,212,0.2)] px-8 py-6 max-lg:max-w-none max-lg:overflow-x-auto max-lg:flex-nowrap max-lg:justify-start max-lg:gap-10 max-lg:px-4"
            style={{
              background:
                "linear-gradient(90deg, rgba(44,228,212,0.05), rgba(44,228,212,0.12), rgba(44,228,212,0.05))",
            }}
          >
            {urgencyStats.map((label) => (
              <div
                key={label}
                className="flex min-w-[min(100%,280px)] shrink-0 items-center gap-3 max-lg:min-w-[260px]"
              >
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#22c55e] shadow-[0_0_12px_rgba(34,197,94,0.6)] motion-safe:animate-[pulse_2s_ease-in-out_infinite]"
                  aria-hidden
                />
                <p className="font-h text-base font-semibold text-[#EEF7F6]">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {serviceCards.map((c) => {
              const CardIcon = c.Icon;
              return (
                <article
                  key={c.num}
                  className={`relative flex min-h-[600px] flex-col overflow-hidden rounded-[24px] border border-[rgba(44,228,212,0.2)] bg-[rgba(255,255,255,0.03)] ${tHover}`}
                >
                  <div
                    className={`relative min-h-[200px] px-10 pb-10 pt-10 ${c.topBg}`}
                  >
                    <span
                      className="pointer-events-none absolute right-6 top-4 font-h text-[8rem] font-extrabold leading-none text-[rgba(44,228,212,0.08)]"
                      aria-hidden
                    >
                      {c.num}
                    </span>
                    <div className="relative z-[1]">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[14px] border border-[rgba(44,228,212,0.3)] bg-[rgba(44,228,212,0.1)]">
                        <CardIcon className="h-7 w-7 text-[#2CE4D4]" />
                      </div>
                      <h3 className="font-h text-[2.2rem] font-extrabold leading-tight text-[#EEF7F6]">
                        {c.title}
                      </h3>
                      <p className="mt-2 font-h text-base font-medium text-[#0F9E8E]">
                        {c.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col px-10 pb-10 pt-2">
                    <p className="font-b text-base font-light leading-[1.85] text-[rgba(238,247,246,0.7)]">
                      {c.body}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {c.steps.map((s) => (
                        <li
                          key={s}
                          className="flex items-start gap-3 font-b text-[0.9rem] font-normal leading-relaxed text-[rgba(238,247,246,0.7)]"
                        >
                          <IconCheckSmall className="mt-0.5 h-4 w-4 shrink-0 text-[#2CE4D4]" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 rounded-r-lg border-l-[3px] border-[rgba(255,100,100,0.4)] bg-[rgba(255,100,100,0.06)] py-4 pl-5 pr-4">
                      <p className="font-b text-[0.875rem] font-light italic leading-relaxed text-[rgba(238,247,246,0.55)]">
                        {c.fomo}
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {c.badges.map((b) => (
                        <span
                          key={b}
                          className="inline-flex rounded-full border border-[rgba(44,228,212,0.2)] bg-[rgba(44,228,212,0.08)] px-3.5 py-1 font-h text-[0.75rem] font-medium text-[#2CE4D4]"
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
      <div className="bg-[#0D2B28] px-8 py-24">
        <div className="mx-auto max-w-container">
          <div className="mb-14 text-center">
            <p className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#0F9E8E]">
              VERKTYGEN VI SVÄR VID
            </p>
            <h2 className="mt-4 font-h text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] text-[#EEF7F6]">
              Handplockade verktyg.
              <br />
              <span className="text-[#2CE4D4]">
                Testade av oss. Godkända för dig.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-b text-base font-light leading-[1.8] text-[rgba(238,247,246,0.65)]">
              Vi testar allt och behåller bara det bästa. Sedan kopplar vi ihop
              det så det faktiskt fungerar i din vardag.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {tools.map((t) => (
              <article
                key={t.name}
                className={`rounded-2xl border border-[rgba(44,228,212,0.15)] bg-[rgba(255,255,255,0.03)] p-10 ${toolHover}`}
              >
                <span className="mb-6 inline-block rounded-lg border border-[rgba(44,228,212,0.3)] bg-[rgba(44,228,212,0.1)] px-4 py-2 font-h text-[0.9rem] font-bold text-[#2CE4D4]">
                  {t.badge}
                </span>
                <p className="font-h text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[#0F9E8E]">
                  {t.cat}
                </p>
                <h3 className="mt-2 font-h text-[1.8rem] font-extrabold text-[#EEF7F6]">
                  {t.name}
                </h3>
                <p className="mt-4 font-b text-[0.9rem] font-light leading-[1.75] text-[rgba(238,247,246,0.65)]">
                  {t.text}
                </p>
                <div className="mt-6 flex items-center gap-2 border-t border-[rgba(44,228,212,0.12)] pt-6">
                  <IconZap className="h-4 w-4 shrink-0 text-[#2CE4D4]" />
                  <p className="font-b text-[0.85rem] font-normal text-[rgba(238,247,246,0.5)]">
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
