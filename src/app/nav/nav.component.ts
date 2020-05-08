import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  scrollIntoView(elementId: String) {
    document.querySelector(`#${elementId}`).scrollIntoView();
    //for minimising bootstrap nav after click
    this.renderer.addClass(document.querySelector(".navbar-toggler"), "collapsed");
    this.renderer.removeClass(document.querySelector("#sectionLinks"), "show");
  }

}
