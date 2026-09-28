import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  // Preview deployments on *.vercel.app must not be indexed; only production is.
  const isProduction = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true;
  return {
    rules: isProduction ? [{ userAgent: "*", allow: "/" }] : [{ userAgent: "*", disallow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
