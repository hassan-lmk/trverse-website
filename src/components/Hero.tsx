"use client";

import React from 'react';

const Hero = () => {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section className="home-hero-section" style={{
      position: 'relative', height: '80vh', minHeight: '80vh', display: 'flex', alignItems: 'center',
      overflow: 'hidden', background: '#040e1f',
      borderBottomLeftRadius: 48, borderBottomRightRadius: 48,
      boxShadow: '0 12px 40px rgba(0,0,0,0.05)'
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .home-hero-section {
            min-height: 72vh !important;
            border-bottom-left-radius: 32px !important;
            border-bottom-right-radius: 32px !important;
          }
          .home-hero-container {
            padding: 0 28px !important;
          }
        }
        @media (max-width: 700px) {
          .home-hero-section {
            min-height: 68vh !important;
          }
          .home-hero-container {
            padding: 0 20px !important;
          }
          .home-hero-copy {
            max-width: 100% !important;
          }
        }
      ` }} />
      {/* YouTube Background Video */}
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0
      }}>
        <iframe
          src="https://www.youtube.com/embed/5u6hFlV80G4?autoplay=1&mute=1&controls=0&loop=1&playlist=5u6hFlV80G4&showinfo=0&modestbranding=1&rel=0&disablekb=1"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw', /* 16:9 aspect ratio */
            minHeight: '80vh',
            minWidth: '142.22vh', /* 80vh * 16/9 */
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            border: 'none',
          }}
          allow="autoplay; encrypted-media"
          title="Background Video"
        />
        {/* Dark overlay to ensure text readability */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(4, 14, 31, 0.65)' /* Semi-transparent dark blue overlay */
        }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04, zIndex: 1,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}></div>

      {/* Floating geometric shapes */}
      <svg style={{ position: 'absolute', top: '10%', right: '8%', opacity: 0.08, animation: 'float 8s ease-in-out infinite', zIndex: 1 }} width="200" height="200" viewBox="0 0 200 200">
        <polygon points="100,10 190,60 190,140 100,190 10,140 10,60" fill="none" stroke="var(--accent)" strokeWidth="1"/>
      </svg>
      <svg style={{ position: 'absolute', bottom: '15%', left: '5%', opacity: 0.06, animation: 'float 10s ease-in-out infinite reverse', zIndex: 1 }} width="120" height="120" viewBox="0 0 120 120">
        <rect x="10" y="10" width="100" height="100" fill="none" stroke="var(--accent)" strokeWidth="1" transform="rotate(45 60 60)"/>
      </svg>

      {/* Dot pattern */}
      <div style={{
        position: 'absolute', right: 0, top: '20%', width: 300, height: 300, opacity: 0.06, zIndex: 1,
        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}></div>

      <div className="home-hero-container" style={{
        position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '0 48px',
        width: '100%',
      }}>
        <div className="home-hero-copy" style={{ maxWidth: 680 }}>
          <div style={{
            display: 'inline-block', padding: '6px 16px', borderRadius: 20,
            background: 'rgba(255,130,93,0.12)', border: '1px solid rgba(255,130,93,0.25)',
            marginBottom: 28,
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.7s ease 0.2s',
          }}>
            <span style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', fontFamily: 'var(--font-body)', textTransform: 'uppercase' }}>
              Smart Mobility Platform
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 68px)',
            fontWeight: 600, lineHeight: 1.08, color: '#fff', margin: '0 0 24px',
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s ease 0.4s',
          }}>
            Better Mobility<br/>for Cities.{' '}
            <span style={{ color: 'var(--accent)' }}>By Design.</span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.7,
            color: 'rgba(255,255,255,0.6)', maxWidth: 520, margin: '0 0 40px',
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s ease 0.6s',
          }}>
            From fare collection to fleet control, everything connects in a single system designed for real-world transit.
          </p>

          <div style={{
            display: 'flex', gap: 16, flexWrap: 'wrap',
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s ease 0.8s',
          }}>
            <a href="#solutions" className="hero-btn-primary">Explore Solutions</a>
            <a href="/contact" className="hero-btn-secondary">Talk to Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
