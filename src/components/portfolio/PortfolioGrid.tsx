import Image from "next/image";
import type { PortfolioPhoto } from "@/data/portfolio";

type Props = { photos: PortfolioPhoto[] };

/**
 * Phone & tablet (< 1024px): 2 equal columns, all photos the same size (22 photos = 11 full rows, no gaps).
 * Laptop / desktop (≥ 1024px): the design grid — 3 columns, 376px rows, 30px gaps, wide photos span 2 columns.
 */
export function PortfolioGrid({ photos }: Props) {
  return (
    <ul className="grid grid-cols-2 gap-[10px] sm:gap-4 lg:grid-flow-row-dense lg:grid-cols-3 lg:gap-[30px]">
      {photos.map((photo, i) => (
        <li
          key={photo.src}
          className={`relative aspect-[4/5] overflow-hidden bg-[#EFE3D6] lg:aspect-auto lg:h-[376px] ${photo.wide ? "lg:col-span-2" : ""}`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={
              photo.wide
                ? "(min-width: 1280px) 770px, (min-width: 1024px) 66vw, 50vw"
                : "(min-width: 1280px) 370px, (min-width: 1024px) 33vw, 50vw"
            }
            priority={i < 4}
            placeholder="blur"
            blurDataURL={photo.blur}
            className="object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
