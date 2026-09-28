export type Service = {
  name: string;
  variants?: string;
  description?: string;
  price: number;
};

/** "Alege stilul care te reprezintă." — price list from the home page. */
export const services: Service[] = [
  {
    name: "Natural volume",
    variants: "1D/ 2D/ 3D",
    description: "Efect elegant și natural pentru o privire fresh și definită",
    price: 250,
  },
  {
    name: "Soft volume",
    variants: "4D/ 5D/ 6D",
    description: "Mai multă intensitate, păstrând un aspect sofisticat.",
    price: 300,
  },
  {
    name: "Mega volume",
    variants: "7D/ 8D/ 9D/ 10D",
    description: "Volum intens pentru o privire statement",
    price: 350,
  },
  {
    name: "Laminare gene",
    description: "Gene perfect aliniate, curbate și definite",
    price: 200,
  },
  {
    name: "Laminare sprâncene",
    description: "Sprâncene disciplinate cu aspect îngrijit și natural",
    price: 200,
  },
  {
    name: "Demontat extensii gene din altă parte",
    price: 50,
  },
];

export const includedInPrice = [
  "Curburile speciale ML/ L/ L+",
  "Dark brown lashes și extensiile colorate",
];
