import {ProblemModel} from './problem.model';

export const problems: ProblemModel[] = [
  new ProblemModel("Skyscrapers",
    "The problem is that if we were designing a grid of skyscrapers, can we find a valid grid" +
    " of skyscrapers after specifying how many buildings we want to be able to see from ground level in each row. This is based on taller buildings" +
    "hiding the smaller buildings behind it, so if the tallest building in a row was the first building, we would only be able to see 1 building in that" +
    "column. Importantly, buildings in " +
    "the same row cannot have the same height.\n The problem is an optimisation problem - done by brute force this" +
    " problem is solvable in O(n!^n) time, so clearly optimisation is needed. As an example, for a 5x5 grid, there are over 24 billion arrangements," +
    " which took over 30 minutes to solve on my computer when using a brute force method.",
    "Before looking through any combinations, I filled in " +
    " known values. For instance, if a column has a rule that only 1 skyscraper must be visible then the biggest building must be at the front, to" +
    " hide the buildings behind it. After filling in these known values, the program starts creating possible permutations of buildings that can go" +
    " in a row. The row the program uses is chosen based on which row" +
    " will produce the fewest permutations, so the number of solutions the program checks is kept to a minimum. Once the permutations for the row are added" +
    " the grid is filled in much like a sudoku puzzle - if there are a few spaces in a row and a 3 can only go in one of them, that space is definitely" +
    "a 3 and so this number is added to the grid. This process of" +
    " selecting rows, adding the combinations, then filling in any definite values is repeated until a solution is found.",
    "https://www.codewars.com/kata/7x7-skyscrapers",
    "https://github.com/pmarshall111/Skyscrapers7x7"),

  new ProblemModel("Minesweeper", "The problem was to create a program to solve a game of minesweeper. After completing the challenge," +
    " I decided to alter the program such that each step can be paused, stepped over or repeated. This creates a nice visual effect, shown in the graphic. " +
    " The purple square is the square that the program is currently looking at to see if it can place any flags or open any boxes around that square, and" +
    "the turquoise squares are those that have been recently opened.",
        " The program loops through the minesweeper grid line by line until it finds a number. " +
    " It then looks at the surrounding squares to decide whether any flags should be placed or if any squares around can be opened. If the number of" +
    "the square we're currently looking at is 1 and there is already 1 flag around it, then all other surrounding squares can be opened. Or if there" +
    "are only 2 squares unopened and the square requires 2 more flags, these squares are both flagged." +
    " However, some minesweeper puzzles cannot be solved just using this method. Often there are times where it is" +
    " not clear just from looking at individual squares where a flag should be placed - this is shown in game 1 where the squares in the bottom right" +
    " are unsolvable just by looking at the individual squares. For these situations," +
    " the program creates permutations of flags and spaces for the squares around the numbered squares. " +
    " Perhaps there are 2 or 3 possible arrangements of flags and spaces around these numbered squares. Any squares that are marked as spaces" +
    "across all the arrangements, or marked as flagged across all arrangements are considered certain and added to" +
    " the grid. Once done, the program goes back to opening simple boxes, until it goes through the whole grid without placing a flag or opening" +
    "a square, when it creates combinations and adds the consistent squares until the grid" +
    " is completed.",
    "https://www.codewars.com/kata/57ff9d3b8f7dda23130015fa",
  "https://github.com/pmarshall111/Minesweeper")
  // new ProblemModel("Gerrymander", "Split an area into many voting districts such that your party wins despite being outvoted", "More cool stuff",
  //   "function gerrymander(a) {\nreturn -1;\n}", () => -1),
]
