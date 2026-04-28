export type CaseStudy = {
  slug: string;
  title: string;
  location: string;
  summary: string;
  heroImage: string;
  overview: string;
  challenge: string[];
  solution: string[];
  solutionKeyComponents?: string[];
  networkMap?: {
    title: string;
    image?: string;
    caption?: string;
  };
  benefits: Array<{
    title: string;
    description: string;
  }>;
  additionalNotes?: string[];
  stats: Array<{
    value: string;
    label: string;
  }>;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "peshawar-brt",
    title: "Peshawar BRT",
    location: "Pakistan",
    summary:
      "A sustainable, cost-efficient mass transit system transforming mobility in Peshawar with a connected passenger and operator experience.",
    heroImage: "/assets/BRT-Peshawar-.webp",
    overview:
      "Peshawar, a center of trade and commerce, has a population of 2.2 million people with no proper transportation system to serve the masses. To mitigate the transportation crisis, the Khyber Pakhtunkhwa government decided to provide a cost-efficient, sustainable mass transit system to transform mobility in the provincial capital of KP.\n\nUnder TRVERSE and its partners, an intelligent transport system was designed and successfully deployed in the city. The system, launched in 2020, was serving a daily ridership of more than 220,000 people in 2021.",
    challenge: [
      "Peshawar has a population of 2.2 million, increasing at a rate of 3.2% per annum. With the present growth trends, the population is expected to grow enormously in the next decade. This rapid growth is putting significant pressure on the city’s creaking transport infrastructure.",
      "Like any other city in Pakistan, Peshawar faced a transportation crisis with no safe and cohesive transport infrastructure. A mix of poorly maintained public transport vehicles, countless private automobiles, and scattered pedestrians resulted in chaotic traffic and terrible pollution for the city.",
      "The only means of transportation for the longest time have been Mazda, Hiace, and Suzuki vans, which add to the chaos and are not suitable for a large percentage of the population, especially women and children.",
    ],
    solution: [
      "To cater to the mobility challenges in Peshawar, the KP Government, with support from the Asian Development Bank, launched a Bus Rapid Transit (BRT) project for the city. TRVERSE, along with its partners, was selected to provide the system control equipment and services.",
      "The objective of the project was to provide an affordable, reliable, and customer-friendly transport system to the masses that not only helps in the development of the physical infrastructure of the city but also acts as a catalyst for urban regeneration and growth.",
      "The planned system consists of a 27-kilometer dedicated busway corridor with 30 stations, connecting over 60 kilometers of direct services to local communities.",
    ],
    solutionKeyComponents: [
      "Provision of the specified equipment and software delivered to the full functional and technical requirements",
      "Installation, testing, and commissioning of the equipment and software",
      "The operation, maintenance, and other services of the equipment and software commissioned by the contractor",
      "Delivery of capacity-building training to both employees of the contractor and employees of the employer",
      "Management and operation of the system control equipment and services for the full period of the contract",
    ],
    networkMap: {
      title: "BRT Network Map",
      image: "/assets/brt-peshawar-map.webp",
      caption:
        "Zu Peshawar schematic: trunk, ZU Xpress, and feeder corridors with station numbering across the network.",
    },
    stats: [
      { value: "220K+", label: "Daily ridership" },
      { value: "158", label: "Total buses" },
      { value: "9", label: "Total routes" },
      { value: "60K+", label: "Mobile App downloads" },
      { value: "50M+", label: "Total passengers" },
      { value: "114M", label: "Distance travelled" },
      { value: "1M+", label: "Zu cards sold" },
    ],
    benefits: [
      {
        title: "Easy Accessibility",
        description:
          "BRT Peshawar is a milestone project of KP, facilitating more than 120,000 commuters daily. The organized route also cuts travel time from east to west of the city from 2 hours to just 45 minutes.",
      },
      {
        title: "First Class Facilities",
        description:
          "Improved waiting facilities and supporting infrastructure for passengers, such as e-ticketing and real-time information about bus schedules. A cashless and contactless system also improves transparency and reduces abuse, theft, and corruption.",
      },
      {
        title: "Automated Fare",
        description:
          "Automated fare collection makes collecting and verifying fares significantly simpler, more accurate, and safer for government, operators, and commuters.",
      },
      {
        title: "Scheduling and Dispatching",
        description:
          "Efficient fleet management and scheduling keeps buses on time and responsive during peak hours, with real-time monitoring of vehicle location and status.",
      },
      {
        title: "Zu Mobile App",
        description:
          "A ticket and digital mobile wallet experience designed to support cashless and contactless journeys with routes, fares, and maps.",
      },
      {
        title: "Integrated Security",
        description:
          "Multi-layer security with intelligent video analytics and monitoring through a control room helps detect anomalies and deter criminal activity.",
      },
    ],
    additionalNotes: [
      "Additionally, there are priority facilities for women, the elderly, and people with disabilities. The entire line has 100% step-free, universal accessibility and is designed to be safe and accessible, with separate waiting rooms, bathrooms, and ticket counters for women.",
      "Zu Peshawar is expected to lead to a 31,000-ton-equivalent reduction in carbon footprint per year.",
      "As a means to provide last-kilometer connectivity, a bicycle-sharing system was included: thirty bicycle-sharing stations with capacity for 300 bicycles and associated parking docks were implemented as an integrated component of the system.",
      "Zu Bicycles run on zero emissions, supporting broader sustainability goals.",
    ],
  },
];
