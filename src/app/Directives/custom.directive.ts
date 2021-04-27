import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private myRef:ElementRef) { 
    // console.log(myRef);
    // myRef.nativeElement.style.backgroundColor="red";
    

  }

  @HostListener('click') clickMe(){
    this.myRef.nativeElement.style.backgroundColor="red";

  }
}
