import { siteConfig } from "@/data/site";
import { Icon } from "./Icon";

type Variant = "footer" | "boxed" | "stacked";

type Props = { variant?: Variant; className?: string };

const items = [
  {
    key: "phone",
    label: siteConfig.phone.display,
    ariaLabel: `Sună la ${siteConfig.phone.display}`,
    href: `tel:${siteConfig.phone.e164}`,
    icon: "phone" as const,
    iconSize: 25,
    external: false,
  },
  {
    key: "instagram",
    label: "Instagram",
    ariaLabel: "Instagram (se deschide într-o filă nouă)",
    href: siteConfig.social.instagram,
    icon: "instagram" as const,
    iconSize: 32,
    external: true,
  },
  {
    key: "facebook",
    label: "Facebook",
    ariaLabel: "Facebook (se deschide într-o filă nouă)",
    href: siteConfig.social.facebook,
    icon: "facebook" as const,
    iconSize: 32,
    external: true,
  },
];

/** Phone / Instagram / Facebook links. "boxed" = contact section, "footer" = footer column. */
export function ContactLinks({ variant = "boxed", className = "" }: Props) {
  const ordered = variant === "footer" ? [items[0], items[2], items[1]] : items;

  const listClass =
    variant === "footer"
      ? "flex flex-col gap-[15px]"
      : variant === "stacked"
        ? "flex flex-col gap-5"
        : "flex flex-col gap-5 md:flex-row md:flex-wrap md:gap-[30px]";

  const linkClass =
    variant === "footer"
      ? "flex min-h-8 items-center gap-[5px] text-[16px] leading-[1.5] text-footer-text transition-colors hover:text-cream"
      : "flex h-[50px] w-[170px] md:h-[45px] items-center justify-center gap-[5px] border border-body px-[10px] text-[16px] leading-[1.5] text-body transition-shadow duration-200 hover:shadow-inset-soft";

  return (
    <ul className={`${listClass} ${className}`}>
      {ordered.map((item) => (
        <li key={item.key}>
          <a
            href={item.href}
            aria-label={item.ariaLabel}
            className={linkClass}
            {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <Icon name={item.icon} size={item.iconSize} />
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
