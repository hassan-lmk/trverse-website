"use client";

import React from 'react';
import DemoRequestForm from "@/components/contact/DemoRequestForm";
import { officeFooterLabels } from "@/data/offices";

const Contact = () => {
  return (
    <section id="contact" className="home-contact-section" style={{ background: '#fff', padding: '120px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0a1e3d 0%, #134f89 100%)',
          borderRadius: 20, padding: '72px 64px', display: 'grid',
          gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.25fr)', gap: 48, alignItems: 'center',
          position: 'relative', overflow: 'hidden',
        }} className="home-contact-grid">
          <style dangerouslySetInnerHTML={{ __html: `
            @media (max-width: 1024px) {
              .home-contact-section {
                padding: 96px 28px !important;
              }
              .home-contact-grid {
                grid-template-columns: 1fr !important;
                gap: 36px !important;
                padding: 48px 32px !important;
              }
            }
            @media (max-width: 700px) {
              .home-contact-section {
                padding: 84px 20px !important;
              }
              .home-contact-grid {
                padding: 36px 20px !important;
              }
            }
          ` }} />
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
            opacity: 0.35,
          }}></div>
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/CTA-BG.webp)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              opacity: 0.8,
              mixBlendMode: "screen",
              filter: "contrast(1.05) saturate(0.95)",
              transform: "none",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(10,30,61,0.88) 0%, rgba(10,30,61,0.66) 42%, rgba(10,30,61,0.18) 100%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 600, color: '#fff', margin: '0 0 20px', lineHeight: 1.2 }}>
              Let's improve how your transit system runs
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#fff', lineHeight: 1.7, margin: '0 0 32px' }}>
              Talk to TRVERSE about building a connected mobility system for your city.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {officeFooterLabels.map((loc) => (
                <div key={loc.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ color: 'var(--accent)', fontSize: 12 }}>◎</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#fff' }}>{loc.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative", zIndex: 2, width: "100%", minWidth: 0 }}>
            <DemoRequestForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
