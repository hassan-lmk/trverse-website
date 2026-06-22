import { NextResponse } from "next/server";
import { createPartnerRequestRecord, type PartnerRequestPayload } from "@/lib/airtable/partnerRequest";

const organisationTypes = new Set([
  "Ticketing Technology",
  "Back-Office System",
  "Financial Institution",
  "Mobility App Developer",
  "System Integrator",
  "Consultant",
  "Other",
]);

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parsePayload(body: unknown): PartnerRequestPayload | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;

  if (
    !isNonEmptyString(data.firstName) ||
    !isNonEmptyString(data.lastName) ||
    !isNonEmptyString(data.jobTitle) ||
    !isNonEmptyString(data.workEmail) ||
    !isValidEmail(data.workEmail.trim()) ||
    !isNonEmptyString(data.companyName) ||
    !isNonEmptyString(data.organisationType) ||
    !organisationTypes.has(data.organisationType) ||
    !isNonEmptyString(data.country) ||
    typeof data.consent !== "boolean"
  ) {
    return null;
  }

  return {
    firstName: data.firstName,
    lastName: data.lastName,
    jobTitle: data.jobTitle,
    workEmail: data.workEmail,
    companyName: data.companyName,
    organisationType: data.organisationType,
    country: data.country,
    consent: data.consent,
  };
}

export async function POST(request: Request) {
  try {
    const payload = parsePayload(await request.json());

    if (!payload) {
      return NextResponse.json({ error: "Invalid partner request payload." }, { status: 400 });
    }

    const recordId = await createPartnerRequestRecord(payload);

    return NextResponse.json({ ok: true, recordId });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to submit partner request.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
