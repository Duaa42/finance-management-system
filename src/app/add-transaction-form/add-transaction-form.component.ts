import { Component, NgModule } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-transaction-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-transaction-form.component.html',
  styleUrl: './add-transaction-form.component.css'
})
export class AddTransactionFormComponent {

  txForm = new FormGroup({
    description: new FormControl(''),
    amount: new FormControl(0),
    type: new FormControl()
  }); 
  submitForm(){
    this.dataService.addTransaction(this.txForm.value);  
    this.txForm.reset();
  }
  constructor(private dataService:DataService){

  }
}
