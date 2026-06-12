"use client";

import React from "react";
import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

const bodyFont = "var(--font-body)";
const displayFont = "var(--font-display)";

const IconUsers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);

const IconBus = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <rect x="4" y="5" width="16" height="11" rx="2" />
    <path d="M8 19v2M16 19v2M6 9h12" />
    <circle cx="8" cy="14" r="1" fill="currentColor" stroke="none" />
    <circle cx="16" cy="14" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IconRoute = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <circle cx="6" cy="19" r="3" />
    <path d="M9 19h8.5a2.5 2.5 0 000-5H15a2 2 0 01-2-2V8" />
    <circle cx="18" cy="5" r="3" />
  </svg>
);

const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <path d="M12 18h.01" />
  </svg>
);

const IconGauge = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const IconCard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
);

const IconSpark = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconMap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
    <line x1="8" y1="2" x2="8" y2="18" />
    <line x1="16" y1="6" x2="16" y2="22" />
  </svg>
);

const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconLeaf = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M11 20A7 7 0 017 9l5-7 5 7a7 7 0 01-6 11z" />
  </svg>
);

const IconAlert = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

function statIconForLabel(label: string): React.FC {
  const l = label.toLowerCase();
  if (l.includes("ridership")) return IconUsers;
  if (l.includes("bus")) return IconBus;
  if (l.includes("route")) return IconRoute;
  if (l.includes("app") || l.includes("download")) return IconPhone;
  if (l.includes("passenger") && !l.includes("ridership")) return IconUsers;
  if (l.includes("distance") || l.includes("travel")) return IconGauge;
  if (l.includes("card")) return IconCard;
  return IconSpark;
}

const benefitIcons: React.FC[] = [
  IconUsers,
  IconBus,
  IconCard,
  IconGauge,
  IconPhone,
  IconShield,
];

function benefitIconAt(index: number): React.FC {
  return benefitIcons[index % benefitIcons.length];
}

type Props = {
  item: CaseStudy;
};

