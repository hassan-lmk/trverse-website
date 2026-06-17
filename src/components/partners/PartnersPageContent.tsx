"use client";

import React from "react";
import PartnersFormSection from "@/components/partners/PartnersFormSection";
import PartnersLogoGrid from "@/components/partners/PartnersLogoGrid";

const whyPartner = [
  {
    title: "Shared Innovation",
    description: "Co-develop solutions for complex operational challenges.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4v4M14 20v4M4 14h4M20 14h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Seamless Integration",
    description: "Flexible architecture that connects with existing systems.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="4" y="10" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <rect x="16" y="10" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 14h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Global Reach",
    description: "Access markets across mobility, infrastructure, and enterprise ecosystems.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 14h20M14 4c3 3.5 4.5 7 4.5 10S17 20.5 14 24M14 4c-3 3.5-4.5 7-4.5 10S11 20.5 14 24" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

const howWeWork = [
  {
    step: "01",
    title: "Discover",
    description: "Understand goals, capabilities, and opportunities.",
  },
  {
    step: "02",
    title: "Co-Create",
    description: "Design tailored solutions together.",
  },
  {
    step: "03",
    title: "Deliver",
    description: "Integrate, deploy, and scale for real-world impact.",
  },
];

const focusAreas = [
  {
    title: "Smart Mobility & Transportation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="4" y="9" width="20" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 20a2 2 0 104 0M16 20a2 2 0 104 0" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 14h20" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Smart Infrastructure & Cities",
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M4 22h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 22V12l5-4 5 4v10M17 22V10l4-3v15" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Enterprise Asset & Operations Management",
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="5" y="8" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="15" y="8" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="10" y="18" width="8" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Data & Integration Platforms",
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden>
        <ellipse cx="14" cy="8" rx="8" ry="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 8v6c0 1.7 3.6 3 8 3s8-1.3 8-3V8M6 14v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "AI-Enabled Decision Systems",
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M5 20V11M11 20V7M17 20v-5M23 20V5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M5 15l6-4 6 2 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const PartnersPageContent = () => {
  return (
    <>
      <section
        aria-labelledby="partners-logos-heading"
        className="partners-section"
        style={{ background: "#fff", padding: "90px 48px 100px" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", marginBottom: 48 }}>
          <div style={{ textAlign: "center" }}>
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
              Partners
            </span>
            <h2
              id="partners-logos-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 3.2vw, 44px)",
                fontWeight: 600,
                color: "#0a1e3d",
                margin: 0,
              }}
            >
              Technology and domain leaders we collaborate with
            </h2>
          </div>
        </div>
        <PartnersLogoGrid />
      </section>

      <section
        aria-labelledby="partners-collaboration-heading"
        className="partners-section"
        style={{ background: "#f7f9fc", padding: "100px 48px" }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2
            id="partners-collaboration-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 600,
              color: "#0a1e3d",
              margin: "0 0 24px",
              lineHeight: 1.2,
            }}
          >
            Built on Collaboration
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "#5a6a7e",
              lineHeight: 1.8,
              margin: "0 0 20px",
            }}
          >
            TRVERSE partners with organizations that are shaping the future of connected operations
            and digital infrastructure.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "#5a6a7e",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Backed by LMKR&apos;s global enterprise legacy, we co-create scalable solutions that drive
            real-world impact across industries.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="partners-why-heading"
        className="partners-section"
        style={{ background: "#fff", padding: "100px 48px" }}
      >
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
              Why Partner
            </span>
            <h2
              id="partners-why-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 3.2vw, 44px)",
                fontWeight: 600,
                color: "#0a1e3d",
                margin: "0 0 16px",
              }}
            >
              Why Partner with TRVERSE
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                color: "#5a6a7e",
                lineHeight: 1.7,
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              We focus on partnerships that create measurable outcomes.
            </p>
          </div>

          <div className="partners-why-grid">
            {whyPartner.map((item) => (
              <article key={item.title} className="partners-card">
                <div className="partners-card-icon" aria-hidden>
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 600,
                    color: "#0a1e3d",
                    margin: "0 0 12px",
                  }}
                >
                  {item.title}
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
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="partners-how-heading"
        className="partners-section"
        style={{ background: "#f7f9fc", padding: "100px 48px" }}
      >
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
              Our Approach
            </span>
            <h2 id="partners-how-heading" style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 3.2vw, 44px)",
              fontWeight: 600,
              color: "#0a1e3d",
              margin: 0,
            }}>
              How We Work
            </h2>
          </div>

          <ol className="partners-steps-grid" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {howWeWork.map((item) => (
              <li key={item.title}>
                <article className="partners-step-card">
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "var(--accent)",
                      letterSpacing: "0.08em",
                      display: "block",
                      marginBottom: 14,
                    }}
                  >
                    {item.step}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 24,
                      fontWeight: 600,
                      color: "#0a1e3d",
                      margin: "0 0 12px",
                    }}
                  >
                    {item.title}
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
                    {item.description}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="partners-focus-heading"
        className="partners-section"
        style={{ background: "#fff", padding: "100px 48px 110px" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
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
              Industries
            </span>
            <h2
              id="partners-focus-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 3.2vw, 44px)",
                fontWeight: 600,
                color: "#0a1e3d",
                margin: 0,
              }}
            >
              Focus Areas
            </h2>
          </div>

          <div className="partners-focus-layout">
            <div className="partners-focus-row">
              {focusAreas.slice(0, 3).map((area) => (
                <article key={area.title} className="partners-focus-card">
                  <div className="partners-focus-card-icon" aria-hidden>
                    {area.icon}
                  </div>
                  <h3 className="partners-focus-card-title">{area.title}</h3>
                </article>
              ))}
            </div>
            <div className="partners-focus-row partners-focus-row--center">
              {focusAreas.slice(3).map((area) => (
                <article key={area.title} className="partners-focus-card">
                  <div className="partners-focus-card-icon" aria-hidden>
                    {area.icon}
                  </div>
                  <h3 className="partners-focus-card-title">{area.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PartnersFormSection />

      <section className="partners-section" style={{ background: "#f7f9fc", padding: "0 48px 110px" }}>
        <div
          className="partners-closing-panel"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            background: "linear-gradient(135deg, #0a1e3d 0%, #134f89 100%)",
            borderRadius: 28,
            padding: "72px 64px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
              opacity: 0.35,
            }}
            aria-hidden
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/CTA-BG.webp)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              opacity: 0.8,
              mixBlendMode: "screen",
              filter: "contrast(1.05) saturate(0.95)",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(10,30,61,0.88) 0%, rgba(10,30,61,0.66) 42%, rgba(10,30,61,0.18) 100%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 760, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 600,
                color: "#fff",
                lineHeight: 1.35,
                margin: "0 0 32px",
              }}
            >
              Built on trust. Driven by outcomes. Designed for scale.
            </p>
            <a href="#partner-form" className="hero-btn-primary">
              Become a Partner
            </a>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .partners-why-grid,
        .partners-steps-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        .partners-card,
        .partners-step-card {
          background: #f7f9fc;
          border: 1px solid rgba(19, 79, 137, 0.08);
          border-radius: 18px;
          padding: 28px;
          height: 100%;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .partners-card:hover,
        .partners-step-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 38px rgba(10, 30, 61, 0.08);
          border-color: rgba(255, 130, 93, 0.25);
        }
        .partners-card-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(19, 79, 137, 0.08);
          color: #134f89;
          margin-bottom: 18px;
        }
        .partners-focus-layout {
          display: grid;
          gap: 20px;
          max-width: 1080px;
          margin: 0 auto;
        }
        .partners-focus-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }
        .partners-focus-row--center {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          max-width: calc((100% - 20px) * 2 / 3);
          margin: 0 auto;
          width: 100%;
        }
        .partners-focus-card {
          background: linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%);
          border: 1px solid rgba(19, 79, 137, 0.08);
          border-radius: 18px;
          padding: 28px 24px;
          min-height: 148px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .partners-focus-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 38px rgba(10, 30, 61, 0.08);
          border-color: rgba(255, 130, 93, 0.25);
        }
        .partners-focus-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 130, 93, 0.1);
          color: #134f89;
          flex-shrink: 0;
        }
        .partners-focus-card-title {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 600;
          color: #0a1e3d;
          line-height: 1.35;
          margin: 0;
          letter-spacing: -0.01em;
        }
        @media (max-width: 1024px) {
          .partners-section {
            padding-left: 28px !important;
            padding-right: 28px !important;
          }
          .partners-why-grid,
          .partners-steps-grid {
            grid-template-columns: 1fr !important;
          }
          .partners-focus-row,
          .partners-focus-row--center {
            grid-template-columns: 1fr !important;
            max-width: none !important;
          }
          .partners-closing-panel {
            padding: 48px 32px !important;
          }
        }
        @media (max-width: 700px) {
          .partners-section {
            padding-top: 72px !important;
            padding-bottom: 72px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
      `,
        }}
      />
    </>
  );
};

export default PartnersPageContent;
