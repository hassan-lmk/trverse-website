"use client";

import React from "react";
import Link from "next/link";
import { countries } from "@/data/countries";

const organisationTypes = [
  "Ticketing Technology",
  "Back-Office System",
  "Financial Institution",
  "Mobility App Developer",
  "System Integrator",
  "Consultant",
  "Other",
];

const cardStyle: React.CSSProperties = {
  background: "#fff",
  borderRadius: 20,
  padding: "40px 36px",
  border: "1px solid rgba(19, 79, 137, 0.08)",
  boxShadow: "0 18px 60px rgba(10, 30, 61, 0.08)",
};

const PartnersFormSection = () => {
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    workEmail: "",
    companyName: "",
    organisationType: "",
    country: "",
    consent: false,
  });
  const [focused, setFocused] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/partner-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to submit your partnership inquiry.");
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Unable to submit your partnership inquiry.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      jobTitle: "",
      workEmail: "",
      companyName: "",
      organisationType: "",
      country: "",
      consent: false,
    });
    setSubmitted(false);
    setSubmitError(null);
  };

  return (
    <section
      id="partner-form"
      aria-labelledby="partner-form-heading"
      className="partners-form-section"
      style={{ background: "#f7f9fc", padding: "100px 48px 110px", scrollMarginTop: 120 }}
    >
      <div
        className="partners-form-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        <div>
          {submitted ? (
            <>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  margin: "0 0 16px",
                }}
              >
                Inquiry received
              </p>
              <h2
                id="partner-form-heading"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(32px, 3.5vw, 44px)",
                  fontWeight: 600,
                  color: "#0a1e3d",
                  margin: "0 0 24px",
                  lineHeight: 1.15,
                }}
              >
                Our partnerships team will be in touch soon.
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 17,
                  color: "#5a6a7e",
                  lineHeight: 1.8,
                  margin: "0 0 32px",
                  maxWidth: 480,
                }}
              >
                We review every partnership inquiry to understand how your organisation fits
                within the TRVERSE ecosystem and where collaboration can create the most value.
              </p>
              <ol
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "grid",
                  gap: 20,
                  maxWidth: 480,
                }}
              >
                {[
                  "A partnerships specialist reviews your submission and organisation profile.",
                  "We reach out within two business days to discuss fit, scope, and next steps.",
                  "If there is a strong match, we schedule a discovery call to explore collaboration.",
                ].map((step, index) => (
                  <li
                    key={step}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "32px 1fr",
                      gap: 14,
                      alignItems: "start",
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "rgba(19, 79, 137, 0.08)",
                        color: "var(--accent)",
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {index + 1}
                    </span>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 15,
                        color: "#5a6a7e",
                        lineHeight: 1.7,
                        margin: "4px 0 0",
                      }}
                    >
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </>
          ) : (
            <>
              <h2
                id="partner-form-heading"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(32px, 3.5vw, 44px)",
                  fontWeight: 600,
                  color: "#0a1e3d",
                  margin: "0 0 24px",
                  lineHeight: 1.15,
                }}
              >
                Ready to partner with us?
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 17,
                  color: "#5a6a7e",
                  lineHeight: 1.8,
                  margin: 0,
                  maxWidth: 480,
                }}
              >
                Fill in the form and start your journey. Whether you&apos;re looking to gain more
                partners, collaborate on an exciting project, or leverage our expertise for a specific
                innovation, we&apos;re here to help.
              </p>
            </>
          )}
        </div>

        <div style={cardStyle}>
          {submitted ? (
            <div role="status" aria-live="polite">
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(34, 160, 107, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  style={{ display: "block" }}
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#22a06b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 2.5vw, 30px)",
                  fontWeight: 650,
                  color: "#0a1e3d",
                  margin: "0 0 12px",
                  lineHeight: 1.2,
                }}
              >
                Thank you{form.firstName.trim() ? `, ${form.firstName.trim()}` : ""} — your
                partnership inquiry has been received.
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  color: "#5a6a7e",
                  lineHeight: 1.8,
                  margin: "0 0 24px",
                }}
              >
                Your inquiry is with our partnerships team. We will follow up at{" "}
                <span style={{ color: "#0a1e3d", fontWeight: 600 }}>{form.workEmail.trim()}</span>{" "}
                within two business days.
              </p>

              <div
                style={{
                  background: "#f7f9fc",
                  borderRadius: 12,
                  padding: "18px 20px",
                  marginBottom: 28,
                  border: "1px solid rgba(19, 79, 137, 0.06)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#8a97a8",
                    margin: "0 0 10px",
                  }}
                >
                  Submission summary
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    color: "#0a1e3d",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  <strong>{form.companyName.trim()}</strong>
                  <br />
                  {form.organisationType}
                  {form.country.trim() ? ` · ${form.country.trim()}` : ""}
                </p>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "#5a6a7e",
                  lineHeight: 1.75,
                  margin: "0 0 28px",
                }}
              >
                While you wait, explore how TRVERSE partners integrate with our mobility platform
                and the deployments we support worldwide.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
                <Link
                  href="/solutions"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#fff",
                    textDecoration: "none",
                    background: "var(--accent)",
                    padding: "12px 22px",
                    borderRadius: 999,
                  }}
                >
                  View solutions
                </Link>
                <Link
                  href="/insights#all-case-studies"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--accent)",
                    textDecoration: "none",
                    padding: "12px 22px",
                    borderRadius: 999,
                    border: "1.5px solid rgba(19, 79, 137, 0.18)",
                  }}
                >
                  Browse case studies
                </Link>
              </div>

              <button
                type="button"
                onClick={resetForm}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#5a6a7e",
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                }}
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
          <form onSubmit={handleSubmit} noValidate={false}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 16,
              }}
            >
              <input
                id="partner-first-name"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                aria-label="First name"
                value={form.firstName}
                placeholder="First name*"
                style={inputStyle("firstName")}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                onFocus={() => setFocused("firstName")}
                onBlur={() => setFocused(null)}
              />
              <input
                id="partner-last-name"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                aria-label="Last name"
                value={form.lastName}
                placeholder="Last name*"
                style={inputStyle("lastName")}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                onFocus={() => setFocused("lastName")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <input
                id="partner-job-title"
                name="jobTitle"
                type="text"
                autoComplete="organization-title"
                required
                aria-label="Job title"
                value={form.jobTitle}
                placeholder="Job title*"
                style={inputStyle("jobTitle")}
                onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
                onFocus={() => setFocused("jobTitle")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <input
                id="partner-work-email"
                name="workEmail"
                type="email"
                autoComplete="work email"
                required
                aria-label="Work email"
                value={form.workEmail}
                placeholder="Work email*"
                style={inputStyle("workEmail")}
                onChange={(e) => setForm({ ...form, workEmail: e.target.value })}
                onFocus={() => setFocused("workEmail")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <input
                id="partner-company-name"
                name="companyName"
                type="text"
                autoComplete="organization"
                required
                aria-label="Company name"
                value={form.companyName}
                placeholder="Company name*"
                style={inputStyle("companyName")}
                onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                onFocus={() => setFocused("companyName")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <select
                id="partner-organisation-type"
                name="organisationType"
                required
                aria-label="What type of organisation do you represent?"
                value={form.organisationType}
                style={{
                  ...inputStyle("organisationType"),
                  color: form.organisationType ? "#0a1e3d" : "#8a97a8",
                }}
                onChange={(e) => setForm({ ...form, organisationType: e.target.value })}
                onFocus={() => setFocused("organisationType")}
                onBlur={() => setFocused(null)}
              >
                <option value="">What type of organisation do you represent?*</option>
                {organisationTypes.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: 20 }}>
              <select
                id="partner-country"
                name="country"
                required
                aria-label="Country"
                value={form.country}
                style={{
                  ...inputStyle("country"),
                  color: form.country ? "#0a1e3d" : "#8a97a8",
                }}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
                onFocus={() => setFocused("country")}
                onBlur={() => setFocused(null)}
              >
                <option value="">Country*</option>
                {countries.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                color: "#5a6a7e",
                lineHeight: 1.65,
                margin: "0 0 16px",
              }}
            >
              TRVERSE is committed to your privacy. We use the information you provide to respond to
              your partnership inquiry and to share relevant updates about our mobility platform and
              solutions.
            </p>

            <label
              htmlFor="partner-consent"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "#0a1e3d",
                lineHeight: 1.5,
                marginBottom: 8,
                cursor: "pointer",
              }}
            >
              <input
                id="partner-consent"
                name="consent"
                type="checkbox"
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                style={{ marginTop: 3, accentColor: "var(--accent)" }}
              />
              Agree to receive communication from TRVERSE
            </label>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                color: "#8a97a8",
                margin: "0 0 28px",
              }}
            >
              You can unsubscribe from these communications at any time.
            </p>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="submit"
                disabled={submitting}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  fontWeight: 700,
                  padding: "14px 40px",
                  background: "var(--accent)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 999,
                  cursor: submitting ? "not-allowed" : "pointer",
                  opacity: submitting ? 0.7 : 1,
                }}
              >
                {submitting ? "Submitting…" : "Submit"}
              </button>
            </div>

            {submitError ? (
              <p
                role="alert"
                style={{
                  margin: "16px 0 0",
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "#b42318",
                  lineHeight: 1.6,
                  textAlign: "right",
                }}
              >
                {submitError}
              </p>
            ) : null}
          </form>
          )}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (max-width: 1024px) {
          .partners-form-section {
            padding-left: 28px !important;
            padding-right: 28px !important;
          }
          .partners-form-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 700px) {
          .partners-form-section {
            padding: 72px 20px !important;
          }
        }
      `,
        }}
      />
    </section>
  );
};

export default PartnersFormSection;
