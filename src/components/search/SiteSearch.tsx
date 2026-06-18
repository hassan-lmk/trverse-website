"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { searchSite, type SearchEntry } from "@/data/searchIndex";

type Variant = "desktop" | "mobile";

const categoryAccent: Record<string, string> = {
  Page: "#134f89",
  Solution: "#c45a3a",
  "Who We Serve": "#1f7a5a",
  "Case Study": "#8a5a1f",
  Insight: "#5a3a8a",
};

const SiteSearch = ({ variant = "desktop" }: { variant?: Variant }) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const results = React.useMemo<SearchEntry[]>(() => searchSite(query), [query]);

  React.useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 60);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  React.useEffect(() => {
    if (!open) {
      setQuery("");
      setActiveIndex(0);
    }
  }, [open]);

  // Global shortcut: Cmd/Ctrl + K opens search.
  React.useEffect(() => {
    const onShortcut = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", onShortcut);
    return () => document.removeEventListener("keydown", onShortcut);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      const target = results[activeIndex];
      if (target) go(target.href);
    }
  };

  const triggerStyle: React.CSSProperties =
    variant === "desktop"
      ? {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          borderRadius: 10,
          border: "1px solid rgba(255,255,255,0.18)",
          background: "rgba(255,255,255,0.04)",
          color: "rgba(255,255,255,0.85)",
          cursor: "pointer",
          transition: "background 0.2s, border-color 0.2s",
        }
      : {
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          width: "100%",
          padding: "12px 14px",
          borderRadius: 10,
          border: "1px solid rgba(255,255,255,0.18)",
          background: "rgba(255,255,255,0.04)",
          color: "rgba(255,255,255,0.85)",
          cursor: "pointer",
          fontFamily: "var(--font-body)",
          fontSize: 15,
        };

  return (
    <>
      <button
        type="button"
        aria-label="Search"
        onClick={() => setOpen(true)}
        style={triggerStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.1)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.04)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
        }}
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
          <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.8" />
          <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        {variant === "mobile" ? <span>Search</span> : null}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(4, 12, 26, 0.6)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "12vh 20px 20px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 640,
              background: "#fff",
              borderRadius: 18,
              boxShadow: "0 40px 120px rgba(4, 12, 26, 0.45)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "18px 22px",
                borderBottom: "1px solid rgba(10,30,61,0.08)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden style={{ color: "#8a97a8", flexShrink: 0 }}>
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.8" />
                <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Search pages, solutions, case studies, insights..."
                aria-label="Search the website"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontFamily: "var(--font-body)",
                  fontSize: 17,
                  color: "#0a1e3d",
                  background: "transparent",
                }}
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close search"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  border: "1px solid rgba(10,30,61,0.12)",
                  background: "#f7f9fc",
                  color: "#5a6a7e",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div style={{ maxHeight: "52vh", overflowY: "auto" }}>
              {query.trim() === "" ? (
                <p
                  style={{
                    margin: 0,
                    padding: "28px 22px",
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "#8a97a8",
                  }}
                >
                  Start typing to search across solutions, products, case studies, and insights.
                </p>
              ) : results.length === 0 ? (
                <p
                  style={{
                    margin: 0,
                    padding: "28px 22px",
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "#8a97a8",
                  }}
                >
                  No results for &ldquo;{query.trim()}&rdquo;. Try a different keyword.
                </p>
              ) : (
                <ul style={{ listStyle: "none", margin: 0, padding: 8 }}>
                  {results.map((result, index) => (
                    <li key={`${result.href}-${index}`}>
                      <button
                        type="button"
                        onClick={() => go(result.href)}
                        onMouseEnter={() => setActiveIndex(index)}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 14,
                          width: "100%",
                          textAlign: "left",
                          padding: "14px 14px",
                          borderRadius: 12,
                          border: "none",
                          cursor: "pointer",
                          background: index === activeIndex ? "rgba(19,79,137,0.06)" : "transparent",
                          transition: "background 0.15s ease",
                        }}
                      >
                        <span
                          style={{
                            flexShrink: 0,
                            marginTop: 2,
                            fontFamily: "var(--font-body)",
                            fontSize: 10,
                            fontWeight: 800,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: categoryAccent[result.category] ?? "#134f89",
                            background: "rgba(10,30,61,0.05)",
                            borderRadius: 6,
                            padding: "4px 8px",
                            minWidth: 84,
                            textAlign: "center",
                          }}
                        >
                          {result.category}
                        </span>
                        <span style={{ minWidth: 0 }}>
                          <span
                            style={{
                              display: "block",
                              fontFamily: "var(--font-display)",
                              fontSize: 16,
                              fontWeight: 600,
                              color: "#0a1e3d",
                              lineHeight: 1.3,
                            }}
                          >
                            {result.title}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: 13.5,
                              color: "#5a6a7e",
                              lineHeight: 1.5,
                              marginTop: 4,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            {result.description}
                          </span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 22px",
                borderTop: "1px solid rgba(10,30,61,0.08)",
                fontFamily: "var(--font-body)",
                fontSize: 12,
                color: "#8a97a8",
              }}
            >
              <span>Press Enter to open</span>
              <span>Esc to close</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SiteSearch;
