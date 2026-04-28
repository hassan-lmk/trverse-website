"use client";

import React from 'react';

const Solutions = () => {
  const solutions = [
    { 
      title: 'Automated Fare Collection', 
      desc: 'Flexible payment systems that support contactless, card, and mobile transactions across transit networks.', 
      banner: '/solutions/fare.png',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="6" width="22" height="16" rx="3" stroke="var(--accent)" strokeWidth="1.8"/><line x1="3" y1="11" x2="25" y2="11" stroke="var(--accent)" strokeWidth="1.8"/><rect x="6" y="17" width="8" height="2" rx="1" fill="var(--accent)" opacity="0.4"/></svg>
      )
    },
    { 
      title: 'Intelligent Transport Systems', 
      desc: 'Real-time monitoring and control across vehicles, routes, and passenger information.', 
      banner: '/solutions/its.png',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="var(--accent)" strokeWidth="1.8"/><path d="M14 8v6l4 3" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round"/></svg>
      )
    },
    { 
      title: 'AI-Based Bus Scheduling', 
      desc: 'Plan and adjust services using real-time and historical data for optimized fleet utilization.', 
      banner: '/solutions/abs-ai-scheduling-v3.webp',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 20l5-6 4 3 5-8 6 7" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="14" r="2" fill="var(--accent)" opacity="0.3"/><circle cx="18" cy="9" r="2" fill="var(--accent)" opacity="0.3"/></svg>
      )
    },
    { 
      title: 'Control Room Management', 
      desc: 'Manage operations from a single command environment with live tracking and insights.', 
      banner: '/solutions/crm-control-room-v2.webp',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="2" y="4" width="24" height="16" rx="2" stroke="var(--accent)" strokeWidth="1.8"/><line x1="8" y1="24" x2="20" y2="24" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round"/><line x1="14" y1="20" x2="14" y2="24" stroke="var(--accent)" strokeWidth="1.8"/></svg>
      )
    },
    { 
      title: 'Micro-Mobility Integration', 
      desc: 'Extend transit with connected first and last mile services integrated into the core backbone.', 
      banner: '/solutions/mmi-micro-mobility-v2.webp',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="8" cy="20" r="4" stroke="var(--accent)" strokeWidth="1.8"/><circle cx="22" cy="20" r="4" stroke="var(--accent)" strokeWidth="1.8"/><path d="M8 16l6-10h4l2 10" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    },
    { 
      title: 'Performance Monitoring', 
      desc: 'Comprehensive analytics for operators to track network health and efficiency in real-time.', 
      banner: '/solutions/performance.png',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="14" width="4" height="10" rx="1" fill="var(--accent)" opacity="0.3"/><rect x="12" y="8" width="4" height="16" rx="1" fill="var(--accent)" opacity="0.5"/><rect x="20" y="4" width="4" height="20" rx="1" fill="var(--accent)" opacity="0.7"/></svg>
      )
    },
  ];

  return (
    <section id="solution" style={{ background: '#0a1e3d', padding: '120px 48px', borderTopLeftRadius: 48, borderTopRightRadius: 48 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16, display: 'block' }}>Solutions</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 600, color: '#fff', margin: '0 0 20px' }}>Enterprise Components</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'rgba(255,255,255,0.7)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Built as a complete system. Everything works together, not in isolation.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          <style dangerouslySetInnerHTML={{__html: `
            .solution-card {
              background: #fff !important;
              color: #0a1e3d !important;
              border-radius: 20px !important;
              overflow: hidden;
              padding: 0 !important;
              display: flex;
              flex-direction: column;
              border: 1px solid rgba(255,255,255,0.05);
            }
            .solution-card:hover {
              background: #ff825d !important;
              color: #fff !important;
              transform: translateY(-8px);
              box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            }
            .solution-banner-container {
              height: 100px;
              overflow: hidden;
              position: relative;
            }
            .solution-banner {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.5s ease;
            }
            .solution-card:hover .solution-banner {
              transform: scale(1.1);
            }
            .solution-content {
              padding: 32px;
            }
            .solution-card:hover .icon-container {
              background: rgba(255,255,255,0.2) !important;
            }
            .solution-card:hover svg * {
              stroke: #fff !important;
              fill: #fff !important;
            }
          `}} />
          {solutions.map((s, i) => (
            <div key={i} className="solution-card" style={{
              transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)', cursor: 'default',
            }}>
              <div className="solution-banner-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.banner} alt={s.title} className="solution-banner" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(10,30,61,0.2))' }}></div>
              </div>
              <div className="solution-content">
                <div className="icon-container" style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: 'rgba(10,30,61,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24,
                  transition: 'all 0.3s ease'
                }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, margin: 0, opacity: 0.9 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
