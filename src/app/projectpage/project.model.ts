import {ProjectmediaModel} from './projectmedia.model';

export class ProjectModel {
  public title: string;
  public blurb: string;
  public about: string;
  public githubLink: string;
  public media: ProjectmediaModel[];
  public previewImgLink: string;
  public builtWith: string;
  public show;


  constructor(title: string, blurb: string, about: string, githubLink: string, media: ProjectmediaModel[], previewImgLink: string,
              builtWith: string, show) {
    this.title = title;
    this.blurb = blurb;
    this.about = about;
    this.githubLink = githubLink;
    this.media = media;
    this.previewImgLink = previewImgLink;
    this.builtWith = builtWith;
    this.show = show;
  }
}
