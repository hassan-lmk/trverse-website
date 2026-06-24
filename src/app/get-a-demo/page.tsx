import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import PageH1 from "@/components/seo/PageH1";
import JsonLd from "@/components/seo/JsonLd";
import ContactPageContent from "@/components/contact/ContactPageContent";
import { breadcrumbJsonLd } from "@/lib/seo-jsonld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Get a demo",
  description:
    "Request a TRVERSE demo configured for your network. See AFC, ITS, fleet management, and real-time operations in a live session with our solutions engineers.",
  path: "/get-a-demo",
  image: "/assets/contact-banner-v2.webp",
});

export default function GetADemoPage() {
  return (
    <main>
      <PageH1>Get a demo</PageH1>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Get a demo", path: "/get-a-demo" },
        ])}
      />
      <Nav />
      <InsightsHero
        badge="Get a demo"
        titleAs="p"
        title={
          <>
            See TRVERSE in operation,
            <br />
            <span style={{ color: "var(--accent)" }}>with your network&apos;s data.</span>
          </>
        }
        description="A TRVERSE demo is not a generic walkthrough. Bring your network, your ridership numbers, and your hardest operational problems, and we will show you exactly what the platform can do with them."
        backgroundImageSrc="/assets/contact-banner-v2.webp"
        backgroundImageAlt="TRVERSE demo request"
      />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Get a demo" }]} />
      <ContactPageContent />
      <Footer />
    </main>
  );
}
