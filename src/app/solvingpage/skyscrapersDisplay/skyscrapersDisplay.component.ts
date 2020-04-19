import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Solver} from '../../../../../../WebstormProjects/Skyscrapers/Solver';
import {Grid} from '../../../../../../WebstormProjects/Skyscrapers/Grid';

@Component({
  selector: 'app-skyscrapersDisplay',
  templateUrl: './skyscrapersDisplay.component.html',
  styleUrls: ['./skyscrapersDisplay.component.css']
})
export class SkyscrapersDisplayComponent implements OnInit, OnChanges {
  @Input() numCols: number;
  clues: {top: number[], left: number[], bottom: number[], right: number[]};
  squares: number[][];
  lastIterationTime: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.numCols)
    // this.clues = new Array(this.numCols).fill(0);
    this.clues = {
      top: new Array(this.numCols).fill(0),
      left: new Array(this.numCols).fill(0),
      bottom: new Array(this.numCols).fill(0),
      right: new Array(this.numCols).fill(0),
    };
    this.squares = new Array(this.numCols).fill("_").map(x => new Array(this.numCols).fill(0)); //cannot fill with array or same array is used in all positions.
    this.lastIterationTime = "n/a"
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    const {currentValue, previousValue} = changes.numCols; //cannot rely on previousValue as if input has all content removed, next time prevValue will evaluate to 0.
    if (!currentValue) {
      this.numCols = previousValue;
      return;
    }

    let toAdd = currentValue - previousValue;

    let arrsToChange = Object.values(this.clues);
    if (toAdd > 0) {
      arrsToChange.forEach(arr => arr.push(...new Array(toAdd).fill(0)))
      this.squares.forEach(row => row.push(...new Array(toAdd).fill(0)))
      this.squares.push(...new Array(toAdd).fill("_").map(x => new Array(currentValue).fill(0)))
    } else if (toAdd < 0) {
      arrsToChange.forEach(arr => arr.splice(currentValue, -toAdd));
      this.squares.splice(currentValue, -toAdd);
      this.squares.forEach(row => row.splice(currentValue, -toAdd));
    }

  }

  trackByFn(index: any, item: any) {
    return index;
  }

  updateClue(nVal, clueRow, index) {
    console.log({nVal, clueRow, index})
    clueRow[index] = nVal;
  }

  calcSkyscrapers() {
    let cluesInOrder = [...this.clues.top, ...this.clues.right, ...this.clues.bottom.slice().reverse(), ...this.clues.left.slice().reverse()];
    if (typeof Worker !== 'undefined') {
      const worker = new Worker('./skyscrapers-display.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        console.log(data)
        if (data.grid) {
          this.squares = data.grid.grid;
          this.lastIterationTime = data.seconds;
        } else {
          this.lastIterationTime = 0;
        }
      };
      worker.postMessage(cluesInOrder);
    } else {
      // Web Workers are not supported in this environment.
      let beforeTime = new Date().getTime();
      let solver = new Solver();
      let grid = solver.getBoardHeapEfficient(cluesInOrder);
      let seconds = (new Date().getTime() - beforeTime) / 1000;
      if (grid) {
        this.squares = grid.getGrid();
        this.lastIterationTime = seconds;
      } else {
        this.lastIterationTime = 0;
      }
    }
  }
}
