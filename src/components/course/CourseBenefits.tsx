import type { Course } from "@/data/courses";
import { Section } from "@/components/ui/Container";

export function CourseBenefits({ course }: { course: Course }) {
  if (!course.benefits?.length) return null;
  return (
    <Section id="beneficii" labelledBy="beneficii-title">
      <h2 id="beneficii-title" className="h2 text-center">
        Beneficiile <span className="script">cursului</span>
      </h2>
      <div className="mx-auto mt-[30px] flex max-w-[744px] flex-col gap-5 text-center">
        <dl className="flex flex-col gap-[15px] md:gap-[10px]">
          {course.benefits.map((b) => (
            <div key={b.title} className="flex flex-col gap-[5px]">
              <dt className="h4">{b.title}</dt>
              <dd>{b.text}</dd>
            </div>
          ))}
        </dl>
        {course.diploma ? (
          <div className="flex flex-col gap-[5px] border border-line p-3">
            <h3 className="h4">Diplomă de participare</h3>
            <p>{course.diploma}</p>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
