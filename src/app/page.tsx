import { About } from "@/components/home/About";
import { Aftercare } from "@/components/home/Aftercare";
import { Contact } from "@/components/home/Contact";
import { CoursesSection } from "@/components/home/CoursesSection";
import { FinalCta } from "@/components/home/FinalCta";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { TimePolicy } from "@/components/home/TimePolicy";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Eyelash by Lavinia — Extensii de gene și laminare în Timișoara",
  absoluteTitle: true,
  description:
    "Extensii de gene natural, soft și mega volume, laminare gene și sprâncene în Timișoara (Centrul Minerva). Programează-te la Lavinia, trainer certificat cu 10 ani de experiență.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <GalleryPreview />
      <TimePolicy />
      <Aftercare />
      <CoursesSection />
      <Contact />
      <FinalCta />
    </>
  );
}
