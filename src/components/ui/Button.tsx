import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex min-h-[49px] items-center justify-center px-7 py-3 text-center font-sans text-btn font-medium " +
  "transition-[background-color,box-shadow,color] duration-200 ease-out focus-visible:outline-offset-4";

const variants: Record<Variant, string> = {
  // Primary: fill darkens by ~3-4 shades on hover.
  primary: "bg-accent text-cream hover:bg-accent-hover active:bg-accent-hover",
  // Secondary: outlined, soft inner shadow on hover.
  secondary: "border border-ink text-ink hover:shadow-inset-soft active:shadow-inset-soft",
};

export function buttonClasses(variant: Variant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`.trim();
}

type ButtonLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  variant?: Variant;
  children: ReactNode;
};

/**
 * Button styled link. Internal routes use next/link (prefetch + client navigation);
 * tel:, mailto: and external URLs use a plain anchor.
 */
export function ButtonLink({ href, variant = "primary", className = "", children, ...rest }: ButtonLinkProps) {
  const classes = buttonClasses(variant, className);
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const isHttp = href.startsWith("http");
  return (
    <a
      href={href}
      className={classes}
      {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
