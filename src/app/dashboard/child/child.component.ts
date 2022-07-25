import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentdata:any;
  //beverage = "tea";
// @Output() newBeverageEvent = new EventEmitter<string>()
@Output() newdatasendEvent = new EventEmitter<string>()
constructor() { }
customername = [];
// parentdata:any='' ;
data: any = [];
formdata:any
name:any
ngOnInit(): void {

}

//  addBeverageEvent(value:any){
//   this.newBeverageEvent.emit(value)
//   return false
//  }
sendparent(value:any){
this.newdatasendEvent.emit(value)
console.log(value);
return false
}
}
