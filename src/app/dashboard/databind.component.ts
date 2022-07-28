import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {
  data:any
  userId:any
  constructor( private http:HttpClient,
    private meta :Meta,
    private titleservice:Title) { }

  ngOnInit(): void {
    this.meta.addTag({name:'author', content:'resgitech'});
    this.meta.addTag({name:'AngularTask', content:'index,follow'});
    this.meta.updateTag({name:'Keyword', content:'databind component Angular'});
    this.meta.updateTag({name:'description', content:'binding data in angular'});
  }
  viewdata(){

    this.http.get('http://localhost:3000/fakedata/').subscribe((data: any) => {
      console.log(data);
    this.data = data;
    })
  }

}
