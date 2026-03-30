"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import {
  IconBox,
  IconClose,
  IconDocument,
  IconGroup,
  IconMenu,
  IconPerson,
  IconPhone,
} from "./icons";

const SECTION_IDS = [
  "om-oss",
  "tjanster",
  "produkter",
  "team",
  "kontakt",
] as const;

type Item = {
  href: string;
  label: string;
  id: (typeof SECTION_IDS)[number];
  icon: ReactNode;
  cta?: boolean;
};

const items: Item[] = [
  { href: "#om-oss", label: "Om oss", id: "om-oss", icon: <IconPerson /> },
  {
    href: "#tjanster",
    label: "Tjänster",
    id: "tjanster",
    icon: <IconDocument />,
  },
  {
    href: "#produkter",
    label: "Produkter",
    id: "produkter",
    icon: <IconBox />,
  },
  { href: "#team", label: "Team", id: "team", icon: <IconGroup /> },
  {
    href: "#kontakt",
    label: "Ta ett snack",
    id: "kontakt",
    icon: <IconPhone />,
    cta: true,
  },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 100;
      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 h-[84px] border-b border-[rgba(44,228,212,0.12)] bg-based-header">
      <div className="mx-auto flex h-full max-w-container items-center justify-between px-8">
        <a href="#" className="group flex shrink-0 items-center">
          <Image
            src="/Loga-basedtech.png"
            alt="BASEDtech Sweden AB, logotyp med pingvin"
            width={200}
            height={72}
            className="h-[72px] w-auto rounded-[10px]"
            priority
          />
        </a>
        <nav
          className="hidden items-center gap-[1.4rem] nav:flex"
          aria-label="Huvudmeny"
        >
          {items.map((item) => {
            const isActive = active === item.id;
            if (item.cta) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center gap-2 rounded-lg border border-[rgba(44,228,212,0.45)] px-3 py-2 font-b text-sm font-medium text-based-cyan transition-colors hover:bg-[rgba(44,228,212,0.08)] hover:text-[#EEF7F6] ${
                    isActive ? "!text-based-cyan" : ""
                  }`}
                >
                  <span className="opacity-[0.65] transition-opacity group-hover:opacity-100">
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              );
            }
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link-underline group flex items-center gap-2 pb-1 font-b text-sm font-normal text-[rgba(238,247,246,0.75)] transition-colors hover:text-[#EEF7F6] ${
                  isActive ? "nav-active !text-based-cyan" : ""
                }`}
              >
                <span className="opacity-[0.65] transition-opacity group-hover:opacity-100">
                  {item.icon}
                </span>
                {item.label}
              </a>
            );
          })}
        </nav>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-[#EEF7F6] hover:bg-white/10 nav:hidden"
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
          className="border-t border-[rgba(44,228,212,0.12)] bg-based-header px-8 py-4 nav:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobilmeny">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className={
                  item.cta
                    ? "flex items-center gap-2 rounded-lg border border-[rgba(44,228,212,0.45)] px-3 py-3 font-b text-sm font-medium text-based-cyan"
                    : `flex items-center gap-2 py-3 font-b text-sm font-normal text-[rgba(238,247,246,0.75)] hover:text-[#EEF7F6] ${
                        active === item.id ? "text-based-cyan" : ""
                      }`
                }
              >
                <span className="opacity-[0.65]">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
