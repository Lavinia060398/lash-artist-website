import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import { BookingButton } from "@/components/booking/BookingButton";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "./MobileMenu";
import { StickyHeader } from "./StickyHeader";

export function Header() {
  return (
    <StickyHeader>
      <a
        href="#continut"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-cream focus:px-4 focus:py-2 focus:text-ink"
      >
        Sari la conținut
      </a>
      <Container className="flex items-center justify-between">
        <Link href="/" aria-label={`${siteConfig.name} — pagina principală`} className="shrink-0">
          <Image
            src="/images/brand/logo.png"
            alt={siteConfig.name}
            width={102}
            height={51}
            priority
            className="h-[38px] w-auto md:h-[51px]"
          />
        </Link>

        <nav aria-label="Navigare principală" className="hidden md:block">
          <ul className="flex items-center gap-8 font-sans text-btn font-medium text-body">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="underline-offset-8 transition-colors hover:text-ink hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <BookingButton variant="secondary" className="hidden w-[211px] md:inline-flex">
          Programează-te
        </BookingButton>

        <MobileMenu />
      </Container>
    </StickyHeader>
  );
}
