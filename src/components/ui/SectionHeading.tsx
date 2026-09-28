import type { ElementType, ReactNode } from "react";

type Props = {
  id?: string;
  as?: ElementType;
  /** Serif (Cormorant) text. */
  children?: ReactNode;
  /** Word(s) set in the Italianno script, as in the design. */
  script?: string;
  /** Script before the serif text instead of after it. */
  scriptFirst?: boolean;
  /** Text after the script word (e.g. a full stop). */
  after?: string;
  align?: "center" | "left";
  className?: string;
  /** Force serif and script onto separate lines. */
  stacked?: boolean;
};

/** Section title pattern used across the whole site: "Alege stilul care te <script>reprezintă</script>." */
export function SectionHeading({
  id,
  as: Tag = "h2",
  children,
  script,
  scriptFirst = false,
  after,
  align = "center",
  className = "",
  stacked = false,
}: Props) {
  const scriptEl = script ? <span className="script">{script}</span> : null;
  const sep = stacked ? <br /> : " ";
  return (
    <Tag id={id} className={`h2 text-balance ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      {scriptFirst ? (
        <>
          {scriptEl}
          {children ? <>{sep}{children}</> : null}
        </>
      ) : (
        <>
          {children}
          {scriptEl ? <>{children ? sep : null}{scriptEl}</> : null}
        </>
      )}
      {after}
    </Tag>
  );
}
