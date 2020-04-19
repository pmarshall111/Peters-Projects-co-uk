import {AfterViewChecked, Component, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-skyscrapers',
  templateUrl: './skyscrapers.component.html',
  styleUrls: ['./skyscrapers.component.css']
})
export class SkyscrapersComponent implements OnInit {
  gridSize: number;
  constructor() { }

  ngOnInit(): void {
    this.gridSize = 5;
  }

  changeGridSize(nSize) {
    this.gridSize = nSize;
  }

}
