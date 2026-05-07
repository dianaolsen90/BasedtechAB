import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Hem" },
  { href: "/#om-oss", label: "Om oss" },
  { href: "/#tjanster", label: "Tjänster" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#C8DDE9] bg-white">
      <div className="mx-auto max-w-[1160px] px-8 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="inline-flex shrink-0 transition-opacity hover:opacity-90">
            <Image
              src="/Bilder/1.png"
              alt="BASEDtech Sweden AB logotyp"
              width={900}
              height={565}
              className="h-[64px] w-auto object-contain object-left"
              style={{ mixBlendMode: "multiply" }}
            />
          </Link>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-b text-sm text-nordic-slate transition-colors hover:text-nordic-teal"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-1">
            <a
              href="tel:0733017339"
              className="font-b text-sm text-nordic-slate transition-colors hover:text-nordic-teal"
            >
              073-301 73 39
            </a>
            <a
              href="mailto:david.olsen@basedtech.se"
              className="font-b text-sm text-nordic-slate transition-colors hover:text-nordic-teal"
            >
              david.olsen@basedtech.se
            </a>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-start gap-1 border-t border-[#C8DDE9] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-b text-xs text-nordic-subtle">
            {year} BASEDtech Sweden AB
          </span>
          <span className="font-b text-xs font-semibold text-nordic-teal">
            Automagi för din ekonomi.
          </span>
        </div>
      </div>
    </footer>
  );
}
