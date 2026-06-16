"use client";

import React from "react";
import { partnerLogos } from "@/data/partners";
import { homeAwards } from "@/data/homeAwards";

const PartnerMarquee = () => {
  return (
    <div className="logo-strip" style={{ marginTop: 80, width: "100%", position: "relative" }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .logo-strip-layout {
            display: flex;
            align-items: stretch;
            gap: 0;
            min-height: 148px;
            background: #fff;
            border: 1px solid rgba(10, 30, 61, 0.06);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(10, 30, 61, 0.04);
          }
          .logo-strip-awards {
            flex: 0 0 40%;
            max-width: 40%;
            padding: 28px 32px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-right: 1px solid rgba(10, 30, 61, 0.08);
            background: #fff;
          }
          .logo-strip-awards-eyebrow,
          .logo-strip-partners-eyebrow {
            font-family: var(--font-body);
            font-size: 11px;
            font-weight: 600;
            color: var(--accent);
            letter-spacing: 0.1em;
            text-transform: uppercase;
            display: block;
            text-align: center;
          }
          .logo-strip-awards-eyebrow {
            margin: 0 0 20px;
          }
          .logo-strip-partners-eyebrow {
            margin: 0;
            padding: 28px 32px 16px;
            position: relative;
            z-index: 3;
            background: #fafbfd;
          }
          .logo-strip-awards-logos {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 20px 24px;
          }
          .award-logo-box {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 52px;
          }
          .award-logo-box img {
            max-height: 48px;
            max-width: 120px;
            width: auto;
            height: auto;
            object-fit: contain;
          }
          .award-logo-box--large img {
            max-height: 56px;
            max-width: 140px;
          }
          .logo-strip-partners {
            flex: 0 0 60%;
            max-width: 60%;
            position: relative;
            overflow: hidden;
            background: #fafbfd;
            display: flex;
            flex-direction: column;
          }
          .logo-strip-partners-fade-left,
          .logo-strip-partners-fade-right {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 80px;
            z-index: 2;
            pointer-events: none;
          }
          .logo-strip-partners-fade-left {
            left: 0;
            background: linear-gradient(to right, #fafbfd, transparent);
          }
          .logo-strip-partners-fade-right {
            right: 0;
            background: linear-gradient(to left, #fafbfd, transparent);
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 60s linear infinite;
            padding: 0 0 24px;
          }
          .partner-logo-box {
            flex: 0 0 auto;
            width: 160px;
            height: 88px;
            margin: 0 16px;
            background: #fff;
            border: 1px solid rgba(10, 30, 61, 0.05);
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 18px;
            transition: all 0.3s ease;
          }
          .partner-logo-box:hover {
            border-color: rgba(255, 130, 93, 0.2);
            box-shadow: 0 10px 20px rgba(10, 30, 61, 0.05);
          }
          .partner-logo-img {
            max-height: 100%;
            max-width: 100%;
            object-fit: contain;
          }
          @media (max-width: 900px) {
            .logo-strip-layout {
              flex-direction: column;
              min-height: auto;
            }
            .logo-strip-awards,
            .logo-strip-partners {
              flex: 1 1 auto;
              max-width: 100%;
            }
            .logo-strip-awards {
              border-right: none;
              border-bottom: 1px solid rgba(10, 30, 61, 0.08);
              padding: 24px 20px;
            }
            .logo-strip-partners-eyebrow {
              padding: 24px 20px 12px;
            }
          }
        `,
        }}
      />

      <div className="logo-strip-layout">
        <div className="logo-strip-awards" aria-labelledby="impact-awards-heading">
          <span id="impact-awards-heading" className="logo-strip-awards-eyebrow">
            Awards &amp; Recognition
          </span>
          <div className="logo-strip-awards-logos" role="list" aria-label="Award logos">
            {homeAwards.map((award) => (
              <div
                key={award.title}
                className={`award-logo-box${award.logoSize === "large" ? " award-logo-box--large" : ""}`}
                role="listitem"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={award.logo} alt={award.logoAlt} loading="lazy" title={award.title} />
              </div>
            ))}
          </div>
        </div>

        <div className="logo-strip-partners" aria-labelledby="impact-partners-heading">
          <span id="impact-partners-heading" className="logo-strip-partners-eyebrow">
            Partners
          </span>
          <div className="logo-strip-partners-fade-left" />
          <div className="logo-strip-partners-fade-right" />
          <div style={{ overflow: "hidden", flex: 1, display: "flex", alignItems: "center" }}>
            <div className="marquee-track">
              {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="partner-logo-box">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-logo-img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerMarquee;
