import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description: "Contact TRVERSE or request a demo for your transit network.",
  path: "/contact",
  noIndex: true,
});

export default function ContactPage() {
  redirect("/get-a-demo");
}
