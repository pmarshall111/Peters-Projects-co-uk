export class MinesweeperModel {
  start: string[][];
  solution: string[][];
  bombs: number;

  constructor(start: string[][], solution: string[][], bombs: number) {
    this.start = start;
    this.solution = solution;
    this.bombs = bombs;
  }
}
