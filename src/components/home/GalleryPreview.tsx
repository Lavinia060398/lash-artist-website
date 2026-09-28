import Image from "next/image";
import { buttonClasses } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import Link from "next/link";

const photos = [
  { src: "/images/home/galerie-1.jpg", alt: "Extensii de gene volum, văzute de sus, cu patch sub ochi", wide: true },
  { src: "/images/home/galerie-2.jpg", alt: "Extensii de gene cu volum, fotografiate din profil", wide: false },
  { src: "/images/home/galerie-3.jpg", alt: "Ochi verde cu extensii de gene dense și curbate", wide: false },
  { src: "/images/home/galerie-4.jpg", alt: "Extensii de gene volum pe ochi verde, prim-plan", wide: false },
];

export function GalleryPreview() {
  return (
    <Section id="galerie" labelledBy="galerie-title">
      <h2 id="galerie-title" className="h2 text-center">
        Detalii care fac
        <br />
        <span className="script">diferența</span>
      </h2>

      <div className="mt-[30px] grid grid-cols-2 gap-5 md:mt-10 md:grid-cols-3 md:gap-[30px]">
        {photos.map((p, i) => (
          <div
            key={p.src}
            className={`relative overflow-hidden ${
              p.wide ? "col-span-2 aspect-[358/187] md:aspect-auto md:h-[400px]" : "aspect-[169/182] md:aspect-auto md:h-[400px]"
            }`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes={p.wide ? "(min-width: 1280px) 770px, (min-width: 768px) 66vw, 100vw" : "(min-width: 1280px) 370px, (min-width: 768px) 33vw, 50vw"}
              className="object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className="flex items-end">
          <Link href="/portofoliu" className={buttonClasses("secondary", "w-full gap-2 px-3")}>
            Portofoliu
            <svg
              aria-hidden
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12h16M14 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </Section>
  );
}
