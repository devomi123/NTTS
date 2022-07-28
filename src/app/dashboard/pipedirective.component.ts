import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pipedirective',
  templateUrl: './pipedirective.component.html',
  styleUrls: ['./pipedirective.component.css']
})
export class PipedirectiveComponent implements OnInit {

  constructor(

    private meta :Meta,
    private titleservice:Title
  ) { }
text='Lorem ipsum dolor sit amet consectetur adipisicing elit.'

  ngOnInit(): void {
    this.meta.addTag({name:'author', content:'resgitech'});
    this.meta.addTag({name:'AngularTask', content:'index,follow'});
    this.meta.updateTag({name:'Keyword', content:'pipe & directive component Angular'});
    this.meta.updateTag({name:'description', content:'binding data in angular'});

  }

}
