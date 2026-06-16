import { homeAwards } from "@/data/homeAwards";

const HomeAwards = () => {
  return (
    <section className="home-awards-section" aria-labelledby="home-awards-heading">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .home-awards-section {
          background: #fff;
          padding: 56px 48px 64px;
        }
        .home-awards-inner {
          max-width: 1080px;
          margin: 0 auto;
        }
        .home-awards-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .home-awards-eyebrow {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          color: var(--accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0 0 12px;
          display: block;
        }
        .home-awards-title {
          font-family: var(--font-display);
          font-size: clamp(26px, 3vw, 34px);
          font-weight: 700;
          color: #0a1e3d;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .home-awards-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }
        .home-award-card {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 24px 28px;
          background: #fff;
          border: 1px solid rgba(10, 30, 61, 0.10);
          border-radius: 16px;
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
        }
        .home-award-card:hover {
          border-color: rgba(10, 30, 61, 0.16);
          box-shadow: 0 14px 40px rgba(10, 30, 61, 0.10);
          transform: translateY(-2px);
        }
        .home-award-logo-wrap {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 72px;
          padding-right: 24px;
          border-right: 1px solid rgba(10, 30, 61, 0.08);
        }
        .home-award-logo-wrap img {
          max-width: 120px;
          max-height: 64px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
        }
        .home-award-logo-wrap--large img {
          max-width: 130px;
          max-height: 72px;
        }
        .home-award-body {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .home-award-title {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 650;
          color: #0a1e3d;
          line-height: 1.3;
          margin: 0;
        }
        .home-award-subtitle {
          font-family: var(--font-body);
          font-size: 13.5px;
          color: #5a6a7e;
          line-height: 1.5;
          margin: 0;
        }
        @media (max-width: 1024px) {
          .home-awards-section {
            padding: 48px 28px 56px;
          }
          .home-award-card {
            padding: 22px 24px;
            gap: 20px;
          }
          .home-award-logo-wrap {
            width: 104px;
            height: 64px;
            padding-right: 20px;
          }
          .home-award-logo-wrap img {
            max-width: 104px;
            max-height: 56px;
          }
        }
        @media (max-width: 700px) {
          .home-awards-section {
            padding: 40px 20px 48px;
          }
          .home-awards-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .home-award-card {
            padding: 20px;
            gap: 18px;
          }
          .home-award-logo-wrap {
            width: 88px;
            height: 56px;
            padding-right: 18px;
          }
          .home-award-logo-wrap img {
            max-width: 88px;
            max-height: 48px;
          }
          .home-award-title {
            font-size: 15px;
          }
          .home-award-subtitle {
            font-size: 13px;
          }
        }
      `,
        }}
      />
      <div className="home-awards-inner">
        <div className="home-awards-header">
          <span className="home-awards-eyebrow">Awards &amp; Recognition</span>
          <h2 id="home-awards-heading" className="home-awards-title">
            Recognised across the global transit industry
          </h2>
        </div>

        <div className="home-awards-grid" role="list" aria-label="Awards">
          {homeAwards.map((award) => (
            <div key={award.title} className="home-award-card" role="listitem">
              <div
                className={`home-award-logo-wrap${award.logoSize === "large" ? " home-award-logo-wrap--large" : ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={award.logo} alt={award.logoAlt} loading="lazy" title={award.title} />
              </div>
              <div className="home-award-body">
                <h3 className="home-award-title">{award.title}</h3>
                <p className="home-award-subtitle">{award.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAwards;
