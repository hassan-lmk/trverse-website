import Link from "next/link";
import type { InsightItem } from "@/data/insights";
import InsightCardThumbnail from "@/components/insights/InsightCardThumbnail";

type Props = {
  items: InsightItem[];
};

const InsightsGrid = ({ items }: Props) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
      {items.map((item) => (
        <Link key={item.slug} href={`/insights/${item.slug}`} style={{ textDecoration: "none" }}>
          <article
            style={{
              background: "#f7f9fc",
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(19, 79, 137, 0.08)",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
              boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
            }}
          >
            <InsightCardThumbnail src={item.heroImage ?? item.image} alt={item.title} height={200} />
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
                  {item.category}
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#8a97a8" }}>
                  {item.date}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 650,
                  color: "#0a1e3d",
                  lineHeight: 1.35,
                  margin: 0,
                }}
              >
                {item.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14.5,
                  color: "#5a6a7e",
                  lineHeight: 1.7,
                  margin: 0,
                  flex: 1,
                }}
              >
                {item.excerpt}
              </p>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--accent)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 4,
                }}
              >
                Read article
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default InsightsGrid;
