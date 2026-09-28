import Image from "next/image";
import { BookingButton } from "@/components/booking/BookingButton";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="pb-[30px] pt-10 md:pb-[100px] md:pt-[50px]">
      <Container className="!px-0 md:!px-8">
        {/* Image and text share one grid cell: the illustration is never cropped (width-fit at every size). */}
        <div className="grid place-items-center">
          <Image
            src="/images/home/cta-gene.jpg"
            alt=""
            width={2296}
            height={878}
            sizes="(min-width: 1280px) 1148px, 100vw"
            className="h-auto w-full self-start [grid-area:1/1] sm:self-center md:max-w-[1148px]"
          />
          <div className="relative flex flex-col items-center gap-[11px] px-4 pt-[31px] text-center [grid-area:1/1] sm:pt-0">
            <h2
              id="cta-title"
              className="max-w-[270px] font-serif text-[32px] font-normal leading-none tracking-[-0.02em] text-accent sm:max-w-[420px] sm:text-[44px] lg:max-w-[658px] lg:text-[67px]"
            >
              E timpul pentru următorul tău{" "}
              <span className="font-script text-[48px] leading-[0.82] tracking-normal sm:text-[60px] lg:text-[85px]">look</span>
            </h2>
            <BookingButton className="mt-2 md:mt-0">Programează-te</BookingButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
