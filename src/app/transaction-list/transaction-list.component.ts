import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent {
  
  // transactions = [
  //   {description:'balance credited', amount:32},
  //   {description:'balance credited', amount:20},
  //   {description:'balance debited', amount:22},
  //   {description:'balance debited', amount:24},
  //   {description:'balance credited', amount:42}
  // ];
  transactions = this.dataService.getTransactionsList();
  
  constructor (private dataService: DataService){
  }
}
