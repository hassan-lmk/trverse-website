import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageH1 from "@/components/seo/PageH1";
import JsonLd from "@/components/seo/JsonLd";
import PartnersPageContent from "@/components/partners/PartnersPageContent";
import { breadcrumbJsonLd } from "@/lib/seo-jsonld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Partners",
  description:
    "TRVERSE collaborates with technology and domain partners to deliver scalable, intelligent solutions for mobility, infrastructure, and enterprise transformation.",
  path: "/partners",
  image: "/assets/contact-banner-v2.webp",
});

export default function PartnersPage() {
  return (
    <main>
      <PageH1>Partners</PageH1>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Partners", path: "/partners" },
        ])}
      />
      <Nav />
      <InsightsHero
        badge="Partners"
        titleAs="p"
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
        primaryCta={{ label: "Become a partner", href: "#partner-form" }}
        secondaryCta={{ label: "About TRVERSE", href: "/about" }}
      />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Partners" }]} />
      <PartnersPageContent />
      <Footer />
    </main>
  );
}
