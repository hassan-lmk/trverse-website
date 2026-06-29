export type AudienceCapability = {
  capability: string;
  description: string;
};

export type AudienceProofHighlight = {
  value: string;
  valueTo?: string;
  label: string;
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
  capabilitiesHeading: string;
  capabilities: AudienceCapability[];
  proofEyebrow?: string;
  proofResultsHeading?: string;
  proofHighlights?: AudienceProofHighlight[];
  proofQuote?: string;
  proofAttribution?: string;
  proofMeta?: string;
  proofMetaChips?: string[];
  proofImage?: string;
  proofStats?: {
    before: { value: string; label: string };
    after: { value: string; label: string };
  };
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  ctaHeading: string;
  ctaBody: string;
};

export const audienceLandingsBySlug: Record<string, AudienceLandingDoc> = {
  "transport-authorities": {
    slug: "transport-authorities",
    label: "Transport Authorities",
    metaTitle: "Transport Authorities — TRVERSE",
    metaDescription:
      "TRVERSE gives transport authorities open-loop AFC, real-time GTFS-RT, AI anomaly detection, and a unified data layer on one platform — built for network-scale transit operations.",
    badge: "Who We Serve • Transport Authorities",
    heroHeadline: "Built for Network-Scale Transit Operations",
    heroSubheadline:
      "TRVERSE helps transport authorities connect automated fare collection, real-time operations, fleet control, compliance reporting, and AI analytics across large transit networks.",
    heroBackgroundImage: "/assets/BRT-Peshawar-.webp",
    challengeHeading: "Legacy Systems Are Slowing Transit Operations",
    challengeBody:
      "Fragmented fare systems, delayed reporting, and disconnected fleet data make it harder to improve service reliability, reduce revenue loss, and respond to passenger needs.",
    capabilitiesHeading: "What TRVERSE Delivers",
    capabilities: [
      {
        capability: "Open-Loop AFC",
        description:
          "Accept EMV, contactless cards, and mobile wallet payments without hardware lock-in.",
      },
      {
        capability: "Real-Time GTFS-RT",
        description:
          "Share accurate passenger information across apps, stops, and control systems.",
      },
      {
        capability: "AI Anomaly Detection",
        description: "Spot network faults and revenue issues before they grow.",
      },
      {
        capability: "Unified Data Layer",
        description: "Create one source of truth for reporting, funding, and operations.",
      },
      {
        capability: "Standards Compliance",
        description: "Support EMVCo, PCI-DSS, ISO 27001, and UITP-aligned systems.",
      },
    ],
    proofEyebrow: "Proof In Production",
    proofResultsHeading: "Real Results from Live Transit Operations",
    proofHighlights: [
      {
        value: "Over 80%",
        label: "Reduction in fare evasion",
      },
      {
        value: "220,000+",
        label: "Daily Riders Supported",
      },
      {
        value: "Real-World BRT Operations",
        label: "Proven under daily ridership demand",
      },
    ],
    proofQuote:
      "TRVERSE cut our fare evasion from over 22% to under 4% in the first operating year.",
    proofAttribution: "Operations leadership, TransPeshawar",
    proofMeta: "220,000+ daily riders  |  Peshawar BRT",
    proofMetaChips: ["220,000+ daily riders", "Peshawar BRT"],
    proofImage: "/assets/BRT-Peshawar-.webp",
    proofStats: {
      before: { value: "22%+", label: "Fare Evasion Before" },
      after: { value: "<4%", label: "After Year One" },
    },
    primaryCta: {
      label: "Request a briefing",
      href: "/get-a-demo",
    },
    secondaryCta: {
      label: "Get a demo",
      href: "/get-a-demo",
    },
    ctaHeading: "Ready To Modernise Your Network?",
    ctaBody:
      "Speak with our team about AFC, real-time operations, and unified reporting for transport authorities.",
  },
  "city-governments": {
    slug: "city-governments",
    label: "City Governments",
    metaTitle: "City Governments — TRVERSE",
    metaDescription:
      "TRVERSE helps city governments connect transit data, ridership insights, emissions reporting, equity metrics, and open APIs to support better planning and policy decisions.",
    badge: "Who We Serve • City Governments",
    heroHeadline: "Mobility Data for Smarter Urban Decisions",
    heroSubheadline:
      "TRVERSE helps city governments connect transit data, ridership insights, emissions reporting, equity metrics, and open APIs to support better planning and policy decisions.",
    heroBackgroundImage: "/assets/masar.webp",
    challengeHeading: "Transit Data is Trapped Inside Disconnected Systems",
    challengeBody:
      "City administration teams need clear data to plan routes, track emissions, improve access, and measure public value. TRVERSE brings that data together, so decisions are based on facts, not scattered reports.",
    capabilitiesHeading: "What TRVERSE Delivers",
    capabilities: [
      {
        capability: "Ridership Analytics",
        description:
          "Understand who travels, where they travel, and how demand changes by route, zone, and time.",
      },
      {
        capability: "Emissions Dashboards",
        description:
          "Track modal shift and report progress against net-zero goals with verified data.",
      },
      {
        capability: "Equity Reporting",
        description:
          "Measure access gaps and assess the impact of service changes before rollout.",
      },
      {
        capability: "Micro-Mobility Integration",
        description:
          "Connect first-mile and last-mile services with core transit systems.",
      },
      {
        capability: "Open APIs",
        description:
          "Share transit data with city portals, GIS tools, and planning systems.",
      },
    ],
    proofEyebrow: "Proof In Production",
    proofResultsHeading: "Results in Live Urban Mobility",
    proofHighlights: [
      {
        value: "First Electric BRT Network",
        label: "Powered at Masar Destination, Makkah",
      },
      {
        value: "Vision 2030 Aligned",
        label: "Supporting Saudi Arabia's mobility and sustainability goals",
      },
      {
        value: "City-Scale Data Layer",
        label: "Built to support reporting, planning, and service improvement",
      },
    ],
    proofQuote:
      "TRVERSE powered the first electric BRT network at Masar Destination, Makkah — directly supporting Saudi Arabia's Vision 2030 mobility and sustainability agenda.",
    proofAttribution: "Masar Destination, Makkah",
    proofMeta: "First Electric BRT Network  |  Vision 2030",
    proofMetaChips: ["First Electric BRT Network", "Vision 2030"],
    proofImage: "/assets/masar.webp",
    primaryCta: {
      label: "Speak to our mobility team",
      href: "/get-a-demo",
    },
    secondaryCta: {
      label: "Get a demo",
      href: "/get-a-demo",
    },
    ctaHeading: "Ready To Build Data-Led Urban Mobility?",
    ctaBody:
      "Speak with our urban mobility team about analytics, emissions reporting, and open data for your city.",
  },
  "private-operators": {
    slug: "private-operators",
    label: "Private Operators",
    metaTitle: "Private Operators — TRVERSE",
    metaDescription:
      "TRVERSE helps private transit operators reduce fare leakage, improve fleet uptime, cut dead mileage, and act faster with real-time operational data.",
    badge: "Who We Serve • Private Operators",
    heroHeadline: "Efficiency Gains You Can Measure",
    heroSubheadline:
      "TRVERSE helps private transit operators reduce fare leakage, improve fleet uptime, cut dead mileage, and act faster with real-time operational data.",
    heroBackgroundImage: "/assets/control-room-maangement.webp",
    challengeHeading: "Operational Gaps Quickly Become Revenue Loss",
    challengeBody:
      "Fare evasion, schedule drift, unplanned maintenance, and manual reporting all reduce margin at scale. TRVERSE helps operators detect issues earlier and improve daily performance.",
    capabilitiesHeading: "What TRVERSE Delivers",
    capabilities: [
      {
        capability: "AFC With Fraud Detection",
        description: "Reduce fare evasion and improve revenue recovery.",
      },
      {
        capability: "Predictive Fleet Maintenance",
        description: "Reduce unplanned downtime and extend vehicle life.",
      },
      {
        capability: "AI Scheduling Optimization",
        description: "Match capacity to demand and cut dead mileage.",
      },
      {
        capability: "Driver Performance Analytics",
        description: "Track driving patterns, fuel use, and incident rates.",
      },
      {
        capability: "Real-Time Operations Dashboard",
        description: "Improve incident response and lower intervention cost.",
      },
    ],
    proofEyebrow: "Proof In Production",
    proofResultsHeading: "Results in Live Transit Operations",
    proofHighlights: [
      {
        value: "22%+",
        valueTo: "<4%",
        label: "Fare evasion reduced in the first operating year",
      },
      {
        value: "Real-time Data",
        label: "Fleet and revenue intelligence for operations teams",
      },
      {
        value: "Peshawar BRT",
        label: "Proven in a live BRT environment",
      },
    ],
    primaryCta: {
      label: "Request an ROI assessment",
      href: "/get-a-demo",
    },
    secondaryCta: {
      label: "Get a demo",
      href: "/get-a-demo",
    },
    ctaHeading: "Ready To Capture Every Point Of Efficiency?",
    ctaBody:
      "Request an ROI assessment and see how TRVERSE improves revenue recovery, fleet uptime, and day-to-day operations performance.",
  },
};

export const audienceSegments = (
  [
    "transport-authorities",
    "city-governments",
    "private-operators",
  ] as const
).map((slug) => ({
  slug,
  label: audienceLandingsBySlug[slug].label,
  description: audienceLandingsBySlug[slug].heroSubheadline,
}));

export function getAudienceLanding(slug: string): AudienceLandingDoc | undefined {
  return audienceLandingsBySlug[slug];
}

export function getAudienceLandingSlugs(): string[] {
  return Object.keys(audienceLandingsBySlug);
}

export function audiencePageExists(slug: string): boolean {
  return slug in audienceLandingsBySlug;
}
