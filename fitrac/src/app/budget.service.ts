import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Budget } from './budget'

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private apiServerUrl: string = ''

  constructor(private http: HttpClient) { }

  public getAllBudgets(): Observable<Budget[]>{
    return this.http.get<Budget[]>(`${this.apiServerUrl}/budget/all`)
  }

  public getBudgetById(budget: Budget): Observable<Budget>{
    return this.http.get<Budget>(`${this.apiServerUrl}/budget/{id}`)
  }

  public createBudget(budget: Budget): Observable<Budget>{
    return this.http.post<Budget>(`${this.apiServerUrl}/budget/create`, budget)
  }

  public updateBudget(budget: Budget): Observable<Budget>{
    return this.http.put<Budget>(`${this.apiServerUrl}/budget/update`, budget)
  }

  public deleteBudget(budgetId: Budget): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/budget/delete/${budgetId}`)
  }

}
