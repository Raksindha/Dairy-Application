
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Order } from '../../Models/Order';
import { OrdersService } from '../services/orders.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
constructor(private http:HttpClient,private orderservice:OrdersService,){}
displayedColumns: string[] = ['S No', 'customerName','customerEmail','phoneNumber','price'];
dataSource:Order[]=[]
ngOnInit(){
  this.orderservice.getOrders().subscribe((data)=>{
    this.dataSource=data;
  })
}
}

  

  
  