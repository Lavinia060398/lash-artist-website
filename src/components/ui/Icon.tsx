import type { SVGProps } from "react";

/**
 * Line icons used in the design (Iconify sets "arcticons" and "et").
 * Stroke-based, colour inherits from `currentColor`, decorative by default.
 */
export type IconName =
  | "phone"
  | "instagram"
  | "facebook"
  | "map-pin"
  | "calendar"
  | "banknote"
  | "hourglass"
  | "clock"
  | "whatsapp"
  | "menu"
  | "close";

type Props = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

/** Icons exported from the Figma design, used as CSS masks so they take the text colour. */
const maskIcons: Partial<Record<IconName, { file: string; ratio: number }>> = {
  phone: { file: "phone", ratio: 1 },
  instagram: { file: "instagram", ratio: 1 },
  facebook: { file: "facebook", ratio: 1 },
  "map-pin": { file: "pin", ratio: 27 / 20 },
  calendar: { file: "calendar", ratio: 1 },
  banknote: { file: "banknote", ratio: 1 },
  hourglass: { file: "hourglass", ratio: 1 },
  clock: { file: "clock", ratio: 1 },
};

export function Icon({ name, size = 24, ...rest }: Props) {
  const mask = maskIcons[name];
  if (mask) {
    const url = `url("/images/icons/${mask.file}.png")`;
    return (
      <span
        aria-hidden
        className={`inline-block shrink-0 bg-current ${rest.className ?? ""}`}
        style={{
          width: size,
          height: Math.round(size * mask.ratio),
          WebkitMask: `${url} center / contain no-repeat`,
          mask: `${url} center / contain no-repeat`,
        }}
      />
    );
  }

  const common = {
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
    ...rest,
  };

  switch (name) {
    case "phone":
      return (
        <svg viewBox="0 0 48 48" {...common} strokeWidth={2}>
          <path d="M17.6 6.5 12.4 5.1c-1.6-.4-3.3.3-4.1 1.8l-2.6 4.8c-.8 1.4-.8 3.2 0 4.6 7 12.6 13.7 19.3 26.2 26.2 1.4.8 3.2.8 4.6 0l4.8-2.6c1.5-.8 2.2-2.5 1.8-4.1l-1.4-5.2c-.3-1.2-1.4-2.1-2.6-2.1l-6.3-.4c-1 0-1.9.5-2.4 1.3l-1.8 2.9c-4.9-2.6-8.4-6.1-11-11l2.9-1.8c.8-.5 1.3-1.4 1.3-2.4l-.4-6.3c0-1.2-.9-2.3-2.1-2.6Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 48 48" {...common} strokeWidth={1.6}>
          <rect x="5.5" y="5.5" width="37" height="37" rx="1.5" />
          <circle cx="24" cy="24" r="8.5" />
          <circle cx="35" cy="13" r="1.8" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 48 48" {...common} strokeWidth={1.6}>
          <rect x="5.5" y="5.5" width="37" height="37" rx="1.5" />
          <path d="M26.5 42.5V26.5h5.2l.8-5.6h-6V17.3c0-1.6.5-2.8 2.9-2.8h3.2V9.6c-.6-.1-2.4-.3-4.6-.3-4.5 0-7.6 2.8-7.6 7.8v3.8h-5.1v5.6h5.1v16" />
        </svg>
      );
    case "map-pin":
      return (
        <svg viewBox="0 0 20 27" {...common} strokeWidth={1}>
          <path d="M10 1C5.03 1 1 5 1 9.95c0 6.53 9 15.55 9 15.55s9-9.02 9-15.55C19 5 14.97 1 10 1Z" />
          <circle cx="10" cy="10" r="3.4" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 52 52" {...common}>
          <rect x="6.5" y="9.5" width="39" height="36" rx="1.5" />
          <path d="M6.5 17.5h39M14 6.5v6M38 6.5v6M13 24h26v15H13zM13 29h26M13 34h26M19.5 24v15M26 24v15M32.5 24v15" />
        </svg>
      );
    case "banknote":
      return (
        <svg viewBox="0 0 52 52" {...common}>
          <rect x="4.5" y="14.5" width="43" height="23" rx="1" />
          <rect x="8.5" y="18.5" width="35" height="15" rx="1" />
          <circle cx="26" cy="26" r="6" />
          <path d="M27.8 23.4c-.4-.6-1.1-.9-1.9-.9-1.1 0-1.9.6-1.9 1.5 0 2.1 3.9 1.1 3.9 3.3 0 .9-.9 1.6-2 1.6-.9 0-1.6-.4-2-1M26 21.5v1M26 29v1M12.5 26h3M36.5 26h3" />
        </svg>
      );
    case "hourglass":
      return (
        <svg viewBox="0 0 52 52" {...common}>
          <path d="M12 6.5h28M12 45.5h28M15 6.5v5.3c0 4.2 3.2 8.6 7.8 11.6l2.7 1.8-2.7 1.8C18.2 30 15 34.4 15 38.6v6.9M37 6.5v5.3c0 4.2-3.2 8.6-7.8 11.6l-2.7 1.8 2.7 1.8c4.6 3 7.8 7.4 7.8 11.6v6.9M19.5 45.5c0-3.9 2.9-6.5 6.5-8.4 3.6 1.9 6.5 4.5 6.5 8.4M20.5 15h11" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 52 52" {...common}>
          <circle cx="26" cy="26" r="20.5" />
          <path d="M26 13.5V26l7 7" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" {...common} fill="currentColor" stroke="none">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      );
    case "menu":
      return (
        <svg viewBox="0 0 32 32" {...common} strokeWidth={1.5}>
          <path d="M4 9h24M4 16h24M4 23h24" />
        </svg>
      );
    case "close":
      return (
        <svg viewBox="0 0 32 32" {...common} strokeWidth={1.5}>
          <path d="M7 7l18 18M25 7 7 25" />
        </svg>
      );
  }
}
