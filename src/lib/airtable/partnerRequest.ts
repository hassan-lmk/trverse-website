export type PartnerRequestPayload = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  workEmail: string;
  companyName: string;
  organisationType: string;
  country: string;
  consent: boolean;
};

type AirtableCreateResponse = {
  records?: { id: string }[];
  error?: { type: string; message: string };
};

function getAirtableConfig() {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_PARTNER_TABLE_ID;

  if (!apiKey || !baseId || !tableId) {
    throw new Error("Airtable is not configured.");
  }

  return { apiKey, baseId, tableId };
}

export async function createPartnerRequestRecord(payload: PartnerRequestPayload) {
  const { apiKey, baseId, tableId } = getAirtableConfig();
  const fullName = `${payload.firstName.trim()} ${payload.lastName.trim()}`.trim();

  const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            Name: fullName,
            "First Name": payload.firstName.trim(),
            "Last Name": payload.lastName.trim(),
            "Job Title": payload.jobTitle.trim(),
            "Work Email": payload.workEmail.trim(),
            "Company Name": payload.companyName.trim(),
            "Organisation Type": payload.organisationType.trim(),
            Country: payload.country.trim(),
            "Marketing Consent": payload.consent,
            Source: "TRVERSE Website Partner Form",
          },
        },
      ],
    }),
  });

  const data = (await response.json()) as AirtableCreateResponse;

  if (!response.ok) {
    throw new Error(data.error?.message ?? "Failed to save partner request.");
  }

  return data.records?.[0]?.id;
}
