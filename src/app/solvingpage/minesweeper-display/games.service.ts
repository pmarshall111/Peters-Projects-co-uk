import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MinesweeperModel} from './minesweeper.model';
import {GamesCollection} from './games.collection';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  problems: MinesweeperModel[] = GamesCollection;
  selectedProblemIdx = 0;
  problem: BehaviorSubject<MinesweeperModel> = new BehaviorSubject<MinesweeperModel>(this.problems[this.selectedProblemIdx]);

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
