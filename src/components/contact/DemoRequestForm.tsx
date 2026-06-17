"use client";

import React from "react";
import Link from "next/link";
import { countries } from "@/data/countries";

const solutionOptions = [
  "Automated Fare Collection",
  "Intelligent Transport Systems",
  "Advanced Scheduling",
  "Fleet Management",
  "AI Monitoring and Control",
  "Micro-Mobility Integration",
];

const networkTypeOptions = ["BRT", "Metro", "Light Rail", "Mixed", "Other"];

const timelineOptions = ["Exploring", "6 months", "12 months", "Active RFP"];

const srOnlyStyle: React.CSSProperties = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
};

const DemoRequestForm = () => {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    organization: "",
    role: "",
    country: "",
    networkTypes: [] as string[],
    solutions: [] as string[],
    ridership: "",
    timeline: "",
    message: "",
  });
  const [focused, setFocused] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState(false);
  const [networkTypeError, setNetworkTypeError] = React.useState(false);

  const inputStyle = (field: string) => ({
    fontFamily: "var(--font-body)",
    fontSize: 15,
    padding: "14px 18px",
    border: `1.5px solid ${focused === field ? "#134f89" : "#e0e6ee"}`,
    borderRadius: 8,
    outline: "none",
    width: "100%",
    boxSizing: "border-box" as const,
    background: "#fff",
    color: "#0a1e3d",
    transition: "border-color 0.2s",
  });

  const selectStyle = (field: string, hasValue: boolean) => ({
    ...inputStyle(field),
    color: hasValue ? "#0a1e3d" : "#8a97a8",
  });

  const toggleOption = (field: "solutions" | "networkTypes", option: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(option)
        ? prev[field].filter((s) => s !== option)
        : [...prev[field], option],
    }));
    if (field === "networkTypes") setNetworkTypeError(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.networkTypes.length === 0) {
      setNetworkTypeError(true);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: 36,
          border: "1px solid rgba(19,79,137,0.08)",
          boxShadow: "0 18px 60px rgba(10, 30, 61, 0.08)",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 28,
            fontWeight: 650,
            color: "#0a1e3d",
            margin: "0 0 16px",
          }}
        >
          Thank you — your demo request has been received.
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            color: "#5a6a7e",
            lineHeight: 1.8,
            margin: "0 0 12px",
          }}
        >
          A TRVERSE solutions engineer will contact you within one business day to confirm your session and gather any additional context.
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            color: "#5a6a7e",
            lineHeight: 1.8,
            margin: "0 0 24px",
          }}
        >
          In the meantime, you may find our solution briefs and case studies useful.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <Link
            href="/solutions"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              fontWeight: 600,
              color: "var(--accent)",
              textDecoration: "none",
            }}
          >
            View solutions →
          </Link>
          <Link
            href="/insights#all-case-studies"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              fontWeight: 600,
              color: "var(--accent)",
              textDecoration: "none",
            }}
          >
            Browse case studies →
          </Link>
        </div>
      </div>
    );
  }

  const checkboxLabelStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontFamily: "var(--font-body)",
    fontSize: 14,
    color: "#3a4a5e",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 14,
        padding: 36,
        border: "1px solid rgba(19,79,137,0.08)",
        boxShadow: "0 18px 60px rgba(10, 30, 61, 0.08)",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <form onSubmit={handleSubmit}>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @media (max-width: 520px) {
            .demo-form-solutions-grid { grid-template-columns: 1fr !important; }
            .demo-form-name-grid { grid-template-columns: 1fr !important; }
          }
        `,
          }}
        />
        <div className="demo-form-name-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <input
            id="demo-first-name"
            placeholder="First name"
            aria-label="First name"
            value={form.firstName}
            required
            style={inputStyle("firstName")}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            onFocus={() => setFocused("firstName")}
            onBlur={() => setFocused(null)}
          />
          <input
            id="demo-last-name"
            placeholder="Last name"
            aria-label="Last name"
            value={form.lastName}
            required
            style={inputStyle("lastName")}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            onFocus={() => setFocused("lastName")}
            onBlur={() => setFocused(null)}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <input
            id="demo-organization"
            placeholder="Organization name"
            aria-label="Organization name"
            value={form.organization}
            required
            style={inputStyle("organization")}
            onChange={(e) => setForm({ ...form, organization: e.target.value })}
            onFocus={() => setFocused("organization")}
            onBlur={() => setFocused(null)}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <input
            id="demo-role"
            placeholder="Your role (e.g. Director of Operations, IT Manager)"
            aria-label="Your role"
            value={form.role}
            style={inputStyle("role")}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            onFocus={() => setFocused("role")}
            onBlur={() => setFocused(null)}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <select
            id="demo-country"
            aria-label="Country"
            value={form.country}
            required
            style={selectStyle("country", Boolean(form.country))}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
            onFocus={() => setFocused("country")}
            onBlur={() => setFocused(null)}
          >
            <option value="">Country</option>
            {countries.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <fieldset
          style={{
            border: networkTypeError ? "1.5px solid #c44a3a" : "none",
            borderRadius: networkTypeError ? 8 : 0,
            margin: "0 0 16px",
            padding: networkTypeError ? 12 : 0,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 600,
              color: "#0a1e3d",
              marginBottom: 12,
              display: "block",
            }}
          >
            Network type
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 20px" }}>
            {networkTypeOptions.map((option) => (
              <label key={option} style={checkboxLabelStyle}>
                <input
                  type="checkbox"
                  checked={form.networkTypes.includes(option)}
                  onChange={() => toggleOption("networkTypes", option)}
                  style={{ width: 16, height: 16, accentColor: "var(--accent)" }}
                />
                {option}
              </label>
            ))}
          </div>
          {networkTypeError ? (
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                color: "#c44a3a",
                margin: "10px 0 0",
              }}
            >
              Select at least one network type.
            </p>
          ) : null}
        </fieldset>

        <fieldset style={{ border: "none", margin: "0 0 16px", padding: 0 }}>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 600,
              color: "#0a1e3d",
              marginBottom: 12,
              display: "block",
            }}
          >
            Primary solution of interest
          </div>
          <div className="demo-form-solutions-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {solutionOptions.map((option) => (
              <label key={option} style={checkboxLabelStyle}>
                <input
                  type="checkbox"
                  checked={form.solutions.includes(option)}
                  onChange={() => toggleOption("solutions", option)}
                  style={{ width: 16, height: 16, accentColor: "var(--accent)", flexShrink: 0 }}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div style={{ marginBottom: 16 }}>
          <input
            id="demo-ridership"
            placeholder="Approximate daily ridership"
            aria-label="Approximate daily ridership"
            value={form.ridership}
            style={inputStyle("ridership")}
            onChange={(e) => setForm({ ...form, ridership: e.target.value })}
            onFocus={() => setFocused("ridership")}
            onBlur={() => setFocused(null)}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <select
            id="demo-timeline"
            aria-label="Procurement timeline"
            value={form.timeline}
            style={selectStyle("timeline", Boolean(form.timeline))}
            onChange={(e) => setForm({ ...form, timeline: e.target.value })}
            onFocus={() => setFocused("timeline")}
            onBlur={() => setFocused(null)}
          >
            <option value="">Procurement timeline (Exploring / 6 months / 12 months / Active RFP)</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: 20 }}>
          <textarea
            id="demo-message"
            placeholder="Anything specific you'd like us to prepare for your demo?"
            aria-label="Demo preparation notes"
            rows={5}
            value={form.message}
            style={{ ...inputStyle("message"), resize: "vertical" }}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
          />
        </div>

        <button
          type="submit"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            fontWeight: 700,
            padding: "15px 36px",
            background: "var(--accent)",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
            width: "100%",
          }}
        >
          Request my demo
        </button>
      </form>
    </div>
  );
};

export default DemoRequestForm;
