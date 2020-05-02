import {Component, Input, OnInit} from '@angular/core';
import {ProjectModel} from '../project.model';

@Component({
  selector: 'app-projecthighlight',
  templateUrl: './projecthighlight.component.html',
  styleUrls: ['./projecthighlight.component.css']
})
export class ProjecthighlightComponent implements OnInit {
  @Input() project: ProjectModel

  constructor() { }

  ngOnInit(): void {
  }

}
