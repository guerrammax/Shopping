import { Injectable } from '@angular/core';
import { Order } from './order.modelo';
import { OrderItem } from './order-item.modelo';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  formData:Order;
  orderItems: OrderItem[];

  constructor() { }
}
