import Image from "next/image";
import Link from "next/link";
import {
  IconLinkedIn20,
  IconMapPin,
  IconMail14,
  IconPhone14,
} from "./icons";

const companyLinks = [
  { href: "/#om-oss", label: "Om oss" },
  { href: "/#meet-larry", label: "Möt Larry" },
  { href: "/karriar", label: "Karriär" },
  { href: "/blog", label: "Blog" },
];

const legalLinks = [
  { href: "/integritetspolicy", label: "Integritetspolicy" },
  { href: "/anvandarvillkor", label: "Användarvillkor" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#C8DDE9] bg-white">
      <div className="mx-auto max-w-[1160px] px-6 pb-6 pt-14 sm:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-flex shrink-0 transition-opacity hover:opacity-90">
              <Image
                src="/Bilder/1.png"
                alt="BASEDtech Sweden AB logotyp"
                width={900}
                height={565}
                className="h-[72px] w-auto object-contain object-left"
                style={{ mixBlendMode: "multiply" }}
              />
            </Link>
            <p className="max-w-[200px] text-sm leading-relaxed text-[#2E4A62]">
              Automagi för din ekonomi.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/basedtech-sweden-ab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BASEDtech på LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C8DDE9] text-[#2E4A62] transition-colors hover:border-[#0E7C6E] hover:text-[#0E7C6E]"
              >
                <IconLinkedIn20 className="h-[16px] w-[16px]" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#0E7C6E]">
              Kontor
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-[#2E4A62]">
                <IconMapPin className="mt-0.5 h-[14px] w-[14px] shrink-0 text-[#0E7C6E]" />
                <span>
                  Nyköping, Sverige
                </span>
              </li>
              <li className="text-sm leading-relaxed text-[#6B8FA8]">
                Vi arbetar med klienter över hela Norden med fokus på digital
                ekonomiautomation.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#0E7C6E]">
              Företaget
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#2E4A62] transition-colors hover:text-[#0E7C6E]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-h text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#0E7C6E]">
              Kontakt
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:0733017339"
                  className="flex items-center gap-2 text-sm text-[#2E4A62] transition-colors hover:text-[#0E7C6E]"
                >
                  <IconPhone14 className="shrink-0 text-[#0E7C6E]" />
                  073-301 73 39
                </a>
              </li>
              <li>
                <a
                  href="mailto:david.olsen@basedtech.se"
                  className="flex items-center gap-2 text-sm text-[#2E4A62] transition-colors hover:text-[#0E7C6E]"
                >
                  <IconMail14 className="shrink-0 text-[#0E7C6E]" />
                  david.olsen@basedtech.se
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#2E4A62]">
                <IconMapPin className="shrink-0 text-[#0E7C6E]" />
                Nyköping, Sverige
              </li>
            </ul>
            <Link
              href="/kontakt"
              className="mt-1 inline-flex w-fit items-center rounded-[20px] border border-[#0E7C6E] px-5 py-2.5 text-sm font-semibold text-[#0E7C6E] transition-colors duration-200 hover:bg-[#0E7C6E] hover:text-white"
            >
              Ta ett snack
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start gap-2 border-t border-[#C8DDE9] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-[#6B8FA8]">
            © {year} BASEDtech Sweden AB · Org.nr 559XXX-XXXX
          </span>
          <div className="flex items-center gap-4">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-[#6B8FA8] transition-colors hover:text-[#0E7C6E]"
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
