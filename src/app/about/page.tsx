import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageH1 from "@/components/seo/PageH1";
import JsonLd from "@/components/seo/JsonLd";
import AboutPageContent from "@/components/about/AboutPageContent";
import { breadcrumbJsonLd } from "@/lib/seo-jsonld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About us",
  description:
    "Learn how TRVERSE builds on LMKR's three decades of enterprise innovation to deliver connected operations, data intelligence, and smart mobility platforms worldwide.",
  path: "/about",
  image: "/assets/about-hero-banner.webp",
});

export default function AboutPage() {
  return (
    <main>
      <PageH1>About TRVERSE</PageH1>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Nav />
      <InsightsHero
        badge="About Us"
        titleAs="p"
        title={
          <>
            Built on a Legacy of
            <br />
            <span style={{ color: "var(--accent)" }}>Innovation</span>
          </>
        }
        description="TRVERSE is built on the deep experience and global technology foundation of LMKR, helping organizations turn complex systems into connected, intelligent ecosystems."
        backgroundImageSrc="/assets/about-hero-banner.webp"
        backgroundImageAlt="Connected smart mobility network over a nighttime highway interchange"
      />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <AboutPageContent />
      <Footer />
    </main>
  );
}
