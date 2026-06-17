import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import AudienceLandingContent from "@/components/audiences/AudienceLandingContent";
import {
  getAudienceLanding,
  getAudienceLandingSlugs,
} from "@/data/audienceLandings";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAudienceLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getAudienceLanding(slug);
  if (!doc) return { title: "Who we serve — TRVERSE" };

  return {
    title: doc.metaTitle,
    description: doc.metaDescription,
  };
}

export default async function AudienceLandingPage({ params }: Props) {
  const { slug } = await params;
  const doc = getAudienceLanding(slug);
  if (!doc) notFound();

  return (
    <main>
      <Nav />
      <InsightsHero
        badge={doc.badge}
        title={doc.heroHeadline}
        description={doc.heroSubheadline}
        backgroundImageSrc={doc.heroBackgroundImage}
        primaryCta={doc.primaryCta}
      />
      <PageBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Who we serve", href: "/#about-us" },
          { label: doc.label },
        ]}
      />
      <AudienceLandingContent doc={doc} />
      <Footer />
    </main>
  );
}
