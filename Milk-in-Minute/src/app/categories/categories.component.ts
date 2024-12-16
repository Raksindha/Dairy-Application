import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../services/product.service';




@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {


  filter: string = "";
  constructor(private productService: ProductService) { }
  @Output() filterEvent = new EventEmitter();
  click() {
    
    this.filterEvent.emit(this.filter)

  }
}  





























  // filter: string = "";
  // constructor(private productService: ProductService) { }
  // @Output() filterEvent = new EventEmitter();
  
  // click() {
  //   this.filterEvent.emit(this.filter)

  // }

//   items: string[] = ['','Yogurt', 'Milk', 'Cheese', 'Cream'];
//   selectedFilter: string | null = null;
// filterOptions: any;

//  filter(item: string) {
//     this.selectedFilter = item;
  
//   }
// }