import {ProjectModel} from './project.model';
import {BehaviorSubject, Subject} from 'rxjs';
import { Injectable } from '@angular/core';
import {projects} from './projects.collection';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: ProjectModel[] = projects;
  private projectIndex: number = 0;
  selectedProject = new BehaviorSubject<ProjectModel>(this.projects[this.projectIndex]);

  selectProject(index: number) {
    this.projectIndex = index;
    this.selectedProject.next(this.projects[this.projectIndex]);
  }

  getAllProjects() {
    return this.projects.slice();
  }

  nextProject() {
    if (this.projectIndex < this.projects.length-1) {
      this.projectIndex++;
    } else {
      this.projectIndex = 0
    }
    this.selectedProject.next(this.projects[this.projectIndex]);
  }

  prevProject() {
    if (this.projectIndex > 0) {
      this.projectIndex--;
    } else {
      this.projectIndex = this.projects.length-1;
    }
    this.selectedProject.next(this.projects[this.projectIndex]);
  }

}
