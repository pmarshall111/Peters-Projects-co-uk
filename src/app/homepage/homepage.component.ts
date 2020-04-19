import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {BubbleCollisionService} from './bubbleCollision.service';
import {Bubble} from './bubble.model';

@Component({
  selector: 'app-intropage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, AfterViewInit {

  @ViewChild('bubbleContainer') bubbleContainer: ElementRef;
  projectsBubble: Bubble;
  solvingBubble: Bubble;
  contactBubble: Bubble;
  bubbles: Bubble[];
  windowHeight: number;

  constructor(private bubbleCollisionService: BubbleCollisionService) { }

  ngOnInit(): void {
    this.windowHeight = window.innerHeight - 120; //height of nav and footer = 60
    console.log(this.windowHeight);
    this.projectsBubble = new Bubble("Projects", 90,200,160, 0.1,0);
    this.solvingBubble = new Bubble("Solving", 400,240, 160,-0.1, 0.5);
    this.contactBubble = new Bubble("Contact", 500,500,80, -0.1,-1);
    // this.bubbles = [this.projectsBubble, this.solvingBubble];
    this.bubbles = [this.projectsBubble, this.solvingBubble, this.contactBubble];
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

  // onResize(event: any) {
  //   console.log(event);
  //   let newWidth = event.target.innerWidth;
  //   this.bubbleCollisionService.setContainerWidth(newWidth);
  // }



}
