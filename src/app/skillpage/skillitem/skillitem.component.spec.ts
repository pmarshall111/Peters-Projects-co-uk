import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillitemComponent } from './skillitem.component';

describe('SkillitemComponent', () => {
  let component: SkillitemComponent;
  let fixture: ComponentFixture<SkillitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
