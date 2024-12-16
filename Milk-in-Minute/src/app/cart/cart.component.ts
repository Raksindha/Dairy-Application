import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../../Models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../services/orders.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from '../../Models/Order';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  product: Product[] = [];
  
  products: Product={
    id: 0,
    productName: '',
    category: '',
    ratings: 0,
    descriptions: '',
    price: 0,
    quantity: 0,
    total: 0
  }
  order: Order = {
   
    productName: "",
    id: 0,
    customerName: undefined,
    customerEmail: '',
  }
  
grandTotal:number=0;
orderForm: any;
  
 
constructor(private cartservice:CartService,private orderService:OrdersService,private productservice:ProductService,
  private router:Router, private snackBar: MatSnackBar,private activedroute : ActivatedRoute){

}
ngOnInit(){
  // this.activedroute.paramMap.subscribe((data)=>{
  //   let id=data.get('id')?? 0

  //   this.productservice.getproducts(+id)
  // })
  this.cartservice.getProducts().subscribe(res=>{
    this.product=res;
    this.grandTotal=this.cartservice.getTotalPrice();
})

}
increaseQuantity(products:any)
{
products.quantity=(products.quantity||0)+1;
}

decreaseQuantity(products:any){
if (products.quantity && products.quantity > 1) {
  products.quantity -= 1;
}
}
getTotalPrice(products:any){
  const total=products.price*products.quantity
  return total;
}


  grandTotalAmnt(): number {
    let totalPrice = 0;
    for (const product of this.product) {
      totalPrice += product.price * product.quantity;
    }
    return totalPrice;
  }

removeItem(products: any){
  this.cartservice.removeCartItemList(products)
}
emptyCart(){
  this.cartservice.removeAllCard();
}
submitStatus:boolean=false;
placeorder(){ 
  if (this.order.customerName && this.order.phoneNumber && this.order.customerEmail ) 
  this.order.productName = this.products.productName;
  this.order.price = this.products.price;
  this.orderService.addOrders(this.order).subscribe((data) => {
    this.snackBar.open('Order Placed Successsfully', 'success', {
      duration: 1000
    })
    this.submitStatus=true;
   
  },
    error => {
      alert('failed to Place order')
    }
  )

}}




