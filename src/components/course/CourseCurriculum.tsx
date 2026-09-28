import type { Course } from "@/data/courses";
import { BulletList } from "@/components/ui/BulletList";
import { BookingButton } from "@/components/booking/BookingButton";
import { Section } from "@/components/ui/Container";

export function CourseCurriculum({ course }: { course: Course }) {
  const { heading, subtitle, columns } = course.curriculum;
  return (
    <Section id="curriculum" labelledBy="curriculum-title">
      <div className="mx-auto flex max-w-[352px] flex-col items-center gap-[11px] text-center">
        <h2 id="curriculum-title" className="h2">
          {heading.serif} <span className="script">{heading.script}</span>
        </h2>
        <p className="max-w-[352px]">{subtitle}</p>
      </div>

      <div className="mt-[30px] grid grid-cols-1 gap-5 md:mt-10 md:grid-cols-2 md:gap-[30px]">
        {columns.map((groups, col) => (
          <div key={col} className={`flex flex-col gap-5 ${col === 0 ? "md:gap-[26px]" : "md:gap-10"}`}>
            <div className="flex flex-col gap-5">
              {groups.map((group) => (
                <div key={group.title} className="flex flex-col gap-[10px]">
                  <h3 className="h4">{group.title}</h3>
                  {group.items.length > 0 ? <BulletList items={group.items} /> : null}
                </div>
              ))}
            </div>
            {col === 0 ? (
              <BookingButton course={course.title} variant="secondary" className="hidden w-full max-w-[369px] md:inline-flex">
                Rezervă-ți locul
              </BookingButton>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
