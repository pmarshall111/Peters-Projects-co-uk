import { Component, OnInit } from '@angular/core';
import {colours} from './colours';
const {SELECTED, OPENED, NEW_FLAG, SUSP_BOMB, ALL_ITER_SUSP_BOMB, SUSP_SPACE, ALL_ITER_SUSP_SPACE} = colours;


@Component({
  selector: 'app-colourkey',
  templateUrl: './colourkey.component.html',
  styleUrls: ['./colourkey.component.css']
})
export class ColourkeyComponent implements OnInit {
  colours: {desc: string, colour: string}[];

  constructor() { }

  ngOnInit(): void {
    this.colours = [
      {desc: "The space we're currently looking at", colour: SELECTED},
      {desc: "Newly opened square", colour: OPENED},
      {desc: "Newly placed flag", colour: NEW_FLAG},
      {desc: "Suscpected bomb", colour: SUSP_BOMB},
      {desc: "Suspected bomb is all possibilities so far", colour: ALL_ITER_SUSP_BOMB},
      {desc: "Suspected space", colour: SUSP_SPACE},
      {desc: "Suspected space in all possibilities so far", colour: ALL_ITER_SUSP_SPACE}
    ]
  }
}
