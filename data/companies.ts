export interface Company {
  id: number;
  name: string;
  img: string;
  nameImg: string;
}

export const companies: Company[] = [
  {
    id: 1,
    name: "usfpcgs",
    img: "/usfpcgs.svg",
    nameImg: "/usfpcgsName.svg",
  },
  {
    id: 2,
    name: "tasa",
    img: "/tasa.svg",
    nameImg: "/tasaName.svg",
  },
  {
    id: 3,
    name: "amandala",
    img: "/amandala.svg",
    nameImg: "",
  },
];
