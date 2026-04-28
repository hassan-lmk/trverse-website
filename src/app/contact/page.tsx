import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us — TRVERSE",
  description: "Contact TRVERSE for mobility platform inquiries, demos, and project discussions.",
};

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <InsightsHero
        badge="Contact TRVERSE"
        title={
          <>
            Let&apos;s talk about
            <br />
            <span style={{ color: "var(--accent)" }}>your network</span>
          </>
        }
        description="Reach out to the TRVERSE team to discuss smart mobility solutions, implementation planning, and platform demos."
        backgroundImageSrc="/assets/contact-banner-v2.png"
      />
      <ContactPageContent />
      <Footer />
    </main>
  );
}
