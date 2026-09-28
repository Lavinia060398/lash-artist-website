import Image from "next/image";
import { aftercareHygiene, aftercareRules, aftercareWarning } from "@/data/care";
import { BulletList } from "@/components/ui/BulletList";
import { Section } from "@/components/ui/Container";

export function Aftercare() {
  return (
    <Section id="ingrijire" labelledBy="ingrijire-title">
      <h2 id="ingrijire-title" className="h2 text-center">
        Îngrijirea <span className="script">genelor</span>.
      </h2>

      <div className="mt-[30px] flex flex-col gap-[25px] md:mt-10 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <div className="relative aspect-[358/453] w-full shrink-0 overflow-hidden lg:aspect-auto lg:h-[595px] lg:w-[470px]">
          <Image
            src="/images/home/ingrijire.jpg"
            alt="Produse pentru îngrijirea extensiilor de gene: lash cleanser, pensetă, perie și prosop"
            fill
            sizes="(min-width: 1024px) 470px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex w-full flex-col gap-[15px] lg:w-[570px] lg:gap-[30px]">
          <div className="flex flex-col gap-5">
            <h3 className="h3 text-body-dark">REGULI DE BAZĂ PENTRU GENE EXTINSE</h3>
            <BulletList items={aftercareRules} tone="dark" className="!gap-[2px]" />
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="h3 text-body-dark">IGIENA GENELOR EXTINSE</h3>
            <BulletList items={aftercareHygiene} tone="dark" className="!gap-[2px]" />
            <div role="note" className="flex flex-col gap-[5px] border border-line p-3">
              <p className="h3 !text-alert">ATENȚIE !</p>
              <p className="text-ink">{aftercareWarning}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
