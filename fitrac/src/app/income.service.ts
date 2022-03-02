import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Income } from './income';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  private apiServerUrl: string = environment.apiBaseUrl

  constructor(private http: HttpClient) { }

  public getAllIncomes(): Observable<Income[]>{
    return this.http.get<Income[]>(`${this.apiServerUrl}/budget/income/all`)
  }

  public getIncomeById(income: Income): Observable<Income>{
    return this.http.get<Income>(`${this.apiServerUrl}/budget/income/{id}`)
  }

  public createIncome(income: Income): Observable<Income>{
    return this.http.post<Income>(`${this.apiServerUrl}/budget/income/create`, income)
  }

  public updateIncome(income: Income): Observable<Income>{
    return this.http.put<Income>(`${this.apiServerUrl}/budget/income/update`, income)
  }

  public deleteIncome(incomeId: Income): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/budget/income/delete/${incomeId}`)
  }
}
