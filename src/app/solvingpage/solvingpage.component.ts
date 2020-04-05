import { Component, OnInit } from '@angular/core';
import {ProblemService} from './problem.service';
import {ProblemModel} from './problem.model';

@Component({
  selector: 'app-solvingpage',
  templateUrl: './solvingpage.component.html',
  styleUrls: ['./solvingpage.component.css']
})
export class SolvingpageComponent implements OnInit {
  problems: ProblemModel[];

  constructor(private problemService: ProblemService) {}

  ngOnInit(): void {
    this.problems = this.problemService.getAllProblems();
  }

}
