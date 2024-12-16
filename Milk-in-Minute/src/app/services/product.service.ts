import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../Models/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../../Models/Order';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private HTTP:HttpClient) { }
  url:string="http://localhost:3000/products";

 
  getproducts():Observable<Product[]>{
    return this.HTTP.get<Product[]>(this.url)
  }

getOrder(id:any):Observable <Product>{
  return this.HTTP.get<Product>(`${this.url}/${id}`)
}

  }