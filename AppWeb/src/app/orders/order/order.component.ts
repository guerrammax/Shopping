import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';
import { OrderItemsComponent } from '../order-items/order-items.component';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Router } from '@angular/router';
import { modalConfigDefaults } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: []
})

export class OrderComponent implements OnInit {


  constructor(private service:OrderService,
              private  dialog: MatDialog, 
              private router:Router       ,
              private modalService: BsModalService
    ) { }

    modaleRef:BsModalRef;
@ViewChild('template') modal : TemplateRef<any>;

onSubmit(){

  const dialogRef = this.dialog.open(OrderItemsComponent, {
    width: '250px',
    // data: {name: this.name, animal: this.animal}
  });

  this.modaleRef= this.modalService.show(this.modal);
  
  console.log("abriredo");
}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if (form = null) 
      form.resetForm();

    this.service.formData={
      OrderId: null,
      OrderNo:Math.floor(100000+Math.random()*900000).toString(),
      CustomerId:0,
      Pmethod:'',
      Gtotal:0
    };
    this.service.orderItems=[];
  }

  // AddOrEditOrderItem(orderItemIndex, OrderId){
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.autoFocus=true;
  //   dialogConfig.disableClose=true;
  //   dialogConfig.width="50%";
  //   dialogConfig.data= {orderItemIndex, OrderId}
  //   this.dialog.open(OrderItemsComponent, dialogConfig);
  // }
}
