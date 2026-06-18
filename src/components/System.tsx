"use client";

import React from 'react';

const System = () => {
  return (
    <section id="products" className="home-system-section" style={{ background: '#fff', padding: '72px 48px 96px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* System capabilities & Stats */}
        <div style={{
          background: 'linear-gradient(135deg, #0a1e3d 0%, #134f89 100%)', 
          borderRadius: 24, 
          padding: '80px 64px',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 32px 64px rgba(0,10,30,0.2)',
          position: 'relative',
          overflow: 'hidden'
        }} className="home-system-shell">
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/CTA-BG.webp)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              opacity: 0.1,
              mixBlendMode: "screen",
              filter: "contrast(1.05) saturate(0.95)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(10,30,61,0.9) 0%, rgba(10,30,61,0.68) 42%, rgba(10,30,61,0.2) 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          <style dangerouslySetInnerHTML={{__html: `
            @media (max-width: 1024px) {
              .home-system-section {
                padding: 56px 28px 80px !important;
              }
              .home-system-shell {
                padding: 56px 28px !important;
              }
              .home-system-top {
                grid-template-columns: 1fr !important;
                gap: 32px !important;
                margin-bottom: 56px !important;
              }
              .home-system-features {
                grid-template-columns: 1fr 1fr !important;
                min-width: 0 !important;
              }
              .home-system-stats {
                grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
                gap: 20px !important;
              }
            }
            @media (max-width: 700px) {
              .home-system-section {
                padding: 48px 20px 72px !important;
              }
              .home-system-shell {
                padding: 40px 20px !important;
                border-radius: 18px !important;
              }
              .home-system-features {
                grid-template-columns: 1fr !important;
              }
              .home-system-stats {
                grid-template-columns: 1fr !important;
                gap: 18px !important;
                padding-left: 44px !important;
              }
              .home-system-stats-wrap {
                padding-top: 8px !important;
              }
              .home-system-stats-line {
                top: 18px !important;
                left: 18px !important;
                right: auto !important;
                width: 2px !important;
                height: calc(100% - 36px) !important;
              }
              .home-system-stats-line-fill {
                width: 100% !important;
                height: 0% !important;
                animation: fillStatsVerticalAnim 8s infinite linear !important;
              }
              .home-system-stat-item {
                text-align: left !important;
                position: relative !important;
                padding-left: 8px !important;
              }
              .home-system-stat-node {
                position: absolute !important;
                left: -34px !important;
                top: 8px !important;
                margin: 0 !important;
              }
              .home-system-stat-value {
                font-size: 24px !important;
              }
              .home-system-stat-label {
                font-size: 12px !important;
              }
            }
            .feature-item {
              display: flex;
              align-items: center;
              gap: 16px;
              padding: 16px 20px;
              background: rgba(255, 255, 255, 0.03);
              border: 1px solid rgba(255, 255, 255, 0.05);
              border-radius: 12px;
              transition: all 0.3s ease;
              cursor: default;
            }
            .feature-item:hover {
              background: rgba(255, 130, 93, 0.08);
              border-color: rgba(255, 130, 93, 0.3);
              transform: translateY(-2px);
              box-shadow: 0 8px 24px rgba(255, 130, 93, 0.1);
            }
            .feature-icon-wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 36px;
              height: 36px;
              border-radius: 8px;
              background: rgba(255, 255, 255, 0.05);
              color: var(--accent);
              transition: all 0.3s ease;
              flex-shrink: 0;
            }
            .feature-item:hover .feature-icon-wrapper {
              background: var(--accent);
              color: #fff;
              box-shadow: 0 4px 12px rgba(255, 130, 93, 0.4);
            }
            .feature-text {
              font-family: var(--font-body);
              font-size: 14px;
              font-weight: 600;
              color: rgba(255, 255, 255, 0.85);
              transition: color 0.3s ease;
            }
            .feature-item:hover .feature-text {
              color: #fff;
            }
            .home-system-top {
              grid-template-columns: minmax(0, 0.9fr) minmax(480px, 1.35fr);
            }
            .home-system-features {
              width: 100%;
              min-width: 480px;
            }
            .feature-text {
              line-height: 1.35;
            }

            .home-system-stat-value {
              font-family: var(--font-display);
              font-size: 28px;
              font-weight: 600;
              color: #fff;
              margin-bottom: 8px;
              line-height: 1.15;
            }
            .home-system-stat-label {
              font-family: var(--font-body);
              font-size: 12px;
              color: var(--accent);
              letter-spacing: 0.05em;
              text-transform: uppercase;
              font-weight: 600;
            }

            @keyframes fillStatsAnim {
              0% { width: 0%; opacity: 1; }
              12% { width: 20%; opacity: 1; }
              24% { width: 20%; opacity: 1; }
              36% { width: 40%; opacity: 1; }
              48% { width: 40%; opacity: 1; }
              60% { width: 60%; opacity: 1; }
              72% { width: 60%; opacity: 1; }
              84% { width: 80%; opacity: 1; }
              92% { width: 100%; opacity: 1; }
              97% { width: 100%; opacity: 0; }
              99% { width: 0%; opacity: 0; }
              100% { width: 0%; opacity: 1; }
            }
            @keyframes fillStatsVerticalAnim {
              0% { height: 0%; opacity: 1; }
              12% { height: 20%; opacity: 1; }
              24% { height: 20%; opacity: 1; }
              36% { height: 40%; opacity: 1; }
              48% { height: 40%; opacity: 1; }
              60% { height: 60%; opacity: 1; }
              72% { height: 60%; opacity: 1; }
              84% { height: 80%; opacity: 1; }
              92% { height: 100%; opacity: 1; }
              97% { height: 100%; opacity: 0; }
              99% { height: 0%; opacity: 0; }
              100% { height: 0%; opacity: 1; }
            }

            @keyframes nodePulseAnim {
              0% { transform: scale(1); box-shadow: 0 0 0 6px rgba(255,130,93,0.15); background: #fff; border-color: var(--accent); }
              5% { transform: scale(1.5); box-shadow: 0 0 0 16px rgba(255,130,93,0.5); background: var(--accent); border-color: #fff; }
              15% { transform: scale(1); box-shadow: 0 0 0 6px rgba(255,130,93,0.15); background: #fff; border-color: var(--accent); }
              100% { transform: scale(1); box-shadow: 0 0 0 6px rgba(255,130,93,0.15); background: #fff; border-color: var(--accent); }
            }
          `}} />

          {/* Top section: Text and List */}
          <div className="home-system-top" style={{ display: 'grid', gap: 48, alignItems: 'center', marginBottom: 80, position: 'relative', zIndex: 2 }}>
            <div>
              <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255,130,93,0.1)', borderRadius: 100, border: '1px solid rgba(255,130,93,0.2)', marginBottom: 24 }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Seamless Integration</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 600, color: '#fff', marginBottom: 24, lineHeight: 1.1 }}>
                Built as a <br />
                <span style={{ color: 'var(--accent)' }}>complete system</span>
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: 0, maxWidth: 500 }}>
                TRVERSE combines multiple components into one connected setup. Our platform ensures that everything works perfectly together, eliminating data silos and operational friction.
              </p>
            </div>
            <div className="home-system-features" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { name: 'Contactless Ticketing', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line><path d="M6 15h2"></path></svg> },
                { name: 'Mobile Fare Payments', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg> },
                { name: 'Open/Closed-Loop Payments', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2l4 4-4 4"></path><path d="M3 11v-1a4 4 0 014-4h14"></path><path d="M7 22l-4-4 4-4"></path><path d="M21 13v1a4 4 0 01-4 4H3"></path></svg> },
                { name: 'NFC Validators & POS', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg> },
                { name: 'Ticket Vending Devices', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="10" x2="16" y2="10"></line><rect x="9" y="14" width="6" height="4" rx="1"></rect></svg> },
                { name: 'Clearing & Revenue Management', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> }
              ].map((c, i) => (
                <div key={i} className="feature-item">
                  <div className="feature-icon-wrapper">
                    {c.icon}
                  </div>
                  <span className="feature-text">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connected Stats Section */}
          <div className="home-system-stats-wrap" style={{ position: 'relative', paddingTop: 40, zIndex: 2 }}>
            {/* Horizontal line connecting stats nodes */}
            <div className="home-system-stats-line" style={{ position: 'absolute', top: 46, left: '10%', right: '10%', height: 2, background: 'rgba(255,130,93,0.3)', zIndex: 0, overflow: 'hidden', borderRadius: 2 }}>
              <div className="home-system-stats-line-fill" style={{
                position: 'absolute', left: 0, top: 0, height: '100%', width: '0%',
                background: '#fff',
                animation: 'fillStatsAnim 8s infinite linear',
                zIndex: 1
              }}></div>
            </div>
            
            <div className="home-system-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24, position: 'relative', zIndex: 1 }}>
              {[
                { val: 'Multi-City', label: 'Global Presence', delay: '0s' },
                { val: '500M+', label: 'Annual Ridership', delay: '1.6s' },
                { val: '6000+', label: 'Devices on field', delay: '3.2s' },
                { val: 'Open Loop', label: 'Payment Architecture', delay: '4.8s' },
                { val: 'Real-Time', label: 'System Control', delay: '6.4s' },
              ].map((s, i) => (
                <div key={i} className="home-system-stat-item" style={{ textAlign: 'center' }}>
                  {/* Glowing Node */}
                  <div className="home-system-stat-node" style={{
                    width: 14, height: 14, borderRadius: '50%', background: '#fff',
                    border: '3px solid var(--accent)',
                    boxShadow: '0 0 0 6px rgba(255,130,93,0.15)',
                    margin: '0 auto 24px',
                    position: 'relative', zIndex: 2,
                    animation: `nodePulseAnim 8s infinite ${s.delay}`
                  }}></div>
                  
                  {/* Stat Text */}
                  <div className="home-system-stat-value">{s.val}</div>
                  <div className="home-system-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default System;
