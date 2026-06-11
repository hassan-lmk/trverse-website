import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsOverview from "@/components/solutions/SolutionsOverview";
import SolutionDetail from "@/components/solutions/SolutionDetail";
import SupportingSystems from "@/components/solutions/SupportingSystems";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";

export const metadata: Metadata = {
  title: "Solutions — TRVERSE",
  description:
    "Discover TRVERSE solutions: Automated Fare Collection, Intelligent Transport Systems, Advanced scheduling system, Fleet management, Micro-Mobility Integration, and AI monitoring and control.",
};

export default function SolutionsPage() {
  return (
    <main>
      <Nav />
      <SolutionsHero />
      <SolutionsOverview />
      <SolutionDetail />
      <SupportingSystems />
      <SolutionsCTA />
      <Footer />
    </main>
  );
}
