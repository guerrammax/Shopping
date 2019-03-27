//Modules of router
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//import components
import { OrderComponent } from './orders/order/order.component';
// import { OrdersComponent } from './orders/orders.component';


const ROUTES: Routes = [
    {path:'', redirectTo:'order', pathMatch: 'full'},
    {path: 'orders', component:OrderComponent},  
    // {path: 'orders', component:OrderComponent},  
    // {path: 'order', children:[
    //     {path:'', component:OrderComponent},
    //     {path:'edit/:id', component:OrderComponent}
    // ]},
       
     {path:'**',  component:OrderComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);