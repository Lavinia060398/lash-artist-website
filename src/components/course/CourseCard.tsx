import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/data/courses";
import { buttonClasses } from "@/components/ui/Button";

type Props = { course: Course; divider?: boolean };

export function CourseCard({ course, divider = false }: Props) {
  const href = `/cursuri/${course.slug}`;
  return (
    <article
      className={`flex flex-col gap-6 border-line md:gap-10 ${divider ? "md:border-r-[0.5px] md:pr-[30px] lg:pr-[45px]" : ""}`}
    >
      <div className="relative aspect-[325/289] w-full overflow-hidden">
        <Image
          src={course.card.image}
          alt={course.card.imageAlt}
          fill
          sizes="(min-width: 1280px) 325px, (min-width: 768px) 30vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-6 md:gap-[30px]">
        <div className="flex flex-col gap-[10px] md:min-h-[113px] md:gap-[15px]">
          <h3 className="h3">
            <Link href={href} className="hover:underline">
              {course.card.title}
            </Link>
          </h3>
          <p>{course.card.subtitle}</p>
        </div>
        <Link
          href={href}
          aria-label={`Vezi mai multe detalii despre ${course.title}`}
          className={buttonClasses("secondary", "mt-auto w-full md:max-w-[309px]")}
        >
          Vezi mai multe detalii
        </Link>
      </div>
    </article>
  );
}
