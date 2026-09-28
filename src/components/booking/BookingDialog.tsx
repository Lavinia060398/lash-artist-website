"use client";

import { useEffect, useRef, useState } from "react";
import { bookingMessages, phoneHref, siteConfig, whatsappHref } from "@/data/site";
import { buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { BOOKING_EVENT, type BookingDetail } from "./BookingButton";

/** Single booking dialog for the whole site (native <dialog>: focus trap, Esc and top layer for free). */
export function BookingDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [course, setCourse] = useState<string | undefined>();

  useEffect(() => {
    const open = (e: Event) => {
      setCourse((e as CustomEvent<BookingDetail>).detail?.course);
      const dialog = ref.current;
      if (dialog && !dialog.open) dialog.showModal();
    };
    window.addEventListener(BOOKING_EVENT, open);
    return () => window.removeEventListener(BOOKING_EVENT, open);
  }, []);

  const close = () => ref.current?.close();
  const message = course ? bookingMessages.course(course) : bookingMessages.salon;

  return (
    <dialog
      ref={ref}
      aria-labelledby="booking-title"
      aria-describedby="booking-desc"
      onClick={(e) => {
        // Click on the backdrop (outside the panel) closes the dialog.
        if (e.target === e.currentTarget) close();
      }}
      className="booking-dialog m-auto w-[calc(100%-32px)] max-w-[440px] bg-transparent p-0 text-body"
    >
      <div className="relative flex flex-col items-center gap-5 border border-line bg-cream px-5 pb-8 pt-10 text-center md:px-10">
        <button
          type="button"
          onClick={close}
          aria-label="Închide"
          className="absolute right-2 top-2 flex size-11 items-center justify-center text-ink transition-opacity hover:opacity-70"
        >
          <Icon name="close" size={26} />
        </button>

        <h2 id="booking-title" className="h2">
          {course ? (
            <>
              Rezervă-ți <span className="script">locul</span>
            </>
          ) : (
            <>
              Fă-ți o <span className="script">programare</span>
            </>
          )}
        </h2>
        <p id="booking-desc" className="max-w-[320px]">
          {course ? (
            <>
              Pentru <span className="font-medium text-ink">{course}</span>, sună-mă sau scrie-mi pe WhatsApp.
            </>
          ) : (
            "Sună-mă sau scrie-mi pe WhatsApp și stabilim împreună ora potrivită."
          )}
        </p>

        <a
          href={phoneHref}
          className="font-sans text-[28px] font-semibold leading-[1.3] tracking-[-0.01em] text-accent hover:underline md:text-[32px]"
        >
          {siteConfig.phone.display.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3")}
        </a>

        <div className="flex w-full flex-col gap-3">
          <a href={phoneHref} className={buttonClasses("primary", "w-full gap-2")}>
            <Icon name="phone" size={20} />
            Sună acum
          </a>
          <a
            href={whatsappHref(message)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses("secondary", "w-full gap-2")}
          >
            <Icon name="whatsapp" size={20} />
            Scrie pe WhatsApp
          </a>
        </div>

        <p className="text-[14px] leading-[1.5]">
          Luni – Vineri 10:00 – 20:00 · Sâmbătă 09:00 – 15:00
        </p>
      </div>
    </dialog>
  );
}
