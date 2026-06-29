"use client";

import React from "react";
import DemoRequestForm from "@/components/contact/DemoRequestForm";
import { offices } from "@/data/offices";

const whatToExpect = [
  "60-minute live session with a TRVERSE solutions engineer",
  "Platform walkthrough configured to your network type — BRT, metro, intermodal",
  "Live AFC transaction demonstration and real-time operations dashboard",
  "Q&A with a technical expert on integration, deployment, and certification",
  "Follow-up: tailored solution brief and relevant case studies within 48 hours",
];

const ContactPageContent = () => {
  return (
    <section className="demo-page-section" style={{ background: "#fff", padding: "110px 48px" }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 1024px) {
              .demo-page-grid {
                grid-template-columns: 1fr !important;
              }
              .demo-page-panel {
                min-height: auto !important;
              }
            }
            @media (max-width: 640px) {
              .demo-page-section {
                padding: 80px 20px !important;
              }
            }
          `,
        }}
      />
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="demo-page-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 32,
            alignItems: "start",
            marginBottom: 72,
          }}
        >
          <div
            className="demo-page-panel"
            style={{
              background: "linear-gradient(135deg, #0a1e3d 0%, #134f89 100%)",
              borderRadius: 24,
              padding: "56px 48px",
              position: "relative",
              overflow: "hidden",
              minHeight: 680,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
                opacity: 0.35,
              }}
            />

            <div style={{ position: "relative", zIndex: 2 }}>
              <span
                style={{
                  display: "inline-block",
                  padding: "6px 16px",
                  borderRadius: 999,
                  background: "rgba(255,130,93,0.12)",
                  border: "1px solid rgba(255,130,93,0.25)",
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "var(--accent)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 24,
                }}
              >
                What to expect
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(30px, 3.5vw, 42px)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.15,
                  margin: "0 0 20px",
                }}
              >
                A demo built around your network
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 17,
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.8,
                  margin: "0 0 36px",
                  maxWidth: 560,
                }}
              >
                A TRVERSE demo is not a generic walkthrough. Bring your network, your ridership numbers, and your hardest operational problems, and we will show you exactly what the platform can do with them.
              </p>

              <div style={{ display: "grid", gap: 18 }}>
                {whatToExpect.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        flexShrink: 0,
                        marginTop: 7,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 15,
                        color: "#fff",
                        lineHeight: 1.65,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DemoRequestForm />
        </div>

        <div id="offices">
          <div style={{ marginBottom: 28 }}>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 600,
                color: "var(--accent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 12,
                display: "block",
              }}
            >
              Global Offices
            </span>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 650,
                color: "#0a1e3d",
                margin: 0,
              }}
            >
              Company Locations
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {offices.map((office) => (
              <article
                key={`${office.region}-${office.city}`}
                style={{
                  background: "#f7f9fc",
                  borderRadius: 20,
                  border: "1px solid rgba(19,79,137,0.08)",
                  padding: 28,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    color: "var(--accent)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    marginBottom: 12,
                  }}
                >
                  {office.region}
                </div>
                <div style={{ display: "grid", gap: 10 }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#5a6a7e", lineHeight: 1.75, margin: 0 }}>
                    {office.address.map((line) => (
                      <React.Fragment key={line}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                    {office.postalCode ? (
                      <>
                        Postal Code: {office.postalCode}
                        <br />
                      </>
                    ) : null}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#5a6a7e", lineHeight: 1.7, margin: 0 }}>
                    <strong style={{ color: "#0a1e3d" }}>Phone:</strong> {office.phone}
                  </p>
                  {office.email ? (
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#5a6a7e", lineHeight: 1.7, margin: 0 }}>
                      <strong style={{ color: "#0a1e3d" }}>Email:</strong> {office.email}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageContent;
