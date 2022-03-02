import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private apiServerUrl: string = environment.apiBaseUrl

  constructor(private http: HttpClient) { }

  public getAllExpenses(): Observable<Expense[]>{
    return this.http.get<Expense[]>(`${this.apiServerUrl}/expense/all`)
  }

  public getExpenseById(expense: Expense): Observable<Expense>{
    return this.http.get<Expense>(`${this.apiServerUrl}/expense/{id}`)
  }

  public createExpense(expense: Expense): Observable<Expense>{
    return this.http.post<Expense>(`${this.apiServerUrl}/expense/create`, expense)
  }

  public updateExpense(expense: Expense): Observable<Expense>{
    return this.http.put<Expense>(`${this.apiServerUrl}/expense/update`, expense)
  }

  public deleteExpense(expenseId: Expense): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/expense/delete/${expenseId}`)
  }
}
