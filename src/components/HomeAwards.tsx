import { homeAwards } from "@/data/homeAwards";

const HomeAwards = () => {
  return (
    <section className="home-awards-section" aria-labelledby="home-awards-heading">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .home-awards-section {
          background: #fff;
          padding: 32px 48px 40px;
        }
        .home-awards-inner {
          max-width: 960px;
          margin: 0 auto;
          text-align: center;
        }
        .home-awards-eyebrow {
          font-family: var(--font-body);
          font-size: 12px;
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
          gap: clamp(36px, 6vw, 64px);
        }
        .home-award-logo-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .home-award-logo-wrap img {
          max-width: 150px;
          max-height: 56px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
        }
        .home-award-logo-wrap--large img {
          max-width: 190px;
          max-height: 68px;
        }
        @media (max-width: 1024px) {
          .home-awards-section {
            padding: 28px 28px 36px;
          }
        }
        @media (max-width: 700px) {
          .home-awards-section {
            padding: 24px 20px 32px;
          }
          .home-awards-logos {
            gap: 28px 32px;
          }
          .home-award-logo-wrap img {
            max-width: 120px;
            max-height: 48px;
          }
          .home-award-logo-wrap--large img {
            max-width: 140px;
            max-height: 56px;
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
