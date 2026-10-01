import type { Course, ScheduleItem } from "@/data/courses";
import { Section } from "@/components/ui/Container";

function Item({ item }: { item: ScheduleItem }) {
  if (typeof item === "string") return <li>{item}</li>;
  if ("heading" in item) return <li className="h4 pt-1">{item.heading}</li>;
  return <li className="pt-1">{item.note}</li>;
}

const gridByCount: Record<number, string> = {
  1: "md:grid-cols-1 md:max-w-[469px] md:mx-auto",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
};

export function CourseSchedule({ course }: { course: Course }) {
  const days = course.schedule;
  const count = days.length;
  return (
    <Section id="program" labelledBy="program-title">
      <h2 id="program-title" className="h2 text-center">
        Programul <span className="script">cursului</span>
      </h2>
      <div className={`mt-[30px] grid grid-cols-1 md:mt-10 ${gridByCount[count] ?? "md:grid-cols-3"}`}>
        {days.map((day, i) => (
          <article
            key={day.label}
            className={[
              "flex flex-col items-center gap-5 py-6 text-center md:gap-[25px] md:px-5 md:py-0",
              i < count - 1 ? "border-b border-line md:border-b-0 md:border-r" : "",
            ].join(" ")}
          >
            <header className="flex flex-col gap-[5px]">
              <h3 className="h3">{day.label}</h3>
              <p className="font-sans text-[18px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink">{day.subtitle}</p>
              <p>
                <time>{day.time}</time>
              </p>
            </header>
            {day.items.length > 0 ? (
              <ul className="flex max-w-[541px] flex-col gap-[5px]">
                {day.items.map((item, idx) => (
                  <Item key={idx} item={item} />
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>

      {/* Courses without a benefits section show the diploma right under the schedule. */}
      {course.diploma && !course.benefits?.length ? (
        <div
          className={`mx-auto mt-[30px] flex flex-col gap-[5px] border border-line p-3 text-center md:mt-10 ${
            count === 1 ? "md:max-w-[469px]" : "max-w-[744px]"
          }`}
        >
          <h3 className="h4">Diplomă de participare</h3>
          <p>{course.diploma}</p>
        </div>
      ) : null}
    </Section>
  );
}
