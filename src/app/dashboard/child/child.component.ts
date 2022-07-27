import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() parentdata: any;
  //beverage = "tea";
  // @Output() newBeverageEvent = new EventEmitter<string>()
  @Output() newdatasendEvent = new EventEmitter<string>()
  value: any;
  constructor(private http: HttpClient, private fb: FormBuilder) { }
  customername = [];
  // parentdata:any='' ;
  data: any = [];
  formdata!: FormGroup;
  // name:any
  // email:any;
  // add:any
  ngOnInit(): void {
    this.formdata = this.fb.group({
      name: [],
      email: [],
      add: [],
    })


  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.parentdata.length > 0) {
      this.formdata.patchValue(this.parentdata[0])
    }
  }


  //  addBeverageEvent(value:any){
  //   this.newBeverageEvent.emit(value)
  //   return false
  //  }
  sendparent() {
    console.log(this.formdata.value)
    this.newdatasendEvent.emit(this.formdata.value)
    // console.log(value);
    // this.name=''
    // this.email=''
    // this.add=''


    // this.http.post<any>('http://localhost:3000/student', { title: 'Angular POST Request Example' }).subscribe(data => {
    //   this.postId = data.id;
    // })

    return false
  }
}
