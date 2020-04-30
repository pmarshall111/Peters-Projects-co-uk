import {LibraryModel} from './library.model';

export class SkillModel {
  name: String;
  libraries: LibraryModel[];

  constructor(name: String, libraries: LibraryModel[]) {
    this.name = name;
    this.libraries = libraries;
  }
}
