import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {BubbleCollisionService} from './bubbleCollision.service';
import {Bubble} from './bubble.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, AfterViewInit {

  @ViewChild('bubbleContainer') bubbleContainer: ElementRef;
  skillsBubble: Bubble;
  projectsBubble: Bubble;
  solvingBubble: Bubble;
  contactBubble: Bubble;
  bubbles: Bubble[];
  windowHeight: number;

  constructor(private bubbleCollisionService: BubbleCollisionService) { }

  ngOnInit(): void {
    this.windowHeight = window.innerHeight - 60; //60 is height of navbar
    console.log(this.windowHeight);
    this.skillsBubble = new Bubble("Skills", "#56ab2f", "#a8e063", 900,700, 120, 0.1,.01);
    this.projectsBubble = new Bubble("Projects", "#c66a36", "#f6876d",90,200,160, 0.1,0);
    this.solvingBubble = new Bubble("Problem Solving", "#248268",  "#4eb176", 800,240, 160,-0.1, 0.5);
    this.contactBubble = new Bubble("Contact",  "#b8334d", "#d35d8d",700,700,80, -0.1,-1);
    // this.bubbles = [this.projectsBubble, this.solvingBubble];
    this.bubbles = [this.skillsBubble, this.projectsBubble, this.solvingBubble, this.contactBubble];

  }

  private setBubbleSizes(screenWidth: number) {
    this.skillsBubble.diameter = Math.max(screenWidth * 0.2, 120);
    this.projectsBubble.diameter = Math.max(screenWidth * 0.25, 160);
    this.solvingBubble.diameter = Math.max(screenWidth * 0.25, 160);
    this.contactBubble.diameter = Math.max(screenWidth * 0.1, 80);
  }

  @HostListener('window:resize', ['$event'])
  onResize(el) {
    let width = this.bubbleContainer.nativeElement.clientWidth;
    this.bubbleCollisionService.setContainerWidth(width);
    //think i'd need to go through and update the diameters of each bubble based on the new width.
    this.setBubbleSizes(width);
  }

  ngAfterViewInit(): void {
    let div = this.bubbleContainer.nativeElement;
    let {width, height} = div.getBoundingClientRect();
    this.setBubbleSizes(width);
    this.bubbleCollisionService.init(this.bubbles, width, height, 20, 20, 20);
    this.bubbleCollisionService.startControl();
  }

  scrollToSection(bubble: Bubble) {
    switch(bubble.label) {
      case "Skills":
        document.querySelector('#skills').scrollIntoView();
        break;
      case "Projects":
        document.querySelector('#projects').scrollIntoView();
        break;
      case "Problem Solving":
        document.querySelector('#solving').scrollIntoView();
        break;
      case "Contact":
        document.querySelector('#contact').scrollIntoView();
        break;
    }
  }
}
