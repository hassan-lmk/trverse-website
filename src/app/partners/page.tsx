import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PartnersPageContent from "@/components/partners/PartnersPageContent";

export const metadata: Metadata = {
  title: "Partners — TRVERSE",
  description:
    "TRVERSE collaborates with technology and domain partners to deliver scalable, intelligent solutions for mobility, infrastructure, and enterprise transformation.",
  openGraph: {
    title: "Partners — TRVERSE",
    description:
      "Building connected ecosystems through strategic partnerships — powered by LMKR's 30+ years of global experience.",
  },
};

export default function PartnersPage() {
  return (
    <main>
      <Nav />
      <InsightsHero
        badge="Partners"
        title={
          <>
            Building Connected Ecosystems Through
            <br />
            <span style={{ color: "var(--accent)" }}>Strategic Partnerships</span>
          </>
        }
        description="TRVERSE collaborates with technology and domain partners to deliver scalable, intelligent solutions for mobility, infrastructure, and enterprise transformation, powered by LMKR's 30+ years of global experience."
        backgroundImageSrc="/assets/contact-banner-v2.webp"
        backgroundImageAlt="Professionals collaborating on connected mobility and infrastructure solutions"
        primaryCta={{ label: "Become a Partner", href: "#partner-form" }}
        secondaryCta={{ label: "About TRVERSE", href: "/about" }}
      />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Partners" }]} />
      <PartnersPageContent />
      <Footer />
    </main>
  );
}
