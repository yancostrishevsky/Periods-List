import { Period } from "./period";

export const PERIODS: Period[] = [
  {
    name: "Codzienny(Pon-Pt)",
    dataTypes: ["Komputery", "pliki", "Dane sieciowe"],
    tasks: 0
  },
  {
    name: "Tygodniowy(Pon-Pt)",
    dataTypes: ["Komputery", "pliki","foldery", "Dane sieciowe"],
    tasks: 2
  },
  {
    name: "Miesięczny(1-szy dzień miesiąca)",
    dataTypes: ["Komputery", "pliki", "Dane sieciowe"],
    tasks: 1
  },
  {
    name: "Co 10 dni pracy stacji roboczej komputera",
    dataTypes: ["Komputery", "stacje robocze"],
    tasks: 0
  },
];
