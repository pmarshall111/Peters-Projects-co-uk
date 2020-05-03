import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProjectModel} from '../project.model';
import {ProjectService} from '../project.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-projecthighlight',
  templateUrl: './projecthighlight.component.html',
  styleUrls: ['./projecthighlight.component.css']
})
export class ProjecthighlightComponent implements OnInit, OnDestroy {
  @Input() project: ProjectModel;
  private subscription: Subscription;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.subscription = this.projectService.selectedProject.subscribe(data => {
      this.project = data;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  nextProblem() {
    this.projectService.nextProject();
  }

  prevProblem() {
    this.projectService.prevProject();
  }

}
