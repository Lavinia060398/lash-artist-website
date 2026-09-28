import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ContactLinks } from "@/components/ui/ContactLinks";
import { Section } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title">
      <div className="contact-grid grid gap-[30px] md:gap-x-[30px] md:gap-y-[10px]">
        <h2 id="contact-title" className="h2 text-center [grid-area:title] md:text-left">
          Te aștept <br className="md:hidden" />
          în <span className="script">salon</span>.
        </h2>

        <div className="relative aspect-[358/382] w-full overflow-hidden [grid-area:image] md:aspect-auto md:h-[502px]">
          <Image
            src="/images/home/salon.jpg"
            alt="Salonul Eyelash by Lavinia din Centrul Minerva, Timișoara: pat de tratament și lampă"
            fill
            sizes="(min-width: 1024px) 470px, (min-width: 768px) 40vw, 100vw"
            className="object-cover object-bottom"
          />
        </div>

        <div className="flex w-full flex-col [grid-area:info] md:max-w-[572px]">
          <div className="flex flex-col gap-5 md:min-h-[432px] md:gap-[30px]">
            <div className="order-1 flex flex-col gap-5">
              <h3 className="font-sans text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink md:text-[21px]">
                Program
              </h3>
              <dl className="flex flex-col gap-5">
                {siteConfig.hours.map((h) => (
                  <div key={h.label} className="flex flex-col gap-[2px]">
                    <dt className="font-sans text-[18px] font-medium leading-[1.3] tracking-[-0.01em] text-ink">{h.label}</dt>
                    <dd>{h.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="order-3 flex flex-col gap-5 md:order-2 md:gap-[15px]">
              <h3 className="font-sans text-[18px] font-medium leading-[1.3] tracking-[-0.01em] text-ink">
                Pentru programări
              </h3>
              <ContactLinks />
            </div>

            <div className="order-2 flex flex-col gap-[5px] md:order-3 md:mt-auto md:gap-[2px]">
              <h3 className="text-ink">Adresa:</h3>
              <address className="flex items-start gap-[5px] not-italic">
                <Icon name="map-pin" size={20} className="h-[27px] w-5 shrink-0" />
                <a href={siteConfig.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink hover:underline">
                  {siteConfig.address.city}, str. Ștefan cel Mare, nr. 56A {siteConfig.address.building}
                </a>
              </address>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
