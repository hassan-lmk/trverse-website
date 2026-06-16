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
  capabilitiesHeading: string;
  capabilities: AudienceCapability[];
  proofEyebrow?: string;
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
    heroHeadline: "Built For The Complexity Of Network-Scale Transit Operations.",
    heroSubheadline:
      "Transport authorities face mounting pressure to modernise fare infrastructure, improve service reliability, and demonstrate value to government and passengers alike. TRVERSE gives you the tools to do all three — on a single platform.",
    heroBackgroundImage: "/assets/BRT-Peshawar-.webp",
    challengeHeading: "The Systems You Rely On Were Not Built For Today's Demands.",
    challengeBody:
      "Legacy AFC infrastructure limits payment choice. Siloed fleet and scheduling data means decisions are made on yesterday's information. Passenger expectations for real-time updates and seamless multimodal travel are rising faster than most networks can respond.",
    capabilitiesHeading: "What TRVERSE Delivers For Your Authority",
    capabilities: [
      {
        capability: "Open-Loop AFC",
        description:
          "Accept any EMV contactless card or mobile wallet — no proprietary hardware lock-in",
      },
      {
        capability: "Real-Time GTFS-RT",
        description:
          "Accurate passenger information across all channels, updated every 30 seconds",
      },
      {
        capability: "AI Anomaly Detection",
        description:
          "Network faults and revenue leakage identified before they escalate",
      },
      {
        capability: "Unified Data Layer",
        description:
          "One source of truth for reporting to government, funders, and the public",
      },
      {
        capability: "Standards Compliance",
        description: "EMVco, PCI-DSS, ISO 27001, UITP-aligned architecture",
      },
    ],
    proofEyebrow: "Proof In Production",
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
      label: "Request a briefing for transport authorities",
      href: "/contact",
    },
    secondaryCta: {
      label: "Read the Peshawar BRT case study",
      href: "/case-studies/peshawar-brt",
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
      "TRVERSE gives city governments ridership analytics, emissions dashboards, equity reporting, micro-mobility integration, and open APIs — mobility data infrastructure for smarter urban decisions.",
    badge: "Who We Serve • City Governments",
    heroHeadline: "Mobility Data That Drives Smarter Urban Decisions.",
    heroSubheadline:
      "City governments need transit networks that support broader urban goals — emissions reduction, equity, economic productivity, and livability. TRVERSE provides the data infrastructure to measure, report on, and continuously improve all of them.",
    heroBackgroundImage: "/assets/masar.webp",
    challengeHeading:
      "Transit Data Is Trapped Inside Operational Systems That Were Never Designed To Serve City Strategy.",
    challengeBody:
      "Most transit networks generate vast data but share almost none of it with city planners, climate teams, or equity analysts. The result: transport policy is made with incomplete information, and the strategic value of transit investment goes unmeasured.",
    capabilitiesHeading: "What It Delivers For City Government",
    capabilities: [
      {
        capability: "Ridership Analytics",
        description:
          "Understand who travels, where, when, and how — by route, zone, or demographic",
      },
      {
        capability: "Emissions Dashboards",
        description:
          "Track modal shift and report against net-zero commitments with verified data",
      },
      {
        capability: "Equity Reporting",
        description:
          "Identify underserved areas and model the impact of service changes before deployment",
      },
      {
        capability: "Micro-Mobility Integration",
        description:
          "Unify first/last mile data with core transit for a complete mobility picture",
      },
      {
        capability: "Open APIs",
        description:
          "Feed transit data directly into city digital twin, GIS, and planning platforms",
      },
    ],
    proofEyebrow: "Proof In Production",
    proofQuote:
      "TRVERSE powered the first electric BRT network at Masar Destination, Makkah — directly supporting Saudi Arabia's Vision 2030 mobility and sustainability agenda.",
    proofAttribution: "Masar Destination, Makkah",
    proofMeta: "First Electric BRT Network  |  Vision 2030",
    proofMetaChips: ["First Electric BRT Network", "Vision 2030"],
    proofImage: "/assets/masar.webp",
    primaryCta: {
      label: "Speak to our urban mobility team",
      href: "/contact",
    },
    secondaryCta: {
      label: "Download the Masar Makkah case study",
      href: "/case-studies/masar-makkah-electric-brt",
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
      "TRVERSE helps private transit operators maximise revenue recovery, minimise fleet downtime, and give operations teams real-time intelligence with AFC fraud detection, predictive maintenance, and AI scheduling.",
    badge: "Who We Serve • Private Operators",
    heroHeadline: "Every Percentage Point Of Efficiency, Captured.",
    heroSubheadline:
      "Private transit operators compete on margin and operational efficiency. TRVERSE is built to maximise revenue recovery, minimise fleet downtime, and give your operations team the real-time intelligence to make faster decisions — every day.",
    heroBackgroundImage: "/assets/control-room-maangement.webp",
    challengeHeading:
      "Operational Inefficiency Is A Revenue Problem That Compounds Over Millions Of Journeys.",
    challengeBody:
      "Fare evasion, schedule deviation, unplanned maintenance, and manual reporting each erode margin at scale. Most operators manage these problems reactively — after the loss has already occurred.",
    capabilitiesHeading: "Commercial Impact",
    capabilities: [
      {
        capability: "AFC With Fraud Detection",
        description: "Reduce fare evasion; increase revenue recovery rate",
      },
      {
        capability: "Predictive Fleet Maintenance",
        description: "Reduce unplanned downtime; extend vehicle life",
      },
      {
        capability: "AI Scheduling Optimisation",
        description: "Match capacity to demand; reduce dead mileage",
      },
      {
        capability: "Driver Performance Analytics",
        description: "Reduce fuel consumption and incident rates",
      },
      {
        capability: "Real-Time Operations Dashboard",
        description: "Faster incident response; lower cost per intervention",
      },
    ],
    primaryCta: {
      label: "Request an ROI assessment",
      href: "/contact",
    },
    secondaryCta: {
      label: "Download the operations efficiency brief",
      href: "/contact",
    },
    ctaHeading: "Ready To Capture Every Point Of Efficiency?",
    ctaBody:
      "Request an ROI assessment and see how TRVERSE improves revenue recovery, fleet uptime, and day-to-day operations performance.",
  },
};

export const audienceSegments = [
  {
    slug: "transport-authorities",
    label: "Transport Authorities",
  },
  {
    slug: "city-governments",
    label: "City Governments",
  },
  {
    slug: "private-operators",
    label: "Private Operators",
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
