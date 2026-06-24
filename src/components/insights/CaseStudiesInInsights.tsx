import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/data/caseStudies";

type Props = {
  studies: CaseStudy[];
};

const IconArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CaseStudiesInInsights = ({ studies }: Props) => {
  if (!studies.length) return null;

  return (
    <section id="all-case-studies" style={{ background: "#fff", padding: "100px 48px 70px" }}>
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
            Case Studies
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 3.2vw, 44px)",
              fontWeight: 600,
              color: "#0a1e3d",
              margin: "0 0 18px",
            }}
          >
            Real-world deployments powered by TRVERSE
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "#5a6a7e",
              maxWidth: 720,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Learn how TRVERSE supports transit operators with reliable operations, secure payments, and better passenger
            experiences.
          </p>
        </div>

        <div style={{ scrollMarginTop: 120 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
            {studies.map((item) => (
              <Link key={item.slug} href={`/case-studies/${item.slug}`} style={{ textDecoration: "none" }}>
                <article
                  style={{
                    background: "#f7f9fc",
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid rgba(19, 79, 137, 0.08)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                  }}
                >
                  <div style={{ position: "relative", width: "100%", height: 210 }}>
                    <Image
                      src={item.heroImage}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 11,
                          color: "var(--accent)",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                        }}
                      >
                        {item.location}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 22,
                        fontWeight: 600,
                        color: "#0a1e3d",
                        margin: 0,
                        lineHeight: 1.35,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 14.5,
                        color: "#5a6a7e",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {item.summary}
                    </p>

                    <div
                      style={{
                        marginTop: "auto",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesInInsights;
