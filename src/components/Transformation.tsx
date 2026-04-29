"use client";

import React from 'react';

const Transformation = () => {
  const pairs = [
    { 
      who: 'For Passengers', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
      items: [
      { before: 'Inconsistent schedules and limited updates', after: 'Real-time journey information and updates' },
      { before: 'Restricted payment options', after: 'Flexible, contactless payment methods' },
      { before: 'Limited visibility across journeys', after: 'Clear and reliable travel experience' },
    ]},
    { 
      who: 'For Operators', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>,
      items: [
      { before: 'Fragmented view of fleet and routes', after: 'Centralized network visibility' },
      { before: 'Manual planning and adjustments', after: 'Smarter scheduling and operational control' },
      { before: 'Revenue gaps and fare leakage', after: 'Integrated fare and revenue management' },
    ]},
    { 
      who: 'For Cities', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22V10a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" /><path d="M12 22V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v18" /><path d="M14 10h.01" /><path d="M14 14h.01" /><path d="M14 18h.01" /><path d="M8 14h.01" /><path d="M8 18h.01" /><path d="M2 22h20" /></svg>,
      items: [
      { before: 'Congestion and inefficient coordination', after: 'Connected, system-wide operations' },
      { before: 'Limited accessibility', after: 'Improved coverage and service reliability' },
      { before: 'Difficulty scaling infrastructure', after: 'A platform built to grow with demand' },
    ]},
  ];

  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <section id="about-us" className="home-transformation-section" style={{ background: '#fff', padding: '120px 48px' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .home-transformation-section {
            padding: 96px 28px !important;
          }
          .home-transform-tabs,
          .home-transform-trunk,
          .home-transform-cards {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .home-transform-trunk {
            display: none !important;
          }
        }
        @media (max-width: 700px) {
          .home-transformation-section {
            padding: 84px 20px !important;
          }
        }
      ` }} />
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16, display: 'block' }}>Transformation</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 600, color: '#0a1e3d', margin: '0 0 20px' }}>From Fragmented to Connected</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: '#5a6a7e', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            Cities are growing and demand is rising, but most transport networks still rely on separate systems. TRVERSE brings them into one connected platform.
          </p>
        </div>

        {/* Content - Two Row Connected Path Design */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          
          {/* TOP ROW: Tabs */}
          <div className="home-transform-tabs" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, width: '100%', position: 'relative', zIndex: 2 }}>
            {pairs.map((p, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => setActiveTab(i)} style={{
                  width: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                  fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600,
                  padding: '18px 24px', borderRadius: 12, border: 'none', cursor: 'pointer',
                  background: activeTab === i ? 'var(--accent)' : '#f0f4f8',
                  color: activeTab === i ? '#fff' : '#3a4a5e',
                  transition: 'all 0.3s ease',
                  boxShadow: activeTab === i ? '0 8px 24px rgba(255,130,93,0.3)' : 'none',
                }}>
                  {p.icon}
                  {p.who}
                </button>
              </div>
            ))}
          </div>

          {/* MIDDLE ROW: The Connection Trunk */}
          <div className="home-transform-trunk" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, width: '100%', height: 60, position: 'relative' }}>
            {[0, 1, 2].map(i => (
              <div key={`trunk-${i}`} style={{ position: 'relative' }}>
                {/* Horizontal branch connecting leftwards (if not the first column) */}
                {i > 0 && <div style={{ position: 'absolute', top: '50%', left: -12, width: 'calc(50% + 12px)', height: 2, background: 'var(--accent)', transform: 'translateY(-50%)', zIndex: 0 }}></div>}
                
                {/* Horizontal branch connecting rightwards (if not the last column) */}
                {i < 2 && <div style={{ position: 'absolute', top: '50%', left: '50%', right: -12, height: 2, background: 'var(--accent)', transform: 'translateY(-50%)', zIndex: 0 }}></div>}

                {/* Vertical drop down to the card */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', width: 2, bottom: 0, background: 'var(--accent)', transform: 'translateX(-50%)', zIndex: 0 }}></div>

                {/* Vertical drop from top if active tab */}
                {activeTab === i && <div style={{ position: 'absolute', top: 0, left: '50%', width: 2, height: '50%', background: 'var(--accent)', transform: 'translateX(-50%)', zIndex: 0 }}></div>}

                {/* Glowing dot */}
                <div style={{
                  position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, 50%)',
                  width: 14, height: 14, borderRadius: '50%', background: '#fff',
                  border: '3px solid var(--accent)',
                  boxShadow: '0 0 0 6px rgba(255,130,93,0.15)', zIndex: 2
                }}></div>
              </div>
            ))}
          </div>

          {/* BOTTOM ROW: The Cards */}
          <div className="home-transform-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, width: '100%', paddingTop: 20 }}>
            {pairs[activeTab].items.map((item, i) => (
              <div key={`card-${activeTab}-${i}`} style={{
                background: '#f7f9fc', borderRadius: 12, padding: '32px 24px',
                border: '1px solid rgba(19,79,137,0.06)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                animation: 'fadeUp 0.4s ease forwards',
                animationDelay: `${i * 0.1}s`, opacity: 0,
                transition: 'all 0.3s ease',
                position: 'relative',
                zIndex: 1,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(19,79,137,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.02)'; }}
              >
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#8a95a5', lineHeight: 1.6, marginBottom: 12, textDecoration: 'line-through', textDecorationColor: 'rgba(138,149,165,0.3)' }}>{item.before}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: '#134f89', fontWeight: 600, lineHeight: 1.5, margin: 0 }}>{item.after}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
