import { Component, OnInit } from '@angular/core';
import { BudgetService } from './budget.service';
import { Budget } from './budget';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  budgets: Budget[] = [];


  constructor(private budgetService: BudgetService) { }

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
