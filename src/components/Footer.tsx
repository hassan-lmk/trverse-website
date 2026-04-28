"use client";

import React from 'react';

const Footer = () => (
  <footer style={{ background: '#040e1f', padding: '64px 48px 40px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.svg" alt="TRVERSE" style={{ height: 28, marginBottom: 16 }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 280 }}>
            Connecting transit systems for better city mobility.
          </p>
        </div>
        {[
          { title: 'Solutions', links: ['Fare Collection', 'Fleet Operations', 'Scheduling', 'Control Room'] },
          { title: 'Company', links: ['Client Stories', 'Technology', 'About'] },
          { title: 'Contact', links: ['Dubai, UAE', 'Houston, USA'] },
        ].map((col, i) => (
          <div key={i}>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>{col.title}</h4>
            {col.links.map((l, j) => (
              <a key={j} href="#" style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', marginBottom: 12, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
              >{l}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© 2026 TRVERSE TECHNOLOGIES. ALL RIGHTS RESERVED.</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>An LMKR Company</span>
      </div>
    </div>
  </footer>
);

export default Footer;
