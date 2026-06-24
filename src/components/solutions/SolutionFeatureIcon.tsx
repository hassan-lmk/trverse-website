type IconName =
  | "emv-open-loop"
  | "transit-card"
  | "multi-operator"
  | "realtime-tx"
  | "offline"
  | "fare-rules"
  | "audit-trail"
  | "avl"
  | "passenger-info"
  | "gtfs"
  | "tsp"
  | "passenger-count"
  | "incident-mgmt"
  | "control-dashboard"
  | "timetable"
  | "demand-forecast"
  | "schedule-adherence"
  | "duty-roster"
  | "scenario-model"
  | "fleet-integration"
  | "compliance-report"
  | "vehicle-tracking"
  | "driver-analytics"
  | "predictive-maint"
  | "fuel-mgmt"
  | "fleet-incident"
  | "asset-lifecycle"
  | "multi-depot"
  | "single-payment"
  | "trip-data"
  | "geo-docking"
  | "operator-api"
  | "ridership-report"
  | "loyalty"
  | "network-health"
  | "anomaly"
  | "revenue-leakage"
  | "predictive-alert"
  | "auto-report"
  | "nl-query"
  | "alert-workflow";

const featureIconByTitle: Record<string, IconName> = {
  "EMV Open-Loop Acceptance": "emv-open-loop",
  "Closed-Loop Transit Card Management": "transit-card",
  "Multi-Operator Fare Agreements": "multi-operator",
  "Real-Time Transaction Processing": "realtime-tx",
  "Offline Resilience": "offline",
  "Concessionary and Time-Based Fare Rules": "fare-rules",
  "Full Audit Trail": "audit-trail",
  "Automatic Vehicle Location (AVL)": "avl",
  "Passenger Information Systems": "passenger-info",
  "GTFS and GTFS-RT Publishing": "gtfs",
  "Traffic Signal Priority (TSP) Integration": "tsp",
  "Passenger Counting": "passenger-count",
  "Incident Management": "incident-mgmt",
  "Control Centre Dashboards": "control-dashboard",
  "AI-Assisted Timetable Generation": "timetable",
  "Demand Forecasting": "demand-forecast",
  "Real-Time Schedule Adherence Monitoring": "schedule-adherence",
  "Automated Duty Rostering": "duty-roster",
  "What-If Scenario Modelling": "scenario-model",
  "Integration With Fleet Management": "fleet-integration",
  "Compliance Reporting": "compliance-report",
  "Real-Time Vehicle Tracking": "vehicle-tracking",
  "Driver Behaviour Analytics": "driver-analytics",
  "Predictive Maintenance": "predictive-maint",
  "Fuel Management": "fuel-mgmt",
  "Asset Lifecycle Management": "asset-lifecycle",
  "Multi-Depot Operations Support": "multi-depot",
  "Single-Account Payment": "single-payment",
  "Combined Trip Data": "trip-data",
  "Geo-Fenced Docking Zone Management": "geo-docking",
  "Operator API Integration": "operator-api",
  "Combined Ridership Reporting": "ridership-report",
  "Incentive and Loyalty Programme Integration": "loyalty",
  "Real-Time Network Health Scoring": "network-health",
  "Anomaly Detection": "anomaly",
  "Revenue Leakage Detection": "revenue-leakage",
  "Predictive Maintenance Alerts": "predictive-alert",
  "Automated Reporting": "auto-report",
  "Natural Language Query Interface": "nl-query",
  "Custom Alert Thresholds and Escalation Workflows": "alert-workflow",
};

export function getSolutionFeatureIcon(title: string, slug?: string): IconName {
  if (title === "Incident Management" && slug === "fleet-management") {
    return "fleet-incident";
  }
  return featureIconByTitle[title] ?? "audit-trail";
}

