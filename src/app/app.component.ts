import { Component, OnInit } from '@angular/core';
import { Title ,Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'NTTS ALL TASKS';
  constructor(
    public router:Router,
    private titleService:Title,
    private meta:Meta
    ){}
    navbar = true;
    ngOnInit(): void {
      this.titleService.setTitle(this.title)
      this.meta.addTag({name:'author', content:'resgitech'});
      this.meta.addTag({name:'AngularTask', content:'index,follow'});
      this.meta.updateTag({name:'Keyword', content:'Angular Blog, Blogger'});
      this.meta.updateTag({name:'description', content:'Creating task In angular'});
     
    }

}
