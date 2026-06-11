"use client";

import React from "react";

const solutionOptions = [
  "Automated Fare Collection",
  "Intelligent Transport Systems",
  "Advanced Scheduling System",
  "Fleet Management",
  "AI Monitoring and Control",
  "Micro-Mobility Integration",
  "Open-Loop Payments",
  "Custom Mobility Platform",
];

type Props = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  compact?: boolean;
};

const ContactForm = ({
  title = "Contact form",
  description = "Tell us about your goals and the solution you're interested in.",
  buttonLabel = "Send inquiry",
  compact = false,
}: Props) => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    solution: "",
    message: "",
  });
  const [focused, setFocused] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState(false);

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 14,
        padding: compact ? 32 : 36,
        position: "relative",
        zIndex: 2,
        border: compact ? "none" : "1px solid rgba(19,79,137,0.08)",
        boxShadow: compact ? "none" : "0 18px 60px rgba(10, 30, 61, 0.08)",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 28,
          fontWeight: 650,
          color: "#0a1e3d",
          margin: "0 0 12px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15,
          color: "#5a6a7e",
          lineHeight: 1.7,
          margin: "0 0 24px",
        }}
      >
        {description}
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <input
            placeholder="Full name"
            value={form.name}
            required
            style={inputStyle("name")}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
          />
          <input
            type="email"
            placeholder="Email address"
            value={form.email}
            required
            style={inputStyle("email")}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <input
            placeholder="Organization"
            value={form.organization}
            style={inputStyle("organization")}
            onChange={(e) => setForm({ ...form, organization: e.target.value })}
            onFocus={() => setFocused("organization")}
            onBlur={() => setFocused(null)}
          />
          <input
            placeholder="Phone number"
            value={form.phone}
            style={inputStyle("phone")}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            onFocus={() => setFocused("phone")}
            onBlur={() => setFocused(null)}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <select
            value={form.solution}
            required
            style={inputStyle("solution")}
            onChange={(e) => setForm({ ...form, solution: e.target.value })}
            onFocus={() => setFocused("solution")}
            onBlur={() => setFocused(null)}
          >
            <option value="">Select the solution you are interested in</option>
            {solutionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <textarea
          placeholder="Tell us about your project or requirements..."
          rows={compact ? 5 : 6}
          required
          value={form.message}
          style={{ ...inputStyle("message"), resize: "vertical", marginBottom: 20 }}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
        />

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
          {buttonLabel}
        </button>

        {submitted ? (
          <p
            style={{
              margin: "14px 0 0",
              fontFamily: "var(--font-body)",
              fontSize: 14,
              color: "#134f89",
              lineHeight: 1.6,
            }}
          >
            Thanks. Your inquiry has been captured for the contact workflow.
          </p>
        ) : null}
      </form>
    </div>
  );
};

export default ContactForm;
