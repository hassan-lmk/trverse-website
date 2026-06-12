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
  "Smart Mobility & Transportation",
  "Smart Infrastructure & Cities",
  "Enterprise Asset & Operations Management",
  "Data & Integration Platforms",
  "AI-Enabled Decision Systems",
];

const PartnersPageContent = () => {
  return (
    <>
      <section
        aria-labelledby="partners-logos-heading"
        className="partners-section"
        style={{ background: "#fff", padding: "90px 48px 100px" }}
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
          <PartnersLogoGrid />
        </div>
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

          <ul className="partners-focus-list" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {focusAreas.map((area) => (
              <li key={area} className="partners-focus-item">
                <span className="partners-focus-dot" aria-hidden />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#0a1e3d",
                  }}
                >
                  {area}
                </span>
              </li>
            ))}
          </ul>
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
            <a href="/contact" className="hero-btn-primary">
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
        .partners-focus-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          max-width: 900px;
          margin: 0 auto;
        }
        .partners-focus-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f7f9fc;
          border: 1px solid rgba(19, 79, 137, 0.08);
          border-radius: 14px;
          padding: 18px 20px;
        }
        .partners-focus-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }
        @media (max-width: 1024px) {
          .partners-section {
            padding-left: 28px !important;
            padding-right: 28px !important;
          }
          .partners-why-grid,
          .partners-steps-grid,
          .partners-focus-list {
            grid-template-columns: 1fr !important;
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
