import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorchange]'
})
export class ColorchangeDirective {

  constructor(private Element:ElementRef) {
    console.log(ElementRef);
     Element.nativeElement.style = "color:green;"
    //  Element.nativeElement.validation = "maxLength:10"

}
}
