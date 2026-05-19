export type SolutionFeatureBlock = {
  title: string;
  description: string;
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
  highlights: string[];
  featuresHeading: string;
  features: SolutionFeatureBlock[];
};

/** Matches home `#solution` card order; every slug must exist in `solutionLandingsBySlug`. */
export const HOME_SOLUTION_LANDING_ORDER = [
  "Automated-fare-collection",
  "Intelligent-transport-systems",
  "AI-based-bus-scheduling",
  "Control-room-management",
  "Micro-mobility-integration",
  "Performance-monitoring",
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
  "Intelligent-transport-systems":
    "/solutions/intelligent-transport-system-full.png",
  "AI-based-bus-scheduling": "/solutions/AI-based-scheduling-full.png",
  "Control-room-management": "/solutions/control-room-managmeent-full.png",
  "Micro-mobility-integration": "/solutions/micro-mobility-full.png",
  "Performance-monitoring": "/solutions/performance-monitoring-full.png",
};

export const solutionLandingsBySlug: Record<string, SolutionLandingDoc> = {
  "Automated-fare-collection": {
    slug: "Automated-fare-collection",
    metaTitle: "TRVERSE Meridian — Automated Fare Collection — TRVERSE",
    metaDescription:
      "TRVERSE Meridian unifies fare collection across stations, vehicles, and digital channels. Open-loop and closed-loop payments, central clearing, flexible pricing, and high-volume throughput.",
    badge: "Solution",
    eyebrowCategory: "Automated fare collection",
    productLine: "TRVERSE Meridian",
    heroTagline: "Payments that keep moving",
    heroIntro:
      "TRVERSE Meridian manages fare collection across your network, connecting payments from stations, vehicles, and digital channels into one system.",
    heroBackgroundImage:
      solutionHeroBackgroundImages["Automated-fare-collection"],
    heroImage: "/assets/automate-fare-collection.webp",
    highlightsAsideImage: "/assets/automate-fare-collection.webp",
    highlightsAsideImageAlt: "",
    highlightsHeading: "Key highlights",
    highlightsSubheading:
      "Stations, vehicles, and digital channels unified into one clearing pipeline.",
    highlights: [
      "Supports open-loop and closed-loop payments",
      "Works across cards, QR, and mobile wallets",
      "Central clearing and revenue management",
      "Flexible fare structures and pricing models",
      "Integrated ticketing across multiple routes and operators",
      "Designed for high-volume passenger flow",
    ],
    featuresHeading: "Feature blocks",
    features: [
      {
        title: "Flexible payment support",
        description:
          "Accept bank cards, smart cards, and mobile payments across all touchpoints.",
      },
      {
        title: "Central clearing house",
        description:
          "Manage transactions, reconciliation, and revenue distribution in one place.",
      },
      {
        title: "Fare configuration",
        description:
          "Set distance-based, flat, or time-based pricing with full control.",
      },
      {
        title: "Passenger apps & wallets",
        description: "Enable digital ticketing, recharge, and travel tracking.",
      },
    ],
  },
  "Intelligent-transport-systems": {
    slug: "Intelligent-transport-systems",
    metaTitle: "TRVERSE Vector — Intelligent Transport Systems — TRVERSE",
    metaDescription:
      "TRVERSE Vector delivers real-time visibility across vehicles, routes, and passenger systems with KPI dashboards, safety monitoring, and continuous operational supervision.",
    badge: "Solution",
    eyebrowCategory: "Intelligent transport systems",
    productLine: "TRVERSE Vector",
    heroTagline: "See every movement. Stay ahead.",
    heroIntro:
      "TRVERSE Vector provides real-time visibility across vehicles, routes, and passenger systems, helping operators monitor performance and respond as needed.",
    heroBackgroundImage:
      solutionHeroBackgroundImages["Intelligent-transport-systems"],
    heroImage: "/assets/intelligent-transportation.webp",
    highlightsAsideImage: "/assets/intelligent-transportation.webp",
    highlightsAsideImageAlt: "",
    highlightsHeading: "Key highlights",
    highlightsSubheading:
      "Live operational awareness across your network—at vehicle, route, and passenger level.",
    highlights: [
      "GPS-based fleet tracking",
      "Real-time passenger information",
      "Driver behavior monitoring",
      "Vehicle diagnostics and health tracking",
      "KPI dashboards and reporting",
      "Continuous system monitoring",
    ],
    featuresHeading: "Feature Blocks",
    features: [
      {
        title: "Fleet Monitoring",
        description: "Track vehicle movement and route adherence in real time.",
      },
      {
        title: "Driver & Safety Systems",
        description:
          "Monitor driving patterns and detect operational risks.",
      },
      {
        title: "Vehicle Health Data",
        description:
          "Capture system-level data to support maintenance and performance.",
      },
      {
        title: "Live Dashboards",
        description:
          "View network performance with clear, real-time insights.",
      },
    ],
  },
  "AI-based-bus-scheduling": {
    slug: "AI-based-bus-scheduling",
    metaTitle: "TRVERSE Orbit — AI-Based Bus Scheduling — TRVERSE",
    metaDescription:
      "TRVERSE Orbit optimizes routes and schedules using real-time and historical demand data, improving efficiency and service coverage across your network.",
    badge: "Solution",
    eyebrowCategory: "AI-based bus scheduling",
    productLine: "TRVERSE Orbit",
    heroTagline: "Schedules that move with demand",
    heroIntro:
      "TRVERSE Orbit helps plan and adjust services based on demand, using real-time and historical data to improve efficiency across the network.",
    heroBackgroundImage:
      solutionHeroBackgroundImages["AI-based-bus-scheduling"],
    heroImage: "/assets/ai-based-scheduling.webp",
    highlightsAsideImage: "/assets/ai-based-scheduling.webp",
    highlightsAsideImageAlt: "",
    highlightsHeading: "Key Highlights",
    highlightsSubheading:
      "Demand-driven planning and optimization for smarter scheduling.",
    highlights: [
      "Dynamic scheduling updates",
      "Demand-based planning",
      "Route optimization",
      "Fleet allocation management",
      "Schedule adherence tracking",
      "Scenario-based planning",
    ],
    featuresHeading: "Feature Blocks",
    features: [
      {
        title: "Dynamic Scheduling",
        description: "Adjust routes and timings as conditions change.",
      },
      {
        title: "Demand-Based Planning",
        description: "Use ridership patterns to optimize services.",
      },
      {
        title: "Route Optimization",
        description: "Improve coverage and reduce inefficiencies.",
      },
      {
        title: "Fleet Allocation",
        description: "Assign vehicles based on real-time needs.",
      },
    ],
  },
  "Control-room-management": {
    slug: "Control-room-management",
    metaTitle: "TRVERSE Command — Control Room Management — TRVERSE",
    metaDescription:
      "TRVERSE Command unifies operational systems so teams can monitor, coordinate, and manage transit activities from a single environment.",
    badge: "Solution",
    eyebrowCategory: "Control room management",
    productLine: "TRVERSE Command",
    heroTagline: "Unified control across your network",
    heroIntro:
      "TRVERSE Command brings operational systems into one environment, allowing teams to monitor, coordinate, and manage transit operations from a single place.",
    heroBackgroundImage:
      solutionHeroBackgroundImages["Control-room-management"],
    heroImage: "/assets/control-room-maangement.webp",
    highlightsAsideImage: "/assets/control-room-maangement.webp",
    highlightsAsideImageAlt: "",
    highlightsHeading: "Key Highlights",
    highlightsSubheading:
      "Centralized monitoring and coordinated response for operations at scale.",
    highlights: [
      "Centralized monitoring and control",
      "Incident and disruption management",
      "Dispatch and communication systems",
      "Real-time dashboards",
      "System-wide coordination",
      "Performance tracking",
    ],
    featuresHeading: "Feature Blocks",
    features: [
      {
        title: "Unified Dashboard",
        description: "View all operational systems in one interface.",
      },
      {
        title: "Incident Management",
        description: "Track and respond to disruptions quickly.",
      },
      {
        title: "Dispatch & Communication",
        description:
          "Coordinate teams and vehicles in real time.",
      },
      {
        title: "Performance Monitoring",
        description: "Measure and manage system performance continuously.",
      },
    ],
  },
  "Micro-mobility-integration": {
    slug: "Micro-mobility-integration",
    metaTitle: "TRVERSE Signal — Micro-Mobility Integration — TRVERSE",
    metaDescription:
      "TRVERSE Signal extends transit networks by connecting first and last mile services, enabling a more complete and accessible system.",
    badge: "Solution",
    eyebrowCategory: "Micro-mobility integration",
    productLine: "TRVERSE Signal",
    heroTagline: "Clarity at every stop",
    heroIntro:
      "TRVERSE extends transit networks by connecting first and last mile services, enabling a more complete and accessible system.",
    heroBackgroundImage:
      solutionHeroBackgroundImages["Micro-mobility-integration"],
    heroImage: "/assets/micro-mobility.webp",
    highlightsAsideImage: "/assets/micro-mobility.webp",
    highlightsAsideImageAlt: "",
    highlightsHeading: "Key Highlights",
    highlightsSubheading:
      "Connected first/last mile experiences across multiple modes.",
    highlights: [
      "Integration with bike-sharing systems",
      "Support for feeder and on-demand services",
      "Multi-modal journey connectivity",
      "Unified passenger experience",
      "Scalable across cities",
      "Works alongside core transit systems",
    ],
    featuresHeading: "Feature Blocks",
    features: [
      {
        title: "Multi-Modal Integration",
        description: "Connect buses, bikes, and on-demand services.",
      },
      {
        title: "First & Last Mile Coverage",
        description: "Improve accessibility across the network.",
      },
      {
        title: "Unified Experience",
        description: "Keep journeys consistent across transport modes.",
      },
      {
        title: "Scalable Deployment",
        description: "Expand services without disrupting core systems.",
      },
    ],
  },
  "Performance-monitoring": {
    slug: "Performance-monitoring",
    metaTitle: "TRVERSE Insight — Performance Monitoring — TRVERSE",
    metaDescription:
      "TRVERSE Insight provides visibility into system performance so operators can track operations, analyze trends, and make informed decisions.",
    badge: "Solution",
    eyebrowCategory: "Performance monitoring",
    productLine: "TRVERSE Insight",
    heroTagline: "Know more. Decide faster",
    heroIntro:
      "TRVERSE Insight provides visibility into system performance, helping operators track operations, analyze trends, and make informed decisions.",
    heroBackgroundImage:
      solutionHeroBackgroundImages["Performance-monitoring"],
    heroImage: "/assets/perfomance-monitoring.webp",
    highlightsAsideImage: "/assets/perfomance-monitoring.webp",
    highlightsAsideImageAlt: "",
    highlightsHeading: "Key Highlights",
    highlightsSubheading:
      "Data visibility that improves planning, execution, and service quality.",
    highlights: [
      "Real-time dashboards",
      "Ridership and revenue reporting",
      "KPI tracking",
      "Operational analytics",
      "Historical trend analysis",
      "Data-driven decision support",
    ],
    featuresHeading: "Feature Blocks",
    features: [
      {
        title: "Operational Dashboards",
        description: "Track network performance in real time.",
      },
      {
        title: "Reporting & Analytics",
        description: "Analyze ridership, revenue, and system trends.",
      },
      {
        title: "KPI Tracking",
        description: "Measure service quality and operational metrics.",
      },
      {
        title: "Decision Support",
        description: "Use data to guide planning and improvements.",
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
