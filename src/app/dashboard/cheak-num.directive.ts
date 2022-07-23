import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCheakNum]'
})
export class CheakNumDirective implements OnInit {
a:any
b:any
  constructor( private element:ElementRef) { }
  ngOnInit(): void {

   this.a = this.element.nativeElement.value=""
    this.b =this.a.match(/  /g)
  }

  @HostListener('keyup') onkeyup(){
    // this.element.nativeElement.
 if(this.a.match==this.b){
  this.element.nativeElement.style.backgroundColor="red"

 }
 else{
  this.element.nativeElement.style.backgroundColor="green"

 }
  }
}
