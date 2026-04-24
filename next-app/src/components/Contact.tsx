"use client";

import React from 'react';

const Contact = () => {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = React.useState<string | null>(null);

  const inputStyle = (field: string) => ({
    fontFamily: 'var(--font-body)', fontSize: 15, padding: '14px 18px',
    border: `1.5px solid ${focused === field ? '#134f89' : '#e0e6ee'}`,
    borderRadius: 8, outline: 'none', width: '100%', boxSizing: 'border-box' as const,
    background: '#fff', color: '#0a1e3d', transition: 'border-color 0.2s',
  });

  return (
    <section id="contact" style={{ background: '#fff', padding: '120px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0a1e3d 0%, #134f89 100%)',
          borderRadius: 20, padding: '72px 64px', display: 'grid',
          gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* BG decoration */}
          <div style={{
            position: 'absolute', right: -60, top: -60, width: 300, height: 300,
            borderRadius: '50%', background: 'rgba(255,130,93,0.06)',
          }}></div>
          <div style={{
            position: 'absolute', left: -40, bottom: -40, width: 200, height: 200,
            borderRadius: '50%', background: 'rgba(255,255,255,0.02)',
          }}></div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 600, color: '#fff', margin: '0 0 20px', lineHeight: 1.2 }}>
              Let's improve how your transit system runs
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: '0 0 32px' }}>
              Talk to TRVERSE about building a connected mobility system for your city.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: '◎', text: 'DSO, Dubai, UAE' },
                { icon: '◎', text: 'Houston, Texas, USA' },
              ].map((loc, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ color: 'var(--accent)', fontSize: 12 }}>{loc.icon}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{loc.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#fff', borderRadius: 14, padding: 36, position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <input placeholder="Name" style={inputStyle('name')} value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} />
              <input placeholder="Email Address" style={inputStyle('email')} value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
                onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} />
            </div>
            <textarea placeholder="Tell us about your project..." rows={4} style={{...inputStyle('message'), resize: 'vertical', marginBottom: 20 }} value={form.message}
              onChange={e => setForm({...form, message: e.target.value})}
              onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} />
            <button style={{
              fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600,
              padding: '14px 36px', background: 'var(--accent)', color: '#fff', border: 'none',
              borderRadius: 8, cursor: 'pointer', width: '100%',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#e06d4a'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
            >Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