const CaseStudyDetailBody = ({ item }: Props) => {
  const overviewParagraphs = item.overview.split("\n\n").map((p) => p.trim()).filter(Boolean);

  const anchors = [
    { id: "cs-overview", label: "Overview" },
    { id: "cs-impact", label: "Impact" },
    { id: "cs-challenge", label: "Challenge" },
    { id: "cs-solution", label: "Solution" },
    ...(item.networkMap ? [{ id: "cs-map", label: "Network" }] : []),
    { id: "cs-benefits", label: "Benefits" },
    ...(item.additionalNotes?.length ? [{ id: "cs-more", label: "More" }] : []),
  ];

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .cs-anchor-wrap { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 48px; }
            .cs-anchor { font-family: ${bodyFont}; font-size: 13px; font-weight: 600; color: #5a6a7e; text-decoration: none; padding: 8px 16px; border-radius: 999px; border: 1px solid rgba(19,79,137,0.12); background: #fff; transition: color 0.2s, border-color 0.2s, background 0.2s; }
            .cs-anchor:hover { color: var(--accent); border-color: rgba(255,130,93,0.4); background: rgba(255,130,93,0.06); }
            .cs-stats-grid { display: grid; gap: 14px; grid-template-columns: repeat(4, 1fr); }
            @media (max-width: 1024px) { .cs-stats-grid { grid-template-columns: repeat(3, 1fr) !important; } }
            @media (max-width: 720px) { .cs-stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            .cs-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
            @media (max-width: 900px) { .cs-two-col { grid-template-columns: 1fr !important; } }
            .cs-benefits-grid { display: grid; gap: 18px; grid-template-columns: repeat(2, 1fr); }
            @media (max-width: 720px) { .cs-benefits-grid { grid-template-columns: 1fr !important; } }
          `,
        }}
      />

      <section
        id="case-study-content"
        style={{
          position: "relative",
          padding: "88px 48px 120px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, #fafbfd 0%, #ffffff 38%, #f4f7fb 100%)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 80,
            right: "-5%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,130,93,0.10) 0%, transparent 68%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <nav className="cs-anchor-wrap" aria-label="On this page">
            {anchors.map((a) => (
              <a key={a.id} href={`#${a.id}`} className="cs-anchor">
                {a.label}
              </a>
            ))}
          </nav>

          {/* Overview */}
          <div id="cs-overview" style={{ scrollMarginTop: 100, marginBottom: 64 }}>
            <div className="cs-two-col">
              <div>
                <span
                  style={{
                    fontFamily: bodyFont,
                    fontSize: 12,
                    color: "var(--accent)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontWeight: 700,
                    marginBottom: 14,
                    display: "block",
                  }}
                >
                  Overview
                </span>
                <h2
                  style={{
                    fontFamily: displayFont,
                    fontSize: "clamp(32px, 3.5vw, 44px)",
                    fontWeight: 700,
                    color: "#0a1e3d",
                    lineHeight: 1.15,
                    margin: "0 0 24px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.title}
                </h2>
                <div style={{ display: "grid", gap: 16 }}>
                  {overviewParagraphs.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      style={{
                        fontFamily: bodyFont,
                        fontSize: 17,
                        color: "#5a6a7e",
                        lineHeight: 1.85,
                        margin: 0,
                      }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
                <Link
                  href="/insights#all-case-studies"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 28,
                    fontFamily: bodyFont,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#134f89",
                    textDecoration: "none",
                  }}
                >
                  ← All case studies
                </Link>
              </div>
              <div
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  border: "1px solid rgba(19,79,137,0.10)",
                  boxShadow: "0 24px 56px rgba(10,30,61,0.12)",
                  background: "#0a1e3d",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.heroImage} alt={item.title} style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }} />
                <div style={{ padding: "22px 24px", background: "linear-gradient(135deg, #0a1e3d 0%, #134f89 100%)" }}>
                  <p style={{ fontFamily: bodyFont, fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.65, margin: 0 }}>
                    {item.summary}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div id="cs-impact" style={{ scrollMarginTop: 100, marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(145deg, #0a1e3d, #134f89)",
                  color: "#fff",
                }}
              >
                <IconSpark />
              </span>
              <div>
                <h2 style={{ fontFamily: displayFont, fontSize: "clamp(26px, 2.8vw, 34px)", fontWeight: 700, color: "#0a1e3d", margin: 0 }}>
                  Impact at a glance
                </h2>
                <p style={{ fontFamily: bodyFont, fontSize: 15, color: "#7a8797", margin: "4px 0 0" }}>
                  Key metrics from the network
                </p>
              </div>
            </div>
            <div className="cs-stats-grid">
              {item.stats.map((stat) => {
                const Icon = statIconForLabel(stat.label);
                return (
                  <div
                    key={stat.label}
                    style={{
                      background: "#fff",
                      borderRadius: 18,
                      padding: "22px 20px",
                      border: "1px solid rgba(19,79,137,0.08)",
                      boxShadow: "0 8px 28px rgba(10,30,61,0.06)",
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(145deg, #0a1e3d, #134f89)",
                        color: "#fff",
                        marginBottom: 14,
                      }}
                    >
                      <Icon />
                    </div>
                    <div style={{ fontFamily: displayFont, fontSize: 30, fontWeight: 700, color: "#0a1e3d", lineHeight: 1.1, marginBottom: 6 }}>
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontFamily: bodyFont,
                        fontSize: 11,
                        color: "#134f89",
                        textTransform: "uppercase",
                        letterSpacing: "0.07em",
                        fontWeight: 700,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Challenge */}
          <div id="cs-challenge" style={{ scrollMarginTop: 100, marginBottom: 32 }}>
            <div
              style={{
                background: "#fff",
                borderRadius: 24,
                border: "1px solid rgba(19,79,137,0.08)",
                padding: "36px 40px",
                boxShadow: "0 16px 48px rgba(10,30,61,0.07)",
                borderLeft: "4px solid #c44a3a",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <span
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(196,74,58,0.12)",
                    color: "#c44a3a",
                  }}
                >
                  <IconAlert />
                </span>
                <h2 style={{ fontFamily: displayFont, fontSize: "clamp(24px, 2.5vw, 32px)", fontWeight: 700, color: "#0a1e3d", margin: 0 }}>
                  Challenge
                </h2>
              </div>
              <div style={{ display: "grid", gap: 16 }}>
                {item.challenge.map((paragraph) => (
                  <p key={paragraph.slice(0, 50)} style={{ fontFamily: bodyFont, fontSize: 16.5, color: "#5a6a7e", lineHeight: 1.82, margin: 0 }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Solution */}
          <div id="cs-solution" style={{ scrollMarginTop: 100, marginBottom: 64 }}>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(10,30,61,0.03) 0%, rgba(19,79,137,0.06) 100%)",
                borderRadius: 24,
                border: "1px solid rgba(19,79,137,0.10)",
                padding: "36px 40px",
                boxShadow: "0 16px 48px rgba(10,30,61,0.06)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <span
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--accent)",
                    color: "#fff",
                  }}
                >
                  <IconBus />
                </span>
                <h2 style={{ fontFamily: displayFont, fontSize: "clamp(24px, 2.5vw, 32px)", fontWeight: 700, color: "#0a1e3d", margin: 0 }}>
                  Solution
                </h2>
              </div>
              <div style={{ display: "grid", gap: 16, marginBottom: item.solutionKeyComponents?.length ? 24 : 0 }}>
                {item.solution.map((paragraph) => (
                  <p key={paragraph.slice(0, 50)} style={{ fontFamily: bodyFont, fontSize: 16.5, color: "#5a6a7e", lineHeight: 1.82, margin: 0 }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {item.solutionKeyComponents?.length ? (
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 16,
                    padding: "24px 28px",
                    border: "1px solid rgba(19,79,137,0.08)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: bodyFont,
                      fontSize: 12,
                      color: "var(--accent)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 700,
                      marginBottom: 14,
                    }}
                  >
                    Key components
                  </div>
                  <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
                    {item.solutionKeyComponents.map((b, i) => (
                      <li
                        key={b}
                        style={{
                          fontFamily: bodyFont,
                          fontSize: 15,
                          color: "#3a4a5e",
                          lineHeight: 1.65,
                          margin: "10px 0",
                          paddingLeft: 28,
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "0.35em",
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            background: "rgba(255,130,93,0.2)",
                            color: "var(--accent)",
                            fontSize: 11,
                            fontWeight: 800,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: bodyFont,
                          }}
                        >
                          {i + 1}
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>

          {/* Network map */}
          {item.networkMap ? (
            <div id="cs-map" style={{ scrollMarginTop: 100, marginBottom: 64 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(19,79,137,0.12)",
                    color: "#134f89",
                  }}
                >
                  <IconMap />
                </span>
                <h2 style={{ fontFamily: displayFont, fontSize: "clamp(26px, 2.8vw, 34px)", fontWeight: 700, color: "#0a1e3d", margin: 0 }}>
                  {item.networkMap.title}
                </h2>
              </div>
              {item.networkMap.image ? (
                <figure style={{ margin: 0 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.networkMap.image}
                    alt={`${item.networkMap.title} — schematic diagram of Zu Peshawar BRT routes and stations`}
                    style={{
                      width: "100%",
                      maxHeight: 560,
                      objectFit: "contain",
                      borderRadius: 20,
                      border: "1px solid rgba(19,79,137,0.10)",
                      background: "#fff",
                      padding: 20,
                      boxShadow: "0 16px 48px rgba(10,30,61,0.08)",
                    }}
                  />
                  {item.networkMap.caption ? (
                    <figcaption
                      style={{
                        fontFamily: bodyFont,
                        fontSize: 14,
                        color: "#7a8797",
                        lineHeight: 1.6,
                        marginTop: 14,
                        maxWidth: 920,
                      }}
                    >
                      {item.networkMap.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ) : (
                <div
                  style={{
                    borderRadius: 20,
                    border: "1px dashed rgba(19,79,137,0.28)",
                    background: "rgba(255,255,255,0.9)",
                    padding: "48px 32px",
                    textAlign: "center",
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.8)",
                  }}
                >
                  <span style={{ display: "inline-flex", color: "#134f89", opacity: 0.7 }}>
                    <IconMap />
                  </span>
                  <p style={{ fontFamily: bodyFont, fontSize: 16, color: "#5a6a7e", lineHeight: 1.7, margin: "16px 0 0", maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
                    {item.networkMap.caption ?? "Route map asset can be added when available."}
                  </p>
                </div>
              )}
            </div>
          ) : null}

          {/* Benefits */}
          <div id="cs-benefits" style={{ scrollMarginTop: 100, marginBottom: 64 }}>
            <h2
              style={{
                fontFamily: displayFont,
                fontSize: "clamp(28px, 3vw, 38px)",
                fontWeight: 700,
                color: "#0a1e3d",
                margin: "0 0 8px",
              }}
            >
              Benefits
            </h2>
            <p style={{ fontFamily: bodyFont, fontSize: 16, color: "#7a8797", margin: "0 0 28px", maxWidth: 620 }}>
              What riders and operators gain from a connected BRT platform.
            </p>
            <div className="cs-benefits-grid">
              {item.benefits.map((benefit, idx) => {
                const BIcon = benefitIconAt(idx);
                return (
                  <div
                    key={benefit.title}
                    style={{
                      background: "#fff",
                      borderRadius: 20,
                      border: "1px solid rgba(19,79,137,0.08)",
                      padding: "26px 26px 24px",
                      boxShadow: "0 10px 36px rgba(10,30,61,0.06)",
                      transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 18px 44px rgba(10,30,61,0.10)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 10px 36px rgba(10,30,61,0.06)";
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(145deg, #0a1e3d, #134f89)",
                        color: "#fff",
                        marginBottom: 16,
                      }}
                    >
                      <BIcon />
                    </div>
                    <h3 style={{ fontFamily: displayFont, fontSize: 20, fontWeight: 650, color: "#0a1e3d", margin: "0 0 12px", lineHeight: 1.3 }}>
                      {benefit.title}
                    </h3>
                    <p style={{ fontFamily: bodyFont, fontSize: 15, color: "#5a6a7e", lineHeight: 1.78, margin: 0 }}>{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional */}
          {item.additionalNotes?.length ? (
            <div id="cs-more" style={{ scrollMarginTop: 100, marginBottom: 64 }}>
              <div
                style={{
                  borderRadius: 24,
                  padding: "36px 40px",
                  background: "linear-gradient(120deg, rgba(19,79,137,0.06) 0%, rgba(255,130,93,0.08) 100%)",
                  border: "1px solid rgba(19,79,137,0.10)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
                  <span
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#fff",
                      color: "#134f89",
                      border: "1px solid rgba(19,79,137,0.12)",
                    }}
                  >
                    <IconLeaf />
                  </span>
                  <h2 style={{ fontFamily: displayFont, fontSize: "clamp(24px, 2.6vw, 32px)", fontWeight: 700, color: "#0a1e3d", margin: 0 }}>
                    Sustainability & accessibility
                  </h2>
                </div>
                <div style={{ display: "grid", gap: 16 }}>
                  {item.additionalNotes.map((p) => (
                    <p key={p.slice(0, 48)} style={{ fontFamily: bodyFont, fontSize: 16, color: "#4a5a6e", lineHeight: 1.82, margin: 0 }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {/* CTA */}
          <div
            style={{
              background: "linear-gradient(135deg, #0a1e3d 0%, #134f89 100%)",
              borderRadius: 28,
              padding: "52px 48px",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "relative", zIndex: 1, maxWidth: 640 }}>
              <h2 style={{ fontFamily: displayFont, fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 700, margin: "0 0 14px", lineHeight: 1.15 }}>
                Ready for a similar outcome?
              </h2>
              <p style={{ fontFamily: bodyFont, fontSize: 17, color: "#fff", lineHeight: 1.75, margin: "0 0 28px" }}>
                Tell us about your corridor, fleet, and timeline — we’ll map the right TRVERSE stack to your network.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 26px",
                    borderRadius: 12,
                    background: "var(--accent)",
                    color: "#fff",
                    textDecoration: "none",
                    fontFamily: bodyFont,
                    fontWeight: 700,
                    fontSize: 15,
                    boxShadow: "0 10px 28px rgba(255,130,93,0.35)",
                  }}
                >
                  Contact TRVERSE
                </Link>
                <Link
                  href="/insights#all-case-studies"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 26px",
                    borderRadius: 12,
                    border: "2px solid rgba(255,255,255,0.35)",
                    color: "#fff",
                    textDecoration: "none",
                    fontFamily: bodyFont,
                    fontWeight: 700,
                    fontSize: 15,
                  }}
                >
                  More case studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyDetailBody;
