import Image from "next/image";
import { Section } from "@/components/ui/Container";

export function About() {
  return (
    <Section id="despre" labelledBy="despre-title">
      <div className="flex flex-col items-center gap-[30px] text-center md:gap-5">
        <div className="flex flex-col items-center gap-[30px]">
          <header className="flex flex-col items-center gap-[10px] md:gap-[5px]">
            <h2 id="despre-title" className="h2">
              Bună! Sunt <br className="md:hidden" />
              <span className="script">Lavinia</span>
            </h2>
            <p className="max-w-[294px] text-body-alt md:max-w-none">
              Trainer certificat în extensii de gene, cu 10 ani de experiență în domeniu.
            </p>
          </header>
          <div className="flex flex-col items-center gap-[15px] text-body-alt">
            <p className="max-w-[996px]">
              Totul a început din dorința de a face o schimbare și de a găsi un domeniu care să mă reprezinte cu
              adevărat. Așa am descoperit lumea extensiilor de gene, un loc în care pasiunea, creativitatea, răbdarea
              și atenția la detalii se întâlnesc. A fost nevoie de multă muncă, practică și perseverență, dar fiecare
              pas m-a adus mai aproape de ceea ce iubesc astăzi să fac. Am urmat numeroase cursuri de specializare și
              perfecționare, care mi-au consolidat o tehnică modernă, sigură și adaptată fiecărei persoane. Cred cu
              tărie că educația de calitate și respectarea standardelor ridicate sunt fundamentul unei cariere de
              succes în acest domeniu.
            </p>
            <p className="max-w-[890px]">
              Îmi place să creez look-uri personalizate, care pun în valoare frumusețea unică a fiecărei femei și îmi
              doresc ca fiecare femeie care ajunge la mine să plece nu doar cu un set de gene frumos, ci și cu o stare
              mai bună, cu mai multă încredere și cu sentimentul că și-a oferit un moment doar pentru ea, iar ca
              trainer, împărtășesc cu drag experiența și cunoștințele mele, ghidând cu răbdare și profesionalism
              viitorii lash artiști.
            </p>
          </div>
        </div>
        {/* Shown whole on every device (no cropping): the box follows the photo's own proportions. */}
        <Image
          src="/images/home/lavinia-portret.jpg"
          alt="Lavinia, trainer certificat în extensii de gene, în costum maro"
          width={1135}
          height={1489}
          sizes="(min-width: 768px) 454px, calc(100vw - 32px)"
          className="mt-[10px] h-auto w-full max-w-[454px] md:mt-0"
        />
      </div>
    </Section>
  );
}
