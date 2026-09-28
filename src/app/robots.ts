import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  // Only production is indexable. Netlify sets CONTEXT ("production" | "deploy-preview" | "branch-deploy"),
  // Vercel sets VERCEL_ENV; locally neither is set.
  const env = process.env.CONTEXT ?? process.env.VERCEL_ENV;
  const isProduction = env ? env === "production" : true;
  return {
    rules: isProduction ? [{ userAgent: "*", allow: "/" }] : [{ userAgent: "*", disallow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
