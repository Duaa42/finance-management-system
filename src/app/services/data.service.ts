import { Injectable } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
import { TransactionData } from '../models/transactionData.model';

@Injectable({
  providedIn: 'root',
})

export class DataService {

  constructor() { }
  private transactions : TransactionData[] =[];
  addTransaction(data: any){
    const now = Date.now();
    data.time = formatDate(now, 'yyyy-MM-dd HH:mm:ss', 'en-US');
    this.transactions.push(data);
    //console.log(this.transactions);
  }
  getTransactionsList(){
    return this.transactions;
  }
  getTotalIncome(){
    let currentIncome = 0;
    for (const tx of this.transactions) {
      if(`${tx.type}` == 'income'){
        currentIncome = currentIncome+tx.amount;
      }
    }
    //console.log(currentIncome);
    return currentIncome;
  }
  getTotalExpense(){
    let currentExpense = 0;
    for (const tx of this.transactions) {
      if(`${tx.type}` == 'expense'){
        currentExpense += tx.amount;
      }
    }
    //console.log(currentIncome);
    return currentExpense;
  }


}
