"use client";

import React from 'react';

const partners = [
  { name: 'Hikvision', logo: '/partners-logo/hikvision.png' },
  { name: 'Huawei', logo: '/partners-logo/HUAWEI.png' },
  { name: 'Mastercard', logo: '/partners-logo/mastercard-logo.svg' },
  { name: 'Visa', logo: '/partners-logo/Visa-logo.svg' },
  { name: 'Amazon Web Services', logo: '/partners-logo/AWS-LOGO.svg' },
  { name: 'Cisco', logo: '/partners-logo/CISCO.svg' },
  { name: 'Dell', logo: '/partners-logo/DELL-LOGO.svg' },
  { name: 'Microsoft', logo: '/partners-logo/Microsoft_logo_(2012).svg' },
  { name: 'UITP', logo: '/partners-logo/UITP.svg' }
];

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
          {[...partners, ...partners, ...partners].map((partner, index) => (
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
