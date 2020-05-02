import {Component, HostListener, OnInit} from '@angular/core';
import {ProjectService} from './project.service';
import {ProjectModel} from './project.model';
import {ProjectInfoModel} from './projectInfo.model';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.css']
})
export class ProjectpageComponent implements OnInit {
  projects: ProjectModel[];
  selectedProject: ProjectModel;

  constructor(private projectService: ProjectService ) { }

  ngOnInit(): void {
    this.projects = this.projectService.getAllProjects();
    this.selectedProject = this.projects[0];
  }

  onChangeProject(project: ProjectModel) {
    this.selectedProject = project;
  }
}
