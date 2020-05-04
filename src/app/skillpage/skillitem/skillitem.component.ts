import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {SkillModel} from '../skill.model';

@Component({
  selector: 'app-skillitem',
  templateUrl: './skillitem.component.html',
  styleUrls: ['./skillitem.component.css']
})
export class SkillitemComponent implements OnInit, OnChanges {
  @Input() technology: SkillModel;
  @Input() containerWidth: number;
  @ViewChild("hex") hex: ElementRef<HTMLDivElement>;
  borderColour: string;
  borderWidth: number;
  topStyle;
  bottomStyle;
  middleStyle;
  paddingPerc;

  constructor() { }

  ngOnInit(): void {
    this.borderColour = "#333";
    this.paddingPerc = 10;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.containerWidth) {
      this.containerWidth *= ((100-this.paddingPerc)/100);
      this.setWidth();
    }
  }

  private setWidth() {
    this.borderWidth = this.containerWidth*0.05;
    this.topStyle = this.getTopStyle();
    this.middleStyle = this.getMiddleStyle();
    this.bottomStyle = this.getBottomStyle();
    console.log(this.containerWidth);
  }

  getTopStyle() {
    return {'width': this.getBeforeAfterWidthHeight() + 'px',
      'height': this.getBeforeAfterWidthHeight() + 'px',
      'left': this.getBeforeAfterLeft() + 'px',
      'top': '-' + this.getBeforeAfterTopBottomOffset() + 'px',
      'border-top': 'solid ' + this.getBeforeAfterBorderWidth() + 'px ' + this.borderColour,
      'border-right': 'solid ' + this.getBeforeAfterBorderWidth() + 'px ' + this.borderColour};
  }

  getBottomStyle() {
    return {'width': this.getBeforeAfterWidthHeight() + 'px',
      'height': this.getBeforeAfterWidthHeight() + 'px',
      'left': this.getBeforeAfterLeft() + 'px',
      'bottom': '-' + this.getBeforeAfterTopBottomOffset() + 'px',
      'border-bottom': 'solid ' + this.getBeforeAfterBorderWidth() + 'px ' + this.borderColour,
      'border-left': 'solid ' + this.getBeforeAfterBorderWidth() + 'px ' + this.borderColour};
  }

  getMiddleStyle() {
    return {'height': this.getHeight() + 'px',
    'border-left': 'solid ' + this.borderWidth + 'px ' + this.borderColour,
      'border-right': 'solid ' + this.borderWidth + 'px ' + this.borderColour,
      'margin': this.getHeight()/2 + 'px 0',
      'width': this.containerWidth+'px'
    }
  }

  getHeight(){
    //calc'd from drawing hexagon and working out for equal sides.
    return (this.containerWidth/2)/Math.cos(30*Math.PI/180);
  }

  getBeforeAfterTopBottomOffset() {
    return (this.containerWidth/Math.sqrt(2))/2;
  }

  getBeforeAfterWidthHeight(){
    return this.containerWidth/Math.sqrt(2);
  }

  getBeforeAfterLeft() {
    return (this.containerWidth-(this.containerWidth/Math.sqrt(2)))/2 - this.borderWidth;
  }

  getBeforeAfterBorderWidth() {
    return Math.sqrt(2*this.borderWidth**2);
  }
}
