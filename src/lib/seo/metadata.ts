import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  imagePath?: string;
  type?: "website" | "article";
  absoluteTitle?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
  imagePath = "/opengraph-image",
  type = "website",
  absoluteTitle = false,
}: BuildMetadataInput): Metadata {
  const url = siteUrl(path);
  const imageUrl = siteUrl(imagePath);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: "Vimal Thapliyal",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
