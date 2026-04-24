"use client";

import React from 'react';

const Impact = () => {
  const projects = [
    {
      name: 'Peshawar BRT',
      location: 'Pakistan',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
      detail: '27 km system with feeder routes serving over 350,000 passengers daily.',
      result: '50% reduction in travel time and improved coordination across routes',
      color: '#134f89',
    },
    {
      name: 'Masar Destination BRT',
      location: 'Saudi Arabia',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
      detail: 'Large-scale system built for high passenger volumes and smart city integration.',
      result: 'Integrated payments, operations, and system visibility',
      color: '#0a1e3d',
    },
    {
      name: 'Lahore Metrobus',
      location: 'Pakistan',
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800',
      detail: 'High-demand urban corridor with continuous passenger flow.',
      result: 'Reliable fare processing and efficient passenger movement',
      color: '#1a5c9e',
    },
  ];

  return (
    <section id="impact" style={{ background: '#f7f9fc', padding: '120px 48px', position: 'relative', overflow: 'hidden', borderTopLeftRadius: 48, borderTopRightRadius: 48 }}>
      <style dangerouslySetInnerHTML={{__html: `
        .impact-card {
          background: #fff;
          border-radius: 20px;
          border: 1px solid rgba(10, 30, 61, 0.06);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          height: 100%;
        }
        .impact-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 130, 93, 0.3);
          box-shadow: 0 20px 40px rgba(10, 30, 61, 0.1);
        }
        .impact-image-container {
          height: 240px;
          position: relative;
          overflow: hidden;
        }
        .impact-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .impact-card:hover .impact-image {
          transform: scale(1.1) blur(2px);
        }
        .impact-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(10, 30, 61, 0.2) 0%, rgba(10, 30, 61, 0.8) 100%);
          transition: all 0.4s ease;
        }
        .impact-card:hover .impact-overlay {
          background: rgba(10, 30, 61, 0.85);
          backdrop-filter: blur(4px);
        }
        .result-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 32px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          z-index: 5;
        }
        .impact-card:hover .result-overlay {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16, display: 'block' }}>Real Impact</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 600, color: '#0a1e3d', margin: '0 0 20px' }}>Real Systems</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: '#5a6a7e', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Success stories from around the world. TRVERSE supports transit networks across cities.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {projects.map((p, i) => (
            <div key={i} className="impact-card">
              <div className="impact-image-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} className="impact-image" />
                <div className="impact-overlay"></div>
                
                {/* Result Overlay on Image Area */}
                <div className="result-overlay">
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Outcome & Result</div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#fff', lineHeight: 1.6, fontWeight: 500, margin: 0 }}>{p.result}</p>
                </div>

                <div style={{
                  position: 'absolute', top: 20, right: 20, padding: '4px 12px',
                  background: 'rgba(255,130,93,0.95)', borderRadius: 100,
                  fontFamily: 'var(--font-body)', fontSize: 11, color: '#fff', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.05em', zIndex: 10
                }}>{p.location}</div>
              </div>

              <div style={{ padding: '28px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: '#0a1e3d', margin: '0 0 12px' }}>{p.name}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: '#5a6a7e', lineHeight: 1.6, margin: 0 }}>{p.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <a href="#" style={{
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--accent)',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
            transition: 'gap 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.gap = '14px'}
          onMouseLeave={e => e.currentTarget.style.gap = '8px'}
          >
            View All Client Stories
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Impact;
