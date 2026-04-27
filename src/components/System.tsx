"use client";

import React from 'react';

const System = () => {
  return (
    <section id="products" style={{ background: '#fff', padding: '120px 48px' }}>
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
        }}>
          {/* Subtle decoration to match CTA style */}
          <div style={{
            position: 'absolute', right: -60, top: -60, width: 300, height: 300,
            borderRadius: '50%', background: 'rgba(255,130,93,0.05)',
          }}></div>

          <style dangerouslySetInnerHTML={{__html: `
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

            @keyframes fillStatsAnim {
              0% { width: 0%; opacity: 1; }
              15% { width: 33.333%; opacity: 1; }
              33% { width: 33.333%; opacity: 1; }
              48% { width: 66.666%; opacity: 1; }
              66% { width: 66.666%; opacity: 1; }
              81% { width: 100%; opacity: 1; }
              95% { width: 100%; opacity: 1; }
              97% { width: 100%; opacity: 0; }
              99% { width: 0%; opacity: 0; }
              100% { width: 0%; opacity: 1; }
            }

            @keyframes nodePulseAnim {
              0% { transform: scale(1); box-shadow: 0 0 0 6px rgba(255,130,93,0.15); background: #fff; border-color: var(--accent); }
              5% { transform: scale(1.5); box-shadow: 0 0 0 16px rgba(255,130,93,0.5); background: var(--accent); border-color: #fff; }
              15% { transform: scale(1); box-shadow: 0 0 0 6px rgba(255,130,93,0.15); background: #fff; border-color: var(--accent); }
              100% { transform: scale(1); box-shadow: 0 0 0 6px rgba(255,130,93,0.15); background: #fff; border-color: var(--accent); }
            }
          `}} />

          {/* Top section: Text and List */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center', marginBottom: 80, position: 'relative', zIndex: 2 }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { name: 'Validators & Ticketing', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg> },
                { name: 'Digital Wallets', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg> },
                { name: 'Fleet Tracking GPS', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg> },
                { name: 'Control Dashboards', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg> },
                { name: 'Payment Clearing', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg> },
                { name: 'Analytics Monitoring', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> }
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
          <div style={{ position: 'relative', paddingTop: 40, zIndex: 2 }}>
            {/* Horizontal line connecting stats nodes */}
            <div style={{ position: 'absolute', top: 46, left: '12.5%', right: '12.5%', height: 2, background: 'rgba(255,130,93,0.3)', zIndex: 0, overflow: 'hidden', borderRadius: 2 }}>
              <div style={{
                position: 'absolute', left: 0, top: 0, height: '100%', width: '0%',
                background: '#fff',
                animation: 'fillStatsAnim 8s infinite linear',
                zIndex: 1
              }}></div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative', zIndex: 1 }}>
              {[
                { val: '500M+', label: 'Annual Ridership', delay: '0s' },
                { val: 'Multi-City', label: 'Global Presence', delay: '1.2s' },
                { val: 'Open Loop', label: 'Payment Architecture', delay: '3.84s' },
                { val: 'Real-Time', label: 'System Control', delay: '6.48s' },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  {/* Glowing Node */}
                  <div style={{
                    width: 14, height: 14, borderRadius: '50%', background: '#fff',
                    border: '3px solid var(--accent)',
                    boxShadow: '0 0 0 6px rgba(255,130,93,0.15)',
                    margin: '0 auto 24px',
                    position: 'relative', zIndex: 2,
                    animation: `nodePulseAnim 8s infinite ${s.delay}`
                  }}></div>
                  
                  {/* Stat Text */}
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{s.val}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--accent)', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}>{s.label}</div>
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
