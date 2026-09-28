import Image from "next/image";
import { siteConfig } from "@/data/site";
import { BookingButton } from "@/components/booking/BookingButton";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative mb-10 overflow-hidden pb-[22px] md:mb-[50px] md:pb-10 lg:pb-0">
      <Container className="relative pt-[90px] md:pt-[60px]">
        <div className="hero-stage relative">
          {/* Portrait sits above the giant headline, as in the design. */}
          <div className="hero-portrait pointer-events-none absolute z-10">
            <Image
              src="/images/home/hero-lavinia.png"
              alt="Lavinia, lash artist, ținând o pensetă pentru extensii de gene"
              fill
              priority
              sizes="(min-width: 1280px) 598px, (min-width: 1024px) 51vw, (min-width: 480px) 60vw, 90vw"
              className="object-contain object-bottom"
            />
          </div>

          <div className="hero-copy relative">
            <h1 id="hero-title" className="font-serif font-medium text-ink">
              <span className="hero-word block">Privirea</span>
              <span className="hero-tagline block">
                <span className="hero-tagline-serif">care te</span>{" "}
                <span className="hero-tagline-script font-script font-normal">definește</span>
              </span>
            </h1>
          </div>

          <div className="relative z-20 lg:mt-5 lg:max-w-[min(435px,48%)]">
            <hr className="-mx-4 mb-[22px] border-line md:-mx-8 lg:hidden" />
            <p className="mx-auto text-base leading-[1.5] text-body sm:max-w-[440px] sm:text-center lg:mx-0 lg:max-w-none lg:text-left">
              Tehnica și personalizarea fiecărui set sunt adaptate fizionomiei și stilului individual, pentru un rezultat
              elegant, armonios și impecabil.
            </p>
            <div className="mt-5 flex justify-center lg:mt-[30px] lg:justify-start">
              <BookingButton>Programează-te</BookingButton>
            </div>
          </div>

          <address className="relative z-20 mt-[60px] hidden gap-[5px] not-italic text-body lg:flex">
            <Icon name="map-pin" size={12} className="mt-[5px] h-4 w-3 shrink-0" />
            <a href={siteConfig.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              <span className="block">{siteConfig.address.city}</span>
              <span className="block">
                {siteConfig.address.street} {siteConfig.address.building}
              </span>
            </a>
          </address>
        </div>
      </Container>
    </section>
  );
}
