import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Hem" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#tjanster", label: "Tjänster" },
  { href: "#meet-larry", label: "Möt Larry" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[rgba(44,228,212,0.15)] bg-[#082220] text-[rgba(238,247,246,0.65)]">
      <div className="mx-auto max-w-container px-8 py-14">
        <div className="grid grid-cols-1 gap-12 nav:grid-cols-3">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/Loga-basedtech.png"
                alt="BASEDtech Sweden AB logotyp"
                width={200}
                height={72}
                className="mb-4 h-[72px] w-auto rounded-[10px]"
              />
            </Link>
            <p className="max-w-xs font-b text-sm font-light leading-[1.8]">
              Automagi för din ekonomi. Smart ekonomistyrning med personlig
              service, alltid.
            </p>
          </div>
          <div>
            <p className="mb-4 font-h text-[0.75rem] font-bold uppercase tracking-wider text-based-cyan">
              Navigera
            </p>
            <ul className="space-y-2 font-b text-sm font-normal">
              {links.map((l) => {
                const href =
                  l.href === "/"
                    ? "/"
                    : l.href.startsWith("#")
                      ? `/${l.href}`
                      : l.href;
                return (
                  <li key={l.href + l.label}>
                    <Link
                      href={href}
                      className="transition-colors hover:text-[#EEF7F6]"
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-h text-[0.75rem] font-bold uppercase tracking-wider text-based-cyan">
              Kontakt
            </p>
            <ul className="space-y-2 font-b text-sm font-normal">
              <li>
                <a
                  href="tel:+46733017339"
                  className="transition-colors hover:text-[#EEF7F6]"
                >
                  073-301 73 39
                </a>
              </li>
              <li>
                <a
                  href="mailto:david.olsen@basedtech.se"
                  className="transition-colors hover:text-[#EEF7F6]"
                >
                  david.olsen@basedtech.se
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-[rgba(44,228,212,0.12)] pt-8 font-b text-xs font-light text-[rgba(238,247,246,0.5)] sm:flex-row sm:items-center sm:justify-between">
          <span>
            {year} BASEDtech Sweden AB
          </span>
          <span>Automagi för din ekonomi · Sverige</span>
        </div>
      </div>
    </footer>
  );
}
