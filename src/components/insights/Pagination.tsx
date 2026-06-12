"use client";

import React from "react";

export const ITEMS_PER_PAGE = 6;

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  label: string;
};

const Pagination = ({ currentPage, totalPages, onPageChange, label }: Props) => {
  if (totalPages <= 1) return null;

  const buttonBase: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: 14,
    fontWeight: 600,
    minWidth: 40,
    height: 40,
    padding: "0 14px",
    borderRadius: 999,
    border: "1px solid rgba(19, 79, 137, 0.12)",
    background: "#fff",
    color: "#0a1e3d",
    cursor: "pointer",
    transition: "border-color 0.2s, color 0.2s, background 0.2s",
  };

  return (
    <nav
      aria-label={label}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 8,
        marginTop: 48,
      }}
    >
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        style={{
          ...buttonBase,
          opacity: currentPage === 1 ? 0.45 : 1,
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
        }}
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => {
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            type="button"
            aria-current={isActive ? "page" : undefined}
            onClick={() => onPageChange(page)}
            style={{
              ...buttonBase,
              background: isActive ? "var(--accent)" : "#fff",
              borderColor: isActive ? "var(--accent)" : "rgba(19, 79, 137, 0.12)",
              color: isActive ? "#fff" : "#0a1e3d",
            }}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        style={{
          ...buttonBase,
          opacity: currentPage === totalPages ? 0.45 : 1,
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
        }}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
