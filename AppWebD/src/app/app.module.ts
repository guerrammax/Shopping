import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderItemComponent } from './components/order-item/order-item.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTabsModule, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

import {MatSidenavModule} from '@angular/material/sidenav';


import { RoutingModule } from "./routing.module";
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  entryComponents: [OrderItemComponent],
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderItemComponent,
    MainNavComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    RoutingModule,
    MatTabsModule,
    MatSidenavModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
