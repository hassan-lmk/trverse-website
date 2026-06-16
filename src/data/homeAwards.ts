export type HomeAward = {
  logo: string;
  logoAlt: string;
  title: string;
  subtitle: string;
  logoSize?: "default" | "large";
};

export const homeAwards: HomeAward[] = [
  {
    logo: "/awards/1.png",
    logoAlt: "Transport Ticketing Global 2022",
    title: "Transport Ticketing Global 2022",
    subtitle: "Best Smart Ticketing Programme (200K+ journeys)",
  },
  {
    logo: "/awards/3.png",
    logoAlt: "Decarbonising Transport Awards 2026",
    title: "Decarbonising Transport Awards 2026",
    subtitle: "Finalist, Best Behaviour Change & Public Engagement",
    logoSize: "large",
  },
  {
    logo: "/awards/5.png",
    logoAlt: "P@SHA ICT Awards 2022",
    title: "P@SHA ICT Awards 2022",
    subtitle: "Winner, three categories",
  },
];
