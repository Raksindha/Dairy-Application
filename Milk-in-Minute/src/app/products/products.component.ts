import { Component, Input } from '@angular/core';
import { Product } from '../../Models/product';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productList:any;
  constructor(private router: Router,private productservice:ProductService,private cartservice:CartService) {}
  @Input()
  items?: Product

  ngOnInit(){}
    // this.productservice.getproducts().subscribe(res=>{
    //   this.productList=res;
      
    //   this.productList.forEach((a:any)=>{
    //     Object.assign(a,{quantity:1,total:a.price});
    //   });
    // })

  


addtocart(item:any){

this.cartservice.addtoCart(item);
}


}
