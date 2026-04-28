"use client";

import React from "react";
import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

const IconTransit = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="4" y="5" width="16" height="12" rx="2" />
    <path d="M8 17v2M16 17v2M6 9h4M14 9h4" />
    <circle cx="8" cy="14" r="1" fill="currentColor" stroke="none" />
    <circle cx="16" cy="14" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IconLayers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const IconSpark = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconMapPin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const highlights = [
  { icon: IconTransit, label: "End-to-end BRT & metro-ready platforms" },
  { icon: IconLayers, label: "Fare, fleet, control, and passenger apps" },
  { icon: IconShield, label: "Security, compliance, and operational resilience" },
  { icon: IconSpark, label: "Designed for scale from launch to steady state" },
];

type Props = {
  studies: CaseStudy[];
};

const CaseStudiesOverview = ({ studies }: Props) => {
  return (
    <section
      id="all-case-studies"
      style={{
        position: "relative",
        padding: "100px 48px 120px",
        overflow: "hidden",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .cs-highlight-grid { display: grid; gap: 16px; margin-bottom: 56px; grid-template-columns: repeat(4, 1fr); }
            .cs-card-grid { display: grid; gap: 28px; justify-content: stretch; }
            @media (max-width: 1100px) {
              .cs-highlight-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 640px) {
              .cs-highlight-grid { grid-template-columns: 1fr !important; }
              .cs-card-grid { grid-template-columns: 1fr !important; }
            }
          `,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #fafbfd 0%, #ffffff 45%, #f4f7fb 100%)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -120,
          right: "8%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,130,93,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: "5%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(19,79,137,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              borderRadius: 999,
              background: "rgba(255,130,93,0.10)",
              border: "1px solid rgba(255,130,93,0.22)",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 700,
                color: "var(--accent)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Proof in production
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              color: "#0a1e3d",
              margin: "0 0 18px",
              letterSpacing: "-0.02em",
              lineHeight: 1.12,
            }}
          >
            Case studies that show
            <br />
            <span style={{ color: "var(--accent)" }}>transit at full scale</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              color: "#5a6a7e",
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Deep dives into networks where TRVERSE connects payments, operations, and passenger experience — with numbers you can trust.
          </p>
        </div>

        <div className="cs-highlight-grid">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  padding: "20px 18px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(19,79,137,0.08)",
                  boxShadow: "0 8px 32px rgba(10,30,61,0.04)",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(145deg, #0a1e3d 0%, #134f89 100%)",
                    color: "#fff",
                  }}
                >
                  <Icon />
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#3a4a5e",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {h.label}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className="cs-card-grid"
          style={{
            gridTemplateColumns:
              studies.length === 1 ? "1fr" : "repeat(auto-fill, minmax(340px, 1fr))",
            justifyContent: studies.length === 1 ? "center" : "stretch",
          }}
        >
          {studies.map((item) => {
            const previewStats = item.stats.slice(0, 3);
            return (
              <Link
                key={item.slug}
                href={`/case-studies/${item.slug}`}
                style={{ textDecoration: "none", maxWidth: studies.length === 1 ? 560 : undefined, width: "100%", margin: studies.length === 1 ? "0 auto" : undefined }}
              >
                <article
                  style={{
                    position: "relative",
                    borderRadius: 24,
                    overflow: "hidden",
                    border: "1px solid rgba(19,79,137,0.10)",
                    background: "#fff",
                    boxShadow: "0 16px 48px rgba(10,30,61,0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, border-color 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 28px 64px rgba(10,30,61,0.14)";
                    e.currentTarget.style.borderColor = "rgba(255,130,93,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 16px 48px rgba(10,30,61,0.08)";
                    e.currentTarget.style.borderColor = "rgba(19,79,137,0.10)";
                  }}
                >
                  <div style={{ position: "relative", height: 240, flexShrink: 0 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.heroImage} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(4,14,31,0.85) 0%, rgba(4,14,31,0.2) 50%, transparent 100%)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 20,
                        left: 22,
                        right: 22,
                      }}
                    >
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "6px 12px",
                          borderRadius: 999,
                          background: "rgba(255,255,255,0.15)",
                          backdropFilter: "blur(8px)",
                          marginBottom: 10,
                          color: "#fff",
                          fontFamily: "var(--font-body)",
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                      >
                        <IconMapPin />
                        {item.location}
                      </div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 28,
                          fontWeight: 700,
                          color: "#fff",
                          margin: 0,
                          lineHeight: 1.2,
                          letterSpacing: "-0.02em",
                          textShadow: "0 2px 16px rgba(0,0,0,0.35)",
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div style={{ padding: "26px 26px 24px", display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 15.5,
                        color: "#5a6a7e",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.summary}
                    </p>

                    {previewStats.length > 0 ? (
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: `repeat(${previewStats.length}, 1fr)`,
                          gap: 10,
                          padding: "14px 0",
                          borderTop: "1px solid rgba(19,79,137,0.08)",
                          borderBottom: "1px solid rgba(19,79,137,0.08)",
                        }}
                      >
                        {previewStats.map((s) => (
                          <div key={s.label} style={{ textAlign: "center" }}>
                            <div
                              style={{
                                fontFamily: "var(--font-display)",
                                fontSize: 22,
                                fontWeight: 700,
                                color: "#0a1e3d",
                                lineHeight: 1.15,
                              }}
                            >
                              {s.value}
                            </div>
                            <div
                              style={{
                                fontFamily: "var(--font-body)",
                                fontSize: 10,
                                color: "var(--accent)",
                                fontWeight: 700,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                marginTop: 4,
                              }}
                            >
                              {s.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    <div
                      style={{
                        marginTop: "auto",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        fontFamily: "var(--font-body)",
                        fontSize: 15,
                        fontWeight: 700,
                        color: "var(--accent)",
                      }}
                    >
                      Read full case study
                      <IconArrowRight />
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 56 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#7a8797", margin: "0 0 18px" }}>
            Planning a similar deployment?
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 28px",
              borderRadius: 12,
              background: "var(--accent)",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 10px 28px rgba(255,130,93,0.35)",
            }}
          >
            Talk to our team
            <IconArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesOverview;
