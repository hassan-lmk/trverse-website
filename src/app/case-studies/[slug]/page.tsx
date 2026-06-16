import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import CaseStudyDetailBody from "@/components/case-studies/CaseStudyDetailBody";
import { caseStudies } from "@/data/caseStudies";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudies.find((x) => x.slug === slug);
  if (!item) return { title: "Case Study — TRVERSE" };

  return {
    title: `${item.title} — TRVERSE`,
    description: item.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = caseStudies.find((x) => x.slug === slug);
  if (!item) notFound();

  return (
    <main>
      <Nav />
      <InsightsHero
        badge={`Case study • ${item.location}`}
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
