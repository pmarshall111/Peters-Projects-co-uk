import {ProjectModel} from './project.model';
import {ProjectmediaModel} from './projectmedia.model';

export const projects: ProjectModel[] = [
  new ProjectModel(
    'Finch UI',
    'Java GUI',
    "This project is a desktop GUI that contains logic to make a robot to follow a light source, both directionally and also " +
    "adjusting speed based on its distance to the light. To make this project, I worked from a requirements specification, created a design " +
    "document and also designed tests (system and unit) to ensure the program worked correctly. The GUI component" +
    " displays live readings from the robot to the user, as well as shows graphs at the end to show how readings changed over time. " +
    "When marked at University, this project received a mark of 100/100, based on matching the requirements from the Requirement Specification, " +
    "adding additional requirements, code quality, use of OOP, Testing and UI quality.",
    'https://github.com/pmarshall111/FinchUI',
    // tslint:disable-next-line:max-line-length
    [new ProjectmediaModel('/assets/finch_ui/MainMenu.png',
      'Homepage',
      '', true),
      new ProjectmediaModel(
        '/assets/finch_ui/SearchForLight.png',
        'Search for Light Page',
        'Shows the user live stats from the robot.', true
      ),
      new ProjectmediaModel(
        '/assets/finch_ui/FinalStats.png',
        'Final Stats Page',
        "Summary page of how the robot's readings changed over time", true
      ),
      new ProjectmediaModel(
        "https://www.youtube.com/embed/sbhxHsNXSqI",
        "Project in action!",
        "",
         false
      )
    ],
    "/assets/finch_ui/finch.jpg",
    "Languages: Java, CSS \n"+
    "Frameworks: JavaFX, JUnit",
    true),
  new ProjectModel(
    'Football betting',
    'CLI application',
    "This app uses a logistic regression algorithm to predict the probabilities of results of football matches. If these probabilities " +
    "predicted by the app are" +
    " higher than the probabilities offered by betting companies, an email is sent to me and I can decide whether to place a bet or not. Currently" +
    " this project is not working.",
    'https://github.com/pmarshall111/Football-Betting',
    // tslint:disable-next-line:max-line-length
    [new ProjectmediaModel(
      'data:image/jpeg;base64,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',
      'xyz',
      'abc', true)],
    "/assets/football_betting/cmd.png",

    "Languages: Java, SQL\n" +
    "Frameworks: JUnit, HtmlUnit\n"+
    "Database: Sqlite3",
    true),
  new ProjectModel(
    'Peter\'s Projects',
    'Website',
    "This website was made to showcase previous projects and problems I've tackled in a presentable and easy to digest way. However, " +
    "I also wanted the website to be a piece to show off" +
    " on it's own merit, so colliding balls are included on the landing page. The website was designed to be responsive such that it resizes " +
    "it's content" +
    " based on the screen size of the device it is being viewed on and also uses Web Workers to run any code that make take some time to complete.",
    'https://github.com/pmarshall111/PersonalSite',
    // tslint:disable-next-line:max-line-length
    [new ProjectmediaModel('data:image/jpeg;base64,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',
      'hhh',
      'jasjhasd', true)],
    "/assets/finch_ui/finch.jpg",
    "Languages: TypeScript, HTML, CSS\n"+
    "Frameworks: Angular, Bootstrap",

    true)
];
