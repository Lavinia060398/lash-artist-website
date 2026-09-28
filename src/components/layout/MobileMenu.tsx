"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { navLinks } from "@/data/site";
import { BookingButton } from "@/components/booking/BookingButton";
import { Icon } from "@/components/ui/Icon";

/** Mobile navigation (< 768px): hamburger button + full-width panel. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Închide meniul" : "Deschide meniul"}
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 -mr-2 flex size-11 items-center justify-center text-ink"
      >
        <Icon name={open ? "close" : "menu"} size={30} />
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="fixed inset-0 z-40 bg-cream px-4 pb-10 pt-24"
      >
        <nav aria-label="Navigare mobilă">
          <ul className="flex flex-col items-center gap-8 font-serif text-[40px] font-medium leading-none text-ink">
            <li>
              <Link href="/" onClick={close}>
                Acasă
              </Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={close}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-12 flex justify-center">
          <BookingButton onOpen={close} className="w-full max-w-[280px]">
            Programează-te
          </BookingButton>
        </div>
      </div>
    </div>
  );
}
