"use client";

import React from "react";
import Link from "next/link";
import type { InsightItem } from "@/data/insights";
import Pagination, { ITEMS_PER_PAGE } from "@/components/insights/Pagination";

type Props = {
  items: InsightItem[];
};

const InsightsGrid = ({ items }: Props) => {
  const gridRef = React.useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={gridRef} style={{ scrollMarginTop: 120 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {visibleItems.map((item) => (
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
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 16px 38px rgba(10, 30, 61, 0.10)";
              e.currentTarget.style.borderColor = "rgba(255,130,93,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.02)";
              e.currentTarget.style.borderColor = "rgba(19, 79, 137, 0.08)";
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={item.title} style={{ width: "100%", height: 260, objectFit: "cover" }} />
            <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
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
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#7a8797" }}>{item.date}</span>
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
                {item.excerpt}
              </p>
              <div
                style={{
                  marginTop: "auto",
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--accent)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                Read article
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="var(--accent)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </article>
        </Link>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        label="Insights pagination"
      />
    </div>
  );
};

export default InsightsGrid;

