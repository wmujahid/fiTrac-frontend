<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { BudgetService } from './budget.service';
import { Budget } from './budget';
import { HttpErrorResponse } from '@angular/common/http';
=======
import { Component } from '@angular/core';
import { BudgetService } from './budget.service';
import { Budget } from './budget';
>>>>>>> f0e1a98 (added budget observables to budget service)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
<<<<<<< HEAD
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
=======
export class AppComponent {
  budgets: Budget[] = [];

  constructor(private budgetService: BudgetService) { }
>>>>>>> f0e1a98 (added budget observables to budget service)
}
