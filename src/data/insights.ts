export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type InsightItem = {
  slug: string;
  title: string;
  category: string;
  date: string;
  datePublishedIso: string;
  excerpt: string;
  image: string;
  sourceUrl: string;
  intro: string;
  sections: InsightSection[];
};

export const insights: InsightItem[] = [
  {
    slug: "trverse-peshawar-brt-finalist-2026",
    title: "TRVERSE and TransPeshawar Named Finalists at Decarbonising Transport Awards 2026",
    category: "TRVERSE",
    date: "March 31, 2026",
    datePublishedIso: "2026-03-31",
    excerpt:
      "TRVERSE and TransPeshawar were named finalists for Best Behaviour Change & Public Engagement, recognizing BRT Peshawar's contribution to sustainable urban mobility.",
    image: "/insights/trverse-peshawar-brt-finalist-2026.webp",
    sourceUrl: "https://lmkr.com/insights/trverse-peshawar-brt-finalist-2026",
    intro:
      "TRVERSE, in collaboration with TransPeshawar, has been named a finalist at the Decarbonising Transport Awards 2026 in the category of Best Behaviour Change & Public Engagement.",
    sections: [
      {
        heading: "Recognition for Sustainable Mobility",
        paragraphs: [
          "The recognition highlights the role of BRT Peshawar in encouraging a shift toward more sustainable urban mobility.",
          "By improving accessibility, reliability, and user experience, the system has helped drive increased adoption of public transport across the city.",
        ],
      },
      {
        heading: "TRVERSE Contribution",
        paragraphs: [
          "TRVERSE supported the initiative through the delivery of intelligent transport systems and automated fare collection, enabling efficient operations and a seamless commuter experience.",
          "The project reflects a broader effort to reduce emissions and promote cleaner, more efficient transport networks in Pakistan.",
        ],
      },
      {
        heading: "Global Context",
        paragraphs: [
          "Being named a finalist places BRT Peshawar among leading global initiatives working to reduce the environmental impact of urban transportation.",
        ],
      },
    ],
  },
  {
    slug: "lmkr-delivers-electric-brt-network-masar-makkah",
    title: "TRVERSE Delivers Electric BRT Network at Masar Destination, Makkah",
    category: "TRVERSE",
    date: "March 31, 2026",
    datePublishedIso: "2026-03-31",
    excerpt:
      "TRVERSE delivered the first electric BRT network at Masar Destination in Makkah, enabling cleaner and more efficient mobility at scale.",
    image: "/insights/lmkr-delivers-electric-brt-network-masar-makkah.webp",
    sourceUrl: "https://lmkr.com/insights/lmkr-delivers-electric-brt-network-masar-makkah",
    intro:
      "TRVERSE has successfully delivered the first electric Bus Rapid Transit network at Masar Destination in Makkah, Saudi Arabia.",
    sections: [
      {
        heading: "Vision 2030-Aligned Infrastructure",
        paragraphs: [
          "Developed in partnership with Electromin and aligned with Saudi Arabia's Vision 2030, the project marks a major step toward cleaner and more efficient urban transport in the region.",
          "The system is designed to support high passenger volumes while reducing emissions and improving operational efficiency.",
        ],
      },
      {
        heading: "Delivered Solution Stack",
        paragraphs: [
          "TRVERSE implemented key components including automated fare collection, intelligent transport systems, fleet monitoring, and real-time passenger information.",
          "These systems provide operators with better visibility and control while improving the overall passenger experience.",
        ],
      },
      {
        heading: "Regional Benchmark",
        paragraphs: [
          "The Makkah BRT network is expected to serve millions of travelers annually, setting a new benchmark for sustainable, high-capacity public transport infrastructure in the Middle East.",
        ],
      },
    ],
  },
  {
    slug: "trverse-wins-big-at-pasha-ict-awards",
    title: "Trverse Wins Big at P@SHA ICT Awards",
    category: "TRVERSE",
    date: "2022",
    datePublishedIso: "2022-01-01",
    excerpt:
      "Trverse continued its winning streak at the 18th P@SHA ICT Awards, with TRVERSE recognized across consumer, industrial, and public-sector categories.",
    image: "/insights/trverse-wins-big-at-pasha-ict-awards.webp",
    sourceUrl: "https://lmkr.com/insights/trverse-wins-big-at-pasha-ict-awards",
    intro:
      "Trverse stood out at the 18th P@SHA ICT Awards as TRVERSE secured wins in three categories, reinforcing the impact of its urban mobility solutions across Pakistan.",
    sections: [
      {
        heading: "Award Highlights",
        paragraphs: [
          "P@SHA ICT Awards recognize leaders and unsung contributors shaping Pakistan's IT industry, economy, and global technology footprint.",
          "TRVERSE's latest win continues a strong history of recognition, including multiple awards in previous years and a 2021 award for Zu App.",
        ],
      },
      {
        heading: "Recognized Solutions",
        paragraphs: [
          "This year, TRVERSE was recognized for some of its most established mobility solutions.",
          "AFC had also been recognized previously at Transport Ticketing Global in London.",
        ],
        bullets: [
          "Open Marketplace - Marketplaces, Consumer",
          "IITS - Transport, Industrial",
          "AFC - Government & Citizen Service, Public Sector",
        ],
      },
      {
        heading: "Leadership Perspective",
        paragraphs: [
          "Vice President Technology Business & Alliances, TRVERSE, Nasir Tanveer, shared that recognition from Pakistan's own technology fraternity is especially meaningful.",
          "He emphasized that while Trverse has already transformed the urban mobility landscape, the team's roadmap is only beginning.",
        ],
      },
    ],
  },
  {
    slug: "zu-peshawar-best-smart-ticketing-programme",
    title: "Zu Peshawar Gets Global Recognition for the Best Smart Ticketing Programme",
    category: "TRVERSE",
    date: "June 28, 2022",
    datePublishedIso: "2022-06-28",
    excerpt:
      "TransPeshawar and TRVERSE received the Best Smart Ticketing Programme (200K+ journeys) award at Transport Ticketing Global 2022 in London.",
    image: "/insights/zu-peshawar-best-smart-ticketing-programme.webp",
    sourceUrl: "https://lmkr.com/insights/zu-peshawar-best-smart-ticketing-programme",
    intro:
      "TransPeshawar and TRVERSE received international recognition as Peshawar BRT won Best Smart Ticketing Programme (200K+ journeys) at Transport Ticketing Global 2022.",
    sections: [
      {
        heading: "Award Context",
        paragraphs: [
          "Transport Ticketing Global recognized TransPeshawar for improving daily mobility through innovative smart ticketing services, with TRVERSE as the technology partner.",
          "The award ceremony took place during the 10th annual Transport Ticketing Awards in London.",
        ],
      },
      {
        heading: "Why the Programme Stood Out",
        paragraphs: [
          "The category evaluates public transport authorities and technology partners that launch successful smart ticketing programs serving 200,000+ daily journeys.",
          "Judging factors include adoption, implementation duration, sustainability, and overall impact.",
        ],
      },
      {
        heading: "Global Competition and Industry Relevance",
        paragraphs: [
          "TransPeshawar won among international finalists from Indonesia, Brazil, Australia, the United States, New South Wales, and Kazakhstan.",
          "Transport Ticketing Global brings together smart ticketing and mobility experts from over 70 countries and highlights innovation that keeps passengers safe and moving.",
        ],
      },
    ],
  },
  {
    slug: "lmkr-mastercard-bok-peshawar-transit-partnership",
    title: "TRVERSE, Mastercard and BOK Revolutionize Transit Solutions in Peshawar",
    category: "TRVERSE",
    date: "August 29, 2023",
    datePublishedIso: "2023-08-29",
    excerpt:
      "TRVERSE, Mastercard, and Bank of Khyber partnered to introduce open-loop EMV transit payments, improving commuter convenience and financial inclusion.",
    image: "/insights/lmkr-delivers-electric-brt-network-masar-makkah.webp",
    sourceUrl: "https://lmkr.com/insights/lmkr-mastercard-bok-peshawar-transit-partnership",
    intro:
      "TRVERSE, Mastercard, and Bank of Khyber partnered under the Mastercard Transit Partner Program Agreement to advance Pakistan's transit landscape.",
    sections: [
      {
        heading: "Partnership Scope",
        paragraphs: [
          "The collaboration enables the development and deployment of EMV transit solutions designed to modernize commuter payments in Peshawar.",
          "Open-loop payments remove reliance on conventional paper tickets and allow commuters to use debit and credit cards directly for fares.",
        ],
      },
      {
        heading: "Enterprise and Public Value",
        paragraphs: [
          "The partnership combines global transit payment expertise with local implementation capability to deliver secure, scalable, and cost-effective travel payments.",
          "Aligned with Pakistan's digital transformation ambitions, this initiative sets a higher standard for accessibility, convenience, and financial inclusion.",
        ],
      },
    ],
  },
];
