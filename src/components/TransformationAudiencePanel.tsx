"use client";

import React, { useCallback, useEffect, useState } from "react";
import type { AudienceCapability, AudienceLandingDoc } from "@/data/audienceLandings";

type Props = {
  doc: AudienceLandingDoc;
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <span className="transform-panel-eyebrow">{children}</span>;
}

function CapabilitiesCarousel({
  heading,
  items,
}: {
  heading: string;
  items: AudienceCapability[];
}) {
  const AUTO_INTERVAL_MS = 4500;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = items.length;
  const maxIndex = Math.max(0, total - 1);

  useEffect(() => {
    setIndex(0);
  }, [items]);

  const goTo = useCallback(
    (next: number) => {
      setIndex(Math.min(Math.max(next, 0), maxIndex));
    },
    [maxIndex],
  );

  const goNext = useCallback(() => {
    setIndex((current) => (current >= maxIndex ? 0 : current + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setIndex((current) => (current <= 0 ? maxIndex : current - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (total <= 1 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(goNext, AUTO_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [goNext, paused, total, index]);

  if (total === 0) return null;

  const item = items[index];

  return (
    <div
      className="transform-panel-cap-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <SectionEyebrow>Capabilities</SectionEyebrow>
      <h4 className="transform-panel-subhead">{heading}</h4>

      <div
        className="transform-panel-cap-viewport"
        role="region"
        aria-roledescription="carousel"
        aria-label="TRVERSE capabilities"
      >
        <article className="transform-panel-cap-slide" aria-live="polite">
          <strong>{item.capability}</strong>
          <p>{item.description}</p>
        </article>
      </div>

      <div className="transform-panel-cap-controls">
        <div className="transform-panel-cap-nav">
          <button
            type="button"
            className="transform-panel-cap-btn"
            onClick={goPrev}
            aria-label="Previous capability"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M10 3L5 8l5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="transform-panel-cap-btn"
            onClick={goNext}
            aria-label="Next capability"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M6 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="transform-panel-cap-dots" role="tablist" aria-label="Capability slides">
          {items.map((cap, i) => (
            <button
              key={cap.capability}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`${cap.capability}, slide ${i + 1} of ${total}`}
              className={`transform-panel-cap-dot${i === index ? " is-active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <span className="transform-panel-cap-counter" aria-live="polite">
          {index + 1} / {total}
        </span>
      </div>
    </div>
  );
}

export default function TransformationAudiencePanel({ doc }: Props) {
  const hasProof = doc.proofHighlights && doc.proofHighlights.length > 0;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .home-transform-panel {
          margin-top: 8px;
          padding: 40px 44px 36px;
          background: #f7f9fc;
          border-radius: 20px;
          border: 1px solid rgba(19, 79, 137, 0.08);
          text-align: left;
        }
        .transform-panel-headline {
          font-family: var(--font-display);
          font-size: clamp(26px, 2.8vw, 34px);
          font-weight: 700;
          color: #0a1e3d;
          margin: 0 0 14px;
          line-height: 1.25;
          letter-spacing: -0.02em;
        }
        .transform-panel-intro {
          font-family: var(--font-body);
          font-size: 17px;
          color: #5a6a7e;
          line-height: 1.75;
          margin: 0 0 36px;
          max-width: 820px;
        }
        .transform-panel-block {
          margin-bottom: 36px;
        }
        .transform-panel-block:last-child {
          margin-bottom: 0;
        }
        .transform-panel-split {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 32px;
          align-items: start;
          margin-bottom: 36px;
        }
        .transform-panel-eyebrow {
          display: block;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 12px;
        }
        .transform-panel-subhead {
          font-family: var(--font-display);
          font-size: clamp(20px, 2.2vw, 24px);
          font-weight: 700;
          color: #0a1e3d;
          margin: 0 0 10px;
          line-height: 1.35;
        }
        .transform-panel-body {
          font-family: var(--font-body);
          font-size: 16px;
          color: #5a6a7e;
          line-height: 1.75;
          margin: 0;
        }
        .transform-panel-challenge {
          background: #fff;
          border: 1px solid rgba(10, 30, 61, 0.08);
          border-radius: 16px;
          padding: 24px 26px;
          height: 100%;
        }
        .transform-panel-cap-carousel {
          background: #fff;
          border: 1px solid rgba(10, 30, 61, 0.08);
          border-radius: 16px;
          padding: 24px 26px;
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }
        .transform-panel-cap-viewport {
          flex: 1;
          margin-top: 18px;
          min-height: 120px;
        }
        .transform-panel-cap-slide {
          background: #f7f9fc;
          border: 1px solid rgba(10, 30, 61, 0.06);
          border-radius: 14px;
          padding: 20px 22px;
          min-height: 120px;
        }
        .transform-panel-cap-slide strong {
          display: block;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 700;
          color: #0a1e3d;
          margin-bottom: 8px;
        }
        .transform-panel-cap-slide p {
          margin: 0;
          font-family: var(--font-body);
          font-size: 14px;
          color: #5a6a7e;
          line-height: 1.65;
        }
        .transform-panel-cap-controls {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 18px;
          flex-wrap: wrap;
        }
        .transform-panel-cap-nav {
          display: flex;
          gap: 8px;
        }
        .transform-panel-cap-btn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: 1px solid rgba(10, 30, 61, 0.12);
          background: #fff;
          color: #134f89;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .transform-panel-cap-btn:hover:not(:disabled) {
          background: rgba(255, 130, 93, 0.1);
          border-color: rgba(255, 130, 93, 0.35);
          color: var(--accent);
        }
        .transform-panel-cap-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
        .transform-panel-cap-btn:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
        }
        .transform-panel-cap-dots {
          display: flex;
          gap: 8px;
          flex: 1;
        }
        .transform-panel-cap-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          padding: 0;
          background: rgba(10, 30, 61, 0.15);
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .transform-panel-cap-dot.is-active {
          background: var(--accent);
          transform: scale(1.15);
        }
        .transform-panel-cap-counter {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          color: #8a97a8;
          white-space: nowrap;
        }
        .transform-panel-proof-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 18px;
        }
        .transform-panel-proof-card {
          background: linear-gradient(145deg, #08182f 0%, #0f3d6e 58%, #134f89 100%);
          border-radius: 16px;
          padding: 22px 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .transform-panel-proof-value {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 8px;
        }
        .transform-panel-proof-value strong {
          font-family: var(--font-display);
          font-size: clamp(24px, 2.5vw, 30px);
          font-weight: 700;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .transform-panel-proof-value span {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.55);
        }
        .transform-panel-proof-card p {
          margin: 0;
          font-family: var(--font-body);
          font-size: 13px;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.55;
        }
        @media (max-width: 900px) {
          .transform-panel-split {
            grid-template-columns: 1fr;
          }
          .transform-panel-proof-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 700px) {
          .home-transform-panel {
            padding: 28px 22px 24px !important;
          }
        }
      `,
        }}
      />

      <div className="home-transform-panel" key={doc.slug}>
        <h3 className="transform-panel-headline">{doc.heroHeadline}</h3>
        <p className="transform-panel-intro">{doc.heroSubheadline}</p>

        <div className="transform-panel-split">
          <div className="transform-panel-challenge">
            <SectionEyebrow>The Challenge</SectionEyebrow>
            <h4 className="transform-panel-subhead">{doc.challengeHeading}</h4>
            <p className="transform-panel-body">{doc.challengeBody}</p>
          </div>

          <CapabilitiesCarousel heading={doc.capabilitiesHeading} items={doc.capabilities} />
        </div>

        {hasProof ? (
          <div className="transform-panel-block">
            <SectionEyebrow>{doc.proofEyebrow ?? "Proof In Production"}</SectionEyebrow>
            <h4 className="transform-panel-subhead">
              {doc.proofResultsHeading ?? "Results in Live Transit Operations"}
            </h4>
            <div className="transform-panel-proof-grid">
              {doc.proofHighlights!.map((item) => (
                <div key={item.label} className="transform-panel-proof-card">
                  <div className="transform-panel-proof-value">
                    <strong>{item.value}</strong>
                    {item.valueTo ? <span>to {item.valueTo}</span> : null}
                  </div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
