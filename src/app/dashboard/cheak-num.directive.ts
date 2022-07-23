import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCheakNum]'
})
export class CheakNumDirective implements OnInit {
  event: any
  value:any =10;

  constructor(private element: ElementRef) { }
  ngOnInit(): void {
  }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    console.log(event);
    const initalValue = this.element.nativeElement.value;
    console.log(initalValue);

    this.element.nativeElement.value = initalValue.replace(/[^0-9]*/g,'');
    if (initalValue != this.element.nativeElement.value) {
      event.preventDefault()
      // this.element.nativeElement.style="color:red"
    }
  }


}
