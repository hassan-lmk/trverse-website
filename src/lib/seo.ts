import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const DEFAULT_OG_IMAGE = "/assets/about-hero-banner.webp";
export const DEFAULT_DESCRIPTION =
  "TRVERSE delivers automated fare collection, intelligent transport systems, fleet management, and AI monitoring for mass transit networks worldwide.";

type PageMetadataInput = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: imageUrl, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function truncateMetaTitle(title: string, maxLength = 55) {
  if (title.length <= maxLength) return title;
  const trimmed = title.slice(0, maxLength).replace(/\s+\S*$/, "");
  return trimmed.endsWith("…") ? trimmed : `${trimmed}…`;
}
