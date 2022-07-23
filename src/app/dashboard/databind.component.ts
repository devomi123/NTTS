import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {
  data:any
  userId:any
  constructor( private http:HttpClient) { }

  ngOnInit(): void {
  }
  viewdata(){

    this.http.get('http://localhost:3000/fakedata/').subscribe((data: any) => {
      console.log(data);
    this.data = data;
    })
  }

}
