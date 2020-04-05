import {ProjectInfoModel} from './projectInfo.model';
import {ProjectimageModel} from './projectimage.model';

export class ProjectModel {
  public title: string;
  public blurb: string;
  public githubLink: string;
  public imgList: ProjectimageModel[];
  public info: ProjectInfoModel[];
  public builtWith: string[]
  public show;


  constructor(title: string, blurb: string, githubLink: string, imgList: ProjectimageModel[], info: ProjectInfoModel[], builtWith: string[], show) {
    this.title = title;
    this.blurb = blurb;
    this.githubLink = githubLink;
    this.imgList = imgList;
    this.info = info;
    this.builtWith = builtWith;
    this.show = show;
  }
}
