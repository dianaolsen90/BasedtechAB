import type { Metadata } from "next";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";

export const metadata: Metadata = {
  title: "Integritetspolicy · BASEDtech",
  description: "Integritetspolicy för BASEDtech Sweden AB.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 font-h text-xl font-bold text-[#0D2137]">{title}</h2>
      <div className="space-y-3 text-[#2D4A5F]">{children}</div>
    </section>
  );
}

export default function IntegritetspolicyPage() {
  return (
    <>
      <SiteHeader />
      <main style={{ background: "#F7FAFB" }}>
        <div className="mx-auto max-w-3xl px-6 py-24">
          <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-widest text-[#0EA5C9]">
            Juridisk information
          </p>
          <h1 className="mb-3 font-h text-[clamp(2rem,4vw,2.8rem)] font-bold leading-tight text-[#0D2137]">
            Integritetspolicy
          </h1>
          <p className="mb-12 text-sm text-[#2D4A5F]">
            Senast uppdaterad: maj 2026
          </p>
          <Section title="1. Personuppgiftsansvarig">
            <p>
              BASEDtech Sweden AB, org.nr 559535-2286, är personuppgiftsansvarig
              för behandlingen av dina personuppgifter.
            </p>
            <p>
              Adress: Östra Längdgatan 5, 611 39 Nyköping
              <br />
              E-post:{" "}
              <a
                href="mailto:hej@basedtech.se"
                className="text-[#0EA5C9] hover:underline"
              >
                hej@basedtech.se
              </a>
            </p>
          </Section>
          <Section title="2. Vilka uppgifter vi samlar in">
            <p>Vi samlar in följande personuppgifter när du kontaktar oss:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Namn</li>
              <li>E-postadress</li>
              <li>Telefonnummer</li>
              <li>Företagsnamn (om tillämpligt)</li>
              <li>Meddelanden och ärenden du skickar till oss</li>
            </ul>
            <p>
              Vi samlar inte in fler uppgifter än vad som är nödvändigt för att
              kunna hantera din förfrågan.
            </p>
          </Section>
          <Section title="3. Varför vi samlar in uppgifterna">
            <p>Dina uppgifter används för att:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Besvara förfrågningar och ta kontakt med dig</li>
              <li>Upprätta och skicka offert</li>
              <li>Tillhandahålla support och rådgivning</li>
              <li>Fullgöra avtal om tjänster</li>
            </ul>
            <p>
              Den rättsliga grunden för behandlingen är antingen fullgörande av
              avtal (GDPR art. 6.1b) eller berättigat intresse (GDPR art.
              6.1f).
            </p>
          </Section>
          <Section title="4. Hur länge vi sparar uppgifterna">
            <p>
              Vi sparar dina personuppgifter i maximalt 24 månader efter
              senaste kontakttillfälle, om inte annat avtalats eller krävs
              enligt lag (t.ex. bokföringslagen).
            </p>
          </Section>
          <Section title="5. Tredje part">
            <p>
              Vi säljer, hyr ut eller delar aldrig dina personuppgifter med
              tredje part i marknadsföringssyfte.
            </p>
            <p>
              Uppgifter kan delas med underleverantörer som hjälper oss att
              driva vår verksamhet (t.ex. e-posttjänster), under förutsättning
              att dessa behandlar uppgifter enligt GDPR och på våra instruktioner.
            </p>
          </Section>
          <Section title="6. Dina rättigheter">
            <p>Enligt GDPR har du rätt att:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Tillgång</strong> – begära ett utdrag av de uppgifter vi
                har om dig
              </li>
              <li>
                <strong>Rättelse</strong> – begära att felaktiga uppgifter korrigeras
              </li>
              <li>
                <strong>Radering</strong> – begära att dina uppgifter raderas
                ("rätten att bli glömd")
              </li>
              <li>
                <strong>Begränsning</strong> – begära begränsad behandling i
                vissa fall
              </li>
              <li>
                <strong>Invändning</strong> – invända mot behandling baserad på
                berättigat intresse
              </li>
              <li>
                <strong>Dataportabilitet</strong> – få ut dina uppgifter i ett
                maskinläsbart format
              </li>
            </ul>
            <p>
              För att utöva dina rättigheter, kontakta oss på{" "}
              <a
                href="mailto:hej@basedtech.se"
                className="text-[#0EA5C9] hover:underline"
              >
                hej@basedtech.se
              </a>
              . Vi svarar inom 30 dagar.
            </p>
          </Section>
          <Section title="7. Cookies">
            <p>
              Vår webbplats använder nödvändiga cookies för att webbplatsen ska
              fungera korrekt. Vi använder även analytiska cookies om du
              samtycker till det. Du kan när som helst ändra ditt samtycke via
              cookieinställningarna.
            </p>
          </Section>
          <Section title="8. Klagomål">
            <p>
              Om du anser att vi behandlar dina personuppgifter felaktigt har du
              rätt att lämna in ett klagomål till Integritetsskyddsmyndigheten
              (IMY) på{" "}
              <a
                href="https://www.imy.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0EA5C9] hover:underline"
              >
                www.imy.se
              </a>
              .
            </p>
          </Section>
          <Section title="9. Kontakt">
            <p>
              Frågor om denna policy besvaras av BASEDtech Sweden AB på{" "}
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
