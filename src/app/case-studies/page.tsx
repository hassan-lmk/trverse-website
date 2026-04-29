import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Case Studies — TRVERSE",
  description: "Explore TRVERSE case studies across modern transit networks.",
};

export default function CaseStudiesPage() {
  redirect("/insights#all-case-studies");
}
