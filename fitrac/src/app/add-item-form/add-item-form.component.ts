import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { Income } from '../income';
import { Expense } from '../expense';
import { HttpErrorResponse } from '@angular/common/http';
import { IncomeService } from '../income.service';
import { ExpenseService } from '../expense.service';
@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean;

  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpenseService) { }

  ngOnInit() {
    // if item has a value
    if (this.item) {
      // this means that an existing item object was passed into this component
      // therefore this is not a new item
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', 0);
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.amount >= 0) {
      this.incomeService.createIncome(form.value).subscribe((response) => {
        console.log(response)
      })
      this.formSubmit.emit(form.value);
      form.reset();
    } else {
      this.expenseService.createExpense(form.value).subscribe((response) => {
        console.log(response)
      })
      this.formSubmit.emit(form.value);
      form.reset();

    }

  }

}
