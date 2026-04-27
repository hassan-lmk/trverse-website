"use client";

import React from "react";

const SolutionsHero = () => {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0a1e3d 0%, #134f89 60%, #0a1e3d 100%)",
        padding: "180px 48px 120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-18px) scale(1.04); }
        }
        @keyframes heroPulse {
          0%, 100% { opacity: 0.12; transform: scale(1); }
          50% { opacity: 0.22; transform: scale(1.08); }
        }
        .sol-hero-badge {
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
        .sol-hero-stat {
          padding: 28px 36px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        .sol-hero-stat:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,130,93,0.3);
          transform: translateY(-4px);
        }
      `}} />

      {/* Decorative blobs */}
      <div style={{
        position: "absolute", top: -100, right: -100, width: 500, height: 500,
        borderRadius: "50%", background: "rgba(255,130,93,0.06)",
        animation: "heroPulse 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: -80, left: -80, width: 400, height: 400,
        borderRadius: "50%", background: "rgba(19,79,137,0.15)",
        animation: "heroPulse 10s ease-in-out infinite 2s",
      }} />

      {/* Grid pattern overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
        zIndex: 0,
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 780 }}>
          <div className="sol-hero-badge">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="4" fill="var(--accent)" />
            </svg>
            Solutions Portfolio
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 5vw, 68px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.08,
            margin: "0 0 28px",
            letterSpacing: "-0.02em",
          }}>
            Technology that powers<br />
            <span style={{ color: "var(--accent)" }}>better transport</span>
          </h1>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 18,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.75,
            margin: "0 0 20px",
            maxWidth: 640,
          }}>
            Designed to improve how transport systems operate, scale, and serve passengers.
          </p>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.75,
            margin: "0 0 60px",
            maxWidth: 640,
          }}>
            Transport systems depend on both public experience and operational performance. TRVERSE solutions address both through connected systems that bring together payments, planning, and control.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="/solutions#afc" className="hero-btn-primary">
              Explore Solutions
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="hero-btn-secondary">Contact Us</a>
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          marginTop: 80,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 60,
        }}>
          {[
            { val: "500M+", label: "Annual Ridership Supported" },
            { val: "5", label: "Core Solution Modules" },
            { val: "Multi-City", label: "Global Deployments" },
            { val: "Open Loop", label: "Payment Architecture" },
          ].map((s, i) => (
            <div key={i} className="sol-hero-stat">
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: 32,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 8,
              }}>{s.val}</div>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.5,
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
