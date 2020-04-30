import {AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {SkillModel} from '../skill.model';

@Component({
  selector: 'app-skillitem',
  templateUrl: './skillitem.component.html',
  styleUrls: ['./skillitem.component.css']
})
export class SkillitemComponent implements OnInit, AfterViewInit {
  @Input() technology: SkillModel;
  @ViewChild("hex") hex: ElementRef<HTMLDivElement>;
  borderColour: string;
  width: number;
  borderWidth: number;
  topStyle;
  bottomStyle;
  middleStyle;

  constructor() { }

  ngOnInit(): void {
    this.borderColour = "#333";
  }

  ngAfterViewInit(): void {
    this.setWidth();
  }

  @HostListener("window:resize")
  onResize() {
    this.setWidth();
  }

  private setWidth() {
    this.width = this.hex.nativeElement.getBoundingClientRect().width;
    this.borderWidth = this.width*0.05;
    this.topStyle = this.getTopStyle();
    this.middleStyle = this.getMiddleStyle();
    this.bottomStyle = this.getBottomStyle();
    console.log(this.topStyle)
    console.log(this.width)
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
      'margin': this.getHeight()/2 + 'px 0'
    }
  }

  getHeight(){
    //calc'd from drawing hexagon and working out for equal sides.
    return (this.width/2)/Math.cos(30*Math.PI/180);
  }

  getBeforeAfterTopBottomOffset() {
    return (this.width/Math.sqrt(2))/2;
  }

  getBeforeAfterWidthHeight(){
    return this.width/Math.sqrt(2);
  }

  getBeforeAfterLeft() {
    return (this.width-(this.width/Math.sqrt(2)))/2 - this.borderWidth;
  }

  getBeforeAfterBorderWidth() {
    return Math.sqrt(2*this.borderWidth**2);
  }
}
