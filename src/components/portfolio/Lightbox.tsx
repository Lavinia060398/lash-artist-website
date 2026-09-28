"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import type { PortfolioPhoto } from "@/data/portfolio";

type Props = {
  photos: PortfolioPhoto[];
  /** Index of the open photo, or null when closed. */
  index: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
};

const SWIPE_THRESHOLD = 50; // px needed to change photo
const ANIMATION_MS = 280;

/**
 * Full-screen photo viewer.
 * - Phone/tablet: swipe left/right with a finger, tap × to close.
 * - Laptop: arrow buttons, keyboard ← → and Esc; the photo can also be dragged with the mouse.
 * Native <dialog>: focus stays inside while open and returns to the photo on close.
 */
export function Lightbox({ photos, index, onChange, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [dx, setDx] = useState(0); // current drag offset in px
  const [animating, setAnimating] = useState(false);
  const drag = useRef<{ x: number; y: number; id: number; horizontal: boolean | null } | null>(null);
  const count = photos.length;
  const open = index !== null;

  const wrap = useCallback((i: number) => (i + count) % count, [count]);

  // Open / close the native dialog in sync with `index`.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }
    if (!open) document.documentElement.style.overflow = "";
  }, [open]);

  useEffect(() => () => void (document.documentElement.style.overflow = ""), []);

  const reducedMotion = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /** Slide to the previous (-1) or next (+1) photo. */
  const go = useCallback(
    (dir: -1 | 1) => {
      if (index === null || animating) return;
      if (reducedMotion()) {
        onChange(wrap(index + dir));
        setDx(0);
        return;
      }
      const width = dialogRef.current?.clientWidth ?? window.innerWidth;
      setAnimating(true);
      setDx(-dir * width);
      window.setTimeout(() => {
        onChange(wrap(index + dir));
        setAnimating(false);
        setDx(0);
      }, ANIMATION_MS);
    },
    [index, animating, onChange, wrap],
  );

  // Keyboard: ← → to navigate (Esc is handled natively by <dialog>).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (animating || (e.pointerType === "mouse" && e.button !== 0)) return;
    drag.current = { x: e.clientX, y: e.clientY, id: e.pointerId, horizontal: null };
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    const mx = e.clientX - d.x;
    const my = e.clientY - d.y;
    if (d.horizontal === null && (Math.abs(mx) > 6 || Math.abs(my) > 6)) {
      d.horizontal = Math.abs(mx) > Math.abs(my);
      if (d.horizontal) e.currentTarget.setPointerCapture(e.pointerId);
    }
    if (d.horizontal) setDx(mx);
  };

  const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    drag.current = null;
    if (!d || d.id !== e.pointerId || !d.horizontal) return;
    const mx = e.clientX - d.x;
    if (mx <= -SWIPE_THRESHOLD) go(1);
    else if (mx >= SWIPE_THRESHOLD) go(-1);
    else setDx(0);
  };

  const slides = index === null ? [] : [wrap(index - 1), index, wrap(index + 1)];
  const dragging = drag.current?.horizontal === true;

  return (
    <dialog
      ref={dialogRef}
      aria-label="Galerie foto"
      onClose={onClose}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      className="lightbox m-0 h-[100dvh] max-h-none w-screen max-w-none bg-transparent p-0 text-cream"
    >
      {open ? (
        <div className="relative flex h-full w-full flex-col">
          <div className="relative z-20 flex items-center justify-between px-4 pt-[max(12px,env(safe-area-inset-top))] md:px-8 md:pt-6">
            <p className="font-sans text-[15px] tabular-nums tracking-wide text-cream/80" aria-live="polite">
              {index! + 1} / {count}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Închide galeria"
              className="-mr-2 flex size-12 items-center justify-center text-cream transition-opacity hover:opacity-70"
            >
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M7 7l18 18M25 7 7 25" />
              </svg>
            </button>
          </div>

          {/* Track with previous / current / next photo; moves with the finger. */}
          <div
            className="relative min-h-0 flex-1 touch-none select-none overflow-hidden"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onClick={(e) => {
              // Click on the dark area around the photo closes the viewer (not after a swipe).
              if (e.target === e.currentTarget && dx === 0) onClose();
            }}
          >
            <div
              className="flex h-full w-[300%]"
              style={{
                transform: `translate3d(calc(-33.3333% + ${dx}px), 0, 0)`,
                transition: animating ? `transform ${ANIMATION_MS}ms ease-out` : dragging ? "none" : "transform 200ms ease-out",
              }}
            >
              {slides.map((i, pos) => {
                const photo = photos[i];
                return (
                  <div key={`${pos}-${photo.src}`} className="relative h-full w-1/3 px-2 py-4 md:px-24 md:py-8" aria-hidden={pos !== 1}>
                    <div className="relative h-full w-full">
                      <Image
                        src={photo.src}
                        alt={pos === 1 ? photo.alt : ""}
                        fill
                        sizes="100vw"
                        quality={85}
                        priority={pos === 1}
                        draggable={false}
                        className="pointer-events-none object-contain"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrows: laptop / desktop only (phones swipe). */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Poza anterioară"
            className="lightbox-arrow absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 md:flex"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M15 5 8 12l7 7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Poza următoare"
            className="lightbox-arrow absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 md:flex"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="m9 5 7 7-7 7" />
            </svg>
          </button>

          <p className="pb-[max(14px,env(safe-area-inset-bottom))] text-center font-sans text-[13px] text-cream/60 md:hidden">
            Glisează pentru următoarea poză
          </p>
        </div>
      ) : null}
    </dialog>
  );
}
