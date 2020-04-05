import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  fullName: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSendEmail(contactForm: NgForm) {
    if (contactForm.valid) {
      contactForm.resetForm();
    }
  }
}
