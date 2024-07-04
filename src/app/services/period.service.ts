import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Period } from '../period';
import { PERIODS } from '../mock-periods';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  constructor() { }

  getPeriods(): Observable<Period[]> {
    const periodsWithCutText = PERIODS.map(period => ({
      ...period,
      dataTypesText: this.getCutText(period.dataTypes.join(', '), 30)
    }));
    return of(periodsWithCutText);
  }

  private getCutText(value: string, maxLength: number): string {
    if (!value) return '';
    if (value.length <= maxLength) return value;
    return value.substring(0, maxLength) + '...';
  }
}
