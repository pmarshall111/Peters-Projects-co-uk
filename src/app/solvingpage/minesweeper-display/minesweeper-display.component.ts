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

  constructor() { }

  ngOnInit(): void {
    let firstGame = GamesGroup[0];
    this.current = firstGame.start;
    this.flags = firstGame.bombs;
    this.game = firstGame;
    this.status = "Unsolved"
    this.resetToHighlight();
  }

  getColour(numb: string) {
    switch (numb) {
      case "0":
        return "black";
      case "1":
        return "blue";
      case "2":
        return "green";
      case "3":
        return "red";
        case "4":
          return "purple";
      case "5":
        return "brown";
      case "6":
        return "turquoise";
      case "7":
        return "black";
        case "8":
          return "grey";
      default:
        return "#dddddd";
    }
  }

  getBackground(str: string) {
    switch (str) {
      case "x":
        return "url(/assets/flag.png)";
    }
  }

  getBackColour(str: string, i: number, j: number) {
    if (this.toHighlight[i][j]) {
        return this.toHighlight[i][j];
    } else if (str == "?" || str == "x") {
      return "#ddd";
    } else {
      return "#eee";
    }
  }

  resetToHighlight() {
    this.toHighlight = {};
    this.current.forEach((row,idx) => this.toHighlight[idx] = {});
  }

  startSolving() {
    this.current = this.game.start;
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('./minesweeper.worker', { type: 'module' });
      //here we need to get changes object out
      worker.postMessage({newGame: this.game})
      let solvingInterval = 50;
      let stillSolving = true;
      setTimeout(function x() {
        worker.postMessage("")
        if (stillSolving) {
          setTimeout(() => x(), solvingInterval);
        }
      }, solvingInterval);
      worker.onmessage = ({ data }) => {
        let {changes, optionsChanges, finished, solutionPossible, flags, current} = data;
        this.flags = flags;
        // if (changes.length > 1) {
        //   solvingInterval = 200;
        // } else if (optionsChanges.length) {
        //   solvingInterval = 1000;
        // } else {
        //   solvingInterval = 50;
        // }


        if (finished || !solutionPossible) {
          stillSolving = false;
          this.setBoard(changes, optionsChanges);
          this.status="Solved"
          this.resetToHighlight();
      } else {
          this.resetToHighlight();
          this.setBoard(changes, optionsChanges);
          this.setStatus(changes, optionsChanges);
        }

      }
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }

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

  private setBoard(changes, optionsChanges) {
    if (changes.length) {
      changes.forEach(ch => {
        let {i,j, isOriginal, val} = ch;
        let colour = isOriginal ? SELECTED : val == "x" ? NEW_FLAG : OPENED;
        this.toHighlight[i][j] = colour;
        this.current[i][j] = val;
      })
    } else if (optionsChanges.length) {
      optionsChanges.forEach(op => {
        let {i,j,val,inEveryOption} = op;
        let colour;
        if (val == "b") {
          colour = inEveryOption ? ALL_ITER_SUSP_BOMB : SUSP_BOMB;
        }  else {
          colour = inEveryOption ? ALL_ITER_SUSP_SPACE : SUSP_SPACE;
        }
        this.toHighlight[i][j] = colour;
      })
    }
  }

}
