import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-summary-cards',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './summary-cards.component.html',
  styleUrl: './summary-cards.component.css'
})
export class SummaryCardsComponent {
  constructor(protected dataService: DataService){
     
  }
}
