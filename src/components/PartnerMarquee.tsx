"use client";

import React from 'react';
import { partnerLogos } from '@/data/partners';

const PartnerMarquee = () => {
  return (
    <div style={{ marginTop: 80, width: '100%', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '120px',
        background: 'linear-gradient(to right, #f7f9fc, transparent)',
        zIndex: 2,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '120px',
        background: 'linear-gradient(to left, #f7f9fc, transparent)',
        zIndex: 2,
        pointerEvents: 'none'
      }} />
      
      <div style={{ overflow: 'hidden' }}>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 60s linear infinite;
          }
          .partner-logo-box {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            margin: 0 24px;
            background: #fff;
            border: 1px solid rgba(10, 30, 61, 0.05);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
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
            transition: all 0.4s ease;
          }
        `}} />
        <div className="marquee-track">
          {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
            <div key={index} className="partner-logo-box">
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
  );
};

export default PartnerMarquee;
