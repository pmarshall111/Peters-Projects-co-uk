/// <reference lib="webworker" />
import {Iterable} from '../../../../../../../WebstormProjects/Minesweeper/iterable/Iterable';
import {InfoForSite} from '../../../../../../../WebstormProjects/Minesweeper/iterable/InfoForSite';

let iter;
addEventListener('message', ({ data }) => {
  if (data.newGame) {
    let {start, solution, bombs} = data.newGame;
    iter = new Iterable(start, solution, bombs);
  } else if (data.next) {
    let res: InfoForSite = iter.next();
    postMessage(res);
  } else if (data.prev) {
    let res: InfoForSite = iter.prev();
    res.isPrev = true;
    postMessage(res);
  }
});
