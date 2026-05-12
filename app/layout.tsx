import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/app/components/cookie-banner";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-b",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-h",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BASEDtech · Automagi för din ekonomi",
  description:
    "BASEDtech Sweden AB. Smart ekonomistyrning och automagi för din bokföring. Kostnadsfri analys.",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0EA5C9",
  openGraph: {
    title: "BASEDtech · Automagi för din ekonomi",
    description:
      "Smart ekonomistyrning och automagi för din bokföring. Kostnadsfri analys.",
    siteName: "BASEDtech Sweden AB",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="min-h-screen font-b font-light">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
