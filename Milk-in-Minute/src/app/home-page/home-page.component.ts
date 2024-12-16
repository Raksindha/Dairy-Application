import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../../Models/product';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

constructor(private productservice:ProductService){

}
m:Product[]=[];
onSearchNote(searchnote:string)
{
  this.productservice.getproducts().subscribe({
    next: (data) => {
      if (searchnote === '' || !searchnote ) {
        this.m = data;
      }
      if(searchnote==='All'){
        this.m=data;
      }
      else {
        this.m = data.filter((note) =>
          note.productName?.toLowerCase().startsWith(searchnote.toLowerCase())
        );
      }
    },
    error: (error) => {
      alert('Failed to Fetch Notes Due to Server Error !!');
    },
  });

}

ngOnInit(): void {
  this.productservice.getproducts().subscribe(data=>{
    this.m=data;
    
  })
}
  onClick(value: any) {
    this.productservice.getproducts().subscribe((data) => {
      if (value == "") {
        this.m = data;
      }
      else {
        this.m = data.filter((f) => f.category?.toLowerCase().startsWith(value.toLowerCase()))
      }

  
    });
  }
}