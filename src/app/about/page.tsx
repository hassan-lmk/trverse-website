import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us — TRVERSE",
  description:
    "Learn how TRVERSE builds on LMKR's three decades of enterprise innovation to deliver connected operations, data intelligence, and smart mobility platforms worldwide.",
  openGraph: {
    title: "About Us — TRVERSE",
    description:
      "TRVERSE transforms how organizations operate by connecting assets, people, mobility, and data into one unified digital ecosystem.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <InsightsHero
        badge="About Us"
        title={
          <>
            Built on a Legacy of
            <br />
            <span style={{ color: "var(--accent)" }}>Innovation</span>
          </>
        }
        description="TRVERSE is built on the deep experience and global technology foundation of LMKR — helping organizations turn complex systems into connected, intelligent ecosystems."
        backgroundImageSrc="/assets/about-hero-banner.webp"
        backgroundImageAlt="Connected smart mobility network over a nighttime highway interchange"
      />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <AboutPageContent />
      <Footer />
    </main>
  );
}
