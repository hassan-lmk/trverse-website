import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageH1 from "@/components/seo/PageH1";
import JsonLd from "@/components/seo/JsonLd";
import AudienceLandingContent from "@/components/audiences/AudienceLandingContent";
import {
  getAudienceLanding,
  getAudienceLandingSlugs,
} from "@/data/audienceLandings";
import { breadcrumbJsonLd } from "@/lib/seo-jsonld";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAudienceLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getAudienceLanding(slug);
  if (!doc) return buildPageMetadata({ title: "Who we serve", path: "/#about-us" });

  return buildPageMetadata({
    title: doc.label,
    description: doc.metaDescription,
    path: `/who-we-serve/${slug}`,
    image: doc.heroBackgroundImage,
  });
}

export default async function AudienceLandingPage({ params }: Props) {
  const { slug } = await params;
  const doc = getAudienceLanding(slug);
  if (!doc) notFound();

  return (
    <main>
      <PageH1>{doc.label}</PageH1>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Who we serve", path: "/#about-us" },
          { name: doc.label, path: `/who-we-serve/${slug}` },
        ])}
      />
      <Nav />
      <InsightsHero
        badge={doc.badge}
        titleAs="p"
        title={doc.heroHeadline}
        description={doc.heroSubheadline}
        backgroundImageSrc={doc.heroBackgroundImage}
        backgroundImageAlt={`TRVERSE for ${doc.label}`}
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
