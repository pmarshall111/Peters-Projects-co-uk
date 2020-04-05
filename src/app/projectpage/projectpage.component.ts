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
  projectCategory: ProjectInfoModel;
  styles: string[];
  stylesSelected: string[];
  builtWith: {title: string, count: number, selected: boolean}[];
  hoveredTechnology: string;
  shiftDown: boolean;
  indexOfLastClicked: number;

  constructor(private projectService: ProjectService ) { }

  ngOnInit(): void {
    this.projects = this.projectService.getAllProjects();
    this.projectService.selectedProject.subscribe(index => {
      this.selectedProject = this.projectService.getProject(index);
    })
    this.styles = [
      "btn-outline-primary",
      "btn-outline-secondary",
      "btn-outline-success",
      "btn-outline-danger",
      "btn-outline-warning",
      "btn-outline-info",
      "btn-outline-dark"
    ]
    this.stylesSelected = [
      "btn-primary",
      "btn-secondary",
      "btn-success",
      "btn-danger",
      "btn-warning",
      "btn-info",
      "btn-dark"
    ]
    this.getTechnologies();
    this.projectCategory = this.selectedProject.info[0];
    // this.shiftDown = false;
    // this.indexOfLastClicked = -1;
  }

  // @HostListener('window:keydown', ['$event'])
  // handleKeyDown(event: KeyboardEvent) {
  //   if (event.shiftKey) {
  //     this.shiftDown = true;
  //   }
  // }
  // @HostListener('window:keyup', ['$event'])
  // handleKeyUp(event: KeyboardEvent) {
  //   if (event.shiftKey) {
  //     this.shiftDown = false;
  //     this.indexOfLastClicked = -1;
  //   }
  // }

  private getTechnologies() {
    let builtWithObj = this.projectService.getAllBuiltWith();
    this.builtWith = [];
    Object.keys(builtWithObj).forEach(key => {
      this.builtWith.push({
        title: key,
        count: builtWithObj[key],
        selected: true
      })
    });
    this.builtWith.sort((a: { count: number }, b: { count: number }) => {
      return b.count - a.count;
    })
  }

  onToggleActive(index) {
    this.builtWith[index].selected = !this.builtWith[index].selected;
    this.filterProjects();

    // console.log(this.shiftDown);
    // if (this.shiftDown && this.indexOfLastClicked != -1) {
    //   //looop through and ensure all will be opposite of one we are clicking.
    //   let [lowest, highest] = [index, this.indexOfLastClicked].sort((a,b) => b-a);
    //   for (let i = lowest; lowest <= highest; lowest++) {
    //     this.categories[index].selected = !this.categories[highest].selected;
    //   }
    // } else {
    //   this.categories[index].selected = !this.categories[index].selected;
    // }
    // if (this.shiftDown) {
    //   this.indexOfLastClicked = index;
    // }
  }

  filterProjects() {
    let projectsList = this.projectService.getAllProjects();
    projectsList.forEach(project => {
      let selectedTech = this.builtWith.filter(cat => cat.selected);
      for (let i = 0; i<selectedTech.length; i++) {
        if (project.builtWith.includes(selectedTech[i].title)) {
          project.show=true;
          return;
        }
      }
      project.show=false;
    })
    if (this.selectedProject === null || !this.selectedProject.show) {
      //we want to find a project that can be shown and display that
      let projAvailable = false;
      for (let i = 0; i<projectsList.length; i++) {
        if (projectsList[i].show) {
          projAvailable = true;
          this.selectedProject=projectsList[i];
          break;
        }
      }
      if (!projAvailable) {
        this.selectedProject = null;
      }
    }
  }

  onChangeCategory(index: number) {
    this.projectCategory = this.selectedProject.info[index];
  }

  onChangeProject(project: ProjectModel) {
    this.selectedProject = project;
    this.projectCategory = this.selectedProject.info[0];
  }

  onSelectAll() {
    this.builtWith.forEach(tech => tech.selected = true)
    this.filterProjects();
  }


  onDeselectAll() {
    this.builtWith.forEach(tech => tech.selected = false)
    this.filterProjects();
  }

  onHighlightProjects(tech: string) {
    this.hoveredTechnology = tech;
  }

  onDehighlightProjects() {
    this.hoveredTechnology = "";
  }

}
