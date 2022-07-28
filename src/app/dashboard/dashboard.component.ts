import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(
    private router:Router,
     private meta :Meta,
     private titleservice:Title ) { }

  ngOnInit(): void {
    this.meta.addTag({name:'author', content:'resgitech'});
    this.meta.addTag({name:'AngularTask', content:'index,follow'});
    this.meta.updateTag({name:'Keyword', content:'Dashboard component Angular'});
    this.meta.updateTag({name:'description', content:'Creating task In angular'});


  }


}
