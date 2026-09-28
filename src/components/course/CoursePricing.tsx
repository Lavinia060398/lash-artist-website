import type { Course } from "@/data/courses";
import { BookingButton } from "@/components/booking/BookingButton";
import { Section } from "@/components/ui/Container";

const ron = (n: number) => `${n} RON`;

export function CoursePricing({ course }: { course: Course }) {
  const { price, duration, formatLabel, formatTags, deposit } = course.pricing;
  return (
    <Section id="pret" labelledBy="pret-title" className="!pb-[60px] md:!pb-[100px]">
      <div className="flex flex-col items-center gap-5 border border-line px-4 py-[30px] text-center md:p-[30px]">
        <div className="flex w-full max-w-[660px] flex-col items-center gap-5">
          <div className="flex max-w-[364px] flex-col gap-[15px]">
            <h2 id="pret-title" className="h3">
              Prețul cursului este de
              <br />
              <span className="text-accent">{ron(price)}</span>
            </h2>
            <p className="font-sans text-[18px] font-semibold leading-[1.3] tracking-[-0.01em] text-body">{duration}</p>
          </div>

          <div className="flex flex-col items-center gap-[10px]">
            {formatLabel ? <p>{formatLabel}</p> : null}
            <ul className="flex flex-wrap justify-center gap-[10px]" aria-label="Structura cursului">
              {formatTags.map((tag) => (
                <li key={tag} className="border border-line p-[10px]">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-[10px]">
            <h3 className="font-sans text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-body">
              Condiții de înscriere
            </h3>
            <p className="max-w-[452px]">
              Pentru rezervarea locului se achită un avans de{" "}
              <strong className="font-medium text-accent">{ron(deposit)}</strong>, sumă nerambursabilă, care se scade
              din valoarea totală a cursului, iar diferența se achită în prima zi de curs.
            </p>
          </div>
        </div>
        <BookingButton course={course.title} className="w-full max-w-[369px]">
          Rezervă-ți locul
        </BookingButton>
      </div>
    </Section>
  );
}
