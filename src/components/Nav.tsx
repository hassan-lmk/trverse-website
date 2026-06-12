"use client";

import React from 'react';

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [solutionsOpen, setSolutionsOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const solutionsWrapRef = React.useRef<HTMLDivElement | null>(null);
  const solutionsCloseTimeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    const onDocMouseDown = (e: MouseEvent) => {
      if (!solutionsWrapRef.current) return;
      if (solutionsWrapRef.current.contains(e.target as Node)) return;
      setSolutionsOpen(false);
    };
    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
  }, []);

  const navStyle = {
    position: 'fixed' as const, top: 0, left: 0, right: 0, zIndex: 100,
    background: scrolled ? 'rgba(0,10,30,0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    transition: 'all 0.4s ease',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
  };

  const innerStyle = {
    maxWidth: 1280, margin: '0 auto', padding: '0 48px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    height: 72,
  };

  const navItems = [
    { label: 'Products', href: '/products' },
    { label: 'Partners', href: '/partners' },
    { label: 'About Us', href: '/about' },
    { label: 'Insights', href: '/insights' },
  ];

  return (
    <nav style={navStyle}>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .home-nav-inner {
            padding: 0 20px !important;
            height: 64px !important;
          }
          .home-nav-desktop {
            display: none !important;
          }
          .home-nav-mobile-toggle {
            display: inline-flex !important;
          }
        }
      ` }} />
      <div className="home-nav-inner" style={innerStyle}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.svg" alt="TRVERSE" style={{ height: 32, filter: 'brightness(0) invert(1)' }} />
        </a>
        <div className="home-nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          <div
            ref={solutionsWrapRef}
            style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
            onMouseEnter={() => {
              if (solutionsCloseTimeoutRef.current) {
                window.clearTimeout(solutionsCloseTimeoutRef.current);
                solutionsCloseTimeoutRef.current = null;
              }
              setSolutionsOpen(true);
            }}
            onMouseLeave={() => {
              // Small delay prevents the menu from closing during the hover transition
              // from the button to the absolutely-positioned dropdown panel.
              solutionsCloseTimeoutRef.current = window.setTimeout(() => {
                setSolutionsOpen(false);
              }, 150);
            }}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={solutionsOpen}
              onClick={() => setSolutionsOpen((v) => !v)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'rgba(255,255,255,0.8)',
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '0.02em',
                fontFamily: 'var(--font-body)',
                padding: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              Solutions
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
                style={{
                  transform: solutionsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
              >
                <path
                  d="M3.5 5.5L7 9L10.5 5.5"
                  stroke="rgba(255,255,255,0.9)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {solutionsOpen ? (
              <div
                role="menu"
                aria-label="Solutions"
                style={{
                  position: 'absolute',
                  top: 44,
                  left: 0,
                  background: 'rgba(4, 14, 31, 0.98)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 12,
                  padding: '10px 10px',
                  minWidth: 320,
                  boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
                  zIndex: 120,
                }}
              >
                <a
                  href="/solutions/Automated-fare-collection"
                  style={{
                    display: 'block',
                    padding: '12px 12px',
                    borderRadius: 10,
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,130,93,0.12)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.9)';
                  }}
                >
                  <div style={{ fontWeight: 500, opacity: 0.72, marginTop: 4 }}>
                    Automated Fare Collection
                  </div>
                </a>

                <a
                  href="/solutions/Intelligent-transport-systems"
                  style={{
                    display: 'block',
                    padding: '12px 12px',
                    borderRadius: 10,
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: 1.2,
                    marginTop: 6,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,130,93,0.12)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.9)';
                  }}
                >
                  <div style={{ fontWeight: 500, opacity: 0.72, marginTop: 4 }}>
                    Intelligent Transport Systems
                  </div>
                </a>

                <a
                  href="/solutions/advanced-scheduling-system"
                  style={{
                    display: 'block',
                    padding: '12px 12px',
                    borderRadius: 10,
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: 1.2,
                    marginTop: 6,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      'rgba(255,130,93,0.12)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      'transparent';
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      'rgba(255,255,255,0.9)';
                  }}
                >
                  <div style={{ fontWeight: 500, opacity: 0.72, marginTop: 4 }}>
                    Advanced Scheduling System
                  </div>
                </a>

                <a
                  href="/solutions/fleet-management"
                  style={{
                    display: 'block',
                    padding: '12px 12px',
                    borderRadius: 10,
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: 1.2,
                    marginTop: 6,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      'rgba(255,130,93,0.12)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      'transparent';
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      'rgba(255,255,255,0.9)';
                  }}
                >
                  <div style={{ fontWeight: 500, opacity: 0.72, marginTop: 4 }}>
                    Fleet Management
                  </div>
                </a>

                <a
                  href="/solutions/Micro-mobility-integration"
                  style={{
                    display: 'block',
                    padding: '12px 12px',
                    borderRadius: 10,
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: 1.2,
                    marginTop: 6,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      'rgba(255,130,93,0.12)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      'transparent';
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      'rgba(255,255,255,0.9)';
                  }}
                >
                  <div style={{ fontWeight: 500, opacity: 0.72, marginTop: 4 }}>
                    Micro-Mobility Integration
                  </div>
                </a>

                <a
                  href="/solutions/ai-monitoring-and-control"
                  style={{
                    display: 'block',
                    padding: '12px 12px',
                    borderRadius: 10,
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: 1.2,
                    marginTop: 6,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      'rgba(255,130,93,0.12)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      'transparent';
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      'rgba(255,255,255,0.9)';
                  }}
                >
                  <div style={{ fontWeight: 500, opacity: 0.72, marginTop: 4 }}>
                    AI Monitoring and Control
                  </div>
                </a>

                <div
                  style={{
                    height: 1,
                    background: 'rgba(255,255,255,0.08)',
                    margin: '10px 6px',
                  }}
                />
                <a
                  href="/solutions"
                  style={{
                    display: 'block',
                    padding: '10px 12px',
                    borderRadius: 10,
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  View all solutions
                </a>
              </div>
            ) : null}
          </div>

          {navItems.map(item => (
            <a key={item.label} href={item.href} style={{
              color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
              fontSize: 14, fontWeight: 500, letterSpacing: '0.02em',
              fontFamily: 'var(--font-body)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
            >{item.label}</a>
          ))}
          <a href="/contact" style={{
            background: 'var(--accent)', color: '#fff', padding: '10px 24px',
            borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: 'none',
            fontFamily: 'var(--font-body)', letterSpacing: '0.01em',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#e06d4a'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
          >Talk to Us</a>
        </div>
        <button
          type="button"
          className="home-nav-mobile-toggle"
          onClick={() => setMobileOpen((v) => !v)}
          style={{
            display: 'none',
            width: 40,
            height: 40,
            borderRadius: 10,
            border: '1px solid rgba(255,255,255,0.18)',
            background: 'rgba(255,255,255,0.04)',
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 6h12M4 10h12M4 14h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {mobileOpen ? (
        <div
          style={{
            background: 'rgba(4,14,31,0.98)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '12px 20px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          <a href="/solutions" style={{ color: '#fff', textDecoration: 'none', padding: '10px 0', fontFamily: 'var(--font-body)', fontWeight: 600 }}>Solutions</a>
          <a href="/solutions/Automated-fare-collection" style={{ color: 'rgba(255,255,255,0.78)', textDecoration: 'none', padding: '6px 0 6px 12px', fontFamily: 'var(--font-body)', fontSize: 14 }}>Automated Fare Collection</a>
          <a href="/solutions/Intelligent-transport-systems" style={{ color: 'rgba(255,255,255,0.78)', textDecoration: 'none', padding: '6px 0 6px 12px', fontFamily: 'var(--font-body)', fontSize: 14 }}>Intelligent Transport Systems</a>
          <a href="/solutions/advanced-scheduling-system" style={{ color: 'rgba(255,255,255,0.78)', textDecoration: 'none', padding: '6px 0 6px 12px', fontFamily: 'var(--font-body)', fontSize: 14 }}>Advanced Scheduling System</a>
          <a href="/solutions/fleet-management" style={{ color: 'rgba(255,255,255,0.78)', textDecoration: 'none', padding: '6px 0 6px 12px', fontFamily: 'var(--font-body)', fontSize: 14 }}>Fleet Management</a>
          <a href="/solutions/Micro-mobility-integration" style={{ color: 'rgba(255,255,255,0.78)', textDecoration: 'none', padding: '6px 0 6px 12px', fontFamily: 'var(--font-body)', fontSize: 14 }}>Micro-Mobility Integration</a>
          <a href="/solutions/ai-monitoring-and-control" style={{ color: 'rgba(255,255,255,0.78)', textDecoration: 'none', padding: '6px 0 6px 12px', fontFamily: 'var(--font-body)', fontSize: 14 }}>AI Monitoring and Control</a>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} style={{ color: '#fff', textDecoration: 'none', padding: '10px 0', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
              {item.label}
            </a>
          ))}
          <a href="/contact" style={{ marginTop: 8, background: 'var(--accent)', color: '#fff', padding: '10px 16px', borderRadius: 8, fontFamily: 'var(--font-body)', textDecoration: 'none', fontWeight: 600, width: 'fit-content' }}>Talk to Us</a>
        </div>
      ) : null}
    </nav>
  );
};

export default Nav;
