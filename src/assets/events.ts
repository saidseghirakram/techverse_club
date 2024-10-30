import Speaker1 from "/assets/Events/101-bootcamp/jeo.webp";

type Statistics = {
  title: string;
  count: number;
};

type Speaker = {
  name: string;
  img: string;
};

export const bootcampSpeakers: Speaker[] = [
  { name: "Abdeldjalil Dahmani", img: Speaker1 },
  { name: "Amine Takdenti", img: "" },
  { name: "Akram Titraoui", img: "" },
  { name: "Imad Chikh", img: "" },
];

export const bootcampStat: Statistics[] = [
  { title: "Participants", count: 60 },
  { title: "Workshops", count: 4 },
  { title: "Topics", count: 4 },
];
