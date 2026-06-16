import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import SolutionLandingContent from "@/components/solutions/SolutionLandingContent";
import {
  getSolutionLanding,
  getSolutionLandingSlugs,
} from "@/data/solutionLandings";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getSolutionLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getSolutionLanding(slug);
  if (!doc) return { title: "Solution — TRVERSE" };

  return {
    title: doc.metaTitle,
    description: doc.metaDescription,
  };
}

export default async function SolutionLandingPage({ params }: Props) {
  const { slug } = await params;
  const doc = getSolutionLanding(slug);
  if (!doc) notFound();

  const normalizeForIncludes = (value: string) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim();

  const productLineNormalized = normalizeForIncludes(doc.productLine);
  const eyebrowCategoryNormalized = normalizeForIncludes(doc.eyebrowCategory);
  const badgeText =
    productLineNormalized.includes(eyebrowCategoryNormalized)
      ? doc.productLine
      : `${doc.productLine} • ${doc.eyebrowCategory}`;

  return (
    <main>
      <Nav />
      <InsightsHero
        badge={badgeText}
        title={doc.heroTagline}
        description={doc.heroIntro}
        backgroundImageSrc={doc.heroBackgroundImage}
        primaryCta={doc.primaryCta ?? { label: "Get a demo", href: "/get-a-demo" }}
        secondaryCta={doc.secondaryCta ?? { label: "All solutions", href: "/solutions" }}
      />
      <PageBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: doc.eyebrowCategory },
        ]}
      />
      <SolutionLandingContent doc={doc} />
      <Footer />
    </main>
  );
}
