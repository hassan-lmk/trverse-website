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
  {
    slug: "lahore-metro",
    title: "Lahore Metro",
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
    slug: "multan-metro",
    title: "Multan Metro",
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
];
