import {ProjectModel} from './project.model';
import {ProjectmediaModel} from './projectmedia.model';

export const projects: ProjectModel[] = [
  new ProjectModel(
    'Football Betting Predictor',
    'Website',
    "This app is centred around a weighted logistic regression algorithm to predict the probabilities of results of football matches. If these probabilities " +
    "predicted by the app are" +
    " higher than the probabilities offered by betting companies, a bet is automatically placed. The model is trained on" +
    " over 13000 games with data scraped from different sources and then combined, and the project features over 70 tests comprising of unit, integration and system tests. Created ~50% profit on test data.",
    'https://github.com/pmarshall111/Football-Betting',
    // tslint:disable-next-line:max-line-length
    [
      new ProjectmediaModel(
      '/assets/football_betting/landingpage.png',
      'Website Landing page',
      '', true),
      new ProjectmediaModel(
        '/assets/football_betting/deploymentdiagram.png',
        'Deployment diagram',
        '', true)
    ],
    "/assets/football_betting/landingpage.png",
    "Languages: Java, TypeScript, CSS, SQL, Octave\n" +
    "Frameworks: React, D3.js, Spring Boot, JUnit, TestContainers, Terraform, Ansible\n"+
    "Database: MariaDB\n"+
    "Deployment: EC2, RDS, Route 53, GitHub Actions\n"+
    "URL: https://football.petersprojects.co.uk",
    true),
  new ProjectModel(
    'Finch UI',
    'Desktop GUI',
    "This project is a desktop GUI that allows a robot to follow a light source, changing direction and also " +
    "adjusting speed based on its distance to the light. To make this project, I worked from a requirements specification, created a design " +
    "document and also designed unit tests to ensure the program worked correctly. The GUI component" +
    " displays live readings from the robot to the user, as well as summary graphs at the end to show how readings changed over time. " +
    "When marked at University, this project received a mark of 100/100, based on matching the requirements from the Requirement Specification, " +
    "adding additional requirements, code quality, use of OOP, Testing and UI quality.",
    'https://github.com/pmarshall111/FinchUI',
    // tslint:disable-next-line:max-line-length
    [
      new ProjectmediaModel('/assets/finch_ui/MainMenu.png',
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
    "/assets/finch_ui/MainMenu.png",
    "Languages: Java, CSS \n"+
    "Frameworks: JavaFX, JUnit",
    true),
  new ProjectModel(
    'Peter\'s Projects',
    'Website',
    "This website was made to showcase the main projects I've tackled in a presentable way. " +
    "The website is designed to be responsive " +
    "and also runs any time consuming code (in the Problems section) in Web Workers so that user events are not blocked." +
    " Finally, I uploaded the site onto the cloud using AWS (S3, Route53, CloudFront) and enabled the content to be served using HTTPS.",
    'https://github.com/pmarshall111/PersonalSite',
    // tslint:disable-next-line:max-line-length
    [new ProjectmediaModel('/assets/personal_site/homepage.png',
      'Homepage',
      '', true)],
    "/assets/personal_site/homepage.png",
    "Languages: TypeScript, HTML, CSS\n"+
    "Frameworks: Angular 13, Bootstrap\n"+
    "Deployment: Cloudfront, S3\n"+
    "URL: https://petersprojects.co.uk",
    true)
];