const common = {
  width: 28,
  height: 28,
  viewBox: "0 0 28 28",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function SolutionFeatureIcon({ name }: { name: IconName }) {
  switch (name) {
    case "emv-open-loop":
      return (
        <svg {...common}>
          <rect x="4" y="8" width="20" height="14" rx="2.5" />
          <path d="M4 13h20" />
          <path d="M18 17h3" />
          <path d="M8 5c2 2 2 3 0 5M12 4c2.5 2.5 2.5 4 0 6" />
        </svg>
      );
    case "transit-card":
      return (
        <svg {...common}>
          <rect x="4" y="7" width="20" height="14" rx="2.5" />
          <rect x="7" y="11" width="5" height="4" rx="1" />
          <path d="M15 16h6" />
        </svg>
      );
    case "multi-operator":
      return (
        <svg {...common}>
          <circle cx="8" cy="10" r="3" />
          <circle cx="20" cy="10" r="3" />
          <circle cx="14" cy="20" r="3" />
          <path d="M10.5 11.5 12.5 17M17.5 11.5 15.5 17" />
        </svg>
      );
    case "realtime-tx":
      return (
        <svg {...common}>
          <path d="M15 4 9 15h5l-1 9 7-13h-5l0-7z" />
        </svg>
      );
    case "offline":
      return (
        <svg {...common}>
          <path d="M6 18c3-2 7-2 10 0 3-2 7-2 10 0" />
          <path d="M9 14c2-1.5 4-1.5 6 0 2-1.5 4-1.5 6 0" />
          <path d="M4 4l20 20" />
        </svg>
      );
    case "fare-rules":
      return (
        <svg {...common}>
          <path d="M6 8h16M6 14h10M6 20h14" />
          <circle cx="20" cy="14" r="2" />
          <circle cx="16" cy="20" r="2" />
        </svg>
      );
    case "audit-trail":
      return (
        <svg {...common}>
          <path d="M9 5H7a2 2 0 00-2 2v16l4-3 4 3 4-3 4 3V7a2 2 0 00-2-2h-2" />
          <path d="M11 11h6M11 15h4" />
        </svg>
      );
    case "avl":
      return (
        <svg {...common}>
          <path d="M14 4a8 8 0 018 8c0 5.5-8 12-8 12S6 17.5 6 12a8 8 0 018-8z" />
          <circle cx="14" cy="12" r="2.5" />
        </svg>
      );
    case "passenger-info":
      return (
        <svg {...common}>
          <rect x="5" y="6" width="18" height="13" rx="2" />
          <path d="M9 20h10" />
          <path d="M14 19v2" />
          <path d="M9 11h10M9 14h6" />
        </svg>
      );
    case "gtfs":
      return (
        <svg {...common}>
          <path d="M8 8h12v12H8z" />
          <path d="M12 12h8M12 16h5" />
          <path d="M16 8V5M20 8V4" />
        </svg>
      );
    case "tsp":
      return (
        <svg {...common}>
          <rect x="10" y="5" width="8" height="18" rx="2" />
          <circle cx="14" cy="10" r="2" fill="currentColor" />
          <circle cx="14" cy="16" r="2" />
          <circle cx="14" cy="20" r="2" fill="currentColor" />
        </svg>
      );
    case "passenger-count":
      return (
        <svg {...common}>
          <circle cx="11" cy="10" r="3" />
          <path d="M5 22c0-3.5 2.8-6 6-6s6 2.5 6 6" />
          <path d="M19 11h5M21.5 8.5v5" />
        </svg>
      );
    case "incident-mgmt":
      return (
        <svg {...common}>
          <path d="M14 6l8 14H6l8-14z" />
          <path d="M14 12v3" />
          <circle cx="14" cy="17" r="0.8" fill="currentColor" />
        </svg>
      );
    case "control-dashboard":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="20" height="14" rx="2" />
          <path d="M8 15V12M12 15V9M16 15v-2M20 15V11" />
        </svg>
      );
    case "timetable":
      return (
        <svg {...common}>
          <rect x="5" y="6" width="18" height="17" rx="2" />
          <path d="M9 4v4M19 4v4M5 11h18" />
          <path d="M9 15h4M9 18h7" />
        </svg>
      );
    case "demand-forecast":
      return (
        <svg {...common}>
          <path d="M5 22V10M12 22V14M19 22V6" />
          <path d="M5 14l7-4 7-4" />
        </svg>
      );
    case "schedule-adherence":
      return (
        <svg {...common}>
          <circle cx="14" cy="14" r="8" />
          <path d="M14 10v4l3 2" />
          <path d="M20 6l2 2" />
        </svg>
      );
    case "duty-roster":
      return (
        <svg {...common}>
          <circle cx="10" cy="10" r="2.5" />
          <circle cx="18" cy="10" r="2.5" />
          <path d="M5 22c0-3 2.5-5 5-5s5 2 5 5M13 22c0-2.5 2-4.5 5-4.5s5 2 5 4.5" />
        </svg>
      );
    case "scenario-model":
      return (
        <svg {...common}>
          <path d="M6 22V10l6-5 6 5v12" />
          <path d="M14 10v12M20 14l4-2v10H6" />
        </svg>
      );
    case "fleet-integration":
      return (
        <svg {...common}>
          <path d="M10 14a4 4 0 108 0" />
          <path d="M14 10V6M11 7l3-3 3 3" />
        </svg>
      );
    case "compliance-report":
      return (
        <svg {...common}>
          <path d="M9 5h7l4 4v14H9z" />
          <path d="M16 5v5h5" />
          <path d="M11 16l2 2 4-4" />
        </svg>
      );
    case "vehicle-tracking":
      return (
        <svg {...common}>
          <circle cx="14" cy="14" r="8" />
          <circle cx="14" cy="14" r="2" />
          <path d="M14 6v2M14 20v2M6 14h2M20 14h2" />
        </svg>
      );
    case "driver-analytics":
      return (
        <svg {...common}>
          <circle cx="14" cy="14" r="8" />
          <circle cx="14" cy="14" r="2.5" />
          <path d="M14 6v2M20 10l-1.5 1.5M8 10l1.5 1.5" />
        </svg>
      );
    case "predictive-maint":
      return (
        <svg {...common}>
          <path d="M10 12l2 2 6-6" />
          <path d="M8 22h12" />
          <path d="M10 18h8l1-6-4-4-5 2-1 8z" />
        </svg>
      );
    case "fuel-mgmt":
      return (
        <svg {...common}>
          <path d="M8 8h8v14H8z" />
          <path d="M16 12h3l2 3v7h-5" />
          <path d="M10 12h4" />
        </svg>
      );
    case "fleet-incident":
      return (
        <svg {...common}>
          <path d="M8 10h12l-2 10H10l-2-10z" />
          <path d="M10 10V8a4 4 0 018 0v2" />
          <path d="M14 15v3" />
        </svg>
      );
    case "asset-lifecycle":
      return (
        <svg {...common}>
          <path d="M8 10a6 6 0 0112 0" />
          <path d="M20 10v8a2 2 0 01-2 2H10a2 2 0 01-2-2v-8" />
          <path d="M11 14h6" />
        </svg>
      );
    case "multi-depot":
      return (
        <svg {...common}>
          <path d="M5 22V12l5-4 5 4v10" />
          <path d="M15 22V10l5-3v15" />
          <path d="M9 16h2M18 14h2" />
        </svg>
      );
    case "single-payment":
      return (
        <svg {...common}>
          <rect x="4" y="8" width="20" height="13" rx="2.5" />
          <path d="M4 13h20" />
          <circle cx="18" cy="17" r="1.2" fill="currentColor" />
        </svg>
      );
    case "trip-data":
      return (
        <svg {...common}>
          <circle cx="7" cy="20" r="2" />
          <circle cx="21" cy="8" r="2" />
          <path d="M9 18c4-8 6-8 10-10" />
        </svg>
      );
    case "geo-docking":
      return (
        <svg {...common}>
          <path d="M14 5a6 6 0 016 6c0 4.5-6 11-6 11S8 15.5 8 11a6 6 0 016-6z" />
          <rect x="11" y="9" width="6" height="4" rx="1" />
        </svg>
      );
    case "operator-api":
      return (
        <svg {...common}>
          <path d="M8 8l-3 6 3 6M20 8l3 6-3 6" />
          <path d="M12 20l4-12" />
        </svg>
      );
    case "ridership-report":
      return (
        <svg {...common}>
          <path d="M6 22V12M11 22V8M16 22v-6M21 22V5" />
        </svg>
      );
    case "loyalty":
      return (
        <svg {...common}>
          <path d="M14 6l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L6.8 11l5-.7L14 6z" />
        </svg>
      );
    case "network-health":
      return (
        <svg {...common}>
          <path d="M4 14h4l2-5 4 10 2-5h6" />
        </svg>
      );
    case "anomaly":
      return (
        <svg {...common}>
          <circle cx="14" cy="14" r="8" />
          <circle cx="14" cy="14" r="3" />
          <path d="M14 6V4M22 14h2M14 22v2M4 14H2" />
        </svg>
      );
    case "revenue-leakage":
      return (
        <svg {...common}>
          <path d="M8 6h12l-2 14H10L8 6z" />
          <path d="M10 10h8" />
          <path d="M14 16v4M12 20h4" />
        </svg>
      );
    case "predictive-alert":
      return (
        <svg {...common}>
          <path d="M10 22h8" />
          <path d="M7 18h14l-2-11a5 5 0 00-10 0L7 18z" />
          <path d="M16 6a4 4 0 014 4" />
        </svg>
      );
    case "auto-report":
      return (
        <svg {...common}>
          <path d="M8 5h8l5 5v13H8z" />
          <path d="M16 5v6h6" />
          <path d="M11 14h7M11 17h5" />
        </svg>
      );
    case "nl-query":
      return (
        <svg {...common}>
          <path d="M7 8a7 7 0 0114 0c0 3.5-2.5 5.5-4 7H11l-2 4v-4C7.5 13.5 7 11.5 7 8z" />
        </svg>
      );
    case "alert-workflow":
      return (
        <svg {...common}>
          <path d="M6 8h16M6 14h10M6 20h14" />
          <circle cx="20" cy="14" r="2" />
          <path d="M20 20l1.5 1.5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="6" y="6" width="16" height="16" rx="3" />
        </svg>
      );
  }
}
