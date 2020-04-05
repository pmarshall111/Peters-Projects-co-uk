import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-socialbutton',
  templateUrl: './socialbutton.component.html',
  styleUrls: ['./socialbutton.component.css']
})
export class SocialbuttonComponent implements OnInit {
  @Input() company;

  constructor() { }

  ngOnInit(): void {
  }

}
