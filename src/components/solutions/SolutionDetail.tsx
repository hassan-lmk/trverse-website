"use client";

import Link from "next/link";
import React from "react";
import { solutionHeroBackgroundImages } from "@/data/solutionLandings";

const solutions = [
  {
    id: "afc",
    tag: "AFC",
    title: "Flexible payments for modern transit",
    subtitle: "TRVERSE Automated Fare Collection",
    description:
      "Enables fast, secure, and accessible payments across your network. It supports contactless ticketing, mobile payments, and open-loop systems, allowing passengers to pay using bank cards, smart cards, or QR codes.",
    image: solutionHeroBackgroundImages["Automated-fare-collection"],
    accent: "#134f89",
    capabilities: [
      "Contactless and mobile ticketing",
      "Open-loop and closed-loop payments",
      "NFC-enabled validators and POS",
      "Ticket vending machines and handheld devices",
      "Central clearing house and revenue management",
    ],
    improvements: [
      "Faster boarding and reduced queues",
      "Better fare compliance and revenue visibility",
      "A smoother, more accessible passenger experience",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <line x1="3" y1="11" x2="25" y2="11" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="6" y="17" width="8" height="2" rx="1" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
    reversed: false,
  },
  {
    id: "its",
    tag: "ITS",
    title: "Real-time visibility across your network",
    subtitle: "TRVERSE Intelligent Transport Systems",
    description:
      "Provide continuous monitoring and control across vehicles, routes, and passenger services. Operators can track fleet activity, monitor performance, and respond to issues as they happen.",
    image: solutionHeroBackgroundImages["Intelligent-transport-systems"],
    accent: "#0a1e3d",
    capabilities: [
      "Fleet tracking and GPS-based monitoring",
      "Real-time passenger information systems",
      "Driver behavior and safety monitoring",
      "Onboard systems and smart terminals",
      "Live dashboards and KPI reporting",
    ],
    improvements: [
      "Service reliability and schedule adherence",
      "Passenger communication and trust",
      "Operational awareness and control",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M14 8v6l4 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    reversed: true,
  },
  {
    id: "scheduling",
    tag: "ADV",
    title: "Smarter planning, better service delivery",
    subtitle: "Advanced Scheduling System",
    description:
      "Uses real-time and historical data to optimize routes, schedules, and fleet allocation. It allows operators to adjust services based on demand and changing conditions.",
    image: solutionHeroBackgroundImages["advanced-scheduling-system"],
    accent: "#134f89",
    capabilities: [
      "Dynamic schedule updates",
      "Predictive analytics and demand modeling",
      "Route optimization and planning workflows",
      "Fleet allocation and utilization tracking",
    ],
    improvements: [
      "Reduced wait times",
      "Better route coverage and efficiency",
      "More effective use of fleet resources",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l5-6 4 3 5-8 6 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="14" r="2" fill="currentColor" opacity="0.4"/>
        <circle cx="18" cy="9" r="2" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
    reversed: false,
  },
  {
    id: "control",
    tag: "FLM",
    title: "Central command for transit operations",
    subtitle: "Fleet Management",
    description:
      "Brings all operational data into one place. It enables centralized monitoring, faster decision-making, and coordinated response across the network.",
    image: solutionHeroBackgroundImages["fleet-management"],
    accent: "#0a1e3d",
    capabilities: [
      "Real-time monitoring and tracking",
      "Dispatch and communication systems",
      "KPI dashboards and reporting tools",
      "Incident and exception management",
    ],
    improvements: [
      "Faster response to disruptions",
      "Better coordination between teams",
      "Clear visibility across operations",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <line x1="8" y1="24" x2="20" y2="24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="14" y1="20" x2="14" y2="24" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    reversed: true,
  },
  {
    id: "micro",
    tag: "MMI",
    title: "Extend your network beyond core transit",
    subtitle: "TRVERSE Micro-Mobility Integration",
    description:
      "Connects additional transport modes such as bike-sharing and on-demand services into the wider system, improving first and last mile access.",
    image: solutionHeroBackgroundImages["Micro-mobility-integration"],
    accent: "#134f89",
    capabilities: [
      "Integration with bike-sharing systems",
      "On-demand and feeder transport support",
      "Multi-modal journey connectivity",
    ],
    improvements: [
      "Increased accessibility and reach",
      "Higher ridership",
      "A more connected commuter experience",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="8" cy="20" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="22" cy="20" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 16l6-10h4l2 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    reversed: false,
  },
  {
    id: "performance",
    tag: "AIC",
    title: "Know more. Decide faster",
    subtitle: "AI Monitoring and Control",
    description:
      "Provides visibility into system performance, helping operators track operations, analyze trends, and make informed decisions across the network.",
    image: solutionHeroBackgroundImages["ai-monitoring-and-control"],
    accent: "#0a1e3d",
    capabilities: [
      "Real-time dashboards",
      "Ridership and revenue reporting",
      "KPI tracking",
      "Operational analytics",
      "Historical trend analysis",
    ],
    improvements: [
      "Data-driven planning and service improvements",
      "Clear visibility into network performance",
      "Faster, more informed operational decisions",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="14" width="4" height="10" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="12" y="8" width="4" height="16" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="20" y="4" width="4" height="20" rx="1" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    reversed: true,
  },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7" fill="var(--accent)" opacity="0.12"/>
    <path d="M5 8l2 2 4-4" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SolutionDetail = () => {
  const hrefById: Record<string, string> = {
    afc: "/solutions/Automated-fare-collection",
    its: "/solutions/Intelligent-transport-systems",
    scheduling: "/solutions/advanced-scheduling-system",
    control: "/solutions/fleet-management",
    micro: "/solutions/Micro-mobility-integration",
    performance: "/solutions/ai-monitoring-and-control",
  };

  return (
    <div style={{ background: "#fff" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .sol-detail-section {
          padding: 120px 48px;
          position: relative;
          overflow: hidden;
        }
        .sol-detail-section:nth-child(even) {
          background: #f7f9fc;
        }
        .sol-detail-grid {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .sol-tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 100px;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .sol-capability-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: rgba(10,30,61,0.03);
          border-radius: 10px;
          border: 1px solid rgba(10,30,61,0.05);
          font-family: var(--font-body);
          font-size: 14px;
          color: #3a4a5e;
          transition: all 0.2s ease;
          font-weight: 500;
        }
        .sol-capability-item:hover {
          background: rgba(255,130,93,0.05);
          border-color: rgba(255,130,93,0.15);
          color: #0a1e3d;
          transform: translateX(4px);
        }
        .sol-improvement-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
          font-size: 14.5px;
          color: #3a4a5e;
          font-weight: 500;
          padding: 8px 0;
          border-bottom: 1px solid rgba(10,30,61,0.05);
        }
        .sol-improvement-item:last-child {
          border-bottom: none;
        }
        .sol-image-wrapper {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(10,30,61,0.12);
        }
        .sol-image-wrapper img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .sol-image-wrapper:hover img {
          transform: scale(1.04);
        }
        .sol-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom right, transparent, rgba(10,30,61,0.25));
          pointer-events: none;
        }
      `}} />

      {solutions.map((sol, i) => (
        <section key={sol.id} id={sol.id} className="sol-detail-section">

          <div
            className="sol-detail-grid"
            style={{ direction: sol.reversed ? "rtl" : "ltr" }}
          >
            {/* Content */}
            <div style={{ direction: "ltr" }}>
              <div
                className="sol-tag-pill"
                style={{
                  background: `rgba(10,30,61,0.06)`,
                  color: "#134f89",
                }}
              >
                {sol.subtitle.replace("TRVERSE ", "")}
              </div>

              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 2.8vw, 38px)",
                fontWeight: 700,
                color: "#0a1e3d",
                lineHeight: 1.18,
                margin: "0 0 20px",
                letterSpacing: "-0.01em",
              }}>
                {sol.title}
              </h2>

              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "#5a6a7e",
                lineHeight: 1.75,
                margin: "0 0 40px",
              }}>
                {sol.description}
              </p>

              <p style={{ margin: "0 0 36px" }}>
                <Link
                  href={hrefById[sol.id] ?? "/solutions"}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#134f89",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    borderBottom: "2px solid rgba(19,79,137,0.2)",
                    paddingBottom: 2,
                  }}
                >
                  Learn more
                  <ArrowIcon />
                </Link>
              </p>

              {/* Capabilities */}
              <div style={{ marginBottom: 36 }}>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 800,
                  color: "var(--accent)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}>Capabilities</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {sol.capabilities.map((cap, j) => (
                    <div key={j} className="sol-capability-item">
                      <ArrowIcon />
                      {cap}
                    </div>
                  ))}
                </div>
              </div>

              {/* Improvements */}
              <div>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 800,
                  color: "#134f89",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}>What this improves</p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {sol.improvements.map((imp, j) => (
                    <div key={j} className="sol-improvement-item">
                      <CheckIcon />
                      {imp}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div style={{ direction: "ltr" }}>
              <div className="sol-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={sol.image} alt={sol.subtitle} />
                <div className="sol-image-overlay" />

              </div>

              {/* Number indicator */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginTop: 28,
                padding: "0 8px",
              }}>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 64,
                  fontWeight: 800,
                  color: "rgba(10,30,61,0.06)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}>0{i + 1}</span>
                <div style={{
                  flex: 1,
                  height: 2,
                  background: "linear-gradient(to right, var(--accent), transparent)",
                  borderRadius: 2,
                }} />
                <span style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "rgba(10,30,61,0.3)",
                  fontWeight: 600,
                }}>of {solutions.length}</span>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default SolutionDetail;
