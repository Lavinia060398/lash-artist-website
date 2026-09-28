type Props = {
  items: string[];
  className?: string;
  itemClassName?: string;
  tone?: "body" | "dark";
};

/** Bulleted list with the 10px round accent bullet from the design. */
export function BulletList({ items, className = "", itemClassName = "", tone = "body" }: Props) {
  return (
    <ul className={`flex flex-col gap-[2px] md:gap-[5px] ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-[10px] leading-[1.5] ${tone === "dark" ? "text-body-dark" : "text-body"} ${itemClassName}`}
        >
          <span aria-hidden className="mt-[7px] size-[10px] shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
