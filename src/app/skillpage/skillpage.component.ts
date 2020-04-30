import { Component, OnInit } from '@angular/core';
import {skillsCollection} from './skills.collection';
import {SkillModel} from './skill.model';

@Component({
  selector: 'app-skillpage',
  templateUrl: './skillpage.component.html',
  styleUrls: ['./skillpage.component.css']
})
export class SkillpageComponent implements OnInit {
  skills: SkillModel[];

  constructor() { }

  ngOnInit(): void {
    this.skills = skillsCollection;
  }

}
