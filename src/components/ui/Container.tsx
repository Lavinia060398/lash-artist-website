import type { ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
};

/** 1170px content column (design grid) with 16px mobile gutters. */
export function Container({ as: Tag = "div", className = "", children, id }: Props) {
  return (
    <Tag id={id} className={`mx-auto w-full max-w-[calc(1170px+32px)] px-4 md:max-w-[calc(1170px+64px)] md:px-8 ${className}`}>
      {children}
    </Tag>
  );
}

type SectionProps = Props & { labelledBy?: string };

/** Vertical rhythm between sections: 80px mobile, 100px desktop (from the design). */
export function Section({ as: Tag = "section", className = "", children, id, labelledBy }: SectionProps) {
  return (
    <Tag id={id} aria-labelledby={labelledBy} className={`scroll-mt-6 py-10 md:py-[50px] ${className}`}>
      <Container>{children}</Container>
    </Tag>
  );
}
