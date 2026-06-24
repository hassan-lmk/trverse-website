import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageH1 from "@/components/seo/PageH1";
import JsonLd from "@/components/seo/JsonLd";
import SolutionsOverview from "@/components/solutions/SolutionsOverview";
import SolutionDetail from "@/components/solutions/SolutionDetail";
import SupportingSystems from "@/components/solutions/SupportingSystems";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";
import { breadcrumbJsonLd } from "@/lib/seo-jsonld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Solutions",
  description:
    "Discover TRVERSE solutions: Automated Fare Collection, Intelligent Transport Systems, Advanced Scheduling, Fleet Management, Micro-Mobility Integration, and AI Monitoring and Control.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <main>
      <PageH1>Solutions</PageH1>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ])}
      />
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
