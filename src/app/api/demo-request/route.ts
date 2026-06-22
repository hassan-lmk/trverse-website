import { NextResponse } from "next/server";
import { createDemoRequestRecord, type DemoRequestPayload } from "@/lib/airtable/demoRequest";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function parsePayload(body: unknown): DemoRequestPayload | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;

  if (
    !isNonEmptyString(data.firstName) ||
    !isNonEmptyString(data.lastName) ||
    !isNonEmptyString(data.organization) ||
    !isNonEmptyString(data.country) ||
    !isStringArray(data.networkTypes) ||
    data.networkTypes.length === 0
  ) {
    return null;
  }

  return {
    firstName: data.firstName,
    lastName: data.lastName,
    organization: data.organization,
    role: isNonEmptyString(data.role) ? data.role : "",
    country: data.country,
    networkTypes: data.networkTypes,
    solutions: isStringArray(data.solutions) ? data.solutions : [],
    ridership: isNonEmptyString(data.ridership) ? data.ridership : "",
    timeline: isNonEmptyString(data.timeline) ? data.timeline : "",
    message: isNonEmptyString(data.message) ? data.message : "",
  };
}

export async function POST(request: Request) {
  try {
    const payload = parsePayload(await request.json());

    if (!payload) {
      return NextResponse.json({ error: "Invalid demo request payload." }, { status: 400 });
    }

    const recordId = await createDemoRequestRecord(payload);

    return NextResponse.json({ ok: true, recordId });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to submit demo request.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
