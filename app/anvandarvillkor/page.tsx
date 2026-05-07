import type { Metadata } from "next";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";

export const metadata: Metadata = {
  title: "Användarvillkor · BASEDtech",
  description: "Användarvillkor för BASEDtech Sweden AB.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 font-h text-xl font-bold text-[#0D2137]">{title}</h2>
      <div className="space-y-3 text-[#2D4A5F]">{children}</div>
    </section>
  );
}

export default function AnvandarvillkorPage() {
  return (
    <>
      <SiteHeader />
      <main style={{ background: "#F7FAFB" }}>
        <div className="mx-auto max-w-3xl px-6 py-24">
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-widest text-[#0EA5C9]">
            Juridisk information
          </p>
          <h1 className="mb-3 font-h text-[clamp(2rem,4vw,2.8rem)] font-bold leading-tight text-[#0D2137]">
            Användarvillkor
          </h1>
          <p className="mb-12 text-sm text-[#2D4A5F]">
            Senast uppdaterad: maj 2026
          </p>
          <Section title="1. Om tjänsten">
            <p>
              Dessa användarvillkor gäller för tjänster tillhandahållna av
              BASEDtech Sweden AB, org.nr 559535-2286, Östra Längdgatan 5,
              611 39 Nyköping.
            </p>
            <p>
              BASEDtech erbjuder tjänster inom bokföring, ekonomiautomation,
              systemimplementering och ekonomisk rådgivning till företag och
              organisationer.
            </p>
          </Section>
          <Section title="2. Avtalets ingående">
            <p>
              Avtal ingås skriftligen eller via e-post och specificerar
              uppdragets omfattning, pris och löptid. Dessa allmänna villkor
              utgör en del av avtalet.
            </p>
            <p>
              Ingen tjänst påbörjas utan skriftlig bekräftelse från båda parter.
            </p>
          </Section>
          <Section title="3. Tjänsternas omfattning">
            <p>Beroende på avtal kan tjänsterna inkludera:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Löpande bokföring och bokslut</li>
              <li>Implementering av ekonomisystem och automatiseringsverktyg</li>
              <li>Utbildning av personal i ekonomisystem</li>
              <li>Ekonomisk rådgivning och uppföljning</li>
              <li>Rapportframtagning och analys</li>
            </ul>
          </Section>
          <Section title="4. Betalningsvillkor">
            <p>
              Priser avtalas individuellt och framgår av offert eller uppdragsavtal.
              Fakturering sker enligt överenskommelse, normalt månadsvis eller
              per uppdrag.
            </p>
            <p>
              Betalningsvillkor är 30 dagar netto om inget annat avtalats.
              Vid försenad betalning utgår dröjsmålsränta enligt räntelagen.
            </p>
          </Section>
          <Section title="5. Parternas åtaganden">
            <p>
              BASEDtech åtar sig att utföra avtalade tjänster med professionell
              omsorg och i enlighet med gällande lagstiftning.
            </p>
            <p>
              Kunden åtar sig att tillhandahålla nödvändigt underlag och
              information i tid samt att utse en kontaktperson för uppdraget.
            </p>
          </Section>
          <Section title="6. Ansvarsbegränsning">
            <p>
              BASEDtech ansvarar inte för skador som uppstår till följd av
              felaktigt eller ofullständigt underlag från kunden, force majeure,
              eller omständigheter utanför BASEDtechs kontroll.
            </p>
            <p>
              BASEDtechs totala skadeståndsansvar gentemot kunden är begränsat
              till det belopp som fakturerats för det aktuella uppdraget under
              de senaste tre månaderna.
            </p>
          </Section>
          <Section title="7. Sekretess">
            <p>
              Båda parter förbinder sig att behandla varandras affärsinformation
              konfidentiellt. BASEDtech hanterar alla kunduppgifter i enlighet
              med GDPR och vår integritetspolicy.
            </p>
          </Section>
          <Section title="8. Immateriella rättigheter">
            <p>
              Allt material, metoder, mallar och verktyg som BASEDtech
              tillhandahåller inom ramen för uppdraget tillhör BASEDtech Sweden
              AB, om inget annat avtalats skriftligen.
            </p>
            <p>
              Kunden erhåller en icke-exklusiv nyttjanderätt till levererat
              material under avtalstiden.
            </p>
          </Section>
          <Section title="9. Uppsägning">
            <p>
              Löpande avtal kan sägas upp med 30 dagars skriftlig varsel om
              inget annat avtalats. Påbörjat arbete faktureras i sin helhet.
            </p>
          </Section>
          <Section title="10. Tillämplig lag och tvist">
            <p>
              Dessa villkor regleras av svensk lag. Eventuella tvister ska i
              första hand lösas genom förhandling. Om parterna inte kan enas
              avgörs tvisten av svensk allmän domstol med Nyköpings tingsrätt
              som första instans.
            </p>
          </Section>
          <Section title="11. Kontakt">
            <p>
              Frågor om dessa villkor besvaras av BASEDtech Sweden AB på{" "}
              <a
                href="mailto:hej@basedtech.se"
                className="text-[#0EA5C9] hover:underline"
              >
                hej@basedtech.se
              </a>
              .
            </p>
          </Section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
