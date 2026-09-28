import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { BookingButton } from "@/components/booking/BookingButton";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { portfolio } from "@/data/portfolio";
import { absoluteUrl, siteConfig } from "@/data/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portofoliu extensii de gene",
  description:
    "Portofoliu Eyelash by Lavinia: lucrări reale de extensii de gene natural, soft și mega volume și laminare, realizate în salonul din Timișoara.",
  path: "/portofoliu",
  image: portfolio[0]?.src,
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: `Portofoliu ${siteConfig.name}`,
            url: absoluteUrl("/portofoliu"),
            image: portfolio.map((p) => ({ "@type": "ImageObject", contentUrl: absoluteUrl(p.src), description: p.alt })),
          },
          breadcrumbJsonLd([
            { name: "Acasă", path: "/" },
            { name: "Portofoliu", path: "/portofoliu" },
          ]),
        ]}
      />
      <section aria-labelledby="portofoliu-title" className="pb-[60px] pt-[70px] md:pb-[100px] md:pt-[60px]">
        <Container>
          <header className="mx-auto flex max-w-[599px] flex-col items-center gap-[15px] text-center">
            <h1 id="portofoliu-title" className="font-serif text-[64px] font-semibold leading-[0.9] tracking-[-0.01em] text-ink md:text-[100px] md:leading-[0.79]">
              Portofoliu
            </h1>
            <p className="max-w-[380px]">
              O selecție de lucrări care definesc stilul meu și felul în care văd frumusețea unei priviri.
            </p>
          </header>

          <div className="mt-10 md:mt-[60px]">
            <PortfolioGrid photos={portfolio} />
          </div>

          <div className="mt-10 flex justify-center">
            <BookingButton className="w-full max-w-[369px]">
              Programează-te
            </BookingButton>
          </div>
        </Container>
      </section>
    </>
  );
}
