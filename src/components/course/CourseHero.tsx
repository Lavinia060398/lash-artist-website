import type { Course } from "@/data/courses";
import { BookingButton } from "@/components/booking/BookingButton";
import { Container } from "@/components/ui/Container";

export function CourseHero({ course }: { course: Course }) {
  return (
    <section aria-labelledby="curs-title" className="pb-10 pt-[70px] md:pb-[50px] md:pt-[60px]">
      <Container className="flex flex-col items-center gap-[30px] text-center">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-[10px]">
            <h1 id="curs-title" className="h2 max-w-[480px] text-balance">
              {course.heading.serif}
              <br />
              <span className="script">{course.heading.script}</span>
            </h1>
            <p className="max-w-[463px] font-semibold text-body">{course.subtitle}</p>
          </div>
          <p className="max-w-[516px]">{course.intro}</p>
        </div>
        <BookingButton course={course.title} className="w-full max-w-[369px]">
          Rezervă-ți locul
        </BookingButton>
      </Container>
    </section>
  );
}
