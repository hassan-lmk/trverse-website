import Link from "next/link";
import type { AudienceLandingDoc } from "@/data/audienceLandings";

type Props = {
  doc: AudienceLandingDoc;
};

function CapabilityIcon({ index }: { index: number }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 28 28",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (index % 5) {
    case 0:
      return (
        <svg {...common}>
          <rect x="4" y="7" width="20" height="14" rx="2" />
          <path d="M4 11h20" />
          <path d="M8 17h6" />
        </svg>
      );
    case 1:
      return (
        <svg {...common}>
          <circle cx="14" cy="14" r="9" />
          <path d="M14 9v5l3 2" />
        </svg>
      );
    case 2:
      return (
        <svg {...common}>
          <path d="M14 4l2.2 6.8H23l-5.4 3.9 2.1 6.8L14 17.6 8.3 21.5l2.1-6.8L5 10.8h6.8L14 4z" />
        </svg>
      );
    case 3:
      return (
        <svg {...common}>
          <ellipse cx="14" cy="7" rx="8" ry="3" />
          <path d="M6 7v6c0 1.7 3.6 3 8 3s8-1.3 8-3V7" />
          <path d="M6 13v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M14 4l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-3z" />
          <path d="M10.5 14l2 2 5-5" />
        </svg>
      );
  }
}

