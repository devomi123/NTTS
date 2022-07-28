import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private meta :Meta,
    private titleservice:Title) { }
// data:any;
name:any;
p:number=1;
data:any[]=[]
  ngOnInit(): void {
    this.http.get('http://localhost:3000/posts/').subscribe((data:any) => {
      console.log(data);
      this.data = data;

    });
    this.meta.addTag({name:'author', content:'resgitech'});
    this.meta.addTag({name:'AngularTask', content:'index,follow'});
    this.meta.updateTag({name:'Keyword', content:'Datatable component Angular'});
    this.meta.updateTag({name:'description', content:'Table data in angular'});
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
