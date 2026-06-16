import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Transformation from "@/components/Transformation";
import Solutions from "@/components/Solutions";
import System from "@/components/System";
import Impact from "@/components/Impact";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TRVERSE | Mass Transit AFC, ITS & AI Platform | Global Leader",
  description:
    "TRVERSE delivers end-to-end automated fare collection, intelligent transport systems, fleet management, and AI monitoring for mass transit networks worldwide. Backed by LMKR's 30-year enterprise legacy.",
  openGraph: {
    title: "TRVERSE | Mass Transit AFC, ITS & AI Platform | Global Leader",
    description:
      "TRVERSE delivers end-to-end automated fare collection, intelligent transport systems, fleet management, and AI monitoring for mass transit networks worldwide. Backed by LMKR's 30-year enterprise legacy.",
  },
};

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Transformation />
      <Solutions />
      <System />
      <Impact />
      <Insights />
      <Contact />
      <Footer />
    </main>
  );
}
