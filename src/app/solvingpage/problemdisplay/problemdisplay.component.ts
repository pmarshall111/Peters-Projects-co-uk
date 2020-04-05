import {Component, Input, OnInit} from '@angular/core';
import {ProblemModel} from '../problem.model';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-problemdisplay',
  templateUrl: './problemdisplay.component.html',
  styleUrls: ['./problemdisplay.component.css']
})
export class ProblemdisplayComponent implements OnInit {
  @Input() problem: ProblemModel;
  problemPageIndex: string;

  constructor() { }

  ngOnInit(): void {
    this.onApproachPage();
  }

  onUserInput(inputForm: NgForm) {
    // if (contactForm.valid) {
    //   contactForm.resetForm();
    // }
    inputForm.resetForm();
  }

  onApproachPage() {
    this.problemPageIndex = "approach"
  }

  onRunCodePage() {
    this.problemPageIndex = "run code"
  }

  onShowCodePage() {
    this.problemPageIndex = "show code"
  }

  isApproachPage() {
    return this.problemPageIndex === "approach"
  }

  isRunCodePage() {
    return this.problemPageIndex === "run code"
  }

  isShowCodePage() {
    return this.problemPageIndex === "show code"
  }
}
