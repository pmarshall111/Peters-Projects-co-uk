import {Component, Input, OnInit} from '@angular/core';
import {ProjectmediaModel} from '../../projectpage/projectmedia.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() toDisplay: ProjectmediaModel;

  constructor() { }

  ngOnInit(): void {
  }

}
