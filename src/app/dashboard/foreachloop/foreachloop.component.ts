import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foreachloop',
  templateUrl: './foreachloop.component.html',
  styleUrls: ['./foreachloop.component.css']
})
export class ForeachloopComponent implements OnInit {

  constructor() { }
  array=['hello', 'bird', 'table', 'football', 'pipe', 'code']
  name:any=[]
  ngOnInit(): void {
  }

  tapbutton(){
    this.array.forEach(_element => {
    this.array = String.prototype.toUpperCase.apply(_element).split(",");
      // console.log(this.array )
      this.name.push(this.array)
      // this.name=this.array
       });
    //  console.log(this.name);
     alert(this.name)
  }
}
