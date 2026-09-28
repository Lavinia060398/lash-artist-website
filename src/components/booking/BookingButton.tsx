"use client";

import type { MouseEvent, ReactNode } from "react";
import { phoneHref } from "@/data/site";
import { buttonClasses } from "@/components/ui/Button";

export const BOOKING_EVENT = "booking:open";
export type BookingDetail = { course?: string };

type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  /** Course title, used for the dialog heading and the pre-filled WhatsApp message. */
  course?: string;
  onOpen?: () => void;
};

/**
 * Every "Programează-te" / "Rezervă-ți locul" button.
 * Opens the booking dialog (phone + WhatsApp). Without JavaScript it is a plain tel: link.
 */
export function BookingButton({ children, variant = "primary", className = "", course, onOpen }: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onOpen?.();
    window.dispatchEvent(new CustomEvent<BookingDetail>(BOOKING_EVENT, { detail: { course } }));
  };

  return (
    <a href={phoneHref} onClick={handleClick} aria-haspopup="dialog" data-course={course} className={buttonClasses(variant, className)}>
      {children}
    </a>
  );
}
