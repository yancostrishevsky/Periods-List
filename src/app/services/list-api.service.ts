import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Period } from '../period';

@Injectable({
  providedIn: 'root'
})
export class ListApiService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  private periodsUrl = 'api/periods';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getList(): Observable<Period[]>{
    return this.httpClient.get<Period[]>(this.periodsUrl);
  }
}
