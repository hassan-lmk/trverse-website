export type DemoRequestPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  role: string;
  country: string;
  networkTypes: string[];
  solutions: string[];
  ridership: string;
  timeline: string;
  message: string;
};

type AirtableCreateResponse = {
  records?: { id: string }[];
  error?: { type: string; message: string };
};

function getAirtableConfig() {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_DEMO_TABLE_ID;

  if (!apiKey || !baseId || !tableId) {
    throw new Error("Airtable is not configured.");
  }

  return { apiKey, baseId, tableId };
}

export async function createDemoRequestRecord(payload: DemoRequestPayload) {
  const { apiKey, baseId, tableId } = getAirtableConfig();
  const fullName = `${payload.firstName.trim()} ${payload.lastName.trim()}`.trim();

  const fields: Record<string, string | boolean> = {
            Name: fullName,
            "First Name": payload.firstName.trim(),
            "Last Name": payload.lastName.trim(),
            Email: payload.email.trim(),
            Organization: payload.organization.trim(),
            Role: payload.role.trim(),
            Country: payload.country.trim(),
            "Network Types": payload.networkTypes.join(", "),
            Solutions: payload.solutions.join(", "),
            Ridership: payload.ridership.trim(),
            Timeline: payload.timeline.trim(),
            Message: payload.message.trim(),
            Source: "TRVERSE Website Demo Form",
          };

  if (payload.phone.trim()) {
    fields["Phone Number"] = payload.phone.trim();
  }

  const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields,
        },
      ],
    }),
  });

  const data = (await response.json()) as AirtableCreateResponse;

  if (!response.ok) {
    throw new Error(data.error?.message ?? "Failed to save demo request.");
  }

  return data.records?.[0]?.id;
}
