"use client";

import React from "react";

const journeyMilestones = [
  {
    year: "1994",
    title: "LMKR Founded",
    description: "Enterprise software and geospatial innovation begins.",
  },
  {
    year: "2000s",
    title: "Global Expansion",
    description: "Serving 80+ countries across energy, infrastructure, and the public sector.",
  },
  {
    year: "2010s",
    title: "TRVERSE Emerges",
    description: "A next-generation platform for connected operations and intelligent systems.",
  },
];

function renderJourneyYear(year: string) {
  const decadeMatch = year.match(/^(\d{4})s$/i);
  if (decadeMatch) {
    return (
      <>
        {decadeMatch[1]}&apos;
        <span style={{ fontSize: "0.72em", fontWeight: 600, letterSpacing: "0.04em" }}>s</span>
      </>
    );
  }
  return year;
}

const deliverableIconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 28 28",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const deliverables = [
  {
    title: "Connected Operations",
    description: "Unifying systems, workflows, and field operations in real time.",
    icon: (
      <svg {...deliverableIconProps}>
        <circle cx="14" cy="14" r="3" />
        <circle cx="6" cy="8" r="2.2" />
        <circle cx="22" cy="8" r="2.2" />
        <circle cx="6" cy="20" r="2.2" />
        <circle cx="22" cy="20" r="2.2" />
        <path d="M11.5 12.2 7.8 9.5M16.5 12.2l3.7-2.7M11.5 15.8l-3.7 2.7M16.5 15.8l3.7 2.7" />
      </svg>
    ),
  },
  {
    title: "Data Intelligence",
    description: "Turning raw data into actionable insights for faster decisions.",
    icon: (
      <svg {...deliverableIconProps}>
        <path d="M5 22V13M10 22V9M15 22v-5M20 22V6" />
        <path d="M5 17l5-4 5 2 5-7" />
        <circle cx="20" cy="6" r="2.2" />
        <path d="M20 8.5V11" />
      </svg>
    ),
  },
  {
    title: "Smart Infrastructure Enablement",
    description: "Supporting cities, transport, and enterprise ecosystems.",
    icon: (
      <svg {...deliverableIconProps}>
        <path d="M4 22h20" />
        <path d="M8 22V13l6-5 6 5v9" />
        <path d="M12 22v-6h4v6" />
        <path d="M18 10h4v4" />
        <path d="M20 8v2" />
        <circle cx="20" cy="7" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Scalable Digital Platforms",
    description: "Built to grow with evolving operational needs.",
    icon: (
      <svg {...deliverableIconProps}>
        <rect x="5" y="16" width="18" height="6" rx="1.5" />
        <rect x="7" y="10" width="14" height="5" rx="1.5" />
        <rect x="9" y="5" width="10" height="4" rx="1.5" />
        <path d="M14 3v2M11 4.5 14 2l3 2.5" />
      </svg>
    ),
  },
];

