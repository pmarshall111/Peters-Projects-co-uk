import {Component, Input, OnInit} from '@angular/core';
import {ProjectInfoModel} from '../projectInfo.model';

@Component({
  selector: 'app-projectinfo',
  templateUrl: './projectinfo.component.html',
  styleUrls: ['./projectinfo.component.css']
})
export class ProjectinfoComponent implements OnInit {
  @Input() info: ProjectInfoModel;
  shown: boolean;

  constructor() { }

  ngOnInit(): void {
    this.shown = this.info.title === "About"
  }

  onChangeShown() {
    this.shown = !this.shown;
  }

}
