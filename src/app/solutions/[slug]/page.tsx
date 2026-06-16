import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
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

  return (
    <main>
      <Nav />
      <InsightsHero
        badge={`${doc.productLine} • ${doc.eyebrowCategory}`}
        title={doc.heroTagline}
        description={doc.heroIntro}
        backgroundImageSrc={doc.heroBackgroundImage}
        primaryCta={doc.primaryCta ?? { label: "Contact us", href: "/contact" }}
        secondaryCta={doc.secondaryCta ?? { label: "All solutions", href: "/solutions" }}
      />
      <SolutionLandingContent doc={doc} />
      <Footer />
    </main>
  );
}
