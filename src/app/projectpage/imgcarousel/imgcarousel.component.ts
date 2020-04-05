import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-imgcarousel',
  templateUrl: './imgcarousel.component.html',
  styleUrls: ['./imgcarousel.component.css']
})
export class ImgcarouselComponent implements OnInit {
  @Input() img: string;

  constructor() { }

  ngOnInit(): void {
  }

}
