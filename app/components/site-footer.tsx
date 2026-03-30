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

const linkClass =
  "mb-3 block font-b text-[0.9rem] font-normal text-[rgba(238,247,246,0.5)] no-underline transition-colors duration-200 last:mb-0 hover:text-[#EEF7F6]";

const contactLinkClass =
  "font-b text-[0.9rem] font-normal text-[rgba(238,247,246,0.5)] no-underline transition-colors duration-200 hover:text-[#EEF7F6]";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[rgba(44,228,212,0.12)] bg-[#082220]">
      <div className="mx-auto max-w-[1160px] px-8 pb-10 pt-20">
        <div className="grid grid-cols-1 items-start gap-12 nav:grid-cols-[2fr_1fr_1fr] nav:gap-16">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/Loga-basedtech.png"
                alt="BASEDtech Sweden AB logotyp"
                width={280}
                height={90}
                className="h-[90px] w-auto rounded-[12px] mix-blend-luminosity"
              />
            </Link>
            <p className="mt-6 max-w-[280px] font-h text-[1.1rem] font-medium leading-[1.6] text-[rgba(238,247,246,0.5)]">
              Smart ekonomistyrning.
              <br />
              Personlig service, alltid.
            </p>
          </div>
          <div>
            <p className="mb-6 font-h text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#0F9E8E]">
              Navigera
            </p>
            <nav aria-label="Footer">
              {links.map((l) => {
                const href =
                  l.href === "/"
                    ? "/"
                    : l.href.startsWith("#")
                      ? `/${l.href}`
                      : l.href;
                return (
                  <Link key={l.href + l.label} href={href} className={linkClass}>
                    {l.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div>
            <p className="mb-6 font-h text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#0F9E8E]">
              Kontakt
            </p>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="inline-flex shrink-0 text-[#2CE4D4]" aria-hidden>
                <IconPhone14 className="h-[14px] w-[14px]" />
              </span>
              <a href="tel:0733017339" className={contactLinkClass}>
                073-301 73 39
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex shrink-0 text-[#2CE4D4]" aria-hidden>
                <IconMail14 className="h-[14px] w-[14px]" />
              </span>
              <a
                href="mailto:david.olsen@basedtech.se"
                className={contactLinkClass}
              >
                david.olsen@basedtech.se
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-[rgba(44,228,212,0.08)] pt-8 nav:flex-row nav:items-center nav:justify-between">
          <span className="text-center font-b text-[0.8rem] font-light text-[rgba(238,247,246,0.3)] nav:text-left">
            {year} BASEDtech Sweden AB
          </span>
          <span className="text-center font-b text-[0.8rem] font-light text-[rgba(238,247,246,0.3)] nav:text-right">
            Automagi för din ekonomi
          </span>
        </div>
      </div>
    </footer>
  );
}
