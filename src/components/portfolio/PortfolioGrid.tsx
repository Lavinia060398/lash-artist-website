"use client";

import Image from "next/image";
import { useState } from "react";
import type { PortfolioPhoto } from "@/data/portfolio";
import { Lightbox } from "./Lightbox";

type Props = { photos: PortfolioPhoto[] };

/**
 * Desktop: 3-column grid, 376px rows, 30px gaps (wide photos span 2 columns).
 * Mobile: 2 columns like the home gallery (wide = full width, others side by side).
 * Tapping a photo opens it full screen in the Lightbox.
 */
export function PortfolioGrid({ photos }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <ul className="grid grid-flow-row-dense grid-cols-2 gap-5 md:grid-cols-3 md:gap-[30px]">
        {photos.map((photo, i) => (
          <li
            key={photo.src}
            className={
              photo.wide
                ? "col-span-2 aspect-[358/187] md:aspect-auto md:h-[376px]"
                : "aspect-[169/182] md:aspect-auto md:h-[376px]"
            }
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Mărește poza: ${photo.alt}`}
              className="relative block h-full w-full cursor-zoom-in overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={
                  photo.wide
                    ? "(min-width: 1280px) 770px, (min-width: 768px) 66vw, 100vw"
                    : "(min-width: 1280px) 370px, (min-width: 768px) 33vw, 50vw"
                }
                priority={i < 2}
                className="object-cover"
              />
            </button>
          </li>
        ))}
      </ul>

      <Lightbox photos={photos} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
    </>
  );
}
