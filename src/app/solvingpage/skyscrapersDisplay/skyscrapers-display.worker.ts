/// <reference lib="webworker" />

import {Solver} from '../../../../../../WebstormProjects/Skyscrapers/Solver';

addEventListener('message', ({ data }) => {
  let beforeTime = new Date().getTime();
  let solver = new Solver();
  let grid = solver.getBoardHeapEfficient(data);
  let seconds = (new Date().getTime() - beforeTime) / 1000;
  postMessage({grid, seconds});
});
