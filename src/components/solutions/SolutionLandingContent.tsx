import Link from "next/link";
import type { SolutionLandingDoc } from "@/data/solutionLandings";
import SolutionFeatureIcon, { getSolutionFeatureIcon } from "@/components/solutions/SolutionFeatureIcon";

type Props = {
  doc: SolutionLandingDoc;
};

function HighlightRowCheck() {
  return (
    <span
      style={{
        flexShrink: 0,
        width: 36,
        height: 36,
        borderRadius: 10,
        background: "rgba(255,130,93,0.12)",
        border: "1px solid rgba(255,130,93,0.22)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#c45a3a",
      }}
      aria-hidden
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M3.5 8.2l3 3 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function SolutionLandingContent({ doc }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Key highlights redesign: heading+image row, then bullet cards */
        .sol-highlights-top {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 959px) {
          .sol-highlights-top {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
        .sol-highlights-imageWrap {
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(10,30,61,0.08);
          background: #fff;
          height: 420px;
        }
        @media (max-width: 959px) {
          .sol-highlights-imageWrap {
            height: 340px;
          }
        }
        .sol-highlights-imageWrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .sol-highlights-description {
          margin: 20px 0 0;
          max-width: 920px;
          font-family: var(--font-body);
          font-size: 17px;
          color: #5a6a7e;
          line-height: 1.75;
        }
        .sol-highlights-cardGrid {
          margin-top: 32px;
          display: grid;
          width: 100%;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }
        @media (min-width: 1180px) {
          .sol-highlights-cardGrid {
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 12px;
          }
          .sol-highlight-bullet-card {
            padding: 16px 14px;
          }
          .sol-highlight-bullet-card p {
            font-size: 14px;
            line-height: 1.55;
          }
        }
        .sol-highlight-bullet-card {
          background: #fff;
          border: 1px solid rgba(10,30,61,0.08);
          border-radius: 16px;
          padding: 18px 18px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }
        .sol-highlight-bullet-card:hover {
          border-color: rgba(255,130,93,0.35);
          box-shadow: 0 12px 40px rgba(10,30,61,0.06);
          transform: translateY(-2px);
        }
        .sol-highlight-bullet-card p {
          margin: 0;
          font-family: var(--font-body);
          font-size: 15px;
          color: #3a4a5e;
          line-height: 1.6;
          font-weight: 500;
        }
        .sol-highlights-layout {
          display: grid;
          gap: clamp(40px, 5vw, 64px);
          align-items: stretch;
        }
        @media (min-width: 960px) {
          .sol-highlights-layout {
            grid-template-columns: minmax(0, 1.12fr) minmax(260px, 400px);
          }
        }
        .sol-highlights-board {
          margin-top: 8px;
          border-radius: 20px;
          border: 1px solid rgba(10,30,61,0.07);
          background: linear-gradient(180deg, rgba(247,249,252,0.85) 0%, #fff 40%, #fff 100%);
          box-shadow: 0 1px 0 rgba(255,255,255,0.9) inset;
          overflow: hidden;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .sol-highlight-row {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 18px 22px 18px 20px;
          border-bottom: 1px solid rgba(10,30,61,0.06);
          transition: background 0.2s ease;
        }
        .sol-highlight-row:last-child {
          border-bottom: none;
        }
        .sol-highlight-row:hover {
          background: rgba(255,130,93,0.04);
        }
        .sol-highlight-row p {
          margin: 4px 0 0;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 600;
          color: #2f3d50;
          line-height: 1.55;
          letter-spacing: -0.01em;
        }
        .sol-highlights-aside-wrap {
          height: 100%;
          min-height: 420px;
          display: flex;
          flex-direction: column;
        }
        .sol-highlights-aside-shell {
          flex: 1;
          position: relative;
          border-radius: 28px;
          padding: 0;
          background: #fff;
          box-shadow: none;
          overflow: hidden;
        }
        .sol-highlights-aside-inner {
          height: 100%;
          border-radius: 28px;
          overflow: hidden;
          background: transparent;
          display: flex;
          align-items: stretch;
          justify-content: center;
          position: relative;
          min-height: 420px;
        }
        .sol-highlights-aside-inner img {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          margin: 0;
          object-fit: cover;
          align-self: center;
          filter: none;
        }
        .sol-highlights-aside {
          position: sticky;
          top: 96px;
        }
        @media (max-width: 959px) {
          .sol-highlights-aside {
            position: static;
            max-width: 440px;
            margin-left: auto;
            margin-right: auto;
          }
          .sol-highlights-aside-inner { min-height: 360px; }
        }
        .sol-feature-card {
          background: linear-gradient(180deg, #fff 0%, #fafbfd 100%);
          border: 1px solid rgba(10,30,61,0.08);
          border-radius: 20px;
          padding: 32px 28px;
          position: relative;
          overflow: hidden;
        }
        .sol-feature-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), #134f89);
          opacity: 0.85;
        }
        .sol-landing-cta-inner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 32px 40px;
        }
        .sol-landing-cta-copy {
          flex: 1 1 320px;
          max-width: 640px;
        }
        .sol-landing-cta-group {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
          justify-content: flex-end;
          flex: 0 0 auto;
        }
        @media (max-width: 700px) {
          .sol-landing-cta-inner {
            flex-direction: column;
            align-items: stretch;
          }
          .sol-landing-cta-copy {
            max-width: none;
          }
          .sol-landing-cta-group {
            flex-direction: column;
            align-items: stretch;
          }
          .sol-landing-cta-primary,
          .sol-landing-cta-outline {
            width: 100%;
          }
        }
        .sol-landing-cta-primary,
        .sol-landing-cta-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-sizing: border-box;
          padding: 16px 32px;
          white-space: nowrap;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.25s ease;
        }
        .sol-landing-cta-primary {
          background: var(--accent);
          color: #fff;
          border: 2px solid transparent;
        }
        .sol-landing-cta-primary:hover {
          background: #e06d4a;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(255,130,93,0.35);
        }
        .sol-landing-cta-outline {
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.35);
        }
        .sol-landing-cta-outline:hover {
          border-color: #fff;
          background: rgba(255,255,255,0.06);
        }
      `,
        }}
      />

      {/* Highlights: heading (left) + image (right), bullets in cards (below) */}
      <section
        style={{
          background: "#fff",
          padding:
            doc.highlightsDescription || doc.highlights.length
              ? "56px 48px 56px"
              : "64px 48px 96px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="sol-highlights-top">
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 2.6vw, 34px)",
                  fontWeight: 700,
                  color: "#0a1e3d",
                  margin: "0 0 14px",
                  letterSpacing: "-0.02em",
                }}
              >
                {doc.highlightsHeading}
              </h2>
              {doc.highlightsSubheading ? (
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(28px, 2.8vw, 40px)",
                    fontWeight: 700,
                    color: "#0a1e3d",
                    margin: 0,
                    lineHeight: 1.18,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {doc.highlightsSubheading}
                </h2>
              ) : null}
              {doc.highlightsDescription ? (
                <p className="sol-highlights-description">{doc.highlightsDescription}</p>
              ) : null}
            </div>

            <div>
              <div className="sol-highlights-imageWrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={doc.highlightsAsideImage ?? "/products/placeholder-product.svg"}
                  alt={doc.highlightsAsideImageAlt ?? ""}
                  role={doc.highlightsAsideImageAlt ? undefined : "presentation"}
                />
              </div>
            </div>
          </div>

          {doc.highlights.length > 0 ? (
            <div className="sol-highlights-cardGrid" role="list" aria-label="Key highlights">
              {doc.highlights.slice(0, 5).map((text, i) => (
                <article key={i} className="sol-highlight-bullet-card" role="listitem">
                  <HighlightRowCheck />
                  <p>{text}</p>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* Feature blocks */}
      <section
        style={{
          background: "#f7f9fc",
          padding: "96px 48px 120px",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 2.6vw, 34px)",
                fontWeight: 700,
                color: "#0a1e3d",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              {doc.featuresHeading ?? "Key Features"}
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {doc.features.map((f) => (
              <article key={f.title} className="sol-feature-card">
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(255,130,93,0.1)",
                    color: "#134f89",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <SolutionFeatureIcon name={getSolutionFeatureIcon(f.title, doc.slug)} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#0a1e3d",
                    margin: "0 0 12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    color: "#5a6a7e",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {f.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#fff", padding: "0 48px 120px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              background: "linear-gradient(132deg, #0a1e3d 0%, #134f89 92%)",
              borderRadius: 32,
              padding: "clamp(48px, 6vw, 80px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(255,130,93,0.18) 0%, transparent 45%)",
                pointerEvents: "none",
              }}
            />
            <div className="sol-landing-cta-inner" style={{ position: "relative", zIndex: 1 }}>
              <div className="sol-landing-cta-copy">
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(24px, 2.6vw, 34px)",
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 12px",
                    lineHeight: 1.2,
                  }}
                >
                  {doc.ctaHeading ?? "Plan your fare strategy with TRVERSE"}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16,
                    color: "#fff",
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  {doc.ctaBody ??
                    "Talk to TRVERSE about your corridors, fleets, and digital channels."}
                </p>
              </div>
              <div className="sol-landing-cta-group">
                <Link
                  href={doc.primaryCta?.href ?? "/get-a-demo"}
                  className="sol-landing-cta-primary"
                >
                  {doc.primaryCta?.label ?? "Get a demo"}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="#fff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href={doc.secondaryCta?.href ?? "/solutions"}
                  className="sol-landing-cta-outline"
                >
                  {doc.secondaryCta?.label ?? "All solutions"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
