"use client";

import React from 'react';
import { officeFooterLabels } from '@/data/offices';

const Footer = () => (
  <footer className="home-footer" style={{ background: '#040e1f', padding: '64px 48px 40px' }}>
    <style dangerouslySetInnerHTML={{ __html: `
      @media (max-width: 1024px) {
        .home-footer {
          padding: 56px 28px 32px !important;
        }
        .home-footer-grid {
          grid-template-columns: 1fr 1fr !important;
          gap: 28px !important;
        }
      }
      @media (max-width: 700px) {
        .home-footer {
          padding: 48px 20px 28px !important;
        }
        .home-footer-grid {
          grid-template-columns: 1fr !important;
          gap: 20px !important;
        }
        .home-footer-bottom {
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 12px !important;
        }
      }
    ` }} />
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div className="home-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1.25fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.svg" alt="TRVERSE" style={{ height: 28, marginBottom: 16 }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 280 }}>
            Connecting transit systems for better city mobility.
          </p>
        </div>
        {[
          {
            title: 'Solutions',
            links: [
              { label: 'Automated Fare Collection', href: '/solutions/Automated-fare-collection' },
              { label: 'Intelligent Transport Systems', href: '/solutions/Intelligent-transport-systems' },
              { label: 'Advanced Scheduling System', href: '/solutions/advanced-scheduling-system' },
              { label: 'Fleet Management', href: '/solutions/fleet-management' },
              { label: 'Micro-Mobility Integration', href: '/solutions/Micro-mobility-integration' },
              { label: 'AI Monitoring and Control', href: '/solutions/ai-monitoring-and-control' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '/about' },
              { label: 'Partners', href: '/partners' },
              { label: 'Insights', href: '/insights' },
              { label: 'Get a Demo', href: '/get-a-demo' },
            ],
          },
          {
            title: 'Contact',
            links: officeFooterLabels,
          },
        ].map((col, i) => (
          <div key={i}>
            <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>{col.title}</h4>
            {col.links.map((l) => (
              <a key={l.label} href={l.href} style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', marginBottom: 12, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
              >{l.label}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="home-footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© 2026 LMKR. ALL RIGHTS RESERVED.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
