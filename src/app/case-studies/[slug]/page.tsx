import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import JsonLd from "@/components/seo/JsonLd";
import CaseStudyDetailBody from "@/components/case-studies/CaseStudyDetailBody";
import { caseStudies } from "@/data/caseStudies";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo-jsonld";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudies.find((x) => x.slug === slug);
  if (!item) return buildPageMetadata({ title: "Case study", path: "/insights" });

  return buildPageMetadata({
    title: item.title,
    description: item.summary,
    path: `/case-studies/${slug}`,
    image: item.heroImage,
    type: "article",
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = caseStudies.find((x) => x.slug === slug);
  if (!item) notFound();

  const path = `/case-studies/${slug}`;

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Case studies", path: "/insights#all-case-studies" },
            { name: item.title, path },
          ]),
          articleJsonLd({
            title: item.title,
            description: item.summary,
            path,
            image: item.heroImage,
            datePublished: new Date().toISOString().slice(0, 10),
          }),
        ]}
      />
      <Nav />
      <InsightsHero
        badge={`Case study • ${item.location}`}
        titleAs="p"
        title={
          item.headline ? (
            <span style={{ color: "#fff" }}>{item.headline}</span>
          ) : (
            <>
              <span style={{ color: "#fff" }}>{item.title}</span>
              <br />
              <span style={{ color: "var(--accent)" }}>Connected mobility</span>
            </>
          )
        }
        description={item.summary}
        backgroundImageSrc={item.heroImage}
        backgroundImageAlt={`${item.title} case study`}
        primaryCta={{ label: "Jump to story", href: "#case-study-content" }}
        secondaryCta={{ label: "All case studies", href: "/insights#all-case-studies" }}
      />

      <PageBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Case studies", href: "/insights#all-case-studies" },
          { label: item.title },
        ]}
      />

      <CaseStudyDetailBody item={item} />

      <Footer />
    </main>
  );
}
