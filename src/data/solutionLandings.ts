export type SolutionFeatureBlock = {
  title: string;
  description: string;
};

export type SolutionSpecification = {
  label: string;
  detail: string;
};

export type SolutionLandingDoc = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  /** Short label for breadcrumb and hero badge */
  badge: string;
  eyebrowCategory: string;
  productLine: string;
  heroTagline: string;
  heroIntro: string;
  /** Full-bleed background on `/solutions/[slug]` hero */
  heroBackgroundImage: string;
  /** Card banners and in-page imagery */
  heroImage: string;
  /** Shown beside key highlights (defaults to site placeholder SVG if omitted). */
  highlightsAsideImage?: string;
  highlightsAsideImageAlt?: string;
  highlightsHeading: string;
  /** Section headline under the eyebrow — value statement, not the product name. */
  highlightsSubheading?: string;
  /** When set, replaces the highlight bullet cards with a prose introduction. */
  highlightsDescription?: string;
  highlights: string[];
  featuresHeading?: string;
  features: SolutionFeatureBlock[];
  specificationsHeading?: string;
  specifications?: SolutionSpecification[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  ctaHeading?: string;
  ctaBody?: string;
};

/** Matches home `#solution` card order; every slug must exist in `solutionLandingsBySlug`. */
export const HOME_SOLUTION_LANDING_ORDER = [
  "Automated-fare-collection",
  "Intelligent-transport-systems",
  "advanced-scheduling-system",
  "fleet-management",
  "Micro-mobility-integration",
  "ai-monitoring-and-control",
] as const;

/** Same tint as `.solution-banner-container` overlay on home solution cards — use on landing heroes. */
export const SOLUTION_CARD_SCRIM_BACKGROUND =
  "linear-gradient(to bottom, transparent, rgba(10,30,61,0.2))";

/** Full-width hero backgrounds under `public/solutions/*-full.png`. */
export const solutionHeroBackgroundImages: Record<
  (typeof HOME_SOLUTION_LANDING_ORDER)[number],
  string
> = {
  "Automated-fare-collection": `/solutions/${encodeURIComponent("automated fare collection-full.png")}`,
  "Intelligent-transport-systems": "/intelligent-transport.png",
  "advanced-scheduling-system": "/solutions/AI-based-scheduling-full.png",
  "fleet-management": "/solutions/control-room-managmeent-full.png",
  "Micro-mobility-integration": "/assets/micro-mobility-bike-sharing.webp",
  "ai-monitoring-and-control": "/solutions/performance-monitoring-full.png",
};

