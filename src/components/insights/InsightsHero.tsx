import type { ReactNode } from "react";

type Props = {
  badge?: string;
  title: ReactNode;
  description?: string;
  backgroundImageSrc: string;
  backgroundImageAlt?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

const InsightsHero = ({
  badge = "Insights",
  title,
  description,
  backgroundImageSrc,
  backgroundImageAlt = "",
  primaryCta,
  secondaryCta,
}: Props) => {
  return (
    <section
      style={{
        position: "relative",
        background: "#0a1e3d",
        padding: "180px 48px 120px",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        borderBottomLeftRadius: 48,
        borderBottomRightRadius: 48,
        boxShadow: "0 12px 40px rgba(0,0,0,0.05)",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .insights-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(255,130,93,0.12);
          border: 1px solid rgba(255,130,93,0.25);
          border-radius: 100px;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 28px;
        }
      `,
        }}
      />

      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={backgroundImageSrc}
          alt={backgroundImageAlt}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "scale(1.03)",
            filter: "saturate(0.95)",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(4, 14, 31, 0.75)" }} />
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          zIndex: 1,
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2, width: "100%" }}>
        <div style={{ maxWidth: 860 }}>
          <div className="insights-hero-badge">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="4" fill="var(--accent)" />
            </svg>
            {badge}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.08,
              margin: "0 0 28px",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>

          {description ? (
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 18,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.75,
                margin: "0 0 60px",
                maxWidth: 720,
              }}
            >
              {description}
            </p>
          ) : null}

          {(primaryCta || secondaryCta) && (
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {primaryCta ? (
                <a href={primaryCta.href} className="hero-btn-primary">
                  {primaryCta.label}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="#fff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ) : null}
              {secondaryCta ? (
                <a href={secondaryCta.href} className="hero-btn-secondary">
                  {secondaryCta.label}
                </a>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InsightsHero;
