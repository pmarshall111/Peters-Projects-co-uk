export class ProjectmediaModel {
  public link: string;
  public title: string;
  public description: string;
  public isImage: boolean;

  constructor(link: string, title: string, description: string, isImage: boolean) {
    this.link = link;
    this.title = title;
    this.description = description;
    this.isImage = isImage;
  }
}
