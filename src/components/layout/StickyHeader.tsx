"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Sticky site header. It keeps its full top spacing at the top of the page; once the page scrolls,
 * the extra top padding slides away (negative `top`) and a soft shadow appears — no layout jump.
 */
export function StickyHeader({ children }: { children: ReactNode }) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const update = () => setStuck(window.scrollY > 4);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      data-stuck={stuck || undefined}
      className={`sticky top-[-8px] z-30 -mb-3 bg-cream pb-3 pt-5 transition-shadow duration-300 md:top-[-25px] md:pt-[37px] ${
        stuck ? "shadow-[0_6px_18px_-12px_rgba(52,43,40,0.35)]" : ""
      }`}
    >
      {children}
    </header>
  );
}
