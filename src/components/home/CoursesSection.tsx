import { getCourse, homeCourseOrder, type Course } from "@/data/courses";
import { CourseCard } from "@/components/course/CourseCard";
import { Section } from "@/components/ui/Container";

export function CoursesSection() {
  const list = homeCourseOrder.map(getCourse).filter((c): c is Course => Boolean(c));
  return (
    <Section id="cursuri" labelledBy="cursuri-title">
      <h2 id="cursuri-title" className="h2 text-center">
        Pasiunea ta poate
        <br />
        deveni o <span className="script">profesie</span>
      </h2>
      <div className="mt-[30px] grid grid-cols-1 gap-12 md:mt-10 md:grid-cols-3 md:gap-[30px]">
        {list.map((course, i) => (
          <CourseCard key={course.slug} course={course} divider={i < list.length - 1} />
        ))}
      </div>
    </Section>
  );
}
