import type { Metadata } from "next";
import type { Course } from "@/data/courses";
import { services } from "@/data/services";
import { absoluteUrl, siteConfig } from "@/data/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Use the title as-is instead of appending the brand. */
  absoluteTitle?: boolean;
};

const defaultOgImage = "/og-image.jpg";

/** Unique title, description, canonical and Open Graph per page. */
export function pageMetadata({ title, description, path, image = defaultOgImage, absoluteTitle }: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: path,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

const businessId = `${siteConfig.url}/#business`;

/** LocalBusiness (BeautySalon) with address, hours and the service price list. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": businessId,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: absoluteUrl(defaultOgImage),
    logo: absoluteUrl("/images/brand/logo.png"),
    telephone: siteConfig.phone.e164,
    priceRange: "50–350 RON",
    currenciesAccepted: "RON",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.street}, ${siteConfig.address.building}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    hasMap: siteConfig.address.mapsUrl,
    openingHoursSpecification: siteConfig.hours
      .filter((h) => h.opens)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.days,
        opens: h.opens,
        closes: h.closes,
      })),
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook].filter((u) => !/\.com\/$/.test(u)),
    founder: { "@type": "Person", name: siteConfig.owner, jobTitle: "Lash artist și trainer certificat" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicii extensii și laminare gene",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        price: s.price,
        priceCurrency: "RON",
        itemOffered: { "@type": "Service", name: s.name, description: s.description?.replace(/\|/g, " ") },
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "ro-RO",
    publisher: { "@id": businessId },
  };
}

export function courseJsonLd(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.intro,
    url: absoluteUrl(`/cursuri/${course.slug}`),
    inLanguage: "ro",
    provider: { "@type": "Organization", "@id": businessId, name: siteConfig.name, sameAs: siteConfig.url },
    offers: {
      "@type": "Offer",
      category: "Paid",
      price: course.pricing.price,
      priceCurrency: "RON",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Onsite",
      courseWorkload: course.durationISO,
      location: {
        "@type": "Place",
        name: siteConfig.name,
        address: `${siteConfig.address.street}, ${siteConfig.address.building}, ${siteConfig.address.city}`,
      },
      instructor: { "@type": "Person", name: siteConfig.owner },
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
