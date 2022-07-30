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
  @Output() newdatasendEvent = new EventEmitter<string>()
  value: any;
  constructor(private http: HttpClient, private fb: FormBuilder) { }
  customername = [];
  data: any = [];
  formdata!: FormGroup;

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
  sendparent() {
    console.log(this.formdata.value)
    this.newdatasendEvent.emit(this.formdata.value)
    return false
  }
}
