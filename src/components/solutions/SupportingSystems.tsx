"use client";

import React from "react";

const systems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M7 11h8M7 7h5M7 15h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Asset & Inventory Management",
    desc: "Track and manage all physical assets across your network from a single system.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L2 7v5c0 5 4 8 9 9 5-1 9-4 9-9V7L11 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Fault & Incident Management",
    desc: "Log, track, and resolve faults and incidents quickly to minimize service disruption.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="8" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 8V5a3 3 0 0 1 6 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="11" cy="14" r="2" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
    title: "Access Control & Attendance",
    desc: "Manage staff access and track attendance across depots, stations, and control centres.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M7 19h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M11 17v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 9h10M6 12h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    title: "Passenger Information Displays",
    desc: "Real-time platform displays, digital boards, and in-vehicle information systems.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="5" y="1" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 17h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="8" y="5" width="6" height="8" rx="1" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
    title: "Mobile Apps & Digital Wallets",
    desc: "Passenger-facing apps for journey planning, mobile ticketing, and digital payments.",
  },
];

const SupportingSystems = () => {
  return (
    <section style={{
      background: "linear-gradient(135deg, #0a1e3d 0%, #134f89 100%)",
      padding: "120px 48px",
      position: "relative",
      overflow: "hidden",
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .supp-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 36px 32px;
          transition: all 0.3s ease;
          cursor: default;
        }
        .supp-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,130,93,0.3);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        .supp-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          margin-bottom: 24px;
          transition: all 0.3s ease;
        }
        .supp-card:hover .supp-icon-wrap {
          background: var(--accent);
          color: #fff;
          box-shadow: 0 8px 20px rgba(255,130,93,0.35);
        }
      `}} />

      {/* Decoration */}
      <div style={{
        position: "absolute", right: -80, top: -80, width: 360, height: 360,
        borderRadius: "50%", background: "rgba(255,130,93,0.05)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", left: -60, bottom: -60, width: 280, height: 280,
        borderRadius: "50%", background: "rgba(255,255,255,0.02)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <span style={{
              display: "inline-block",
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 800,
              color: "var(--accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}>Supporting Systems</span>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3vw, 42px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.15,
              margin: "0 0 24px",
              letterSpacing: "-0.01em",
            }}>
              Beyond core transit operations
            </h2>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.75,
              margin: 0,
            }}>
              TRVERSE also includes supporting systems that strengthen overall operations and infrastructure — filling the gaps that core transit modules don't cover.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}>
          {systems.map((sys, i) => (
            <div key={i} className="supp-card">
              <div className="supp-icon-wrap">{sys.icon}</div>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: 18,
                fontWeight: 700,
                color: "#fff",
                margin: "0 0 12px",
                lineHeight: 1.3,
              }}>{sys.title}</h3>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
                margin: 0,
              }}>{sys.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportingSystems;
