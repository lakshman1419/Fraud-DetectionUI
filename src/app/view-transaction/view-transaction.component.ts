import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { TrasactionService } from '../api/trasaction.service';



@Component({
  selector: 'app-view-transaction',
  imports: [],
  templateUrl: './view-transaction.component.html',
  styleUrl: './view-transaction.component.scss'
})
export class ViewTransactionComponent {

  dataSource:any;
  // customerName: string;
  // transactionId: string;
  // transactionStatus: string;
  // transactionType: string;
  // transactionAmount: string;
  // transactionDate: string;

  displayedColumns: string[] = ['position', 'customerName', 'transactionId',
     'transactionStatus','transactionType', 'transactionAmount','transactionDate'];
  constructor(private TrasactionService: TrasactionService)
  {

  }

  ngOnInit() {
    this.getAllTransactions()
  }
  
  getAllTransactions() {
      this.TrasactionService.viewTransaction().subscribe(response => {
        this.dataSource = response;       
    },)
    }
}
