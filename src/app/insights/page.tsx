import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import { insights } from "@/data/insights";
import InsightsGrid from "@/components/insights/InsightsGrid";

export const metadata: Metadata = {
  title: "Insights — TRVERSE",
  description: "News, updates, and case studies from TRVERSE.",
};

export default function InsightsPage() {
  return (
    <main>
      <Nav />
      <InsightsHero
        badge="Insights Hub"
        title={
          <>
            News & case studies from
            <br />
            <span style={{ color: "var(--accent)" }}>TRVERSE</span>
          </>
        }
        description="Explore TRVERSE updates, project highlights, and recognition from across the mobility ecosystem."
        backgroundImageSrc="/insights/insights-page.webp"
        primaryCta={{ label: "Browse articles", href: "#all-insights" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

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

