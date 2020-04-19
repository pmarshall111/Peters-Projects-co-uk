import {Directive, ElementRef, EventEmitter, HostListener, Output, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMinMaxLimiter]'
})

//Directive uses Event emitter so we can control when we tell the component that the value has changed.
//Cannot only use renderer as 2-way binding with ngModel is unaffected by renderer changes.
export class MinMaxLimiterDirective {

  constructor(private elementRef: ElementRef<HTMLInputElement>, private renderer2: Renderer2) {}

  @Output() inputChange: EventEmitter<number> = new EventEmitter<number>();

  // @HostListener("keyup")
  @HostListener("input")
  onChange() {
    console.log({elRef: this.elementRef})
    console.log("change/keyup")
    const {min, max, value} = this.elementRef.nativeElement;
    if (value) {
      let toEmit = +value;
      if (value.length > 0 && +value < +min) {
        toEmit = +min;
      } else if (+value > +max) {
        toEmit = +max;
      }
      this.renderer2.setProperty(this.elementRef.nativeElement, "value", toEmit);
      this.inputChange.emit(+toEmit);
    }
  }

  @HostListener("blur")
  onBlur() {
    console.log("blur")
    const {value, defaultValue} = this.elementRef.nativeElement;
    if (value.length == 0) {
      let nVal = +defaultValue || 0;
      this.inputChange.emit(nVal);
      this.renderer2.setProperty(this.elementRef.nativeElement, "value", nVal);
    }
  }
}
