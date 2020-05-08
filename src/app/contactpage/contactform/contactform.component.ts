import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  @Output() submitted = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onSendEmail(contactForm: NgForm) {
    if (contactForm.valid) {
      contactForm.resetForm();
      this.submitted.emit(true);
    }
  }
}
