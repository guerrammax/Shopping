import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {  ModalModule} from "ngx-bootstrap/modal";
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OrderComponent } from './orders/order/order.component';

import { routing,appRoutingProviders } from './app.routes';
import { RouterModule } from '@angular/router';
import { OrderService } from './shared/order.service';
import { OrderItemsComponent } from './orders/order-items/order-items.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderItemsComponent
  ],

  
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ModalModule.forRoot(),
    HttpClientModule
  ],
  
  entryComponents: [OrderItemsComponent],
  providers: [
    OrderService,
    appRoutingProviders
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