const AboutPageContent = () => {
  return (
    <>
      <section
        aria-labelledby="about-foundation-heading"
        className="about-section"
        style={{ background: "#f7f9fc", padding: "100px 48px" }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            id="about-foundation-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 600,
              color: "#0a1e3d",
              margin: "0 0 28px",
              lineHeight: 1.2,
            }}
          >
            A Global Foundation in Enterprise Technology
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
            TRVERSE is built on the deep experience and global technology foundation of LMKR, a company
            with over three decades of delivering enterprise-grade software, data, and digital
            transformation solutions across industries and geographies.
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
            From energy and infrastructure to government and transportation, LMKR has consistently
            helped organizations turn complex systems into connected, intelligent ecosystems.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="about-journey-heading"
        className="about-section"
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
              Our Journey
            </span>
            <h2
              id="about-journey-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 3.2vw, 44px)",
                fontWeight: 600,
                color: "#0a1e3d",
                margin: 0,
              }}
            >
            Growth & Evolution
            </h2>
          </div>

          <ol className="about-journey-list" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {journeyMilestones.map((item, index) => (
              <li key={item.year} className="about-journey-item">
                <div className="about-journey-marker" aria-hidden>
                  <span className="about-journey-dot" />
                  {index < journeyMilestones.length - 1 ? <span className="about-journey-line" /> : null}
                </div>
                <article className="about-journey-card">
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--accent)",
                      letterSpacing: "0.08em",
                      margin: "0 0 8px",
                    }}
                  >
                    {renderJourneyYear(item.year)}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      fontWeight: 600,
                      color: "#0a1e3d",
                      margin: "0 0 10px",
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
        aria-labelledby="about-vision-heading"
        className="about-section"
        style={{ background: "#f7f9fc", padding: "100px 48px" }}
      >
        <div
          className="about-vision-grid"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div>
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
              TRVERSE Vision
            </span>
            <h2
              id="about-vision-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 600,
                color: "#0a1e3d",
                margin: "0 0 24px",
                lineHeight: 1.2,
              }}
            >
              One unified digital ecosystem
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
              TRVERSE transforms how organizations operate by connecting assets, people, mobility, and
              data into one unified digital ecosystem.
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
              We bring clarity to complexity through real-time intelligence, seamless integration,
              and scalable digital infrastructure.
            </p>
          </div>
          <div className="about-vision-image-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/about-vision-interchange.webp"
              alt="Aerial view of a connected highway interchange representing smart transport infrastructure"
              className="about-vision-image"
            />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-delivers-heading"
        className="about-section"
        style={{ background: "#fff", padding: "100px 48px 110px" }}
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
              What We Deliver
            </span>
            <h2
              id="about-delivers-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 3.2vw, 44px)",
                fontWeight: 600,
                color: "#0a1e3d",
                margin: 0,
              }}
            >
              What TRVERSE Delivers
            </h2>
          </div>

          <div className="about-deliverables-grid">
            {deliverables.map((item) => (
              <article key={item.title} className="about-deliverable-card">
                <div className="about-deliverable-icon" aria-hidden>
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#0a1e3d",
                    margin: "0 0 10px",
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
        aria-labelledby="about-future-heading"
        className="about-section"
        style={{ background: "#f7f9fc", padding: "0 48px 110px" }}
      >
        <div
          className="about-future-panel"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            background: "linear-gradient(135deg, #0a1e3d 0%, #134f89 100%)",
            borderRadius: 28,
            padding: "72px 64px",
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
          <div style={{ position: "relative", zIndex: 2, maxWidth: 760 }}>
            <h2
              id="about-future-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 3.2vw, 42px)",
                fontWeight: 600,
                color: "#fff",
                margin: "0 0 24px",
                lineHeight: 1.15,
              }}
            >
              Built for the Future
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                color: "#fff",
                lineHeight: 1.8,
                margin: "0 0 20px",
              }}
            >
              By combining LMKR&apos;s proven enterprise expertise with modern, AI-driven digital
              architecture, TRVERSE enables organizations to operate smarter, respond faster, and
              build resilient systems for the future.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                color: "#fff",
                lineHeight: 1.8,
                margin: "0 0 36px",
              }}
            >
              We are not just digitizing operations — we are redefining how connected ecosystems
              think, move, and perform.
            </p>
            <a href="/get-a-demo" className="hero-btn-primary">
              Get a Demo
            </a>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .about-journey-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        .about-journey-item {
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        .about-journey-marker {
          display: none;
        }
        .about-journey-card {
          background: #f7f9fc;
          border: 1px solid rgba(19, 79, 137, 0.08);
          border-radius: 18px;
          padding: 28px 24px;
          height: 100%;
          border-top: 4px solid #134f89;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .about-journey-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 38px rgba(10, 30, 61, 0.08);
          border-color: rgba(255, 130, 93, 0.25);
        }
        .about-deliverables-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }
        .about-deliverable-card {
          background: #f7f9fc;
          border: 1px solid rgba(19, 79, 137, 0.08);
          border-radius: 18px;
          padding: 28px;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .about-deliverable-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 38px rgba(10, 30, 61, 0.08);
          border-color: rgba(255, 130, 93, 0.25);
        }
        .about-deliverable-icon {
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
        .about-vision-image-wrap {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(19, 79, 137, 0.08);
          box-shadow: 0 16px 40px rgba(10, 30, 61, 0.08);
        }
        .about-vision-image {
          width: 100%;
          height: auto;
          display: block;
        }
        @media (max-width: 1024px) {
          .about-section {
            padding-left: 28px !important;
            padding-right: 28px !important;
          }
          .about-journey-list,
          .about-deliverables-grid,
          .about-vision-grid {
            grid-template-columns: 1fr !important;
          }
          .about-future-panel {
            padding: 48px 32px !important;
          }
        }
        @media (max-width: 700px) {
          .about-section {
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

export default AboutPageContent;
