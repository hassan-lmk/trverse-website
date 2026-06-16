"use client";

import Link from "next/link";
import React from "react";
import { audiencePageExists, audienceSegments } from "@/data/audienceLandings";

const audienceIcons = [
  (
    <svg key="transport" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 22V10a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" />
      <path d="M12 22V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v18" />
      <path d="M2 22h20" />
    </svg>
  ),
  (
    <svg key="city" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 21h18" />
      <path d="M6 21V7l6-4 6 4v14" />
      <path d="M10 21v-6h4v6" />
    </svg>
  ),
  (
    <svg key="private" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
];

const tabButtonStyle = (active: boolean): React.CSSProperties => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  fontFamily: "var(--font-body)",
  fontSize: 16,
  fontWeight: 600,
  padding: "18px 24px",
  borderRadius: 12,
  border: "none",
  cursor: "pointer",
  background: active ? "var(--accent)" : "#f0f4f8",
  color: active ? "#fff" : "#3a4a5e",
  transition: "all 0.3s ease",
  boxShadow: active ? "0 8px 24px rgba(255,130,93,0.3)" : "none",
  textDecoration: "none",
});

const Transformation = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const activeSegment = audienceSegments[activeTab];
  const activeHasPage = audiencePageExists(activeSegment.slug);

  return (
    <section id="about-us" className="home-transformation-section" style={{ background: "#fff", padding: "120px 48px" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .home-transformation-section {
            padding: 96px 28px !important;
          }
          .home-transform-tabs,
          .home-transform-trunk {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .home-transform-trunk {
            display: none !important;
          }
        }
        @media (max-width: 700px) {
          .home-transformation-section {
            padding: 84px 20px !important;
          }
          .home-transform-description {
            padding: 28px 22px 24px !important;
          }
        }
      ` }} />
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16, display: "block" }}>Who we serve</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 600, color: "#0a1e3d", margin: "0 0 20px" }}>From Fragmented to Connected</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#5a6a7e", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Cities are growing and demand is rising, but most transport networks still rely on separate systems. TRVERSE brings them into one connected platform.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div className="home-transform-tabs" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, width: "100%", position: "relative", zIndex: 2 }}>
            {audienceSegments.map((audience, i) => (
              <div key={audience.slug} style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="button"
                  onClick={() => setActiveTab(i)}
                  aria-pressed={activeTab === i}
                  style={tabButtonStyle(activeTab === i)}
                >
                  {audienceIcons[i]}
                  {audience.label}
                </button>
              </div>
            ))}
          </div>

          <div className="home-transform-trunk" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, width: "100%", height: 40, position: "relative" }}>
            {[0, 1, 2].map((i) => (
              <div key={`trunk-${i}`} style={{ position: "relative" }}>
                {i > 0 && (
                  <div style={{ position: "absolute", top: "50%", left: -12, width: "calc(50% + 12px)", height: 2, background: "var(--accent)", transform: "translateY(-50%)", zIndex: 0 }} />
                )}
                {i < 2 && (
                  <div style={{ position: "absolute", top: "50%", left: "50%", right: -12, height: 2, background: "var(--accent)", transform: "translateY(-50%)", zIndex: 0 }} />
                )}
                {activeTab === i && (
                  <div style={{ position: "absolute", top: 0, left: "50%", width: 2, height: "50%", background: "var(--accent)", transform: "translateX(-50%)", zIndex: 0 }} />
                )}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: activeTab === i ? "var(--accent)" : "#fff",
                    border: "3px solid var(--accent)",
                    boxShadow: activeTab === i ? "0 0 0 6px rgba(255,130,93,0.2)" : "0 0 0 6px rgba(255,130,93,0.15)",
                    zIndex: 2,
                    transition: "all 0.3s ease",
                  }}
                />
              </div>
            ))}
          </div>

          <div
            className="home-transform-description"
            style={{
              marginTop: 8,
              padding: "36px 40px 32px",
              background: "#f7f9fc",
              borderRadius: 20,
              border: "1px solid rgba(19,79,137,0.08)",
              textAlign: "center",
            }}
          >
            <p
              key={activeSegment.slug}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                color: "#5a6a7e",
                lineHeight: 1.8,
                margin: "0 auto",
                maxWidth: 760,
              }}
            >
              {activeSegment.description}
            </p>
          </div>

          {activeHasPage ? (
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <Link
                href={`/who-we-serve/${activeSegment.slug}`}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#134f89",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                Learn more about {activeSegment.label.toLowerCase()}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Transformation;
