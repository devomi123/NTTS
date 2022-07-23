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
  mode: string = "Dark";
  classname: any;
  data:any;
  p:any
  ngOnInit(): void {
  }

  tapbutton(){
    this.array.forEach(_element => {
    this.array = String.prototype.toLocaleUpperCase.apply(_element).split(",");
      this.name.push(this.array)
       });
     alert(this.name)
  }
  modechange(event:Event){
    let ctrl = (<HTMLInputElement>event.target).value;
    // console.log(ctrl);
    if (ctrl == "Dark") {
      // console.log("dark");
      this.mode = "Light"
      this.classname="dark-theme";
    }
    else {
      // console.log("whitre");
      this.mode = "Dark";
      this.classname="light-theme";
    }
  }
  }

