import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { OrderItemComponent } from '../order-item/order-item.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  Ingresar(){
    const dialogRef = this.dialog.open(OrderItemComponent, {
      width: '250px',
     // data: {name: this.name, animal: this.animal}
    });
  }
}
