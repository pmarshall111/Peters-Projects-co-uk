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
    this.skillsBubble = new Bubble("Skills", 200,500, 120, 0.1,.01);
    this.projectsBubble = new Bubble("Projects", 90,200,160, 0.1,0);
    this.solvingBubble = new Bubble("Solving", 400,240, 160,-0.1, 0.5);
    this.contactBubble = new Bubble("Contact", 500,500,80, -0.1,-1);
    // this.bubbles = [this.projectsBubble, this.solvingBubble];
    this.bubbles = [this.skillsBubble, this.projectsBubble, this.solvingBubble, this.contactBubble];
  }

  @HostListener('window:resize', ['$event'])
  onResize(el) {
    this.bubbleCollisionService.setContainerWidth(this.bubbleContainer.nativeElement.clientWidth);
  }

  ngAfterViewInit(): void {
    let div = this.bubbleContainer.nativeElement;
    let {width, height} = div.getBoundingClientRect();
    this.bubbleCollisionService.init(this.bubbles, width, height, 20, 20, 20);
    this.bubbleCollisionService.startControl();
  }
}
