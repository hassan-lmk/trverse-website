import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageH1 from "@/components/seo/PageH1";
import JsonLd from "@/components/seo/JsonLd";
import { insights } from "@/data/insights";
import InsightsGrid from "@/components/insights/InsightsGrid";
import CaseStudiesInInsights from "@/components/insights/CaseStudiesInInsights";
import { caseStudies } from "@/data/caseStudies";
import { breadcrumbJsonLd } from "@/lib/seo-jsonld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Insights",
  description:
    "TRVERSE news, awards, case studies, and updates on automated fare collection, BRT deployments, and intelligent transport systems worldwide.",
  path: "/insights",
  image: "/assets/case-studies-banner.webp",
});

export default function InsightsPage() {
  return (
    <main>
      <PageH1>Insights and success stories</PageH1>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />
      <Nav />
      <InsightsHero
        badge="Insights Hub"
        titleAs="p"
        title="Insights & Success Stories"
        description="Explore TRVERSE highlights, key updates, and recognition from across the mobility ecosystem."
        backgroundImageSrc="/assets/case-studies-banner.webp"
        backgroundImageAlt="TRVERSE insights and industry news"
        primaryCta={{ label: "Browse articles", href: "#all-insights" }}
        secondaryCta={{ label: "Get a demo", href: "/get-a-demo" }}
      />

      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />

      <CaseStudiesInInsights studies={caseStudies} />

      <section id="all-insights" style={{ background: "#fff", padding: "110px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 600,
                color: "var(--accent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 16,
                display: "block",
              }}
            >
              All Insights
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 3.2vw, 44px)",
                fontWeight: 600,
                color: "#0a1e3d",
                margin: "0 0 18px",
              }}
            >
              Latest articles
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                color: "#5a6a7e",
                maxWidth: 720,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Select an article to read the full story on TRVERSE.
            </p>
          </div>

          <InsightsGrid items={insights} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
