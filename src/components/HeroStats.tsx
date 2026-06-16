"use client";

import React from "react";

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
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-hero-stats-section"
      aria-label="Platform highlights"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .home-hero-stats-section {
          position: relative;
          z-index: 1;
          background: #fff;
          margin-top: 0;
          padding: 48px 48px 56px;
          overflow: visible;
        }
        .home-hero-stats-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
        .home-hero-stats-bar {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
          padding-top: 0;
          border-top: none;
        }
        .home-hero-stats-value {
          font-family: var(--font-display);
          font-size: clamp(28px, 3vw, 36px);
          font-weight: 700;
          color: #0a1e3d;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
          font-variant-numeric: tabular-nums;
        }
        .home-hero-stats-label {
          font-family: var(--font-body);
          font-size: 13px;
          color: #5a6a7e;
          line-height: 1.45;
        }
        @media (max-width: 1024px) {
          .home-hero-stats-section {
            padding: 40px 28px 48px;
          }
          .home-hero-stats-bar {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px 20px;
          }
        }
        @media (max-width: 700px) {
          .home-hero-stats-section {
            padding: 36px 20px 40px;
          }
          .home-hero-stats-bar {
            gap: 20px 16px;
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
              <AnimatedStatValue stat={stat} active={hasAnimated} />
              <div className="home-hero-stats-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroStats;
