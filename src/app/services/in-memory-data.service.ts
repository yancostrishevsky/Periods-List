import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Period } from '../period';
import { DataType } from '../data-types.enum';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const periods: Period[] = [
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
    return { periods };
  }
  constructor() { }
}
