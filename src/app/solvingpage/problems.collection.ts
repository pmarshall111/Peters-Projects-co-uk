import {ProblemModel} from './problem.model';

export const problems: ProblemModel[] = [
  new ProblemModel("Skyscrapers", "The problem is that if we were designing a grid of skyscrapers (much like New York), can we arrange" +
    " the skyscrapers such that from different sides of the grid we can specify how many buildings we want to see in each row. Importantly, buildings in " +
    "the same row cannot have the same height. Done by brute force, this" +
    " problem is solvable in O(n!^n) time, which becomes unfeasible extremely quickly. As an example, for a 5x5 grid, there are over 24 billion arrangements," +
    " which took over 30 minutes to solve on my computer when using a brute force method.",
    "Before looking through any combinations, I filled in " +
    " known values. For instance, if in a column it's mandated that only 1 skyscraper must be visible then the biggest building must be at the front, to" +
    " hide the buildings behind it. Once done, the program starts creating possible solutions for 1 row at a time. This row is chosen based on which row" +
    " will produce the fewest permutations, so the number of possible solutions for the grid is kept to a minimum. Once the permutations for a row are added" +
    " the grid is filled in much like a soduku puzzle - if a 3 can only go in 1 place in a row, it must go there and so it is added to the grid. This process of" +
    " selecting rows and adding the combinations is repeated until a solution is found.",
    "https://www.codewars.com/kata/7x7-skyscrapers",
    "https://github.com/pmarshall111/Skyscrapers7x7"),

  new ProblemModel("Minesweeper", "The problem was to create a program to solve a game of minesweeper.",
    "The approach is shown visually through the solver." +
    " The grid is looped through line by line until it finds a number. Looking at the squares around the number the program decides whether" +
    " to open the square or to place a flag using simple logic. Most minesweeper puzzles cannot be solved just using this method however, often it is" +
    " not clear just from looking at individual squares where a flag should be placed. For these situations, combinations are made for the squares around" +
    " numbered squares. Any squares that are consistently safe or suspected bombs across all the possible combinations are considered certain and added to" +
    " the grid. Once done, the process of first opening simple boxes, then creating combinations and adding the consistent squares is repeated until the grid" +
    " is completed.",
    "https://www.codewars.com/kata/57ff9d3b8f7dda23130015fa",
  "#")
  // new ProblemModel("Gerrymander", "Split an area into many voting districts such that your party wins despite being outvoted", "More cool stuff",
  //   "function gerrymander(a) {\nreturn -1;\n}", () => -1),
]
