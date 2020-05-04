import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {skillsCollection} from './skills.collection';
import {SkillModel} from './skill.model';

@Component({
  selector: 'app-skillpage',
  templateUrl: './skillpage.component.html',
  styleUrls: ['./skillpage.component.css']
})
export class SkillpageComponent implements OnInit, AfterViewInit {
  @ViewChild('skillsContainer') skillsContainer: ElementRef<HTMLDivElement>;
  eachContainerWidth: number;
  skills: SkillModel[];

  constructor() { }

  ngOnInit(): void {
    this.skills = skillsCollection;
  }

  ngAfterViewInit(): void {
    this.onResize();
  }


  @HostListener("window:resize")
  onResize() {
    this.eachContainerWidth = this.skillsContainer.nativeElement.getBoundingClientRect().width/this.skills.length;
  }

}
