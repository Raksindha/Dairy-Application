import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { Product } from '../../Models/product';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'


})
export class HeaderComponent implements OnInit {
  
totalItem:number=0;

constructor(private cardservice:CartService,){

}
ngOnInit():void{
this.cardservice.getProducts().subscribe(res=>{
this.totalItem=res.length;
})
}


}
