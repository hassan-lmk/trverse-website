const heroStats = [
  { val: "500M+", label: "Annual rides processed" },
  { val: "6", label: "Cities deployed" },
  { val: "99.9%", label: "Platform uptime SLA" },
  { val: "30 yrs", label: "LMKR enterprise heritage" },
];

const HeroStats = () => {
  return (
    <section className="home-hero-stats-section" aria-label="Platform highlights">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .home-hero-stats-section {
          position: relative;
          z-index: 3;
          background: #071428;
          margin-top: -40px;
          padding: 0 48px 56px;
        }
        .home-hero-stats-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
        .home-hero-stats-bar {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.12);
        }
        .home-hero-stats-value {
          font-family: var(--font-display);
          font-size: clamp(28px, 3vw, 36px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }
        .home-hero-stats-label {
          font-family: var(--font-body);
          font-size: 13px;
          color: rgba(255,255,255,0.65);
          line-height: 1.45;
        }
        @media (max-width: 1024px) {
          .home-hero-stats-section {
            margin-top: -28px;
            padding: 0 28px 48px;
          }
          .home-hero-stats-bar {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px 20px;
          }
        }
        @media (max-width: 700px) {
          .home-hero-stats-section {
            margin-top: -20px;
            padding: 0 20px 40px;
          }
          .home-hero-stats-bar {
            gap: 20px 16px;
            padding-top: 24px;
          }
          .home-hero-stats-value {
            font-size: clamp(24px, 7vw, 30px);
          }
          .home-hero-stats-label {
            font-size: 12px;
          }
        }
      `,
        }}
      />
      <div className="home-hero-stats-inner">
        <div className="home-hero-stats-bar">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <div className="home-hero-stats-value">{stat.val}</div>
              <div className="home-hero-stats-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroStats;
