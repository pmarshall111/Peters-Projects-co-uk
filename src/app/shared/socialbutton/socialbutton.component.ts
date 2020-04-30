import {Component, Input, OnInit} from '@angular/core';

import {links} from "./links"

@Component({
  selector: 'app-socialbutton',
  templateUrl: './socialbutton.component.html',
  styleUrls: ['./socialbutton.component.css']
})
export class SocialbuttonComponent implements OnInit {
  @Input() company;
  link: String;

  constructor() { }

  ngOnInit(): void {
    this.link = links[this.company];
  }

}
