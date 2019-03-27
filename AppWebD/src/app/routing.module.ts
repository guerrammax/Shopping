import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  { path: 'home', component: OrdersComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
