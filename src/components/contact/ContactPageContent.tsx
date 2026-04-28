"use client";

import React from "react";
import ContactForm from "@/components/contact/ContactForm";

const offices = [
  {
    region: "United States",
    company: "LMK Resources Inc.",
    address: [
      "6051 North Course Drive, Suite 300,",
      "Houston, TX 77072, USA",
    ],
    phone: "+1.281.495.5657",
    fax: "+1.281.568.7315",
    mapUrl: "https://maps.app.goo.gl/nrGaZzjxQf7w2urf6",
  },
  {
    region: "United Arab Emirates",
    company: "LMKR Corporate Headquarters",
    address: [
      "Office No 512, 5th floor, CNPC Building 1,",
      "Emaar Business Park, Sheikh Zayed Road,",
      "Dubai, UAE.",
    ],
    phone: "+971 4 3209565",
    fax: "+971 4 2394099",
    email: "office@lmkr.com",
    mapUrl: "https://maps.app.goo.gl/A1Zgp6kVU1hmEX5D8",
  },
];

const ContactPageContent = () => {
  return (
    <section style={{ background: "#fff", padding: "110px 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 32,
            alignItems: "start",
            marginBottom: 72,
          }}
        >
          <div
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
                Get in Touch
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(34px, 4vw, 48px)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.12,
                  margin: "0 0 20px",
                }}
              >
                Let&apos;s build a better
                <br />
                <span style={{ color: "var(--accent)" }}>mobility system</span>
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 17,
                  color: "rgba(255,255,255,0.62)",
                  lineHeight: 1.8,
                  margin: "0 0 36px",
                  maxWidth: 560,
                }}
              >
                Share what you&apos;re planning and the TRVERSE team will reach out with the right solution for your network.
              </p>

              <div style={{ display: "grid", gap: 18 }}>
                {[
                  "Platform planning for cities and operators",
                  "Connected fare, fleet, and control systems",
                  "Support for pilots, rollouts, and scaling",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 15,
                        color: "rgba(255,255,255,0.76)",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>

        <div>
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
              Contact our teams
            </h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {offices.map((office) => (
              <article
                key={office.region}
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
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    fontWeight: 650,
                    color: "#0a1e3d",
                    margin: "0 0 16px",
                  }}
                >
                  {office.company}
                </h4>
                <div style={{ display: "grid", gap: 10 }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#5a6a7e", lineHeight: 1.75, margin: 0 }}>
                    {office.address.map((line) => (
                      <React.Fragment key={line}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#5a6a7e", lineHeight: 1.7, margin: 0 }}>
                    <strong style={{ color: "#0a1e3d" }}>Phone:</strong> {office.phone}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#5a6a7e", lineHeight: 1.7, margin: 0 }}>
                    <strong style={{ color: "#0a1e3d" }}>Fax:</strong> {office.fax}
                  </p>
                  {office.email ? (
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#5a6a7e", lineHeight: 1.7, margin: 0 }}>
                      <strong style={{ color: "#0a1e3d" }}>Email:</strong> {office.email}
                    </p>
                  ) : null}
                  <p style={{ margin: "6px 0 0" }}>
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--accent)",
                        textDecoration: "none",
                      }}
                    >
                      View on map
                    </a>
                  </p>
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
