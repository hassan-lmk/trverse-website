import { homeAwards } from "@/data/homeAwards";

const HomeAwards = () => {
  return (
    <section className="home-awards-section" aria-labelledby="home-awards-heading">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .home-awards-section {
          background: #fff;
          padding: 40px 48px 56px;
        }
        .home-awards-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
        .home-awards-header {
          text-align: center;
          margin-bottom: 24px;
        }
        .home-awards-grid {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: clamp(32px, 5vw, 56px);
        }
        .home-award-logo-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          background: transparent;
          border: none;
        }
        .home-award-logo-wrap img {
          max-width: 160px;
          max-height: 64px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
        }
        .home-award-logo-wrap--large img {
          max-width: 210px;
          max-height: 84px;
        }
        @media (max-width: 1024px) {
          .home-awards-section {
            padding: 36px 28px 48px;
          }
          .home-award-logo-wrap img {
            max-width: 140px;
            max-height: 56px;
          }
          .home-award-logo-wrap--large img {
            max-width: 180px;
            max-height: 72px;
          }
        }
        @media (max-width: 700px) {
          .home-awards-section {
            padding: 32px 20px 44px;
          }
          .home-awards-grid {
            gap: 28px 36px;
          }
          .home-award-logo-wrap img {
            max-width: 120px;
            max-height: 48px;
          }
          .home-award-logo-wrap--large img {
            max-width: 150px;
            max-height: 60px;
          }
        }
      `,
        }}
      />
      <div className="home-awards-inner">
        <div className="home-awards-header">
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--accent)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 10,
              display: "block",
            }}
          >
            Awards & Recognition
          </span>
         
        </div>

        <div className="home-awards-grid" role="list" aria-label="Award logos">
          {homeAwards.map((award) => (
            <div
              key={award.title}
              className={`home-award-logo-wrap${award.logoSize === "large" ? " home-award-logo-wrap--large" : ""}`}
              role="listitem"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={award.logo} alt={award.logoAlt} loading="lazy" title={award.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAwards;
