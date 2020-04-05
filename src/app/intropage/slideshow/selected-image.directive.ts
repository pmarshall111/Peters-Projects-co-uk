import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appSelectedImage]'
})
export class SelectedImageDirective implements OnChanges {

  @Input("appSelectedImage") isSelected: boolean;

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    // this.el.nativeElement.style.
  }



}
