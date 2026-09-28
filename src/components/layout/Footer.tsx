import Link from "next/link";
import { footerLinks } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ContactLinks } from "@/components/ui/ContactLinks";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-accent text-footer-text">
      <Container className="relative pb-6 pt-14 md:pb-[18px] md:pt-[100px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-[101px]">
            <nav aria-labelledby="footer-servicii" className="w-[149px]">
              <h2 id="footer-servicii" className="font-sans text-[20px] font-medium leading-[1.3] tracking-[-0.01em] text-cream">
                Servicii
              </h2>
              <ul className="mt-5 flex flex-col gap-[15px] text-[16px] font-medium leading-[1.3] md:text-[18px]">
                {footerLinks.map((link) => (
                  <li key={link.href} className="flex min-h-8 items-center">
                    <Link href={link.href} className="transition-colors hover:text-cream hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="font-sans text-[20px] font-medium leading-[1.3] tracking-[-0.01em] text-cream">Contact</h2>
              <ContactLinks variant="footer" className="mt-[18px]" />
            </div>
          </div>

          <div
            aria-hidden
            className="footer-logo mx-auto h-[150px] w-[300px] max-w-full shrink-0 bg-logo-tint opacity-50 md:h-[190px] md:w-[380px] lg:mx-0 lg:h-[219px] lg:w-[438px]"
          />
        </div>

        <p className="mt-12 text-center font-serif text-[16px] leading-none tracking-[-0.02em] text-footer-muted md:mt-[74px]">
          <span className="text-[18px]">©</span>
          {year}. Toate drepturile sunt rezervate
        </p>
      </Container>
    </footer>
  );
}
