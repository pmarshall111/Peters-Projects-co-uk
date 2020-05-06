export class MinesweeperModel {
  private start: string[][];
  solution: string[][];
  bombs: number;

  constructor(start: string[][], solution: string[][], bombs: number) {
    this.start = start;
    this.solution = solution;
    this.bombs = bombs;
  }

  getCopyOfStart(): string[][] {
    let newArr = [];
    this.start.forEach(row => {
      newArr.push(row.slice());
    });
    return newArr;
  }
}
