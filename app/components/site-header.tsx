"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  IconClose,
  IconDocument,
  IconHome,
  IconMenu,
  IconPerson,
  IconPhone,
  IconStar,
} from "./icons";

const SECTION_IDS = ["om-oss", "tjanster", "meet-larry"] as const;

type SectionId = (typeof SECTION_IDS)[number];

type NavItem =
  | { kind: "home"; href: "/"; label: string; icon: ReactNode }
  | {
      kind: "section";
      href: string;
      label: string;
      sectionId: SectionId;
      icon: ReactNode;
    }
  | { kind: "kontakt"; href: "/kontakt"; label: string; icon: ReactNode }
  | { kind: "mailto"; href: string; label: string; icon: ReactNode };

const items: NavItem[] = [
  { kind: "home", href: "/", label: "Hem", icon: <IconHome /> },
  {
    kind: "section",
    href: "/#om-oss",
    label: "Om oss",
    sectionId: "om-oss",
    icon: <IconPerson className="h-[14px] w-[14px] shrink-0" />,
  },
  {
    kind: "section",
    href: "/#tjanster",
    label: "Tjänster",
    sectionId: "tjanster",
    icon: <IconDocument className="h-[14px] w-[14px] shrink-0" />,
  },
  {
    kind: "section",
    href: "/#meet-larry",
    label: "Möt Larry",
    sectionId: "meet-larry",
    icon: <IconStar className="h-[14px] w-[14px] shrink-0" />,
  },
  {
    kind: "kontakt",
    href: "/kontakt",
    label: "Kontakt",
    icon: <IconPerson className="h-[14px] w-[14px] shrink-0" />,
  },
  {
    kind: "mailto",
    href: "mailto:david.olsen@basedtech.se",
    label: "Ta ett snack",
    icon: <IconPhone className="h-[14px] w-[14px] shrink-0" />,
  },
];

function NavIconWrap({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex shrink-0 opacity-[0.65] transition-opacity group-hover:opacity-100">
      {children}
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrollSection, setScrollSection] = useState<SectionId | "">("");

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => {
      if (pathname !== "/") return;
      const y = window.scrollY + 100;
      let current: SectionId | "" = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setScrollSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") setScrollSection("");
  }, [pathname]);

  function isActive(item: NavItem): boolean {
    if (item.kind === "home")
      return pathname === "/" && scrollSection === "";
    if (item.kind === "section") {
      if (pathname !== "/") return false;
      return scrollSection === item.sectionId;
    }
    if (item.kind === "kontakt") return pathname === "/kontakt";
    return false;
  }

  const linkBase =
    "nav-link-underline group inline-flex items-center gap-1.5 pb-1 font-b text-sm font-normal text-based-heading/80 transition-colors hover:text-based-heading";
  const linkActive = "nav-active !text-based-cyan";

  return (
    <header className="sticky top-0 z-50 min-h-[96px] w-full border-b border-[rgba(26,61,53,0.08)] bg-white/85 shadow-[0_1px_0_rgba(26,61,53,0.04)] backdrop-blur-[12px]">
      <div className="mx-auto flex min-h-[96px] max-w-container items-center justify-between px-8 py-2">
        <Link href="/" className="group flex shrink-0 items-center">
          <Image
            src="/Loga-basedtech.png"
            alt="BASEDtech Sweden AB, logotyp med pingvin"
            width={320}
            height={112}
            className="h-[96px] w-auto max-w-[min(52vw,320px)]"
            priority
          />
        </Link>
        <nav
          className="hidden items-center gap-6 nav:flex"
          aria-label="Huvudmeny"
        >
          {items.map((item) => {
            const active = isActive(item);
            if (item.kind === "mailto") {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group inline-flex items-center gap-1.5 rounded-[8px] bg-based-cyan px-4 py-2.5 font-b text-sm font-semibold text-based-heading shadow-sm transition hover:bg-based-cyan-bright"
                >
                  <NavIconWrap>{item.icon}</NavIconWrap>
                  {item.label}
                </a>
              );
            }
            const cls = `${linkBase} ${active ? linkActive : ""}`;
            if (item.kind === "home") {
              return (
                <Link key={item.label} href={item.href} className={cls}>
                  <NavIconWrap>{item.icon}</NavIconWrap>
                  {item.label}
                </Link>
              );
            }
            if (item.kind === "kontakt") {
              return (
                <Link key={item.label} href={item.href} className={cls}>
                  <NavIconWrap>{item.icon}</NavIconWrap>
                  {item.label}
                </Link>
              );
            }
            return (
              <Link key={item.sectionId} href={item.href} className={cls}>
                <NavIconWrap>{item.icon}</NavIconWrap>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[rgba(26,61,53,0.1)] bg-based-mist text-based-heading transition-opacity hover:opacity-90 nav:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-[rgba(26,61,53,0.08)] bg-white/95 px-8 py-4 backdrop-blur-md nav:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobilmeny">
            {items.map((item) => {
              const active = isActive(item);
              const rowClass = `inline-flex items-center gap-1.5 font-b text-sm font-normal text-based-heading/80 hover:text-based-heading ${
                active ? "text-based-cyan" : ""
              }`;
              if (item.kind === "mailto") {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={close}
                    className="inline-flex items-center gap-1.5 rounded-[8px] bg-based-cyan px-4 py-3 font-b text-sm font-semibold text-based-heading"
                  >
                    <span className="opacity-[0.65]">{item.icon}</span>
                    {item.label}
                  </a>
                );
              }
              if (item.kind === "home") {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={close}
                    className={`py-3 ${rowClass}`}
                  >
                    <span className="opacity-[0.65]">{item.icon}</span>
                    {item.label}
                  </Link>
                );
              }
              if (item.kind === "kontakt") {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={close}
                    className={`py-3 ${rowClass}`}
                  >
                    <span className="opacity-[0.65]">{item.icon}</span>
                    {item.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={item.sectionId}
                  href={item.href}
                  onClick={close}
                  className={`py-3 ${rowClass}`}
                >
                  <span className="opacity-[0.65]">{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
