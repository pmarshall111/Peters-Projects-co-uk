import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {keys} from "./email.keys"
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

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
  sendInProgress: boolean;
  unsuccessfulEmail: boolean;

  constructor() { }

  ngOnInit(): void {
    this.sendInProgress = false;
    this.unsuccessfulEmail = false;
  }

  onSendEmail(contactForm: NgForm) {
    if (contactForm.valid) {
      this.sendInProgress = true;
      this.unsuccessfulEmail = false;
      let {user_id, template_id} = keys;
      let templateParams = {
        from_name: this.fullName,
        from_email: this.email,
        message_html: this.message
      };
      emailjs.send("gmail", template_id, templateParams, user_id)
        .then((result: EmailJSResponseStatus) => {
          this.sendInProgress = false;
          this.submitted.emit(true);
        }, (error) => {
          console.log(error.text);
          this.sendInProgress = false;
          this.unsuccessfulEmail = true;
        });
    }
  }
}
