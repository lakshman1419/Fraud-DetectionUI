import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TrasactionService } from '../api/trasaction.service';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-view-transaction',
  imports: [MatTableModule, FormsModule
    , MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './view-transaction.component.html',
  styleUrl: './view-transaction.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ViewTransactionComponent {

  dataSource: any;
  // customerName: string;
  // transactionId: string;
  // transactionStatus: string;
  // transactionType: string;
  // transactionAmount: string;
  // transactionDate: string;

  displayedColumns: string[] = ['position', 'customerName', 'transactionId',
    'transactionStatus', 'transactionType', 'transactionAmount', 'transactionDate'];
  constructor(private TrasactionService: TrasactionService) {

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
