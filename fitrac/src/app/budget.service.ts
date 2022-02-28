import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private apiServerUrl: string = ''

  constructor(private http: HttpClient) { }

  public getAllBudgets(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/budget/all`)
  }

}
