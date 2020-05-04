/// <reference lib="webworker" />

import {Solver} from '../../../../../../WebstormProjects/Skyscrapers/Solver';

addEventListener('message', ({ data }) => {
  console.log(data);
  let {cluesInOrder, grid} = data;
  let beforeTime = new Date().getTime();
  let solver = new Solver();
  let finishedGrid = solver.getBoardHeapEfficient(cluesInOrder, grid);
  let seconds = (new Date().getTime() - beforeTime) / 1000;
  postMessage({finishedGrid, seconds});
});
