import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../Models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  url:string="http://localhost:3001/order";
  constructor(private http:HttpClient) {}

  addOrders(data:Order):Observable <Order>
  {
    return this.http.post<Order>(`${this.url}`,data);
  }

  getOrders():Observable <Order[]>
  {
    return this.http.get<Order[]>(`${this.url}`);
  }
}
 

 