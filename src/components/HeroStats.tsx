"use client";

import React from "react";
import { homeAwards } from "@/data/homeAwards";

const heroStats = [
  { value: 500, suffix: "M+", label: "Annual rides processed" },
  { value: 6, suffix: "", label: "Cities deployed" },
  { value: 99.9, suffix: "%", label: "Platform uptime SLA", decimals: 1 },
  { value: 30, suffix: " yrs", label: "LMKR enterprise heritage" },
] as const;

type HeroStat = (typeof heroStats)[number];

function formatCount(value: number, decimals: number) {
  return decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
}

function useCountUp(
  target: number,
  active: boolean,
  duration = 1800,
  decimals = 0,
) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!active) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let start: number | null = null;
    let frame = 0;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(target * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return formatCount(count, decimals);
}

function AnimatedStatValue({
  stat,
  active,
}: {
  stat: HeroStat;
  active: boolean;
}) {
  const decimals = "decimals" in stat ? (stat.decimals ?? 0) : 0;
  const display = useCountUp(stat.value, active, 1800, decimals);

  return (
    <div className="home-hero-stats-value" aria-label={`${stat.value}${stat.suffix}`}>
      {display}
      {stat.suffix}
    </div>
  );
}

const HeroStats = () => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-proof-section"
      aria-label="Platform highlights and awards"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .home-proof-section {
          position: relative;
          z-index: 1;
          background: #fff;
          padding: 56px 48px 72px;
          overflow: visible;
        }
        .home-proof-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .home-proof-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 56px;
          align-items: stretch;
        }
        .home-proof-col {
          display: flex;
          flex-direction: column;
        }
        .home-proof-col--stats {
          background: linear-gradient(145deg, #0a1e3d 0%, #134f89 100%);
          border-radius: 28px;
          padding: 36px 32px 40px;
        }
        .home-proof-col--stats .home-proof-eyebrow {
          color: var(--accent);
        }
        .home-proof-col--awards {
          padding-left: 56px;
          border-left: 1px solid rgba(10, 30, 61, 0.10);
        }
        .home-proof-eyebrow {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          color: var(--accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0 0 28px;
          display: block;
        }
        /* Stats */
        .home-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 32px 24px;
        }
        .home-stat-item {
          display: flex;
          flex-direction: column;
        }
        .home-hero-stats-value {
          font-family: var(--font-display);
          font-size: clamp(30px, 3.2vw, 40px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
          font-variant-numeric: tabular-nums;
        }
        .home-hero-stats-label {
          font-family: var(--font-body);
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.45;
        }
        /* Awards */
        .home-awards-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .home-award-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 16px 20px;
          background: #fff;
          border: 1px solid rgba(10, 30, 61, 0.10);
          border-radius: 14px;
        }
        .home-award-logo-wrap {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 92px;
          height: 52px;
          padding-right: 20px;
          border-right: 1px solid rgba(10, 30, 61, 0.08);
        }
        .home-award-logo-wrap img {
          max-width: 92px;
          max-height: 48px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
        }
        .home-award-logo-wrap--large img {
          max-width: 100px;
          max-height: 52px;
        }
        .home-award-body {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .home-award-title {
          font-family: var(--font-display);
          font-size: 14.5px;
          font-weight: 650;
          color: #0a1e3d;
          line-height: 1.3;
          margin: 0;
        }
        .home-award-subtitle {
          font-family: var(--font-body);
          font-size: 12.5px;
          color: #5a6a7e;
          line-height: 1.45;
          margin: 0;
        }
        @media (max-width: 1024px) {
          .home-proof-section {
            padding: 48px 28px 56px;
          }
          .home-proof-grid {
            grid-template-columns: 1fr;
            gap: 44px;
          }
          .home-proof-col--stats {
            padding: 32px 28px 36px;
            border-radius: 24px;
          }
          .home-proof-col--awards {
            padding-left: 0;
            border-left: none;
            padding-top: 40px;
            border-top: 1px solid rgba(10, 30, 61, 0.10);
          }
        }
        @media (max-width: 700px) {
          .home-proof-section {
            padding: 40px 20px 48px;
          }
          .home-stats-grid {
            gap: 26px 18px;
          }
          .home-hero-stats-value {
            font-size: clamp(26px, 8vw, 32px);
          }
          .home-award-card {
            padding: 14px 16px;
            gap: 16px;
          }
          .home-award-logo-wrap {
            width: 78px;
            height: 46px;
            padding-right: 16px;
          }
          .home-award-logo-wrap img {
            max-width: 78px;
            max-height: 42px;
          }
        }
      `,
        }}
      />
      <div className="home-proof-inner">
        <div className="home-proof-grid">
          <div className="home-proof-col home-proof-col--stats">
            <span className="home-proof-eyebrow">By the numbers</span>
            <div className="home-stats-grid">
              {heroStats.map((stat) => (
                <div key={stat.label} className="home-stat-item">
                  <AnimatedStatValue stat={stat} active={hasAnimated} />
                  <div className="home-hero-stats-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="home-proof-col home-proof-col--awards">
            <span className="home-proof-eyebrow">Awards &amp; Recognition</span>
            <div className="home-awards-list" role="list" aria-label="Awards">
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
        </div>
      </div>
    </section>
  );
};

export default HeroStats;
