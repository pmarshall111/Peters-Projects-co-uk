import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ProblemModel} from './problem.model';
import {problems} from './problems.collection';

@Injectable({
  providedIn: 'root',
})
export class ProblemService {
  problems: ProblemModel[] = problems;
  selectedProblemIdx = 0;
  problem: BehaviorSubject<ProblemModel> = new BehaviorSubject<ProblemModel>(this.problems[this.selectedProblemIdx]);

  nextProblem() {
    if (this.selectedProblemIdx < this.problems.length-1) {
      this.selectedProblemIdx++;
    } else {
      this.selectedProblemIdx = 0
    }
    this.problem.next(this.problems[this.selectedProblemIdx]);
  }

  prevProblem() {
    if (this.selectedProblemIdx > 0) {
      this.selectedProblemIdx--;
    } else {
      this.selectedProblemIdx = this.problems.length-1;
    }
    this.problem.next(this.problems[this.selectedProblemIdx]);
  }
}
