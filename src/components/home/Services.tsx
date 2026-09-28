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

      <ol className="mt-[30px] md:mt-10 md:flex md:flex-col md:gap-5">
        {services.map((service, i) => (
          <li
            key={service.name}
            className="flex items-center gap-4 border-b border-line py-5 md:gap-10 md:px-[18px]"
          >
            <span
              aria-hidden
              className="w-[52px] shrink-0 font-script text-[64px] leading-[0.6] tracking-[-0.01em] text-line md:w-[84px] md:text-[100px]"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-2 md:flex-row md:items-center md:gap-[30px]">
              <div className="flex min-w-0 flex-1 flex-col gap-1 md:min-h-[65px] md:justify-between md:gap-2">
                <div className="flex flex-col gap-1 uppercase md:flex-row md:items-center md:gap-[17px]">
                  <h3 className="flex-1 font-sans text-[18px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink md:text-[22px]">
                    {service.name}
                  </h3>
                  {service.variants ? (
                    <p className="flex-1 font-sans text-[16px] font-medium leading-[1.3] tracking-[-0.01em] text-body md:text-[18px]">
                      {service.variants}
                    </p>
                  ) : null}
                </div>
                {service.description ? <p className="text-[15px] md:text-base">{service.description}</p> : null}
              </div>
              <p className="shrink-0 font-sans text-[22px] font-semibold leading-[1.3] tracking-[-0.01em] text-accent md:text-right md:text-[28px]">
                {service.price} lei
              </p>
            </div>
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
