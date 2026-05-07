import Image from "next/image";
import Link from "next/link";
import { IconLinkedIn20, IconMail14, IconPhone14 } from "./icons";

const companyLinks = [
  { href: "/#om-oss", label: "Om oss" },
  { href: "/#tjanster", label: "Tjänster" },
  { href: "/kontakt", label: "Kontakt" },
];

const legalLinks = [
  { href: "/integritetspolicy", label: "Integritetspolicy" },
  { href: "/anvandarvillkor", label: "Användarvillkor" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="border-t-2 border-[#0EA5C9]"
      style={{ background: "linear-gradient(160deg, #F7FAFB 0%, #EBF5F9 100%)" }}
    >
      <div className="mx-auto max-w-[1160px] px-6 pb-8 pt-14 sm:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex shrink-0 transition-opacity hover:opacity-90">
              <Image
                src="/Bilder/basedlogga1.png"
                alt="BASEDtech Sweden AB logotyp"
                width={900}
                height={565}
                className="h-[70px] w-auto object-contain object-left"
                style={{ mixBlendMode: "multiply" }}
              />
            </Link>
            <p className="text-sm text-gray-500">Automagi för din ekonomi.</p>
            <p className="text-xs italic text-gray-400">
              Vi arbetar med klienter över hela Norden med fokus på digital
              ekonomiautomation.
            </p>
            <a
              href="https://www.linkedin.com/company/basedtech-sweden-ab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BASEDtech på LinkedIn"
              className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#BAE6F7] text-[#2D4A5F] transition-colors hover:border-[#0EA5C9] hover:text-[#0EA5C9]"
            >
              <IconLinkedIn20 className="h-4 w-4" />
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#0EA5C9]">
              Företaget
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group relative inline-block text-sm text-[#2D4A5F] transition-colors hover:text-[#0EA5C9]"
                  >
                    {l.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#0EA5C9] transition-all duration-200 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#0EA5C9]">
              Kontakt
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:0733017339"
                  className="flex items-center gap-2 text-sm text-[#2D4A5F] transition-colors hover:text-[#0EA5C9]"
                >
                  <IconPhone14 className="shrink-0 text-[#0EA5C9]" />
                  073-301 73 39
                </a>
              </li>
              <li>
                <a
                  href="mailto:hej@basedtech.se"
                  className="flex items-center gap-2 text-sm text-[#2D4A5F] transition-colors hover:text-[#0EA5C9]"
                >
                  <IconMail14 className="shrink-0 text-[#0EA5C9]" />
                  hej@basedtech.se
                </a>
              </li>
            </ul>
            <Link
              href="/kontakt"
              className="mt-1 inline-flex w-fit items-center rounded-full bg-[#0EA5C9] px-6 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#0891B2]"
            >
              Ta ett snack
            </Link>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-[#BAE6F7] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-gray-400">
            © {year} BASEDtech Sweden AB · Org.nr 559535-2286 · Östra Längdgatan 5, 611 39 Nyköping
          </span>
          <div className="flex items-center gap-4">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-gray-400 transition-colors hover:text-[#0EA5C9]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
