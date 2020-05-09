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
      ),
      new ProjectmediaModel(
        "/assets/finch_ui/report.png",
        "Markers comments",
        "",
        true
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
    " this project is undergoing a database refactor.",
    'https://github.com/pmarshall111/Football-Betting',
    // tslint:disable-next-line:max-line-length
    [new ProjectmediaModel(
      '/assets/football_betting/code.png',
      'Some of the Database tests',
      '', true)],
    "/assets/football_betting/code.png",

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
    " based on the screen size of the device it is being viewed on and also uses Web Workers to run any code that make take some time to complete." +
    " I uploaded the site to AWS and have registered the site to be crawled by Google.",
    'https://github.com/pmarshall111/PersonalSite',
    // tslint:disable-next-line:max-line-length
    [new ProjectmediaModel('/assets/personal_site/homepage.png',
      'Homepage',
      '', true)],
    "/assets/personal_site/homepage.png",
    "Languages: TypeScript, HTML, CSS\n"+
    "Frameworks: Angular, Bootstrap",
    true)
];