export default function AudienceLandingContent({ doc }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .audience-cap-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }
        .audience-cap-card {
          background: #fff;
          border: 1px solid rgba(10, 30, 61, 0.08);
          border-radius: 20px;
          padding: 28px 26px 30px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-height: 100%;
        }
        .audience-cap-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), #134f89);
          opacity: 0;
          transition: opacity 0.22s ease;
        }
        .audience-cap-card:hover {
          border-color: rgba(255, 130, 93, 0.35);
          box-shadow: 0 16px 48px rgba(10, 30, 61, 0.08);
          transform: translateY(-3px);
        }
        .audience-cap-card:hover::before {
          opacity: 1;
        }
        .audience-cap-card-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(145deg, rgba(255, 130, 93, 0.14) 0%, rgba(19, 79, 137, 0.1) 100%);
          border: 1px solid rgba(255, 130, 93, 0.2);
          color: #134f89;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .audience-cap-card h3 {
          margin: 0;
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 700;
          color: #0a1e3d;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }
        .audience-cap-card p {
          margin: 0;
          font-family: var(--font-body);
          font-size: 15px;
          color: #5a6a7e;
          line-height: 1.65;
        }
        @media (min-width: 960px) {
          .audience-cap-grid--five {
            grid-template-columns: repeat(6, minmax(0, 1fr));
          }
          .audience-cap-grid--five .audience-cap-card {
            grid-column: span 2;
          }
          .audience-cap-grid--five .audience-cap-card:nth-child(4) {
            grid-column: 2 / span 2;
          }
          .audience-cap-grid--five .audience-cap-card:nth-child(5) {
            grid-column: 4 / span 2;
          }
        }
        @media (max-width: 959px) {
          .audience-cap-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 639px) {
          .audience-cap-grid {
            grid-template-columns: 1fr;
          }
          .audience-cap-grid--five .audience-cap-card:nth-child(4),
          .audience-cap-grid--five .audience-cap-card:nth-child(5) {
            grid-column: auto;
          }
        }
        .audience-cta-inner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 32px 40px;
        }
        .audience-cta-copy {
          flex: 1 1 320px;
          max-width: 640px;
        }
        .audience-cta-group {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
          justify-content: flex-end;
          flex: 0 0 auto;
        }
        .audience-cta-primary,
        .audience-cta-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-sizing: border-box;
          padding: 16px 28px;
          white-space: nowrap;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.25s ease;
        }
        .audience-cta-primary {
          background: var(--accent);
          color: #fff;
          border: 2px solid transparent;
        }
        .audience-cta-primary:hover {
          background: #e06d4a;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(255,130,93,0.35);
        }
        .audience-cta-outline {
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.35);
        }
        .audience-cta-outline:hover {
          border-color: #fff;
          background: rgba(255,255,255,0.06);
        }
        @media (max-width: 700px) {
          .audience-cta-inner {
            flex-direction: column;
            align-items: stretch;
          }
          .audience-cta-copy {
            max-width: none;
          }
          .audience-cta-group {
            flex-direction: column;
            align-items: stretch;
          }
          .audience-cta-primary,
          .audience-cta-outline {
            width: 100%;
            white-space: normal;
            text-align: center;
          }
        }
        .audience-proof-section {
          background: #f7f9fc;
          padding: 96px 48px;
        }
        .audience-proof-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
          border-radius: 32px;
          overflow: hidden;
          background: linear-gradient(145deg, #08182f 0%, #0f3d6e 58%, #134f89 100%);
          box-shadow: 0 28px 80px rgba(10, 30, 61, 0.16);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .audience-proof-quote-col {
          position: relative;
          padding: clamp(40px, 5vw, 64px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .audience-proof-quote-col::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 12% 18%, rgba(255,130,93,0.14) 0%, transparent 42%);
          pointer-events: none;
        }
        .audience-proof-mark {
          position: relative;
          z-index: 1;
          font-family: var(--font-display);
          font-size: clamp(72px, 8vw, 110px);
          line-height: 0.8;
          font-weight: 700;
          color: rgba(255, 130, 93, 0.22);
          margin: 0 0 8px;
          user-select: none;
        }
        .audience-proof-quote {
          position: relative;
          z-index: 1;
          margin: 0 0 32px;
          font-family: var(--font-display);
          font-size: clamp(24px, 2.5vw, 34px);
          font-weight: 600;
          color: #fff;
          line-height: 1.42;
          letter-spacing: -0.02em;
          max-width: 640px;
        }
        .audience-proof-footer {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px 20px;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }
        .audience-proof-avatar {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(255, 130, 93, 0.16);
          border: 1px solid rgba(255, 130, 93, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          flex-shrink: 0;
        }
        .audience-proof-attribution cite {
          display: block;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          font-style: normal;
          margin-bottom: 4px;
        }
        .audience-proof-attribution span {
          font-family: var(--font-body);
          font-size: 13px;
          color: rgba(255, 255, 255, 0.58);
        }
        .audience-proof-chips {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }
        .audience-proof-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.88);
          letter-spacing: 0.02em;
        }
        .audience-proof-visual-col {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(28px, 4vw, 40px);
          border-left: 1px solid rgba(255, 255, 255, 0.08);
        }
        .audience-proof-visual-frame {
          position: relative;
          width: 100%;
          max-width: 400px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 18px 48px rgba(0, 0, 0, 0.22);
          background: rgba(255, 255, 255, 0.04);
        }
        .audience-proof-visual-frame img {
          width: 100%;
          height: clamp(220px, 28vw, 300px);
          object-fit: cover;
          display: block;
        }
        .audience-proof-visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(8,24,47,0.04) 0%, rgba(8,24,47,0.42) 58%, rgba(8,24,47,0.78) 100%);
          pointer-events: none;
        }
        .audience-proof-stats {
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 16px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 10px;
          align-items: center;
          z-index: 1;
        }
        .audience-proof-stat {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 18px;
          padding: 18px 16px;
          text-align: center;
        }
        .audience-proof-stat strong {
          display: block;
          font-family: var(--font-display);
          font-size: clamp(28px, 3vw, 36px);
          font-weight: 700;
          color: #fff;
          line-height: 1;
          margin-bottom: 8px;
          letter-spacing: -0.03em;
        }
        .audience-proof-stat span {
          display: block;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.4;
        }
        .audience-proof-stat--after strong {
          color: #ffb89f;
        }
        .audience-proof-stat-arrow {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--accent);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 24px rgba(255, 130, 93, 0.35);
        }
        @media (max-width: 959px) {
          .audience-proof-section {
            padding: 80px 28px;
          }
          .audience-proof-panel {
            grid-template-columns: 1fr;
          }
          .audience-proof-visual-col {
            padding: 24px 28px 32px;
            border-left: none;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
          }
          .audience-proof-visual-frame {
            max-width: 100%;
          }
        }
        @media (max-width: 700px) {
          .audience-proof-section {
            padding: 72px 20px;
          }
          .audience-proof-stats {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .audience-proof-stat-arrow {
            margin: 0 auto;
            transform: rotate(90deg);
          }
        }
        .audience-cta-section {
          background: #f7f9fc;
          padding: 0 48px 120px;
        }
        .audience-cta-panel {
          position: relative;
          overflow: hidden;
          border-radius: 32px;
          padding: clamp(48px, 6vw, 80px);
          background: linear-gradient(135deg, #0a1e3d 0%, #134f89 100%);
        }
        @media (max-width: 700px) {
          .audience-cta-section {
            padding: 0 20px 84px;
          }
        }
      `,
        }}
      />

      <section style={{ background: "#fff", padding: "56px 48px 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              fontWeight: 800,
              color: "var(--accent)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: 16,
            }}
          >
            The Challenge
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 700,
              color: "#0a1e3d",
              margin: "0 0 20px",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            {doc.challengeHeading}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "#5a6a7e",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {doc.challengeBody}
          </p>
        </div>
      </section>

      <section
        style={{
          background: "#f7f9fc",
          padding: "80px 48px 96px",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48, maxWidth: 720, marginInline: "auto" }}>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 800,
                color: "var(--accent)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 14,
              }}
            >
              Capabilities
            </span>
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
              {doc.capabilitiesHeading}
            </h2>
          </div>

          <div
            className={`audience-cap-grid${doc.capabilities.length === 5 ? " audience-cap-grid--five" : ""}`}
            role="list"
            aria-label="Capabilities"
          >
            {doc.capabilities.map((row, i) => (
              <article key={row.capability} className="audience-cap-card" role="listitem">
                <div className="audience-cap-card-icon" aria-hidden>
                  <CapabilityIcon index={i} />
                </div>
                <h3>{row.capability}</h3>
                <p>{row.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {doc.proofQuote ? (
      <section className="audience-proof-section" aria-labelledby="audience-proof-heading">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 800,
                color: "var(--accent)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 14,
              }}
            >
              {doc.proofEyebrow ?? "Proof point"}
            </span>
            <h2
              id="audience-proof-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 2.6vw, 34px)",
                fontWeight: 700,
                color: "#0a1e3d",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Results That Speak For Themselves
            </h2>
          </div>

          <figure className="audience-proof-panel">
            <div className="audience-proof-quote-col">
              <p className="audience-proof-mark" aria-hidden>
                &ldquo;
              </p>
              <blockquote style={{ margin: 0, padding: 0, border: "none" }}>
                <p className="audience-proof-quote">{doc.proofQuote}</p>
              </blockquote>
              <figcaption className="audience-proof-footer">
                <div className="audience-proof-avatar" aria-hidden>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 22V10a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" />
                    <path d="M12 22V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v18" />
                    <path d="M2 22h20" />
                  </svg>
                </div>
                <div className="audience-proof-attribution">
                  <cite>{doc.proofAttribution}</cite>
                  {!doc.proofMetaChips ? <span>{doc.proofMeta}</span> : null}
                </div>
              </figcaption>
              {(() => {
                const chips =
                  doc.proofMetaChips ??
                  doc.proofMeta
                    ?.split("|")
                    .map((part) => part.trim())
                    .filter(Boolean) ??
                  [];
                if (chips.length === 0) return null;
                return (
                  <div className="audience-proof-chips">
                    {chips.map((chip) => (
                      <span key={chip} className="audience-proof-chip">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                          <circle cx="6" cy="6" r="3" fill="var(--accent)" />
                        </svg>
                        {chip}
                      </span>
                    ))}
                  </div>
                );
              })()}
            </div>

            {doc.proofImage ? (
              <div className="audience-proof-visual-col">
                <div className="audience-proof-visual-frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={doc.proofImage} alt={`${doc.label} deployment proof`} />
                  {doc.proofStats ? <div className="audience-proof-visual-overlay" aria-hidden /> : null}
                  {doc.proofStats ? (
                    <div className="audience-proof-stats" aria-label="Impact metrics">
                      <div className="audience-proof-stat">
                        <strong>{doc.proofStats.before.value}</strong>
                        <span>{doc.proofStats.before.label}</span>
                      </div>
                      <div className="audience-proof-stat-arrow" aria-hidden>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="audience-proof-stat audience-proof-stat--after">
                        <strong>{doc.proofStats.after.value}</strong>
                        <span>{doc.proofStats.after.label}</span>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
          </figure>
        </div>
      </section>
      ) : null}

      <section className="audience-cta-section">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="audience-cta-panel">
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
                opacity: 0.35,
                pointerEvents: "none",
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
                  "linear-gradient(90deg, rgba(10,30,61,0.9) 0%, rgba(10,30,61,0.72) 45%, rgba(10,30,61,0.28) 100%)",
                pointerEvents: "none",
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(circle at 18% 22%, rgba(255,130,93,0.16) 0%, transparent 42%)",
                pointerEvents: "none",
              }}
            />
            <div className="audience-cta-inner" style={{ position: "relative", zIndex: 1 }}>
              <div className="audience-cta-copy">
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
                  {doc.ctaHeading}
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
                  {doc.ctaBody}
                </p>
              </div>
              <div className="audience-cta-group">
                <Link href={doc.primaryCta.href} className="audience-cta-primary">
                  {doc.primaryCta.label}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
