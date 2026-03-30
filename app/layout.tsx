import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "BASEDtech · Automagi för din ekonomi",
  description:
    "BASEDtech Sweden AB. Smart ekonomistyrning och automagi för din bokföring. Kostnadsfri analys.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen font-dm font-light">{children}</body>
    </html>
  );
}
