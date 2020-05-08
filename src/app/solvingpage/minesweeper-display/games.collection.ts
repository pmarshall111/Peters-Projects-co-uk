import {MinesweeperModel} from './minesweeper.model';

export const GamesCollection: MinesweeperModel[] = [
  new MinesweeperModel(
    [["0", "0", "0", "0", "0", "0", "0", "?", "?", "?"],
      ['?', '?', '?', '?', '?', '?', '0', '?', '?', '?'],
      ['?', '?', '?', '?', '?', '?', '0', '?', '?', '?'],
      ['?', '?', '?', '?', '?', '?', '0', '?', '?', '?'],
      ['0', '0', '?', '?', '?', '?', '?', '?', '0', '0'],
      ['0', '0', '?', '?', '?', '?', '?', '?', '?', '?'],
      ['0', '0', '?', '?', '?', '?', '?', '?', '?', '?'],
      ['0', '0', '0', '0', '?', '?', '?', '?', '?', '?'],
      ['0', '0', '0', '0', '?', '?', '?', '?', '?', '?'],
      ['0', '0', '0', '?', '?', '?', '?', '0', '0', '0'],
      ['0', '0', '0', '?', '?', '?', '?', '0', '0', '0'],
      ['0', '0', '0', '?', '?', '?', '?', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['?', '?', '0', '?', '?', '?', '0', '0', '0', '0'],
      ['?', '?', '0', '?', '?', '?', '0', '0', '0', '0'],
      ['?', '?', '?', '?', '?', '?', '?', '?', '?', '0'],
      ['?', '?', '?', '?', '?', '?', '?', '?', '?', '?'],
      ['?', '?', '?', '?', '?', '?', '?', '?', '?', '?'],
      ['0', '0', '?', '?', '?', '0', '0', '?', '?', '?'],
      ['0', '0', '?', '?', '?', '?', '?', '?', '?', '?'],
      ['0', '0', '?', '?', '?', '?', '?', '?', '?', '?'],
      ['0', '0', '0', '0', '0', '?', '?', '?', '?', '?']],

    [['0', '0', '0', '0', '0', '0', '0', '1', '1', '1'],
      ['1', '1', '1', '1', '1', '1', '0', '2', 'x', '2'],
      ['1', 'x', '2', '2', 'x', '1', '0', '2', 'x', '2'],
      ['1', '1', '2', 'x', '2', '1', '0', '1', '1', '1'],
      ['0', '0', '2', '2', '2', '1', '1', '1', '0', '0'],
      ['0', '0', '1', 'x', '1', '1', 'x', '2', '1', '1'],
      ['0', '0', '1', '1', '2', '2', '2', '3', 'x', '2'],
      ['0', '0', '0', '0', '1', 'x', '1', '2', 'x', '2'],
      ['0', '0', '0', '0', '1', '1', '1', '1', '1', '1'],
      ['0', '0', '0', '1', '2', '2', '1', '0', '0', '0'],
      ['0', '0', '0', '1', 'x', 'x', '1', '0', '0', '0'],
      ['0', '0', '0', '1', '2', '2', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['1', '1', '0', '1', '1', '1', '0', '0', '0', '0'],
      ['x', '1', '0', '1', 'x', '1', '0', '0', '0', '0'],
      ['2', '3', '1', '3', '2', '2', '1', '1', '1', '0'],
      ['x', '2', 'x', '2', 'x', '1', '1', 'x', '2', '1'],
      ['1', '2', '1', '2', '1', '1', '1', '2', 'x', '1'],
      ['0', '0', '1', '1', '1', '0', '0', '1', '1', '1'],
      ['0', '0', '1', 'x', '1', '1', '1', '2', '2', '2'],
      ['0', '0', '1', '1', '1', '1', 'x', '2', 'x', 'x'],
      ['0', '0', '0', '0', '0', '1', '1', '2', '2', '2']],
    23),
  new MinesweeperModel(
    [["?", "?", "?", "?", "?", "?"],
    ["?", "?", "?", "?", "?", "?"],
    ["?", "?", "?", "0", "?", "?"],
    ["?", "?", "?", "?", "?", "?"],
    ["?", "?", "?", "?", "?", "?"],
    ["0", "0", "0", "?", "?", "?"]],
    [["1", "x", "1", "1", "x", "1"],
    ["2", "2", "2", "1", "2", "2"],
    ["2", "x", "2", "0", "1", "x"],
    ["2", "x", "2", "1", "2", "2"],
    ["1", "1", "1", "1", "x", "1"],
    ["0", "0", "0", "1", "1", "1"]],
    6),
  new MinesweeperModel([["0", "0", "0", "0", "?", "?", "?", "?", "?", "?"],
    ["0", "0", "0", "?", "?", "?", "?", "?", "?", "?"],
    ["0", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
    ["?", "?", "?", "?", "?", "?", "?", "?", "?", "0"],
    ["?", "?", "?", "?", "0", "0", "0", "0", "0", "0"],
    ["?", "?", "?", "0", "0", "0", "0", "0", "0", "0"]],
 [["0", "0", "0", "0", "1", "1", "1", "1", "1", "1"],
  ["0", "0", "0", "1", "2", "x", "2", "2", "x", "1"],
  ["0", "1", "1", "2", "x", "2", "2", "x", "2", "1"],
  ["1", "2", "x", "2", "1", "1", "1", "1", "1", "0"],
  ["1", "x", "2", "1", "0", "0", "0", "0", "0", "0"],
  ["1", "1", "1", "0", "0", "0", "0", "0", "0", "0"]],
    6),
new MinesweeperModel(
  [["0", "0", "?", "?", "?", "0", "0", "0", "0", "0", "0", "?", "?", "?"],
    ["0", "0", "?", "?", "?", "0", "0", "0", "0", "0", "0", "?", "?", "?"],
    ["?", "?", "?", "0", "0", "0", "0", "0", "0", "0", "0", "?", "?", "?"],
    ["?", "?", "?", "0", "0", "0", "0", "0", "0", "0", "0", "0", "?", "?"],
    ["?", "?", "?", "0", "0", "0", "0", "0", "0", "0", "0", "?", "?", "?"],
    ["0", "0", "0", "?", "?", "?", "0", "0", "0", "0", "0", "?", "?", "?"],
    ["0", "0", "0", "?", "?", "?", "?", "0", "0", "0", "0", "?", "?", "?"],
    ["0", "0", "0", "?", "?", "?", "?", "?", "?", "0", "0", "0", "0", "0"],
    ["?", "?", "0", "0", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
    ["?", "?", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "?", "?"],
    ["?", "?", "?", "?", "?", "?", "?", "0", "?", "?", "?", "?", "?", "?"],
    ["?", "?", "?", "?", "?", "?", "?", "0", "?", "?", "?", "0", "0", "0"],
    ["?", "?", "?", "?", "?", "?", "?", "0", "?", "?", "?", "0", "0", "0"],
    ["?", "?", "0", "0", "0", "0", "0", "0", "0", "?", "?", "?", "0", "0"],
    ["?", "?", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "0", "0"]],
  [ [ '0', '0', '1', 'x', '1', '0', '0', '0', '0', '0', '0', '1', '1', '1' ],
    [ '0', '0', '1', '1', '1', '0', '0', '0', '0', '0', '0', '1', 'x', '2' ],
    [ '2', '2', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '2', 'x' ],
    [ 'x', 'x', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2', '2' ],
    [ '2', '2', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '2', 'x' ],
    [ '0', '0', '0', '1', '1', '1', '0', '0', '0', '0', '0', '1', 'x', '2' ],
    [ '0', '0', '0', '1', 'x', '2', '1', '0', '0', '0', '0', '1', '1', '1' ],
    [ '0', '0', '0', '1', '2', 'x', '2', '1', '1', '0', '0', '0', '0', '0' ],
    [ '1', '1', '0', '0', '1', '1', '2', 'x', '1', '1', '1', '1', '1', '1' ],
    [ 'x', '1', '0', '0', '0', '0', '1', '1', '2', '2', 'x', '1', '1', 'x' ],
    [ '2', '2', '1', '1', '2', '1', '1', '0', '2', 'x', '3', '1', '1', '1' ],
    [ 'x', '1', '1', 'x', '2', 'x', '1', '0', '2', 'x', '2', '0', '0', '0' ],
    [ '2', '2', '1', '1', '2', '1', '1', '0', '1', '1', '1', '0', '0', '0' ],
    [ 'x', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '0', '0' ],
    [ '1', '1', '0', '0', '0', '0', '1', '2', '2', '2', 'x', '1', '0', '0' ],
    [ '0', '0', '0', '0', '0', '0', '1', 'x', 'x', '2', '1', '1', '0', '0' ] ],
  22
),
new MinesweeperModel(
  [["?", "?", "?", "?", "?", "0", "0", "?", "?", "?", "?", "?"],
    ["?", "?", "?", "?", "?", "0", "0", "?", "?", "?", "?", "?"],
    ["?", "?", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?"],
    ["0", "0", "0", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
    ["0", "0", "0", "?", "?", "?", "?", "?", "?", "0", "0", "0"],
    ["0", "0", "0", "?", "?", "?", "0", "0", "?", "?", "?", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "?", "?", "?", "0"],
    ["0", "0", "0", "0", "0", "0", "?", "?", "?", "?", "?", "0"],
    ["0", "0", "0", "0", "0", "0", "?", "?", "?", "0", "0", "0"],
    ["?", "?", "0", "0", "?", "?", "?", "?", "?", "0", "0", "0"],
    ["?", "?", "0", "0", "?", "?", "?", "?", "?", "?", "?", "?"],
    ["?", "?", "0", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
    ["?", "?", "0", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
    ["0", "0", "0", "?", "?", "?", "?", "?", "?", "0", "0", "0"],
    ["?", "?", "?", "?", "0", "0", "?", "?", "?", "0", "0", "0"],
    ["?", "?", "?", "?", "0", "0", "0", "?", "?", "?", "0", "0"],
    ["?", "?", "?", "?", "0", "0", "0", "?", "?", "?", "?", "?"],
    ["0", "0", "0", "0", "0", "0", "0", "?", "?", "?", "?", "?"]],
  [ [ '1', '1', '1', 'x', '1', '0', '0', '1', 'x', '2', '1', '1' ],
    [ 'x', '1', '1', '1', '1', '0', '0', '1', '1', '3', 'x', '2' ],
    [ '1', '1', '0', '0', '0', '0', '1', '1', '1', '2', 'x', '2' ],
    [ '0', '0', '0', '1', '1', '1', '1', 'x', '1', '1', '1', '1' ],
    [ '0', '0', '0', '1', 'x', '1', '1', '1', '1', '0', '0', '0' ],
    [ '0', '0', '0', '1', '1', '1', '0', '0', '1', '1', '1', '0' ],
    [ '0', '0', '0', '0', '0', '0', '0', '0', '1', 'x', '1', '0' ],
    [ '0', '0', '0', '0', '0', '0', '1', '1', '2', '1', '1', '0' ],
    [ '0', '0', '0', '0', '0', '0', '1', 'x', '1', '0', '0', '0' ],
    [ '1', '1', '0', '0', '1', '2', '3', '2', '1', '0', '0', '0' ],
    [ 'x', '2', '0', '0', '1', 'x', 'x', '1', '1', '2', '2', '1' ],
    [ 'x', '2', '0', '1', '2', '3', '3', '2', '2', 'x', 'x', '1' ],
    [ '1', '1', '0', '1', 'x', '1', '2', 'x', '3', '2', '2', '1' ],
    [ '0', '0', '0', '1', '1', '1', '2', 'x', '2', '0', '0', '0' ],
    [ '1', '2', '1', '1', '0', '0', '1', '1', '1', '0', '0', '0' ],
    [ 'x', '2', 'x', '1', '0', '0', '0', '1', '1', '1', '0', '0' ],
    [ '1', '2', '1', '1', '0', '0', '0', '1', 'x', '2', '1', '1' ],
    [ '0', '0', '0', '0', '0', '0', '0', '1', '1', '2', 'x', '1' ] ],
  22
),
new MinesweeperModel(
  [["0", "?", "?", "?", "0", "?", "?", "?", "?", "?", "?"],
    ["0", "?", "?", "?", "0", "?", "?", "?", "?", "?", "?"],
    ["0", "0", "0", "?", "?", "?", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "?", "?", "?", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "?", "?", "?", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "?", "?"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "?", "?"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "?", "?"],
    ["0", "?", "?", "?", "0", "0", "?", "?", "?", "0", "0"],
    ["0", "?", "?", "?", "0", "0", "?", "?", "?", "0", "0"],
    ["0", "?", "?", "?", "0", "0", "?", "?", "?", "?", "?"],
    ["?", "?", "0", "0", "0", "0", "0", "0", "?", "?", "?"],
    ["?", "?", "0", "0", "0", "0", "0", "?", "?", "?", "?"],
    ["?", "?", "0", "0", "0", "0", "?", "?", "?", "?", "?"],
    ["0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "?"],
    ["0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "?"],
    ["0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "?"],
    ["?", "?", "0", "0", "?", "?", "?", "?", "?", "?", "?"],
    ["?", "?", "0", "0", "?", "?", "?", "?", "?", "?", "?"],
    ["?", "?", "0", "0", "0", "0", "?", "?", "?", "?", "?"]],
  [ [ '0', '1', 'x', '1', '0', '1', 'x', 'x', '1', '1', 'x' ],
    [ '0', '1', '1', '1', '0', '1', '2', '2', '1', '1', '1' ],
    [ '0', '0', '0', '1', '1', '1', '0', '0', '0', '0', '0' ],
    [ '0', '0', '0', '1', 'x', '1', '0', '0', '0', '0', '0' ],
    [ '0', '0', '0', '1', '1', '1', '0', '0', '0', '0', '0' ],
    [ '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1' ],
    [ '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', 'x' ],
    [ '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1' ],
    [ '0', '1', '1', '1', '0', '0', '1', '1', '1', '0', '0' ],
    [ '0', '1', 'x', '1', '0', '0', '1', 'x', '1', '0', '0' ],
    [ '0', '1', '1', '1', '0', '0', '1', '1', '2', '2', '2' ],
    [ '1', '1', '0', '0', '0', '0', '0', '0', '2', 'x', 'x' ],
    [ 'x', '1', '0', '0', '0', '0', '0', '1', '3', 'x', '3' ],
    [ '1', '1', '0', '0', '0', '0', '1', '2', 'x', '2', '1' ],
    [ '0', '0', '0', '0', '1', '1', '2', 'x', '3', '2', '1' ],
    [ '0', '0', '0', '0', '1', 'x', '3', '2', '3', 'x', '1' ],
    [ '0', '0', '0', '0', '2', '2', '3', 'x', '2', '2', '2' ],
    [ '1', '1', '0', '0', '1', 'x', '3', '2', '2', '1', 'x' ],
    [ 'x', '1', '0', '0', '1', '1', '2', 'x', '1', '2', '2' ],
    [ '1', '1', '0', '0', '0', '0', '1', '1', '1', '1', 'x' ] ],
  22
),
new MinesweeperModel(
  [["?", "?", "?", "?", "?", "0", "0", "?", "?", "?", "0", "0"],
    ["?", "?", "?", "?", "?", "0", "0", "?", "?", "?", "0", "0"],
    ["?", "?", "?", "?", "?", "0", "0", "?", "?", "?", "0", "0"],
    ["?", "?", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["?", "?", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["?", "?", "?", "?", "?", "?", "?", "?", "0", "0", "0", "0"],
    ["?", "?", "?", "?", "?", "?", "?", "?", "?", "0", "0", "0"],
    ["?", "?", "?", "?", "?", "?", "?", "?", "?", "0", "0", "0"],
    ["0", "?", "?", "?", "?", "?", "?", "?", "?", "0", "0", "0"],
    ["0", "0", "?", "?", "?", "?", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "?", "?", "?", "?", "0", "0", "0", "0", "?", "?"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "?", "?"],
    ["?", "?", "0", "0", "0", "0", "?", "?", "?", "0", "?", "?"],
    ["?", "?", "0", "0", "0", "0", "?", "?", "?", "?", "?", "0"],
    ["?", "?", "?", "0", "0", "?", "?", "?", "?", "?", "?", "0"],
    ["?", "?", "?", "0", "0", "?", "?", "?", "?", "?", "?", "0"],
    ["?", "?", "?", "0", "?", "?", "?", "?", "0", "0", "0", "0"],
    ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "0", "0"],
    ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "0", "0"],
    ["?", "?", "?", "?", "?", "?", "0", "?", "?", "?", "0", "0"],
    ["0", "0", "0", "?", "?", "?", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "?", "?", "?", "0", "0", "0", "0", "0", "0"]],
  [ [ '1', '2', '3', '2', '1', '0', '0', '2', 'x', '2', '0', '0' ],
    [ '1', 'x', 'x', 'x', '1', '0', '0', '2', 'x', '2', '0', '0' ],
    [ '2', '3', '3', '2', '1', '0', '0', '1', '1', '1', '0', '0' ],
    [ 'x', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0' ],
    [ '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0' ],
    [ '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0' ],
    [ '2', '2', '1', '1', '1', '2', '1', '1', '0', '0', '0', '0' ],
    [ 'x', 'x', '3', '3', 'x', '2', 'x', '2', '1', '0', '0', '0' ],
    [ '2', '3', 'x', 'x', '2', '2', '2', 'x', '1', '0', '0', '0' ],
    [ '0', '1', '3', '4', '3', '1', '1', '1', '1', '0', '0', '0' ],
    [ '0', '0', '1', 'x', 'x', '1', '0', '0', '0', '0', '0', '0' ],
    [ '0', '0', '1', '2', '2', '1', '0', '0', '0', '0', '1', '1' ],
    [ '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', 'x' ],
    [ '1', '1', '0', '0', '0', '0', '1', '1', '1', '0', '1', '1' ],
    [ 'x', '1', '0', '0', '0', '0', '1', 'x', '2', '1', '1', '0' ],
    [ '2', '2', '1', '0', '0', '1', '2', '2', '2', 'x', '1', '0' ],
    [ '2', 'x', '1', '0', '0', '1', 'x', '1', '1', '1', '1', '0' ],
    [ 'x', '2', '1', '0', '1', '2', '2', '1', '0', '0', '0', '0' ],
    [ '3', '3', '1', '1', '2', 'x', '1', '1', '1', '1', '0', '0' ],
    [ 'x', 'x', '1', '1', 'x', '2', '1', '1', 'x', '1', '0', '0' ],
    [ '2', '2', '1', '2', '2', '2', '0', '1', '1', '1', '0', '0' ],
    [ '0', '0', '0', '1', 'x', '1', '0', '0', '0', '0', '0', '0' ],
    [ '0', '0', '0', '1', '1', '1', '0', '0', '0', '0', '0', '0' ] ],
  28
),
new MinesweeperModel(
  [["0", "?", "?", "?", "?", "?", "?", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "?", "?", "?", "?", "?", "?", "0", "0", "0", "?", "?", "?", "0", "0"],
    ["?", "?", "?", "?", "?", "?", "?", "0", "0", "0", "?", "?", "?", "0", "0"],
    ["?", "?", "?", "?", "0", "0", "0", "?", "?", "?", "?", "?", "?", "0", "0"],
    ["?", "?", "?", "?", "0", "0", "0", "?", "?", "?", "?", "?", "0", "0", "0"],
    ["0", "?", "?", "?", "0", "0", "0", "?", "?", "?", "?", "?", "0", "0", "0"],
    ["?", "?", "?", "0", "0", "0", "0", "0", "?", "?", "?", "?", "0", "0", "0"],
    ["?", "?", "?", "0", "0", "0", "0", "0", "?", "?", "?", "0", "0", "0", "0"],
    ["?", "?", "?", "?", "?", "0", "0", "0", "?", "?", "?", "?", "?", "0", "0"],
    ["0", "0", "?", "?", "?", "0", "0", "0", "0", "?", "?", "?", "?", "0", "0"],
    ["0", "0", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "0", "0"],
    ["0", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "?", "?", "0", "0"]],
  [ [ '0', '1', '1', '2', 'x', '2', '1', '0', '0', '0', '0', '0', '0', '0', '0' ],
    [ '0', '1', 'x', '2', '2', 'x', '1', '0', '0', '0', '1', '1', '1', '0', '0' ],
    [ '1', '2', '2', '1', '1', '1', '1', '0', '0', '0', '1', 'x', '1', '0', '0' ],
    [ '1', 'x', '2', '1', '0', '0', '0', '1', '1', '2', '2', '2', '1', '0', '0' ],
    [ '1', '2', 'x', '1', '0', '0', '0', '1', 'x', '3', 'x', '2', '0', '0', '0' ],
    [ '0', '1', '1', '1', '0', '0', '0', '1', '1', '3', 'x', '2', '0', '0', '0' ],
    [ '2', '2', '1', '0', '0', '0', '0', '0', '1', '2', '2', '1', '0', '0', '0' ],
    [ 'x', 'x', '1', '0', '0', '0', '0', '0', '1', 'x', '1', '0', '0', '0', '0' ],
    [ '2', '2', '2', '1', '1', '0', '0', '0', '1', '1', '2', '1', '1', '0', '0' ],
    [ '0', '0', '1', 'x', '1', '0', '0', '0', '0', '1', '3', 'x', '2', '0', '0' ],
    [ '0', '0', '1', '1', '1', '1', '1', '1', '1', '2', 'x', 'x', '2', '0', '0' ],
    [ '0', '0', '0', '0', '0', '1', 'x', '1', '1', 'x', '3', '2', '1', '0', '0' ] ],
  18
),
new MinesweeperModel(
  [["0", "0", "0", "?", "?", "?", "?", "?", "?", "0", "0", "0", "?", "?", "?"],
    ["0", "0", "?", "?", "?", "?", "?", "?", "?", "0", "0", "0", "?", "?", "?"],
    ["0", "0", "?", "?", "?", "?", "?", "?", "?", "0", "0", "0", "?", "?", "?"],
    ["0", "0", "?", "?", "?", "?", "?", "?", "?", "?", "0", "0", "?", "?", "?"],
    ["0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "0", "0", "?", "?", "?"],
    ["0", "0", "0", "0", "0", "0", "0", "?", "?", "?", "0", "0", "?", "?", "?"],
    ["0", "0", "0", "0", "0", "0", "?", "?", "?", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "?", "?", "?", "?", "?", "?", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "0", "0", "0"],
    ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "0", "0", "0"],
    ["?", "?", "?", "?", "?", "?", "0", "0", "?", "?", "?", "?", "0", "0", "0"],
    ["?", "?", "?", "?", "?", "?", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "?", "?", "?", "?", "0", "?", "?", "?", "0", "?", "?", "?", "?", "?"],
    ["?", "?", "?", "?", "?", "0", "?", "?", "?", "0", "?", "?", "?", "?", "?"],
    ["?", "?", "?", "?", "?", "?", "?", "?", "?", "0", "?", "?", "?", "?", "?"],
    ["?", "?", "0", "0", "?", "?", "?", "?", "?", "?", "?", "?", "?", "0", "0"],
    ["0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
    ["0", "0", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
    ["0", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "0", "?", "?", "?"],
    ["0", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
    ["0", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
    ["0", "0", "0", "0", "0", "?", "?", "?", "0", "0", "0", "?", "?", "?", "?"],
    ["0", "0", "0", "0", "0", "?", "?", "?", "0", "0", "0", "0", "0", "?", "?"]],
  [ [ '0', '0', '0', '1', 'x', '1', '1', '1', '1', '0', '0', '0', '1', 'x', '1' ],
    [ '0', '0', '1', '2', '2', '1', '1', 'x', '1', '0', '0', '0', '1', '1', '1' ],
    [ '0', '0', '1', 'x', '2', '1', '2', '1', '1', '0', '0', '0', '1', '1', '1' ],
    [ '0', '0', '1', '1', '2', 'x', '1', '1', '1', '1', '0', '0', '2', 'x', '2' ],
    [ '0', '0', '0', '0', '1', '1', '1', '1', 'x', '1', '0', '0', '2', 'x', '2' ],
    [ '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '0', '0', '1', '1', '1' ],
    [ '0', '0', '0', '0', '0', '0', '1', '1', '1', '0', '0', '0', '0', '0', '0' ],
    [ '0', '0', '0', '1', '2', '3', '3', 'x', '1', '0', '0', '0', '0', '0', '0' ],
    [ '0', '0', '1', '2', 'x', 'x', 'x', '2', '2', '2', '2', '1', '0', '0', '0' ],
    [ '1', '1', '2', 'x', '4', '4', '2', '1', '1', 'x', 'x', '1', '0', '0', '0' ],
    [ '1', 'x', '2', '2', 'x', '1', '0', '0', '1', '2', '2', '1', '0', '0', '0' ],
    [ '1', '2', '2', '2', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0' ],
    [ '0', '1', 'x', '2', '1', '0', '1', '1', '1', '0', '1', '1', '1', '1', '1' ],
    [ '1', '2', '2', 'x', '1', '0', '1', 'x', '1', '0', '1', 'x', '1', '1', 'x' ],
    [ 'x', '1', '1', '1', '2', '1', '3', '2', '2', '0', '1', '1', '1', '1', '1' ],
    [ '1', '1', '0', '0', '1', 'x', '2', 'x', '2', '1', '1', '1', '1', '0', '0' ],
    [ '0', '0', '0', '0', '1', '1', '2', '2', 'x', '1', '1', 'x', '2', '1', '1' ],
    [ '0', '0', '0', '0', '0', '0', '1', '2', '2', '1', '1', '1', '2', 'x', '1' ],
    [ '0', '0', '0', '0', '0', '1', '2', 'x', '2', '1', '1', '0', '1', '2', '2' ],
    [ '0', '0', '0', '0', '0', '1', 'x', '2', '2', 'x', '1', '1', '1', '2', 'x' ],
    [ '0', '0', '0', '0', '0', '2', '2', '2', '1', '1', '1', '1', 'x', '3', '2' ],
    [ '0', '0', '0', '0', '0', '1', 'x', '1', '0', '0', '0', '1', '1', '2', 'x' ],
    [ '0', '0', '0', '0', '0', '1', '1', '1', '0', '0', '0', '0', '0', '1', '1' ] ],
  35
),
new MinesweeperModel(
  [["0", "0", "0", "0", "0", "0", "?", "?", "?", "?", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "?", "?"],
    ["0", "0", "0", "0", "0", "?", "?", "?", "?", "0", "?", "?", "?"],
    ["0", "0", "0", "0", "?", "?", "?", "?", "0", "0", "?", "?", "?"],
    ["0", "?", "?", "?", "?", "?", "?", "?", "?", "?", "0", "0", "0"],
    ["0", "?", "?", "?", "?", "?", "?", "?", "?", "?", "0", "0", "0"],
    ["?", "?", "?", "?", "0", "0", "0", "?", "?", "?", "?", "?", "?"],
    ["?", "?", "?", "0", "0", "0", "0", "0", "0", "0", "?", "?", "?"],
    ["?", "?", "?", "0", "0", "0", "0", "0", "0", "0", "?", "?", "?"],
    ["?", "?", "?", "?", "?", "?", "?", "?", "?", "0", "?", "?", "?"],
    ["0", "?", "?", "?", "?", "?", "?", "?", "?", "0", "?", "?", "?"],
    ["0", "?", "?", "?", "?", "?", "?", "?", "?", "0", "?", "?", "?"]],
  [ [ '0', '0', '0', '0', '0', '0', '1', '2', 'x', '1', '0', '0', '0' ],
    [ '0', '0', '0', '0', '0', '1', '2', 'x', '2', '1', '1', '1', '1' ],
    [ '0', '0', '0', '0', '0', '2', 'x', '3', '1', '0', '1', 'x', '1' ],
    [ '0', '0', '0', '0', '1', '3', 'x', '2', '0', '0', '1', '1', '1' ],
    [ '0', '1', '1', '1', '1', 'x', '2', '2', '1', '1', '0', '0', '0' ],
    [ '0', '1', 'x', '1', '1', '1', '1', '1', 'x', '1', '0', '0', '0' ],
    [ '1', '2', '2', '1', '0', '0', '0', '1', '1', '1', '1', '1', '1' ],
    [ '2', 'x', '2', '0', '0', '0', '0', '0', '0', '0', '1', 'x', '1' ],
    [ '2', 'x', '2', '0', '0', '0', '0', '0', '0', '0', '1', '2', '2' ],
    [ '1', '2', '2', '1', '1', '1', '2', '1', '1', '0', '1', '2', 'x' ],
    [ '0', '1', 'x', '1', '1', 'x', '2', 'x', '1', '0', '1', 'x', '2' ],
    [ '0', '1', '1', '1', '1', '1', '2', '1', '1', '0', '1', '1', '1' ] ],
  16
),
new MinesweeperModel(
  [["0", "0", "0", "0", "0", "0", "?", "?", "?", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "?", "?", "?", "0", "0", "0", "0", "0"],
    ["0", "0", "?", "?", "?", "0", "0", "0", "?", "?", "?", "0", "0", "0"],
    ["?", "?", "?", "?", "?", "0", "0", "0", "?", "?", "?", "0", "?", "?"],
    ["?", "?", "?", "?", "?", "0", "0", "0", "?", "?", "?", "0", "?", "?"],
    ["?", "?", "?", "0", "0", "0", "0", "0", "?", "?", "?", "0", "?", "?"],
    ["0", "0", "0", "?", "?", "?", "?", "0", "0", "0", "0", "0", "0", "0"],
    ["?", "?", "?", "?", "?", "?", "?", "0", "0", "0", "0", "0", "0", "0"],
    ["?", "?", "?", "?", "?", "?", "?", "0", "0", "0", "0", "0", "0", "0"],
    ["?", "?", "?", "?", "?", "?", "0", "0", "0", "0", "0", "?", "?", "?"],
    ["0", "?", "?", "?", "?", "?", "?", "0", "0", "0", "0", "?", "?", "?"],
    ["0", "?", "?", "?", "?", "?", "?", "0", "0", "?", "?", "?", "?", "?"],
    ["0", "?", "?", "?", "?", "?", "?", "0", "0", "?", "?", "?", "?", "0"],
    ["?", "?", "?", "?", "?", "?", "?", "0", "0", "?", "?", "?", "?", "0"],
    ["?", "?", "?", "?", "?", "?", "?", "0", "0", "0", "0", "0", "0", "0"],
    ["?", "?", "?", "0", "?", "?", "?", "0", "0", "0", "0", "0", "0", "0"],
    ["?", "?", "?", "?", "?", "0", "0", "?", "?", "?", "0", "0", "0", "0"],
    ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "0", "0", "0", "0"],
    ["0", "?", "?", "?", "?", "?", "?", "?", "?", "?", "0", "?", "?", "?"],
    ["0", "0", "?", "?", "?", "?", "?", "0", "0", "0", "0", "?", "?", "?"]],
  [ [ '0', '0', '0', '0', '0', '0', '1', 'x', '1', '0', '0', '0', '0', '0' ],
    [ '0', '0', '0', '0', '0', '0', '1', '1', '1', '0', '0', '0', '0', '0' ],
    [ '0', '0', '1', '1', '1', '0', '0', '0', '1', '1', '1', '0', '0', '0' ],
    [ '1', '1', '2', 'x', '1', '0', '0', '0', '2', 'x', '2', '0', '1', '1' ],
    [ '1', 'x', '2', '1', '1', '0', '0', '0', '2', 'x', '2', '0', '1', 'x' ],
    [ '1', '1', '1', '0', '0', '0', '0', '0', '1', '1', '1', '0', '1', '1' ],
    [ '0', '0', '0', '1', '2', '2', '1', '0', '0', '0', '0', '0', '0', '0' ],
    [ '1', '2', '1', '2', 'x', 'x', '1', '0', '0', '0', '0', '0', '0', '0' ],
    [ 'x', '2', 'x', '2', '2', '2', '1', '0', '0', '0', '0', '0', '0', '0' ],
    [ '1', '3', '2', '3', '1', '1', '0', '0', '0', '0', '0', '1', '1', '1' ],
    [ '0', '1', 'x', '3', 'x', '2', '1', '0', '0', '0', '0', '1', 'x', '1' ],
    [ '0', '1', '2', 'x', '3', 'x', '1', '0', '0', '1', '2', '3', '2', '1' ],
    [ '0', '1', '2', '2', '2', '1', '1', '0', '0', '1', 'x', 'x', '1', '0' ],
    [ '2', '3', 'x', '1', '1', '1', '1', '0', '0', '1', '2', '2', '1', '0' ],
    [ 'x', 'x', '2', '1', '1', 'x', '1', '0', '0', '0', '0', '0', '0', '0' ],
    [ '3', '3', '1', '0', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0' ],
    [ 'x', '2', '2', '2', '1', '0', '0', '1', '1', '1', '0', '0', '0', '0' ],
    [ '1', '2', 'x', 'x', '3', '1', '1', '1', 'x', '1', '0', '0', '0', '0' ],
    [ '0', '1', '3', 'x', '3', 'x', '1', '1', '1', '1', '0', '1', '1', '1' ],
    [ '0', '0', '1', '1', '2', '1', '1', '0', '0', '0', '0', '1', 'x', '1' ] ],
  28
),
new MinesweeperModel(
  [["0", "0", "0", "0", "?", "?", "?", "?", "?", "0", "0", "0", "?", "?", "?", "0", "0", "0", "?", "?", "?", "0"],
    ["0", "0", "?", "?", "?", "?", "?", "?", "?", "0", "0", "0", "?", "?", "?", "0", "0", "0", "?", "?", "?", "?"],
    ["0", "0", "?", "?", "?", "?", "?", "?", "?", "0", "?", "?", "?", "?", "?", "0", "0", "0", "?", "?", "?", "?"],
    ["0", "0", "?", "?", "?", "0", "0", "0", "0", "0", "?", "?", "?", "?", "0", "0", "0", "0", "0", "0", "?", "?"],
    ["0", "?", "?", "?", "0", "0", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "?", "0", "0", "0", "0", "0"],
    ["0", "?", "?", "?", "?", "?", "0", "0", "0", "0", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "0", "0"],
    ["0", "?", "?", "?", "?", "?", "0", "0", "0", "0", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "?", "0"],
    ["?", "?", "0", "?", "?", "?", "?", "?", "?", "?", "0", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "0"],
    ["?", "?", "0", "?", "?", "?", "?", "?", "?", "?", "0", "0", "0", "?", "?", "?", "?", "?", "?", "?", "?", "0"],
    ["?", "?", "0", "?", "?", "?", "?", "?", "?", "?", "?", "0", "0", "?", "?", "?", "0", "?", "?", "?", "?", "?"],
    ["0", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "?", "0", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
    ["0", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "?", "0", "0", "?", "?", "?", "0", "0", "?", "?", "?"],
    ["0", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "?", "0", "?", "?", "?", "?", "0", "0", "?", "?", "?"],
    ["?", "?", "?", "0", "0", "0", "0", "?", "?", "?", "0", "0", "0", "?", "?", "?", "0", "0", "0", "0", "0", "0"],
    ["?", "?", "?", "?", "?", "?", "0", "?", "?", "?", "0", "0", "0", "?", "?", "?", "?", "0", "0", "0", "?", "?"],
    ["?", "?", "?", "?", "?", "?", "0", "?", "?", "?", "0", "0", "0", "0", "?", "?", "?", "?", "?", "0", "?", "?"],
    ["?", "?", "0", "?", "?", "?", "0", "0", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
    ["0", "?", "?", "?", "0", "0", "0", "0", "0", "0", "0", "0", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
    ["0", "?", "?", "?", "?", "?", "0", "0", "0", "0", "0", "0", "?", "?", "?", "0", "0", "0", "0", "?", "?", "?"],
    ["?", "?", "?", "?", "?", "?", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["?", "?", "?", "?", "?", "?", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "?", "?", "?"],
    ["?", "?", "?", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "?", "?", "?"],
    ["?", "?", "?", "0", "0", "0", "?", "?", "?", "0", "?", "?", "?", "?", "0", "0", "0", "0", "0", "?", "?", "?"],
    ["?", "?", "?", "0", "0", "0", "?", "?", "?", "0", "?", "?", "?", "?", "0", "0", "0", "0", "0", "0", "0", "0"]],
  [ [ '0', '0', '0', '0', '1', 'x', 'x', '3', '1', '0', '0', '0', '2', 'x', '2', '0', '0', '0', '1', '1', '1', '0' ],
    [ '0', '0', '1', '1', '2', '3', 'x', 'x', '1', '0', '0', '0', '2', 'x', '2', '0', '0', '0', '1', 'x', '2', '1' ],
    [ '0', '0', '1', 'x', '1', '1', '2', '2', '1', '0', '1', '2', '3', '2', '1', '0', '0', '0', '1', '1', '2', 'x' ],
    [ '0', '0', '1', '1', '1', '0', '0', '0', '0', '0', '1', 'x', 'x', '1', '0', '0', '0', '0', '0', '0', '1', '1' ],
    [ '0', '1', '1', '1', '0', '0', '0', '0', '0', '0', '1', '2', '2', '1', '1', '1', '1', '0', '0', '0', '0', '0' ],
    [ '0', '1', 'x', '2', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', 'x', '1', '1', '1', '1', '0', '0' ],
    [ '0', '1', '1', '2', 'x', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '2', '2', '2', 'x', '2', '1', '0' ],
    [ '1', '1', '0', '2', '2', '3', '1', '2', '1', '1', '0', '0', '0', '0', '0', '1', 'x', '2', '2', 'x', '1', '0' ],
    [ 'x', '1', '0', '1', 'x', '2', 'x', '2', 'x', '1', '0', '0', '0', '1', '1', '2', '1', '2', '2', '2', '1', '0' ],
    [ '1', '1', '0', '1', '1', '2', '1', '2', '2', '2', '1', '0', '0', '1', 'x', '1', '0', '1', 'x', '2', '1', '1' ],
    [ '0', '0', '0', '0', '0', '1', '2', '2', '2', 'x', '2', '1', '0', '1', '2', '2', '1', '1', '1', '3', 'x', '2' ],
    [ '0', '0', '0', '0', '0', '1', 'x', 'x', '2', '2', 'x', '1', '0', '0', '1', 'x', '1', '0', '0', '2', 'x', '2' ],
    [ '0', '0', '0', '0', '0', '1', '2', '2', '1', '1', '1', '1', '0', '1', '2', '2', '1', '0', '0', '1', '1', '1' ],
    [ '1', '1', '1', '0', '0', '0', '0', '1', '1', '1', '0', '0', '0', '1', 'x', '1', '0', '0', '0', '0', '0', '0' ],
    [ '2', 'x', '1', '1', '1', '1', '0', '1', 'x', '1', '0', '0', '0', '1', '2', '2', '1', '0', '0', '0', '1', '1' ],
    [ 'x', '2', '1', '1', 'x', '1', '0', '1', '1', '1', '0', '0', '0', '0', '2', 'x', '3', '1', '1', '0', '2', 'x' ],
    [ '1', '1', '0', '1', '1', '1', '0', '0', '0', '0', '0', '0', '1', '1', '3', 'x', '3', 'x', '1', '1', '3', 'x' ],
    [ '0', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', 'x', '2', '1', '2', '1', '1', '1', 'x', '2' ],
    [ '0', '2', 'x', '4', '2', '1', '0', '0', '0', '0', '0', '0', '1', '1', '1', '0', '0', '0', '0', '1', '1', '1' ],
    [ '1', '3', 'x', 'x', 'x', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0' ],
    [ '1', 'x', '3', '3', '2', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1' ],
    [ '3', '3', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', 'x', '1' ],
    [ 'x', 'x', '1', '0', '0', '0', '1', '1', '1', '0', '1', '2', '2', '1', '0', '0', '0', '0', '0', '1', '1', '1' ],
    [ '2', '2', '1', '0', '0', '0', '1', 'x', '1', '0', '1', 'x', 'x', '1', '0', '0', '0', '0', '0', '0', '0', '0' ] ],
  53
)];
