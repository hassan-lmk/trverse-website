"use client";

import React from 'react';

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
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

  const links = ['Transformation', 'Solutions', 'Impact', 'Contact'];

  return (
    <nav style={navStyle}>
      <div style={innerStyle}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.svg" alt="TRVERSE" style={{ height: 32, filter: 'brightness(0) invert(1)' }} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
              fontSize: 14, fontWeight: 500, letterSpacing: '0.02em',
              fontFamily: 'var(--font-body)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
            >{l}</a>
          ))}
          <a href="#contact" style={{
            background: 'var(--accent)', color: '#fff', padding: '10px 24px',
            borderRadius: 6, fontSize: 14, fontWeight: 600, textDecoration: 'none',
            fontFamily: 'var(--font-body)', letterSpacing: '0.01em',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#e06d4a'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
          >Talk to Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
