import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OrderItemsComponent } from '../order-items/order-items.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {

  constructor(private service:OrderService,
              public dialog: MatDialog ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form=null)
    form.resetForm();
    this.service.FormData ={
      OrderID:null,
      OrderNo:Math.floor(100000+Math.random()*900000).toString(),
      CustomerID:0,
      PMethod:'',
      GTotal:0
    };
    this.service.orderItems=[];
  }

  AddorEditOrderItem(orderItemIndex,OrderID){
    const dialogRef = this.dialog.open(OrderItemsComponent);
  }

}
