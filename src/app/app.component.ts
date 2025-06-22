import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AddTransactionFormComponent } from './add-transaction-form/add-transaction-form.component';
import { SummaryCardsComponent } from './summary-cards/summary-cards.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TransactionListComponent, 
    AddTransactionFormComponent, SummaryCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard';
}
