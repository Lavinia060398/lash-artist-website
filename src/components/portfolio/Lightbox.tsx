"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type TransitionEvent } from "react";
import type { PortfolioPhoto } from "@/data/portfolio";

type Props = {
  photos: PortfolioPhoto[];
  /** Index of the open photo, or null when closed. */
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

/** idle: at rest · drag: follows the finger · slide: animating to next/prev · snap: animating back · reset: jump without animation */
type Phase = "idle" | "drag" | "slide" | "snap" | "reset";

const SLIDE_MS = 320;
const SNAP_MS = 220;
const SWIPE_DISTANCE = 0.18; // fraction of the viewport width that changes the photo
const SWIPE_VELOCITY = 0.45; // px/ms – a quick flick also changes the photo

/** Locks page scroll without jumping (works on iOS Safari) and restores the exact position on unlock. */
function lockScroll() {
  const y = window.scrollY;
  const body = document.body;
  const scrollbar = window.innerWidth - document.documentElement.clientWidth;
  body.style.position = "fixed";
  body.style.top = `-${y}px`;
  body.style.left = "0";
  body.style.right = "0";
  body.style.width = "100%";
  if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
  return () => {
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";
    body.style.paddingRight = "";
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto"; // no smooth-scroll animation when restoring
    window.scrollTo(0, y);
    html.style.scrollBehavior = prev;
  };
}

/**
 * Full-screen portfolio viewer.
 * Phone/tablet: swipe left → next, swipe right → previous (vertical gestures are left to the browser).
 * Desktop: ← → arrow buttons and keys, Esc or × to close.
 */
export function Lightbox({ photos, index, onIndexChange, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [dx, setDx] = useState(0);
  const gesture = useRef<{ id: number; x: number; y: number; t: number; axis: "x" | "y" | null } | null>(null);
  const pendingDir = useRef<0 | 1 | -1>(0);
  const count = photos.length;
  const open = index !== null;

  const wrap = useCallback((i: number) => ((i % count) + count) % count, [count]);
  const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Open/close the native dialog and lock the page behind it.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !open) return;
    const unlock = lockScroll();
    if (!dialog.open) dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
      unlock();
    };
  }, [open]);

  /** Start the slide animation towards the previous (-1) or next (+1) photo. */
  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null || phase === "slide") return;
      if (reducedMotion()) {
        onIndexChange(wrap(index + dir));
        setDx(0);
        setPhase("idle");
        return;
      }
      pendingDir.current = dir;
      const width = trackRef.current?.parentElement?.clientWidth ?? window.innerWidth;
      setPhase("slide");
      setDx(-dir * width);
    },
    [index, phase, onIndexChange, wrap],
  );

  // After a slide finishes: switch photo and recentre without animation, then re-enable transitions.
  const completeSlide = useCallback(() => {
    const dir = pendingDir.current;
    if (dir === 0 || index === null) return;
    pendingDir.current = 0;
    setPhase("reset");
    setDx(0);
    onIndexChange(wrap(index + dir));
  }, [index, onIndexChange, wrap]);

  const onTransitionEnd = (e: TransitionEvent) => {
    if (e.target !== e.currentTarget) return;
    if (phase === "slide") completeSlide();
    else if (phase === "snap") setPhase("idle");
  };

  // Safety net: if the browser skips transitionend (e.g. zero-distance transition), finish anyway.
  useEffect(() => {
    if (phase !== "slide") return;
    const t = window.setTimeout(completeSlide, SLIDE_MS + 120);
    return () => window.clearTimeout(t);
  }, [phase, completeSlide]);

  useEffect(() => {
    if (phase !== "snap") return;
    const t = window.setTimeout(() => setPhase((p) => (p === "snap" ? "idle" : p)), SNAP_MS + 120);
    return () => window.clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "reset") return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setPhase("idle")));
    return () => cancelAnimationFrame(id);
  }, [phase]);

  // Keyboard ← → (Esc is handled by the dialog's cancel event).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  // ---- Touch / mouse drag ----
  const onPointerDown = (e: ReactPointerEvent) => {
    if (phase === "slide" || (e.pointerType === "mouse" && e.button !== 0)) return;
    gesture.current = { id: e.pointerId, x: e.clientX, y: e.clientY, t: performance.now(), axis: null };
  };

  const onPointerMove = (e: ReactPointerEvent) => {
    const g = gesture.current;
    if (!g || g.id !== e.pointerId) return;
    const mx = e.clientX - g.x;
    const my = e.clientY - g.y;
    if (g.axis === null) {
      if (Math.abs(mx) < 8 && Math.abs(my) < 8) return;
      g.axis = Math.abs(mx) > Math.abs(my) ? "x" : "y";
      if (g.axis === "x") {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        setPhase("drag");
      }
    }
    if (g.axis === "x") setDx(mx);
  };

  const finishGesture = (e: ReactPointerEvent, cancelled = false) => {
    const g = gesture.current;
    gesture.current = null;
    if (!g || g.id !== e.pointerId || g.axis !== "x") return;
    const mx = e.clientX - g.x;
    const width = trackRef.current?.parentElement?.clientWidth ?? window.innerWidth;
    const velocity = Math.abs(mx) / Math.max(1, performance.now() - g.t);
    const passed = Math.abs(mx) > width * SWIPE_DISTANCE || (velocity > SWIPE_VELOCITY && Math.abs(mx) > 30);
    if (!cancelled && passed) {
      go(mx < 0 ? 1 : -1);
    } else {
      setPhase(mx === 0 ? "idle" : "snap");
      setDx(0);
    }
  };

  if (!open) return <dialog ref={dialogRef} className="lightbox" aria-hidden />;

  const current = index!;
  const slides = [wrap(current - 1), current, wrap(current + 1)];
  const transition =
    phase === "slide"
      ? `transform ${SLIDE_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1)`
      : phase === "snap"
        ? `transform ${SNAP_MS}ms ease-out`
        : "none";

  return (
    <dialog
      ref={dialogRef}
      aria-label="Galerie portofoliu"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      className="lightbox fixed inset-0 m-0 h-[100dvh] max-h-none w-screen max-w-none overflow-hidden bg-transparent p-0 text-cream"
    >
      <div className="flex h-full w-full flex-col">
        <header className="relative z-20 flex items-center justify-between px-4 pt-[max(10px,env(safe-area-inset-top))] md:px-8 md:pt-5">
          <p className="font-sans text-[15px] tabular-nums tracking-[0.04em] text-cream/85" aria-live="polite" aria-atomic="true">
            {current + 1} / {count}
          </p>
          <button type="button" onClick={onClose} aria-label="Închide galeria" className="lightbox-btn -mr-1 inline-flex size-12">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M7 7l18 18M25 7 7 25" />
            </svg>
          </button>
        </header>

        <div
          className="relative min-h-0 flex-1 touch-pan-y select-none overflow-hidden"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={(e) => finishGesture(e)}
          onPointerCancel={(e) => finishGesture(e, true)}
        >
          <div
            ref={trackRef}
            onTransitionEnd={onTransitionEnd}
            className="absolute inset-0 flex will-change-transform"
            style={{ transform: `translate3d(calc(-100% + ${dx}px), 0, 0)`, transition }}
          >
            {slides.map((i, pos) => {
              const photo = photos[i];
              return (
                <figure
                  key={photo.src}
                  className="relative h-full w-full shrink-0 px-3 py-3 md:px-[88px] md:py-6"
                  aria-hidden={pos !== 1}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={photo.src}
                      alt={pos === 1 ? photo.alt : ""}
                      fill
                      sizes="100vw"
                      quality={85}
                      priority={pos === 1}
                      placeholder="blur"
                      blurDataURL={photo.blur}
                      draggable={false}
                      className="pointer-events-none object-contain"
                    />
                  </div>
                </figure>
              );
            })}
          </div>
        </div>

        <p className="pb-[max(14px,env(safe-area-inset-bottom))] pt-1 text-center font-sans text-[13px] text-cream/55 md:hidden">
          Glisează stânga / dreapta
        </p>
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Poza anterioară"
        className="lightbox-btn lightbox-arrow absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 md:flex"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M15 5 8 12l7 7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Poza următoare"
        className="lightbox-btn lightbox-arrow absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 md:flex"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m9 5 7 7-7 7" />
        </svg>
      </button>
    </dialog>
  );
}
