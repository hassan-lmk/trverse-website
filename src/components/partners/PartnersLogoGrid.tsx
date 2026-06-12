"use client";

import { partnerLogos } from "@/data/partners";

type Props = {
  variant?: "light" | "muted";
};

const PartnersLogoGrid = ({ variant = "light" }: Props) => {
  const isMuted = variant === "muted";
  const fadeColor = isMuted ? "#f7f9fc" : "#fff";
  const boxBackground = isMuted ? "#fff" : "#f7f9fc";

  return (
    <div
      className="partners-logo-marquee"
      role="list"
      aria-label="TRVERSE technology and domain partners"
      style={{ width: "100%", position: "relative" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 120,
          background: `linear-gradient(to right, ${fadeColor}, transparent)`,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 120,
          background: `linear-gradient(to left, ${fadeColor}, transparent)`,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div style={{ overflow: "hidden" }}>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes partners-logo-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .partners-logo-marquee-track {
            display: flex;
            width: max-content;
            animation: partners-logo-marquee 60s linear infinite;
          }
          .partners-logo-marquee-item {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            margin: 0 24px;
            border: 1px solid rgba(19, 79, 137, 0.08);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          }
          .partners-logo-marquee-item:hover {
            transform: translateY(-4px);
            border-color: rgba(255, 130, 93, 0.3) !important;
            box-shadow: 0 14px 32px rgba(10, 30, 61, 0.08);
          }
          .partners-logo-marquee-img {
            max-height: 52px;
            max-width: 100%;
            object-fit: contain;
          }
        `,
          }}
        />
        <div className="partners-logo-marquee-track">
          {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              role="listitem"
              className="partners-logo-marquee-item"
              style={{ background: boxBackground }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="partners-logo-marquee-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersLogoGrid;
