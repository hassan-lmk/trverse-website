import { solutionLandingsBySlug } from "@/data/solutionLandings";
import { audienceLandingsBySlug } from "@/data/audienceLandings";
import { insights } from "@/data/insights";
import { caseStudies } from "@/data/caseStudies";

export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  category: string;
  /** Extra terms used for matching but not displayed. */
  keywords?: string;
};

const staticPages: SearchEntry[] = [
  {
    title: "Home",
    description: "TRVERSE connected mobility platform for modern transit.",
    href: "/",
    category: "Page",
    keywords: "trverse mobility transit platform",
  },
  {
    title: "Products",
    description:
      "Full product catalog of transit software platforms and field-ready hardware.",
    href: "/products",
    category: "Page",
    keywords: "software hardware devices validators pay fleet plan control info metrics count core",
  },
  {
    title: "Solutions",
    description:
      "Fully integrated modules across fare collection, ITS, scheduling, fleet, and more.",
    href: "/solutions",
    category: "Page",
    keywords: "afc its scheduling fleet micro-mobility ai monitoring",
  },
  {
    title: "Partners",
    description:
      "Technology and domain leaders we collaborate with to deliver connected operations.",
    href: "/partners",
    category: "Page",
    keywords: "partnership integrators collaboration become a partner",
  },
  {
    title: "About Us",
    description:
      "A global foundation in enterprise technology, built on LMKR's legacy.",
    href: "/about",
    category: "Page",
    keywords: "lmkr company history journey mission",
  },
  {
    title: "Insights",
    description: "News, events, and perspectives from TRVERSE.",
    href: "/insights",
    category: "Page",
    keywords: "news blog articles events case studies",
  },
  {
    title: "Get a demo",
    description: "Request a tailored TRVERSE demonstration for your network.",
    href: "/get-a-demo",
    category: "Page",
    keywords: "demo request contact briefing sales",
  },
];

let cachedIndex: SearchEntry[] | null = null;

export function getSearchIndex(): SearchEntry[] {
  if (cachedIndex) return cachedIndex;

  const solutionEntries: SearchEntry[] = Object.values(solutionLandingsBySlug).map(
    (doc) => ({
      title: doc.eyebrowCategory,
      description: doc.heroTagline,
      href: `/solutions/${doc.slug}`,
      category: "Solution",
      keywords: `${doc.heroIntro} ${doc.highlights.join(" ")} ${doc.features
        .map((f) => f.title)
        .join(" ")}`,
    }),
  );

  const audienceEntries: SearchEntry[] = Object.values(audienceLandingsBySlug).map(
    (doc) => ({
      title: doc.label,
      description: doc.heroHeadline,
      href: `/who-we-serve/${doc.slug}`,
      category: "Who We Serve",
      keywords: `${doc.heroSubheadline} ${doc.capabilities
        .map((c) => c.capability)
        .join(" ")}`,
    }),
  );

  const insightEntries: SearchEntry[] = insights.map((item) => ({
    title: item.title,
    description: item.excerpt,
    href: `/insights/${item.slug}`,
    category: "Insight",
    keywords: `${item.category} ${item.intro}`,
  }));

  const caseStudyEntries: SearchEntry[] = caseStudies.map((item) => ({
    title: item.title,
    description: item.summary,
    href: `/case-studies/${item.slug}`,
    category: "Case Study",
    keywords: `${item.location} ${item.headline ?? ""}`,
  }));

  cachedIndex = [
    ...staticPages,
    ...solutionEntries,
    ...audienceEntries,
    ...caseStudyEntries,
    ...insightEntries,
  ];

  return cachedIndex;
}

function normalize(value: string): string {
  return value.toLowerCase().normalize("NFKD").replace(/[^\w\s]/g, " ");
}

export function searchSite(query: string, limit = 8): SearchEntry[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const terms = normalize(trimmed).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  const scored = getSearchIndex()
    .map((entry) => {
      const title = normalize(entry.title);
      const description = normalize(entry.description);
      const keywords = normalize(entry.keywords ?? "");
      const haystack = `${title} ${description} ${keywords}`;

      let score = 0;
      for (const term of terms) {
        if (title === term) score += 12;
        if (title.includes(term)) score += 6;
        if (title.startsWith(term)) score += 2;
        if (description.includes(term)) score += 3;
        if (keywords.includes(term)) score += 1;
        if (!haystack.includes(term)) {
          // Penalize so entries missing a term rank below full matches.
          score -= 4;
        }
      }
      return { entry, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.entry);

  return scored;
}
