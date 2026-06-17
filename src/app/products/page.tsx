import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import ProductsContent from "@/components/products/ProductsContent";

export const metadata: Metadata = {
  title: "Products — TRVERSE",
  description:
    "TRVERSE software products for modern transit: payments, fleet and tracking, scheduling, control, passenger information, analytics, ridership insights, operations, plus integrated devices.",
};

export default function ProductsPage() {
  return (
    <main>
      <Nav />
      <InsightsHero
        badge="Products"
        title={
          <>
            Products built for
            <br />
            <span style={{ color: "var(--accent)" }}>modern transit systems</span>
          </>
        }
        description="TRVERSE products are designed as defined systems that support payments, operations, and passenger services. Each product solves a specific part of transit operations while working as part of a connected environment."
        backgroundImageSrc="/assets/case-studies-banner.webp"
        primaryCta={{ label: "Explore our products", href: "#software-products" }}
        secondaryCta={{ label: "Get a Demo", href: "/get-a-demo" }}
      />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
      <ProductsContent />
      <Footer />
    </main>
  );
}
