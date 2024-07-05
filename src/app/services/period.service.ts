import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Period } from '../period';
import { PERIODS } from '../mock-periods';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  constructor(private http: HttpClient) { }

  private periodsUrl = 'api/periods';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getPeriods(): Observable<Period[]> {
    return this.http.get<Period[]>(this.periodsUrl)
      .pipe(
        tap(_ => console.log('Dane otrzymane')),
        catchError(this.handleError<Period[]>('getPeriods', []))
      );
  }

  private handleError<T>(operation: string, defaultValue: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(`Error: ${operation}:`, error);
      return of(defaultValue);
    };
  }

}
