import { Component, OnInit } from '@angular/core';
import { BudgetService } from './budget.service';
import { Budget } from './budget';
import { Income } from './income';
import { Expense } from './expense';
import { HttpErrorResponse } from '@angular/common/http';
import { IncomeService } from './income.service';
import { ExpenseService } from './expense.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  budgets: Budget[] = [];

  incomes: Income[];
  expenses: Expense[];


  constructor(
    private budgetService: BudgetService,
    private incomeService: IncomeService,
    private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.getAllBudgets()
  }

  getAllBudgets(): void {
    this.budgetService.getAllBudgets().subscribe(
      (response: Budget[]) => {
        this.budgets = response
      },
      (err: HttpErrorResponse) => {
        alert(err.message)
        console.log(this.budgets);

      }
    )
  };
}
