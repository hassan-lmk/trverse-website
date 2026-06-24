import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Page not found",
  description: "The page you are looking for could not be found on TRVERSE.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main>
      <Nav />
      <section style={{ background: "#f7f9fc", padding: "160px 48px 120px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 16,
            }}
          >
            404
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              color: "#0a1e3d",
              margin: "0 0 16px",
            }}
          >
            Page not found
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "#5a6a7e",
              lineHeight: 1.75,
              margin: "0 0 32px",
            }}
          >
            The page you requested does not exist or may have moved. Explore solutions, insights, or
            request a demo instead.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="hero-btn-primary">
              Back to home
            </Link>
            <Link href="/solutions" className="hero-btn-secondary">
              View solutions
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
