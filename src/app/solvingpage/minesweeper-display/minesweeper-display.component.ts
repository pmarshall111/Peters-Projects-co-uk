import { Component, OnInit } from '@angular/core';
import {GamesGroup} from './games.group';
import {MinesweeperModel} from './minesweeper.model';
import {colours} from './colourkey/colours';
const {SELECTED, OPENED, NEW_FLAG, SUSP_BOMB, ALL_ITER_SUSP_BOMB, SUSP_SPACE, ALL_ITER_SUSP_SPACE} = colours;

@Component({
  selector: 'app-minesweeper-display',
  templateUrl: './minesweeper-display.component.html',
  styleUrls: ['./minesweeper-display.component.css']
})
export class MinesweeperDisplayComponent implements OnInit {
  current: string[][];
  flags: number;
  game: MinesweeperModel;
  toHighlight: {};
  status: string;
  gameNumb: number;
  worker: Worker;
  timeout: any;
  solvingInterval: number;
  minMaxIntervals: {min: number, max: number};

  constructor() {
  }

  ngOnInit(): void {
    this.gameNumb = 1;
    let firstGame = GamesGroup[this.gameNumb];
    this.current = firstGame.getCopyOfStart();
    this.flags = firstGame.bombs;
    this.game = firstGame;
    this.status = 'Not yet started.';
    this.resetToHighlight();
    this.solvingInterval = 50;
    this.minMaxIntervals = {min: 10, max: 1000};
  }

  getColour(numb: string) {
    switch (numb) {
      case '0':
        return 'black';
      case '1':
        return 'blue';
      case '2':
        return 'green';
      case '3':
        return 'red';
      case '4':
        return 'purple';
      case '5':
        return 'brown';
      case '6':
        return 'turquoise';
      case '7':
        return 'black';
      case '8':
        return 'grey';
      case 'x':
        return 'transparent';
      default:
        return '#dddddd';
    }
  }

  getBackground(str: string) {
    switch (str) {
      case 'x':
        return 'url(/assets/flag.png)';
    }
  }

  getBackColour(str: string, i: number, j: number) {
    if (this.toHighlight[i][j]) {
      return this.toHighlight[i][j];
    } else if (str == '?' || str == 'x') {
      return '#ddd';
    } else {
      return '#eee';
    }
  }

  resetToHighlight() {
    this.toHighlight = {};
    this.current.forEach((row, idx) => this.toHighlight[idx] = {});
  }

  resetBoard() {
    this.resetToHighlight();
    this.current = GamesGroup[this.gameNumb].getCopyOfStart();
    this.pause();
    this.initialiseWorker();
  }

  pause() {
    clearTimeout(this.timeout);
    this.timeout = null;
  }

  next() {
    if (!this.worker) {
      this.initialiseWorker();
    }
    this.worker.postMessage({next: true});
  }

  prev() {
    this.pause();
    this.worker.postMessage({prev: true});
  }

  changeSolvingInterval(event) {
    this.solvingInterval = event.target.value;
  }

  initialiseWorker() {
    this.worker = new Worker('./minesweeper.worker', {type: 'module'});
    this.worker.postMessage({newGame: this.game});

    this.worker.onmessage = ({data}) => {
      let {changes, optionsChanges, finished, solutionPossible, flags, current, isPrev, solvingStatus} = data;
      if ((changes.length == 1 && changes[0].lookedAt) || (changes.length == 0 && optionsChanges.length == 0)) {
        //skipping showing the user that we move to the next square.
        return isPrev ? this.prev() : this.next();
      }
      this.flags = flags;
      // this.status = solvingStatus;
      if (isPrev) {
        //resetting the board
        this.current = current.map(x => x.slice());
        this.resetToHighlight();
        this.setStatus(changes, optionsChanges);
        this.setBoard(changes, optionsChanges);
        return;
      }
      this.resetToHighlight();
      this.setStatus(changes, optionsChanges);
      this.setBoard(changes, optionsChanges);
      if (optionsChanges.length || finished || !solutionPossible) {
        if (finished) {
          this.status = "Solved";
          this.resetToHighlight();
        }
        this.pause();
      }
    };
  }

  play() {
    if (typeof Worker !== 'undefined') {
      if (!this.worker) {
        this.initialiseWorker();
      }
      let worker = this.worker;
      this.intervalFunc();
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  private intervalFunc() {
      this.worker.postMessage({next: true});
      this.timeout = setTimeout(() => this.intervalFunc(), this.solvingInterval);
  }

  private findCurrentSquare(changes) {
    //gets the square closest to the end that has not yet been looked at.
    for (let i = changes.length-1; i>=0; i--) {
      if (!changes[i].lookedAt) {
        return changes[i];
      }
    }
    return null;
  }

  private setStatus(changes, optionsChanges) {
    if (changes.length == 1) {
      this.status = "Looking for a square where we can open surrounding boxes or place flags"
    } else if (changes.length > 1) {
      this.status = "Opening boxes and placing flags"
    } else {
      this.status = "No easy to open squares. Currently going through possible arrangements of flags to suit the numbers. " +
        "Any squares that appear as flags in all possible arrangements will be marked as a bomb, and likewise for spaces, where the square will be opened."
    }
  }

  private highlightRecursively(changes, index, iter) {
    //colours the most recent square darkest and shows the route from the original square.
    let change = changes[index];
    let {i, j, isOriginal, val, prevChange} = change;
    let colour = `hsl(283,100%,35%)`
    this.toHighlight[i][j] = colour;
    if (prevChange != -1) {
      this.highlightRecursively(changes, prevChange, iter+1);
    }
  }

  private setBoard(changes, optionsChanges) {
    if (changes.length) {
      let foundLastUnexploredChange = false;
      for (let idx = changes.length-1; idx>=0; idx--) {
        let {y, x, isOriginal, lookedAt, val, prevChange} = changes[idx];
        this.current[y][x] = val;
        if (!lookedAt && !foundLastUnexploredChange) {
          this.toHighlight[y][x] = `hsl(283,100%,35%)`
          if (prevChange != -1) {
            // this.highlightRecursively(changes, prevChange, 1);
          }
          foundLastUnexploredChange = true;
        } else if (!this.toHighlight[y][x]) {
          this.toHighlight[y][x] = OPENED;
        }
      }
    } else if (optionsChanges.length) {
      optionsChanges.forEach(op => {
        let {y, x, val, inEveryOption} = op;
        let colour;
        if (val == 'b') {
          colour = SUSP_BOMB;
        } else {
          colour = SUSP_SPACE;
        }
        this.toHighlight[y][x] = colour;
      });
    }
  }
}
