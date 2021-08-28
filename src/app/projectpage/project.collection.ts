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
        "Marker's comments",
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
    "This app uses a neural network to predict the probabilities of results of football matches. If these probabilities " +
    "predicted by the app are" +
    " higher than the probabilities offered by betting companies, a bet is automatically placed for me. The model is trained on" +
    " over 8000 games with data scraped from different sources and then combined. Contains 46 tests to keep the process as accurate" +
    " as possible.",
    'https://github.com/pmarshall111/Football-Betting',
    // tslint:disable-next-line:max-line-length
    [new ProjectmediaModel(
      '/assets/football_betting/code.png',
      'Some of the Database tests',
      '', true)],
    "/assets/football_betting/code.png",
    "Languages: Java, SQL\n" +
    "Frameworks: JUnit, Selenium, HtmlUnit, DeepLearning4J, JDBC\n"+
    "Database: MySQL",
    true),
  new ProjectModel(
    'Peter\'s Projects',
    'Website',
    "This website was made to showcase previous projects and problems I've tackled in a presentable and easy to digest way. However, " +
    "I also wanted the website to be a piece to show off" +
    " on it's own merit, so I included some colliding balls on the landing page that use the proper equations for elastic collisions to calculate " +
    "trajectories. " +
    "Usability was improved by making the website responsive " +
    "and also running any time consuming code in Web Workers so that user events are not blocked." +
    " Finally, I uploaded the site onto the cloud using AWS (S3, Route53, CloudFront and ACM) and enabled the content to be sent securely through HTTPS.",
    'https://github.com/pmarshall111/PersonalSite',
    // tslint:disable-next-line:max-line-length
    [new ProjectmediaModel('/assets/personal_site/homepage.png',
      'Homepage',
      '', true)],
    "/assets/personal_site/homepage.png",
    "Languages: TypeScript, HTML, CSS\n"+
    "Frameworks: Angular, Bootstrap\n"+
    "Cloud: AWS",
    true)
];
