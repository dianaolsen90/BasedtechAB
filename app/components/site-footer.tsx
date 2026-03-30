import Image from "next/image";
import Link from "next/link";
import { IconMail14, IconPhone14 } from "@/app/components/icons";

const links = [
  { href: "/", label: "Hem" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#tjanster", label: "Tjänster" },
  { href: "#meet-larry", label: "Möt Larry" },
  { href: "/kontakt", label: "Kontakt" },
];

const navLinkClass =
  "block font-b text-[1rem] font-normal leading-snug text-[rgba(180,215,235,0.35)] no-underline transition-colors duration-200 hover:text-[rgba(180,215,235,0.55)]";

const contactLinkClass =
  "font-b text-[0.95rem] font-normal text-[rgba(180,215,235,0.45)] no-underline transition-colors duration-200 hover:text-ice-blue";

const sectionLabelClass =
  "font-h text-[0.7rem] font-bold uppercase tracking-[0.14em] text-aurora-teal";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-[0.5px] border-[rgba(125,212,240,0.08)] bg-[#060F1C]">
      <div className="mx-auto max-w-[1160px] px-8 pb-6 pt-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div>
            <Link
              href="/"
              className="inline-flex max-w-full transition-opacity hover:opacity-95"
            >
              <Image
                src="/loggan/basedtechlogo.png"
                alt="BASEDtech Sweden AB logotyp"
                width={900}
                height={565}
                className="h-[240px] w-auto max-w-full object-contain object-left md:h-[272px]"
              />
            </Link>
            <p className="mt-4 max-w-[320px] font-h text-[1rem] font-medium leading-[1.55] text-[rgba(180,215,235,0.35)]">
              Smart ekonomistyrning.
              <br />
              Personlig service, alltid.
            </p>
            <div className="mt-6">
              <p className={sectionLabelClass}>Kontakt</p>
              <div className="mt-4 flex items-center gap-2.5">
                <span className="inline-flex shrink-0 text-aurora-teal" aria-hidden>
                  <IconPhone14 className="h-[14px] w-[14px]" />
                </span>
                <a href="tel:0733017339" className={contactLinkClass}>
                  073-301 73 39
                </a>
              </div>
              <div className="mt-4 flex items-center gap-2.5">
                <span className="inline-flex shrink-0 text-aurora-teal" aria-hidden>
                  <IconMail14 className="h-[14px] w-[14px]" />
                </span>
                <a
                  href="mailto:david.olsen@basedtech.se"
                  className={contactLinkClass}
                >
                  david.olsen@basedtech.se
                </a>
              </div>
              <p className="mt-4 font-b text-[0.875rem] font-light leading-relaxed text-[rgba(180,215,235,0.35)]">
                Svarar inom 24 timmar
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/company/basedtech-sweden-ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-[rgba(125,212,240,0.18)] bg-[rgba(255,255,255,0.04)] p-2.5 text-ice-blue transition-colors duration-200 hover:border-[rgba(125,212,240,0.28)] hover:bg-[rgba(125,212,240,0.08)] hover:text-arctic-mist"
                aria-label="BASEDtech på LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={22}
                  height={22}
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="lg:pt-1">
            <p className={sectionLabelClass}>Navigera</p>
            <nav
              className="mt-8 flex flex-col gap-5"
              aria-label="Footer navigation"
            >
              {links.map((l) => {
                const href =
                  l.href === "/"
                    ? "/"
                    : l.href.startsWith("#")
                      ? `/${l.href}`
                      : l.href;
                return (
                  <Link key={l.href + l.label} href={href} className={navLinkClass}>
                    {l.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-[rgba(125,212,240,0.08)] pt-6 min-[600px]:flex-row min-[600px]:items-center min-[600px]:justify-between">
          <span className="text-center font-b text-[0.8rem] font-light text-[rgba(180,215,235,0.35)] min-[600px]:text-left">
            {year} BASEDtech Sweden AB
          </span>
          <span className="text-center font-b text-[0.8rem] font-light text-[rgba(180,215,235,0.35)] min-[600px]:text-right">
            Automagi för din ekonomi
          </span>
        </div>
      </div>
    </footer>
  );
}
