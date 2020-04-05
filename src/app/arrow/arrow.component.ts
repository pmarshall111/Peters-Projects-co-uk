import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../projectpage/project.service';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent implements OnInit {
  @Input() isLeft: boolean;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  onChangeSelectedProject() {
    const currentIndex = this.projectService.getIndexSnapshot();
    const totalProjects = this.projectService.getAllProjects().length;
    let nextIndex = (this.isLeft ? currentIndex-1 : currentIndex+1) % totalProjects;
    if (nextIndex < 0) {
      nextIndex = totalProjects-1;
    }
    this.projectService.selectProject(nextIndex);
  }

}
