import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageH1 from "@/components/seo/PageH1";
import JsonLd from "@/components/seo/JsonLd";
import ProductsContent from "@/components/products/ProductsContent";
import { breadcrumbJsonLd } from "@/lib/seo-jsonld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Products",
  description:
    "TRVERSE software products for modern transit: payments, fleet and tracking, scheduling, control, passenger information, analytics, ridership insights, operations, plus integrated devices.",
  path: "/products",
  image: "/assets/case-studies-banner.webp",
});

export default function ProductsPage() {
  return (
    <main>
      <PageH1>Products</PageH1>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
      <Nav />
      <InsightsHero
        badge="Products"
        titleAs="p"
        title={
          <>
            Products built for
            <br />
            <span style={{ color: "var(--accent)" }}>modern transit systems</span>
          </>
        }
        description="TRVERSE products are designed as defined systems that support payments, operations, and passenger services. Each product solves a specific part of transit operations while working as part of a connected environment."
        backgroundImageSrc="/assets/case-studies-banner.webp"
        backgroundImageAlt="TRVERSE transit software and devices"
        primaryCta={{ label: "Explore our products", href: "#software-products" }}
        secondaryCta={{ label: "Get a demo", href: "/get-a-demo" }}
      />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
      <ProductsContent />
      <Footer />
    </main>
  );
}
