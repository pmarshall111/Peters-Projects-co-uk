/// <reference lib="webworker" />
import {Iterable} from '../../../../../../WebstormProjects/Minesweeper/Iterable';

let iter;
addEventListener('message', ({ data }) => {
  if (data.newGame) {
    let {start, solution, bombs} = data.newGame;
    iter = new Iterable(start, solution, bombs);
  } else {
    let res = iter.next();
    postMessage(res);
  }
});
