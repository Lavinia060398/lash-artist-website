export type ScheduleItem = string | { heading: string } | { note: string };

export type CourseDay = {
  label: string;
  subtitle: string;
  time: string;
  items: ScheduleItem[];
};

export type CurriculumGroup = { title: string; items: string[] };

export type Course = {
  slug: string;
  /** Plain title, used in metadata, cards and structured data. */
  title: string;
  /** Title as designed: serif part + script (Italianno) part. */
  heading: { serif: string; script: string };
  subtitle: string;
  intro: string;
  card: { title: string; subtitle: string; image: string; imageAlt: string };
  seo: { title: string; description: string };
  schedule: CourseDay[];
  benefits?: { title: string; text: string }[];
  diploma?: string;
  curriculum: {
    heading: { serif: string; script: string };
    subtitle: string;
    columns: CurriculumGroup[][];
  };
  pricing: {
    price: number;
    duration: string;
    formatLabel?: string;
    formatTags: string[];
    deposit: number;
  };
  durationISO: string;
};

export const courses: Course[] = [
  {
    slug: "curs-de-baza-extensii-gene",
    title: "Curs de bază extensii gene",
    heading: { serif: "Curs de bază", script: "extensii gene" },
    subtitle: "Tehnici clasice, volum și extensii Premade",
    intro:
      "Un curs intensiv de 3 zile, creat pentru persoanele care vor să înceapă o carieră în domeniul extensiilor de gene sau să își perfecționeze tehnica. Vei învăța atât principiile esențiale, cât și aplicarea practică, lucrând alături de trainer și exersând pe modele reale.",
    card: {
      title: "Curs de bază - extensii gene",
      subtitle: "Tehnici clasice, volum și extensii Premade",
      image: "/images/courses/curs-de-baza.jpg",
      imageAlt: "Cap de manechin pentru exersarea extensiilor de gene, cu patch-uri sub ochi",
    },
    seo: {
      title: "Curs de bază extensii gene în Timișoara",
      description:
        "Curs intensiv de 3 zile de extensii de gene în Timișoara: tehnica 1:1, volum 2D–4D, extensii Premade, practică pe model și diplomă de participare. 2500 RON.",
    },
    schedule: [
      {
        label: "Ziua 1",
        subtitle: "Partea teoretică",
        time: "10:00 – 13:00",
        items: [
          "Prezentarea materialelor și instrumentelor",
          "Anatomia ochiului și a genelor naturale",
          "Igienă și reguli de lucru",
          "Tipuri de extensii și adezivi",
          "Noțiuni de bază privind tehnicile de aplicare",
        ],
      },
      {
        label: "Ziua 2",
        subtitle: "Teorie + demonstrație practică",
        time: "10:00 – 18:00",
        items: [
          "Pregătirea genelor",
          "Izolarea corectă",
          "Tehnica de aplicare",
          "Mapping și alegerea efectului potrivit",
          "Demonstrație realizată de trainer",
        ],
      },
      {
        label: "Ziua 3 (bonus)",
        subtitle: "Practică pe model",
        time: "10:00 – 18:00",
        items: [
          "Exersarea tehnicilor învățate",
          "Realizarea unei lucrări complete",
          "Corectarea și perfecționarea tehnicii",
          "Îndepărtarea extensiilor",
          "Întrebări și recomandări personalizate",
        ],
      },
    ],
    benefits: [
      {
        title: "Practică pe modele",
        text: "Vei avea ocazia să aplici tehnicile învățate pe modele reale, pentru a dobândi experiență practică și mai multă încredere în propriile abilități.",
      },
      {
        title: "Produse și materiale asigurate",
        text: "Toate produsele și materialele necesare desfășurării cursului sunt puse la dispoziție de trainer, astfel încât să te poți concentra pe învățarea și exersarea tehnicii.",
      },
      {
        title: "Îndrumare individuală",
        text: "Pe tot parcursul practicii vei beneficia de atenție și îndrumare individuală, cu feedback direct și corectarea tehnicii acolo unde este necesar.",
      },
      {
        title: "Format VIP 1:1",
        text: "Ai posibilitatea de a participa la curs într-un format VIP 1:1, pentru o experiență de învățare personalizată și un nivel ridicat de atenție acordată progresului tău.",
      },
      {
        title: "Tehnică, corectitudine și siguranță",
        text: "Cursul pune accent atât pe însușirea corectă a tehnicilor de aplicare, cât și pe respectarea regulilor de igienă, siguranță și protejarea genelor naturale.",
      },
    ],
    diploma:
      "La finalul cursului vei primi o diplomă de participare care atestă parcurgerea celor 3 zile ale cursului de bază extensii gene.",
    curriculum: {
      heading: { serif: "Ce vei", script: "învăța" },
      subtitle: "De la bazele tehnicii până la realizarea unei lucrări complete.",
      columns: [
        [
          {
            title: "Bazele extensiilor de gene",
            items: [
              "Anatomia ochiului și particularitățile genelor naturale;",
              "Tipurile de adezivi și modul corect de utilizare a acestora;",
              "Tipuri de extensii;",
              "Reguli de bază pentru aplicarea extensiilor de gene;",
            ],
          },
          {
            title: "Tehnica de lucru",
            items: [
              "Pregătirea genelor naturale înainte de aplicare;",
              "Introducerea în tehnica extensiilor Premade;",
              "Tehnica extensiilor Premade;",
              "Extensii de gene – tehnica 1:1;",
              "Tehnici de volum: 2D, 3D, 4D;",
              "Izolarea corectă a genelor;",
            ],
          },
        ],
        [
          {
            title: "Mapping & personalizarea lucrării",
            items: [
              "Crearea unui mapping personalizat pentru fiecare clientă;",
              "Adaptarea formei lucrării în funcție de fizionomia clientei;",
              "Alegerea lungimilor, curburilor și grosimilor potrivite;",
            ],
          },
          {
            title: "Igienă & siguranță",
            items: [
              "Igiena și regulile de sanitizare și siguranță;",
              "Îndepărtarea extensiilor în condiții de siguranță;",
              "Organizarea și pregătirea spațiului de lucru;",
            ],
          },
          {
            title: "Bonusuri incluse",
            items: [
              "Crearea propriului portofoliu;",
              "Realizarea de materiale foto/video pentru promovarea serviciilor;",
              "Recomandări și îndrumare pentru începutul activității;",
            ],
          },
        ],
      ],
    },
    pricing: {
      price: 2500,
      duration: "2 zile de formare + 1 zi de practică bonus",
      formatLabel: "3 zile de formare intensivă",
      formatTags: ["Teorie", "Demonstrație", "Practică pe model"],
      deposit: 500,
    },
    durationISO: "P3D",
  },
  {
    slug: "curs-laminare-gene-sprancene",
    title: "Curs de laminare a genelor & sprâncenelor",
    heading: { serif: "Curs de laminare a", script: "genelor & sprâncenelor" },
    subtitle: "Laminare clasică & coreeană",
    intro:
      "Învață să creezi rezultate naturale, elegante și bine definite. Un curs intensiv de formare, creat pentru persoanele care își doresc să învețe, de la bază, tehnicile profesionale de laminare a genelor și sprâncenelor.",
    card: {
      title: "Curs de laminare a genelor & sprâncenelor",
      subtitle: "Laminare clasică & coreeană",
      image: "/images/courses/curs-laminare.jpg",
      imageAlt: "Ochi căprui cu gene laminate și sprânceană stilizată",
    },
    seo: {
      title: "Curs laminare gene și sprâncene în Timișoara",
      description:
        "Curs de o zi de laminare a genelor și sprâncenelor în Timișoara: laminare clasică și coreeană, practică pe 2 modele umane și diplomă de participare. 1500 RON.",
    },
    schedule: [
      {
        label: "1 zi",
        subtitle: "Teorie, demonstrație și practică",
        time: "10:00 – 18:00",
        items: [
          "Introducere în laminarea genelor și sprâncenelor",
          "Anatomia și particularitățile genelor naturale",
          "Laminarea clasică vs. laminarea coreeană",
          "Produse, instrumente și materiale",
          "Alegerea corectă a bigudiurilor",
          "Igienă, sanitizare și reguli de siguranță",
          "Cele mai frecvente greșeli și cum pot fi prevenite",
          "Contraindicațiile tratamentului",
          "Alegerea tehnicii în funcție de fir și rezultatul dorit",
          "Lucrul pe două modele umane, sub îndrumarea trainerului",
          { note: "Pe parcursul practicii vei primi feedback individual, corectarea tehnicii și recomandări personalizate." },
        ],
      },
    ],
    benefits: [
      {
        title: "1 zi de formare intensivă",
        text: "Îmbini partea teoretică cu demonstrația și practica, pentru a înțelege corect fiecare etapă a procedurii.",
      },
      {
        title: "Practică pe modele umane",
        text: "Ai ocazia să aplici tehnicile învățate pe modele reale și să capeți experiență practică sub îndrumarea trainerului.",
      },
      {
        title: "2 tehnici de laminare a genelor",
        text: "Înveți atât laminarea clasică, cât și tehnica de laminare coreeană, pentru a putea adapta procedura în funcție de rezultat și de particularitățile genelor naturale.",
      },
      {
        title: "Laminarea și stilizarea sprâncenelor",
        text: "Descoperi cum să lucrezi corect cu firele naturale și să creezi un rezultat uniform, ordonat și bine definit.",
      },
      {
        title: "Îndrumare individuală",
        text: "Pe parcursul practicii primești atenție individuală, feedback și corectarea tehnicii, astfel încât să înțelegi ce poți îmbunătăți.",
      },
      {
        title: "Produse și materiale incluse",
        text: "Toate produsele și materialele necesare pentru desfășurarea cursului sunt puse la dispoziție, astfel încât să te poți concentra pe învățarea tehnicii.",
      },
    ],
    diploma:
      "La finalul cursului vei primi o diplomă de participare care atestă parcurgerea cursului de laminare a genelor și sprâncenelor.",
    curriculum: {
      heading: { serif: "Ce vei", script: "învăța" },
      subtitle: "Două tehnici. O bază profesională mai complexă.",
      columns: [
        [
          {
            title: "Laminarea clasică a genelor",
            items: [
              "Ce presupune procedura de laminare a genelor și a sprâncenelor și care sunt rezultatele acesteia;",
              "Avantajele laminării și vopsirii genelor naturale și a sprâncenelor;",
              "Pentru cine este potrivit acest tratament și când trebuie evitat;",
              "Cum trebuie pregătit și organizat spațiul de lucru;",
              "Reguli de igienă, siguranță și precauții;",
              "Instrumentele și materialele necesare pentru realizarea procedurii;",
              "Modalități corecte de curățare și întreținere a ustensilelor;",
              "Cele mai frecvente greșeli și cum pot fi prevenite;",
              "Etapele complete ale laminării, de la pregătire până la finalizare;",
              "Alegerea corectă a bigudiurilor în funcție de forma și lungimea genelor;",
              "Tehnica de ridicare și poziționare a genelor pe bigudiu;",
              "Aplicarea corectă a soluțiilor și respectarea timpilor de acționare;",
              "Recomandări pentru îngrijirea genelor și sprâncenelor după procedură;",
              "Produse și branduri utilizate în domeniu;",
            ],
          },
        ],
        [
          {
            title: "Laminarea coreeană a genelor",
            items: [
              "Principiile tehnicii de laminare coreeană;",
              "Diferențele dintre laminarea clasică și cea coreeană;",
              "Pregătirea genelor pentru procedură;",
              "Alegerea și poziționarea corectă a accesoriilor;",
              "Direcționarea și stilizarea genelor;",
              "Aplicarea produselor în etapele specifice tehnicii;",
              "Adaptarea tehnicii în funcție de genele naturale;",
              "Cum alegi tehnica potrivită în funcție de rezultatul dorit;",
            ],
          },
          {
            title: "Laminarea & stilizarea sprâncenelor",
            items: [
              "Ce presupune laminarea sprâncenelor;",
              "Analiza și pregătirea sprâncenelor;",
              "Direcționarea și fixarea firelor;",
              "Aplicarea corectă a soluțiilor;",
              "Adaptarea procedurii în funcție de grosimea și structura firelor;",
              "Finisarea și îngrijirea sprâncenelor;",
              "Recomandări pentru întreținerea rezultatului;",
            ],
          },
        ],
      ],
    },
    pricing: {
      price: 1500,
      duration: "1 zi de formare intensă",
      formatTags: ["Teorie + demonstrație practică", "Practică pe model"],
      deposit: 500,
    },
    durationISO: "P1D",
  },
  {
    slug: "curs-perfectionare-extensii-gene",
    title: "Curs de perfecționare 1:1 extensii de gene",
    heading: { serif: "Curs de perfecționare 1:1", script: "extensii de gene" },
    subtitle: "Perfecționează-ți tehnica și ridică nivelul lucrărilor tale.",
    intro:
      "Un curs intensiv, dedicat tehnicienelor care au deja experiență în aplicarea extensiilor de gene și își doresc să își perfecționeze tehnica, să corecteze greșelile frecvente și să obțină lucrări mai precise, rezistente și armonioase.",
    card: {
      title: "Curs de perfecționare 1:1 extensii de gene",
      subtitle: "Perfecționează-ți tehnica și ridică nivelul lucrărilor tale.",
      image: "/images/courses/curs-perfectionare.jpg",
      imageAlt: "Ochi verde cu extensii de gene cu volum, fotografiat de aproape",
    },
    seo: {
      title: "Curs perfecționare extensii gene 1:1 în Timișoara",
      description:
        "Curs de perfecționare 1:1 pentru lash artiști cu experiență, în Timișoara: tehnica One by One, mapping, lucrul pe straturi, rezistența extensiilor. 1500 RON.",
    },
    schedule: [
      {
        label: "1 zi",
        subtitle: "Perfecționare intensivă",
        time: "10:00 – 18:00",
        items: [
          "Cursul este construit în jurul practicii, astfel încât să poți aplica imediat ceea ce înveți.",
          "Vei lucra pe 2 modele umane, iar trainerul îți va oferi feedback direct asupra tehnicii tale.",
          "Formatul 1:1 permite identificarea și corectarea punctuală a greșelilor, în funcție de nivelul tău actual și de aspectele pe care vrei să le îmbunătățești.",
        ],
      },
    ],
    diploma:
      "La finalul cursului vei primi o diplomă de participare care atestă parcurgerea programului de perfecționare intensivă.",
    curriculum: {
      heading: { serif: "Ce vei", script: "perfecționa" },
      subtitle:
        "Rafinează-ți tehnica, corectează detaliile și învață să obții lucrări mai precise, rezistente și adaptate fiecărei cliente.",
      columns: [
        [
          {
            title: "Tehnica One by One - Evantaie în mână și evantaie pe bandă",
            items: [
              "Îți vei rafina tehnica de aplicare One by One, cu accent pe precizie, izolare și obținerea unui rezultat curat și natural.",
            ],
          },
          {
            title: "Alegerea extensiilor",
            items: [
              "Vei învăța să alegi corect curburile, lungimile și grosimile, în funcție de structura genelor naturale și efectul dorit.",
            ],
          },
          {
            title: "Colțurile intern și extern",
            items: [
              "Vei descoperi tehnici pentru prelucrarea corectă a colțului intern și extern, astfel încât lucrarea să fie uniformă și armonioasă de la un capăt la celălalt.",
            ],
          },
          {
            title: "Lucrul pe straturi",
            items: [
              "Vei aprofunda lucrul pe straturi și utilizarea corectă a celor două metode de aplicare, pentru un rezultat mai bine structurat și controlat.",
            ],
          },
          {
            title: "Direcția și distanța corectă",
            items: [
              "Vei perfecționa direcția extensiilor și vei învăța să respecți distanța corectă față de pleoapă, pentru o aplicare sigură și estetică.",
            ],
          },
          {
            title: "Rezistență și aspect natural",
            items: [
              "Vei lucra asupra tehnicilor care contribuie la obținerea unor extensii rezistente, bine atașate și cu un aspect cât mai natural.",
            ],
          },
        ],
        [
          {
            title: "Modelarea privirii",
            items: [
              "Tehnici de modelare și evidențiere a privirii;",
              "Alegerea efectului potrivit pentru fiecare formă de ochi;",
              "Crearea evantaielor cu ajutorul curburilor speciale;",
              "Tehnici pentru controlul și formarea evantaielor folosind curburi speciale;",
              "Adaptarea lucrării: vei învăța să ajustezi lungimile, curburile, grosimile și direcția pentru un rezultat personalizat.",
            ],
          },
          {
            title: "Adezivul și rezistența extensiilor",
            items: [
              "Vei aprofunda unul dintre cele mai importante elemente pentru o lucrare rezistentă: adezivul.",
              "Vei învăța despre utilizarea corectă a adezivului și despre factorii care pot influența polimerizarea, retenția și rezistența extensiilor.",
              "Vei primi, de asemenea, recomandări pentru întreținerea corectă a extensiilor și prelungirea rezistenței acestora.",
            ],
          },
          {
            title: "Sănătatea genelor și siguranța procedurii",
            items: [
              "Igiena și prevenirea iritațiilor;",
              "Reguli esențiale pentru un mediu de lucru sigur și o procedură realizată corect;",
              "Sănătatea genelor naturale;",
              "Cum să protejezi genele naturale și să alegi tehnica potrivită în funcție de starea acestora;",
              "Principiile care te ajută să obții lucrări estetice, confortabile și rezistente.",
            ],
          },
        ],
      ],
    },
    pricing: {
      price: 1500,
      duration: "1 zi de perfecționare intensă",
      formatTags: ["Teorie + practică pe 2 modele"],
      deposit: 500,
    },
    durationISO: "P1D",
  },
];

/** Order of the cards in the home "Pasiunea ta poate deveni o profesie" section. */
export const homeCourseOrder = [
  "curs-de-baza-extensii-gene",
  "curs-perfectionare-extensii-gene",
  "curs-laminare-gene-sprancene",
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}
