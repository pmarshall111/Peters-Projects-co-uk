import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    //attributes for getting bootstrap scrollspy to work
    this.renderer.setAttribute(document.body, "data-spy", "scroll");
    this.renderer.setAttribute(document.body, "data-target", "#navbar");
    this.renderer.setAttribute(document.body, "data-offset", "60");
    this.renderer.setStyle(document.querySelector("html"), "scroll-behavior", "smooth");
  }
}
