import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import CaseStudiesOverview from "@/components/case-studies/CaseStudiesOverview";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies — TRVERSE",
  description: "Explore TRVERSE case studies across modern transit networks.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <Nav />
      <InsightsHero
        badge="Case Studies"
        title={
          <>
            Real-world transit systems
            <br />
            <span style={{ color: "var(--accent)" }}>powered by TRVERSE</span>
          </>
        }
        description="Explore how TRVERSE helps cities and operators improve passenger journeys, operational visibility, and network performance."
        backgroundImageSrc="/assets/case-studies-banner.png"
        primaryCta={{ label: "View stories", href: "#all-case-studies" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <CaseStudiesOverview studies={caseStudies} />

      <Footer />
    </main>
  );
}
