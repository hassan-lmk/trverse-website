import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import SolutionsOverview from "@/components/solutions/SolutionsOverview";
import SolutionDetail from "@/components/solutions/SolutionDetail";
import SupportingSystems from "@/components/solutions/SupportingSystems";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";

export const metadata: Metadata = {
  title: "Solutions — TRVERSE",
  description:
    "Discover TRVERSE solutions: Automated Fare Collection, Intelligent Transport Systems, Advanced Scheduling System, Fleet Management, Micro-Mobility Integration, and AI Monitoring and Control.",
};

export default function SolutionsPage() {
  return (
    <main>
      <Nav />
      <SolutionsHero />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Solutions" }]} />
      <SolutionsOverview />
      <SolutionDetail />
      <SupportingSystems />
      <SolutionsCTA />
      <Footer />
    </main>
  );
}
