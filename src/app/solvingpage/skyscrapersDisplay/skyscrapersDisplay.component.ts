import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Solver} from '../../../../../../WebstormProjects/Skyscrapers/Solver';
import {GridSquareModel} from './gridSquareModel';

@Component({
  selector: 'app-skyscrapersDisplay',
  templateUrl: './skyscrapersDisplay.component.html',
  styleUrls: ['./skyscrapersDisplay.component.css']
})
export class SkyscrapersDisplayComponent implements OnInit {
  gridSize: number;
  clues: {top: number[], left: number[], bottom: number[], right: number[]};
  squares: GridSquareModel[][];
  lastIterationTime: number;

  constructor() { }

  ngOnInit(): void {
    this.gridSize=5;
    console.log(this.gridSize)
    // this.clues = new Array(this.gridSize).fill(0);
    this.clues = {
      top: new Array(this.gridSize).fill(0),
      left: new Array(this.gridSize).fill(0),
      bottom: new Array(this.gridSize).fill(0),
      right: new Array(this.gridSize).fill(0),
    };
    //fill with _ then map is needed as otherwise the same object is used for all positions.
    this.squares = new Array(this.gridSize).fill("_").map(x => new Array(this.gridSize).fill("_").map(x => new GridSquareModel(0, false))); //cannot fill with array or same array is used in all positions.
    this.lastIterationTime = -1;
  }

  changeGridSize(newSize) {
    let toAdd = newSize - this.squares.length;
    this.gridSize = newSize;

    let arrsToChange = Object.values(this.clues);
    if (toAdd > 0) {
      arrsToChange.forEach(arr => arr.push(...new Array(toAdd).fill(0)))
      this.squares.forEach(row => row.push(...new Array(toAdd).fill(new GridSquareModel(0, false))))
      this.squares.push(...new Array(toAdd).fill("_").map(x => new Array(newSize).fill("_").map(x => new GridSquareModel(0, false))))
    } else if (toAdd < 0) {
      arrsToChange.forEach(arr => arr.splice(newSize, -toAdd));
      this.squares.splice(newSize, -toAdd);
      this.squares.forEach(row => row.splice(newSize, -toAdd));
    }

    this.resetSquares();
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  updateClue(nVal, clueRow, index) {
    console.log({nVal, clueRow, index})
    clueRow[index] = nVal;
  }

  updateSquare(nVal, row, col) {
    this.squares[row][col].numb = nVal;
    this.squares[row][col].isUserInput = true;
  }

  resetSquares() {
    this.squares.forEach(row => {
      row.forEach(square => {
        square.numb = 0;
        square.isUserInput = false;
      })
    })
  }

  resetEverything() {
    this.clues.bottom = this.clues.bottom.map(x => 0);
    this.clues.left = this.clues.left.map(x => 0);
    this.clues.right = this.clues.right.map(x => 0);
    this.clues.top = this.clues.top.map(x => 0);
    this.resetSquares();
    this.lastIterationTime = -1;
  }

  setGridVals(vals: number[][]) {
    this.squares.forEach((row, rowIdx) => {
      row.forEach((square, colIdx) => {
        square.numb = vals[rowIdx][colIdx];
      })
    })
  }

  calcSkyscrapers() {
    let cluesInOrder = [...this.clues.top, ...this.clues.right, ...this.clues.bottom.slice().reverse(), ...this.clues.left.slice().reverse()];
    let grid: number[][] = this.squares.map(row => row.map(square => square.numb));
    console.log(grid);
    if (typeof Worker !== 'undefined') {
      const worker = new Worker('./skyscrapers-display.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        console.log(data)
        if (data.finishedGrid) {
          this.setGridVals(data.finishedGrid.grid);
          this.lastIterationTime = data.seconds;
        } else {
          this.lastIterationTime = 0;
        }
      };
      worker.postMessage({cluesInOrder, grid});
    } else {
      // fallback code in case Web Workers are not supported in this environment.
      let beforeTime = new Date().getTime();
      let solver = new Solver();
      let finishedGrid = solver.getBoardHeapEfficient(cluesInOrder, grid);
      let seconds = (new Date().getTime() - beforeTime) / 1000;
      if (finishedGrid) {
        this.setGridVals(finishedGrid.getGrid());
        this.lastIterationTime = seconds;
      } else {
        this.lastIterationTime = 0;
      }
    }
  }
}
