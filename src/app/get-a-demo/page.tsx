import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Get a Demo — TRVERSE",
  description:
    "Request a TRVERSE demo configured for your network. See AFC, ITS, fleet management, and real-time operations in a live session with our solutions engineers.",
};

export default function GetADemoPage() {
  return (
    <main>
      <Nav />
      <InsightsHero
        badge="Get a demo"
        title={
          <>
            See TRVERSE in operation,
            <br />
            <span style={{ color: "var(--accent)" }}>with your network&apos;s data.</span>
          </>
        }
        description="Every TRVERSE demonstration is configured for your network's context. Tell us about your city and your current challenges, and we will show you exactly how the platform addresses them."
        backgroundImageSrc="/assets/contact-banner-v2.webp"
      />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Get a Demo" }]} />
      <ContactPageContent />
      <Footer />
    </main>
  );
}
