import { cancellationPolicy } from "@/data/care";
import { BookingButton } from "@/components/booking/BookingButton";
import { Section } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function TimePolicy() {
  return (
    <Section id="politica-programari" labelledBy="politica-title">
      <div className="flex flex-col items-center gap-[20px] text-center md:gap-10">
        <h2 id="politica-title" className="h2">
          Respectul
          <br />
          pentru <span className="script">timp</span>
        </h2>
        <div className="flex flex-col items-center gap-[10px] text-body-dark">
          <p className="max-w-[552px]">
            Timpul tău este prețios, iar al meu la fel. De aceea, te rog, să respecți ora programării și să anunți din
            timp dacă nu mai poți ajunge.
          </p>
          <p className="font-medium md:font-normal">Ce se întâmplă când anulezi din scurt sau nu anunți că nu ajungi?</p>
        </div>
      </div>

      <ul className="mt-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[30px]">
        {cancellationPolicy.map((item, i) => (
          <li
            key={item.title}
            className={[
              "flex flex-col gap-6 border-line px-3 py-6 lg:h-[300px] lg:gap-[47px]",
              i < 3 ? "border-b" : "",
              i < 2 ? "sm:border-b" : "sm:border-b-0",
              i % 2 === 0 ? "sm:border-r" : "",
              "lg:border-b-0",
              i < 3 ? "lg:border-r" : "lg:border-r-0",
            ].join(" ")}
          >
            <Icon name={item.icon} size={52} className="text-body-dark" />
            <div className="flex flex-col gap-[10px] md:gap-[15px]">
              <h3 className="h3 uppercase">{item.title}</h3>
              <p className="text-body-dark">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-[25px] flex flex-col items-center gap-5 text-center md:mt-[30px]">
        <p className="max-w-[384px]">Îți mulțumesc că apreciezi timpul meu la fel de mult cum apreciez și eu timpul tău!</p>
        <BookingButton className="w-full max-w-[270px] md:w-[270px]">
          Programează-te
        </BookingButton>
      </div>
    </Section>
  );
}
