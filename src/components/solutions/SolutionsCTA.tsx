"use client";

import React from "react";

const SolutionsCTA = () => {
  return (
    <section style={{
      background: "#f7f9fc",
      padding: "120px 48px",
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ctaGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.08); }
        }
        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 40px;
          background: var(--accent);
          color: #fff;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.25s ease;
          border: none;
          cursor: pointer;
        }
        .cta-btn-primary:hover {
          background: #e06d4a;
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(255,130,93,0.35);
        }
        .cta-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 40px;
          background: transparent;
          color: #0a1e3d;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          border-radius: 10px;
          border: 2px solid rgba(10,30,61,0.15);
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .cta-btn-outline:hover {
          border-color: #0a1e3d;
          background: rgba(10,30,61,0.04);
          transform: translateY(-3px);
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
          font-size: 14px;
          color: #5a6a7e;
          font-weight: 500;
        }
        .trust-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }
      `}} />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, #0a1e3d 0%, #134f89 100%)",
          borderRadius: 32,
          padding: "96px 80px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}>
          {/* Glowing orb decorations */}
          <div style={{
            position: "absolute",
            top: -80, right: -80,
            width: 320, height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,130,93,0.15), transparent)",
            animation: "ctaGlow 6s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute",
            bottom: -60, left: -60,
            width: 260, height: 260,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(19,79,137,0.3), transparent)",
            animation: "ctaGlow 8s ease-in-out infinite 2s",
          }} />
          {/* Dot grid */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }} />

          {/* Decorative Background SVG */}
          <div style={{
            position: "absolute",
            right: "-5%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "40%",
            height: "100%",
            opacity: 0.15,
            pointerEvents: "none",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://cdn.prod.website-files.com/62f0e3371ad4ab59bf6b21b0/62f9f57c95dcdd138d439fe0_Frame%2011.svg" 
              alt="" 
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "right center" }}
            />
          </div>

          <div style={{ position: "relative", zIndex: 2 }}>
            <span style={{
              display: "inline-block",
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 800,
              color: "var(--accent)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 24,
              padding: "6px 16px",
              background: "rgba(255,130,93,0.1)",
              borderRadius: 100,
              border: "1px solid rgba(255,130,93,0.2)",
            }}>Ready to Transform Your Network?</span>

            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 54px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              margin: "0 auto 24px",
              maxWidth: 680,
              letterSpacing: "-0.02em",
            }}>
              Build a system that<br />
              <span style={{ color: "var(--accent)" }}>works at scale</span>
            </h2>

            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.75,
              margin: "0 auto 56px",
              maxWidth: 520,
            }}>
              Talk to TRVERSE about building a connected mobility platform for your city — from fare gates to fleet management.
            </p>

            <div style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 48,
            }}>
              <a href="/#contact" className="cta-btn-primary">
                Contact Us
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/#contact" className="cta-btn-outline" style={{ color: "rgba(255,255,255,0.8)", border: "2px solid rgba(255,255,255,0.2)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                }}
              >
                Request a Demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.6"/>
                  <path d="M6 5.5l5 2.5-5 2.5V5.5z" fill="currentColor"/>
                </svg>
              </a>
            </div>

            {/* Trust signals */}
            <div style={{
              display: "flex",
              gap: 32,
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
              {[
                "Proven across multiple cities",
                "Modular and scalable platform",
                "End-to-end implementation support",
              ].map((item, i) => (
                <div key={i} className="trust-item" style={{ color: "rgba(255,255,255,0.45)" }}>
                  <div className="trust-dot" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCTA;
