import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  beverages=['milk','tea','coffee','juice']
  customername = [];
   parentdata:any='' ;
  data: any = [];
  ngOnInit(): void {
  }

//  addBeverage(newBeverage:string){
//  this.beverages.push(newBeverage);
//   }
  customer() {
    this.data = this.beverages
    // this.router.navigate(['/child'])
    console.log(this.data)
    return false
  }
  recivedata(data:string) {
    this.beverages.push(data);
    // this.customername.push(event)
    console.log(data);
      return false
  }

}
