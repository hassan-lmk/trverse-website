import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageH1 from "@/components/seo/PageH1";
import JsonLd from "@/components/seo/JsonLd";
import SolutionLandingContent from "@/components/solutions/SolutionLandingContent";
import {
  getSolutionLanding,
  getSolutionLandingSlugs,
} from "@/data/solutionLandings";
import { breadcrumbJsonLd } from "@/lib/seo-jsonld";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getSolutionLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getSolutionLanding(slug);
  if (!doc) return buildPageMetadata({ title: "Solution", path: "/solutions" });

  return buildPageMetadata({
    title: doc.eyebrowCategory,
    description: doc.metaDescription,
    path: `/solutions/${slug}`,
    image: doc.heroBackgroundImage,
  });
}

export default async function SolutionLandingPage({ params }: Props) {
  const { slug } = await params;
  const doc = getSolutionLanding(slug);
  if (!doc) notFound();

  return (
    <main>
      <PageH1>{doc.eyebrowCategory}</PageH1>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: doc.eyebrowCategory, path: `/solutions/${slug}` },
        ])}
      />
      <Nav />
      <InsightsHero
        badge={doc.eyebrowCategory}
        titleAs="p"
        title={doc.heroTagline}
        description={doc.heroIntro}
        backgroundImageSrc={doc.heroBackgroundImage}
        backgroundImageAlt={`${doc.eyebrowCategory} solution overview`}
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
