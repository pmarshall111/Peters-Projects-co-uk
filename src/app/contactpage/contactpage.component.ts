import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {
  formSubmitted: boolean;

  constructor() { }

  ngOnInit(): void {
    this.formSubmitted = false;
  }

  onFormSubmit() {
    this.formSubmitted = true;
  }

}
