import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

import {links} from "./links"

@Component({
  selector: 'app-socialbutton',
  templateUrl: './socialbutton.component.html',
  styleUrls: ['./socialbutton.component.css']
})
export class SocialbuttonComponent implements OnInit, AfterViewInit {
  @Input() company: String;
  @Input() link?: String;
  @Input() text?: String;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (!this.link) {
      // @ts-ignore
      this.link = links[this.company];
    }
    if (!this.text) {
      this.text = this.company;
    }
  }



}
