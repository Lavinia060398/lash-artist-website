import { includedInPrice, services } from "@/data/services";
import { BookingButton } from "@/components/booking/BookingButton";
import { Section } from "@/components/ui/Container";

export function Services() {
  return (
    <Section id="servicii" labelledBy="servicii-title">
      <h2 id="servicii-title" className="h2 text-center">
        Alege stilul
        <br />
        care te <span className="script">reprezintă</span>.
      </h2>

      {/* Phone: name + price on one line, variants, description, big number bottom-right.
          Tablet/desktop: number | name · variants / description | price (see .service-item in globals.css). */}
      <ol className="mt-[30px] md:mt-10 md:flex md:flex-col md:gap-5">
        {services.map((service, i) => (
          <li
            key={service.name}
            className={`service-item border-b border-line pt-3 md:px-[18px] md:py-5 ${
              service.description ? "pb-2" : "pb-[62px]" /* no description: keep room for the number */
            }`}
          >
            <h3
              className={`[grid-area:name] ${service.variants ? "md:pr-[8.5px]" : "md:[grid-column:2/4]"} font-sans text-[18px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink md:self-center md:text-[22px] md:uppercase`}
            >
              {service.name}
            </h3>
            <p className="[grid-area:price] self-start font-sans text-[18px] font-semibold leading-[1.3] tracking-[-0.01em] pr-1 text-accent md:self-center md:pr-0 md:text-right md:text-[28px] md:leading-[1.3]">
              {service.price} lei
            </p>
            {service.variants ? (
              <p className="[grid-area:var] mt-1 font-sans text-[16px] font-normal leading-[1.5] tracking-[-0.01em] text-body md:mt-0 md:text-[18px] md:leading-[1.3] md:self-center md:pl-[8.5px] md:font-medium md:uppercase">
                {service.variants}
              </p>
            ) : null}
            {service.description ? (
              <p className="[grid-area:desc] mt-3 pr-[100px] text-body md:mt-0 md:pr-0 md:text-base">{service.description}</p>
            ) : null}
            <span
              aria-hidden
              className="absolute bottom-[10px] right-[3px] font-script text-[96px] leading-[0.6] tracking-[-0.01em] text-line/60 md:static md:w-[84px] md:[grid-area:num] md:self-center md:justify-self-start md:text-[100px] md:text-line"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-[25px] flex flex-col items-center gap-5 md:mt-10 md:gap-[30px]">
        <div className="flex flex-col items-center gap-[10px] md:gap-[15px]">
          <h3 className="text-center font-sans text-[22px] font-semibold uppercase leading-[1.3] tracking-[-0.01em] text-ink">
            Inclus în preț
          </h3>
          <ul className="flex flex-col items-center gap-[3px] text-center">
            {includedInPrice.map((item) => (
              <li key={item} className="flex items-start gap-[10px]">
                <span aria-hidden className="mt-[7px] size-[10px] shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <BookingButton>Programează-te</BookingButton>
      </div>
    </Section>
  );
}
