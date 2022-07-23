import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  constructor(private http:HttpClient) { }
// data:any;
name:any;
p:number=1;
data:any[]=[]
  ngOnInit(): void {
    this.http.get('http://localhost:3000/posts/').subscribe((data:any) => {
      console.log(data);
      this.data = data;

    })
  }
  Search(){
if(this.name == ""){
this.ngOnInit();
}else{
  this.data = this.data.filter(res =>{
  return res.name.match(this.name.toLowerCase())
  });
}
  }

}
