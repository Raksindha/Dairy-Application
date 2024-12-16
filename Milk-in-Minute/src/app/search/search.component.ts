import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  

  searchnote:string="";
  options=["All","Milk","Cheese","Yogurt","Cream"];
  @Output()
  searchNote:EventEmitter<string>=new EventEmitter<string>()
  
  value:string=""
  
  constructor(){}
    ngOnInit(): void {
    
    }
  
  searchInput(){
    this.searchNote.emit(this.searchnote);
    this.searchnote="";
  }

  
}
