export type AudienceCapability = {
  capability: string;
  description: string;
};

export type AudienceLandingDoc = {
  slug: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroBackgroundImage: string;
  challengeHeading: string;
  challengeBody: string;
  capabilities: AudienceCapability[];
  proofEyebrow?: string;
  proofQuote: string;
  proofAttribution: string;
  proofMeta: string;
  proofMetaChips?: string[];
  proofImage?: string;
  proofStats?: {
    before: { value: string; label: string };
    after: { value: string; label: string };
  };
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export const audienceLandingsBySlug: Record<string, AudienceLandingDoc> = {
  "transport-authorities": {
    slug: "transport-authorities",
    label: "Transport authorities",
    metaTitle: "Transport Authorities — TRVERSE",
    metaDescription:
      "TRVERSE gives transport authorities open-loop AFC, real-time GTFS-RT, AI anomaly detection, and a unified data layer on one platform — built for network-scale transit operations.",
    badge: "Who we serve • Transport authorities",
    heroHeadline: "Built for the complexity of network-scale transit operations.",
    heroSubheadline:
      "Transport authorities face mounting pressure to modernise fare infrastructure, improve service reliability, and demonstrate value to government and passengers alike. TRVERSE gives you the tools to do all three — on a single platform.",
    heroBackgroundImage: "/assets/BRT-Peshawar-.webp",
    challengeHeading: "The systems you rely on were not built for today's demands.",
    challengeBody:
      "Legacy AFC infrastructure limits payment choice. Siloed fleet and scheduling data means decisions are made on yesterday's information. Passenger expectations for real-time updates and seamless multimodal travel are rising faster than most networks can respond.",
    capabilities: [
      {
        capability: "Open-loop AFC",
        description:
          "Accept any EMV contactless card or mobile wallet — no proprietary hardware lock-in",
      },
      {
        capability: "Real-time GTFS-RT",
        description:
          "Accurate passenger information across all channels, updated every 30 seconds",
      },
      {
        capability: "AI anomaly detection",
        description:
          "Network faults and revenue leakage identified before they escalate",
      },
      {
        capability: "Unified data layer",
        description:
          "One source of truth for reporting to government, funders, and the public",
      },
      {
        capability: "Standards compliance",
        description: "EMVco, PCI-DSS, ISO 27001, UITP-aligned architecture",
      },
    ],
    proofEyebrow: "Proof in production",
    proofQuote:
      "TRVERSE cut our fare evasion from over 22% to under 4% in the first operating year.",
    proofAttribution: "Operations leadership, TransPeshawar",
    proofMeta: "220,000+ daily riders  |  Peshawar BRT",
    proofMetaChips: ["220,000+ daily riders", "Peshawar BRT"],
    proofImage: "/assets/BRT-Peshawar-.webp",
    proofStats: {
      before: { value: "22%+", label: "Fare evasion before" },
      after: { value: "<4%", label: "After year one" },
    },
    primaryCta: {
      label: "Request a briefing for transport authorities",
      href: "/contact",
    },
    secondaryCta: {
      label: "Read the Peshawar BRT case study",
      href: "/case-studies/peshawar-brt",
    },
  },
};

export const audienceSegments = [
  {
    slug: "transport-authorities",
    label: "Transport authorities",
  },
  {
    slug: "city-governments",
    label: "City governments",
  },
  {
    slug: "private-operators",
    label: "Private operators",
  },
] as const;

export function getAudienceLanding(slug: string): AudienceLandingDoc | undefined {
  return audienceLandingsBySlug[slug];
}

export function getAudienceLandingSlugs(): string[] {
  return Object.keys(audienceLandingsBySlug);
}

export function audiencePageExists(slug: string): boolean {
  return slug in audienceLandingsBySlug;
}
