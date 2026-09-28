"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import type { PortfolioPhoto } from "@/data/portfolio";
import { Lightbox } from "./Lightbox";

type Props = { photos: PortfolioPhoto[] };

/**
 * Phone & tablet (< 1024px): 2 equal columns; a `mobileFull` photo spans both, so there are never gaps.
 * Laptop / desktop (≥ 1024px): the design grid — 3 columns, 376px rows, 30px gaps, `wide` photos span 2 columns.
 * Tapping / clicking a photo opens the full-screen Lightbox.
 */
export function PortfolioGrid({ photos }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);

  const close = useCallback(() => {
    setOpen((current) => {
      if (current !== null) {
        // Return focus to the photo that was last shown, without scrolling the page.
        const el = triggers.current[current];
        window.setTimeout(() => el?.focus({ preventScroll: true }), 0);
      }
      return null;
    });
  }, []);

  return (
    <>
      <ul className="grid grid-cols-2 gap-[10px] sm:gap-4 lg:grid-cols-3 lg:gap-[30px]">
        {photos.map((photo, i) => (
          <li
            key={photo.src}
            className={[
              "relative overflow-hidden bg-[#EFE3D6]",
              photo.mobileFull ? "col-span-2 aspect-[16/9] lg:col-span-1" : "aspect-[4/5]",
              "lg:aspect-auto lg:h-[376px]",
              photo.wide ? "lg:col-span-2" : "",
            ].join(" ")}
          >
            <button
              ref={(el) => {
                triggers.current[i] = el;
              }}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Deschide poza ${i + 1} din ${photos.length}: ${photo.alt}`}
              className="absolute inset-0 block h-full w-full cursor-zoom-in focus-visible:outline-offset-[-3px]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={
                  photo.wide
                    ? "(min-width: 1280px) 770px, (min-width: 1024px) 66vw, 50vw"
                    : photo.mobileFull
                      ? "(min-width: 1280px) 370px, (min-width: 1024px) 33vw, 100vw"
                      : "(min-width: 1280px) 370px, (min-width: 1024px) 33vw, 50vw"
                }
                priority={i < 4}
                placeholder="blur"
                blurDataURL={photo.blur}
                className="object-cover"
              />
            </button>
          </li>
        ))}
      </ul>

      <Lightbox photos={photos} index={open} onIndexChange={setOpen} onClose={close} />
    </>
  );
}
