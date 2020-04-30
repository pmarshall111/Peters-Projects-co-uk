import {LibraryModel} from './library.model';
import {SkillModel} from './skill.model';

export const skillsCollection =
  [
    new SkillModel("Java", [
      new LibraryModel("JavaFX", "A library for creating Desktop applications."),
      new LibraryModel("HtmlUnit", "A web scraping library."),
      new LibraryModel("JUnit", "A testing library."),
      new LibraryModel("JDBC", "A library that allows communication with databases from Java.")
    ]),
    new SkillModel("JavaScript", [
      new LibraryModel("TypeScript", "A language that allows type checking in JavaScript."),
      new LibraryModel("Angular", "A framework to speed up the front end development process.")
    ]),
    new SkillModel("Databases", [
      new LibraryModel("Sqlite3", "A relational database based on the SQL")
    ]),
    new SkillModel("Operating Systems", [
      new LibraryModel("Linux", "An open source, UNIX based operating system."),
      new LibraryModel("Windows", "A proprietary operating system developed by Microsoft.")
])
]
