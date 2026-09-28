import Link from "next/link";
import { buttonClasses } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Pagina nu a fost găsită",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="py-24 md:py-[140px]">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h1 className="h2">
          Pagina nu a fost <span className="script">găsită</span>
        </h1>
        <p className="max-w-[420px]">Adresa accesată nu există sau a fost mutată. Te invit să revii la pagina principală.</p>
        <Link href="/" className={buttonClasses("primary")}>
          Înapoi acasă
        </Link>
      </Container>
    </section>
  );
}
