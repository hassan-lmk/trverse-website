import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Case studies",
  description: "Explore TRVERSE case studies across modern transit networks.",
  path: "/case-studies",
  noIndex: true,
});

export default function CaseStudiesPage() {
  redirect("/insights#all-case-studies");
}
