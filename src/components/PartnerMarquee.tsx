"use client";

import React from "react";
import { partnerLogos } from "@/data/partners";

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
            min-height: 148px;
            background: #fff;
            border: 1px solid rgba(10, 30, 61, 0.06);
            border-radius: 20px;
            overflow: hidden;
          }
          .logo-strip-partners-eyebrow {
            font-family: var(--font-body);
            font-size: 11px;
            font-weight: 600;
            color: var(--accent);
            letter-spacing: 0.1em;
            text-transform: uppercase;
            display: block;
            text-align: center;
            margin: 0;
            padding: 28px 32px 16px;
            position: relative;
            z-index: 3;
            background: #fafbfd;
          }
          .logo-strip-partners {
            position: relative;
            overflow: hidden;
            background: #fafbfd;
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
          }
          .partner-logo-img {
            max-height: 100%;
            max-width: 100%;
            object-fit: contain;
          }
          @media (max-width: 900px) {
            .logo-strip-partners-eyebrow {
              padding: 24px 20px 12px;
            }
          }
        `,
        }}
      />

      <div className="logo-strip-layout">
        <div className="logo-strip-partners" aria-labelledby="impact-partners-heading">
          <span id="impact-partners-heading" className="logo-strip-partners-eyebrow">
            Partners
          </span>
          <div className="logo-strip-partners-fade-left" />
          <div className="logo-strip-partners-fade-right" />
          <div style={{ overflow: "hidden", display: "flex", alignItems: "center", minHeight: 112 }}>
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
