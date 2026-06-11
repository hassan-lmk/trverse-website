"use client";

import React from "react";

const tabs = [
  { id: "afc", label: "Automated Fare Collection", short: "AFC" },
  { id: "its", label: "Intelligent Transport Systems", short: "ITS" },
  { id: "scheduling", label: "Advanced Scheduling System", short: "ADV" },
  { id: "control", label: "Fleet Management", short: "FLM" },
  { id: "micro", label: "Micro-Mobility Integration", short: "MMI" },
  { id: "performance", label: "AI Monitoring and Control", short: "AIC" },
];

const SolutionsOverview = () => {
  const [active, setActive] = React.useState("afc");

  return (
    <section style={{
      background: "#f7f9fc",
      padding: "96px 48px 80px",
      borderTopLeftRadius: 48,
      borderTopRightRadius: 48,
      marginTop: -40,
      position: "relative",
      zIndex: 2,
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .sol-tab {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 12px;
          border: 1.5px solid rgba(10,30,61,0.08);
          background: #fff;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          color: #5a6a7e;
          transition: all 0.25s ease;
          text-decoration: none;
          white-space: nowrap;
        }
        .sol-tab:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-2px);
        }
        .sol-tab.active {
          background: var(--accent);
          border-color: var(--accent);
          color: #fff;
          box-shadow: 0 8px 24px rgba(255,130,93,0.3);
        }
        .sol-tab .tab-badge {
          font-size: 10px;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 6px;
          background: rgba(10,30,61,0.08);
          letter-spacing: 0.05em;
        }
        .sol-tab.active .tab-badge {
          background: rgba(255,255,255,0.2);
        }
      `}} />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            fontWeight: 700,
            color: "var(--accent)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: 16,
          }}>Our Solutions</span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 40px)",
            fontWeight: 700,
            color: "#0a1e3d",
            margin: "0 0 16px",
          }}>Fully integrated modules.<br />One connected system.</h2>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            color: "#6a7a8e",
            maxWidth: 480,
            margin: "0 auto",
            lineHeight: 1.7,
          }}>Jump to any solution or scroll through to explore the full platform.</p>
        </div>

        {/* Tab navigation */}
        <div style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`sol-tab ${active === tab.id ? "active" : ""}`}
              onClick={() => setActive(tab.id)}
            >
              <span className="tab-badge">{tab.short}</span>
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
