import {AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {ProjectmediaModel} from '../../projectpage/projectmedia.model';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() toDisplay: ProjectmediaModel[];
  vidUrl: SafeResourceUrl;
  @ViewChild("carousel") carousel: ElementRef<HTMLDivElement>;
  elemHeight: number;
  elemWidth: number;

  constructor(private sanitiser: DomSanitizer) { }

  ngOnInit(): void {
    //cannot call safeUrl directly from html or the video will refresh every few seconds.
    //will not work properly if there is more than 1 video per project.
    this.toDisplay.forEach(media => {
      if (!media.isImage) {
        this.vidUrl = this.safeUrl(media.link);
      }
    })
  }

  ngAfterViewInit(): void {
    this.onResize();
  }

  private safeUrl(url: string): SafeResourceUrl {
    return this.sanitiser.bypassSecurityTrustResourceUrl(url);
  }

  @HostListener("window:resize")
  onResize() {
    let {width, height} = this.carousel.nativeElement.getBoundingClientRect();
    this.elemWidth = width;
    this.elemHeight = height;
  }



}
