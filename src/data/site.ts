/**
 * Central site configuration. Every contact link, social URL and CTA destination
 * is defined here once, so changing a value updates the whole website.
 */

export const siteConfig = {
  name: "Eyelash by Lavinia",
  shortName: "Eyelash by Lavinia",
  owner: "Lavinia",
  /** Production domain. Set NEXT_PUBLIC_SITE_URL in Vercel once the .ro domain is connected. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://eyelashbylavinia.ro").replace(/\/$/, ""),
  locale: "ro_RO",
  description:
    "Extensii de gene, laminare gene și sprâncene și cursuri pentru lash artiști în Timișoara. Trainer certificat cu 10 ani de experiență.",
  phone: {
    display: "0753703289",
    e164: "+40753703289",
  },
  social: {
    instagram: "https://www.instagram.com/eyelashes_eyebrows_by_lavinia/",
    facebook: "https://www.facebook.com/share/19U64nEL9T/",
  },
  address: {
    city: "Timișoara",
    street: "Str. Ștefan cel Mare, nr. 56A",
    building: "Centrul Minerva",
    region: "Timiș",
    postalCode: "",
    country: "RO",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Str.+%C8%98tefan+cel+Mare+56A+Centrul+Minerva+Timi%C8%99oara",
  },
  hours: [
    { label: "Luni – Vineri", value: "10:00 – 20:00", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "20:00" },
    { label: "Sâmbătă", value: "09:00 – 15:00", days: ["Saturday"], opens: "09:00", closes: "15:00" },
    { label: "Duminică", value: "Închis", days: [] as string[], opens: null, closes: null },
  ],
} as const;

/** Fallback link for every booking button when JavaScript is off: call the salon. */
export const phoneHref = `tel:${siteConfig.phone.e164}`;

/** WhatsApp chat link with a pre-filled message. */
export function whatsappHref(message: string) {
  return `https://wa.me/${siteConfig.phone.e164.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

export const bookingMessages = {
  salon: "Bună, Lavinia! Aș dori să fac o programare.",
  course: (title: string) => `Bună, Lavinia! Aș dori să rezerv un loc la ${title}.`,
};

export const navLinks = [
  { label: "Servicii", href: "/#servicii" },
  { label: "Galerie", href: "/portofoliu" },
  { label: "Cursuri", href: "/#cursuri" },
] as const;

export const footerLinks = [
  { label: "Cursuri", href: "/#cursuri" },
  { label: "Despre mine", href: "/#despre" },
  { label: "Galerie", href: "/portofoliu" },
] as const;

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
