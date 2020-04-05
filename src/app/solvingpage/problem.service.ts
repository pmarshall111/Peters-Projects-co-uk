import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ProblemModel} from './problem.model';

@Injectable({
  providedIn: 'root',
})
export class ProblemService {
  problems: ProblemModel[] = [
    new ProblemModel("4x4 Skyscrapers", "Skyscrapers in a row et ete etc etc", "Did some cool stuff",
      "function foo(a,b) {\nlet i = 0;\n return i;\n}", () =>
      (a,b) => 0
     ),
    new ProblemModel("Gerrymander", "Split an area into many voting districts such that your party wins despite being outvoted", "More cool stuff",
      "function gerrymander(a) {\nreturn -1;\n}", () => -1),
    new ProblemModel("Minesweeper Solver", "Solve a game of minesweeper", "Didn't do anything whoops",
      "function helloWorld() {\nconsole.log(\"Hello World\");\nreturn \"Hi world\";\n})", () => "Hello World")
  ]
  selectedProblemIdx = 0;

  getAllProblems() {
    return this.problems.slice();
  }

  getProblem() {
    return this.problems[this.selectedProblemIdx];
  }

  nextProblem() {
    if (this.selectedProblemIdx < this.problems.length-1) {
      this.selectedProblemIdx++;
    } else {
      this.selectedProblemIdx = 0
    }
    return this.getProblem();
  }

  prevProblem() {
    if (this.selectedProblemIdx > 0) {
      this.selectedProblemIdx--;
    } else {
      this.selectedProblemIdx = this.problems.length-1;
    }
    return this.getProblem();
  }
}
