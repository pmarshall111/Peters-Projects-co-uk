export class LibraryModel {
  private readonly _name: String;
  private readonly _desc: String;

  constructor(name: String, desc: String) {
    this._name = name;
    this._desc = desc;
  }

  get name(): String {
    return this._name;
  }

  get desc(): String {
    return this._desc;
  }
}
