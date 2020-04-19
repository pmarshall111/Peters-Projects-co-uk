import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../projectpage/project.service';
import {ProjectModel} from '../../projectpage/project.model';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  selectedProject: number;
  projects: ProjectModel[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getAllProjects();
    this.projectService.selectedProject.subscribe(newSelected => {
      this.selectedProject = newSelected;
    })
  }

  onProjectClick(index: number) {
    this.projectService.selectProject(index);
  }

}
