export const aftercareRules = [
  "În primele 48 de ore evitați sauna și contactul cu apa;",
  "Evitați produsele pe bază de ulei (demachiante, ulei, cremă);",
  "Nu dormiți cu fața în pernă;",
  "Nu utilizați instrumente pentru ondularea genelor și nu machiați genele;",
  "Nu frecați ochii și nu trageți de gene;",
  "E strict interzis de a scoate genele, această procedură se face de către meșter cu pregătire corespunzătoare.",
];

export const aftercareHygiene = [
  "Se recomandă spălarea genelor cu apă (în afara primelor 48 de ore) cu mișcări ușoare în direcția creșterii.",
  "Folosiți demachiante pe bază de apă (loțiune micelară, demachiant pentru ochi și buze).",
  "Periați o dată pe zi genele cu o periuță specială (nu udă).",
  "Utilizați tonic nutritiv special pentru a hrăni și întări genele naturale.",
];

export const aftercareWarning =
  "Lipsa demachierii poate duce la acumularea rezidurilor de praf și machiaj care în timp cauzează sensibilitatea ochilor și diferite alergii.";

export type PolicyIcon = "calendar" | "banknote" | "hourglass" | "clock";

/** `|` marks where the line breaks on wide desktops (≥1280px), as set in the design; smaller screens wrap naturally. */
export const cancellationPolicy: { icon: PolicyIcon; title: string; text: string }[] = [
  {
    icon: "calendar",
    title: "Program afectat",
    text: "Îmi organizez întreaga zi în|funcție de programări.|O anulare din scurt îmi|dezechilibrează programul.",
  },
  {
    icon: "banknote",
    title: "Pierdere financiară",
    text: "Fiecare programare înseamnă|timp, materiale și implicare.|Anulările din scurt afectează|direct munca mea.",
  },
  {
    icon: "hourglass",
    title: "Alte cliente așteaptă",
    text: "Sunt cliente pe lista de|așteptare care își doresc|un loc. Anulările din ultimul|moment le țin pe loc.",
  },
  {
    icon: "clock",
    title: "Timp pierdut",
    text: "Locul tău rămâne liber și nu voi|mai putea programa o altă|clientă în acel interval de timp.",
  },
];
