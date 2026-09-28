import { notFound } from "next/navigation";
import { CourseBenefits } from "@/components/course/CourseBenefits";
import { CourseCurriculum } from "@/components/course/CourseCurriculum";
import { CourseHero } from "@/components/course/CourseHero";
import { CoursePricing } from "@/components/course/CoursePricing";
import { CourseSchedule } from "@/components/course/CourseSchedule";
import { JsonLd } from "@/components/ui/JsonLd";
import { courses, getCourse } from "@/data/courses";
import { breadcrumbJsonLd, courseJsonLd, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return pageMetadata({
    title: course.seo.title,
    description: course.seo.description,
    path: `/cursuri/${course.slug}`,
    image: course.card.image,
  });
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <>
      <JsonLd
        data={[
          courseJsonLd(course),
          breadcrumbJsonLd([
            { name: "Acasă", path: "/" },
            { name: "Cursuri", path: "/#cursuri" },
            { name: course.title, path: `/cursuri/${course.slug}` },
          ]),
        ]}
      />
      <CourseHero course={course} />
      <CourseSchedule course={course} />
      <CourseBenefits course={course} />
      <CourseCurriculum course={course} />
      <CoursePricing course={course} />
    </>
  );
}
