import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ProjectService} from './project.service';
import {ProjectModel} from './project.model';
import {ProjectInfoModel} from './projectInfo.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.css']
})
export class ProjectpageComponent implements OnInit, OnDestroy {
  projects: ProjectModel[];
  selectedProject: ProjectModel;
  subscription: Subscription;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getAllProjects();
    this.subscription = this.projectService.selectedProject.subscribe(data => {
      this.selectedProject = data;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onChangeProject(index: number) {
    this.projectService.selectProject(index);
  }
}
