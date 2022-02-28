import { Component } from '@angular/core';
import { BudgetService } from './budget.service';
import { Budget } from './budget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  budgets: Budget[] = [];

  constructor(private budgetService: BudgetService) { }
}
