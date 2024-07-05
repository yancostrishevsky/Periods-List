import { Period } from './period';
import { DataType } from './data-types.enum';

export const PERIODS: Period[] = [
  {
    name: "Codzienny(Pon-Pt)",
    dataTypes: [DataType.Computers, DataType.Files, DataType.NetworkData],
    tasks: 0
  },
  {
    name: "Tygodniowy(Pon-Pt)",
    dataTypes: [DataType.Computers, DataType.Files, DataType.Folders, DataType.NetworkData],
    tasks: 2
  },
  {
    name: "Miesięczny(1-szy dzień miesiąca)",
    dataTypes: [DataType.Computers, DataType.Files, DataType.NetworkData],
    tasks: 1
  },
  {
    name: "Co 10 dni pracy stacji roboczej komputera",
    dataTypes: [DataType.Computers, DataType.Workstations],
    tasks: 0
  }
];
