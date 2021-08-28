import {LibraryModel} from './library.model';
import {SkillModel} from './skill.model';

export const skillsCollection =
  [
    new SkillModel("Java", [
      new LibraryModel("Kotlin", "A language built on the JVM."),
      new LibraryModel("Spring", "A library used to streamline the development of APIs."),
      new LibraryModel("JUnit", "A unit testing library.")
    ]),
    new SkillModel("JavaScript", [
      new LibraryModel("TypeScript", "A language that allows type checking in JavaScript. This website is written in TypeScript!"),
      new LibraryModel("React", "A front-end framework to speed up development."),
      new LibraryModel("Angular", "A front-end framework to speed up development. This website is written in Angular!")
    ]),
    new SkillModel("Databases", [
      new LibraryModel("Kafka", "An Event Streaming platform that also acts as a database."),
      new LibraryModel("MariaDB", "An Open Source relational database based on MySQL."),
      new LibraryModel("Firestore", "A NoSQL database.")
    ]),
    new SkillModel("Ops", [
      new LibraryModel("Debian", "An open source, UNIX based operating system."),
      new LibraryModel("Docker", "An open source platform for delivering applications in containers."),
      new LibraryModel("Kubernetes", "An open source platform for managing containers."),
      new LibraryModel("AWS", "A cloud platform.")
])
]
