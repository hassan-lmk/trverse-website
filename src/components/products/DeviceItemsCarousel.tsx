"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type DeviceCarouselItem = {
  label: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

type Props = {
  items: DeviceCarouselItem[];
  categoryLabel: string;
};

const GAP_PX = 12;
const VISIBLE_COUNT = 2;

function DeviceSlideCard({ item }: { item: DeviceCarouselItem }) {
  return (
    <article className="device-carousel-slide">
      <div className="device-carousel-image-wrap" aria-hidden={!item.imageSrc}>
        {item.imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.imageSrc} alt={item.imageAlt ?? item.label} />
        ) : (
          <div className="device-carousel-image-placeholder" aria-hidden>
            {item.label.slice(0, 1)}
          </div>
        )}
      </div>
      <div className="device-carousel-body">
        <h4 className="device-carousel-label">{item.label}</h4>
        <p className="device-carousel-desc">{item.description}</p>
      </div>
    </article>
  );
}

export function DeviceItemsCarousel({ items, categoryLabel }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const total = items.length;
  const visibleCount = Math.min(VISIBLE_COUNT, total);
  const maxIndex = Math.max(0, total - visibleCount);

  const getSlideStep = useCallback(() => {
    const el = viewportRef.current;
    if (!el || el.clientWidth <= 0) return 0;
    const slideWidth = (el.clientWidth - GAP_PX * (visibleCount - 1)) / visibleCount;
    return slideWidth + GAP_PX;
  }, [visibleCount]);

  const goTo = useCallback(
    (next: number) => {
      const el = viewportRef.current;
      const clamped = Math.min(Math.max(next, 0), maxIndex);
      setIndex(clamped);
      if (!el) return;
      const step = getSlideStep();
      if (step <= 0) return;
      el.scrollTo({ left: clamped * step, behavior: "smooth" });
    },
    [getSlideStep, maxIndex],
  );

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const onScroll = () => {
      const step = getSlideStep();
      if (step <= 0) return;
      const next = Math.min(Math.round(el.scrollLeft / step), maxIndex);
      setIndex(next);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [getSlideStep, maxIndex]);

  if (total === 0) return null;

  const rangeStart = index + 1;
  const rangeEnd = Math.min(index + visibleCount, total);

  return (
    <div className="device-items-carousel">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .device-items-carousel {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
          min-width: 0;
          width: 100%;
          max-width: 100%;
        }
        .device-carousel-viewport {
          display: flex;
          gap: ${GAP_PX}px;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          scrollbar-width: none;
          width: 100%;
          min-width: 0;
          max-width: 100%;
          -webkit-overflow-scrolling: touch;
        }
        .device-carousel-viewport::-webkit-scrollbar {
          display: none;
        }
        .device-carousel-slide {
          flex: 0 0 calc((100% - ${GAP_PX}px) / 2);
          width: calc((100% - ${GAP_PX}px) / 2);
          min-width: 0;
          max-width: calc((100% - ${GAP_PX}px) / 2);
          box-sizing: border-box;
          scroll-snap-align: start;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(19,79,137,0.1);
          background: linear-gradient(165deg, #f8fafc 0%, #eef3f9 100%);
        }
        .device-carousel-image-wrap {
          position: relative;
          height: 140px;
          overflow: hidden;
          background: #e8eef5;
        }
        .device-carousel-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .device-carousel-image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, rgba(19,79,137,0.08) 0%, rgba(255,130,93,0.1) 100%);
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 700;
          color: rgba(10,30,61,0.2);
          letter-spacing: 0.04em;
        }
        .device-carousel-body {
          padding: 14px 14px 16px;
        }
        .device-carousel-label {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          color: #0a1e3d;
          margin: 0 0 6px;
          line-height: 1.3;
        }
        .device-carousel-desc {
          font-family: var(--font-body);
          font-size: 12.5px;
          color: #5f6e82;
          line-height: 1.55;
          margin: 0;
        }
        .device-carousel-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid rgba(19,79,137,0.08);
        }
        .device-carousel-nav {
          display: flex;
          gap: 8px;
          flex-shrink: 0;
        }
        .device-carousel-btn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: 1px solid rgba(19,79,137,0.12);
          background: #fff;
          color: #134f89;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }
        .device-carousel-btn:hover:not(:disabled) {
          background: rgba(255,130,93,0.1);
          border-color: rgba(255,130,93,0.35);
          color: var(--accent);
        }
        .device-carousel-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
        .device-carousel-btn:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
        }
        .device-carousel-dots {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
          justify-content: center;
          flex: 1;
          min-width: 0;
        }
        .device-carousel-dot {
          width: 7px;
          height: 7px;
          padding: 0;
          border: none;
          border-radius: 50%;
          background: rgba(19,79,137,0.18);
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .device-carousel-dot.is-active {
          background: var(--accent);
          transform: scale(1.15);
        }
        .device-carousel-counter {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          color: #7a8797;
          letter-spacing: 0.06em;
          white-space: nowrap;
          flex-shrink: 0;
        }
        @media (max-width: 520px) {
          .device-carousel-image-wrap {
            height: 112px;
          }
          .device-carousel-label {
            font-size: 13px;
          }
          .device-carousel-desc {
            font-size: 11.5px;
          }
        }
      `,
        }}
      />

      <div
        ref={viewportRef}
        className="device-carousel-viewport"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${categoryLabel} devices`}
      >
        {items.map((item) => (
          <DeviceSlideCard key={item.label} item={item} />
        ))}
      </div>

      <div className="device-carousel-controls">
        <div className="device-carousel-nav">
          <button
            type="button"
            className="device-carousel-btn"
            onClick={() => goTo(index - 1)}
            disabled={index <= 0}
            aria-label="Previous devices"
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
            className="device-carousel-btn"
            onClick={() => goTo(index + 1)}
            disabled={index >= maxIndex}
            aria-label="Next devices"
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

        <div className="device-carousel-dots" role="tablist" aria-label="Device slides">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              className={`device-carousel-dot${i === index ? " is-active" : ""}`}
              aria-label={`Show devices ${i + 1} to ${Math.min(i + visibleCount, total)}`}
              aria-selected={i === index}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <span className="device-carousel-counter" aria-live="polite">
          {String(rangeStart).padStart(2, "0")}
          {rangeEnd > rangeStart ? `–${String(rangeEnd).padStart(2, "0")}` : ""} /{" "}
          {String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
