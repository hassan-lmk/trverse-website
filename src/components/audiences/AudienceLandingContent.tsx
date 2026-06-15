import Link from "next/link";
import type { AudienceLandingDoc } from "@/data/audienceLandings";

type Props = {
  doc: AudienceLandingDoc;
};

export default function AudienceLandingContent({ doc }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .audience-crumb {
          font-family: var(--font-body);
          font-size: 13px;
          color: #6a7a8e;
        }
        .audience-crumb a {
          color: #134f89;
          text-decoration: none;
          font-weight: 600;
        }
        .audience-crumb a:hover {
          text-decoration: underline;
          color: var(--accent);
        }
        .audience-cap-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          border: 1px solid rgba(10,30,61,0.08);
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
        }
        .audience-cap-table th,
        .audience-cap-table td {
          padding: 20px 24px;
          text-align: left;
          vertical-align: top;
          border-bottom: 1px solid rgba(10,30,61,0.06);
        }
        .audience-cap-table tr:last-child th,
        .audience-cap-table tr:last-child td {
          border-bottom: none;
        }
        .audience-cap-table thead th {
          background: #f7f9fc;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6a7a8e;
        }
        .audience-cap-table tbody th {
          width: 34%;
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 700;
          color: #0a1e3d;
          background: #fff;
        }
        .audience-cap-table tbody td {
          font-family: var(--font-body);
          font-size: 15px;
          color: #5a6a7e;
          line-height: 1.65;
        }
        .audience-cap-cards {
          display: none;
        }
        @media (max-width: 767px) {
          .audience-cap-table-wrap {
            display: none;
          }
          .audience-cap-cards {
            display: grid;
            gap: 14px;
          }
          .audience-cap-card {
            background: #fff;
            border: 1px solid rgba(10,30,61,0.08);
            border-radius: 16px;
            padding: 20px;
          }
          .audience-cap-card h3 {
            margin: 0 0 8px;
            font-family: var(--font-display);
            font-size: 17px;
            font-weight: 700;
            color: #0a1e3d;
          }
          .audience-cap-card p {
            margin: 0;
            font-family: var(--font-body);
            font-size: 15px;
            color: #5a6a7e;
            line-height: 1.65;
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
          min-height: 360px;
          border-left: 1px solid rgba(255, 255, 255, 0.08);
        }
        .audience-proof-visual-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .audience-proof-visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(8,24,47,0.08) 0%, rgba(8,24,47,0.55) 58%, rgba(8,24,47,0.92) 100%);
        }
        .audience-proof-stats {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 12px;
          align-items: center;
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
            min-height: 300px;
            border-left: none;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
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

      <section
        style={{
          background: "#fff",
          padding: "28px 48px 0",
          marginTop: -24,
          position: "relative",
          zIndex: 3,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <nav className="audience-crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/#about-us">Who we serve</Link>
            <span aria-hidden="true"> / </span>
            <span style={{ color: "#0a1e3d", fontWeight: 600 }}>{doc.label}</span>
          </nav>
        </div>
      </section>

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
            The challenge
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
              What TRVERSE delivers for your authority
            </h2>
          </div>

          <div className="audience-cap-table-wrap">
            <table className="audience-cap-table">
              <thead>
                <tr>
                  <th scope="col">Capability</th>
                  <th scope="col">What it means for your authority</th>
                </tr>
              </thead>
              <tbody>
                {doc.capabilities.map((row) => (
                  <tr key={row.capability}>
                    <th scope="row">{row.capability}</th>
                    <td>{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="audience-cap-cards" aria-label="Capabilities">
            {doc.capabilities.map((row) => (
              <article key={row.capability} className="audience-cap-card">
                <h3>{row.capability}</h3>
                <p>{row.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

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
              Results that speak for themselves
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
                const chips = doc.proofMetaChips ?? doc.proofMeta.split("|").map((part) => part.trim()).filter(Boolean);
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={doc.proofImage} alt="" role="presentation" />
                <div className="audience-proof-visual-overlay" aria-hidden />
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
            ) : null}
          </figure>
        </div>
      </section>

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
                  Ready to modernise your network?
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
                  Speak with our team about AFC, real-time operations, and unified reporting for transport authorities.
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
                <Link href={doc.secondaryCta.href} className="audience-cta-outline">
                  {doc.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
