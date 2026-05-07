"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "all");
    setVisible(false);
  }

  function necessary() {
    localStorage.setItem("cookie-consent", "necessary");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-center">
      <div className="w-full max-w-lg rounded-2xl border border-[#BAE6F7] bg-white px-6 py-5 shadow-xl">
        <p className="mb-4 text-sm leading-relaxed text-[#2D4A5F]">
          Vi använder cookies för att förbättra din upplevelse. Läs mer i vår{" "}
          <Link
            href="/integritetspolicy"
            className="text-[#0EA5C9] underline underline-offset-2 hover:text-[#0891B2]"
          >
            integritetspolicy
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={accept}
            className="rounded-full bg-[#0EA5C9] px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0891B2]"
          >
            Acceptera alla
          </button>
          <button
            onClick={necessary}
            className="rounded-full border border-[#0EA5C9] px-6 py-2 text-sm font-semibold text-[#0EA5C9] transition-colors hover:bg-[#EBF5F9]"
          >
            Endast nödvändiga
          </button>
        </div>
      </div>
    </div>
  );
}
