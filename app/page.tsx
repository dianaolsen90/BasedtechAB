import type { Metadata } from "next";
import { HeroBanner, HeroTagline } from "@/app/components/hero-banner";
import {
  IntroSection,
  CardsSection,
  ProductsSection,
  CtaSection,
} from "@/app/components/home-sections";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";

export const metadata: Metadata = {
  title: "BASEDtech Sweden AB",
  description:
    "Automagi för din ekonomi. Vi hjälper ekonomiavdelningar att automatisera bokföringen med personlig service.",
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroBanner />
        <HeroTagline />
        <IntroSection />
        <CardsSection />
        <ProductsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
