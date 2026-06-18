import { homeAwards } from "@/data/homeAwards";

const HomeAwards = () => {
  return (
    <section className="home-awards-section" aria-labelledby="home-awards-heading">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .home-awards-section {
          position: relative;
          z-index: 1;
          margin-top: -56px;
          background: #f3f5f8;
          padding: 80px 48px 44px;
          border-bottom-left-radius: 48px;
          border-bottom-right-radius: 48px;
        }
        .home-awards-inner {
          max-width: 1080px;
          margin: 0 auto;
          text-align: center;
        }
        .home-awards-eyebrow {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          color: var(--accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0 0 24px;
          display: block;
        }
        .home-awards-logos {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 28px 40px;
        }
        .home-award-logo-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 52px;
        }
        .home-award-logo-wrap img {
          max-width: 130px;
          max-height: 48px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
        }
        .home-award-logo-wrap--large {
          height: 68px;
        }
        .home-award-logo-wrap--large img {
          max-width: 180px;
          max-height: 68px;
        }
        @media (max-width: 1024px) {
          .home-awards-section {
            margin-top: -44px;
            padding: 68px 28px 40px;
            border-bottom-left-radius: 36px;
            border-bottom-right-radius: 36px;
          }
        }
        @media (max-width: 700px) {
          .home-awards-section {
            margin-top: -36px;
            padding: 60px 20px 36px;
            border-bottom-left-radius: 28px;
            border-bottom-right-radius: 28px;
          }
          .home-awards-logos {
            gap: 24px 28px;
          }
          .home-award-logo-wrap img {
            max-width: 110px;
            max-height: 44px;
          }
          .home-award-logo-wrap--large {
            height: 58px;
          }
          .home-award-logo-wrap--large img {
            max-width: 150px;
            max-height: 58px;
          }
        }
      `,
        }}
      />
      <div className="home-awards-inner">
        <span id="home-awards-heading" className="home-awards-eyebrow">
          Awards &amp; Recognition
        </span>
        <div className="home-awards-logos" role="list" aria-label="Award logos">
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