export const solutionLandingsBySlug: Record<string, SolutionLandingDoc> = {
  "Automated-fare-collection": {
    slug: "Automated-fare-collection",
    metaTitle: "TRVERSE Meridian — Automated Fare Collection — TRVERSE",
    metaDescription:
      "TRVERSE Meridian supports open-loop and closed-loop fare collection across every transit mode — EMV contactless, mobile wallets, multi-operator clearing, and sub-300ms validator processing.",
    badge: "Solution",
    eyebrowCategory: "Automated Fare Collection",
    productLine: "TRVERSE Meridian",
    heroTagline: "Open-loop fare collection, built for real-world transit.",
    heroIntro:
      "TRVERSE Meridian supports every payment method passengers carry — contactless bank cards, mobile wallets, and closed-loop transit cards — across any transit mode. No proprietary lock-in. No barriers to adoption.",
    heroBackgroundImage:
      solutionHeroBackgroundImages["Automated-fare-collection"],
    heroImage: "/assets/automate-fare-collection.webp",
    highlightsAsideImage: "/assets/automate-fare-collection.webp",
    highlightsAsideImageAlt: "",
    highlightsHeading: "Automated Fare Collection",
    highlightsDescription:
      "Fare collection is the financial backbone of your network. TRVERSE Meridian is engineered for the full complexity of mass transit — from high-throughput BRT stations to multi-modal interchanges where passengers move seamlessly between bus, metro, and micro-mobility.",
    highlights: [],
    featuresHeading: "Key Capabilities",
    features: [
      {
        title: "EMV open-loop acceptance",
        description:
          "Contactless Visa, Mastercard, Amex, Apple Pay, and Google Pay.",
      },
      {
        title: "Closed-loop transit card management",
        description: "Top-up, blocking, and balance enquiry.",
      },
      {
        title: "Multi-operator fare agreements",
        description: "Revenue apportionment across operators and corridors.",
      },
      {
        title: "Real-time transaction processing",
        description: "Sub-300ms validator response time.",
      },
      {
        title: "Offline resilience",
        description: "Validators continue operating during connectivity loss.",
      },
      {
        title: "Concessionary and time-based fare rules",
        description: "Configurable without downtime.",
      },
      {
        title: "Full audit trail",
        description:
          "Every transaction recorded — compliant with financial regulators.",
      },
    ],
  },
  "Intelligent-transport-systems": {
    slug: "Intelligent-transport-systems",
    metaTitle: "TRVERSE ITS — Intelligent Transport Systems — TRVERSE",
    metaDescription:
      "TRVERSE ITS delivers real-time network intelligence — AVL, passenger information, GTFS-RT, signal priority, incident management, and control centre dashboards in one integrated platform.",
    badge: "Solution",
    eyebrowCategory: "Intelligent Transport Systems",
    productLine: "TRVERSE ITS",
    heroTagline: "Real-time intelligence for every vehicle, route, and passenger.",
    heroIntro:
      "TRVERSE ITS gives operators and city authorities a live view of the entire network — from vehicle location and passenger loads to signal priority and passenger information — in a single integrated platform.",
    heroBackgroundImage:
      solutionHeroBackgroundImages["Intelligent-transport-systems"],
    heroImage: "/assets/intelligent-transportation.webp",
    highlightsAsideImage: "/assets/intelligent-transportation.webp",
    highlightsAsideImageAlt: "",
    highlightsHeading: "Intelligent Transport Systems",
    highlightsDescription:
      "TRVERSE ITS gives operators and city authorities a live view of the entire network — from vehicle location and passenger loads to signal priority and passenger information — in a single integrated platform.",
    highlights: [],
    featuresHeading: "Key Capabilities",
    features: [
      {
        title: "Automatic vehicle location (AVL)",
        description: "GPS and dead-reckoning.",
      },
      {
        title: "Passenger information systems",
        description: "On-board, at-stop, and digital channel feeds.",
      },
      {
        title: "GTFS and GTFS-RT publishing",
        description: "Third-party app integration.",
      },
      {
        title: "Traffic signal priority (TSP) integration",
        description: "NTCIP/UTMC protocols.",
      },
      {
        title: "Passenger counting",
        description: "Automatic with load forecasting.",
      },
      {
        title: "Incident management",
        description: "Automated detection, operator alerting, resolution tracking.",
      },
      {
        title: "Control centre dashboards",
        description: "Configurable alerting thresholds.",
      },
    ],
    specificationsHeading: "Specification",
    specifications: [
      {
        label: "Position update frequency",
        detail: "Every 5 seconds (configurable)",
      },
      {
        label: "Data protocols",
        detail: "GTFS-RT, SIRI, NTCIP, UTMC, NeTEx",
      },
      {
        label: "Passenger information channels",
        detail: "On-board displays, shelter signs, web, app, SMS",
      },
      {
        label: "Integration",
        detail: "Open APIs — REST/JSON, SOAP/XML legacy support",
      },
      {
        label: "Infrastructure",
        detail: "Cloud-native (AWS), on-premise deployment available",
      },
    ],
    primaryCta: {
      label: "Request ITS demonstration",
      href: "/contact",
    },
    secondaryCta: {
      label: "Download ITS datasheet",
      href: "/contact",
    },
    ctaHeading: "See TRVERSE ITS In Action",
    ctaBody:
      "Request a demonstration or download the ITS datasheet to explore AVL, passenger information, and control centre capabilities.",
  },
  "advanced-scheduling-system": {
    slug: "advanced-scheduling-system",
    metaTitle: "TRVERSE Advanced Scheduling — TRVERSE",
    metaDescription:
      "TRVERSE Advanced Scheduling combines historical ridership data with live network conditions to optimise timetables, forecasting, rostering, and service delivery in real time.",
    badge: "Solution",
    eyebrowCategory: "Advanced Scheduling",
    productLine: "TRVERSE Advanced Scheduling",
    heroTagline: "Schedules optimised by data. Adjusted in real time.",
    heroIntro:
      "Static timetables designed months in advance cannot keep pace with demand that changes by the hour. TRVERSE Advanced Scheduling combines historical ridership data with live network conditions to continuously optimise service delivery.",
    heroBackgroundImage:
      solutionHeroBackgroundImages["advanced-scheduling-system"],
    heroImage: "/assets/ai-based-scheduling.webp",
    highlightsAsideImage: "/assets/ai-based-scheduling.webp",
    highlightsAsideImageAlt: "",
    highlightsHeading: "Advanced Scheduling",
    highlightsDescription:
      "Static timetables designed months in advance cannot keep pace with demand that changes by the hour. TRVERSE Advanced Scheduling combines historical ridership data with live network conditions to continuously optimise service delivery.",
    highlights: [],
    featuresHeading: "Key Capabilities",
    features: [
      {
        title: "AI-assisted timetable generation",
        description: "Using multi-year ridership history.",
      },
      {
        title: "Demand forecasting",
        description: "By route, time period, day type, and special event.",
      },
      {
        title: "Real-time schedule adherence monitoring",
        description: "With automated crew alerts.",
      },
      {
        title: "Automated duty rostering",
        description: "Driver assignment optimisation.",
      },
      {
        title: "What-if scenario modelling",
        description: "For service change evaluation.",
      },
      {
        title: "Integration with fleet management",
        description: "Vehicle availability.",
      },
      {
        title: "Compliance reporting",
        description: "For contracted service level agreements.",
      },
    ],
  },
  "fleet-management": {
    slug: "fleet-management",
    metaTitle: "TRVERSE Fleet Management — TRVERSE",
    metaDescription:
      "TRVERSE Fleet Management gives operators real-time visibility and control over every asset — live tracking, driver analytics, predictive maintenance, fuel management, and incident response.",
    badge: "Solution",
    eyebrowCategory: "Fleet Management",
    productLine: "TRVERSE Fleet Management",
    heroTagline: "Every vehicle. Every moment. One command environment.",
    heroIntro:
      "TRVERSE Fleet Management gives operators real-time visibility and control over every asset in their network — from live tracking and driver performance to maintenance scheduling and fuel management.",
    heroBackgroundImage:
      solutionHeroBackgroundImages["fleet-management"],
    heroImage: "/assets/control-room-maangement.webp",
    highlightsAsideImage: "/assets/control-room-maangement.webp",
    highlightsAsideImageAlt: "",
    highlightsHeading: "Fleet Management",
    highlightsDescription:
      "TRVERSE Fleet Management gives operators real-time visibility and control over every asset in their network — from live tracking and driver performance to maintenance scheduling and fuel management.",
    highlights: [],
    featuresHeading: "Key Capabilities",
    features: [
      {
        title: "Real-time vehicle tracking",
        description: "Geofence alerts and route deviation detection.",
      },
      {
        title: "Driver behaviour analytics",
        description: "Speeding, harsh braking, idling, and fuel consumption.",
      },
      {
        title: "Predictive maintenance",
        description: "Fault code analysis and service interval optimisation.",
      },
      {
        title: "Fuel management",
        description: "Consumption monitoring and supplier integration.",
      },
      {
        title: "Incident management",
        description: "Collision detection, breakdown response, CCTV retrieval.",
      },
      {
        title: "Asset lifecycle management",
        description: "Procurement, depreciation, and disposal tracking.",
      },
      {
        title: "Multi-depot operations support",
        description: "Centralised and distributed management.",
      },
    ],
  },
  "Micro-mobility-integration": {
    slug: "Micro-mobility-integration",
    metaTitle: "TRVERSE Micro-Mobility Integration — TRVERSE",
    metaDescription:
      "TRVERSE extends your platform to e-bikes, e-scooters, and shared mobility — unified under one fare, one app, and one data environment.",
    badge: "Solution",
    eyebrowCategory: "Micro-Mobility Integration",
    productLine: "TRVERSE Micro-Mobility Integration",
    heroTagline: "First mile. Last mile. Every mile — connected.",
    heroIntro:
      "The journeys that matter most to passengers often begin and end outside the core transit network. TRVERSE extends your platform to e-bikes, e-scooters, and shared mobility services — unified under one fare, one app, and one data environment.",
    heroBackgroundImage:
      solutionHeroBackgroundImages["Micro-mobility-integration"],
    heroImage: "/assets/micro-mobility-bike-sharing.webp",
    highlightsAsideImage: "/assets/micro-mobility-bike-sharing.webp",
    highlightsAsideImageAlt: "",
    highlightsHeading: "Micro-Mobility Integration",
    highlightsDescription:
      "The journeys that matter most to passengers often begin and end outside the core transit network. TRVERSE extends your platform to e-bikes, e-scooters, and shared mobility services — unified under one fare, one app, and one data environment.",
    highlights: [],
    featuresHeading: "Key Capabilities",
    features: [
      {
        title: "Single-account payment",
        description: "Across transit and micro-mobility.",
      },
      {
        title: "Combined trip data",
        description: "For journey planning and demand analytics.",
      },
      {
        title: "Geo-fenced docking zone management",
        description: "Real-time availability feeds.",
      },
      {
        title: "Operator API integration",
        description:
          "Compatible with major e-bike and e-scooter platforms.",
      },
      {
        title: "Combined ridership reporting",
        description: "For government and environmental compliance.",
      },
      {
        title: "Incentive and loyalty programme integration",
        description: "Unified rewards across mobility modes.",
      },
    ],
  },
  "ai-monitoring-and-control": {
    slug: "ai-monitoring-and-control",
    metaTitle: "TRVERSE AI Monitoring — AI Monitoring and Control — TRVERSE",
    metaDescription:
      "TRVERSE AI Monitoring analyses fare, fleet, passenger, and system data to surface anomalies, predict failures, and recommend interventions before problems escalate.",
    badge: "Solution",
    eyebrowCategory: "AI Monitoring and Control",
    productLine: "TRVERSE AI Monitoring",
    heroTagline: "From reactive to predictive. Network intelligence that acts.",
    heroIntro:
      "TRVERSE AI Monitoring analyses every data stream across your network — fare transactions, vehicle telemetry, passenger flows, and system events — to surface anomalies, predict failures, and recommend interventions before problems escalate.",
    heroBackgroundImage:
      solutionHeroBackgroundImages["ai-monitoring-and-control"],
    heroImage: "/assets/perfomance-monitoring.webp",
    highlightsAsideImage: "/assets/perfomance-monitoring.webp",
    highlightsAsideImageAlt: "",
    highlightsHeading: "AI Monitoring and Control",
    highlightsDescription:
      "TRVERSE AI Monitoring analyses every data stream across your network — fare transactions, vehicle telemetry, passenger flows, and system events — to surface anomalies, predict failures, and recommend interventions before problems escalate.",
    highlights: [],
    featuresHeading: "Key Capabilities",
    features: [
      {
        title: "Real-time network health scoring",
        description: "Composite KPI across all platform components.",
      },
      {
        title: "Anomaly detection",
        description:
          "Statistical deviation alerting across fare, fleet, and ITS data.",
      },
      {
        title: "Revenue leakage detection",
        description:
          "Pattern recognition across transaction and gateline data.",
      },
      {
        title: "Predictive maintenance alerts",
        description: "Vehicle and infrastructure fault prediction.",
      },
      {
        title: "Automated reporting",
        description: "Scheduled and on-demand across all KPI dimensions.",
      },
      {
        title: "Natural language query interface",
        description: "Operational data exploration.",
      },
      {
        title: "Custom alert thresholds and escalation workflows",
        description: "Per operator.",
      },
    ],
  },
};

export function getSolutionLanding(slug: string): SolutionLandingDoc | undefined {
  return solutionLandingsBySlug[slug];
}

export function getSolutionLandingSlugs(): string[] {
  return Object.keys(solutionLandingsBySlug);
}
