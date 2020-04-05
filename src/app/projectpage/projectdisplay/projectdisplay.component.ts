import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ImageDisplayService} from './image-display.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-projectdisplay',
  templateUrl: './projectdisplay.component.html',
  styleUrls: ['./projectdisplay.component.css'],
})
export class ProjectdisplayComponent implements OnInit, OnChanges, OnDestroy {
  @Input() toDisplay: string[];
  imgSrc: string;
  index: number;
  subscription: Subscription;

  constructor(private imgDisplayService: ImageDisplayService) { }

  ngOnInit(): void {
    this.imgDisplayService.setImages(this.toDisplay);
    this.subscription = this.imgDisplayService.imageToShow.subscribe(nextIndex => {
      this.index = nextIndex;
      this.imgSrc = this.imgDisplayService.getImage(nextIndex);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.imgDisplayService.setImages(this.toDisplay);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onDotClicked(index: number) {
    this.imgDisplayService.updateSelectedImage(index);
  }
}
