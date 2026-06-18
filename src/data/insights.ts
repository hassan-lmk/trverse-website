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
  imageObjectFit?: "cover" | "contain";
  sourceUrl: string;
  intro: string;
  sections: InsightSection[];
};

export const insights: InsightItem[] = [
  {
    slug: "trverse-gitex-africa-2026-real-time-transit",
    title: "TRVERSE at GITEX Africa 2026: Transit systems are being judged by how well they respond in real time",
    category: "TRVERSE",
    date: "April 2026",
    datePublishedIso: "2026-04-09",
    excerpt:
      "At GITEX Africa 2026 in Marrakech, TRVERSE highlighted how real-time visibility, coordination, and faster decision-making are becoming baseline expectations for modern public transport.",
    image: "/solutions/gitex-africa.png",
    sourceUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7448196754816090112/",
    intro:
      "TRVERSE participated in GITEX Africa 2026, held from 7 to 9 April in Marrakech, Morocco, where governments, transport authorities, technology providers, and startups explored the future of digital infrastructure and urban mobility.",
    sections: [
      {
        heading: "A New Benchmark for Transit Performance",
        paragraphs: [
          "One clear takeaway from the event was that transit systems are increasingly evaluated by their ability to respond in real time.",
          "Across network operations and passenger experience, visibility, coordination, and faster decision-making were presented as baseline expectations rather than long-term goals.",
        ],
      },
      {
        heading: "Conversations with City and Mobility Leaders",
        paragraphs: [
          "TRVERSE engaged with city leaders and mobility professionals throughout the event, reinforcing the case for integrated, data-driven transport systems.",
          "The focus remained on connecting every operational layer so operators can sustain a consistently responsive service.",
        ],
      },
      {
        heading: "How This Aligns with TRVERSE Solutions",
        paragraphs: [
          "This direction closely aligns with TRVERSE's smart mobility approach, centered on real-time operational control and reliable, seamless passenger journeys.",
          "The discussions at GITEX Africa reflected how quickly this standard is becoming universal across emerging and mature mobility ecosystems.",
        ],
      },
    ],
  },
  {
    slug: "trverse-transit-ticketing-fare-collection-mena-2025",
    title: "TRVERSE at Transit Ticketing and Fare Collection MENA 2025",
    category: "TRVERSE",
    date: "September 2025",
    datePublishedIso: "2025-09-17",
    excerpt:
      "At Transit Ticketing and Fare Collection MENA 2025 in Dubai, TRVERSE showcased smart mobility solutions and reinforced the value of integrated, interoperable fare systems for a cashless connected ecosystem.",
    image: "/solutions/fare-collection-mena.jpg",
    sourceUrl:
      "https://www.linkedin.com/posts/trverse-official_trverse-smartmobility-transit-activity-7374037843888881664-fX76?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAArVS_YBUaEW9wnrgbDlUAN4ID2jmywxGt0",
    intro:
      "TRVERSE showcased its smart mobility solutions at Transit Ticketing and Fare Collection MENA 2025 in Dubai and also served as coffee sponsor for the conference's fifth edition, held on 16 and 17 September at the Anantara Downtown Dubai Hotel.",
    sections: [
      {
        heading: "Regional Forum for Future Fare Infrastructure",
        paragraphs: [
          "The event brought together public transport authorities, operators, and technology leaders from across MENA to shape the future of mobility.",
          "Discussions covered open-loop payments, EV charging integration, AI-driven ticketing, and nationwide fare systems, signaling rapid movement toward a fully cashless and connected ecosystem.",
        ],
      },
      {
        heading: "Why the Conference Matters",
        paragraphs: [
          "Transit Ticketing and Fare Collection MENA is a key platform for advancing automated fare collection across the region.",
          "It convenes the public and private sector stakeholders responsible for designing and deploying next-generation payment infrastructure.",
        ],
      },
      {
        heading: "TRVERSE Perspective",
        paragraphs: [
          "For TRVERSE, the focus on integrated and interoperable fare systems reflects core work across smart mobility programs.",
          "The event enabled valuable engagement with partners, city leaders, and innovators, and further validated the need to keep building accessible and future-ready mobility solutions for MENA and beyond.",
        ],
      },
    ],
  },
  {
    slug: "trverse-peshawar-brt-finalist-2026",
    title: "TransPeshawar Named Finalists at Decarbonising Transport Awards 2026",
    category: "TRVERSE",
    date: "March 31, 2026",
    datePublishedIso: "2026-03-31",
    excerpt:
      "TransPeshawar was named finalists for Best Behaviour Change & Public Engagement, recognizing BRT Peshawar's contribution to sustainable urban mobility.",
    image: "/insights/trverse-peshawar-brt-finalist-2026.webp",
    imageObjectFit: "contain",
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
    imageObjectFit: "contain",
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
    title: "LMKR, Mastercard and BOK Revolutionize Transit Solutions in Peshawar with Innovative Partnership",
    category: "TRVERSE",
    date: "August 29, 2023",
    datePublishedIso: "2023-08-29",
    excerpt:
      "LMK Resources Pakistan (Private) Limited, Mastercard, and Bank of Khyber partnered to introduce open-loop EMV transit payments, improving commuter convenience and financial inclusion.",
    image: "/solutions/master-card.jpg",
    sourceUrl: "https://lmkr.com/insights/lmkr-mastercard-bok-peshawar-transit-partnership",
    intro:
      "LMK Resources Pakistan (Private) Limited, Mastercard, and Bank of Khyber partnered under the Mastercard Transit Partner Program Agreement to advance Pakistan's transit landscape.",
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
