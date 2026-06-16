export type CaseStudy = {
  slug: string;
  title: string;
  location: string;
  summary: string;
  heroImage: string;
  /** Short factual lead-in shown above the headline (optional). */
  headline?: string;
  /** Key facts shown as a definition-style card near the top. */
  factSheet?: Array<{
    label: string;
    value: string;
  }>;
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
  /** Metric → result pairs rendered as an outcomes table (optional). */
  outcomes?: Array<{
    metric: string;
    result: string;
  }>;
  additionalNotes?: string[];
  stats: Array<{
    value: string;
    label: string;
  }>;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "masar-makkah-electric-brt",
    title: "Masar Electric BRT",
    location: "Makkah, Saudi Arabia",
    summary:
      "LMKR and TRVERSE delivered the first electric BRT network at Masar Destination in Makkah, enabling cleaner, high-capacity mobility aligned with Vision 2030.",
    heroImage: "/assets/masar.png",
    overview:
      "LMKR, through its mobility division TRVERSE, delivered the first electric Bus Rapid Transit network at Masar Destination in Makkah, Saudi Arabia. Developed in collaboration with Electromin, the system provides cleaner and more efficient urban mobility for visitors and residents while supporting Saudi Arabia's Vision 2030 objectives.\n\nThe network is designed for high passenger throughput with integrated digital operations, giving transport teams better visibility and control while improving day-to-day passenger experience.",
    challenge: [
      "Makkah requires reliable, high-capacity mobility solutions that can support large passenger volumes while maintaining service quality during peak travel periods.",
      "Conventional bus operations in dense urban corridors face pressure from emissions, congestion, and operational coordination complexity across operators and infrastructure.",
      "A modern transit program was needed to connect key destinations with a scalable, low-emission model aligned to national sustainability goals.",
    ],
    solution: [
      "LMKR and TRVERSE delivered an integrated electric BRT stack for Masar Destination, combining operational systems and passenger-facing services in one coordinated environment.",
      "The project includes automated fare collection, intelligent transport systems, fleet monitoring, and real-time passenger information to support safer, more predictable service delivery.",
      "The network includes 2 main stations and 11 stops over an approximately 4-kilometer corridor, connecting major movement nodes and enabling efficient passenger flow.",
    ],
    solutionKeyComponents: [
      "Automated fare collection across the corridor",
      "Intelligent transport systems and real-time fleet visibility",
      "Live passenger information and service updates",
      "Operational dashboards and monitoring for control teams",
    ],
    stats: [
      { value: "2", label: "Main stations" },
      { value: "11", label: "Stops" },
      { value: "4KM", label: "Electric BRT corridor" },
      { value: "125M+", label: "Projected passengers (15 years)" },
      { value: "31.5M KG", label: "Estimated CO2 reduction impact" },
      { value: "15.8M+", label: "Projected operational kilometers" },
    ],
    benefits: [
      {
        title: "Vision 2030-Aligned Infrastructure",
        description:
          "The deployment supports Saudi Arabia's transition toward cleaner, smarter, and more sustainable urban transport systems.",
      },
      {
        title: "Cleaner Mobility at Scale",
        description:
          "Electric BRT operations reduce transport-related emissions while supporting high passenger demand across key movement corridors.",
      },
      {
        title: "Operational Control & Visibility",
        description:
          "Integrated monitoring and dashboard-driven operations help teams coordinate services, track performance, and respond faster to disruptions.",
      },
      {
        title: "Regional Benchmark",
        description:
          "As the first electric BRT network of its kind in the region, Masar sets a practical reference point for future high-capacity, low-emission transit programs.",
      },
    ],
    additionalNotes: [
      "Publicly reported project figures indicate expected service to millions of travelers annually over the operating horizon.",
      "The program was developed with Electromin and positioned as a flagship sustainable mobility initiative within Masar Destination.",
    ],
  },
  {
    slug: "peshawar-brt",
    title: "Peshawar BRT",
    location: "Peshawar, Pakistan",
    summary:
      "TransPeshawar and TRVERSE built a transit network that carries over 220,000 passengers daily — with fare evasion reduced from over 22% to under 4%, and real-time operational intelligence that has set a new standard for BRT in South Asia.",
    heroImage: "/assets/BRT-Peshawar-.webp",
    headline:
      "Transforming Pakistan's most ambitious BRT into a model for the region.",
    factSheet: [
      { label: "Client", value: "TransPeshawar" },
      { label: "Location", value: "Peshawar, Pakistan" },
      { label: "Network type", value: "Bus Rapid Transit" },
      { label: "Daily ridership", value: "300,000+" },
      {
        label: "Solutions deployed",
        value:
          "AFC, ITS, Fleet Management, Bi-Cycle Sharing System, Grievance Management, Control Room, Data Center",
      },
      {
        label: "Recognition",
        value:
          "Transport Ticketing Global 2022 — Best Smart Ticketing Programme",
      },
    ],
    overview: "",
    challenge: [
      "When TransPeshawar launched Peshawar BRT, the ambition was clear: a high-capacity, modern mass transit system that would transform mobility in one of Pakistan's largest cities.",
      "The operational reality was more complex. A growing network required fare systems that could handle high passenger volumes reliably, payment options accessible to all income groups, and real-time visibility across a fleet operating across the city.",
    ],
    solution: [],
    solutionKeyComponents: [
      "Contactless AFC deployed at all stations and on-board validators",
      "Real-time vehicle tracking and GTFS-RT feeds for passenger information",
      "Intelligent Transport System for fleet monitoring and management",
      "Bi-cycle sharing system integrated with the BRT network",
      "Partnership with local banks and financial wallets for local payment infrastructure",
    ],
    outcomes: [
      {
        metric: "Fare evasion rate",
        result: "Reduced from 22%+ to under 4% in year one",
      },
      {
        metric: "Daily ridership",
        result: "300,000+ validated journeys per day",
      },
      {
        metric: "Payment options",
        result: "Contactless, mobile, and transit card — all accepted",
      },
      {
        metric: "Industry recognition",
        result: "Transport Ticketing Global 2022, Best Smart Ticketing Programme",
      },
      {
        metric: "Operational reporting",
        result:
          "Real-time KPIs accessible to operations and government stakeholders",
      },
    ],
    stats: [],
    benefits: [],
  },
  {
    slug: "lahore-metro",
    title: "Lahore MetroBus",
    location: "Pakistan",
    summary:
      "Ensuring optimum services and security of commuters across Lahore Metrobus feeder operations through integrated surveillance, monitoring, and control.",
    heroImage: "/assets/lahore-metro.png",
    overview:
      "Punjab Mass Transit Authority was tasked with creating and maintaining a safe, efficient, and comfortable urban transportation system for the masses. To tackle this challenge, the Government of Punjab partnered with LMKR to ensure feeder routes of metro bus projects in Lahore and Multan operate at optimal levels. The integrated security solution is aimed at giving commuters a secure and hassle-free journey.\n\nA centrally controlled video surveillance system not only safeguards passengers but also supports quick restoration of traffic in case of emergencies or service breakdowns.",
    challenge: [
      "With a population of more than 11 million, growing at roughly 3.5% annually, Lahore is the second-largest city in Pakistan. For a long time the public transport network was unsafe, under-developed, fragmented, poorly managed, and highly inefficient.",
      "Residents often preferred cars or motorcycles to buses, deepening congestion, harassment, accidents, and road crime. Vehicles such as wagons frequently operated without valid licenses or authorized routes and were routinely overfilled, offering little safety or comfort and pushing more commuters toward private vehicles that strained the road network.",
      "The city needed a modern mass transit system that would entice people to ride the bus rather than rely on private vehicles for daily commuting.",
    ],
    solution: [
      "Punjab Mass Transit Authority (PMA) is responsible for creating and maintaining safe, efficient, and comfortable mass transit systems across Punjab.",
      "To support feeder corridor performance, PMA partnered with LMKR to provide, maintain, and operate integrated security, communications, network monitoring, KPI monitoring, and a helpdesk for the Lahore Metrobus feeder route.",
      "The solution gives commuters a secure, hassle-free journey while monitoring operator KPIs to achieve the performance levels required across the mass transit system. Centralized oversight of feeder bus operations and infrastructure helps restore traffic quickly if service is interrupted or emergencies occur.",
    ],
    solutionKeyComponents: [
      "Centrally controlled video surveillance and security operations",
      "Integrated communications and network monitoring",
      "KPI monitoring of bus operators and corridor performance",
      "Helpdesk and incident coordination for disruptions and emergencies",
    ],
    stats: [
      { value: "180K+", label: "Daily ridership" },
      { value: "200", label: "Total buses" },
      { value: "27", label: "Total routes" },
      { value: "28.5KM", label: "Distance travelled" },
      { value: "17", label: "Feeder routes" },
    ],
    benefits: [
      {
        title: "Commuter Safety",
        description:
          "Integrated security and CCTV support a safer onboard environment and deter harassment and petty crime across feeder services.",
      },
      {
        title: "Operational Visibility",
        description:
          "Centralized monitoring of feeder fleets and KPIs keeps authorities informed when routes fall below required service levels.",
      },
      {
        title: "Faster Incident Response",
        description:
          "Coordinated surveillance and dispatch help pinpoint issues on the corridor and shorten time to restore service after disruptions.",
      },
      {
        title: "Unified Communications",
        description:
          "A connected communications and helpdesk model links control staff, operators, and field teams for clearer coordination during peaks and outages.",
      },
    ],
  },
  {
    slug: "lahore-orange-line",
    title: "Lahore Orange Line Metro Train",
    location: "Pakistan",
    summary:
      "Pakistan's first urban mass rapid transit rail system — a 27 km elevated and underground electric line across Lahore.",
    heroImage: "/assets/lahore-orange-line.jpg",
    overview:
      "The Lahore Orange Line Metro Train is Pakistan's first urban mass rapid transit rail system — a 27-kilometer elevated and underground electric line with 26 stations connecting Ali Town to Dera Gujran across Lahore. Inaugurated in October 2020 as a flagship CPEC infrastructure project, it gave the city a high-capacity alternative to road-based transport on one of its busiest corridors.\n\nTRVERSE delivered the digital payments layer for the network — automated fare collection, payment application development, and Mastercard and Visa payment certifications — supporting cashless, card-ready access across stations and gates.",
    challenge: [
      "Lahore's population and vehicle growth placed severe pressure on road networks, with commuters facing long, unpredictable journeys through congested corridors with limited reliable public transport options.",
      "Informal and fragmented bus services could not absorb rising demand, pushing more residents toward private cars and motorcycles and deepening pollution and travel-time inequality across the city.",
      "Authorities needed Pakistan's first urban rail line to move high passenger volumes efficiently while meeting modern standards for electronic fare collection and bank-card payments at station scale.",
    ],
    solution: [
      "The Punjab Mass Transit Authority developed the Orange Line as an electric rapid transit corridor with elevated and underground sections, 26 stations, and purpose-built rolling stock designed for high-frequency urban service.",
      "TRVERSE implemented automated fare collection across the line, including station gates, ticketing infrastructure, and smart validation aligned to heavy daily ridership.",
      "TRVERSE developed the payment application layer and secured Mastercard and Visa certifications, extending familiar card-based payment options alongside the metro train's fare products.",
    ],
    solutionKeyComponents: [
      "Automated fare collection",
      "Payment application development",
      "Mastercard and Visa payment certifications",
    ],
    stats: [
      { value: "27KM", label: "Electric rail corridor" },
      { value: "26", label: "Stations" },
      { value: "2020", label: "Year inaugurated" },
      { value: "Electric", label: "Zero-emission operation" },
      { value: "First", label: "Urban MRT in Pakistan" },
    ],
    benefits: [
      {
        title: "Automated Fare Collection",
        description:
          "Electronic ticketing and gate validation streamline station access and reduce cash handling across the 26-station corridor.",
      },
      {
        title: "Payment Application Development",
        description:
          "A purpose-built payments application supports metro fare products, top-ups, and commuter transactions across the rail network.",
      },
      {
        title: "Card Payment Certifications",
        description:
          "Mastercard and Visa certifications enable bank-card acceptance, giving riders trusted, secure payment options at stations and gates.",
      },
      {
        title: "Modern Rail Transit",
        description:
          "Electric rapid transit moves large passenger volumes on dedicated right-of-way, reducing reliance on private vehicles along Lahore's core corridor.",
      },
    ],
  },
  {
    slug: "multan-metro",
    title: "Multan MetroBus",
    location: "Pakistan",
    summary: "Ensuring optimum services and security of commuters across Metro Bus Multan through integrated security and monitoring.",
    heroImage: "/assets/multan-metro.jpg",
    overview:
      "Punjab Mass transit Authority (PMA) was established by the Government of Pakistan (GoP) for the planning, construction, operation and maintenance of mass transit systems in the major cities of the province of Punjab. The department is tasked to increase the access to use public transit while reducing motor vehicle pollution and traffic congestion on the road. To maintain a safe and comfortable urban transport system, GoP partnered with LMKR to start a metro bus service in Multan and provide a safe and secure environment for its riders.\n\nTrverse-provided security solution captures every angle in and around the bus, ensuring maximum visibility and increased onboard safety for the riders. The service is aimed at providing a secure and hassle-free journey to commuters. The centrally controlled video surveillance system’s design not only safeguards passengers but also helps in the quick restoration of traffic in case of an emergency or a breakdown of the service.",
    challenge: [
      "Multan is the fifth largest city in Punjab. The population of Multan has increased from 1.1 million in 1998 to more than 2 million in 2021 with an annual growth rate of 2.26%. Moreover, it is expected that with the current growth trends, the population will increase by 2.5% annually in the next 10 years. Multan is the major cultural and economic center of Southern Punjab and attracts people from all over the province for education, jobs, and labor, resulting in significant commuting across the city.",
      "For the longest time, the public transport network in Multan was only Mazda, Toyota Hiace, Suzuki vans, and rickshaws. There was no organized bus service operating in the city, and the level of service offered by these minibusses was far below acceptable standards, due to which commuters relied on private transport.",
      "Reliance on private transport resulted in an increase in transport related problems like traffic congestion, road rage, accidents, etc. This increase in these factors negatively impacted the city’s road network and deteriorated overall quality of life. To cater the problem, Multan needed a reliable, safe, and affordable public transport system.",
    ],
    solution: [
      "Punjab Masstransit Authority (PMA) is responsible for creating and maintaining safe, efficient, and comfortable Mass Transit systems in Punjab.",
      "To tackle this issue, PMA partnered with LMKR to provide, operate, and maintain integrated security, communication network, network monitoring, KPI monitoring, and helpdesk solution for Metro Bus Multan.",
      "Our solution is to provide commuters with a secure, hassle-free journey and monitor the KPIs of bus operators to achieve the required performance of the Mass Transit system. Our solution not only safeguards passengers and centralizes monitoring of the complete feeder bus operations and infrastructure but also helps in quick restoration of traffic in case of an emergency or a breakdown of the service.",
    ],
    stats: [
      { value: "100K+", label: "Daily ridership" },
      { value: "135", label: "Total buses" },
      { value: "21", label: "Stations" },
      { value: "18.5KM", label: "Corridor Length" },
      { value: "560", label: "Cameras" },
      { value: "14", label: "Feeder Routes" },
    ],
    benefits: [
      {
        title: "Commuter Safety",
        description:
          "Trverse-provided security and centralized video surveillance increases visibility and onboard safety for riders.",
      },
      {
        title: "Reliable Service Delivery",
        description:
          "Monitoring helps ensure feeder operations meet required performance levels and supports safe, comfortable transit.",
      },
      {
        title: "Faster Disruption Recovery",
        description:
          "Central oversight and incident coordination help restore traffic quickly in emergencies or breakdowns.",
      },
      {
        title: "Secure, Hassle-Free Journeys",
        description:
          "Integrated security, communications, KPI monitoring, and helpdesk support deliver a safer day-to-day commute.",
      },
    ],
  },
  {
    slug: "islamabad-rawalpindi-metrobus",
    title: "Islamabad–Rawalpindi MetroBus",
    location: "Pakistan",
    summary:
      "A vital 22.5 km link connecting the twin cities with high-capacity stations and optimized ridership flow.",
    heroImage: "/assets/rwl-metrobus.jpg",
    overview:
      "The Islamabad–Rawalpindi MetroBus Red Line is Pakistan's flagship intercity bus rapid transit corridor, running 22.5 kilometers between Pak Secretariat in Islamabad and Saddar in Rawalpindi along dedicated lanes with 24 stations. Launched in 2015, it gave millions of commuters in the twin cities a faster, more predictable alternative to informal transport and private vehicles.\n\nTRVERSE delivered the digital payments foundation for the network — automated fare collection, payment application development, and Mastercard and Visa payment certifications — enabling cashless, card-ready journeys across high-volume stations.",
    challenge: [
      "Rawalpindi and Islamabad form one of Pakistan's largest metropolitan areas, yet for years commuters moved between the twin cities through fragmented, informal transport with little reliability or fare transparency.",
      "Rising traffic congestion on the Murree Road and Islamabad Expressway corridors increased travel times and pushed more residents toward private vehicles, straining road capacity on both sides of the capital.",
      "Authorities needed a high-capacity metro bus link that could move large passenger volumes efficiently while supporting modern electronic fare collection and bank-card payments at scale.",
    ],
    solution: [
      "The Punjab Mass Transit Authority and Capital Development Authority developed the Red Line as a dedicated-lane metro bus service with 24 stations linking government, commercial, and residential hubs across Islamabad and Rawalpindi.",
      "TRVERSE implemented automated fare collection across the corridor, including station turnstiles, ticketing infrastructure, and smart-card validation aligned to high daily ridership.",
      "TRVERSE also developed the payment application layer and secured Mastercard and Visa certifications, giving commuters trusted card-based payment options alongside traditional metro bus ticketing.",
    ],
    solutionKeyComponents: [
      "Automated fare collection",
      "Payment application development",
      "Mastercard and Visa payment certifications",
    ],
    stats: [
      { value: "22.5KM", label: "Dedicated corridor" },
      { value: "24", label: "Stations" },
      { value: "68", label: "Buses" },
      { value: "2015", label: "Year inaugurated" },
      { value: "Twin cities", label: "Intercity connectivity" },
    ],
    benefits: [
      {
        title: "Automated Fare Collection",
        description:
          "Electronic ticketing and turnstile validation streamline boarding at high-capacity stations and reduce cash handling across the corridor.",
      },
      {
        title: "Payment Application Development",
        description:
          "A purpose-built payments application supports metro bus fare products, top-ups, and day-to-day commuter transactions across the network.",
      },
      {
        title: "Card Payment Certifications",
        description:
          "Mastercard and Visa certifications enable bank-card acceptance, giving riders familiar, secure payment options at stations and gates.",
      },
      {
        title: "Intercity Ridership Flow",
        description:
          "Dedicated lanes and station spacing optimize passenger throughput between Islamabad and Rawalpindi, cutting unpredictable travel times on key corridors.",
      },
    ],
  },
  {
    slug: "islamabad-orange-line",
    title: "Islamabad Orange Line MetroBus",
    location: "Pakistan",
    summary:
      "A 25.6 km dedicated metro bus corridor linking central Islamabad to the international airport with integrated fare collection, scheduling, and passenger information.",
    heroImage: "/assets/isl-orangeline.jpg",
    overview:
      "The Islamabad Orange Line MetroBus extends the Rawalpindi–Islamabad metro bus network from Faiz Ahmed Faiz Station to New Islamabad International Airport along a dedicated 25.6 km corridor. Inaugurated in April 2022, the line gives residents and travelers a fast, affordable alternative to private vehicles on one of the capital's busiest movement corridors.\n\nTRVERSE delivered the operational technology stack for the corridor — automated fare collection, intelligent transport and scheduling, control room and data center management, and real-time passenger information — giving the Capital Development Authority a unified platform to run reliable airport-linked service.",
    challenge: [
      "Islamabad's rapid growth and the relocation of the international airport outside the city core created strong demand for dependable public transport between central sectors and the airport.",
      "Traffic on the Srinagar Highway corridor was increasingly congested, with commuters relying on private cars, ride-hailing, and informal transport that offered little predictability for airport-bound travel.",
      "Authorities needed a modern metro bus line that could integrate with the existing Red Line network, support high passenger throughput at stations, and operate with the same digital standards as Pakistan's leading BRT programs.",
    ],
    solution: [
      "The Capital Development Authority developed the Orange Line as a dedicated-lane metro bus service with seven stations from Faiz Ahmed Faiz interchange through NUST, Golra Morr, and onward to Islamabad International Airport.",
      "TRVERSE provided, integrated, and commissioned the corridor's core systems — aligning automated fare collection, fleet scheduling, control room operations, and passenger information within a single operational environment.",
      "The deployment connects airport-bound riders to the wider twin-cities metro bus network while giving control teams real-time visibility over vehicles, stations, and service performance across the corridor.",
    ],
    solutionKeyComponents: [
      "Automated fare collection",
      "Intelligent transportation and scheduling system",
      "Control room and data center management",
      "Real-time passenger information management system",
    ],
    stats: [
      { value: "25.6KM", label: "Dedicated corridor" },
      { value: "7", label: "Stations" },
      { value: "15", label: "Buses at launch" },
      { value: "2022", label: "Year inaugurated" },
      { value: "Airport", label: "End-to-end connectivity" },
    ],
    benefits: [
      {
        title: "Automated Fare Collection",
        description:
          "Electronic ticketing, turnstiles, and smart-card validation streamline boarding and reduce cash handling across stations on the corridor.",
      },
      {
        title: "Intelligent Scheduling",
        description:
          "ITS-backed dispatch and scheduling keep buses on headway targets and give operators the tools to coordinate service during peaks and disruptions.",
      },
      {
        title: "Centralized Control",
        description:
          "A dedicated control room and data center environment unifies monitoring of corridor operations, infrastructure, and incident response.",
      },
      {
        title: "Real-Time Passenger Information",
        description:
          "Live service updates and station-facing information help commuters plan airport and intercity journeys with greater confidence.",
      },
    ],
  },
];
